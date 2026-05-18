import { loadAssetManifest } from './assets';
import type { LevelDefinition } from './levelDefinition';
import { language, t } from './i18n';
import { appUrl } from './paths';
import { drawGameWorld } from './sceneCanvas';
import { SpriteLoader } from './sprites';
import { gameStateFromLevelDefinition } from './stateFactory';

export interface ShareCardResult {
  blob: Blob;
  dataUrl: string;
  filename: string;
  siteUrl: string;
}

type ShareCardVariant = 'desktop' | 'mobile';

const PRODUCTION_URL = 'https://g.snapre.fun/';
const QR_VERSION = 4;
const QR_SIZE = 17 + QR_VERSION * 4;
const QR_DATA_CODEWORDS = 80;
const QR_ECC_CODEWORDS = 20;

let shareLevelCache: LevelDefinition | null = null;
let shareSpritesPromise: Promise<SpriteLoader> | null = null;
let shareSceneCache: HTMLCanvasElement | null = null;

export async function createShareCard(): Promise<ShareCardResult> {
  await document.fonts?.ready;
  const shareLevel = await loadShareLevel();
  const levelScene = await renderShareLevelScene(shareLevel);
  const variant: ShareCardVariant = window.matchMedia('(max-width: 760px), (pointer: coarse)').matches ? 'mobile' : 'desktop';
  const siteUrl = shareSiteUrl();
  const canvas = document.createElement('canvas');
  const size = variant === 'mobile'
    ? { width: 900, height: 1200 }
    : { width: 1200, height: 720 };
  canvas.width = size.width;
  canvas.height = size.height;

  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas not supported');

  drawCard(ctx, size.width, size.height, variant, siteUrl, shareLevel, levelScene);
  const dataUrl = canvas.toDataURL('image/png');
  const blob = await canvasBlob(canvas);
  return {
    blob,
    dataUrl,
    filename: `bobby-carrot-share-${variant}.png`,
    siteUrl,
  };
}

async function loadShareLevel(): Promise<LevelDefinition> {
  if (!shareLevelCache) {
    shareLevelCache = (await import('../content/levels/map6')).map6;
  }
  return shareLevelCache;
}

async function loadShareSprites(): Promise<SpriteLoader> {
  if (!shareSpritesPromise) {
    shareSpritesPromise = loadAssetManifest().then(async (manifest) => {
      const sprites = new SpriteLoader(manifest);
      await sprites.preloadAll();
      return sprites;
    });
  }
  return shareSpritesPromise;
}

async function renderShareLevelScene(shareLevel: LevelDefinition): Promise<HTMLCanvasElement> {
  if (shareSceneCache) return shareSceneCache;

  const sprites = await loadShareSprites();
  const state = gameStateFromLevelDefinition(shareLevel);
  const canvas = document.createElement('canvas');
  canvas.width = shareLevel.tilemap.width;
  canvas.height = shareLevel.tilemap.height;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas not supported');

  drawGameWorld(ctx, state, sprites, canvas.width, canvas.height);
  shareSceneCache = canvas;
  return canvas;
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

function drawCard(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  variant: ShareCardVariant,
  siteUrl: string,
  shareLevel: LevelDefinition,
  levelScene: HTMLCanvasElement
) {
  const isMobile = variant === 'mobile';
  drawBackground(ctx, width, height);

  if (isMobile) {
    drawMobileCard(ctx, width, height, siteUrl, shareLevel, levelScene);
  } else {
    drawDesktopCard(ctx, width, height, siteUrl, shareLevel, levelScene);
  }
}

function drawBackground(ctx: CanvasRenderingContext2D, width: number, height: number) {
  const sky = ctx.createLinearGradient(0, 0, width, height);
  sky.addColorStop(0, '#f7ffd1');
  sky.addColorStop(0.34, '#8cc56c');
  sky.addColorStop(0.68, '#2e7046');
  sky.addColorStop(1, '#11251b');
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, width, height);

  const sweep = ctx.createLinearGradient(0, height * 0.12, width, height * 0.92);
  sweep.addColorStop(0, 'rgba(255, 245, 111, 0.54)');
  sweep.addColorStop(0.22, 'rgba(255, 245, 111, 0.08)');
  sweep.addColorStop(0.62, 'rgba(30, 92, 72, 0.28)');
  sweep.addColorStop(1, 'rgba(8, 28, 22, 0.74)');
  ctx.fillStyle = sweep;
  ctx.beginPath();
  ctx.moveTo(0, height * 0.18);
  ctx.lineTo(width, 0);
  ctx.lineTo(width, height);
  ctx.lineTo(0, height * 0.82);
  ctx.closePath();
  ctx.fill();

  ctx.globalAlpha = 0.16;
  for (let y = -40; y < height; y += 48) {
    ctx.fillStyle = y % 96 === 0 ? '#fffbd0' : '#0b2d1f';
    ctx.fillRect(0, y, width, 2);
  }
  ctx.globalAlpha = 1;
}

