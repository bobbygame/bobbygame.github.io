import type { AssetManifest, ObjectAsset, SpriteFrame } from './assetManifest';
import type { Entity, GameState } from './types';

export class SpriteLoader {
  private sheets: Map<string, HTMLImageElement> = new Map();
  private loading: Set<string> = new Set();

  constructor(private manifest: AssetManifest) {}

  async loadSheet(name: string): Promise<HTMLImageElement> {
    if (this.sheets.has(name)) {
      return this.sheets.get(name)!;
    }

    if (this.loading.has(name)) {
      // Wait for existing load
      while (this.loading.has(name)) {
        await new Promise(resolve => setTimeout(resolve, 50));
      }
      return this.sheets.get(name)!;
    }

    this.loading.add(name);
    const img = new Image();
    const promise = new Promise<HTMLImageElement>((resolve, reject) => {
      img.onload = () => {
        this.sheets.set(name, img);
        this.loading.delete(name);
        resolve(img);
      };
      img.onerror = (e) => {
        this.loading.delete(name);
        reject(e);
      };
    });
    img.src = name.startsWith('images/') ? `/game/${name}` : `/game/images/${name}`;
    return promise;
  }

  async preloadAll(): Promise<void> {
    const sheetNames = new Set<string>();
    for (const object of Object.values(this.manifest.objects)) {
      if (object.frame) sheetNames.add(object.frame.sheet);
      for (const animation of Object.values(object.animations)) {
        for (const frame of animation.frames) sheetNames.add(frame.sheet);
      }
    }
    await Promise.all(Array.from(sheetNames).map(name => this.loadSheet(name)));
  }

  getObject(typeName: string): ObjectAsset | undefined {
    return this.manifest.objects[typeName] ?? this.manifest.objects[typeName.toLowerCase()];
  }

  getFrame(typeName: string, animationName?: string, elapsed = 0): SpriteFrame | undefined {
    const object = this.getObject(typeName);
    if (!object) return undefined;

    const animation = animationName ? object.animations[animationName] : undefined;
    if (animation && animation.frames.length > 0) {
      const frameIndex = animation.looping
        ? Math.floor(elapsed * animation.speed) % animation.frames.length
        : Math.min(animation.frames.length - 1, Math.floor(elapsed * animation.speed));
      return animation.frames[frameIndex];
    }

    return object.frame;
  }

  drawSprite(
    ctx: CanvasRenderingContext2D,
    frame: SpriteFrame,
    x: number,
    y: number,
    width: number,
    height: number,
    angle = 0
  ): boolean {
    const sheet = this.sheets.get(frame.sheet);
    if (!sheet) return false;

    ctx.save();
    if (angle) {
      ctx.translate(x + width / 2, y + height / 2);
      ctx.rotate(angle);
      x = -width / 2;
      y = -height / 2;
    }
    ctx.drawImage(
      sheet,
      frame.x, frame.y, frame.w, frame.h,
      x, y, width, height
    );
    ctx.restore();
    return true;
  }

  frameForEntity(entity: Entity, state: GameState): SpriteFrame | undefined {
    if (entity.kind === 'player') {
      const direction = state.animation.direction;
      if (state.animation.state === 'moving') return this.getFrame(entity.typeName, `${direction}Go`, state.stats.timeElapsed);
      if (state.animation.state === 'dead') return this.getFrame(entity.typeName, 'dead', state.stats.timeElapsed);
      return this.getFrame(entity.typeName, `${direction}Stop`, state.stats.timeElapsed)
        ?? this.getFrame(entity.typeName, 'waiting', state.stats.timeElapsed);
    }

    if (entity.kind === 'channel' && state.channelOpen) {
      return this.getFrame(entity.typeName, 'open', state.stats.timeElapsed);
    }

    if (entity.kind === 'channel') {
      return this.getFrame(entity.typeName, 'close', state.stats.timeElapsed);
    }

    if (entity.kind === 'trap') {
      return this.getFrame(entity.typeName, Boolean(entity.data.isSharp ?? entity.data.armed) ? 'Sharp' : 'notSharp', state.stats.timeElapsed);
    }

    if (entity.kind === 'conveyorX') {
      return this.getFrame(entity.typeName, Number(entity.data.direction1 ?? 0) === 0 ? 'startLeft' : 'startRight', state.stats.timeElapsed);
    }

    if (entity.kind === 'conveyorY') {
      return this.getFrame(entity.typeName, Number(entity.data.direction1 ?? 0) === 0 ? 'startUp' : 'startDown', state.stats.timeElapsed);
    }

    if (entity.kind === 'conveyorButton' || entity.kind === 'stoneButton') {
      return this.getFrame(entity.typeName, String(Boolean(entity.data.open)), state.stats.timeElapsed);
    }

    if (entity.kind === 'stone' || entity.kind === 'stoneAngle') {
      return this.getFrame(entity.typeName, String(entity.data.sign ?? 1), state.stats.timeElapsed);
    }

    if (entity.kind === 'key' || entity.kind === 'lock') {
      const color = { 1: 'yellow', 2: 'red', 3: 'blue' }[Number(entity.data.sign ?? 1)] ?? 'yellow';
      return this.getFrame(entity.typeName, color, state.stats.timeElapsed);
    }

    return this.getFrame(entity.typeName, undefined, state.stats.timeElapsed);
  }
}
