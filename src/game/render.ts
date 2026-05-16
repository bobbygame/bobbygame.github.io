import type { GameState, Entity } from './types';
import { SpriteLoader } from './sprites';
import { appUrl } from './paths';
import type { GameSaveSlot, SaveActionResult } from './saveSystem';
import { formatMapName, formatSaveTime, language, languageToggleLabel, languageToggleText, t, toggleLanguage } from './i18n';

type SaveActionHandler = () => SaveActionResult | Promise<SaveActionResult>;

interface SavePanelControls {
  initialSlot: GameSaveSlot | null;
  onSave: SaveActionHandler;
  onResume: SaveActionHandler;
  onNewGame: SaveActionHandler;
  onDelete: SaveActionHandler;
}

interface SavePanelElements {
  root: HTMLElement;
  eyebrow: HTMLElement;
  title: HTMLElement;
  currentLabel: HTMLElement;
  currentMap: HTMLElement;
  currentStats: HTMLElement;
  slotLabel: HTMLElement;
  slotTitle: HTMLElement;
  slotMeta: HTMLElement;
  slotStats: HTMLElement;
  message: HTMLElement;
  saveButton: HTMLButtonElement;
  resumeButton: HTMLButtonElement;
  newButton: HTMLButtonElement;
  deleteButton: HTMLButtonElement;
}

function fallbackColor(kind: string): string {
  switch (kind) {
    case 'player': return '#7dd3fc';
    case 'wall': return '#6b5b3e';
    case 'carrot': return '#f97316';
    case 'goal':
    case 'channel': return '#ffffff';
    case 'trap': return '#ef4444';
    default: return '#94a3b8';
  }
}

function keyAnimationName(sign: string): string {
  return { 1: 'yellow', 2: 'red', 3: 'blue' }[Number(sign)] ?? 'yellow';
}

export class Renderer {
  private readonly root: HTMLElement;
  private readonly scene?: HTMLDivElement;
  private readonly device?: HTMLDivElement;
  private readonly savePanelControls?: SavePanelControls;
  private savePanel?: SavePanelElements;
  private saveSlot: GameSaveSlot | null = null;
  private savePanelBusy = false;
  private savePanelMessage = '';
  private readonly handleResize = () => this.resize();
  private readonly stage: HTMLDivElement;
  private readonly hudTimeLabel: HTMLElement;
  private readonly hudTime: HTMLElement;
  private readonly hudLevelLabel: HTMLElement;
  private readonly hudLevel: HTMLElement;
  private readonly hudRemainLabel: HTMLElement;
  private readonly hudRemain: HTMLElement;
  private readonly winTitle: HTMLElement;
  private readonly winTimeLabel: HTMLElement;
  private readonly winTime: HTMLElement;
  private readonly winStepsLabel: HTMLElement;
  private readonly winSteps: HTMLElement;
  private readonly winButton: HTMLButtonElement;
  private readonly editorLink?: HTMLAnchorElement;
  private readonly languageButton?: HTMLButtonElement;
  private renderedLanguage = language();
  public readonly canvas: HTMLCanvasElement;
  public readonly ctx: CanvasRenderingContext2D;