function drawDesktopCard(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  siteUrl: string,
  shareLevel: LevelDefinition,
  levelScene: HTMLCanvasElement
) {
  drawLevelScene(ctx, levelScene, shareLevel, 52, 52, 620, 32);
  drawContentPanel(ctx, 704, 38, 432, 648, 30);
  drawCardTitle(ctx, 736, 92, 348, 'left', 62, 46);
  drawFeatureStrips(ctx, 736, 302, 354);
  drawQrBlock(ctx, width - 250, height - 242, 166, siteUrl);
  drawFooter(ctx, 736, height - 128, 174);
}

function drawMobileCard(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  siteUrl: string,
  shareLevel: LevelDefinition,
  levelScene: HTMLCanvasElement
) {
  drawContentPanel(ctx, 42, 46, width - 84, height - 64, 38);
  drawCardTitle(ctx, 78, 82, 590, 'left', 72, 54);
  drawCarrotStamp(ctx, width - 138, 144, 76);
  drawLevelScene(ctx, levelScene, shareLevel, 110, 272, 680, 30);
  drawFeatureStrips(ctx, 78, 982, 500);
  drawQrBlock(ctx, width - 226, height - 220, 144, siteUrl);
  drawFooter(ctx, 78, height - 64, 500);
}

function drawContentPanel(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number) {
  ctx.save();
  const panel = ctx.createLinearGradient(x, y, x + width, y + height);
  panel.addColorStop(0, 'rgba(20, 88, 45, 0.78)');
  panel.addColorStop(0.48, 'rgba(9, 53, 38, 0.72)');
  panel.addColorStop(1, 'rgba(4, 24, 20, 0.84)');
  ctx.fillStyle = panel;
  roundRect(ctx, x, y, width, height, radius);
  ctx.fill();
  ctx.strokeStyle = 'rgba(238, 255, 218, 0.32)';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.restore();
}

function drawCardTitle(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  align: CanvasTextAlign,
  maxTitleSize: number,
  minTitleSize: number
) {
  ctx.textAlign = align;
  ctx.textBaseline = 'top';
  ctx.fillStyle = 'rgba(5, 28, 21, 0.54)';
  roundRect(ctx, x - 22, y - 20, width + 44, 194, 24);
  ctx.fill();

  ctx.fillStyle = '#fff45a';
  const titleSize = fitFontSize(ctx, t('game.share.cardTitle'), width, maxTitleSize, minTitleSize, displayFont(), 900);
  ctx.font = `900 ${titleSize}px ${displayFont()}`;
  ctx.shadowColor = 'rgba(17, 72, 28, 0.88)';
  ctx.shadowBlur = 0;
  ctx.shadowOffsetY = 8;
  ctx.fillText(t('game.share.cardTitle'), x, y);

  ctx.shadowOffsetY = 0;
  ctx.fillStyle = 'rgba(248, 255, 227, 0.94)';
  ctx.font = `700 ${language() === 'zh' ? 26 : 24}px ${uiFont()}`;
  wrapText(ctx, t('game.share.cardSubtitle'), x, y + 108, width, 31, 2);
}

