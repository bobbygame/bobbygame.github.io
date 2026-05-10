import type { GameState, Entity } from './types';
import { SpriteLoader } from './sprites';

const HUD_FONT = 'bold 26px comic, system-ui, sans-serif';
const SMALL_FONT = 'bold 24px comic, system-ui, sans-serif';

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
  public readonly canvas: HTMLCanvasElement;
  public readonly ctx: CanvasRenderingContext2D;

  constructor(
    private state: GameState,
    container: HTMLElement,
    private sprites: SpriteLoader
  ) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = state.tilemap.width || 650;
    this.canvas.height = state.tilemap.height || 800;
    this.canvas.setAttribute('aria-label', 'Bobby Carrot game canvas');

    const ctx = this.canvas.getContext('2d');
    if (!ctx) throw new Error('Canvas not supported');
    this.ctx = ctx;
    this.ctx.imageSmoothingEnabled = false;
    this.canvas.style.imageRendering = 'pixelated';

    container.replaceChildren(this.canvas);
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    const scale = Math.min(window.innerWidth / this.canvas.width, window.innerHeight / this.canvas.height);
    const width = Math.floor(this.canvas.width * scale);
    const height = Math.floor(this.canvas.height * scale);
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
    const { ctx, state } = this;
    const remain = Math.max(0, state.requiredCarrots - state.inventory.carrots);
    const time = Math.floor(state.stats.timeElapsed);
    const level = state.mapName.replace('map', '');

    ctx.save();
    ctx.font = HUD_FONT;
    ctx.fillStyle = '#fff';
    ctx.lineWidth = 4;
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.45)';
    ctx.textBaseline = 'top';

    this.strokeFillText(`Time: ${time}`, 16, 12);
    this.strokeFillText(`Level ${level}`, 260, 12);
    this.strokeFillText(`Remain: ${remain}`, 455, 12);

    const carrotFrame = this.sprites.getFrame('carrot1');
    if (carrotFrame) this.sprites.drawSprite(ctx, carrotFrame, 600, 8, 46, 46, -0.25);
    this.drawInventoryKeys();
    ctx.restore();
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
      ctx.save();
      ctx.font = 'bold 48px comic, system-ui, sans-serif';
      ctx.fillStyle = '#fff200';
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.55)';
      ctx.lineWidth = 5;
      this.strokeFillText('SUCCESS!', 215, 120);
      ctx.font = SMALL_FONT;
      this.strokeFillText(`Time Use: ${Math.floor(state.stats.timeElapsed)}`, 205, 330);
      this.strokeFillText(`Steps: ${state.stats.steps}`, 245, 385);
      this.strokeFillText('Continue', 25, 720);
      ctx.restore();
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

  private strokeFillText(text: string, x: number, y: number) {
    this.ctx.strokeText(text, x, y);
    this.ctx.fillText(text, x, y);
  }
}
