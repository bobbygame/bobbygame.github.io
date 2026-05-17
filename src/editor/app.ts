import { levelNames } from '../content';
import { actionFromKeyboardKey } from '../game/actions';
import { loadAssetManifest, type AssetManifest, type ObjectAsset, type SpriteAnimation, type SpriteFrame } from '../game/assets';
import {
  createCommunityLevel,
  deleteCommunityLevel,
  getCommunityLevel,
  listCommunityLevels,
  saveCommunityLevel,
  type CommunityLevel,
  type CommunityLevelDifficulty,
} from '../game/communityLevel';
import { gameStateFromLevelDefinition } from '../game/levelAdapter';
import {
  editorGroupLabel,
  editorTileLabel,
  editorToolDescription,
  editorToolLabel,
  formatDiagnosticMessage,
  languageToggleLabel,
  languageToggleText,
  t,
  toggleLanguage,
} from '../game/i18n';
import type { LevelEntityDefinition } from '../game/levelDefinition';
import { loadLevelDefinition } from '../game/loader';
import { validateLevelDefinition } from '../game/levelValidation';
import { appUrl } from '../game/paths';
import { Renderer } from '../game/render';
import { GameSimulation } from '../game/simulation';
import { SpriteLoader } from '../game/sprites';
import {
  cloneCommunityLevel,
  createBlankLevel,
  createEntity,
  entityAt,
  entityTools,
  moveEntityToCell,
  nextEntityId,
  parseCommunityLevel,
  resizeLevel,
  tilePalette,
  toolForEntity,
  type EditorTool,
  type EntityTool,
} from './editorModel';

const ENTITY_STYLE: Record<string, { label: string; fill: string; stroke: string }> = {
  player: { label: 'P', fill: '#f7dc6f', stroke: '#7a5d10' },
  bornPlace: { label: 'S', fill: '#b7e4c7', stroke: '#2d6a4f' },
  wall: { label: 'W', fill: '#7d5a3a', stroke: '#322114' },
  carrot: { label: 'C', fill: '#f77f00', stroke: '#8a3f00' },
  channel: { label: 'X', fill: '#f5f3ff', stroke: '#4c1d95' },
  trap: { label: 'T', fill: '#ef4444', stroke: '#7f1d1d' },
  stone: { label: 'ST', fill: '#a7f3d0', stroke: '#047857' },
  stoneAngle: { label: 'A', fill: '#99f6e4', stroke: '#0f766e' },
  conveyorX: { label: '<>', fill: '#60a5fa', stroke: '#1d4ed8' },
  conveyorY: { label: '^v', fill: '#93c5fd', stroke: '#1e40af' },
  conveyorButton: { label: 'Y', fill: '#fde047', stroke: '#854d0e' },
  stoneButton: { label: 'R', fill: '#fca5a5', stroke: '#991b1b' },
  key: { label: 'K', fill: '#e0f2fe', stroke: '#0369a1' },
  lock: { label: 'L', fill: '#bae6fd', stroke: '#075985' },
};
const EDITOR_SYSTEM_FONT = 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

function q<T extends Element>(root: ParentNode, selector: string): T {
  const element = root.querySelector<T>(selector);
  if (!element) throw new Error(`Missing editor element: ${selector}`);
  return element;
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function sanitizeFileName(value: string) {
  return value.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'community-level';
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[char] ?? char);
}

export async function mountEditor(container: HTMLElement) {
  const editor = new LevelEditor(container);
  await editor.start();
}

class LevelEditor {
  private document: CommunityLevel = createBlankLevel();
  private activeTool: EditorTool = { type: 'select' };
  private selectedEntityId: number | null = null;
  private undoStack: CommunityLevel[] = [];
  private redoStack: CommunityLevel[] = [];
  private root!: HTMLDivElement;
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private inspector!: HTMLElement;
  private diagnosticsList!: HTMLElement;
  private stats!: HTMLElement;
  private librarySelect!: HTMLSelectElement;
  private libraryStatus!: HTMLElement;
  private fileInput!: HTMLInputElement;
  private assetObjectSelect!: HTMLSelectElement;
  private assetAnimationSelect!: HTMLSelectElement;
  private assetPreview!: HTMLCanvasElement;
  private assetPreviewCtx!: CanvasRenderingContext2D;
  private assetFrames!: HTMLElement;
  private assetFrameEditor!: HTMLElement;
  private assetMeta!: HTMLElement;
  private tooltip!: HTMLElement;
  private tooltipAnchor: HTMLElement | null = null;
  private pointerPainting = false;
  private pointerHistoryCaptured = false;
  private draggingEntityId: number | null = null;
  private assetManifest?: AssetManifest;
  private selectedAssetName = 'bobby';
  private selectedAssetAnimation = 'downStop';
  private selectedAssetFrameIndex = 0;
  private assetPreviewRaf = 0;
  private sprites?: SpriteLoader;
  private playtest?: {
    overlay: HTMLDivElement;
    simulation: GameSimulation;
    renderer: Renderer;
    raf: number;
    keyHandler: (event: KeyboardEvent) => void;
  };

  constructor(private readonly host: HTMLElement) {}

  async start() {
    this.host.className = 'editor-host';
    this.host.replaceChildren();
    this.root = document.createElement('div');
    this.root.className = 'level-editor';
    this.root.innerHTML = this.template();
    this.host.appendChild(this.root);

    this.canvas = q<HTMLCanvasElement>(this.root, '[data-editor-canvas]');
    const ctx = this.canvas.getContext('2d');
    if (!ctx) throw new Error('Canvas not supported');
    this.ctx = ctx;
    this.inspector = q(this.root, '[data-inspector]');
    this.diagnosticsList = q(this.root, '[data-diagnostics]');
    this.stats = q(this.root, '[data-stats]');
    this.librarySelect = q<HTMLSelectElement>(this.root, '[data-local-level]');
    this.libraryStatus = q(this.root, '[data-library-status]');
    this.fileInput = q<HTMLInputElement>(this.root, '[data-import-file]');
    this.assetObjectSelect = q<HTMLSelectElement>(this.root, '[data-asset-object]');
    this.assetAnimationSelect = q<HTMLSelectElement>(this.root, '[data-asset-animation]');
    this.assetPreview = q<HTMLCanvasElement>(this.root, '[data-asset-preview]');
    const assetPreviewCtx = this.assetPreview.getContext('2d');
    if (!assetPreviewCtx) throw new Error('Canvas not supported');
    this.assetPreviewCtx = assetPreviewCtx;
    this.assetFrames = q(this.root, '[data-asset-frames]');
    this.assetFrameEditor = q(this.root, '[data-asset-frame-editor]');
    this.assetMeta = q(this.root, '[data-asset-meta]');
    this.tooltip = q(this.root, '[data-editor-tooltip]');

    await this.preloadSprites();
    this.bindEvents();
    this.fillDocumentFields();
    this.renderLibraryOptions();
    this.renderAll();
    this.startAssetPreviewLoop();
  }

  private async preloadSprites() {
    try {
      this.assetManifest = structuredClone(await loadAssetManifest());
      this.sprites = new SpriteLoader(this.assetManifest);
      await this.sprites.preloadAll();
    } catch (error) {
      console.warn('Editor sprite preload failed; falling back to symbolic rendering.', error);
      this.assetManifest = undefined;
      this.sprites = undefined;
    }
  }

