import type { GameState, Entity } from './types';
import { SpriteLoader } from './sprites';
import { appUrl } from './paths';
import type { GameSaveSlot, SaveActionResult } from './saveSystem';
import { language, languageToggleLabel, languageToggleText, t, toggleLanguage } from './i18n';

type SaveActionHandler = () => SaveActionResult | Promise<SaveActionResult>;

interface RestartControls {
  initialSlot: GameSaveSlot | null;
  onRestartLevel: SaveActionHandler;
  onStartOver: SaveActionHandler;
}

interface RestartDialogElements {
  root: HTMLElement;
  title: HTMLElement;
  body: HTMLElement;
  currentButton: HTMLButtonElement;
  startOverButton: HTMLButtonElement;
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
  private readonly restartControls?: RestartControls;
  private restartDialog?: RestartDialogElements;
  private saveSlot: GameSaveSlot | null = null;
  private restartBusy = false;
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
  private readonly restartButton?: HTMLButtonElement;
  private renderedLanguage = language();
  public readonly canvas: HTMLCanvasElement;
  public readonly ctx: CanvasRenderingContext2D;

  constructor(
    private state: GameState,
    container: HTMLElement,
    private sprites: SpriteLoader,
    private readonly onAdvance: () => void,
    options: { shell?: 'device' | 'bare'; showEditorLink?: boolean; savePanel?: RestartControls } = {}
  ) {
    this.restartControls = options.savePanel;
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
    const restartOverlay = this.restartControls ? this.createRestartDialog(this.restartControls) : null;

    const ctx = this.canvas.getContext('2d');
    if (!ctx) throw new Error('Canvas not supported');
    this.ctx = ctx;
    this.ctx.imageSmoothingEnabled = false;
    this.canvas.style.imageRendering = 'pixelated';

    this.stage.append(this.canvas, hud, winOverlay.root);
    if (restartOverlay) this.stage.append(restartOverlay.root);

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
        this.restartButton = sceneActions.restartButton;
        scene.append(sceneActions.root);
      }
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

    const restartButton = document.createElement('button');
    restartButton.type = 'button';
    restartButton.className = 'game-scene-link game-scene-link--restart';
    restartButton.textContent = t('game.restart.open');
    restartButton.setAttribute('aria-label', t('game.restart.open'));
    restartButton.addEventListener('click', () => this.openRestartDialog());

    const githubLink = document.createElement('a');
    githubLink.className = 'game-scene-link game-scene-link--github';
    githubLink.href = 'https://github.com/bobbygame/bobbygame.github.io';
    githubLink.target = '_blank';
    githubLink.rel = 'noopener noreferrer';
    githubLink.setAttribute('aria-label', t('game.github'));
    githubLink.append(this.createGithubIcon(), document.createTextNode('GitHub'));

    actions.append(editorLink, languageButton, restartButton, githubLink);
    return { root: actions, editorLink, languageButton, restartButton };
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
    void message;
    this.updateRestartDialog();
  }

  private createRestartDialog(controls: RestartControls) {
    const root = document.createElement('div');
    root.className = 'game-restart';
    root.setAttribute('aria-live', 'polite');
    root.addEventListener('keydown', (event) => {
      event.stopPropagation();
      if (event.key === 'Escape') this.closeRestartDialog();
    });
    root.addEventListener('click', (event) => {
      if (event.target === root) this.closeRestartDialog();
    });

    const panel = document.createElement('div');
    panel.className = 'game-restart__panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-modal', 'true');
    panel.setAttribute('aria-labelledby', 'game-restart-title');

    const title = document.createElement('strong');
    title.id = 'game-restart-title';
    title.className = 'game-restart__title';
    title.textContent = t('game.restart.title');

    const body = document.createElement('p');
    body.className = 'game-restart__body';
    body.textContent = t('game.restart.body');

    const actions = document.createElement('div');
    actions.className = 'game-restart__actions';

    const currentButton = this.createRestartButton(t('game.restart.current'), 'primary');
    const startOverButton = this.createRestartButton(t('game.restart.startOver'), 'ghost');
    currentButton.addEventListener('click', () => this.runRestartAction(controls.onRestartLevel));
    startOverButton.addEventListener('click', () => this.runRestartAction(controls.onStartOver));
    actions.append(currentButton, startOverButton);
    panel.append(title, body, actions);
    root.append(panel);

    this.restartDialog = {
      root,
      title,
      body,
      currentButton,
      startOverButton,
    };
    this.updateRestartDialog();
    return { root, title, body, currentButton, startOverButton };
  }

  private createRestartButton(label: string, variant: 'primary' | 'ghost' = 'primary') {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `game-restart__button game-restart__button--${variant}`;
    button.textContent = label;
    return button;
  }

  private openRestartDialog() {
    if (!this.restartDialog) return;
    this.stage.classList.add('game-stage--restart-open');
    this.restartDialog.currentButton.focus();
  }

  private closeRestartDialog() {
    this.stage.classList.remove('game-stage--restart-open');
  }

  private runRestartAction(handler: SaveActionHandler) {
    if (this.restartBusy) return;
    this.restartBusy = true;
    this.updateRestartDialog();
    this.closeRestartDialog();
    Promise.resolve(handler())
      .then((result) => {
        if (Object.prototype.hasOwnProperty.call(result, 'slot')) this.saveSlot = result.slot ?? null;
        void result.message;
      })
      .catch(() => {
        return undefined;
      })
      .finally(() => {
        this.restartBusy = false;
        this.updateRestartDialog();
      });
  }

  private updateRestartDialog() {
    if (!this.restartDialog) return;
    this.restartDialog.currentButton.disabled = this.restartBusy;
    this.restartDialog.startOverButton.disabled = this.restartBusy;
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
    this.updateRestartDialog();
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
      ctx.font = 'bold 44px comicbd, "bobby-cn", comic, bgothm, sans-serif';
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
    if (this.restartButton) {
      this.restartButton.textContent = t('game.restart.open');
      this.restartButton.setAttribute('aria-label', t('game.restart.open'));
    }
    if (this.restartDialog) {
      this.restartDialog.title.textContent = t('game.restart.title');
      this.restartDialog.body.textContent = t('game.restart.body');
      this.restartDialog.currentButton.textContent = t('game.restart.current');
      this.restartDialog.startOverButton.textContent = t('game.restart.startOver');
      this.updateRestartDialog();
    }
  }

  private strokeFillText(text: string, x: number, y: number) {
    this.ctx.strokeText(text, x, y);
    this.ctx.fillText(text, x, y);
  }
}
