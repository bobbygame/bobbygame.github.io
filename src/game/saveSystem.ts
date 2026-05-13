import type { Entity, GameState } from './types';

const SAVE_KEY = 'bobby-carrot.save.v1';
const SAVE_VERSION = 1;

type GameStateSnapshot = Omit<GameState, 'player'> & {
  playerId: number;
};

export interface GameSaveSlot {
  version: typeof SAVE_VERSION;
  savedAt: number;
  currentMap: string;
  currentCommunityId: string | null;
  state: GameStateSnapshot;
}

export interface SaveActionResult {
  ok: boolean;
  message: string;
  slot?: GameSaveSlot | null;
}

function cloneJson<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

export function loadGameSave(): GameSaveSlot | null {
  try {
    const raw = window.localStorage.getItem(SAVE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as unknown;
    if (!isRecord(parsed) || parsed.version !== SAVE_VERSION || !isRecord(parsed.state)) return null;
    return parsed as unknown as GameSaveSlot;
  } catch {
    return null;
  }
}

export function storeGameSave(slot: GameSaveSlot) {
  window.localStorage.setItem(SAVE_KEY, JSON.stringify(slot));
}

export function clearGameSave() {
  window.localStorage.removeItem(SAVE_KEY);
}

export function createGameSave(
  state: GameState,
  currentMap: string,
  currentCommunityId: string | null
): GameSaveSlot {
  const snapshot: GameStateSnapshot = {
    tileSize: state.tileSize,
    mapName: state.mapName,
    requiredCarrots: state.requiredCarrots,
    entities: cloneJson(state.entities),
    inventory: cloneJson(state.inventory),
    tilemap: cloneJson(state.tilemap),
    events: state.events.slice(-20),
    won: state.won,
    channelOpen: state.channelOpen,
    lastStoneSteppedId: state.lastStoneSteppedId ?? null,
    lastStoneAngleSteppedId: state.lastStoneAngleSteppedId ?? null,
    lastTrapSteppedId: state.lastTrapSteppedId ?? null,
    stats: { ...state.stats },
    animation: { ...state.animation, state: 'idle' },
    playerId: state.player.id,
  };

  return {
    version: SAVE_VERSION,
    savedAt: Date.now(),
    currentMap,
    currentCommunityId,
    state: snapshot,
  };
}

export function restoreGameState(slot: GameSaveSlot): GameState | null {
  try {
    const snapshot = slot.state;
    const entities = cloneJson(snapshot.entities).map((entity) => ({
      ...entity,
      pos: { ...entity.pos },
      size: { ...entity.size },
      data: { ...entity.data },
    })) as Entity[];
    const player = entities.find((entity) => entity.id === snapshot.playerId)
      ?? entities.find((entity) => entity.kind === 'player');

    if (!player) return null;

    return {
      tileSize: snapshot.tileSize,
      mapName: snapshot.mapName,
      requiredCarrots: snapshot.requiredCarrots,
      entities,
      player,
      inventory: cloneJson(snapshot.inventory),
      tilemap: cloneJson(snapshot.tilemap),
      events: [...snapshot.events],
      won: Boolean(snapshot.won),
      channelOpen: Boolean(snapshot.channelOpen),
      lastStoneSteppedId: snapshot.lastStoneSteppedId ?? null,
      lastStoneAngleSteppedId: snapshot.lastStoneAngleSteppedId ?? null,
      lastTrapSteppedId: snapshot.lastTrapSteppedId ?? null,
      stats: { ...snapshot.stats },
      animation: { ...snapshot.animation, state: 'idle' },
    };
  } catch {
    return null;
  }
}
