export type Vec2 = { x: number; y: number };

export type EntityKind =
  | 'player'
  | 'wall'
  | 'stone'
  | 'stoneAngle'
  | 'lock'
  | 'key'
  | 'carrot'
  | 'trap'
  | 'goal'
  | 'channel'
  | 'conveyorX'
  | 'conveyorY'
  | 'conveyorButton'
  | 'stoneButton'
  | 'bornPlace'
  | 'other';

export interface Entity {
  id: number;
  kind: EntityKind;
  typeName: string;
  pos: Vec2;
  size: Vec2;
  data: Record<string, unknown>;
  dead?: boolean;
  angle?: number;
}

export interface Inventory {
  carrots: number;
  keys: Record<string, boolean>;
}

export interface GameState {
  tileSize: number;
  mapName: string;
  requiredCarrots: number;
  entities: Entity[];
  player: Entity;
  inventory: Inventory;
  tilemap: {
    cols: number;
    rows: number;
    width: number;
    height: number;
    data: number[];
    typeName: string;
  };
  events: string[];
  won: boolean;
  channelOpen: boolean;
  lastStoneSteppedId?: number | null;
  lastStoneAngleSteppedId?: number | null;
  lastTrapSteppedId?: number | null;
  stats: {
    steps: number;
    timeElapsed: number;
  };
  animation: {
    state: 'idle' | 'moving' | 'dead';
    direction: 'left' | 'right' | 'up' | 'down';
  };
}

export interface LayoutFile {
  width?: number;
  height?: number;
  name: string;
  layers: Array<{
    instances: Array<{
      type: string;
      uid: number;
      world: { x: number; y: number; width: number; height: number; angle?: number };
      properties?: Record<string, unknown>;
      instanceVariables?: Record<string, unknown>;
      ownData?: { tilemapData?: { width: number; height: number; data: string } };
    }>;
  }>;
}
