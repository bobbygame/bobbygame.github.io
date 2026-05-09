export interface SpriteFrame {
  sheet: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface SpriteAnimation {
  name: string;
  speed: number;
  looping: boolean;
  frames: SpriteFrame[];
}

export interface ObjectAsset {
  name: string;
  frame?: SpriteFrame;
  animations: Record<string, SpriteAnimation>;
}

export interface AssetManifest {
  objects: Record<string, ObjectAsset>;
}

function frameFromSpriteData(data: unknown[]): SpriteFrame | undefined {
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

function normaliseName(name: string): string {
  return name.trim().toLowerCase();
}

export async function loadAssetManifest(): Promise<AssetManifest> {
  const response = await fetch('/game/data.json');
  if (!response.ok) throw new Error(`Failed to load Construct data.json: ${response.status}`);

  const root = await response.json() as { project?: unknown[] };
  const project = root.project;
  const objectClasses = Array.isArray(project?.[3]) ? project[3] as unknown[] : [];
  const objects: Record<string, ObjectAsset> = {};

  for (const raw of objectClasses) {
    if (!Array.isArray(raw) || typeof raw[0] !== 'string') continue;

    const name = raw[0];
    const object: ObjectAsset = {
      name,
      animations: {},
    };

    if (Array.isArray(raw[6])) {
      object.frame = frameFromSpriteData(raw[6]);
    }

    if (Array.isArray(raw[7])) {
      for (const rawAnimation of raw[7] as unknown[]) {
        if (!Array.isArray(rawAnimation) || typeof rawAnimation[0] !== 'string') continue;

        const animationName = rawAnimation[0];
        const speed = Number(rawAnimation[1] ?? 5);
        const looping = Boolean(rawAnimation[3]);
        const rawFrames = Array.isArray(rawAnimation[7]) ? rawAnimation[7] as unknown[] : [];
        const frames = rawFrames
          .filter(Array.isArray)
          .map((frame) => frameFromSpriteData(frame as unknown[]))
          .filter((frame): frame is SpriteFrame => Boolean(frame));

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
