import { createCommunityLevel, isCommunityLevel, type CommunityLevel } from '../game/communityLevel';
import { DEFAULT_TILE_SIZE, type LevelDefinition, type LevelEntityDefinition } from '../game/levelDefinition';
import type { EntityKind } from '../game/types';

export type EntityTool = string;

export type EditorTool =
  | { type: 'select' }
  | { type: 'erase' }
  | { type: 'tile'; tileId: number }
  | { type: 'entity'; entity: EntityTool };

export interface EntityToolDefinition {
  tool: EntityTool;
  kind: EntityKind;
  typeName: string;
  label: string;
  group: string;
  data: Record<string, unknown>;
  unique?: boolean;
}

export const entityTools: EntityToolDefinition[] = [
  { tool: 'player', kind: 'player', typeName: 'bobby', label: 'Player', group: 'Essentials', data: {}, unique: true },
  { tool: 'bornPlace', kind: 'bornPlace', typeName: 'bornPlace', label: 'Spawn', group: 'Essentials', data: {}, unique: true },
  { tool: 'channel', kind: 'channel', typeName: 'channel', label: 'Exit', group: 'Essentials', data: {}, unique: true },
  { tool: 'carrot', kind: 'carrot', typeName: 'carrot1', label: 'Carrot', group: 'Essentials', data: {} },

  { tool: 'barX', kind: 'wall', typeName: 'barX', label: 'Fence X', group: 'Walls', data: {} },
  { tool: 'barY', kind: 'wall', typeName: 'barY', label: 'Fence Y', group: 'Walls', data: {} },
  { tool: 'barLeftTop', kind: 'wall', typeName: 'barLeftTop', label: 'Fence LT', group: 'Walls', data: {} },
  { tool: 'barRightTop', kind: 'wall', typeName: 'barRightTop', label: 'Fence RT', group: 'Walls', data: {} },
  { tool: 'barLeftBottom', kind: 'wall', typeName: 'barLeftBottom', label: 'Fence LB', group: 'Walls', data: {} },
  { tool: 'barRightBottom', kind: 'wall', typeName: 'barRightBottom', label: 'Fence RB', group: 'Walls', data: {} },

  { tool: 'trapSafe', kind: 'trap', typeName: 'trap', label: 'Trap Safe', group: 'Hazards', data: { isSharp: 0 } },
  { tool: 'trapSharp', kind: 'trap', typeName: 'trap', label: 'Trap Sharp', group: 'Hazards', data: { isSharp: 1 } },
  { tool: 'trapGray', kind: 'other', typeName: 'trap', label: 'Trap Gray', group: 'Hazards', data: { sprite: 'Animation 2' } },
  { tool: 'stoneHorizontal', kind: 'stone', typeName: 'stone', label: 'Stone H', group: 'Hazards', data: { sign: 1 } },
  { tool: 'stoneVertical', kind: 'stone', typeName: 'stone', label: 'Stone V', group: 'Hazards', data: { sign: 2 } },
  { tool: 'stoneAngleDR', kind: 'stoneAngle', typeName: 'stoneAngle', label: 'Corner DR', group: 'Hazards', data: { sign: 1 } },
  { tool: 'stoneAngleDL', kind: 'stoneAngle', typeName: 'stoneAngle', label: 'Corner DL', group: 'Hazards', data: { sign: 2 } },
  { tool: 'stoneAngleUL', kind: 'stoneAngle', typeName: 'stoneAngle', label: 'Corner UL', group: 'Hazards', data: { sign: 3 } },
  { tool: 'stoneAngleUR', kind: 'stoneAngle', typeName: 'stoneAngle', label: 'Corner UR', group: 'Hazards', data: { sign: 4 } },

  { tool: 'conveyorLeft', kind: 'conveyorX', typeName: 'conveyorBeltX', label: 'Belt Left', group: 'Conveyors', data: { direction1: 0, isLeft: true } },
  { tool: 'conveyorRight', kind: 'conveyorX', typeName: 'conveyorBeltX', label: 'Belt Right', group: 'Conveyors', data: { direction1: 1, isLeft: false } },
  { tool: 'conveyorUp', kind: 'conveyorY', typeName: 'conveyorBeltY', label: 'Belt Up', group: 'Conveyors', data: { direction1: 0, isUp: true } },
  { tool: 'conveyorDown', kind: 'conveyorY', typeName: 'conveyorBeltY', label: 'Belt Down', group: 'Conveyors', data: { direction1: 1, isUp: false } },
  { tool: 'conveyorButtonOn', kind: 'conveyorButton', typeName: 'conveyorBeltButton', label: 'Belt On', group: 'Switches', data: { open: 1 } },
  { tool: 'conveyorButtonOff', kind: 'conveyorButton', typeName: 'conveyorBeltButton', label: 'Belt Off', group: 'Switches', data: { open: 0 } },
  { tool: 'conveyorButtonMid', kind: 'other', typeName: 'conveyorBeltButton', label: 'Belt Mid', group: 'Switches', data: { sprite: '2' } },
  { tool: 'stoneButtonOn', kind: 'stoneButton', typeName: 'stoneButton', label: 'Stone On', group: 'Switches', data: { open: 1 } },
  { tool: 'stoneButtonOff', kind: 'stoneButton', typeName: 'stoneButton', label: 'Stone Off', group: 'Switches', data: { open: 0 } },

  { tool: 'keyYellow', kind: 'key', typeName: 'key', label: 'Key Yellow', group: 'Keys', data: { sign: 1 } },
  { tool: 'keyRed', kind: 'key', typeName: 'key', label: 'Key Red', group: 'Keys', data: { sign: 2 } },
  { tool: 'keyBlue', kind: 'key', typeName: 'key', label: 'Key Blue', group: 'Keys', data: { sign: 3 } },
  { tool: 'lockYellow', kind: 'lock', typeName: 'lock', label: 'Lock Yellow', group: 'Keys', data: { sign: 1 } },
  { tool: 'lockRed', kind: 'lock', typeName: 'lock', label: 'Lock Red', group: 'Keys', data: { sign: 2 } },
  { tool: 'lockBlue', kind: 'lock', typeName: 'lock', label: 'Lock Blue', group: 'Keys', data: { sign: 3 } },

  { tool: 'carrotMark', kind: 'other', typeName: 'carrotMark', label: 'Carrot Mark', group: 'Decor', data: {} },
  { tool: 'upCtrl', kind: 'other', typeName: 'upCtrl', label: 'Ctrl Up', group: 'Decor', data: {} },
  { tool: 'rightCtrl', kind: 'other', typeName: 'rightCtrl', label: 'Ctrl Right', group: 'Decor', data: {} },
  { tool: 'leftCtrl', kind: 'other', typeName: 'leftCtrl', label: 'Ctrl Left', group: 'Decor', data: {} },
  { tool: 'downCtrl', kind: 'other', typeName: 'downCtrl', label: 'Ctrl Down', group: 'Decor', data: {} },
];

