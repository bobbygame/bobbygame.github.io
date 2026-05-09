// Required carrot count per level (from CarrotN array in event sheet)
export const REQUIRED_CARROTS: Record<string, number> = {
  map1: 9,
  map2: 13,
  map3: 12,
  map4: 35,
  map5: 19,
  map6: 24,
  map7: 34,
  map8: 8,
  map9: 27,
  map10: 17,
  map11: 16,
  map12: 27,
  map13: 8,
  map14: 17,
  map15: 10,
  map16: 21,
  map17: 21,
  map18: 18,
  map19: 8,
  map20: 23,
  map21: 18,
  map22: 18,
  map23: 32,
  map24: 11,
  map25: 21,
  map26: 65,
  map27: 8,
  map28: 21,
  map29: 15,
  map30: 10,
};

export function getRequiredCarrots(mapName: string): number {
  return REQUIRED_CARROTS[mapName] ?? 0;
}
