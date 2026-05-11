import type { LevelDefinition } from './levelDefinition';

export type CommunityLevelDifficulty = 'easy' | 'normal' | 'hard' | 'expert';

export interface CommunityLevel {
  schemaVersion: 1;
  id: string;
  title: string;
  author: string;
  difficulty: CommunityLevelDifficulty;
  tags: string[];
  level: LevelDefinition;
}

const STORAGE_KEY = 'bobby.communityLevels.v1';

export function createCommunityLevel(level: LevelDefinition, overrides: Partial<CommunityLevel> = {}): CommunityLevel {
  return {
    schemaVersion: 1,
    id: overrides.id ?? `community-${Date.now().toString(36)}`,
    title: overrides.title ?? level.name,
    author: overrides.author ?? '',
    difficulty: overrides.difficulty ?? 'normal',
    tags: overrides.tags ?? [],
    level,
  };
}

export function isCommunityLevel(value: unknown): value is CommunityLevel {
  if (!value || typeof value !== 'object') return false;
  const candidate = value as Partial<CommunityLevel>;
  return candidate.schemaVersion === 1
    && typeof candidate.id === 'string'
    && typeof candidate.title === 'string'
    && typeof candidate.author === 'string'
    && Array.isArray(candidate.tags)
    && !!candidate.level
    && typeof candidate.level === 'object';
}

function readLibrary(): CommunityLevel[] {
  if (typeof localStorage === 'undefined') return [];
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]') as unknown;
    return Array.isArray(parsed) ? parsed.filter(isCommunityLevel) : [];
  } catch {
    return [];
  }
}

function writeLibrary(levels: CommunityLevel[]) {
  if (typeof localStorage === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(levels));
}

export function listCommunityLevels(): CommunityLevel[] {
  return readLibrary().sort((a, b) => a.title.localeCompare(b.title));
}

export function getCommunityLevel(id: string): CommunityLevel | null {
  return readLibrary().find((level) => level.id === id) ?? null;
}

export function saveCommunityLevel(level: CommunityLevel) {
  const levels = readLibrary().filter((candidate) => candidate.id !== level.id);
  levels.push(structuredClone(level));
  writeLibrary(levels);
}

export function deleteCommunityLevel(id: string) {
  writeLibrary(readLibrary().filter((level) => level.id !== id));
}
