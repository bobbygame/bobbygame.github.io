import type { Entity, GameState } from './types';

export type Direction = 'left' | 'right' | 'up' | 'down' | null;

const dirVec: Record<Exclude<Direction, null>, { x: number; y: number }> = {
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
};

function sameCell(a: Entity, b: Entity): boolean {
  return Math.round(a.pos.x / 50) === Math.round(b.pos.x / 50)
    && Math.round(a.pos.y / 50) === Math.round(b.pos.y / 50);
}

function rectsOverlap(ax: number, ay: number, aw: number, ah: number, bx: number, by: number, bw: number, bh: number): boolean {
  return ax < bx + bw && ax + aw > bx && ay < by + bh && ay + ah > by;
}

function isSolid(e: Entity): boolean {
  return e.kind === 'wall' || e.kind === 'lock';
}

function stoneAngleEnterBlocks(e: Entity, dir: Exclude<Direction, null>): boolean {
  if (e.kind !== 'stoneAngle') return false;
  const sign = Number(e.data.sign ?? 0);
  if (dir === 'right') return sign === 1 || sign === 4;
  if (dir === 'left') return sign === 2 || sign === 3;
  if (dir === 'down') return sign === 1 || sign === 2;
  if (dir === 'up') return sign === 3 || sign === 4;
  return false;
}

function stoneAngleExitBlocks(e: Entity, dir: Exclude<Direction, null>): boolean {
  if (e.kind !== 'stoneAngle') return false;
  const sign = Number(e.data.sign ?? 0);
  if (dir === 'right') return sign === 2 || sign === 3;
  if (dir === 'left') return sign === 1 || sign === 4;
  if (dir === 'down') return sign === 3 || sign === 4;
  if (dir === 'up') return sign === 1 || sign === 2;
  return false;
}

function movementAxis(dir: Exclude<Direction, null>): 1 | 2 {
  return dir === 'left' || dir === 'right' ? 1 : 2;
}

function directionValue(dir: Exclude<Direction, null>): 0 | 1 {
  return dir === 'left' || dir === 'up' ? 0 : 1;
}

function stoneBlocks(e: Entity, dir: Exclude<Direction, null>): boolean {
  if (e.kind !== 'stone') return false;
  return movementAxis(dir) !== Number(e.data.sign ?? 1);
}

function conveyorBlocks(e: Entity, dir: Exclude<Direction, null>): boolean {
  if (e.kind === 'conveyorX' && (dir === 'left' || dir === 'right')) {
    return directionValue(dir) !== Number(e.data.direction1 ?? 0);
  }
  if (e.kind === 'conveyorY' && (dir === 'up' || dir === 'down')) {
    return directionValue(dir) !== Number(e.data.direction1 ?? 0);
  }
  return false;
}

function isConveyorForDirection(e: Entity, dir: Exclude<Direction, null>): boolean {
  if (e.kind === 'conveyorX') return dir === 'left' || dir === 'right';
  if (e.kind === 'conveyorY') return dir === 'up' || dir === 'down';
  return false;
}

export class MovementSystem {
  private intent: Direction = null;
  private moving = false;
  private speed = 240; // px per second
  private target = { x: 0, y: 0 };

  constructor(private state: GameState) {}

  isMoving() {
    return this.moving;
  }

  setIntent(dir: Direction) {
    this.intent = dir;
  }

  update(dt: number) {
    const { player, tileSize } = this.state;

    if (!this.moving && this.intent) {
      const dir = this.intent;
      const delta = dirVec[dir];
      const targetX = player.pos.x + delta.x * tileSize;
      const targetY = player.pos.y + delta.y * tileSize;

      if (this.canMove(dir, targetX, targetY)) {
        const conveyorTarget = this.resolveConveyorTarget(dir, targetX, targetY);
        this.moving = true;
        this.target = conveyorTarget ?? { x: targetX, y: targetY };
        this.state.animation.direction = dir;
        this.state.animation.state = 'moving';
        this.state.stats.steps += 1;
      } else {
        this.state.events.push(`Blocked ${dir}`);
      }
      // Consume intent so a single key press moves only one tile.
      this.intent = null;
    }

    if (this.moving) {
      const dx = this.target.x - player.pos.x;
      const dy = this.target.y - player.pos.y;
      const dist = Math.hypot(dx, dy);
      const step = this.speed * dt;
      if (dist <= step) {
        player.pos.x = this.target.x;
        player.pos.y = this.target.y;
        this.moving = false;
        this.state.animation.state = 'idle';
      } else {
        player.pos.x += (dx / dist) * step;
        player.pos.y += (dy / dist) * step;
      }
    }

    // Track elapsed time
    this.state.stats.timeElapsed += dt;
  }

