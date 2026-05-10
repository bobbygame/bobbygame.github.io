import { loadLayout, parseTilemapData } from './layout';
import type { GameState, LayoutFile, Entity, EntityKind } from './types';
import { getRequiredCarrots } from './config';

const TILE_SIZE = 50;

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

function createEntity(inst: LayoutFile['layers'][number]['instances'][number]): Entity | null {
  if (skipTypes.has(inst.type.trim())) return null;
  const kind = toKind(inst.type);
  const x = inst.world.x;
  const y = inst.world.y;
  return {
    id: Math.floor(Math.random() * 1e9),
    kind,
    typeName: inst.type,
    pos: { x, y },
    size: { x: inst.world.width, y: inst.world.height },
    data: {
      ...(inst.properties ?? {}),
      ...(inst.instanceVariables ?? {}),
    },
    angle: Number(inst.world.angle ?? 0),
  };
}

export async function loadGame(mapName: string): Promise<GameState> {
  const layout = await loadLayout(mapName) as LayoutFile;

  const entities: Entity[] = [];
  let tilemapImagePath = '';
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
      const ent = createEntity(inst);
      if (ent) entities.push(ent);
    }
  }

  let player = entities.find((e) => e.kind === 'player');
  if (!player) {
    player = {
      id: -1,
      kind: 'player',
      typeName: 'bobby',
      pos: { x: -1000, y: -1000 },
      size: { x: TILE_SIZE, y: TILE_SIZE },
      data: {},
    };
    entities.push(player);
  }

  if (tilemapCols === 0 || tilemapRows === 0) {
    tilemapCols = 13;
    tilemapRows = 16;
    tilemapData = new Array(tilemapCols * tilemapRows).fill(0);
  }

  return {
    tileSize: TILE_SIZE,
    mapName,
    entities,
    player,
    inventory: { carrots: 0, keys: {} },
    tilemap: {
      cols: tilemapCols,
      rows: tilemapRows,
      width: tilemapCols * TILE_SIZE,
      height: tilemapRows * TILE_SIZE,
      data: tilemapData,
      typeName: tilemapTypeName,
    },
    events: [],
    won: false,
      channelOpen: false,
      requiredCarrots: getRequiredCarrots(mapName),
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
