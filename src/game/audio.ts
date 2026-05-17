import { assetUrl } from './paths';

export type SoundEffect = 'move' | 'collect' | 'button' | 'die' | 'win' | 'unlock';

const MUTE_STORAGE_KEY = 'bobby-carrot.audio-muted';
const BG_PAUSING_EFFECTS = new Set<SoundEffect>(['die', 'win']);

type AudioContextWindow = Window & typeof globalThis & {
  webkitAudioContext?: typeof AudioContext;
};

function readStoredMute(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return window.localStorage.getItem(MUTE_STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
}

class AudioManager {
  private sounds = new Map<SoundEffect, HTMLAudioElement>();
  private buffers = new Map<SoundEffect, AudioBuffer>();
  private audioContext?: AudioContext;
  private effectGain?: GainNode;
  private bgMusic?: HTMLAudioElement;
  private bgMusicRequested = false;
  private bgMusicHeld = false;
  private bgMusicResumePending = false;
  private bgPausingEffectCount = 0;
  private muted = readStoredMute();
  private unlocked = false;

  constructor() {
    if (typeof Audio !== 'undefined') this.preload();
  }

  private preload() {
    this.audioContext = this.createAudioContext();
    if (this.audioContext) {
      this.effectGain = this.audioContext.createGain();
      this.effectGain.gain.value = 0.5;
      this.effectGain.connect(this.audioContext.destination);
    }

    const soundMap: Record<SoundEffect, string> = {
      move: assetUrl('assets/audio/go.webm'),
      collect: assetUrl('assets/audio/go.webm'),
      button: assetUrl('assets/audio/lock2.mp3'),
      die: assetUrl('assets/audio/dead.mp3'),
      win: assetUrl('assets/audio/success.mp3'),
      unlock: assetUrl('assets/audio/lock2.mp3'),
    };

    for (const [key, path] of Object.entries(soundMap)) {
      const audio = new Audio(path);
      audio.volume = 0.5;
      audio.preload = 'auto';
      audio.load();
      this.sounds.set(key as SoundEffect, audio);
      this.preloadBuffer(key as SoundEffect, path);
    }

    this.bgMusic = new Audio(assetUrl('assets/audio/main.mp3'));
    this.bgMusic.loop = true;
    this.bgMusic.volume = 0.3;
    this.bgMusic.preload = 'auto';
    this.bgMusic.load();
    this.installUnlockListeners();
  }

  play(effect: SoundEffect) {
    if (this.muted) return;
    const releaseBgHold = this.holdBgMusicForEffect(effect);
    if (this.playBuffer(effect, releaseBgHold)) return;

    const audio = this.sounds.get(effect);
    if (!audio) {
      releaseBgHold?.();
      return;
    }
    audio.currentTime = 0;
    if (releaseBgHold) audio.addEventListener('ended', releaseBgHold, { once: true });
    audio.play().catch(() => {
      releaseBgHold?.();
      // Ignore autoplay policy errors
    });
  }

  playBgMusic() {
    this.bgMusicRequested = true;
    if (this.muted || !this.bgMusic || this.bgMusicHeld) return;
    this.bgMusic.play().catch(() => {
      // Ignore autoplay policy errors
    });
  }

  resumeBgMusic() {
    if (this.bgPausingEffectCount > 0) {
      this.bgMusicResumePending = true;
      return;
    }
    this.bgMusicResumePending = false;
    this.bgMusicHeld = false;
    if (this.bgMusicRequested) this.playBgMusic();
  }

  stopBgMusic() {
    this.bgMusicRequested = false;
    this.bgMusicHeld = false;
    this.bgMusicResumePending = false;
    this.pauseBgMusic(true);
  }

  isMuted() {
    return this.muted;
  }

  toggleMute() {
    this.muted = !this.muted;
    this.storeMute();
    if (this.muted) {
      this.pauseBgMusic(true);
    } else if (this.bgMusicRequested && !this.bgMusicHeld) {
      this.playBgMusic();
    }
    return this.muted;
  }

  private storeMute() {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(MUTE_STORAGE_KEY, String(this.muted));
    } catch {
      // Muting still works for the current session if storage is unavailable.
    }
  }

  private pauseBgMusic(reset = false) {
    if (!this.bgMusic) return;
    this.bgMusic.pause();
    if (reset) this.bgMusic.currentTime = 0;
  }

  private holdBgMusicForEffect(effect: SoundEffect): (() => void) | undefined {
    if (!BG_PAUSING_EFFECTS.has(effect) || !this.bgMusic || !this.bgMusicRequested) return undefined;
    this.bgMusicHeld = true;
    this.bgMusicResumePending = false;
    this.bgPausingEffectCount += 1;
    this.pauseBgMusic();

    let released = false;
    return () => {
      if (released) return;
      released = true;
      this.bgPausingEffectCount = Math.max(0, this.bgPausingEffectCount - 1);
      if (this.bgMusicResumePending && this.bgPausingEffectCount === 0) this.resumeBgMusic();
    };
  }

  private createAudioContext(): AudioContext | undefined {
    if (typeof window === 'undefined') return undefined;
    const AudioContextConstructor = window.AudioContext
      ?? (window as AudioContextWindow).webkitAudioContext;
    if (!AudioContextConstructor) return undefined;

    try {
      return new AudioContextConstructor();
    } catch {
      return undefined;
    }
  }

  private preloadBuffer(effect: SoundEffect, path: string) {
    if (!this.audioContext || typeof fetch === 'undefined') return;
    fetch(path)
      .then((response) => {
        if (!response.ok) throw new Error(`Failed to load audio: ${path}`);
        return response.arrayBuffer();
      })
      .then((data) => this.audioContext?.decodeAudioData(data))
      .then((buffer) => {
        if (buffer) this.buffers.set(effect, buffer);
      })
      .catch(() => {
        // HTMLAudioElement playback remains as a fallback.
      });
  }

  private playBuffer(effect: SoundEffect, onEnded?: () => void): boolean {
    if (!this.audioContext || !this.effectGain) return false;
    const buffer = this.buffers.get(effect);
    if (!buffer) return false;

    const source = this.audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(this.effectGain);
    if (onEnded) source.addEventListener('ended', onEnded, { once: true });
    source.start();
    return true;
  }

  private installUnlockListeners() {
    if (typeof window === 'undefined') return;
    const unlock = () => this.unlockAudio();
    const options: AddEventListenerOptions = { capture: true, passive: true };
    window.addEventListener('pointerdown', unlock, options);
    window.addEventListener('keydown', unlock, options);
    window.addEventListener('touchstart', unlock, options);
  }

  private unlockAudio() {
    if (this.unlocked) return;
    this.unlocked = true;
    this.audioContext?.resume().catch(() => {
      // Ignore autoplay policy errors
    });
    if (this.bgMusicRequested) this.playBgMusic();
  }
}

export const audio = new AudioManager();
