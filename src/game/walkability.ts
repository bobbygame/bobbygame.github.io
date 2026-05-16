const walkableTileIds = new Set([7, 8, 9, 10, 11]);

export function isWalkableTileId(tileId: number | undefined): boolean {
  return tileId !== undefined && walkableTileIds.has(tileId);
}
