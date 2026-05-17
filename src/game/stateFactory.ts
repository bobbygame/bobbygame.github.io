import type { LevelDefinition, LevelEntityDefinition } from './levelDefinition';
import type { Entity, GameState } from './types';

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
      idleElapsed: 0,
    },
  };
}