function drawFeatureStrips(ctx: CanvasRenderingContext2D, x: number, y: number, width: number) {
  const strips = [
    { label: t('game.share.cardLevel'), value: t('game.share.cardMeta'), color: '#ffed4a' },
    { label: t('game.share.cardCta'), value: 'g.snapre.fun', color: '#ff8a2a' },
  ];

  for (const [index, strip] of strips.entries()) {
    const top = y + index * 86;
    ctx.fillStyle = 'rgba(7, 32, 24, 0.56)';
    roundRect(ctx, x, top, width, 68, 20);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.34)';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = strip.color;
    const labelSize = fitFontSize(ctx, strip.label, width - 48, 28, 21, displayFont(), 900);
    ctx.font = `900 ${labelSize}px ${displayFont()}`;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText(strip.label, x + 24, top + 25);

    ctx.fillStyle = 'rgba(246, 255, 230, 0.88)';
    const valueSize = fitFontSize(ctx, strip.value, width - 48, 19, 14, uiFont(), 700);
    ctx.font = `700 ${valueSize}px ${uiFont()}`;
    ctx.fillText(strip.value, x + 24, top + 50);
  }
}

function drawFooter(ctx: CanvasRenderingContext2D, x: number, y: number, width: number) {
  ctx.fillStyle = 'rgba(246, 255, 229, 0.72)';
  ctx.font = `700 ${language() === 'zh' ? 18 : 16}px ${uiFont()}`;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  wrapText(ctx, t('game.share.cardFooter'), x, y, width, 23, 2);
}

function drawLevelScene(
  ctx: CanvasRenderingContext2D,
  levelScene: HTMLCanvasElement,
  shareLevel: LevelDefinition,
  x: number,
  y: number,
  size: number,
  radius: number
) {
  ctx.save();

  ctx.fillStyle = 'rgba(4, 15, 13, 0.86)';
  roundRect(ctx, x - 18, y - 18, size + 36, size + 36, radius + 18);
  ctx.fill();
  ctx.strokeStyle = 'rgba(245, 255, 232, 0.46)';
  ctx.lineWidth = 4;
  ctx.stroke();

  roundRect(ctx, x, y, size, size, radius);
  ctx.clip();
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(levelScene, 0, 0, levelScene.width, levelScene.height, x, y, size, size);

  const topShade = ctx.createLinearGradient(0, y, 0, y + size * 0.28);
  topShade.addColorStop(0, 'rgba(0, 0, 0, 0.34)');
  topShade.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = topShade;
  ctx.fillRect(x, y, size, size * 0.3);

  drawSceneHud(ctx, shareLevel, x, y, size);
  ctx.restore();
}

function drawSceneHud(ctx: CanvasRenderingContext2D, shareLevel: LevelDefinition, x: number, y: number, size: number) {
  const pad = size * 0.045;
  const pillWidth = size * 0.26;
  const pillHeight = Math.max(48, size * 0.095);
  const pillY = y + pad;
  drawSceneHudPill(ctx, x + pad, pillY, pillWidth, pillHeight, t('game.hud.time'), '0');
  drawSceneHudPill(ctx, x + (size - pillWidth) / 2, pillY, pillWidth, pillHeight, t('game.hud.level'), '6');
  drawSceneHudPill(ctx, x + size - pad - pillWidth, pillY, pillWidth, pillHeight, t('game.hud.remain'), String(shareLevel.requiredCarrots));
}

