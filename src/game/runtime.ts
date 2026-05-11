import { loadAssetManifest } from './assets';
import { audio } from './audio';
import { soundForGameEvent } from './audioEvents';
import { getCommunityLevel } from './communityLevel';
import { BrowserInputManager } from './input';
import { loadLevelDefinition } from './loader';
import { gameStateFromLevelDefinition } from './levelAdapter';
import { nextOrFirstMapName } from './levelProgression';
import { formatLevelDiagnostics, validateLevelDefinition } from './levelValidation';
import { Renderer } from './render';
import { GameSimulation } from './simulation';
import { SpriteLoader } from './sprites';
import { VirtualJoystick } from './touchControls';
import type { GameAction } from './actions';

export interface BrowserGameRuntimeOptions {
  container: HTMLElement;
  initialMap: string;
  initialCommunityId?: string;
  validateLevels?: boolean;
}

export class BrowserGameRuntime {
  private sprites?: SpriteLoader;
  private renderer?: Renderer;
  private joystick?: VirtualJoystick;
  private input?: BrowserInputManager;
  private simulation?: GameSimulation;
  private animationFrame = 0;
  private lastFrameTime = 0;
  private currentMap: string;
  private currentCommunityId: string | null = null;
  private deathTimer = 0;
  private loadingLevel = false;

  constructor(private readonly options: BrowserGameRuntimeOptions) {
    this.currentMap = options.initialMap;
  }

  async start() {
    const manifest = await loadAssetManifest();
    this.sprites = new SpriteLoader(manifest);
    await this.sprites.preloadAll();
    this.joystick = new VirtualJoystick();
    this.input = new BrowserInputManager((action) => {
      void this.dispatch(action);
    });
    this.input.bindKeyboard();
    if (this.options.initialCommunityId) {
      await this.loadCommunityLevel(this.options.initialCommunityId);
    } else {
      await this.loadLevel(this.currentMap);
    }
    audio.playBgMusic();
    this.lastFrameTime = performance.now();
    this.animationFrame = requestAnimationFrame(this.tick);
  }

  stop() {
    if (this.animationFrame) cancelAnimationFrame(this.animationFrame);
    this.input?.unbindKeyboard();
  }

  private async dispatch(action: GameAction) {
    if (!this.simulation) return;

    if (action.type === 'restart') {
      await this.reloadCurrentLevel();
      return;
    }

    if ((action.type === 'advance' || action.type === 'confirm') && this.simulation.status() === 'won') {
      if (this.currentCommunityId) return;
      await this.loadLevel(nextOrFirstMapName(this.currentMap));
      return;
    }

    this.simulation.dispatch(action);
  }

  private async reloadCurrentLevel() {
    if (this.currentCommunityId) {
      await this.loadCommunityLevel(this.currentCommunityId);
      return;
    }
    await this.loadLevel(this.currentMap);
  }

  private async loadLevel(mapName: string) {
    if (this.loadingLevel) return;
    this.loadingLevel = true;

    try {
      const level = await loadLevelDefinition(mapName);
      if (this.options.validateLevels !== false) {
        const diagnostics = validateLevelDefinition(level);
        if (diagnostics.length > 0) console.warn(formatLevelDiagnostics(mapName, diagnostics));
      }

      const state = gameStateFromLevelDefinition(level);
      this.currentMap = mapName;
      this.currentCommunityId = null;
      this.syncUrl(mapName);
      this.deathTimer = 0;
      this.simulation = new GameSimulation(state);

      if (this.renderer) {
        this.renderer.setState(state);
      } else {
        if (!this.sprites) throw new Error('Sprites must be loaded before the renderer starts');
        this.renderer = new Renderer(state, this.options.container, this.sprites);
      }
      this.renderer.draw();
    } finally {
      this.loadingLevel = false;
    }
  }

  private async loadCommunityLevel(id: string) {
    if (this.loadingLevel) return;
    this.loadingLevel = true;

    try {
      const communityLevel = getCommunityLevel(id);
      if (!communityLevel) throw new Error(`Community level not found: ${id}`);
      const level = communityLevel.level;
      if (this.options.validateLevels !== false) {
        const diagnostics = validateLevelDefinition(level);
        if (diagnostics.length > 0) console.warn(formatLevelDiagnostics(communityLevel.title, diagnostics));
      }

      const state = gameStateFromLevelDefinition(level);
      this.currentMap = level.name;
      this.currentCommunityId = id;
      this.syncCommunityUrl(id);
      this.deathTimer = 0;
      this.simulation = new GameSimulation(state);

      if (this.renderer) {
        this.renderer.setState(state);
      } else {
        if (!this.sprites) throw new Error('Sprites must be loaded before the renderer starts');
        this.renderer = new Renderer(state, this.options.container, this.sprites);
      }
      this.renderer.draw();
    } finally {
      this.loadingLevel = false;
    }
  }

  private syncUrl(mapName: string) {
    const url = new URL(window.location.href);
    url.searchParams.set('map', mapName);
    url.searchParams.delete('community');
    window.history.replaceState(null, '', url);
  }

  private syncCommunityUrl(id: string) {
    const url = new URL(window.location.href);
    url.searchParams.set('community', id);
    url.searchParams.delete('map');
    window.history.replaceState(null, '', url);
  }

  private tick = (now: number) => {
    const dt = Math.min((now - this.lastFrameTime) / 1000, 0.05);
    this.lastFrameTime = now;

    if (this.simulation) {
      if (this.simulation.status() === 'dead') {
        this.deathTimer += dt;
        if (this.deathTimer > 2) {
          void this.loadLevel(this.currentMap);
        }
      } else if (this.simulation.status() === 'playing') {
        const joystickDirection = this.joystick?.direction();
        if (joystickDirection) this.simulation.dispatch({ type: 'move', direction: joystickDirection });

        const step = this.simulation.update(dt);
        for (const event of step.events) {
          const sound = soundForGameEvent(event);
          if (sound) audio.play(sound);
        }
      }

      this.renderer?.draw();
    }

    this.animationFrame = requestAnimationFrame(this.tick);
  };
}
