import { loadLevel } from '../content';
import type { LevelDefinition } from './levelDefinition';
import { gameStateFromLevelDefinition } from './stateFactory';
import type { GameState } from './types';

export async function loadLevelDefinition(mapName: string): Promise<LevelDefinition> {
  return loadLevel(mapName);
}

export async function loadGame(mapName: string): Promise<GameState> {
  return gameStateFromLevelDefinition(await loadLevelDefinition(mapName));
}
