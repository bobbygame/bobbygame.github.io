import type { SoundEffect } from './audio';

export function soundForGameEvent(event: string): SoundEffect | null {
  if (event === 'Carrot +1' || event.startsWith('Key ')) return 'collect';
  if (event.startsWith('Unlock ')) return 'unlock';
  if (event === 'Conveyor button toggled' || event === 'Stone button toggled') return 'button';
  if (event === 'Hit trap') return 'die';
  if (event === 'Goal reached' || event === 'Level complete!') return 'win';
  return null;
}
