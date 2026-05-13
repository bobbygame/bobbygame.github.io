import { loadAssetManifest } from './assets';
import { audio } from './audio';
import { soundForGameEvent } from './audioEvents';
import { getCommunityLevel } from './communityLevel';
import { BrowserInputManager } from './input';
import { loadLevelDefinition } from './loader';
import { gameStateFromLevelDefinition } from './levelAdapter';
import { FIRST_LEVEL, nextOrFirstMapName } from './levelProgression';
import { formatLevelDiagnostics, validateLevelDefinition } from './levelValidation';
import { Renderer } from './render';
import {
  clearGameSave,
  createGameSave,
  loadGameSave,
  restoreGameState,
  storeGameSave,
  type GameSaveSlot,
  type SaveActionResult,
} from './saveSystem';
import { GameSimulation } from './simulation';
import { SpriteLoader } from './sprites';
import { VirtualJoystick } from './touchControls';
import type { GameAction } from './actions';
import type { GameState } from './types';

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
  private saveSlot: GameSaveSlot | null = loadGameSave();

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
        this.createRenderer(state);
      }
      this.renderer?.draw();
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
        this.createRenderer(state);
      }
      this.renderer?.draw();
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

  private createRenderer(state: GameState) {
    if (!this.sprites) throw new Error('Sprites must be loaded before the renderer starts');
    this.renderer = new Renderer(state, this.options.container, this.sprites, () => {
      void this.dispatch({ type: 'advance' });
    }, {
      shell: 'device',
      showEditorLink: true,
      savePanel: {
        initialSlot: this.saveSlot,
        onSave: () => this.saveCurrentGame(),
        onResume: () => this.resumeSavedGame(),
        onNewGame: () => this.startNewGame(),
        onDelete: () => this.deleteSavedGame(),
      },
    });
  }

  private saveCurrentGame(): SaveActionResult {
    if (!this.simulation) return { ok: false, message: '还没有可保存的进度' };
    if (this.loadingLevel) return { ok: false, message: '关卡正在加载' };
    if (this.simulation.isMoving()) return { ok: false, message: '角色停稳后再存档' };
    if (this.simulation.status() === 'dead') return { ok: false, message: '失败状态不能存档' };
    if (this.simulation.status() === 'won') return { ok: false, message: '进入下一关后再存档' };

    try {
      const slot = createGameSave(this.simulation.state, this.currentMap, this.currentCommunityId);
      storeGameSave(slot);
      this.saveSlot = slot;
      this.renderer?.setSaveSlot(slot, '已保存当前进度');
      return { ok: true, message: '已保存当前进度', slot };
    } catch {
      return { ok: false, message: '存档失败，浏览器拒绝写入' };
    }
  }

  private resumeSavedGame(): SaveActionResult {
    if (this.loadingLevel) return { ok: false, message: '关卡正在加载' };
    this.saveSlot = loadGameSave();
    if (!this.saveSlot) return { ok: false, message: '没有可继续的存档', slot: null };

    const state = restoreGameState(this.saveSlot);
    if (!state) {
      clearGameSave();
      this.saveSlot = null;
      this.renderer?.setSaveSlot(null, '存档损坏，已清除');
      return { ok: false, message: '存档损坏，已清除', slot: null };
    }

    this.currentMap = this.saveSlot.currentMap;
    this.currentCommunityId = this.saveSlot.currentCommunityId;
    if (this.currentCommunityId) this.syncCommunityUrl(this.currentCommunityId);
    else this.syncUrl(this.currentMap);
    this.deathTimer = 0;
    this.simulation = new GameSimulation(state);
    if (this.renderer) this.renderer.setState(state);
    else this.createRenderer(state);
    this.renderer?.setSaveSlot(this.saveSlot, '已从存档继续');
    this.renderer?.draw();
    return { ok: true, message: '已从存档继续', slot: this.saveSlot };
  }

  private async startNewGame(): Promise<SaveActionResult> {
    if (this.loadingLevel) return { ok: false, message: '关卡正在加载' };
    clearGameSave();
    this.saveSlot = null;
    this.renderer?.setSaveSlot(null, '已清除存档，开始新游戏');
    await this.loadLevel(FIRST_LEVEL);
    this.renderer?.setSaveSlot(null, '已开始新游戏');
    return { ok: true, message: '已开始新游戏', slot: null };
  }

  private deleteSavedGame(): SaveActionResult {
    clearGameSave();
    this.saveSlot = null;
    this.renderer?.setSaveSlot(null, '已删除存档');
    return { ok: true, message: '已删除存档', slot: null };
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
