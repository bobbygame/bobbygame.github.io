export interface TilemapData {
  width: number;
  height: number;
  "max-width": number;
  "max-height": number;
  data: string;
}

export interface TilemapInstanceOwnData {
  tilemapData: TilemapData;
  "tile-width": number;
  "tile-height": number;
  "tile-x-offset": number;
  "tile-y-offset": number;
  "tile-x-spacing": number;
  "tile-y-spacing": number;
}

export interface WorldInfo {
  x: number;
  y: number;
  width: number;
  height: number;
  originX: number;
  originY: number;
  angle?: number;
  zElevation?: number;
}

export interface Instance {
  type: string;
  uid: number;
  properties?: Record<string, unknown>;
  instanceVariables?: Record<string, unknown>;
  behaviors?: Record<string, unknown>;
  ownData?: TilemapInstanceOwnData;
  world: WorldInfo;
}

export interface Layer {
  name: string;
  overriden: number;
  subLayers: Layer[];
  instances: Instance[];
}

export interface Layout {
  name: string;
  width?: number;
  height?: number;
  layers: Layer[];
  sid?: number;
}
