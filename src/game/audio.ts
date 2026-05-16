import { assetUrl } from './paths';

export type SoundEffect = 'move' | 'collect' | 'button' | 'die' | 'win' | 'unlock';

type AudioContextWindow = Window & typeof globalThis & {
  webkitAudioContext?: typeof AudioContext;
};

class AudioManager {
  private sounds = new Map<SoundEffect, HTMLAudioElement>();
  private buffers = new Map<SoundEffect, AudioBuffer>();
  private audioContext?: AudioContext;
  private effectGain?: GainNode;
  private bgMusic?: HTMLAudioElement;
  private bgMusicRequested = false;
  private muted = false;
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
    if (this.playBuffer(effect)) return;

    const audio = this.sounds.get(effect);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play().catch(() => {
      // Ignore autoplay policy errors
    });
  }

  playBgMusic() {
    this.bgMusicRequested = true;
    if (this.muted || !this.bgMusic) return;
    this.bgMusic.play().catch(() => {
      // Ignore autoplay policy errors
    });
  }

  stopBgMusic() {
    this.bgMusicRequested = false;
    this.pauseBgMusic();
  }

  toggleMute() {
    this.muted = !this.muted;
    if (this.muted) {
      this.pauseBgMusic();
    } else if (this.bgMusicRequested) {
      this.playBgMusic();
    }
    return this.muted;
  }

  private pauseBgMusic() {
    if (!this.bgMusic) return;
    this.bgMusic.pause();
    this.bgMusic.currentTime = 0;
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

  private playBuffer(effect: SoundEffect): boolean {
    if (!this.audioContext || !this.effectGain) return false;
    const buffer = this.buffers.get(effect);
    if (!buffer) return false;

    const source = this.audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(this.effectGain);
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