  constructor(
    private state: GameState,
    container: HTMLElement,
    private sprites: SpriteLoader,
    private readonly onAdvance: () => void,
    options: { shell?: 'device' | 'bare'; showEditorLink?: boolean; savePanel?: SavePanelControls } = {}
  ) {
    this.savePanelControls = options.savePanel;
    this.saveSlot = options.savePanel?.initialSlot ?? null;
    this.stage = document.createElement('div');
    this.stage.className = 'game-stage';

    this.canvas = document.createElement('canvas');
    this.canvas.width = state.tilemap.width || 650;
    this.canvas.height = state.tilemap.height || 800;
    this.canvas.setAttribute('aria-label', t('game.canvas'));

    const hud = document.createElement('div');
    hud.className = 'game-hud';
    hud.setAttribute('aria-label', t('game.status'));

    const timePill = this.createHudPill('game.hud.time', 'time');
    const levelPill = this.createHudPill('game.hud.level', 'level');
    const remainPill = this.createHudPill('game.hud.remain', 'remain');
    this.hudTimeLabel = timePill.label;
    this.hudTime = timePill.value;
    this.hudLevelLabel = levelPill.label;
    this.hudLevel = levelPill.value;
    this.hudRemainLabel = remainPill.label;
    this.hudRemain = remainPill.value;
    hud.append(timePill.root, levelPill.root, remainPill.root);

    const winOverlay = this.createWinOverlay();
    this.winTitle = winOverlay.title;
    this.winTimeLabel = winOverlay.time.label;
    this.winTime = winOverlay.time.value;
    this.winStepsLabel = winOverlay.steps.label;
    this.winSteps = winOverlay.steps.value;
    this.winButton = winOverlay.button;

    const ctx = this.canvas.getContext('2d');
    if (!ctx) throw new Error('Canvas not supported');
    this.ctx = ctx;
    this.ctx.imageSmoothingEnabled = false;
    this.canvas.style.imageRendering = 'pixelated';

    this.stage.append(this.canvas, hud, winOverlay.root);

    if (options.shell === 'device') {
      const scene = document.createElement('div');
      scene.className = 'game-device-scene';
      const device = document.createElement('div');
      device.className = 'game-device';
      const screen = document.createElement('div');
      screen.className = 'game-screen';
      const leftRope = document.createElement('div');
      leftRope.className = 'game-hanger-rope game-hanger-rope--left';
      leftRope.setAttribute('aria-hidden', 'true');
      const rightRope = document.createElement('div');
      rightRope.className = 'game-hanger-rope game-hanger-rope--right';
      rightRope.setAttribute('aria-hidden', 'true');

      if (options.showEditorLink !== false) {
        const sceneActions = this.createSceneActions();
        this.editorLink = sceneActions.editorLink;
        this.languageButton = sceneActions.languageButton;
        scene.append(sceneActions.root);
      }
      if (this.savePanelControls) scene.append(this.createSavePanel(this.savePanelControls));
      screen.append(this.stage);
      device.append(leftRope, rightRope, screen);
      scene.append(device);
      this.scene = scene;
      this.device = device;
      this.root = scene;
    } else {
      this.root = this.stage;
    }

    container.replaceChildren(this.root);
    this.updateLanguage();
    this.resize();
    window.addEventListener('resize', this.handleResize);
    window.visualViewport?.addEventListener('resize', this.handleResize);
    window.visualViewport?.addEventListener('scroll', this.handleResize);
  }

  setState(state: GameState) {
    this.state = state;
    this.canvas.width = state.tilemap.width || 650;
    this.canvas.height = state.tilemap.height || 800;
    this.resize();
  }

  resize() {
    const available = this.availableSize();
    const scale = Math.min(available.width / this.canvas.width, available.height / this.canvas.height);
    const width = Math.floor(this.canvas.width * scale);
    const height = Math.floor(this.canvas.height * scale);
    this.stage.style.width = `${width}px`;
    this.stage.style.height = `${height}px`;
    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;
  }

