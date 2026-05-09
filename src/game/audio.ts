export type SoundEffect = 'move' | 'collect' | 'button' | 'die' | 'win' | 'unlock';

class AudioManager {
  private sounds = new Map<SoundEffect, HTMLAudioElement>();
  private bgMusic?: HTMLAudioElement;
  private muted = false;

  constructor() {
    this.preload();
  }

  private preload() {
    const soundMap: Record<SoundEffect, string> = {
      move: '/game/media/go.webm',
      collect: '/game/media/go.webm',
      button: '/game/media/lock2.mp3',
      die: '/game/media/dead.mp3',
      win: '/game/media/success.mp3',
      unlock: '/game/media/lock2.mp3',
    };

    for (const [key, path] of Object.entries(soundMap)) {
      const audio = new Audio(path);
      audio.volume = 0.5;
      audio.preload = 'auto';
      this.sounds.set(key as SoundEffect, audio);
    }

    this.bgMusic = new Audio('/game/media/main.mp3');
    this.bgMusic.loop = true;
    this.bgMusic.volume = 0.3;
    this.bgMusic.preload = 'auto';
  }

  play(effect: SoundEffect) {
    if (this.muted) return;
    const audio = this.sounds.get(effect);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play().catch(() => {
      // Ignore autoplay policy errors
    });
  }

  playBgMusic() {
    if (this.muted || !this.bgMusic) return;
    this.bgMusic.play().catch(() => {
      // Ignore autoplay policy errors
    });
  }

  stopBgMusic() {
    if (!this.bgMusic) return;
    this.bgMusic.pause();
    this.bgMusic.currentTime = 0;
  }

  toggleMute() {
    this.muted = !this.muted;
    if (this.muted) {
      this.stopBgMusic();
    }
    return this.muted;
  }
}

export const audio = new AudioManager();
