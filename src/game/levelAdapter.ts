import { parseTilemapData } from './layout';
import { DEFAULT_TILE_SIZE, type LevelDefinition, type LevelEntityDefinition } from './levelDefinition';
import type { Entity, EntityKind, GameState, LayoutFile } from './types';

const kindMap: Record<string, EntityKind> = {
  wall: 'wall',
  stone: 'stone',
  stoneAngle: 'stoneAngle',
  lock: 'lock',
  key: 'key',
  carrot1: 'carrot',
  carrotn: 'carrot',
  finallyBobby: 'goal',
  trap: 'trap',
  channel: 'channel',
  conveyorBeltX: 'conveyorX',
  conveyorBeltY: 'conveyorY',
  conveyorBeltButton: 'conveyorButton',
  stoneButton: 'stoneButton',
  bornPlace: 'bornPlace',
};

const skipTypes = new Set<string>([
  'continue',
  'downCtrl',
  'leftCtrl',
  'restartLevel',
  'restartLevel2',
  'restart',
  'rightCtrl',
  'Touch',
  'touch',
  'upCtrl',
  'whiteLayer',
]);

function toKind(typeName: string): EntityKind {
  const normalized = typeName.trim();
  if (skipTypes.has(normalized)) return 'other';
  if (normalized.startsWith('bar')) return 'wall';
  return kindMap[normalized] ?? (normalized === 'bobby' ? 'player' : 'other');
}

function gridPosition(pos: { x: number; y: number }, tileSize: number) {
  const col = Math.round(pos.x / tileSize);
  const row = Math.round(pos.y / tileSize);
  return {
    col,
    row,
    offset: {
      x: pos.x - col * tileSize,
      y: pos.y - row * tileSize,
    },
  };
}

function createEntityDefinition(
  inst: LayoutFile['layers'][number]['instances'][number],
  tileSize: number
): LevelEntityDefinition | null {
  if (skipTypes.has(inst.type.trim())) return null;

  const pos = { x: inst.world.x, y: inst.world.y };
  return {
    id: inst.uid,
    kind: toKind(inst.type),
    typeName: inst.type,
    pos,
    cell: gridPosition(pos, tileSize),
    size: { x: inst.world.width, y: inst.world.height },
    data: {
      ...(inst.properties ?? {}),
      ...(inst.instanceVariables ?? {}),
    },
    angle: Number(inst.world.angle ?? 0),
  };
}

export function layoutToLevelDefinition(
  layout: LayoutFile,
  requiredCarrots: number,
  tileSize = DEFAULT_TILE_SIZE
): LevelDefinition {
  const entities: LevelEntityDefinition[] = [];
  let tilemapData: number[] = [];
  let tilemapCols = 0;
  let tilemapRows = 0;
  let tilemapTypeName = 'Tilemap';

  for (const layer of layout.layers) {
    for (const inst of layer.instances) {
      if (inst.ownData?.tilemapData) {
        tilemapTypeName = inst.type;
        tilemapCols = inst.ownData.tilemapData.width;
        tilemapRows = inst.ownData.tilemapData.height;
        tilemapData = parseTilemapData(inst.ownData.tilemapData.data);
        continue;
      }

      const entity = createEntityDefinition(inst, tileSize);
      if (entity) entities.push(entity);
    }
  }

  if (tilemapCols === 0 || tilemapRows === 0) {
    tilemapCols = 13;
    tilemapRows = 16;
    tilemapData = new Array(tilemapCols * tilemapRows).fill(0);
  }

  return {
    name: layout.name,
    pixelSize: {
      x: layout.width ?? tilemapCols * tileSize,
      y: layout.height ?? tilemapRows * tileSize,
    },
    requiredCarrots,
    tilemap: {
      cols: tilemapCols,
      rows: tilemapRows,
      width: tilemapCols * tileSize,
      height: tilemapRows * tileSize,
      tileSize,
      data: tilemapData,
      typeName: tilemapTypeName,
    },
    entities,
  };
}

function entityFromDefinition(definition: LevelEntityDefinition): Entity {
  return {
    id: definition.id,
    kind: definition.kind,
    typeName: definition.typeName,
    pos: { ...definition.pos },
    size: { ...definition.size },
    data: { ...definition.data },
    angle: definition.angle,
  };
}

export function gameStateFromLevelDefinition(level: LevelDefinition): GameState {
  const entities = level.entities.map(entityFromDefinition);

  let player = entities.find((entity) => entity.kind === 'player');
  if (!player) {
    player = {
      id: -1,
      kind: 'player',
      typeName: 'bobby',
      pos: { x: -1000, y: -1000 },
      size: { x: level.tilemap.tileSize, y: level.tilemap.tileSize },
      data: {},
    };
    entities.push(player);
  }

  return {
    tileSize: level.tilemap.tileSize,
    mapName: level.name,
    requiredCarrots: level.requiredCarrots,
    entities,
    player,
    inventory: { carrots: 0, keys: {} },
    tilemap: {
      cols: level.tilemap.cols,
      rows: level.tilemap.rows,
      width: level.tilemap.width,
      height: level.tilemap.height,
      data: [...level.tilemap.data],
      typeName: level.tilemap.typeName,
    },
    events: [],
    won: false,
    channelOpen: false,
    stats: {
      steps: 0,
      timeElapsed: 0,
    },
    animation: {
      state: 'idle',
      direction: 'down',
    },
  };
}
