import type { Direction } from './movement';

export type MoveDirection = Exclude<Direction, null>;

export type GameAction =
  | { type: 'move'; direction: MoveDirection }
  | { type: 'restart' }
  | { type: 'advance' }
  | { type: 'confirm' };

export function actionFromKeyboardKey(key: string): GameAction | null {
  if (key === 'ArrowLeft' || key === 'a' || key === 'A') return { type: 'move', direction: 'left' };
  if (key === 'ArrowRight' || key === 'd' || key === 'D') return { type: 'move', direction: 'right' };
  if (key === 'ArrowUp' || key === 'w' || key === 'W') return { type: 'move', direction: 'up' };
  if (key === 'ArrowDown' || key === 's' || key === 'S') return { type: 'move', direction: 'down' };
  if (key === 'Alt' || key === 'r' || key === 'R') return { type: 'restart' };
  if (key === 'Enter' || key === ' ' || key === 'n' || key === 'N') return { type: 'advance' };
  return null;
}