function drawSceneHudPill(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  label: string,
  value: string
) {
  ctx.save();
  const gradient = ctx.createLinearGradient(x, y, x, y + height);
  gradient.addColorStop(0, 'rgba(82, 181, 91, 0.94)');
  gradient.addColorStop(1, 'rgba(16, 116, 46, 0.94)');
  ctx.fillStyle = gradient;
  roundRect(ctx, x, y, width, height, height / 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(245, 255, 230, 0.62)';
  ctx.lineWidth = 2;
  ctx.stroke();

  const highlight = ctx.createLinearGradient(x, y, x, y + height * 0.65);
  highlight.addColorStop(0, 'rgba(255, 255, 255, 0.28)');
  highlight.addColorStop(1, 'rgba(255, 255, 255, 0)');
  ctx.fillStyle = highlight;
  roundRect(ctx, x + width * 0.1, y + height * 0.12, width * 0.8, height * 0.42, height * 0.2);
  ctx.fill();

  ctx.textBaseline = 'middle';
  ctx.textAlign = 'left';
  ctx.shadowColor = 'rgba(0, 0, 0, 0.42)';
  ctx.shadowOffsetY = 2;
  ctx.fillStyle = 'rgba(246, 255, 235, 0.94)';
  const labelSize = fitFontSize(ctx, label, width * 0.42, Math.max(14, height * 0.28), 10, displayFont(), 900);
  ctx.font = `900 ${labelSize}px ${displayFont()}`;
  ctx.fillText(label, x + width * 0.16, y + height * 0.53);

  ctx.textAlign = 'right';
  ctx.fillStyle = '#ffffff';
  const valueSize = fitFontSize(ctx, value, width * 0.38, Math.max(28, height * 0.68), 20, displayFont(), 900);
  ctx.font = `900 ${valueSize}px ${displayFont()}`;
  ctx.fillText(value, x + width * 0.84, y + height * 0.53);
  ctx.restore();
}

function drawQrBlock(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, siteUrl: string) {
  const box = size + 34;
  ctx.fillStyle = 'rgba(255, 255, 255, 0.94)';
  roundRect(ctx, x - 17, y - 17, box, box + 40, 24);
  ctx.fill();
  ctx.strokeStyle = 'rgba(19, 45, 29, 0.18)';
  ctx.lineWidth = 3;
  ctx.stroke();

  const matrix = createQrMatrix(siteUrl);
  const quiet = 4;
  const moduleCount = matrix.length + quiet * 2;
  const module = size / moduleCount;
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(x, y, size, size);
  ctx.fillStyle = '#112316';
  for (let row = 0; row < matrix.length; row += 1) {
    for (let col = 0; col < matrix.length; col += 1) {
      if (!matrix[row][col]) continue;
      ctx.fillRect(
        x + (col + quiet) * module,
        y + (row + quiet) * module,
        Math.ceil(module),
        Math.ceil(module)
      );
    }
  }

  ctx.fillStyle = '#14351f';
  ctx.font = `900 19px ${displayFont()}`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillText(t('game.share.scan'), x + size / 2, y + size + 14);
}

function drawCarrotStamp(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(-0.18);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.26)';
  roundRect(ctx, -size * 0.55, -size * 0.5, size * 1.1, size, size * 0.22);
  ctx.fill();
  ctx.fillStyle = '#ff7a22';
  ellipse(ctx, 0, size * 0.12, size * 0.22, size * 0.42, -0.2);
  ctx.fill();
  ctx.fillStyle = '#4cb650';
  ellipse(ctx, -size * 0.08, -size * 0.26, size * 0.14, size * 0.28, -0.7);
  ctx.fill();
  ellipse(ctx, size * 0.12, -size * 0.26, size * 0.14, size * 0.30, 0.68);
  ctx.fill();
  ctx.restore();
}

