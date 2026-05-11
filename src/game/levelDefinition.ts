import type { EntityKind, Vec2 } from './types';

export const DEFAULT_TILE_SIZE = 50;

export interface LevelGridPosition {
  col: number;
  row: number;
  offset: Vec2;
}

export interface LevelEntityDefinition {
  id: number;
  kind: EntityKind;
  typeName: string;
  pos: Vec2;
  cell: LevelGridPosition;
  size: Vec2;
  data: Record<string, unknown>;
  angle: number;
}

export interface LevelTilemapDefinition {
  cols: number;
  rows: number;
  width: number;
  height: number;
  tileSize: number;
  data: number[];
  typeName: string;
}

export interface LevelDefinition {
  name: string;
  pixelSize: Vec2;
  requiredCarrots: number;
  tilemap: LevelTilemapDefinition;
  entities: LevelEntityDefinition[];
}
