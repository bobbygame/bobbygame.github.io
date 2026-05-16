import { createCommunityLevel, isCommunityLevel, type CommunityLevel } from '../game/communityLevel';
import { t } from '../game/i18n';
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
  description: string;
  data: Record<string, unknown>;
  unique?: boolean;
}

export const entityTools: EntityToolDefinition[] = [
  { tool: 'player', kind: 'player', typeName: 'bobby', label: 'Player', group: 'Essentials', description: '玩家控制的兔子；每关唯一，只能移动到黑色石砖地砖上。', data: {}, unique: true },
  { tool: 'bornPlace', kind: 'bornPlace', typeName: 'bornPlace', label: 'Spawn', group: 'Essentials', description: '出生点标记；每关唯一，用来标记兔子的初始位置。', data: {}, unique: true },
  { tool: 'channel', kind: 'channel', typeName: 'channel', label: 'Exit', group: 'Essentials', description: '出口；收集足够胡萝卜后打开，兔子进入后通关。', data: {}, unique: true },
  { tool: 'carrot', kind: 'carrot', typeName: 'carrot1', label: 'Carrot', group: 'Essentials', description: '收集目标；吃到后计数增加，用于打开出口。', data: {} },

  { tool: 'barX', kind: 'wall', typeName: 'barX', label: 'Fence X', group: 'Walls', description: '横向可见围栏；实体障碍，阻挡兔子进入该格。', data: {} },
  { tool: 'barY', kind: 'wall', typeName: 'barY', label: 'Fence Y', group: 'Walls', description: '纵向可见围栏；实体障碍，阻挡兔子进入该格。', data: {} },
  { tool: 'barLeftTop', kind: 'wall', typeName: 'barLeftTop', label: 'Fence LT', group: 'Walls', description: '左上转角围栏；实体障碍，阻挡兔子进入该格。', data: {} },
  { tool: 'barRightTop', kind: 'wall', typeName: 'barRightTop', label: 'Fence RT', group: 'Walls', description: '右上转角围栏；实体障碍，阻挡兔子进入该格。', data: {} },
  { tool: 'barLeftBottom', kind: 'wall', typeName: 'barLeftBottom', label: 'Fence LB', group: 'Walls', description: '左下转角围栏；实体障碍，阻挡兔子进入该格。', data: {} },
  { tool: 'barRightBottom', kind: 'wall', typeName: 'barRightBottom', label: 'Fence RB', group: 'Walls', description: '右下转角围栏；实体障碍，阻挡兔子进入该格。', data: {} },

  { tool: 'trapSafe', kind: 'trap', typeName: 'trap', label: 'Trap Safe', group: 'Hazards', description: '未触发陷阱；兔子踩上去安全，离开后会变成尖刺。', data: { isSharp: 0 } },
  { tool: 'trapSharp', kind: 'trap', typeName: 'trap', label: 'Trap Sharp', group: 'Hazards', description: '尖刺陷阱；兔子踩上去会死亡并重开。', data: { isSharp: 1 } },
  { tool: 'stoneHorizontal', kind: 'stone', typeName: 'stone', label: 'Stone H', group: 'Hazards', description: '水平单向石板；只允许左右方向通过，离开后切换方向。', data: { sign: 1 } },
  { tool: 'stoneVertical', kind: 'stone', typeName: 'stone', label: 'Stone V', group: 'Hazards', description: '垂直单向石板；只允许上下方向通过，离开后切换方向。', data: { sign: 2 } },
  { tool: 'stoneAngleDR', kind: 'stoneAngle', typeName: 'stoneAngle', label: 'Corner DR', group: 'Hazards', description: '转角石板；按图示连接两个方向，离开后旋转到下一方向。', data: { sign: 1 } },
  { tool: 'stoneAngleDL', kind: 'stoneAngle', typeName: 'stoneAngle', label: 'Corner DL', group: 'Hazards', description: '转角石板；按图示连接两个方向，离开后旋转到下一方向。', data: { sign: 2 } },
  { tool: 'stoneAngleUL', kind: 'stoneAngle', typeName: 'stoneAngle', label: 'Corner UL', group: 'Hazards', description: '转角石板；按图示连接两个方向，离开后旋转到下一方向。', data: { sign: 3 } },
  { tool: 'stoneAngleUR', kind: 'stoneAngle', typeName: 'stoneAngle', label: 'Corner UR', group: 'Hazards', description: '转角石板；按图示连接两个方向，离开后旋转到下一方向。', data: { sign: 4 } },

  { tool: 'conveyorLeft', kind: 'conveyorX', typeName: 'conveyorBeltX', label: 'Belt Left', group: 'Conveyors', description: '横向传送带；只能沿箭头方向进入，并把兔子送到连续传送带出口。', data: { direction1: 0, isLeft: true } },
  { tool: 'conveyorRight', kind: 'conveyorX', typeName: 'conveyorBeltX', label: 'Belt Right', group: 'Conveyors', description: '横向传送带；只能沿箭头方向进入，并把兔子送到连续传送带出口。', data: { direction1: 1, isLeft: false } },
  { tool: 'conveyorUp', kind: 'conveyorY', typeName: 'conveyorBeltY', label: 'Belt Up', group: 'Conveyors', description: '纵向传送带；只能沿箭头方向进入，并把兔子送到连续传送带出口。', data: { direction1: 0, isUp: true } },
  { tool: 'conveyorDown', kind: 'conveyorY', typeName: 'conveyorBeltY', label: 'Belt Down', group: 'Conveyors', description: '纵向传送带；只能沿箭头方向进入，并把兔子送到连续传送带出口。', data: { direction1: 1, isUp: false } },
  { tool: 'conveyorButtonOn', kind: 'conveyorButton', typeName: 'conveyorBeltButton', label: 'Belt On', group: 'Switches', description: '传送带开关；踩到开启状态会反转所有传送带方向，并切换其他传送带按钮状态。', data: { open: 1 } },
  { tool: 'conveyorButtonOff', kind: 'conveyorButton', typeName: 'conveyorBeltButton', label: 'Belt Off', group: 'Switches', description: '关闭状态的传送带开关；当前不会触发，等待其他同类按钮切换。', data: { open: 0 } },
  { tool: 'stoneButtonOn', kind: 'stoneButton', typeName: 'stoneButton', label: 'Stone On', group: 'Switches', description: '石板开关；踩到开启状态会切换所有直线/转角石板方向，并切换其他石板按钮状态。', data: { open: 1 } },
  { tool: 'stoneButtonOff', kind: 'stoneButton', typeName: 'stoneButton', label: 'Stone Off', group: 'Switches', description: '关闭状态的石板开关；当前不会触发，等待其他同类按钮切换。', data: { open: 0 } },

  { tool: 'keyYellow', kind: 'key', typeName: 'key', label: 'Key Yellow', group: 'Keys', description: '黄色钥匙；收集后可打开一个黄色锁。', data: { sign: 1 } },
  { tool: 'keyRed', kind: 'key', typeName: 'key', label: 'Key Red', group: 'Keys', description: '红色钥匙；收集后可打开一个红色锁。', data: { sign: 2 } },
  { tool: 'keyBlue', kind: 'key', typeName: 'key', label: 'Key Blue', group: 'Keys', description: '蓝色钥匙；收集后可打开一个蓝色锁。', data: { sign: 3 } },
  { tool: 'lockYellow', kind: 'lock', typeName: 'lock', label: 'Lock Yellow', group: 'Keys', description: '黄色锁；没有黄色钥匙时阻挡兔子，有钥匙时进入会消耗钥匙并解锁。', data: { sign: 1 } },
  { tool: 'lockRed', kind: 'lock', typeName: 'lock', label: 'Lock Red', group: 'Keys', description: '红色锁；没有红色钥匙时阻挡兔子，有钥匙时进入会消耗钥匙并解锁。', data: { sign: 2 } },
  { tool: 'lockBlue', kind: 'lock', typeName: 'lock', label: 'Lock Blue', group: 'Keys', description: '蓝色锁；没有蓝色钥匙时阻挡兔子，有钥匙时进入会消耗钥匙并解锁。', data: { sign: 3 } },
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

function createDefaultTileData(cols: number, rows: number): number[] {
  const data = new Array(cols * rows).fill(0);
  const setStone = (col: number, row: number) => {
    if (col >= 0 && row >= 0 && col < cols && row < rows) data[row * cols + col] = 7;
  };

  for (let col = 1; col <= 8; col += 1) setStone(col, 1);
  for (let row = 1; row <= 8; row += 1) setStone(8, row);
  for (let col = 8; col <= 14; col += 1) setStone(col, 8);
  for (let row = 8; row <= 14; row += 1) setStone(14, row);

  return data;
}

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
      data: createDefaultTileData(cols, rows),
    },
    entities: [
      createEntity(entityTools[0], 1, 1, 1),
      createEntity(entityTools[1], 1, 1, 2),
      createEntity(toolForEntity('channel'), 14, 14, 3),
      createEntity(entityTools[3], 8, 8, 4),
    ],
  };
  return createCommunityLevel(level, {
    title: t('editor.defaultTitle'),
    author: t('editor.defaultAuthor'),
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
