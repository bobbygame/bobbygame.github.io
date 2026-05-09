// Parse Construct 3 tilemap RLE string (e.g. "2,4,6,7,2x2,1") into a flat array
export function parseTilemapData(rle: string): number[] {
  const tokens = rle.split(',');
  const result: number[] = [];
  for (const token of tokens) {
    if (!token) continue;
    const parts = token.split('x');
    if (parts.length === 2) {
      const count = parseInt(parts[0], 10);
      const value = parseInt(parts[1], 10);
      for (let i = 0; i < count; i += 1) result.push(value);
    } else {
      result.push(parseInt(token, 10));
    }
  }
  return result;
}