function createQrMatrix(content: string): boolean[][] {
  const bytes = [...new TextEncoder().encode(content)];
  const bitCapacity = QR_DATA_CODEWORDS * 8;
  const bits: boolean[] = [];
  appendBits(bits, 0b0100, 4);
  appendBits(bits, bytes.length, 8);
  for (const byte of bytes) appendBits(bits, byte, 8);
  appendBits(bits, 0, Math.min(4, bitCapacity - bits.length));
  while (bits.length % 8 !== 0) bits.push(false);

  const dataCodewords: number[] = [];
  for (let i = 0; i < bits.length; i += 8) {
    let byte = 0;
    for (let j = 0; j < 8; j += 1) byte = (byte << 1) | (bits[i + j] ? 1 : 0);
    dataCodewords.push(byte);
  }
  if (dataCodewords.length > QR_DATA_CODEWORDS) throw new Error('Share URL is too long for QR code');
  for (let pad = 0; dataCodewords.length < QR_DATA_CODEWORDS; pad += 1) {
    dataCodewords.push(pad % 2 === 0 ? 0xec : 0x11);
  }

  const divisor = reedSolomonDivisor(QR_ECC_CODEWORDS);
  const ecc = reedSolomonRemainder(dataCodewords, divisor);
  const codewords = [...dataCodewords, ...ecc];
  const codeBits: boolean[] = [];
  for (const codeword of codewords) appendBits(codeBits, codeword, 8);
  return drawQrModules(codeBits);
}

function appendBits(bits: boolean[], value: number, length: number) {
  if (length < 0) throw new Error('Invalid QR bit length');
  for (let i = length - 1; i >= 0; i -= 1) bits.push(((value >>> i) & 1) !== 0);
}

function drawQrModules(codeBits: boolean[]): boolean[][] {
  const modules = Array.from({ length: QR_SIZE }, () => Array.from({ length: QR_SIZE }, () => false));
  const reserved = Array.from({ length: QR_SIZE }, () => Array.from({ length: QR_SIZE }, () => false));

  const setFunction = (x: number, y: number, dark: boolean) => {
    if (x < 0 || y < 0 || x >= QR_SIZE || y >= QR_SIZE) return;
    modules[y][x] = dark;
    reserved[y][x] = true;
  };

  drawFinder(setFunction, 0, 0);
  drawFinder(setFunction, QR_SIZE - 7, 0);
  drawFinder(setFunction, 0, QR_SIZE - 7);
  for (let i = 8; i < QR_SIZE - 8; i += 1) {
    setFunction(6, i, i % 2 === 0);
    setFunction(i, 6, i % 2 === 0);
  }
  drawAlignment(setFunction, QR_SIZE - 7, QR_SIZE - 7);
  drawFormatBits(setFunction, 0);

  let bitIndex = 0;
  let upward = true;
  for (let right = QR_SIZE - 1; right >= 1; right -= 2) {
    if (right === 6) right -= 1;
    for (let vert = 0; vert < QR_SIZE; vert += 1) {
      const y = upward ? QR_SIZE - 1 - vert : vert;
      for (let j = 0; j < 2; j += 1) {
        const x = right - j;
        if (reserved[y][x]) continue;
        const bit = bitIndex < codeBits.length ? codeBits[bitIndex] : false;
        modules[y][x] = bit !== qrMask(0, x, y);
        bitIndex += 1;
      }
    }
    upward = !upward;
  }

  drawFormatBits(setFunction, 0);
  return modules;
}

function drawFinder(setFunction: (x: number, y: number, dark: boolean) => void, left: number, top: number) {
  for (let dy = -1; dy <= 7; dy += 1) {
    for (let dx = -1; dx <= 7; dx += 1) {
      const x = left + dx;
      const y = top + dy;
      const dark = dx >= 0 && dx <= 6 && dy >= 0 && dy <= 6
        && (dx === 0 || dx === 6 || dy === 0 || dy === 6 || (dx >= 2 && dx <= 4 && dy >= 2 && dy <= 4));
      setFunction(x, y, dark);
    }
  }
}

function drawAlignment(setFunction: (x: number, y: number, dark: boolean) => void, centerX: number, centerY: number) {
  for (let dy = -2; dy <= 2; dy += 1) {
    for (let dx = -2; dx <= 2; dx += 1) {
      setFunction(centerX + dx, centerY + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1);
    }
  }
}

