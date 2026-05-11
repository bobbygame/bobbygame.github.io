import { levelNames } from '../content';
import { actionFromKeyboardKey } from '../game/actions';
import { loadAssetManifest, type SpriteFrame } from '../game/assets';
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
import type { LevelEntityDefinition } from '../game/levelDefinition';
import { loadLevelDefinition } from '../game/loader';
import { validateLevelDefinition } from '../game/levelValidation';
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
  private pointerPainting = false;
  private pointerHistoryCaptured = false;
  private draggingEntityId: number | null = null;
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

    await this.preloadSprites();
    this.bindEvents();
    this.fillDocumentFields();
    this.renderLibraryOptions();
    this.renderAll();
  }

  private async preloadSprites() {
    try {
      this.sprites = new SpriteLoader(await loadAssetManifest());
      await this.sprites.preloadAll();
    } catch (error) {
      console.warn('Editor sprite preload failed; falling back to symbolic rendering.', error);
      this.sprites = undefined;
    }
  }

  private template() {
    const levelOptions = levelNames.map((name) => `<option value="${name}">${name}</option>`).join('');
    const tileButtons = tilePalette.map((tile) => `
      <button class="editor-chip editor-chip--tile" type="button" data-tool="tile" data-tile-id="${tile.id}" title="${tile.label}">
        <canvas class="editor-tool-preview" width="28" height="28" data-tile-preview="${tile.id}" aria-hidden="true"></canvas>
        <span>${tile.id}</span>
      </button>
    `).join('');
    const groups = Array.from(new Set(entityTools.map((tool) => tool.group)));
    const entitySections = groups.map((group) => {
      const entityButtons = entityTools.filter((tool) => tool.group === group).map((tool) => `
      <button class="editor-chip" type="button" data-tool="entity" data-entity-tool="${tool.tool}">
        <canvas class="editor-tool-preview" width="28" height="28" data-entity-preview="${tool.tool}" aria-hidden="true"></canvas>
        <span>${tool.label}</span>
      </button>
      `).join('');
      return `
        <section>
          <h2>${escapeHtml(group)}</h2>
          <div class="editor-chip-grid">${entityButtons}</div>
        </section>
      `;
    }).join('');

    return `
      <header class="editor-topbar">
        <div class="editor-brand">
          <strong>Bobby Editor</strong>
          <span data-stats></span>
        </div>
        <div class="editor-actions">
          <select data-built-in-level aria-label="Built in level">${levelOptions}</select>
          <button type="button" data-action="load-built-in">Load</button>
          <select data-local-level aria-label="Local community level"></select>
          <button type="button" data-action="load-local">Open</button>
          <button type="button" data-action="save-local">Save Local</button>
          <button type="button" data-action="delete-local">Delete</button>
          <button type="button" data-action="open-game">Open Game</button>
          <button type="button" data-action="new">New</button>
          <button type="button" data-action="undo" data-history="undo">Undo</button>
          <button type="button" data-action="redo" data-history="redo">Redo</button>
          <button type="button" data-action="import">Import</button>
          <button type="button" data-action="export">Export</button>
          <button type="button" data-action="playtest" class="editor-primary">Playtest</button>
          <a href="/" class="editor-link">Game</a>
          <input data-import-file type="file" accept="application/json,.json,.bobby-level.json" hidden />
        </div>
      </header>
      <main class="editor-shell">
        <aside class="editor-panel editor-tools">
          <section>
            <h2>Tools</h2>
            <button class="editor-chip" type="button" data-tool="select">Select</button>
            <button class="editor-chip" type="button" data-tool="erase">Erase</button>
          </section>
          <section>
            <h2>Tiles</h2>
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
            <h2>Level</h2>
            <p data-library-status class="editor-muted"></p>
            <label>Title<input data-meta="title" /></label>
            <label>Author<input data-meta="author" /></label>
            <label>Name<input data-level-field="name" /></label>
            <label>Difficulty
              <select data-meta="difficulty">
                <option value="easy">easy</option>
                <option value="normal">normal</option>
                <option value="hard">hard</option>
                <option value="expert">expert</option>
              </select>
            </label>
            <label>Tags<input data-meta="tags" /></label>
            <div class="editor-field-row">
              <label>Cols<input data-size-field="cols" type="number" min="8" max="32" /></label>
              <label>Rows<input data-size-field="rows" type="number" min="8" max="32" /></label>
            </div>
            <label>Required carrots<input data-level-field="requiredCarrots" type="number" min="0" /></label>
          </section>
          <section data-inspector class="editor-fieldset"></section>
          <section class="editor-fieldset">
            <h2>Diagnostics</h2>
            <div data-diagnostics class="editor-diagnostics"></div>
          </section>
        </aside>
      </main>
    `;
  }

  private bindEvents() {
    this.root.addEventListener('click', (event) => {
      const target = event.target instanceof Element ? event.target : null;
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

  private async handleAction(action: string) {
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
      window.location.href = `/?community=${encodeURIComponent(this.document.id)}`;
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
    this.libraryStatus.textContent = `Saved locally as ${this.document.title}.`;
  }

  private renderLibraryOptions(selectedId = this.document.id) {
    const levels = listCommunityLevels();
    this.librarySelect.innerHTML = levels.length === 0
      ? '<option value="">No local levels</option>'
      : levels.map((level) => `<option value="${escapeHtml(level.id)}">${escapeHtml(level.title)}</option>`).join('');
    this.librarySelect.value = levels.some((level) => level.id === selectedId) ? selectedId : (levels[0]?.id ?? '');
    this.libraryStatus.textContent = levels.length === 0 ? 'Local library is empty.' : `${levels.length} local level${levels.length === 1 ? '' : 's'} available.`;
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
    this.stats.textContent = `${level.tilemap.cols}x${level.tilemap.rows} / ${level.entities.length} entities / ${carrotCount} carrots`;
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
    this.ctx.font = 'bold 16px ui-monospace, Menlo, monospace';
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
      this.inspector.innerHTML = '<h2>Selection</h2><p class="editor-muted">No entity selected.</p>';
      return;
    }

    const controls: string[] = [
      `<h2>Selection</h2>`,
      `<p class="editor-muted">${entity.kind} / id ${entity.id} / ${entity.cell.col}, ${entity.cell.row}</p>`,
    ];

    if (entity.kind === 'stone') controls.push(this.numberSelect('sign', 'Direction', Number(entity.data.sign ?? 1), [[1, 'horizontal'], [2, 'vertical']]));
    if (entity.kind === 'stoneAngle') controls.push(this.numberSelect('sign', 'Corner', Number(entity.data.sign ?? 1), [[1, 'down-right'], [2, 'down-left'], [3, 'up-left'], [4, 'up-right']]));
    if (entity.kind === 'key' || entity.kind === 'lock') controls.push(this.numberSelect('sign', 'Color', Number(entity.data.sign ?? 1), [[1, 'yellow'], [2, 'red'], [3, 'blue']]));
    if (entity.kind === 'conveyorX') controls.push(this.numberSelect('direction1', 'Direction', Number(entity.data.direction1 ?? 0), [[0, 'left'], [1, 'right']]));
    if (entity.kind === 'conveyorY') controls.push(this.numberSelect('direction1', 'Direction', Number(entity.data.direction1 ?? 0), [[0, 'up'], [1, 'down']]));
    if (entity.kind === 'conveyorButton' || entity.kind === 'stoneButton') controls.push(this.numberSelect('open', 'Open', Number(entity.data.open ?? 1), [[1, 'true'], [0, 'false']]));
    if (entity.kind === 'trap') controls.push(this.numberSelect('isSharp', 'Sharp', Number(entity.data.isSharp ?? 0), [[0, 'false'], [1, 'true']]));
    controls.push(`<label>Angle<input data-entity-field="angle" type="number" value="${entity.angle}" /></label>`);

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
      this.diagnosticsList.innerHTML = '<p class="editor-ok">No issues found.</p>';
      return;
    }
    this.diagnosticsList.innerHTML = diagnostics.map((diagnostic) => `
      <p class="editor-diagnostic editor-diagnostic--${diagnostic.severity}">
        <strong>${diagnostic.severity}</strong>${diagnostic.entityId ? ` #${diagnostic.entityId}` : ''}: ${diagnostic.message}
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
      this.libraryStatus.textContent = `Imported and saved ${this.document.title}.`;
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
        <strong>Playtest</strong>
        <button type="button" data-playtest="restart">Restart</button>
        <button type="button" data-playtest="close">Close</button>
      </div>
      <div class="editor-playtest__stage"></div>
    `;
    document.body.appendChild(overlay);

    let state = gameStateFromLevelDefinition(this.document.level);
    let simulation = new GameSimulation(state);
    const stage = q<HTMLElement>(overlay, '.editor-playtest__stage');
    const renderer = new Renderer(state, stage, this.sprites);
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