  private canMove(dir: Exclude<Direction, null>, targetX: number, targetY: number): boolean {
    const { entities, tilemap, tileSize } = this.state;
    if (targetX < 0 || targetY < 0 || targetX + tileSize > tilemap.width || targetY + tileSize > tilemap.height) return false;

    const targetW = tileSize;
    const targetH = tileSize;

    for (const e of entities) {
      if (e.dead) continue;
      const overlaps = rectsOverlap(targetX, targetY, targetW, targetH, e.pos.x, e.pos.y, e.size.x, e.size.y);
      if (!overlaps) continue;

      if (e.kind === 'lock') {
        if (!this.tryUnlock(e)) return false;
        continue;
      }
      if (isSolid(e)) return false;
      if (stoneBlocks(e, dir)) return false;
      if (stoneAngleEnterBlocks(e, dir)) return false;
      if (conveyorBlocks(e, dir)) return false;
    }

    // Stones and angled stones also constrain the direction when Bobby is already standing on them.
    for (const e of entities) {
      if (e.dead) continue;
      if (sameCell(e, this.state.player) && stoneBlocks(e, dir)) return false;
      if (sameCell(e, this.state.player) && stoneAngleExitBlocks(e, dir)) return false;
    }

    return true;
  }

  private resolveConveyorTarget(dir: Exclude<Direction, null>, targetX: number, targetY: number): { x: number; y: number } | null {
    const { entities, tileSize } = this.state;
    const conveyor = entities.find((e) => {
      if (e.dead || !isConveyorForDirection(e, dir)) return false;
      return rectsOverlap(targetX, targetY, tileSize, tileSize, e.pos.x, e.pos.y, e.size.x, e.size.y)
        && !conveyorBlocks(e, dir);
    });

    if (!conveyor) return null;

    const direction = Number(conveyor.data.direction1 ?? 0);
    const candidates = entities.filter((e) => {
      if (e.dead || e.kind !== conveyor.kind) return false;
      if (Number(e.data.direction1 ?? 0) !== direction) return false;
      if (conveyor.kind === 'conveyorX') return Math.round(e.pos.y / tileSize) === Math.round(conveyor.pos.y / tileSize);
      return Math.round(e.pos.x / tileSize) === Math.round(conveyor.pos.x / tileSize);
    });
    const run = [conveyor];
    let expanded = true;
    while (expanded) {
      expanded = false;
      for (const e of candidates) {
        if (run.includes(e)) continue;
        const adjacent = run.some((picked) => {
          if (conveyor.kind === 'conveyorX') return Math.abs(e.pos.x - picked.pos.x) === tileSize;
          return Math.abs(e.pos.y - picked.pos.y) === tileSize;
        });
        if (adjacent) {
          run.push(e);
          expanded = true;
        }
      }
    }

    let exitX = targetX;
    let exitY = targetY;
    if (conveyor.kind === 'conveyorX') {
      const minX = Math.min(...run.map((e) => e.pos.x));
      const maxX = Math.max(...run.map((e) => e.pos.x));
      exitX = direction === 0 ? minX - tileSize : maxX + tileSize;
      exitY = conveyor.pos.y;
    } else {
      const minY = Math.min(...run.map((e) => e.pos.y));
      const maxY = Math.max(...run.map((e) => e.pos.y));
      exitX = conveyor.pos.x;
      exitY = direction === 0 ? minY - tileSize : maxY + tileSize;
    }

    if (this.isBlockedAt(exitX, exitY)) return null;
    return { x: exitX, y: exitY };
  }

  private isBlockedAt(x: number, y: number): boolean {
    const { entities, tilemap, tileSize } = this.state;
    if (x < 0 || y < 0 || x + tileSize > tilemap.width || y + tileSize > tilemap.height) return true;

    for (const e of entities) {
      if (e.dead) continue;
      if (!rectsOverlap(x, y, tileSize, tileSize, e.pos.x, e.pos.y, e.size.x, e.size.y)) continue;
      if (e.kind === 'lock' && !this.tryUnlock(e)) return true;
      if (isSolid(e)) return true;
    }

    return false;
  }

  private tryUnlock(lock: Entity): boolean {
    const color = String(lock.data.sign ?? '0');
    if (!this.state.inventory.keys[color]) return false;

    lock.dead = true;
    delete this.state.inventory.keys[color];
    this.state.events.push(`Unlock ${color}`);
    return true;
  }
}
