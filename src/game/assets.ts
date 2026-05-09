import { assetManifest } from '../content/assets';

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

export function loadAssetManifest(): Promise<AssetManifest> {
  return Promise.resolve(assetManifest);
}
