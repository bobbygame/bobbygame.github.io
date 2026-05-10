import type { GameState, Entity } from './types';
import { audio } from './audio';

function sameGridCell(a: Entity, b: Entity, tileSize: number): boolean {
  return Math.round(a.pos.x / tileSize) === Math.round(b.pos.x / tileSize)
    && Math.round(a.pos.y / tileSize) === Math.round(b.pos.y / tileSize);
}

function entitiesAt(state: GameState, x: number, y: number): Entity[] {
  const gridX = Math.round(x / state.tileSize);
  const gridY = Math.round(y / state.tileSize);
  return state.entities.filter((e) => {
    if (e.dead) return false;
    return Math.round(e.pos.x / state.tileSize) === gridX
      && Math.round(e.pos.y / state.tileSize) === gridY;
  });
}

function advanceStoneSign(entity: Entity) {
  if (entity.kind === 'stone') {
    const next = Number(entity.data.sign ?? 1) + 1;
    entity.data.sign = next === 3 ? 1 : next;
  }
  if (entity.kind === 'stoneAngle') {
    const next = Number(entity.data.sign ?? 1) + 1;
    entity.data.sign = next === 5 ? 1 : next;
  }
}

function advanceWhenLeft(state: GameState, key: 'lastStoneSteppedId' | 'lastStoneAngleSteppedId') {
  const id = state[key];
  if (id == null) return;
  const entity = state.entities.find((e) => e.id === id && (e.kind === 'stone' || e.kind === 'stoneAngle'));
  if (!entity || entity.dead) {
    state[key] = null;
    return;
  }
  if (!sameGridCell(entity, state.player, state.tileSize)) {
    advanceStoneSign(entity);
    state[key] = null;
    state.events.push(`${entity.typeName} changed`);
  }
}

export function armTrapIfLeft(state: GameState) {
  advanceWhenLeft(state, 'lastStoneSteppedId');
  advanceWhenLeft(state, 'lastStoneAngleSteppedId');

  if (state.lastTrapSteppedId == null) return;
  const trap = state.entities.find((e) => e.id === state.lastTrapSteppedId && e.kind === 'trap');
  if (!trap || trap.dead) {
    state.lastTrapSteppedId = null;
    return;
  }
  // Only arm once the player has moved off this trap cell
  if (!sameGridCell(trap, state.player, state.tileSize)) {
    trap.data.isSharp = true;
    state.lastTrapSteppedId = null;
    state.events.push('Trap armed');
  }
}

export function handleArrival(state: GameState) {
    // Check if channel should open
    if (!state.channelOpen && state.inventory.carrots >= state.requiredCarrots) {
      state.channelOpen = true;
      state.events.push('Channel opened!');
    }

  const { player } = state;
  const here = entitiesAt(state, player.pos.x, player.pos.y);

  for (const e of here) {
    if (e.kind === 'carrot') {
      e.dead = true;
      state.inventory.carrots += 1;
      state.events.push('Carrot +1');
      audio.play('collect');
    }
    if (e.kind === 'key') {
      e.dead = true;
      const color = String(e.data.sign ?? '0');
      state.inventory.keys[color] = true;
      state.events.push(`Key ${color}`);
      audio.play('collect');
    }
    if (e.kind === 'lock') {
      const color = String(e.data.sign ?? '0');
      if (state.inventory.keys[color]) {
        e.dead = true;
        delete state.inventory.keys[color];
        state.events.push(`Unlock ${color}`);
        audio.play('unlock');
      }
    }
    if (e.kind === 'trap') {
      const armed = Boolean(e.data.isSharp);
      if (armed) {
        state.events.push('Hit trap');
        state.player.dead = true;
        state.animation.state = 'dead';
        audio.play('die');
      } else {
        // First press: mark to arm after leaving this tile
        state.lastTrapSteppedId = e.id;
        state.events.push('Trap pressed');
      }
    }
    if (e.kind === 'stone') {
      state.lastStoneSteppedId = e.id;
    }
    if (e.kind === 'stoneAngle') {
      state.lastStoneAngleSteppedId = e.id;
    }
    if (e.kind === 'goal') {
      state.won = true;
      state.events.push('Goal reached');
      audio.play('win');
    }
    if (e.kind === 'channel' && state.channelOpen) {
      state.won = true;
      state.events.push('Level complete!');
      audio.play('win');
    }
  }
}
