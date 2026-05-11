import type { GameState, Entity } from './types';
import { SpriteLoader } from './sprites';

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
  private readonly stage: HTMLDivElement;
  private readonly hudTime: HTMLElement;
  private readonly hudLevel: HTMLElement;
  private readonly hudRemain: HTMLElement;
  private readonly winTitle: HTMLElement;
  private readonly winTime: HTMLElement;
  private readonly winSteps: HTMLElement;
  private readonly winButton: HTMLButtonElement;
  public readonly canvas: HTMLCanvasElement;
  public readonly ctx: CanvasRenderingContext2D;

  constructor(
    private state: GameState,
    container: HTMLElement,
    private sprites: SpriteLoader,
    private readonly onAdvance: () => void
  ) {
    this.stage = document.createElement('div');
    this.stage.className = 'game-stage';

    this.canvas = document.createElement('canvas');
    this.canvas.width = state.tilemap.width || 650;
    this.canvas.height = state.tilemap.height || 800;
    this.canvas.setAttribute('aria-label', 'Bobby Carrot game canvas');

    const hud = document.createElement('div');
    hud.className = 'game-hud';
    hud.setAttribute('aria-label', 'Game status');

    const timePill = this.createHudPill('Time', 'time');
    const levelPill = this.createHudPill('Level', 'level');
    const remainPill = this.createHudPill('Remain', 'remain');
    this.hudTime = timePill.value;
    this.hudLevel = levelPill.value;
    this.hudRemain = remainPill.value;
    hud.append(timePill.root, levelPill.root, remainPill.root);

    const winOverlay = this.createWinOverlay();
    this.winTitle = winOverlay.title;
    this.winTime = winOverlay.time;
    this.winSteps = winOverlay.steps;
    this.winButton = winOverlay.button;

    const ctx = this.canvas.getContext('2d');
    if (!ctx) throw new Error('Canvas not supported');
    this.ctx = ctx;
    this.ctx.imageSmoothingEnabled = false;
    this.canvas.style.imageRendering = 'pixelated';

    this.stage.append(this.canvas, hud, winOverlay.root);
    container.replaceChildren(this.stage);
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  setState(state: GameState) {
    this.state = state;
    this.canvas.width = state.tilemap.width || 650;
    this.canvas.height = state.tilemap.height || 800;
    this.resize();
  }

  resize() {
    const scale = Math.min(window.innerWidth / this.canvas.width, window.innerHeight / this.canvas.height);
    const width = Math.floor(this.canvas.width * scale);
    const height = Math.floor(this.canvas.height * scale);
    this.stage.style.width = `${width}px`;
    this.stage.style.height = `${height}px`;
    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;
  }

  draw() {
    const { ctx } = this;
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawTilemap();
    this.drawEntities();
    this.drawHud();
    this.drawOverlay();
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

  private createHudPill(label: string, modifier: string) {
    const root = document.createElement('div');
    root.className = `game-hud__pill game-hud__pill--${modifier}`;

    const labelEl = document.createElement('span');
    labelEl.className = 'game-hud__label';
    labelEl.textContent = label;

    const value = document.createElement('strong');
    value.className = 'game-hud__value';
    value.textContent = '0';

    root.append(labelEl, value);
    return { root, value };
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
      this.updateHudText(this.winTitle, 'SUCCESS!');
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
      this.strokeFillText('TRY AGAIN', 205, 350);
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
    const time = this.createWinStat('Time Used');
    const steps = this.createWinStat('Steps');
    stats.append(time.root, steps.root);

    const button = document.createElement('button');
    button.className = 'game-win__continue';
    button.type = 'button';
    button.textContent = 'Continue';
    button.disabled = true;
    button.addEventListener('click', () => this.onAdvance());

    panel.append(title, stats, button);
    root.append(panel);

    return { root, title, time: time.value, steps: steps.value, button };
  }

  private createWinStat(label: string) {
    const root = document.createElement('div');
    root.className = 'game-win__stat';

    const labelEl = document.createElement('span');
    labelEl.textContent = label;

    const value = document.createElement('strong');
    value.textContent = '0';

    root.append(labelEl, value);
    return { root, value };
  }

  private strokeFillText(text: string, x: number, y: number) {
    this.ctx.strokeText(text, x, y);
    this.ctx.fillText(text, x, y);
  }
}
