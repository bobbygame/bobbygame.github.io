import type { GameState } from './types';

type ClarityArg = string | string[];

declare global {
  interface Window {
    clarity?: (command: string, ...args: ClarityArg[]) => void;
  }
}

function clarity(command: string, ...args: ClarityArg[]) {
  if (typeof window === 'undefined') return;
  window.clarity?.(command, ...args);
}

export function setAnalyticsTag(key: string, value: string | number | boolean) {
  clarity('set', key, String(value));
}

export function trackAnalyticsEvent(name: string) {
  clarity('event', name);
}

export function trackButtonClick(name: string) {
  trackAnalyticsEvent(`button_${name}`);
}

export function trackShareClick() {
  trackAnalyticsEvent('share_click');
}

function setGameTags(state: GameState, result: 'start' | 'win' | 'over') {
  setAnalyticsTag('game_level', state.mapName);
  setAnalyticsTag('game_result', result);
}

export function trackGameStart(state: GameState, mode: 'built_in' | 'community') {
  setGameTags(state, 'start');
  setAnalyticsTag('game_mode', mode);
  trackAnalyticsEvent('game_start');
}

export function trackGameWin(state: GameState) {
  setGameTags(state, 'win');
  trackAnalyticsEvent('game_win');
}

export function trackGameOver(state: GameState) {
  setGameTags(state, 'over');
  trackAnalyticsEvent('game_over');
}

export function trackFrontendError(error: unknown) {
  const message = error instanceof Error ? error.message : String(error);
  setAnalyticsTag('frontend_error_message', message.slice(0, 255));
  trackAnalyticsEvent('frontend_error');
}
