import type { Entity, GameState } from './types';
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

export function drawGameWorld(
  ctx: CanvasRenderingContext2D,
  state: GameState,
  sprites: SpriteLoader,
  width = state.tilemap.width,
  height = state.tilemap.height
) {
  ctx.imageSmoothingEnabled = false;
  ctx.clearRect(0, 0, width, height);
  drawTilemap(ctx, state, sprites, width, height);
  drawEntities(ctx, state, sprites);
}

function drawTilemap(
  ctx: CanvasRenderingContext2D,
  state: GameState,
  sprites: SpriteLoader,
  width: number,
  height: number
) {
  const tileFrame = sprites.getFrame(state.tilemap.typeName);

  ctx.fillStyle = '#1fa33a';
  ctx.fillRect(0, 0, width, height);

  if (!tileFrame) return;

  const tileSize = state.tileSize;
  const sheet = sprites.getObject(state.tilemap.typeName)?.frame?.sheet;
  if (!sheet) return;

  const tilesPerRow = Math.max(1, Math.floor(tileFrame.w / tileSize));
  const maxTileIndex = Math.max(0, Math.floor(tileFrame.w / tileSize) * Math.floor(tileFrame.h / tileSize) - 1);

  for (let row = 0; row < state.tilemap.rows; row += 1) {
    for (let col = 0; col < state.tilemap.cols; col += 1) {
      const tileId = state.tilemap.data[row * state.tilemap.cols + col] ?? 0;
      const frameIndex = Math.max(0, tileId > maxTileIndex ? tileId - 1 : tileId);
      const sx = tileFrame.x + (frameIndex % tilesPerRow) * tileSize;
      const sy = tileFrame.y + Math.floor(frameIndex / tilesPerRow) * tileSize;

      sprites.drawSprite(
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

function drawEntities(ctx: CanvasRenderingContext2D, state: GameState, sprites: SpriteLoader) {
  const ordered = state.entities
    .filter((entity) => entity.kind === 'player' || !entity.dead)
    .sort((a, b) => {
      if (a.kind === 'player') return 1;
      if (b.kind === 'player') return -1;
      return a.pos.y - b.pos.y;
    });

  for (const entity of ordered) drawEntity(ctx, state, sprites, entity);
}

function drawEntity(ctx: CanvasRenderingContext2D, state: GameState, sprites: SpriteLoader, entity: Entity) {
  const frame = sprites.frameForEntity(entity, state);
  if (frame) {
    sprites.drawSprite(
      ctx,
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

  ctx.fillStyle = fallbackColor(entity.kind);
  ctx.fillRect(Math.round(entity.pos.x), Math.round(entity.pos.y), entity.size.x, entity.size.y);
}