  private template() {
    const levelOptions = levelNames.map((name) => `<option value="${name}">${name}</option>`).join('');
    const tileButtons = tilePalette.map((tile) => `
      <button class="editor-chip editor-chip--tile" type="button" data-tool="tile" data-tile-id="${tile.id}" title="${escapeHtml(editorTileLabel(tile.id))}">
        <canvas class="editor-tool-preview" width="28" height="28" data-tile-preview="${tile.id}" aria-hidden="true"></canvas>
        <span>${tile.id}</span>
      </button>
    `).join('');
    const groups = Array.from(new Set(entityTools.map((tool) => tool.group)));
    const entitySections = groups.map((group) => {
      const entityButtons = entityTools.filter((tool) => tool.group === group).map((tool) => {
        const label = editorToolLabel(tool.tool);
        const description = editorToolDescription(tool.tool);
        const tooltipLabel = `${label} (${tool.typeName})`;
        const ariaLabel = `${tooltipLabel}: ${description}`;
        return `
      <button class="editor-chip" type="button" data-tool="entity" data-entity-tool="${tool.tool}" data-tooltip-title="${escapeHtml(tooltipLabel)}" data-tooltip-body="${escapeHtml(description)}" aria-label="${escapeHtml(ariaLabel)}">
        <canvas class="editor-tool-preview" width="28" height="28" data-entity-preview="${tool.tool}" aria-hidden="true"></canvas>
        <span>${escapeHtml(label)}</span>
      </button>
      `;
      }).join('');
      return `
        <section>
          <h2 data-editor-group="${escapeHtml(group)}">${escapeHtml(editorGroupLabel(group))}</h2>
          <div class="editor-chip-grid">${entityButtons}</div>
        </section>
      `;
    }).join('');

    return `
      <header class="editor-topbar">
        <div class="editor-brand">
          <strong data-i18n="editor.brand">${t('editor.brand')}</strong>
          <span data-stats></span>
        </div>
        <div class="editor-actions">
          <select data-built-in-level data-i18n-aria-label="editor.aria.builtInLevel" aria-label="${t('editor.aria.builtInLevel')}">${levelOptions}</select>
          <button type="button" data-action="load-built-in" data-i18n="editor.actions.loadBuiltIn">${t('editor.actions.loadBuiltIn')}</button>
          <select data-local-level data-i18n-aria-label="editor.aria.localLevel" aria-label="${t('editor.aria.localLevel')}"></select>
          <button type="button" data-action="load-local" data-i18n="editor.actions.openLocal">${t('editor.actions.openLocal')}</button>
          <button type="button" data-action="save-local" data-i18n="editor.actions.saveLocal">${t('editor.actions.saveLocal')}</button>
          <button type="button" data-action="delete-local" data-i18n="editor.actions.deleteLocal">${t('editor.actions.deleteLocal')}</button>
          <button type="button" data-action="open-game" data-i18n="editor.actions.openGame">${t('editor.actions.openGame')}</button>
          <button type="button" data-action="new" data-i18n="editor.actions.new">${t('editor.actions.new')}</button>
          <button type="button" data-action="undo" data-history="undo" data-i18n="editor.actions.undo">${t('editor.actions.undo')}</button>
          <button type="button" data-action="redo" data-history="redo" data-i18n="editor.actions.redo">${t('editor.actions.redo')}</button>
          <button type="button" data-action="import" data-i18n="editor.actions.import">${t('editor.actions.import')}</button>
          <button type="button" data-action="export" data-i18n="editor.actions.export">${t('editor.actions.export')}</button>
          <button type="button" data-action="language" data-language-toggle aria-label="${languageToggleLabel()}">${languageToggleText()}</button>
          <button type="button" data-action="playtest" class="editor-primary" data-i18n="editor.actions.playtest">${t('editor.actions.playtest')}</button>
          <a href="${appUrl()}" class="editor-link" data-i18n="editor.link.game">${t('editor.link.game')}</a>
          <input data-import-file type="file" accept="application/json,.json,.bobby-level.json" hidden />
        </div>
      </header>
      <main class="editor-shell">
        <aside class="editor-panel editor-tools">
          <section>
            <h2 data-i18n="editor.tools.heading">${t('editor.tools.heading')}</h2>
            <button class="editor-chip" type="button" data-tool="select" data-i18n="editor.tools.select">${t('editor.tools.select')}</button>
            <button class="editor-chip" type="button" data-tool="erase" data-i18n="editor.tools.erase">${t('editor.tools.erase')}</button>
          </section>
          <section>
            <h2 data-i18n="editor.tiles.heading">${t('editor.tiles.heading')}</h2>
            <div class="editor-chip-grid">${tileButtons}</div>
          </section>
          ${entitySections}
        </aside>
        <section class="editor-workspace">
          <div class="editor-canvas-frame">
            <canvas data-editor-canvas></canvas>
          </div>
        </section>
        <aside class="editor-panel editor-inspector">
          <section class="editor-fieldset">
            <h2 data-i18n="editor.level.heading">${t('editor.level.heading')}</h2>
            <p data-library-status class="editor-muted"></p>
            <label><span data-i18n="editor.level.title">${t('editor.level.title')}</span><input data-meta="title" /></label>
            <label><span data-i18n="editor.level.author">${t('editor.level.author')}</span><input data-meta="author" /></label>
            <label><span data-i18n="editor.level.name">${t('editor.level.name')}</span><input data-level-field="name" /></label>
            <label><span data-i18n="editor.level.difficulty">${t('editor.level.difficulty')}</span>
              <select data-meta="difficulty">
                <option value="easy" data-i18n="editor.difficulty.easy">${t('editor.difficulty.easy')}</option>
                <option value="normal" data-i18n="editor.difficulty.normal">${t('editor.difficulty.normal')}</option>
                <option value="hard" data-i18n="editor.difficulty.hard">${t('editor.difficulty.hard')}</option>
                <option value="expert" data-i18n="editor.difficulty.expert">${t('editor.difficulty.expert')}</option>
              </select>
            </label>
            <label><span data-i18n="editor.level.tags">${t('editor.level.tags')}</span><input data-meta="tags" /></label>
            <div class="editor-field-row">
              <label><span data-i18n="editor.level.cols">${t('editor.level.cols')}</span><input data-size-field="cols" type="number" min="8" max="32" /></label>
              <label><span data-i18n="editor.level.rows">${t('editor.level.rows')}</span><input data-size-field="rows" type="number" min="8" max="32" /></label>
            </div>
            <label><span data-i18n="editor.level.requiredCarrots">${t('editor.level.requiredCarrots')}</span><input data-level-field="requiredCarrots" type="number" min="0" /></label>
          </section>
          <section class="editor-fieldset">
            <h2 data-i18n="editor.asset.heading">${t('editor.asset.heading')}</h2>
            <label><span data-i18n="editor.asset.object">${t('editor.asset.object')}</span><select data-asset-field="object" data-asset-object></select></label>
            <label><span data-i18n="editor.asset.animation">${t('editor.asset.animation')}</span><select data-asset-field="animation" data-asset-animation></select></label>
            <div class="editor-asset-preview">
              <canvas data-asset-preview width="128" height="128"></canvas>
            </div>
            <p data-asset-meta class="editor-muted"></p>
            <div data-asset-frames class="editor-frame-strip"></div>
            <div class="editor-field-row">
              <label><span data-i18n="editor.asset.speed">${t('editor.asset.speed')}</span><input data-asset-field="speed" type="number" min="0" step="1" /></label>
              <label><span data-i18n="editor.asset.loop">${t('editor.asset.loop')}</span>
                <select data-asset-field="looping">
                  <option value="true" data-i18n="editor.asset.loopValue">${t('editor.asset.loopValue')}</option>
                  <option value="false" data-i18n="editor.asset.onceValue">${t('editor.asset.onceValue')}</option>
                </select>
              </label>
            </div>
            <div data-asset-frame-editor></div>
            <button type="button" data-action="export-assets" class="editor-export-button" data-i18n="editor.actions.exportAssets">${t('editor.actions.exportAssets')}</button>
          </section>
          <section data-inspector class="editor-fieldset"></section>
          <section class="editor-fieldset">
            <h2 data-i18n="editor.diagnostics.heading">${t('editor.diagnostics.heading')}</h2>
            <div data-diagnostics class="editor-diagnostics"></div>
          </section>
        </aside>
      </main>
      <div class="editor-tooltip" data-editor-tooltip role="tooltip" hidden></div>
    `;
  }

