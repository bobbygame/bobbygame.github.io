import { loadLayout } from './layout';
import { gameStateFromLevelDefinition, layoutToLevelDefinition } from './levelAdapter';
import type { LevelDefinition } from './levelDefinition';
import type { GameState, LayoutFile } from './types';
import { getRequiredCarrots } from './config';

export async function loadLevelDefinition(mapName: string): Promise<LevelDefinition> {
  const layout = await loadLayout(mapName) as LayoutFile;
  return layoutToLevelDefinition(layout, getRequiredCarrots(mapName));
}

export async function loadGame(mapName: string): Promise<GameState> {
  return gameStateFromLevelDefinition(await loadLevelDefinition(mapName));
}