export const tilePalette = [
  { id: 0, label: 'Grass', color: '#22a345' },
  { id: 1, label: 'Path 1', color: '#c0b07a' },
  { id: 2, label: 'Path 2', color: '#a48e5d' },
  { id: 3, label: 'Path 3', color: '#776042' },
  { id: 4, label: 'Path 4', color: '#d0c28d' },
  { id: 5, label: 'Path 5', color: '#8d764f' },
  { id: 6, label: 'Path 6', color: '#b99b66' },
  { id: 7, label: 'Stone 1', color: '#5f7680' },
  { id: 8, label: 'Stone 2', color: '#6e8892' },
  { id: 9, label: 'Stone 3', color: '#839aa1' },
  { id: 10, label: 'Stone 4', color: '#475f69' },
  { id: 11, label: 'Stone 5', color: '#36515a' },
];

export function createBlankLevel(): CommunityLevel {
  const cols = 16;
  const rows = 16;
  const level: LevelDefinition = {
    name: 'community-map',
    pixelSize: { x: cols * DEFAULT_TILE_SIZE, y: rows * DEFAULT_TILE_SIZE },
    requiredCarrots: 1,
    tilemap: {
      cols,
      rows,
      width: cols * DEFAULT_TILE_SIZE,
      height: rows * DEFAULT_TILE_SIZE,
      tileSize: DEFAULT_TILE_SIZE,
      typeName: 'Tilemap',
      data: new Array(cols * rows).fill(0),
    },
    entities: [
      createEntity(entityTools[0], 1, 1, 1),
      createEntity(entityTools[1], 1, 1, 2),
      createEntity(toolForEntity('channel'), 14, 14, 3),
      createEntity(entityTools[3], 8, 8, 4),
    ],
  };
  return createCommunityLevel(level, {
    title: 'New Community Level',
    author: 'community',
    tags: ['draft'],
  });
}

