import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const sourceArg = process.argv[2];
if (!sourceArg) {
  console.error('Usage: node scripts/export-game-data.mjs <path-to-source-data.json>');
  process.exit(1);
}

const sourcePath = path.resolve(root, sourceArg);
const contentDir = path.join(root, 'src/content');
const levelsDir = path.join(contentDir, 'levels');

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

function numberAt(values, index, fallback = 0) {
  const value = Number(values[index]);
  return Number.isFinite(value) ? value : fallback;
}

function frameFromSpriteData(data) {
  const sheet = data[0];
  if (typeof sheet !== 'string') return undefined;

  const isObjectFrame = data.length === 7 && typeof data[6] === 'number';
  const x = Number(data[isObjectFrame ? 3 : 2] ?? 0);
  const y = Number(data[isObjectFrame ? 4 : 3] ?? 0);
  const w = Number(data[isObjectFrame ? 5 : 4] ?? 0);
  const h = Number(data[isObjectFrame ? 6 : 5] ?? 0);
  if (!Number.isFinite(x) || !Number.isFinite(y) || !Number.isFinite(w) || !Number.isFinite(h) || w <= 0 || h <= 0) {
    return undefined;
  }

  return { sheet, x, y, w, h };
}

function normaliseName(name) {
  return name.trim().toLowerCase();
}

function objectTypeName(classes, index) {
  const objectClass = classes[index];
  return typeof objectClass?.[0] === 'string' ? objectClass[0] : `Object${index}`;
}

function instanceVariablesFor(objectClass, values) {
  const result = {};
  const definitions = asArray(objectClass?.[3]);
  const rawValues = asArray(values);

  definitions.forEach((definition, index) => {
    if (!Array.isArray(definition) || typeof definition[2] !== 'string') return;
    result[definition[2]] = rawValues[index];
  });

  return result;
}

function propertiesFor(typeName, values) {
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

function convertInstance(classes, instance) {
  const world = asArray(instance[0]);
  const typeIndex = numberAt(instance, 1);
  const objectClass = classes[typeIndex];
  const type = objectTypeName(classes, typeIndex);
  const tilemapData = asArray(world[13]);

  const converted = {
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
  };

  if (tilemapData.length >= 3) {
    converted.ownData = {
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
    };
  }

  return converted;
}

function convertLayer(classes, layer) {
  return {
    name: String(layer[0] ?? ''),
    overriden: numberAt(layer, 1),
    subLayers: [],
    instances: asArray(layer[14]).map((instance) => convertInstance(classes, instance)),
  };
}

function buildLayouts(project) {
  const classes = asArray(project[3]);
  const layouts = {};
  for (const layout of asArray(project[5])) {
    const name = String(layout[0] ?? '');
    if (!name) continue;
    layouts[name] = {
      name,
      width: numberAt(layout, 1),
      height: numberAt(layout, 2),
      sid: numberAt(layout, 5),
      layers: asArray(layout[6]).map((layer) => convertLayer(classes, layer)),
    };
  }
  return layouts;
}

function buildAssetManifest(project, usedTypes) {
  const objects = {};

  for (const raw of asArray(project[3])) {
    if (!Array.isArray(raw) || typeof raw[0] !== 'string') continue;

    const name = raw[0];
    if (usedTypes && !usedTypes.has(name) && !usedTypes.has(normaliseName(name))) continue;

    const object = {
      name,
      animations: {},
    };

    if (Array.isArray(raw[6])) {
      object.frame = frameFromSpriteData(raw[6]);
    }

    if (Array.isArray(raw[7])) {
      for (const rawAnimation of raw[7]) {
        if (!Array.isArray(rawAnimation) || typeof rawAnimation[0] !== 'string') continue;

        const animationName = rawAnimation[0];
        const speed = Number(rawAnimation[1] ?? 5);
        const looping = Boolean(rawAnimation[3]);
        const frames = asArray(rawAnimation[7])
          .filter(Array.isArray)
          .map((frame) => frameFromSpriteData(frame))
          .filter(Boolean);

        if (frames.length > 0) {
          object.animations[animationName] = {
            name: animationName,
            speed: Number.isFinite(speed) && speed > 0 ? speed : 5,
            looping,
            frames,
          };
          object.frame ??= frames[0];
        }
      }
    }

    objects[name] = object;
    objects[normaliseName(name)] = object;
  }

  return { objects };
}

function collectUsedTypes(layouts, levelNames) {
  const usedTypes = new Set();
  for (const name of levelNames) {
    for (const layer of asArray(layouts[name]?.layers)) {
      for (const instance of asArray(layer.instances)) {
        usedTypes.add(instance.type);
        usedTypes.add(normaliseName(instance.type));
      }
    }
  }
  return usedTypes;
}

if (!fs.existsSync(sourcePath)) {
  console.error(`Missing source export: ${path.relative(root, sourcePath)}`);
  console.error('Usage: node scripts/export-game-data.mjs <path-to-source-data.json>');
  process.exit(1);
}

const source = JSON.parse(fs.readFileSync(sourcePath, 'utf8'));
function levelSortKey(name) {
  return Number(name.replace(/^map/, ''));
}

function writeLevel(name, layout) {
  const constName = name;
  const source = `import type { Layout } from '../../game/layout';

export const ${constName}: Layout = ${JSON.stringify(layout, null, 2)};

export default ${constName};
`;
  fs.writeFileSync(path.join(levelsDir, `${name}.ts`), source);
}

function writeIndex(levelNames) {
  const loaders = levelNames.map((name) => `  ${JSON.stringify(name)}: () => import('./levels/${name}'),`).join('\n');
  const names = levelNames.map((name) => `  ${JSON.stringify(name)}`).join(',\n');
  const source = `import type { Layout } from '../game/layout';

export const levelNames = [
${names}
] as const;

export type LevelName = typeof levelNames[number];

const levelLoaders: Record<string, () => Promise<{ default: Layout }>> = {
${loaders}
};

export async function loadLevel(name: string): Promise<Layout> {
  const loader = levelLoaders[name];
  if (!loader) throw new Error(\`Layout not found: \${name}\`);
  const module = await loader();
  return structuredClone(module.default);
}
`;
  fs.writeFileSync(path.join(contentDir, 'index.ts'), source);
}

function writeAssets(assetManifest) {
  const source = `import type { AssetManifest } from '../game/assets';

export const assetManifest: AssetManifest = ${JSON.stringify(assetManifest, null, 2)};
`;
  fs.writeFileSync(path.join(contentDir, 'assets.ts'), source);
}

const project = asArray(source.project);
const layouts = buildLayouts(project);
const levelNames = Object.keys(layouts)
  .filter((name) => /^map\d+$/.test(name))
  .sort((a, b) => levelSortKey(a) - levelSortKey(b));

fs.mkdirSync(levelsDir, { recursive: true });
for (const name of levelNames) writeLevel(name, layouts[name]);
writeIndex(levelNames);
writeAssets(buildAssetManifest(project, collectUsedTypes(layouts, levelNames)));

console.log(`Wrote ${levelNames.length} levels to ${path.relative(root, levelsDir)}`);
console.log(`Wrote ${path.relative(root, path.join(contentDir, 'assets.ts'))}`);
