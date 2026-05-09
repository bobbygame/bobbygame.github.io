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

export class Renderer {
  public readonly canvas: HTMLCanvasElement;
  public readonly ctx: CanvasRenderingContext2D;
  private video?: HTMLVideoElement;
  private videoRect?: { x: number; y: number; width: number; height: number };

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
    this.ctx.imageSmoothingEnabled = true;

    container.replaceChildren(this.canvas);
    this.setupEndVideo(container);
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    const scale = Math.min(window.innerWidth / this.canvas.width, window.innerHeight / this.canvas.height);
    const width = Math.floor(this.canvas.width * scale);
    const height = Math.floor(this.canvas.height * scale);
    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;
    this.positionEndVideo(width, height);
  }

  draw() {
    const { ctx } = this;
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

    if (state.mapName === 'end') {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      return;
    }

    if (!tileFrame) return;

    const sheet = this.sprites.getObject(state.tilemap.typeName)?.frame?.sheet;
    if (!sheet) return;

    const tileSize = state.tileSize;
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
      .filter((entity) => !entity.dead && entity.kind !== 'bornPlace')
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

    if (this.state.mapName === 'end') {
      this.drawEndText(entity);
      return;
    }

    if (entity.kind === 'other') return;

    this.ctx.fillStyle = fallbackColor(entity.kind);
    this.ctx.fillRect(Math.round(entity.pos.x), Math.round(entity.pos.y), entity.size.x, entity.size.y);
  }

  private drawHud() {
    if (this.state.mapName === 'end') return;

    const { ctx, state } = this;
    const remain = Math.max(0, state.requiredCarrots - state.inventory.carrots);
    const time = Math.floor(state.stats.timeElapsed);
    const level = state.mapName === 'end' ? '30' : state.mapName.replace('map', '');

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
    ctx.restore();
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

  private drawEndText(entity: Entity) {
    const textByType: Record<string, string> = {
      TheEnd: 'THE END',
      Dlut: 'DLUT',
      Myblog: 'Myblog(Click Me)',
    };
    const text = String(entity.data.text ?? textByType[entity.typeName] ?? '');
    if (!text) return;

    const color = Array.isArray(entity.data.color)
      ? entity.data.color as number[]
      : entity.typeName === 'TheEnd'
        ? [0, 1, 0, 1]
        : [1, 1, 1, 1];
    const font = String(entity.data.font ?? (entity.typeName === 'TheEnd' ? 'comicbd' : 'bgothm'));
    const size = Number(entity.data.size ?? (entity.typeName === 'TheEnd' ? 30 : 18));
    const align = String(entity.data['horizontal-alignment'] ?? 'left') as CanvasTextAlign;
    const vertical = String(entity.data['vertical-alignment'] ?? 'top');
    const x = align === 'center' ? entity.pos.x + entity.size.x / 2 : entity.pos.x;
    const y = vertical === 'center' ? entity.pos.y + entity.size.y / 2 : entity.pos.y;

    this.ctx.save();
    this.ctx.font = `${size}px ${font}, comic, system-ui, sans-serif`;
    this.ctx.fillStyle = `rgba(${Math.round((color[0] ?? 1) * 255)}, ${Math.round((color[1] ?? 1) * 255)}, ${Math.round((color[2] ?? 1) * 255)}, ${color[3] ?? 1})`;
    this.ctx.textAlign = align;
    this.ctx.textBaseline = vertical === 'center' ? 'middle' : 'top';
    this.ctx.fillText(text, x, y);
    this.ctx.restore();
  }

  private setupEndVideo(container: HTMLElement) {
    if (this.state.mapName !== 'end') return;
    const videoEntity = this.state.entities.find((entity) => entity.typeName === '视频');
    const src = String(videoEntity?.data['h264-source'] ?? '');
    if (!videoEntity || !src) return;

    this.videoRect = {
      x: videoEntity.pos.x,
      y: videoEntity.pos.y,
      width: videoEntity.size.x,
      height: videoEntity.size.y,
    };
    this.video = document.createElement('video');
    this.video.src = src;
    this.video.autoplay = true;
    this.video.loop = true;
    this.video.muted = true;
    this.video.playsInline = true;
    this.video.style.position = 'fixed';
    this.video.style.objectFit = 'cover';
    this.video.style.pointerEvents = 'none';
    this.video.style.zIndex = '2';
    container.appendChild(this.video);
    void this.video.play().catch(() => undefined);
  }

  private positionEndVideo(canvasWidth: number, canvasHeight: number) {
    if (!this.video || !this.videoRect) return;
    const left = Math.floor((window.innerWidth - canvasWidth) / 2 + this.videoRect.x * (canvasWidth / this.canvas.width));
    const top = Math.floor((window.innerHeight - canvasHeight) / 2 + this.videoRect.y * (canvasHeight / this.canvas.height));
    const width = Math.floor(this.videoRect.width * (canvasWidth / this.canvas.width));
    const height = Math.floor(this.videoRect.height * (canvasHeight / this.canvas.height));

    this.video.style.left = `${left}px`;
    this.video.style.top = `${top}px`;
    this.video.style.width = `${width}px`;
    this.video.style.height = `${height}px`;
  }

  private strokeFillText(text: string, x: number, y: number) {
    this.ctx.strokeText(text, x, y);
    this.ctx.fillText(text, x, y);
  }
}