  private bindEvents() {
    this.root.addEventListener('pointerover', (event) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>('[data-tooltip-title]') : null;
      if (target) this.showTooltip(target);
    });
    this.root.addEventListener('pointerout', (event) => {
      if (!this.tooltipAnchor) return;
      const related = event.relatedTarget instanceof Node ? event.relatedTarget : null;
      if (related && this.tooltipAnchor.contains(related)) return;
      this.hideTooltip();
    });
    this.root.addEventListener('focusin', (event) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>('[data-tooltip-title]') : null;
      if (target) this.showTooltip(target);
    });
    this.root.addEventListener('focusout', () => this.hideTooltip());

    this.root.addEventListener('click', (event) => {
      const target = event.target instanceof Element ? event.target : null;
      const frameButton = target?.closest<HTMLButtonElement>('[data-asset-frame]');
      if (frameButton) {
        this.selectedAssetFrameIndex = Number(frameButton.dataset.assetFrame ?? 0);
        this.renderAssetPanel();
        return;
      }

      const button = target?.closest<HTMLButtonElement | HTMLAnchorElement>('[data-action], [data-tool]');
      if (!button || button instanceof HTMLAnchorElement) return;

      const tool = button.dataset.tool;
      if (tool) {
        this.setToolFromButton(button, tool);
        return;
      }

      const action = button.dataset.action;
      if (action) void this.handleAction(action);
    });

    this.root.addEventListener('input', (event) => {
      const target = event.target;
      if (!(target instanceof HTMLInputElement || target instanceof HTMLSelectElement)) return;
      if (target.dataset.assetField || target.dataset.assetFrameField) {
        this.handleAssetFieldInput(target);
        return;
      }
      this.handleFieldInput(target);
    });

    this.fileInput.addEventListener('change', () => {
      const file = this.fileInput.files?.[0];
      if (file) void this.importFile(file);
      this.fileInput.value = '';
    });

    window.addEventListener('keydown', (event) => {
      if (!(event.metaKey || event.ctrlKey)) return;
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLSelectElement || event.target instanceof HTMLTextAreaElement) return;
      const key = event.key.toLowerCase();
      if (key === 'z' && !event.shiftKey) {
        event.preventDefault();
        this.undo();
      }
      if (key === 'y' || (key === 'z' && event.shiftKey)) {
        event.preventDefault();
        this.redo();
      }
    });

    this.canvas.addEventListener('pointerdown', (event) => {
      this.pointerPainting = true;
      this.pointerHistoryCaptured = false;
      this.draggingEntityId = null;
      this.handleCanvasPointer(event, 'down');
      this.canvas.setPointerCapture(event.pointerId);
    });
    this.canvas.addEventListener('pointermove', (event) => {
      if (this.pointerPainting && (this.activeTool.type === 'tile' || this.activeTool.type === 'erase' || this.draggingEntityId !== null)) {
        this.handleCanvasPointer(event, 'move');
      }
    });
    this.canvas.addEventListener('pointerup', () => {
      this.pointerPainting = false;
      this.pointerHistoryCaptured = false;
      this.draggingEntityId = null;
    });
    this.canvas.addEventListener('pointercancel', () => {
      this.pointerPainting = false;
      this.pointerHistoryCaptured = false;
      this.draggingEntityId = null;
    });
  }

  private showTooltip(anchor: HTMLElement) {
    this.tooltipAnchor = anchor;
    const title = anchor.dataset.tooltipTitle ?? '';
    const body = anchor.dataset.tooltipBody ?? '';
    this.tooltip.innerHTML = `
      <strong>${escapeHtml(title)}</strong>
      <span>${escapeHtml(body)}</span>
    `;
    this.tooltip.hidden = false;
    this.positionTooltip(anchor);
  }

  private hideTooltip() {
    this.tooltipAnchor = null;
    this.tooltip.hidden = true;
  }

  private positionTooltip(anchor: HTMLElement) {
    const gap = 10;
    const margin = 8;
    const anchorRect = anchor.getBoundingClientRect();
    const tooltipRect = this.tooltip.getBoundingClientRect();
    let left = anchorRect.right + gap;
    if (left + tooltipRect.width > window.innerWidth - margin) {
      left = anchorRect.left - tooltipRect.width - gap;
    }
    left = clamp(left, margin, Math.max(margin, window.innerWidth - tooltipRect.width - margin));

    let top = anchorRect.top + (anchorRect.height - tooltipRect.height) / 2;
    top = clamp(top, margin, Math.max(margin, window.innerHeight - tooltipRect.height - margin));

    this.tooltip.style.left = `${left}px`;
    this.tooltip.style.top = `${top}px`;
  }

  private renderLocalizedText() {
    for (const element of this.root.querySelectorAll<HTMLElement>('[data-i18n]')) {
      const key = element.dataset.i18n;
      if (key) element.textContent = t(key);
    }

    for (const element of this.root.querySelectorAll<HTMLElement>('[data-i18n-aria-label]')) {
      const key = element.dataset.i18nAriaLabel;
      if (key) element.setAttribute('aria-label', t(key));
    }

    const languageButton = this.root.querySelector<HTMLButtonElement>('[data-language-toggle]');
    if (languageButton) {
      languageButton.textContent = languageToggleText();
      languageButton.setAttribute('aria-label', languageToggleLabel());
    }

    for (const heading of this.root.querySelectorAll<HTMLElement>('[data-editor-group]')) {
      const group = heading.dataset.editorGroup;
      if (group) heading.textContent = editorGroupLabel(group);
    }

    for (const button of this.root.querySelectorAll<HTMLButtonElement>('[data-entity-tool]')) {
      const tool = button.dataset.entityTool;
      if (!tool) continue;
      const definition = toolForEntity(tool);
      const label = editorToolLabel(tool);
      const description = editorToolDescription(tool);
      const tooltipLabel = `${label} (${definition.typeName})`;
      button.dataset.tooltipTitle = tooltipLabel;
      button.dataset.tooltipBody = description;
      button.setAttribute('aria-label', `${tooltipLabel}: ${description}`);
      const labelElement = button.querySelector('span');
      if (labelElement) labelElement.textContent = label;
    }

    for (const button of this.root.querySelectorAll<HTMLButtonElement>('[data-tile-id]')) {
      const tileId = Number(button.dataset.tileId ?? 0);
      button.title = editorTileLabel(tileId);
    }

    if (this.tooltipAnchor) this.showTooltip(this.tooltipAnchor);
  }

  private async handleAction(action: string) {
    if (action === 'language') {
      toggleLanguage();
      this.renderLocalizedText();
      this.renderLibraryOptions(this.librarySelect.value || this.document.id);
      this.renderAll();
      return;
    }
    if (action === 'new') {
      this.pushHistory();
      this.document = createBlankLevel();
      this.selectedEntityId = null;
      this.fillDocumentFields();
      this.renderLibraryOptions();
      this.renderAll();
      return;
    }
    if (action === 'load-built-in') {
      const select = q<HTMLSelectElement>(this.root, '[data-built-in-level]');
      const level = await loadLevelDefinition(select.value);
      this.pushHistory();
      this.document = createCommunityLevel(structuredClone(level), {
        id: `builtin-${level.name}`,
        title: level.name,
        author: 'official',
        tags: ['official'],
      });
      this.selectedEntityId = null;
      this.fillDocumentFields();
      this.renderLibraryOptions();
      this.renderAll();
      return;
    }
    if (action === 'load-local') {
      const level = getCommunityLevel(this.librarySelect.value);
      if (!level) return;
      this.pushHistory();
      this.document = cloneCommunityLevel(level);
      this.selectedEntityId = null;
      this.fillDocumentFields();
      this.renderLibraryOptions();
      this.renderAll();
      return;
    }
    if (action === 'save-local') {
      this.saveCurrentToLibrary();
      return;
    }
    if (action === 'delete-local') {
      if (!this.librarySelect.value) return;
      deleteCommunityLevel(this.librarySelect.value);
      this.renderLibraryOptions();
      return;
    }
    if (action === 'open-game') {
      this.saveCurrentToLibrary();
      window.location.href = appUrl(`?community=${encodeURIComponent(this.document.id)}`);
      return;
    }
    if (action === 'undo') {
      this.undo();
      return;
    }
    if (action === 'redo') {
      this.redo();
      return;
    }
    if (action === 'import') {
      this.fileInput.click();
      return;
    }
    if (action === 'export') {
      this.exportCurrentLevel();
      return;
    }
    if (action === 'export-assets') {
      this.exportAssetManifest();
      return;
    }
    if (action === 'playtest') {
      await this.startPlaytest();
    }
  }

  private pushHistory() {
    this.undoStack.push(cloneCommunityLevel(this.document));
    if (this.undoStack.length > 80) this.undoStack.shift();
    this.redoStack = [];
    this.renderHistoryState();
  }

  private undo() {
    const previous = this.undoStack.pop();
    if (!previous) return;
    this.redoStack.push(cloneCommunityLevel(this.document));
    this.document = previous;
    this.selectedEntityId = null;
    this.fillDocumentFields();
    this.renderLibraryOptions();
    this.renderAll();
  }

  private redo() {
    const next = this.redoStack.pop();
    if (!next) return;
    this.undoStack.push(cloneCommunityLevel(this.document));
    this.document = next;
    this.selectedEntityId = null;
    this.fillDocumentFields();
    this.renderLibraryOptions();
    this.renderAll();
  }

  private renderHistoryState() {
    q<HTMLButtonElement>(this.root, '[data-history="undo"]').disabled = this.undoStack.length === 0;
    q<HTMLButtonElement>(this.root, '[data-history="redo"]').disabled = this.redoStack.length === 0;
  }

  private saveCurrentToLibrary() {
    saveCommunityLevel(this.document);
    this.renderLibraryOptions(this.document.id);
    this.libraryStatus.textContent = t('editor.library.saved', { title: this.document.title });
  }

  private renderLibraryOptions(selectedId = this.document.id) {
    const levels = listCommunityLevels();
    this.librarySelect.innerHTML = levels.length === 0
      ? `<option value="">${t('editor.library.emptyOption')}</option>`
      : levels.map((level) => `<option value="${escapeHtml(level.id)}">${escapeHtml(level.title)}</option>`).join('');
    this.librarySelect.value = levels.some((level) => level.id === selectedId) ? selectedId : (levels[0]?.id ?? '');
    this.libraryStatus.textContent = levels.length === 0
      ? t('editor.library.empty')
      : t(levels.length === 1 ? 'editor.library.available.one' : 'editor.library.available.other', { count: levels.length });
    this.renderHistoryState();
  }

  private setToolFromButton(button: HTMLElement, tool: string) {
    if (tool === 'select') this.activeTool = { type: 'select' };
    if (tool === 'erase') this.activeTool = { type: 'erase' };
    if (tool === 'tile') this.activeTool = { type: 'tile', tileId: Number(button.dataset.tileId ?? 0) };
    if (tool === 'entity') {
      const entity = button.dataset.entityTool;
      if (entity) this.activeTool = { type: 'entity', entity: entity as EntityTool };
    }
    this.renderToolState();
  }

  private handleFieldInput(target: HTMLInputElement | HTMLSelectElement) {
    const meta = target.dataset.meta;
    const levelField = target.dataset.levelField;
    const sizeField = target.dataset.sizeField;
    const entityField = target.dataset.entityField;

    if (!meta && !levelField && !sizeField && !entityField) return;
    this.pushHistory();

    if (meta === 'title') this.document.title = target.value;
    if (meta === 'author') this.document.author = target.value;
    if (meta === 'difficulty') this.document.difficulty = target.value as CommunityLevelDifficulty;
    if (meta === 'tags') this.document.tags = target.value.split(',').map((tag) => tag.trim()).filter(Boolean);

    if (levelField === 'name') this.document.level.name = target.value || 'community-map';
    if (levelField === 'requiredCarrots') this.document.level.requiredCarrots = Math.max(0, Number(target.value || 0));

    if (sizeField === 'cols' || sizeField === 'rows') {
      const cols = clamp(Number(q<HTMLInputElement>(this.root, '[data-size-field="cols"]').value || 16), 8, 32);
      const rows = clamp(Number(q<HTMLInputElement>(this.root, '[data-size-field="rows"]').value || 16), 8, 32);
      resizeLevel(this.document.level, cols, rows);
    }

    if (entityField) this.updateSelectedEntity(entityField, target.value);

    this.renderCanvas();
    this.renderInspector();
    this.renderDiagnostics();
    this.renderStats();
  }

  private updateSelectedEntity(field: string, value: string) {
    const entity = this.selectedEntity();
    if (!entity) return;

    if (field === 'sign') entity.data.sign = Number(value);
    if (field === 'direction1') {
      entity.data.direction1 = Number(value);
      if (entity.kind === 'conveyorX') entity.data.isLeft = Number(value) === 0;
      if (entity.kind === 'conveyorY') entity.data.isUp = Number(value) === 0;
    }
    if (field === 'open') entity.data.open = Number(value);
    if (field === 'isSharp') entity.data.isSharp = Number(value);
    if (field === 'angle') entity.angle = Number(value);
  }

  private ensurePointerHistory() {
    if (this.pointerHistoryCaptured) return;
    this.pushHistory();
    this.pointerHistoryCaptured = true;
  }

  private handleCanvasPointer(event: PointerEvent, phase: 'down' | 'move') {
    const cell = this.cellFromPointer(event);
    if (!cell) return;
    const { col, row } = cell;
    const level = this.document.level;
    const tileIndex = row * level.tilemap.cols + col;

    if (this.activeTool.type === 'tile') {
      this.ensurePointerHistory();
      level.tilemap.data[tileIndex] = this.activeTool.tileId;
      this.renderCanvas();
      return;
    }

    if (this.activeTool.type === 'erase') {
      this.ensurePointerHistory();
      const entity = entityAt(level, col, row);
      if (entity) {
        level.entities = level.entities.filter((candidate) => candidate.id !== entity.id);
        if (this.selectedEntityId === entity.id) this.selectedEntityId = null;
      } else {
        level.tilemap.data[tileIndex] = 0;
      }
      this.renderAll();
      return;
    }

    if (this.activeTool.type === 'select') {
      if (phase === 'down') {
        const entity = entityAt(level, col, row);
        this.selectedEntityId = entity?.id ?? null;
        this.draggingEntityId = entity?.id ?? null;
        this.renderAll();
        return;
      }

      if (this.draggingEntityId !== null) {
        const entity = level.entities.find((candidate) => candidate.id === this.draggingEntityId);
        if (!entity) return;
        if (entity.cell.col === col && entity.cell.row === row) return;
        this.ensurePointerHistory();
        moveEntityToCell(entity, col, row);
      }
      this.renderAll();
      return;
    }

    this.ensurePointerHistory();
    const definition = toolForEntity(this.activeTool.entity);
    if (definition.unique) {
      level.entities = level.entities.filter((entity) => entity.kind !== definition.kind);
    }
    const entity = createEntity(definition, col, row, nextEntityId(level));
    level.entities.push(entity);
    this.selectedEntityId = entity.id;
    this.renderAll();
  }

  private cellFromPointer(event: PointerEvent) {
    const rect = this.canvas.getBoundingClientRect();
    const x = (event.clientX - rect.left) * (this.canvas.width / rect.width);
    const y = (event.clientY - rect.top) * (this.canvas.height / rect.height);
    const col = Math.floor(x / this.document.level.tilemap.tileSize);
    const row = Math.floor(y / this.document.level.tilemap.tileSize);
    if (col < 0 || row < 0 || col >= this.document.level.tilemap.cols || row >= this.document.level.tilemap.rows) return null;
    return { col, row };
  }

  private fillDocumentFields() {
    q<HTMLInputElement>(this.root, '[data-meta="title"]').value = this.document.title;
    q<HTMLInputElement>(this.root, '[data-meta="author"]').value = this.document.author;
    q<HTMLSelectElement>(this.root, '[data-meta="difficulty"]').value = this.document.difficulty;
    q<HTMLInputElement>(this.root, '[data-meta="tags"]').value = this.document.tags.join(', ');
    q<HTMLInputElement>(this.root, '[data-level-field="name"]').value = this.document.level.name;
    q<HTMLInputElement>(this.root, '[data-level-field="requiredCarrots"]').value = String(this.document.level.requiredCarrots);
    q<HTMLInputElement>(this.root, '[data-size-field="cols"]').value = String(this.document.level.tilemap.cols);
    q<HTMLInputElement>(this.root, '[data-size-field="rows"]').value = String(this.document.level.tilemap.rows);
  }

  private renderAll() {
    this.renderToolState();
    this.renderToolPreviews();
    this.renderAssetPanel();
    this.renderCanvas();
    this.renderInspector();
    this.renderDiagnostics();
    this.renderStats();
  }

  private renderToolState() {
    const activeKey = this.activeTool.type === 'tile'
      ? `tile:${this.activeTool.tileId}`
      : this.activeTool.type === 'entity'
        ? `entity:${this.activeTool.entity}`
        : this.activeTool.type;

    for (const button of this.root.querySelectorAll<HTMLButtonElement>('[data-tool]')) {
      const key = button.dataset.tool === 'tile'
        ? `tile:${button.dataset.tileId}`
        : button.dataset.tool === 'entity'
          ? `entity:${button.dataset.entityTool}`
          : button.dataset.tool ?? '';
      button.classList.toggle('is-active', key === activeKey);
    }
  }

  private renderStats() {
    const level = this.document.level;
    const carrotCount = level.entities.filter((entity) => entity.kind === 'carrot').length;
    this.stats.textContent = t('editor.stats', {
      cols: level.tilemap.cols,
      rows: level.tilemap.rows,
      entities: level.entities.length,
      carrots: carrotCount,
    });
  }

  private assetObjects(): Array<[string, ObjectAsset]> {
    if (!this.assetManifest) return [];
    return Object.entries(this.assetManifest.objects)
      .filter(([key, object]) => key === object.name && (Boolean(object.frame) || Object.keys(object.animations).length > 0))
      .sort(([a], [b]) => a.localeCompare(b));
  }

  private ensureAssetSelection() {
    if (!this.assetManifest) return;
    const objects = this.assetObjects();
    if (objects.length === 0) return;

    if (!this.assetManifest.objects[this.selectedAssetName]) {
      this.selectedAssetName = objects.find(([name]) => name === 'bobby')?.[0] ?? objects[0][0];
    }

    const object = this.assetManifest.objects[this.selectedAssetName];
    const animationNames = this.animationNamesForObject(object);
    if (!animationNames.includes(this.selectedAssetAnimation)) {
      this.selectedAssetAnimation = animationNames.includes('downStop') ? 'downStop' : (animationNames[0] ?? '__frame');
    }

    const animation = this.selectedAssetAnimationEntry();
    const maxFrameIndex = Math.max(0, (animation?.frames.length ?? 1) - 1);
    this.selectedAssetFrameIndex = clamp(this.selectedAssetFrameIndex, 0, maxFrameIndex);
  }

  private animationNamesForObject(object: ObjectAsset): string[] {
    const names = Object.keys(object.animations);
    if (object.frame) names.unshift('__frame');
    return names;
  }

  private selectedAssetAnimationEntry(): {
    object: ObjectAsset;
    name: string;
    animation?: SpriteAnimation;
    frames: SpriteFrame[];
    staticFrame: boolean;
  } | null {
    const object = this.assetManifest?.objects[this.selectedAssetName];
    if (!object) return null;

    if (this.selectedAssetAnimation === '__frame') {
      return object.frame
        ? { object, name: '__frame', frames: [object.frame], staticFrame: true }
        : null;
    }

    const animation = object.animations[this.selectedAssetAnimation];
    if (!animation) return null;
    return { object, name: this.selectedAssetAnimation, animation, frames: animation.frames, staticFrame: false };
  }

  private renderAssetPanel() {
    if (!this.assetManifest) {
      this.assetMeta.textContent = t('editor.asset.unavailable');
      return;
    }

    this.ensureAssetSelection();
    const objects = this.assetObjects();
    this.assetObjectSelect.innerHTML = objects.map(([name, object]) => (
      `<option value="${escapeHtml(name)}" ${name === this.selectedAssetName ? 'selected' : ''}>${escapeHtml(object.name)}</option>`
    )).join('');

    const object = this.assetManifest.objects[this.selectedAssetName];
    const animationNames = object ? this.animationNamesForObject(object) : [];
    this.assetAnimationSelect.innerHTML = animationNames.map((name) => (
      `<option value="${escapeHtml(name)}" ${name === this.selectedAssetAnimation ? 'selected' : ''}>${name === '__frame' ? t('editor.asset.staticFrame') : escapeHtml(name)}</option>`
    )).join('');

    const selected = this.selectedAssetAnimationEntry();
    const speedInput = q<HTMLInputElement>(this.root, '[data-asset-field="speed"]');
    const loopingSelect = q<HTMLSelectElement>(this.root, '[data-asset-field="looping"]');

    speedInput.disabled = !selected?.animation;
    loopingSelect.disabled = !selected?.animation;
    speedInput.value = String(selected?.animation?.speed ?? 0);
    loopingSelect.value = String(selected?.animation?.looping ?? false);

    const frames = selected?.frames ?? [];
    this.assetMeta.textContent = selected
      ? `${selected.object.name} / ${selected.name === '__frame' ? t('editor.asset.static') : selected.name} / ${frames.length} ${t(frames.length === 1 ? 'editor.asset.frame' : 'editor.asset.frames')}`
      : t('editor.asset.none');

    this.assetFrames.innerHTML = frames.map((_, index) => `
      <button type="button" class="editor-frame-button ${index === this.selectedAssetFrameIndex ? 'is-active' : ''}" data-asset-frame="${index}">
        <canvas width="42" height="42" data-asset-frame-canvas="${index}" aria-hidden="true"></canvas>
        <span>${index + 1}</span>
      </button>
    `).join('');

    const frame = frames[this.selectedAssetFrameIndex];
    this.assetFrameEditor.innerHTML = frame ? `
      <label><span data-i18n="editor.asset.sheet">${t('editor.asset.sheet')}</span><input data-asset-frame-field="sheet" value="${escapeHtml(frame.sheet)}" /></label>
      <div class="editor-field-row">
        <label>X<input data-asset-frame-field="x" type="number" min="0" value="${frame.x}" /></label>
        <label>Y<input data-asset-frame-field="y" type="number" min="0" value="${frame.y}" /></label>
      </div>
      <div class="editor-field-row">
        <label>W<input data-asset-frame-field="w" type="number" min="1" value="${frame.w}" /></label>
        <label>H<input data-asset-frame-field="h" type="number" min="1" value="${frame.h}" /></label>
      </div>
    ` : `<p class="editor-muted">${t('editor.asset.noFrame')}</p>`;

    this.drawAssetFrameStrip();
    this.drawAssetPreview();
  }

  private handleAssetFieldInput(target: HTMLInputElement | HTMLSelectElement) {
    const assetField = target.dataset.assetField;
    if (assetField === 'object') {
      this.selectedAssetName = target.value;
      this.selectedAssetAnimation = '';
      this.selectedAssetFrameIndex = 0;
      this.renderAssetPanel();
      return;
    }
    if (assetField === 'animation') {
      this.selectedAssetAnimation = target.value;
      this.selectedAssetFrameIndex = 0;
      this.renderAssetPanel();
      return;
    }

    const selected = this.selectedAssetAnimationEntry();
    if (!selected) return;

    if (assetField === 'speed' && selected.animation) {
      selected.animation.speed = Math.max(0, Number(target.value || 0));
      this.drawAssetPreview();
      return;
    }
    if (assetField === 'looping' && selected.animation) {
      selected.animation.looping = target.value === 'true';
      this.drawAssetPreview();
      return;
    }

    const frameField = target.dataset.assetFrameField;
    const frame = selected.frames[this.selectedAssetFrameIndex];
    if (!frame || !frameField) return;

    if (frameField === 'sheet') {
      frame.sheet = target.value;
    } else if (frameField === 'x' || frameField === 'y') {
      frame[frameField] = Math.max(0, Math.round(Number(target.value || 0)));
    } else if (frameField === 'w' || frameField === 'h') {
      frame[frameField] = Math.max(1, Math.round(Number(target.value || 1)));
    }
    this.drawAssetFrameStrip();
    this.drawAssetPreview();
  }

  private startAssetPreviewLoop() {
    if (this.assetPreviewRaf) cancelAnimationFrame(this.assetPreviewRaf);
    const tick = () => {
      this.drawAssetPreview();
      this.assetPreviewRaf = requestAnimationFrame(tick);
    };
    this.assetPreviewRaf = requestAnimationFrame(tick);
  }

  private drawAssetPreview() {
    const selected = this.selectedAssetAnimationEntry();
    const { assetPreviewCtx: ctx, assetPreview: canvas } = this;
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0f120b';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const frame = this.assetPreviewFrame(selected);
    if (!frame || !this.sprites) return;
    this.drawFrameFitted(ctx, frame, canvas.width, canvas.height, 12);
  }

  private assetPreviewFrame(selected = this.selectedAssetAnimationEntry()): SpriteFrame | undefined {
    if (!selected || selected.frames.length === 0) return undefined;
    if (!selected.animation || selected.animation.speed === 0) return selected.frames[this.selectedAssetFrameIndex] ?? selected.frames[0];

    const elapsed = performance.now() / 1000;
    const frameIndex = selected.animation.looping
      ? Math.floor(elapsed * selected.animation.speed) % selected.frames.length
      : Math.min(selected.frames.length - 1, Math.floor(elapsed * selected.animation.speed));
    return selected.frames[frameIndex];
  }

  private drawAssetFrameStrip() {
    const selected = this.selectedAssetAnimationEntry();
    if (!selected || !this.sprites) return;

    for (const canvas of this.assetFrames.querySelectorAll<HTMLCanvasElement>('[data-asset-frame-canvas]')) {
      const ctx = canvas.getContext('2d');
      if (!ctx) continue;
      const frameIndex = Number(canvas.dataset.assetFrameCanvas ?? 0);
      const frame = selected.frames[frameIndex];
      ctx.imageSmoothingEnabled = false;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#0f120b';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      if (frame) this.drawFrameFitted(ctx, frame, canvas.width, canvas.height, 3);
    }
  }

  private drawFrameFitted(ctx: CanvasRenderingContext2D, frame: SpriteFrame, width: number, height: number, padding: number) {
    if (!this.sprites) return;
    const maxWidth = Math.max(1, width - padding * 2);
    const maxHeight = Math.max(1, height - padding * 2);
    const scale = Math.min(maxWidth / frame.w, maxHeight / frame.h);
    const drawWidth = Math.max(1, Math.round(frame.w * scale));
    const drawHeight = Math.max(1, Math.round(frame.h * scale));
    const x = Math.round((width - drawWidth) / 2);
    const y = Math.round((height - drawHeight) / 2);
    this.sprites.drawSprite(ctx, frame, x, y, drawWidth, drawHeight);
  }

  private renderCanvas() {
    const level = this.document.level;
    const { tileSize } = level.tilemap;
    this.canvas.width = level.tilemap.width;
    this.canvas.height = level.tilemap.height;
    this.ctx.imageSmoothingEnabled = false;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = '#1fa33a';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    for (let row = 0; row < level.tilemap.rows; row += 1) {
      for (let col = 0; col < level.tilemap.cols; col += 1) {
        const tileId = level.tilemap.data[row * level.tilemap.cols + col] ?? 0;
        if (!this.drawTileSprite(this.ctx, level.tilemap.typeName, tileId, col * tileSize, row * tileSize, tileSize, tileSize)) {
          this.drawTileFallback(this.ctx, tileId, col * tileSize, row * tileSize, tileSize, tileSize);
        }
      }
    }

    this.ctx.strokeStyle = 'rgba(20, 20, 20, 0.32)';
    this.ctx.lineWidth = 1;
    for (let col = 0; col <= level.tilemap.cols; col += 1) {
      this.ctx.beginPath();
      this.ctx.moveTo(col * tileSize + 0.5, 0);
      this.ctx.lineTo(col * tileSize + 0.5, level.tilemap.height);
      this.ctx.stroke();
    }
    for (let row = 0; row <= level.tilemap.rows; row += 1) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, row * tileSize + 0.5);
      this.ctx.lineTo(level.tilemap.width, row * tileSize + 0.5);
      this.ctx.stroke();
    }

    for (const entity of level.entities) this.drawEntity(entity);
  }

  private drawEntity(entity: LevelEntityDefinition) {
    const x = Math.round(entity.pos.x);
    const y = Math.round(entity.pos.y);
    const width = entity.size.x;
    const height = entity.size.y;
    const frame = this.spriteFrameForEntity(entity);

    if (frame && this.sprites?.drawSprite(this.ctx, frame, x, y, width, height, entity.angle)) {
      if (entity.id === this.selectedEntityId) this.drawEntitySelection(x, y, width, height);
      return;
    }

    this.drawEntityFallback(entity, x, y, width, height);
  }

  private drawEntityFallback(entity: LevelEntityDefinition, x: number, y: number, width: number, height: number) {
    const style = ENTITY_STYLE[entity.kind] ?? { label: '?', fill: '#94a3b8', stroke: '#334155' };
    const selected = entity.id === this.selectedEntityId;
    const inset = selected ? 4 : 7;

    this.ctx.fillStyle = style.fill;
    this.ctx.strokeStyle = selected ? '#ffffff' : style.stroke;
    this.ctx.lineWidth = selected ? 4 : 2;
    this.ctx.fillRect(x + inset, y + inset, entity.size.x - inset * 2, entity.size.y - inset * 2);
    this.ctx.strokeRect(x + inset, y + inset, entity.size.x - inset * 2, entity.size.y - inset * 2);
    this.ctx.font = `bold 16px ${EDITOR_SYSTEM_FONT}`;
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillStyle = '#111827';
    this.ctx.fillText(this.entityLabel(entity, style.label), x + width / 2, y + height / 2);
  }

  private drawEntitySelection(x: number, y: number, width: number, height: number) {
    this.ctx.save();
    this.ctx.strokeStyle = '#fff7c7';
    this.ctx.lineWidth = 4;
    this.ctx.strokeRect(x + 2, y + 2, width - 4, height - 4);
    this.ctx.strokeStyle = '#11130d';
    this.ctx.lineWidth = 1;
    this.ctx.strokeRect(x + 5, y + 5, width - 10, height - 10);
    this.ctx.restore();
  }

  private drawTileSprite(
    ctx: CanvasRenderingContext2D,
    typeName: string,
    tileId: number,
    x: number,
    y: number,
    width: number,
    height: number
  ) {
    if (!this.sprites) return false;
    const tileFrame = this.sprites.getFrame(typeName);
    const sheet = this.sprites.getObject(typeName)?.frame?.sheet;
    if (!tileFrame || !sheet) return false;

    const tileSize = this.document.level.tilemap.tileSize;
    const tilesPerRow = Math.max(1, Math.floor(tileFrame.w / tileSize));
    const maxTileIndex = Math.max(0, tilesPerRow * Math.floor(tileFrame.h / tileSize) - 1);
    const frameIndex = Math.max(0, tileId > maxTileIndex ? tileId - 1 : tileId);
    const sx = tileFrame.x + (frameIndex % tilesPerRow) * tileSize;
    const sy = tileFrame.y + Math.floor(frameIndex / tilesPerRow) * tileSize;

    return this.sprites.drawSprite(ctx, { sheet, x: sx, y: sy, w: tileSize, h: tileSize }, x, y, width, height);
  }

  private drawTileFallback(ctx: CanvasRenderingContext2D, tileId: number, x: number, y: number, width: number, height: number) {
    const tile = tilePalette.find((candidate) => candidate.id === tileId) ?? tilePalette[0];
    ctx.fillStyle = tile.color;
    ctx.fillRect(x, y, width, height);
  }

  private spriteFrameForEntity(entity: LevelEntityDefinition): SpriteFrame | undefined {
    return this.spriteFrameForKind(entity.kind, entity.typeName, entity.data);
  }

  private spriteFrameForKind(kind: string, typeName: string, data: Record<string, unknown>): SpriteFrame | undefined {
    if (!this.sprites) return undefined;
    const sprite = typeof data.sprite === 'string' ? data.sprite : undefined;
    if (sprite) return this.sprites.getFrame(typeName, sprite) ?? this.sprites.getFrame(typeName);

    if (kind === 'player') {
      return this.sprites.getFrame(typeName, 'downStop')
        ?? this.sprites.getFrame(typeName, 'waiting')
        ?? this.sprites.getFrame(typeName);
    }

    if (kind === 'channel') return this.sprites.getFrame(typeName, 'close') ?? this.sprites.getFrame(typeName);
    if (kind === 'trap') return this.sprites.getFrame(typeName, Boolean(data.isSharp ?? data.armed) ? 'Sharp' : 'notSharp') ?? this.sprites.getFrame(typeName);
    if (kind === 'conveyorX') return this.sprites.getFrame(typeName, Number(data.direction1 ?? 0) === 0 ? 'startLeft' : 'startRight') ?? this.sprites.getFrame(typeName);
    if (kind === 'conveyorY') return this.sprites.getFrame(typeName, Number(data.direction1 ?? 0) === 0 ? 'startUp' : 'startDown') ?? this.sprites.getFrame(typeName);
    if (kind === 'conveyorButton' || kind === 'stoneButton') return this.sprites.getFrame(typeName, String(Boolean(data.open))) ?? this.sprites.getFrame(typeName);
    if (kind === 'stone' || kind === 'stoneAngle') return this.sprites.getFrame(typeName, String(data.sign ?? 1)) ?? this.sprites.getFrame(typeName);
    if (kind === 'key' || kind === 'lock') {
      const color = { 1: 'yellow', 2: 'red', 3: 'blue' }[Number(data.sign ?? 1)] ?? 'yellow';
      return this.sprites.getFrame(typeName, color) ?? this.sprites.getFrame(typeName);
    }

    return this.sprites.getFrame(typeName, 'Animation 1') ?? this.sprites.getFrame(typeName);
  }

  private renderToolPreviews() {
    for (const preview of this.root.querySelectorAll<HTMLCanvasElement>('[data-tile-preview]')) {
      const ctx = preview.getContext('2d');
      if (!ctx) continue;
      const tileId = Number(preview.dataset.tilePreview ?? 0);
      ctx.imageSmoothingEnabled = false;
      ctx.clearRect(0, 0, preview.width, preview.height);
      if (!this.drawTileSprite(ctx, this.document.level.tilemap.typeName, tileId, 0, 0, preview.width, preview.height)) {
        this.drawTileFallback(ctx, tileId, 0, 0, preview.width, preview.height);
      }
    }

    for (const preview of this.root.querySelectorAll<HTMLCanvasElement>('[data-entity-preview]')) {
      const ctx = preview.getContext('2d');
      const tool = preview.dataset.entityPreview;
      if (!ctx || !tool) continue;

      const definition = toolForEntity(tool);
      const frame = this.spriteFrameForKind(definition.kind, definition.typeName, definition.data);
      ctx.imageSmoothingEnabled = false;
      ctx.clearRect(0, 0, preview.width, preview.height);

      if (frame && this.sprites?.drawSprite(ctx, frame, 0, 0, preview.width, preview.height)) continue;

      const style = ENTITY_STYLE[definition.kind] ?? { label: '?', fill: '#94a3b8', stroke: '#334155' };
      ctx.fillStyle = style.fill;
      ctx.fillRect(3, 3, preview.width - 6, preview.height - 6);
      ctx.strokeStyle = style.stroke;
      ctx.lineWidth = 2;
      ctx.strokeRect(3, 3, preview.width - 6, preview.height - 6);
    }
  }

  private entityLabel(entity: LevelEntityDefinition, fallback: string) {
    if (entity.kind === 'key' || entity.kind === 'lock') return `${fallback}${Number(entity.data.sign ?? 1)}`;
    if (entity.kind === 'stone' || entity.kind === 'stoneAngle') return `${fallback}${Number(entity.data.sign ?? 1)}`;
    if (entity.kind === 'conveyorX') return Number(entity.data.direction1 ?? 0) === 0 ? '<' : '>';
    if (entity.kind === 'conveyorY') return Number(entity.data.direction1 ?? 0) === 0 ? '^' : 'v';
    return fallback;
  }

  private renderInspector() {
    const entity = this.selectedEntity();
    if (!entity) {
      this.inspector.innerHTML = `<h2>${t('editor.selection.heading')}</h2><p class="editor-muted">${t('editor.selection.empty')}</p>`;
      return;
    }

    const controls: string[] = [
      `<h2>${t('editor.selection.heading')}</h2>`,
      `<p class="editor-muted">${t('editor.selection.meta', { kind: entity.kind, id: entity.id, col: entity.cell.col, row: entity.cell.row })}</p>`,
    ];

    if (entity.kind === 'stone') controls.push(this.numberSelect('sign', t('editor.selection.direction'), Number(entity.data.sign ?? 1), [[1, t('editor.option.horizontal')], [2, t('editor.option.vertical')]]));
    if (entity.kind === 'stoneAngle') controls.push(this.numberSelect('sign', t('editor.selection.corner'), Number(entity.data.sign ?? 1), [[1, t('editor.option.downRight')], [2, t('editor.option.downLeft')], [3, t('editor.option.upLeft')], [4, t('editor.option.upRight')]]));
    if (entity.kind === 'key' || entity.kind === 'lock') controls.push(this.numberSelect('sign', t('editor.selection.color'), Number(entity.data.sign ?? 1), [[1, t('editor.option.yellow')], [2, t('editor.option.red')], [3, t('editor.option.blue')]]));
    if (entity.kind === 'conveyorX') controls.push(this.numberSelect('direction1', t('editor.selection.direction'), Number(entity.data.direction1 ?? 0), [[0, t('editor.option.left')], [1, t('editor.option.right')]]));
    if (entity.kind === 'conveyorY') controls.push(this.numberSelect('direction1', t('editor.selection.direction'), Number(entity.data.direction1 ?? 0), [[0, t('editor.option.up')], [1, t('editor.option.down')]]));
    if (entity.kind === 'conveyorButton' || entity.kind === 'stoneButton') controls.push(this.numberSelect('open', t('editor.selection.open'), Number(entity.data.open ?? 1), [[1, t('editor.option.true')], [0, t('editor.option.false')]]));
    if (entity.kind === 'trap') controls.push(this.numberSelect('isSharp', t('editor.selection.sharp'), Number(entity.data.isSharp ?? 0), [[0, t('editor.option.false')], [1, t('editor.option.true')]]));
    controls.push(`<label>${t('editor.selection.angle')}<input data-entity-field="angle" type="number" value="${entity.angle}" /></label>`);

    this.inspector.innerHTML = controls.join('');
  }

  private numberSelect(field: string, label: string, value: number, options: Array<[number, string]>) {
    const optionMarkup = options.map(([optionValue, optionLabel]) => (
      `<option value="${optionValue}" ${optionValue === value ? 'selected' : ''}>${optionLabel}</option>`
    )).join('');
    return `<label>${label}<select data-entity-field="${field}">${optionMarkup}</select></label>`;
  }

  private renderDiagnostics() {
    const diagnostics = validateLevelDefinition(this.document.level);
    if (diagnostics.length === 0) {
      this.diagnosticsList.innerHTML = `<p class="editor-ok">${t('editor.diagnostics.ok')}</p>`;
      return;
    }
    this.diagnosticsList.innerHTML = diagnostics.map((diagnostic) => `
      <p class="editor-diagnostic editor-diagnostic--${diagnostic.severity}">
        <strong>${t(`editor.diagnostics.${diagnostic.severity}`)}</strong>${diagnostic.entityId ? ` #${diagnostic.entityId}` : ''}: ${formatDiagnosticMessage(diagnostic.message)}
      </p>
    `).join('');
  }

  private selectedEntity() {
    return this.document.level.entities.find((entity) => entity.id === this.selectedEntityId) ?? null;
  }

  private async importFile(file: File) {
    try {
      this.pushHistory();
      this.document = parseCommunityLevel(await file.text());
      this.document = cloneCommunityLevel(this.document);
      saveCommunityLevel(this.document);
      this.selectedEntityId = null;
      this.fillDocumentFields();
      this.renderLibraryOptions(this.document.id);
      this.renderAll();
      this.libraryStatus.textContent = t('editor.library.imported', { title: this.document.title });
    } catch (error) {
      this.diagnosticsList.innerHTML = `<p class="editor-diagnostic editor-diagnostic--error">${error instanceof Error ? error.message : String(error)}</p>`;
    }
  }

  private exportCurrentLevel() {
    const blob = new Blob([`${JSON.stringify(this.document, null, 2)}\n`], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${sanitizeFileName(this.document.title)}.bobby-level.json`;
    link.click();
    URL.revokeObjectURL(link.href);
  }

  private exportAssetManifest() {
    if (!this.assetManifest) return;
    const blob = new Blob([`${JSON.stringify(this.assetManifest, null, 2)}\n`], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'bobby-asset-manifest.json';
    link.click();
    URL.revokeObjectURL(link.href);
  }

  private async startPlaytest() {
    this.stopPlaytest();
    if (!this.sprites) {
      this.sprites = new SpriteLoader(await loadAssetManifest());
      await this.sprites.preloadAll();
    }

    const overlay = document.createElement('div');
    overlay.className = 'editor-playtest';
    overlay.innerHTML = `
      <div class="editor-playtest__bar">
        <strong>${t('editor.playtest.title')}</strong>
        <button type="button" data-playtest="restart">${t('editor.playtest.restart')}</button>
        <button type="button" data-playtest="close">${t('editor.playtest.close')}</button>
      </div>
      <div class="editor-playtest__stage"></div>
    `;
    document.body.appendChild(overlay);

    let state = gameStateFromLevelDefinition(this.document.level);
    let simulation = new GameSimulation(state);
    const stage = q<HTMLElement>(overlay, '.editor-playtest__stage');
    const renderer = new Renderer(state, stage, this.sprites, () => this.stopPlaytest());
    let last = performance.now();

    const keyHandler = (event: KeyboardEvent) => {
      const action = actionFromKeyboardKey(event.key);
      if (!action) return;
      event.preventDefault();
      if (action.type === 'restart') {
        state = gameStateFromLevelDefinition(this.document.level);
        simulation = new GameSimulation(state);
        renderer.setState(state);
        return;
      }
      simulation.dispatch(action);
    };
    window.addEventListener('keydown', keyHandler);

    overlay.addEventListener('click', (event) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>('[data-playtest]') : null;
      if (!target) return;
      if (target.dataset.playtest === 'close') this.stopPlaytest();
      if (target.dataset.playtest === 'restart') {
        state = gameStateFromLevelDefinition(this.document.level);
        simulation = new GameSimulation(state);
        renderer.setState(state);
      }
    });

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (simulation.status() === 'playing') simulation.update(dt);
      renderer.draw();
      if (this.playtest) this.playtest.raf = requestAnimationFrame(tick);
    };

    this.playtest = { overlay, simulation, renderer, raf: requestAnimationFrame(tick), keyHandler };
    renderer.draw();
  }

  private stopPlaytest() {
    if (!this.playtest) return;
    cancelAnimationFrame(this.playtest.raf);
    window.removeEventListener('keydown', this.playtest.keyHandler);
    this.playtest.overlay.remove();
    this.playtest = undefined;
  }
}