  private availableSize() {
    const target = this.scene ?? this.root.parentElement ?? document.documentElement;
    const styles = getComputedStyle(target);
    const horizontalPadding = parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight);
    const verticalPadding = parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom);
    const viewportWidth = window.visualViewport?.width ?? window.innerWidth;
    const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
    const targetWidth = target.clientWidth || viewportWidth;
    const targetHeight = target.clientHeight || viewportHeight;
    let width = Math.min(targetWidth, viewportWidth) - horizontalPadding;
    let height = Math.min(targetHeight, viewportHeight) - verticalPadding;

    if (this.device) {
      const deviceStyles = getComputedStyle(this.device);
      width -= parseFloat(deviceStyles.paddingLeft) + parseFloat(deviceStyles.paddingRight);
      height -= parseFloat(deviceStyles.paddingTop) + parseFloat(deviceStyles.paddingBottom);
      const compactViewport = viewportWidth <= 900 || viewportHeight <= 680;
      const floatingMargin = compactViewport ? 0 : viewportHeight < 720
        ? Math.min(78, Math.max(36, viewportHeight * 0.09))
        : Math.min(190, Math.max(96, viewportHeight * 0.14));
      height -= floatingMargin;
    }

    return {
      width: Math.max(1, width),
      height: Math.max(1, height),
    };
  }

  private createSceneActions() {
    const actions = document.createElement('nav');
    actions.className = 'game-scene-actions';
    actions.setAttribute('aria-label', t('game.tools'));

    const editorLink = document.createElement('a');
    editorLink.className = 'game-scene-link game-scene-link--editor';
    editorLink.href = appUrl('editor');
    editorLink.textContent = t('game.editor');
    editorLink.setAttribute('aria-label', t('game.editor'));

    const languageButton = document.createElement('button');
    languageButton.type = 'button';
    languageButton.className = 'game-scene-link game-scene-link--language';
    languageButton.textContent = languageToggleText();
    languageButton.setAttribute('aria-label', languageToggleLabel());
    languageButton.addEventListener('click', () => toggleLanguage());

    const githubLink = document.createElement('a');
    githubLink.className = 'game-scene-link game-scene-link--github';
    githubLink.href = 'https://github.com/bobbygame/bobbygame.github.io';
    githubLink.target = '_blank';
    githubLink.rel = 'noopener noreferrer';
    githubLink.setAttribute('aria-label', t('game.github'));
    githubLink.append(this.createGithubIcon(), document.createTextNode('GitHub'));

    actions.append(editorLink, languageButton, githubLink);
    return { root: actions, editorLink, languageButton };
  }

  private createGithubIcon() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'game-scene-link__icon');
    svg.setAttribute('viewBox', '0 0 16 16');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.67 7.67 0 0 1 8 3.87c.68 0 1.36.09 2 .26 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z');
    svg.append(path);
    return svg;
  }

  setSaveSlot(slot: GameSaveSlot | null, message = '') {
    this.saveSlot = slot;
    this.savePanelMessage = message;
    this.updateSavePanel();
  }

  private createSavePanel(controls: SavePanelControls): HTMLElement {
    const root = document.createElement('aside');
    root.className = 'game-save-panel';
    root.setAttribute('aria-label', t('game.save.aria'));
    root.addEventListener('keydown', (event) => event.stopPropagation());

    const eyebrow = document.createElement('span');
    eyebrow.className = 'game-save-panel__eyebrow';
    eyebrow.textContent = t('game.save.eyebrow');

    const title = document.createElement('strong');
    title.className = 'game-save-panel__title';
    title.textContent = t('game.save.title');

    const current = document.createElement('section');
    current.className = 'game-save-panel__section';
    const currentLabel = document.createElement('span');
    currentLabel.className = 'game-save-panel__label';
    currentLabel.textContent = t('game.save.current');
    const currentMap = document.createElement('strong');
    currentMap.className = 'game-save-panel__value';
    const currentStats = document.createElement('span');
    currentStats.className = 'game-save-panel__meta';
    current.append(currentLabel, currentMap, currentStats);

    const slot = document.createElement('section');
    slot.className = 'game-save-panel__section game-save-panel__section--slot';
    const slotLabel = document.createElement('span');
    slotLabel.className = 'game-save-panel__label';
    slotLabel.textContent = t('game.save.slot');
    const slotTitle = document.createElement('strong');
    slotTitle.className = 'game-save-panel__value';
    const slotMeta = document.createElement('span');
    slotMeta.className = 'game-save-panel__meta';
    const slotStats = document.createElement('span');
    slotStats.className = 'game-save-panel__meta';
    slot.append(slotLabel, slotTitle, slotMeta, slotStats);

    const actions = document.createElement('div');
    actions.className = 'game-save-panel__actions';
    const saveButton = this.createSaveButton(t('game.save.save'));
    const resumeButton = this.createSaveButton(t('game.save.resume'));
    const newButton = this.createSaveButton(t('game.save.new'));
    const deleteButton = this.createSaveButton(t('game.save.delete'), 'ghost');
    actions.append(saveButton, resumeButton, newButton, deleteButton);

    const message = document.createElement('p');
    message.className = 'game-save-panel__message';
    message.setAttribute('aria-live', 'polite');

    saveButton.addEventListener('click', () => this.runSavePanelAction(controls.onSave));
    resumeButton.addEventListener('click', () => this.runSavePanelAction(controls.onResume));
    newButton.addEventListener('click', () => this.runSavePanelAction(controls.onNewGame));
    deleteButton.addEventListener('click', () => this.runSavePanelAction(controls.onDelete));

    root.append(eyebrow, title, current, slot, actions, message);
    this.savePanel = {
      root,
      eyebrow,
      title,
      currentLabel,
      currentMap,
      currentStats,
      slotLabel,
      slotTitle,
      slotMeta,
      slotStats,
      message,
      saveButton,
      resumeButton,
      newButton,
      deleteButton,
    };
    this.updateSavePanel();
    return root;
  }

  private createSaveButton(label: string, variant: 'primary' | 'ghost' = 'primary') {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `game-save-panel__button game-save-panel__button--${variant}`;
    button.textContent = label;
    return button;
  }

  private runSavePanelAction(handler: SaveActionHandler) {
    if (this.savePanelBusy) return;
    this.savePanelBusy = true;
    this.updateSavePanel();
    Promise.resolve(handler())
      .then((result) => {
        if (Object.prototype.hasOwnProperty.call(result, 'slot')) this.saveSlot = result.slot ?? null;
        this.savePanelMessage = result.message;
      })
      .catch(() => {
        this.savePanelMessage = t('game.save.failed');
      })
      .finally(() => {
        this.savePanelBusy = false;
        this.updateSavePanel();
      });
  }

  private updateSavePanel() {
    if (!this.savePanel) return;

    const remain = Math.max(0, this.state.requiredCarrots - this.state.inventory.carrots);
    this.savePanel.currentMap.textContent = formatMapName(this.state.mapName);
    this.savePanel.currentStats.textContent = t('game.save.currentStats', {
      time: Math.floor(this.state.stats.timeElapsed),
      steps: this.state.stats.steps,
      remain,
    });

    if (this.saveSlot) {
      const snapshot = this.saveSlot.state;
      const savedRemain = Math.max(0, snapshot.requiredCarrots - snapshot.inventory.carrots);
      const savedPlayer = snapshot.entities.find((entity) => entity.id === snapshot.playerId);
      const col = savedPlayer ? Math.round(savedPlayer.pos.x / snapshot.tileSize) + 1 : null;
      const row = savedPlayer ? Math.round(savedPlayer.pos.y / snapshot.tileSize) + 1 : null;
      this.savePanel.slotTitle.textContent = formatMapName(snapshot.mapName);
      this.savePanel.slotMeta.textContent = t('game.save.savedAt', { time: formatSaveTime(this.saveSlot.savedAt) });
      this.savePanel.slotStats.textContent = t('game.save.slotStats', {
        time: Math.floor(snapshot.stats.timeElapsed),
        steps: snapshot.stats.steps,
        remain: savedRemain,
        position: col && row ? t('game.save.position', { col, row }) : '',
      });
    } else {
      this.savePanel.slotTitle.textContent = t('game.save.emptyTitle');
      this.savePanel.slotMeta.textContent = t('game.save.emptyMeta');
      this.savePanel.slotStats.textContent = '';
    }

    this.savePanel.message.textContent = this.savePanelMessage;
    this.savePanel.saveButton.disabled = this.savePanelBusy;
    this.savePanel.newButton.disabled = this.savePanelBusy;
    this.savePanel.resumeButton.disabled = this.savePanelBusy || !this.saveSlot;
    this.savePanel.deleteButton.disabled = this.savePanelBusy || !this.saveSlot;
  }

  draw() {
    if (this.renderedLanguage !== language()) this.updateLanguage();
    const { ctx } = this;
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawTilemap();
    this.drawEntities();
    this.drawHud();
    this.drawOverlay();
    this.updateSavePanel();
  }

  private drawTilemap() {
    const { ctx, state } = this;
    const tileFrame = this.sprites.getFrame(state.tilemap.typeName);

    ctx.fillStyle = '#1fa33a';
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    if (!tileFrame) return;

    const tileSize = state.tileSize;
    const sheet = this.sprites.getObject(state.tilemap.typeName)?.frame?.sheet;
    if (!sheet) return;

    const tilesPerRow = Math.max(1, Math.floor(tileFrame.w / tileSize));
    const maxTileIndex = Math.max(0, Math.floor(tileFrame.w / tileSize) * Math.floor(tileFrame.h / tileSize) - 1);

    for (let row = 0; row < state.tilemap.rows; row += 1) {
      for (let col = 0; col < state.tilemap.cols; col += 1) {
        const tileId = state.tilemap.data[row * state.tilemap.cols + col] ?? 0;
        const frameIndex = Math.max(0, tileId > maxTileIndex ? tileId - 1 : tileId);
        const sx = tileFrame.x + (frameIndex % tilesPerRow) * tileSize;
        const sy = tileFrame.y + Math.floor(frameIndex / tilesPerRow) * tileSize;

        this.sprites.drawSprite(
          ctx,
          { sheet, x: sx, y: sy, w: tileSize, h: tileSize },
          col * tileSize,
          row * tileSize,
          tileSize,
          tileSize
        );
      }
    }
  }

  private drawEntities() {
    const ordered = this.state.entities
      .filter((entity) => !entity.dead)
      .sort((a, b) => {
        if (a.kind === 'player') return 1;
        if (b.kind === 'player') return -1;
        return a.pos.y - b.pos.y;
      });

    for (const entity of ordered) this.drawEntity(entity);
  }

  private drawEntity(entity: Entity) {
    const frame = this.sprites.frameForEntity(entity, this.state);
    if (frame) {
      this.sprites.drawSprite(
        this.ctx,
        frame,
        Math.round(entity.pos.x),
        Math.round(entity.pos.y),
        entity.size.x,
        entity.size.y,
        entity.angle
      );
      return;
    }

    if (entity.kind === 'other') return;

    this.ctx.fillStyle = fallbackColor(entity.kind);
    this.ctx.fillRect(Math.round(entity.pos.x), Math.round(entity.pos.y), entity.size.x, entity.size.y);
  }

  private drawHud() {
    const { state } = this;
    const remain = Math.max(0, state.requiredCarrots - state.inventory.carrots);
    const time = Math.floor(state.stats.timeElapsed);
    const level = state.mapName.replace('map', '');

    this.updateHudText(this.hudTime, String(time));
    this.updateHudText(this.hudLevel, String(level));
    this.updateHudText(this.hudRemain, String(remain));
    this.drawInventoryKeys();
  }

  private createHudPill(labelKey: string, modifier: string) {
    const root = document.createElement('div');
    root.className = `game-hud__pill game-hud__pill--${modifier}`;

    const labelEl = document.createElement('span');
    labelEl.className = 'game-hud__label';
    labelEl.textContent = t(labelKey);

    const value = document.createElement('strong');
    value.className = 'game-hud__value';
    value.textContent = '0';

    root.append(labelEl, value);
    return { root, label: labelEl, value };
  }

  private updateHudText(target: HTMLElement, value: string) {
    if (target.textContent !== value) target.textContent = value;
  }

  private drawInventoryKeys() {
    const activeKeys = Object.keys(this.state.inventory.keys)
      .filter((key) => this.state.inventory.keys[key])
      .sort((a, b) => Number(a) - Number(b));
    if (activeKeys.length === 0) return;

    const size = 50;
    const gap = 8;
    const right = this.canvas.width - 14;
    const y = 60;

    activeKeys.forEach((key, index) => {
      const x = right - (activeKeys.length - index) * size - (activeKeys.length - index - 1) * gap;
      const frame = this.sprites.getFrame('key', keyAnimationName(key));
      if (frame) this.sprites.drawSprite(this.ctx, frame, x, y, size, size);
    });
  }

  private drawOverlay() {
    const { ctx, state } = this;

    if (state.won) {
      this.stage.classList.add('game-stage--won');
      this.winButton.disabled = false;
      this.updateHudText(this.winTitle, t('game.win.title'));
      this.updateHudText(this.winTime, String(Math.floor(state.stats.timeElapsed)));
      this.updateHudText(this.winSteps, String(state.stats.steps));
    } else {
      this.stage.classList.remove('game-stage--won');
      this.winButton.disabled = true;
    }

    if (state.player.dead) {
      ctx.save();
      ctx.font = 'bold 44px comic, system-ui, sans-serif';
      ctx.fillStyle = '#ef4444';
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.65)';
      ctx.lineWidth = 5;
      this.strokeFillText(t('game.tryAgain'), 205, 350);
      ctx.restore();
    }
  }

  private createWinOverlay() {
    const root = document.createElement('div');
    root.className = 'game-win';
    root.setAttribute('aria-live', 'polite');

    const panel = document.createElement('div');
    panel.className = 'game-win__panel';

    const title = document.createElement('strong');
    title.className = 'game-win__title';

    const stats = document.createElement('div');
    stats.className = 'game-win__stats';
    const time = this.createWinStat('game.win.timeUsed');
    const steps = this.createWinStat('game.win.steps');
    stats.append(time.root, steps.root);

    const button = document.createElement('button');
    button.className = 'game-win__continue';
    button.type = 'button';
    button.textContent = t('game.win.continue');
    button.disabled = true;
    button.addEventListener('click', () => this.onAdvance());

    panel.append(title, stats, button);
    root.append(panel);

    return { root, title, time, steps, button };
  }

  private createWinStat(labelKey: string) {
    const root = document.createElement('div');
    root.className = 'game-win__stat';

    const labelEl = document.createElement('span');
    labelEl.textContent = t(labelKey);

    const value = document.createElement('strong');
    value.textContent = '0';

    root.append(labelEl, value);
    return { root, label: labelEl, value };
  }

  private updateLanguage() {
    this.renderedLanguage = language();
    this.canvas.setAttribute('aria-label', t('game.canvas'));
    this.hudTimeLabel.textContent = t('game.hud.time');
    this.hudLevelLabel.textContent = t('game.hud.level');
    this.hudRemainLabel.textContent = t('game.hud.remain');
    this.winTimeLabel.textContent = t('game.win.timeUsed');
    this.winStepsLabel.textContent = t('game.win.steps');
    this.winButton.textContent = t('game.win.continue');
    if (this.editorLink) {
      this.editorLink.textContent = t('game.editor');
      this.editorLink.setAttribute('aria-label', t('game.editor'));
    }
    if (this.languageButton) {
      this.languageButton.textContent = languageToggleText();
      this.languageButton.setAttribute('aria-label', languageToggleLabel());
    }
    if (this.savePanel) {
      this.savePanel.root.setAttribute('aria-label', t('game.save.aria'));
      this.savePanel.eyebrow.textContent = t('game.save.eyebrow');
      this.savePanel.title.textContent = t('game.save.title');
      this.savePanel.currentLabel.textContent = t('game.save.current');
      this.savePanel.slotLabel.textContent = t('game.save.slot');
      this.savePanel.saveButton.textContent = t('game.save.save');
      this.savePanel.resumeButton.textContent = t('game.save.resume');
      this.savePanel.newButton.textContent = t('game.save.new');
      this.savePanel.deleteButton.textContent = t('game.save.delete');
      this.updateSavePanel();
    }
  }

  private strokeFillText(text: string, x: number, y: number) {
    this.ctx.strokeText(text, x, y);
    this.ctx.fillText(text, x, y);
  }
}