export function createEntity(definition: EntityToolDefinition, col: number, row: number, id: number): LevelEntityDefinition {
  const pos = { x: col * DEFAULT_TILE_SIZE, y: row * DEFAULT_TILE_SIZE };
  return {
    id,
    kind: definition.kind,
    typeName: definition.typeName,
    pos,
    cell: { col, row, offset: { x: 0, y: 0 } },
    size: { x: DEFAULT_TILE_SIZE, y: DEFAULT_TILE_SIZE },
    data: { ...definition.data },
    angle: 0,
  };
}

export function cloneCommunityLevel(level: CommunityLevel): CommunityLevel {
  return structuredClone(level);
}

export function parseCommunityLevel(source: string): CommunityLevel {
  const parsed = JSON.parse(source) as unknown;
  if (isCommunityLevel(parsed)) return parsed;
  if (parsed && typeof parsed === 'object' && 'tilemap' in parsed && 'entities' in parsed) {
    return createCommunityLevel(parsed as LevelDefinition);
  }
  throw new Error('Unsupported level file');
}

export function nextEntityId(level: LevelDefinition): number {
  return Math.max(0, ...level.entities.map((entity) => entity.id)) + 1;
}

export function syncEntityCell(entity: LevelEntityDefinition) {
  const col = Math.round(entity.pos.x / DEFAULT_TILE_SIZE);
  const row = Math.round(entity.pos.y / DEFAULT_TILE_SIZE);
  entity.cell = {
    col,
    row,
    offset: {
      x: entity.pos.x - col * DEFAULT_TILE_SIZE,
      y: entity.pos.y - row * DEFAULT_TILE_SIZE,
    },
  };
}

export function moveEntityToCell(entity: LevelEntityDefinition, col: number, row: number) {
  entity.pos = { x: col * DEFAULT_TILE_SIZE, y: row * DEFAULT_TILE_SIZE };
  syncEntityCell(entity);
}

export function resizeLevel(level: LevelDefinition, cols: number, rows: number) {
  const next = new Array(cols * rows).fill(0);
  const copyCols = Math.min(cols, level.tilemap.cols);
  const copyRows = Math.min(rows, level.tilemap.rows);
  for (let row = 0; row < copyRows; row += 1) {
    for (let col = 0; col < copyCols; col += 1) {
      next[row * cols + col] = level.tilemap.data[row * level.tilemap.cols + col] ?? 0;
    }
  }
  level.tilemap.cols = cols;
  level.tilemap.rows = rows;
  level.tilemap.width = cols * level.tilemap.tileSize;
  level.tilemap.height = rows * level.tilemap.tileSize;
  level.tilemap.data = next;
  level.pixelSize = { x: level.tilemap.width, y: level.tilemap.height };
}

export function entityAt(level: LevelDefinition, col: number, row: number): LevelEntityDefinition | null {
  for (let index = level.entities.length - 1; index >= 0; index -= 1) {
    const entity = level.entities[index];
    if (entity.cell.col === col && entity.cell.row === row) return entity;
  }
  return null;
}

export function toolForEntity(tool: EntityTool): EntityToolDefinition {
  const definition = entityTools.find((candidate) => candidate.tool === tool);
  if (!definition) throw new Error(`Unknown entity tool: ${tool}`);
  return definition;
}
