export const FIRST_LEVEL = 'map1';
export const LAST_LEVEL_NUMBER = 30;

export function nextMapName(current: string): string | null {
  const match = current.match(/^map(\d+)$/);
  if (!match) return null;
  const num = Number(match[1]);
  if (!Number.isInteger(num) || num >= LAST_LEVEL_NUMBER) return null;
  return `map${num + 1}`;
}

export function nextOrFirstMapName(current: string): string {
  return nextMapName(current) ?? FIRST_LEVEL;
}
