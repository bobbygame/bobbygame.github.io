import type { LevelDefinition } from '../game/levelDefinition';

export const levelNames = [
  "map1",
  "map2",
  "map3",
  "map4",
  "map5",
  "map6",
  "map7",
  "map8",
  "map9",
  "map10",
  "map11",
  "map12",
  "map13",
  "map14",
  "map15",
  "map16",
  "map17",
  "map18",
  "map19",
  "map20",
  "map21",
  "map22",
  "map23",
  "map24",
  "map25",
  "map26",
  "map27",
  "map28",
  "map29",
  "map30"
] as const;

export type LevelName = typeof levelNames[number];

const levelLoaders: Record<string, () => Promise<{ default: LevelDefinition }>> = {
  "map1": () => import('./levels/map1'),
  "map2": () => import('./levels/map2'),
  "map3": () => import('./levels/map3'),
  "map4": () => import('./levels/map4'),
  "map5": () => import('./levels/map5'),
  "map6": () => import('./levels/map6'),
  "map7": () => import('./levels/map7'),
  "map8": () => import('./levels/map8'),
  "map9": () => import('./levels/map9'),
  "map10": () => import('./levels/map10'),
  "map11": () => import('./levels/map11'),
  "map12": () => import('./levels/map12'),
  "map13": () => import('./levels/map13'),
  "map14": () => import('./levels/map14'),
  "map15": () => import('./levels/map15'),
  "map16": () => import('./levels/map16'),
  "map17": () => import('./levels/map17'),
  "map18": () => import('./levels/map18'),
  "map19": () => import('./levels/map19'),
  "map20": () => import('./levels/map20'),
  "map21": () => import('./levels/map21'),
  "map22": () => import('./levels/map22'),
  "map23": () => import('./levels/map23'),
  "map24": () => import('./levels/map24'),
  "map25": () => import('./levels/map25'),
  "map26": () => import('./levels/map26'),
  "map27": () => import('./levels/map27'),
  "map28": () => import('./levels/map28'),
  "map29": () => import('./levels/map29'),
  "map30": () => import('./levels/map30'),
};

export async function loadLevel(name: string): Promise<LevelDefinition> {
  const loader = levelLoaders[name];
  if (!loader) throw new Error(`Level not found: ${name}`);
  const module = await loader();
  return structuredClone(module.default);
}
