import type { Layout, ObjectType } from './types';

async function loadJson<T>(path: string): Promise<T> {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Failed to load ${path}: ${res.status}`);
  return res.json() as Promise<T>;
}

type RuntimeProject = {
  project?: unknown[];
};

type RuntimeClass = unknown[];
type RuntimeLayout = unknown[];
type RuntimeLayer = unknown[];
type RuntimeInstance = unknown[];

let runtimeCache: Promise<RuntimeProject> | null = null;

function loadRuntimeProject(): Promise<RuntimeProject> {
  runtimeCache ??= loadJson<RuntimeProject>('/game/data.json');
  return runtimeCache;
}

function asArray(value: unknown): unknown[] {
  return Array.isArray(value) ? value : [];
}

function numberAt(values: unknown[], index: number, fallback = 0): number {
  const value = Number(values[index]);
  return Number.isFinite(value) ? value : fallback;
}

function objectTypeName(classes: RuntimeClass[], index: number): string {
  const objectClass = classes[index];
  return typeof objectClass?.[0] === 'string' ? objectClass[0] : `Object${index}`;
}

function instanceVariablesFor(objectClass: RuntimeClass | undefined, values: unknown): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  const definitions = asArray(objectClass?.[3]);
  const rawValues = asArray(values);

  definitions.forEach((definition, index) => {
    if (!Array.isArray(definition) || typeof definition[2] !== 'string') return;
    result[definition[2]] = rawValues[index];
  });

  return result;
}

function propertiesFor(typeName: string, values: unknown): Record<string, unknown> {
  const raw = asArray(values);

  if (typeName === '视频') {
    return {
      'webm-source': raw[0],
      'ogg-theora-source': raw[1],
      'h264-source': raw[2],
      autoplay: raw[3],
      'play-in-background': raw[4],
      'initially-visible': raw[5],
    };
  }

  if (typeof raw[0] === 'string' && typeof raw[2] === 'string' && typeof raw[3] === 'number') {
    return {
      text: raw[0],
      'enable-bbcode': raw[1],
      font: raw[2],
      size: raw[3],
      'line-height': raw[4],
      bold: raw[5],
      italic: raw[6],
      color: raw[7],
      'horizontal-alignment': raw[8] === 1 ? 'center' : 'left',
      'vertical-alignment': raw[9] === 1 ? 'center' : 'top',
      wrapping: raw[10],
      'initially-visible': raw[11],
      origin: raw[12],
    };
  }

  if (typeof raw[1] === 'string') {
    return {
      'initially-visible': raw[0],
      'initial-animation': raw[1],
      'initial-frame': raw[2],
      'enable-collisions': raw[3],
    };
  }

  return {};
}

function convertInstance(classes: RuntimeClass[], instance: RuntimeInstance): Layout['layers'][number]['instances'][number] {
  const world = asArray(instance[0]);
  const typeIndex = numberAt(instance, 1);
  const objectClass = classes[typeIndex];
  const type = objectTypeName(classes, typeIndex);
  const tilemapData = asArray(world[13]);

  return {
    type,
    uid: numberAt(instance, 2),
    world: {
      x: numberAt(world, 0),
      y: numberAt(world, 1),
      width: numberAt(world, 3),
      height: numberAt(world, 4),
      angle: numberAt(world, 5),
      originX: numberAt(world, 8),
      originY: numberAt(world, 9),
      zElevation: numberAt(world, 10),
    },
    properties: propertiesFor(type, instance[5]),
    instanceVariables: instanceVariablesFor(objectClass, instance[3]),
    ownData: tilemapData.length >= 3
      ? {
          tilemapData: {
            width: numberAt(tilemapData, 0),
            height: numberAt(tilemapData, 1),
            'max-width': numberAt(tilemapData, 0),
            'max-height': numberAt(tilemapData, 1),
            data: String(tilemapData[2] ?? ''),
          },
          'tile-width': 50,
          'tile-height': 50,
          'tile-x-offset': 0,
          'tile-y-offset': 0,
          'tile-x-spacing': 0,
          'tile-y-spacing': 0,
        }
      : undefined,
  };
}

function convertLayer(classes: RuntimeClass[], layer: RuntimeLayer): Layout['layers'][number] {
  return {
    name: String(layer[0] ?? ''),
    overriden: numberAt(layer, 1),
    subLayers: [],
    instances: asArray(layer[14]).map((instance) => convertInstance(classes, instance as RuntimeInstance)),
  };
}

export async function loadLayout(name: string): Promise<Layout> {
  const runtime = await loadRuntimeProject();
  const project = asArray(runtime.project);
  const classes = asArray(project[3]) as RuntimeClass[];
  const layouts = asArray(project[5]) as RuntimeLayout[];
  const layout = layouts.find((candidate) => candidate[0] === name);
  if (!layout) throw new Error(`Runtime layout not found: ${name}`);

  return {
    name,
    width: numberAt(layout, 1),
    height: numberAt(layout, 2),
    sid: numberAt(layout, 5),
    layers: asArray(layout[6]).map((layer) => convertLayer(classes, layer as RuntimeLayer)),
  } as Layout;
}

export function loadObjectType(name: string): Promise<ObjectType> {
  return loadJson<ObjectType>(`/c3/objectTypes/${name}.json`);
}
