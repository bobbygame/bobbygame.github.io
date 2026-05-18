import { appUrl, assetUrl } from './paths';

export interface ShareCardResult {
  blob: Blob;
  dataUrl: string;
  filename: string;
  siteUrl: string;
}

type ShareCardVariant = 'desktop' | 'mobile';

const PRODUCTION_URL = 'https://g.snapre.fun/';
const SHARE_CARD_SIZES: Record<ShareCardVariant, { width: number; height: number }> = {
  desktop: { width: 1200, height: 720 },
  mobile: { width: 900, height: 1200 },
};
const SHARE_CARD_IMAGES: Record<ShareCardVariant, string> = {
  desktop: 'assets/images/share-card-desktop.png',
  mobile: 'assets/images/share-card-mobile.png',
};

const shareCardBasePromises: Partial<Record<ShareCardVariant, Promise<HTMLImageElement>>> = {};

export async function createShareCard(): Promise<ShareCardResult> {
  await document.fonts?.ready;

  const variant: ShareCardVariant = window.matchMedia('(max-width: 760px), (pointer: coarse)').matches ? 'mobile' : 'desktop';
  const size = SHARE_CARD_SIZES[variant];
  const siteUrl = shareSiteUrl();
  const baseImage = await loadShareCardBase(variant);
  const canvas = document.createElement('canvas');
  canvas.width = size.width;
  canvas.height = size.height;

  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas not supported');

  ctx.drawImage(baseImage, 0, 0, size.width, size.height);

  const dataUrl = canvas.toDataURL('image/png');
  const blob = await canvasBlob(canvas);
  return {
    blob,
    dataUrl,
    filename: `bobby-carrot-share-${variant}.png`,
    siteUrl,
  };
}

function loadShareCardBase(variant: ShareCardVariant): Promise<HTMLImageElement> {
  if (!shareCardBasePromises[variant]) {
    shareCardBasePromises[variant] = loadImage(assetUrl(SHARE_CARD_IMAGES[variant]));
  }
  return shareCardBasePromises[variant];
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.decoding = 'async';
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(`Share card image failed to load: ${src}`));
    image.src = src;
  });
}

function shareSiteUrl(): string {
  const { hostname } = window.location;
  if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '') return PRODUCTION_URL;
  return new URL(appUrl(''), window.location.href).href;
}

function canvasBlob(canvas: HTMLCanvasElement): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error('Share card export failed'));
    }, 'image/png');
  });
}
