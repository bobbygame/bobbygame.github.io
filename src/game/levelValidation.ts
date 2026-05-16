import type { Entity, EntityKind, GameState } from './types';
import type { LevelDefinition, LevelEntityDefinition } from './levelDefinition';
import { isWalkableTileId } from './walkability';

export type LevelDiagnosticSeverity = 'warning' | 'error';

export interface LevelDiagnostic {
  severity: LevelDiagnosticSeverity;
  message: string;
  entityId?: number;
}

const semanticKinds = new Set<EntityKind>([
  'player',
  'wall',
  'stone',
  'stoneAngle',
  'lock',
  'key',
  'carrot',
  'trap',
  'goal',
  'channel',
  'conveyorX',
  'conveyorY',
  'conveyorButton',
  'stoneButton',
  'bornPlace',
]);

function numberInRange(value: unknown, min: number, max: number) {
  const numeric = Number(value);
  return Number.isInteger(numeric) && numeric >= min && numeric <= max;
}

function isOpenValue(value: unknown) {
  return value === true || value === false || value === 0 || value === 1;
}

type ValidatableEntity = Pick<Entity | LevelEntityDefinition, 'id' | 'kind' | 'pos' | 'size' | 'data'>;

interface ValidatableLevel {
  name: string;
  requiredCarrots: number;
  tileSize: number;
  tilemap: {
    cols: number;
    rows: number;
    width: number;
    height: number;
    data: number[];
  };
  entities: ValidatableEntity[];
}

const groundRequiredKinds = new Set<EntityKind>([
  'player',
  'stone',
  'stoneAngle',
  'lock',
  'key',
  'carrot',
  'trap',
  'goal',
  'channel',
  'conveyorX',
  'conveyorY',
  'conveyorButton',
  'stoneButton',
  'bornPlace',
]);

function validateEntityData(entity: ValidatableEntity, diagnostics: LevelDiagnostic[]) {
  if (entity.kind === 'stone' && !numberInRange(entity.data.sign ?? 1, 1, 2)) {
    diagnostics.push({ severity: 'warning', entityId: entity.id, message: `stone ${entity.id} has invalid sign` });
  }
  if (entity.kind === 'stoneAngle' && !numberInRange(entity.data.sign ?? 1, 1, 4)) {
    diagnostics.push({ severity: 'warning', entityId: entity.id, message: `stoneAngle ${entity.id} has invalid sign` });
  }
  if ((entity.kind === 'key' || entity.kind === 'lock') && !numberInRange(entity.data.sign ?? 1, 1, 3)) {
    diagnostics.push({ severity: 'warning', entityId: entity.id, message: `${entity.kind} ${entity.id} has invalid sign` });
  }
  if ((entity.kind === 'conveyorX' || entity.kind === 'conveyorY') && !numberInRange(entity.data.direction1 ?? 0, 0, 1)) {
    diagnostics.push({ severity: 'warning', entityId: entity.id, message: `${entity.kind} ${entity.id} has invalid direction1` });
  }
  if ((entity.kind === 'conveyorButton' || entity.kind === 'stoneButton') && !isOpenValue(entity.data.open ?? 0)) {
    diagnostics.push({ severity: 'warning', entityId: entity.id, message: `${entity.kind} ${entity.id} has invalid open value` });
  }
}

function validateLevel(level: ValidatableLevel): LevelDiagnostic[] {
  const diagnostics: LevelDiagnostic[] = [];
  const expectedTileCount = level.tilemap.cols * level.tilemap.rows;

  if (level.tilemap.data.length !== expectedTileCount) {
    diagnostics.push({
      severity: 'error',
      message: `tilemap has ${level.tilemap.data.length} tiles, expected ${expectedTileCount}`,
    });
  }

  if (level.entities.filter((entity) => entity.kind === 'player').length !== 1) {
    diagnostics.push({ severity: 'error', message: 'level must have exactly one player' });
  }
  if (level.entities.filter((entity) => entity.kind === 'bornPlace').length !== 1) {
    diagnostics.push({ severity: 'warning', message: 'level should have exactly one bornPlace' });
  }
  if (!level.entities.some((entity) => entity.kind === 'channel' || entity.kind === 'goal')) {
    diagnostics.push({ severity: 'error', message: 'level must have a channel or goal' });
  }

  const carrotCount = level.entities.filter((entity) => entity.kind === 'carrot').length;
  if (level.requiredCarrots > carrotCount) {
    diagnostics.push({
      severity: 'error',
      message: `required carrots ${level.requiredCarrots} exceeds placed carrots ${carrotCount}`,
    });
  }

  for (const tileId of level.tilemap.data) {
    if (!Number.isInteger(tileId) || tileId < 0) {
      diagnostics.push({ severity: 'error', message: `tilemap contains invalid tile id ${String(tileId)}` });
      break;
    }
  }

  for (const entity of level.entities) {
    validateEntityBounds(level, entity, diagnostics);
    validateEntityGround(level, entity, diagnostics);
    validateEntityData(entity, diagnostics);
  }

  return diagnostics;
}

function validateEntityBounds(level: ValidatableLevel, entity: ValidatableEntity, diagnostics: LevelDiagnostic[]) {
  if (!semanticKinds.has(entity.kind)) return;
  const outOfBounds = entity.pos.x < 0
    || entity.pos.y < 0
    || entity.pos.x + entity.size.x > level.tilemap.width
    || entity.pos.y + entity.size.y > level.tilemap.height;

  if (outOfBounds) {
    diagnostics.push({
      severity: 'warning',
      entityId: entity.id,
      message: `${entity.kind} ${entity.id} is outside the tilemap bounds`,
    });
  }
}

function validateEntityGround(level: ValidatableLevel, entity: ValidatableEntity, diagnostics: LevelDiagnostic[]) {
  if (!groundRequiredKinds.has(entity.kind)) return;

  const col = Math.round(entity.pos.x / level.tileSize);
  const row = Math.round(entity.pos.y / level.tileSize);
  const tileId = level.tilemap.data[row * level.tilemap.cols + col];
  if (isWalkableTileId(tileId)) return;

  diagnostics.push({
    severity: 'warning',
    entityId: entity.id,
    message: `${entity.kind} ${entity.id} is not on walkable ground`,
  });
}

export function validateLevelDefinition(level: LevelDefinition): LevelDiagnostic[] {
  return validateLevel({
    ...level,
    tileSize: level.tilemap.tileSize,
  });
}

export function validateGameState(state: GameState): LevelDiagnostic[] {
  return validateLevel({
    name: state.mapName,
    requiredCarrots: state.requiredCarrots,
    tileSize: state.tileSize,
    tilemap: state.tilemap,
    entities: state.entities,
  });
}

export function formatLevelDiagnostics(mapName: string, diagnostics: LevelDiagnostic[]): string {
  const formatted = diagnostics
    .map((diagnostic) => `${diagnostic.severity.toUpperCase()}: ${diagnostic.message}`)
    .join('\n');
  return `Level diagnostics for ${mapName}:\n${formatted}`;
}