function drawFormatBits(setFunction: (x: number, y: number, dark: boolean) => void, mask: number) {
  const bits = formatBits(1, mask);
  const bit = (index: number) => ((bits >>> index) & 1) !== 0;
  for (let i = 0; i <= 5; i += 1) setFunction(8, i, bit(i));
  setFunction(8, 7, bit(6));
  setFunction(8, 8, bit(7));
  setFunction(7, 8, bit(8));
  for (let i = 9; i < 15; i += 1) setFunction(14 - i, 8, bit(i));
  for (let i = 0; i < 8; i += 1) setFunction(QR_SIZE - 1 - i, 8, bit(i));
  for (let i = 8; i < 15; i += 1) setFunction(8, QR_SIZE - 15 + i, bit(i));
  setFunction(8, QR_SIZE - 8, true);
}

function formatBits(errorCorrectionLevel: number, mask: number): number {
  const data = (errorCorrectionLevel << 3) | mask;
  let remainder = data;
  for (let i = 0; i < 10; i += 1) {
    remainder = (remainder << 1) ^ (((remainder >>> 9) & 1) * 0x537);
  }
  return ((data << 10) | remainder) ^ 0x5412;
}

function qrMask(mask: number, x: number, y: number): boolean {
  if (mask === 0) return (x + y) % 2 === 0;
  return false;
}

function reedSolomonDivisor(degree: number): number[] {
  const result = Array.from({ length: degree }, () => 0);
  result[degree - 1] = 1;
  let root = 1;
  for (let i = 0; i < degree; i += 1) {
    for (let j = 0; j < degree; j += 1) {
      result[j] = gfMultiply(result[j], root);
      if (j + 1 < degree) result[j] ^= result[j + 1];
    }
    root = gfMultiply(root, 0x02);
  }
  return result;
}

function reedSolomonRemainder(data: number[], divisor: number[]): number[] {
  const result = Array.from({ length: divisor.length }, () => 0);
  for (const byte of data) {
    const factor = byte ^ result[0];
    result.copyWithin(0, 1);
    result[result.length - 1] = 0;
    for (let i = 0; i < result.length; i += 1) {
      result[i] ^= gfMultiply(divisor[i], factor);
    }
  }
  return result;
}

function gfMultiply(x: number, y: number): number {
  let z = 0;
  for (let i = 7; i >= 0; i -= 1) {
    z = (z << 1) ^ ((z >>> 7) * 0x11d);
    if (((y >>> i) & 1) !== 0) z ^= x;
  }
  return z & 0xff;
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function ellipse(ctx: CanvasRenderingContext2D, x: number, y: number, radiusX: number, radiusY: number, rotation: number) {
  ctx.beginPath();
  ctx.ellipse(x, y, radiusX, radiusY, rotation, 0, Math.PI * 2);
}

function fitFontSize(
  ctx: CanvasRenderingContext2D,
  text: string,
  width: number,
  maxSize: number,
  minSize: number,
  fontFamily: string,
  weight: number
) {
  let size = maxSize;
  while (size > minSize) {
    ctx.font = `${weight} ${size}px ${fontFamily}`;
    if (ctx.measureText(text).width <= width) return size;
    size -= 1;
  }
  return minSize;
}

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  width: number,
  lineHeight: number,
  maxLines: number
) {
  const chunks = language() === 'zh' ? [...text] : text.split(' ');
  const glue = language() === 'zh' ? '' : ' ';
  let line = '';
  let lines = 0;
  for (const chunk of chunks) {
    const test = line ? `${line}${glue}${chunk}` : chunk;
    if (ctx.measureText(test).width > width && line) {
      ctx.fillText(line, x, y + lines * lineHeight);
      lines += 1;
      line = chunk;
      if (lines >= maxLines) return;
    } else {
      line = test;
    }
  }
  if (line && lines < maxLines) ctx.fillText(line, x, y + lines * lineHeight);
}

function displayFont(): string {
  return 'comicbd, "bobby-cn", comic, bgothm, sans-serif';
}

function uiFont(): string {
  return 'comic, "bobby-cn", comicbd, bgothm, sans-serif';
}
