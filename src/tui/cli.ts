import { loadGame } from '../game/loader';
import { nextMapName } from '../game/levelProgression';
import { GameSimulation } from '../game/simulation';
import type { Direction } from '../game/movement';
import type { Entity, GameState } from '../game/types';
import { isWalkableTileId } from '../game/walkability';

declare const process: {
  argv: string[];
  stdin: {
    isTTY?: boolean;
    setRawMode?: (mode: boolean) => void;
    resume: () => void;
    pause: () => void;
    setEncoding: (encoding: string) => void;
    on: (event: string, callback: (chunk: string) => void) => void;
  };
  stdout: {
    columns?: number;
    isTTY?: boolean;
    rows?: number;
    write: (text: string) => void;
  };
  exit: (code?: number) => never;
  on: (event: string, callback: () => void) => void;
};

const CELL_WIDTH = 2;
const TICK_MS = 50;
const RESET = '\x1b[0m';
const ENTER_ALT_SCREEN = '\x1b[?1049h';
const EXIT_ALT_SCREEN = '\x1b[?1049l';
const HIDE_CURSOR = '\x1b[?25l';
const SHOW_CURSOR = '\x1b[?25h';
const CLEAR = '\x1b[2J\x1b[H';

const colors = {
  grass: '\x1b[48;5;34m\x1b[38;5;22m',
  path: '\x1b[48;5;238m\x1b[38;5;244m',
  wall: '\x1b[48;5;94m\x1b[38;5;180m',
  carrot: '\x1b[48;5;238m\x1b[38;5;208m',
  player: '\x1b[48;5;238m\x1b[38;5;229m',
  goal: '\x1b[48;5;238m\x1b[38;5;196m',
  trap: '\x1b[48;5;196m\x1b[38;5;231m',
  button: '\x1b[48;5;238m\x1b[38;5;226m',
  key: '\x1b[48;5;238m\x1b[38;5;45m',
  lock: '\x1b[48;5;238m\x1b[38;5;39m',
  conveyor: '\x1b[48;5;16m\x1b[38;5;226m',
  stone: '\x1b[48;5;238m\x1b[38;5;46m',
};

type RenderMode = 'emoji' | 'ascii';

function usage() {
  console.log(`Bobby Carrot TUI

Usage:
  bobby-carrot [--map map1] [--ascii]

Controls:
  Arrow keys / WASD  Move
  R                  Restart level
  N                  Next level after success
  Q / Ctrl+C         Quit
`);
}

function parseMapName(): string {
  const mapIndex = process.argv.findIndex((arg) => arg === '--map' || arg === '-m');
  if (mapIndex >= 0) return process.argv[mapIndex + 1] ?? 'map1';
  return 'map1';
}

function parseRenderMode(): RenderMode {
  return process.argv.includes('--ascii') ? 'ascii' : 'emoji';
}

function cell(entity: Entity, tileSize: number) {
  return {
    x: Math.round(entity.pos.x / tileSize),
    y: Math.round(entity.pos.y / tileSize),
  };
}

function directionForKey(input: string): Direction {
  if (input === '\x1b[D' || input === 'a' || input === 'A') return 'left';
  if (input === '\x1b[C' || input === 'd' || input === 'D') return 'right';
  if (input === '\x1b[A' || input === 'w' || input === 'W') return 'up';
  if (input === '\x1b[B' || input === 's' || input === 'S') return 'down';
  return null;
}

function tileToken(tileId: number, mode: RenderMode) {
  if (mode === 'emoji') return isWalkableTileId(tileId) ? '⬛️' : '🪨';
  if (isWalkableTileId(tileId)) return `${colors.path}  ${RESET}`;
  return `${colors.grass}..${RESET}`;
}

function directionToken(entity: Entity) {
  const value = Number(entity.data.direction1 ?? entity.data.sign ?? 0);
  if (entity.kind === 'conveyorX') return value === 0 ? '<<' : '>>';
  if (entity.kind === 'conveyorY') return value === 0 ? '^^' : 'vv';
  if (entity.kind === 'stone') return Number(entity.data.sign ?? 1) === 1 ? '--' : '||';
  if (entity.kind === 'stoneAngle') return ['  ', 'DR', 'DL', 'UL', 'UR'][Number(entity.data.sign ?? 1)] ?? 'L ';
  return '??';
}

function entityToken(entity: Entity, mode: RenderMode) {
  if (mode === 'emoji') {
    if (entity.kind === 'player') return '🦊';
    if (entity.kind === 'wall') return '🪨';
    if (entity.kind === 'carrot') return '🐥';
    if (entity.kind === 'goal' || entity.kind === 'channel') return '🎯';
    if (entity.kind === 'trap') return Boolean(entity.data.isSharp) ? '❌' : '✅';
    if (entity.kind === 'key') return { 1: '🟡', 2: '🔴', 3: '🔵' }[Number(entity.data.sign ?? 1)] ?? '🔑';
    if (entity.kind === 'lock') return { 1: '🔒', 2: '⛔', 3: '🔐' }[Number(entity.data.sign ?? 1)] ?? '🔒';
    if (entity.kind === 'conveyorButton') return Boolean(entity.data.open) ? '🟨' : '🟫';
    if (entity.kind === 'stoneButton') return Boolean(entity.data.open) ? '🟥' : '🟫';
    if (entity.kind === 'conveyorX') return Number(entity.data.direction1 ?? 0) === 0 ? '◀️ ' : '▶️ ';
    if (entity.kind === 'conveyorY') return Number(entity.data.direction1 ?? 0) === 0 ? '🔼' : '🔽';
    if (entity.kind === 'stone') return Number(entity.data.sign ?? 1) === 1 ? '↔️ ' : '↕️ ';
    if (entity.kind === 'stoneAngle') return ['  ', '↘️ ', '↙️ ', '↖️ ', '↗️ '][Number(entity.data.sign ?? 1)] ?? '↗️ ';
  }

  if (entity.kind === 'player') return `${colors.player}B ${RESET}`;
  if (entity.kind === 'wall') return `${colors.wall}##${RESET}`;
  if (entity.kind === 'carrot') return `${colors.carrot}C ${RESET}`;
  if (entity.kind === 'goal' || entity.kind === 'channel') return `${colors.goal}O ${RESET}`;
  if (entity.kind === 'trap') return `${colors.trap}${Boolean(entity.data.isSharp) ? '!!' : '..'}${RESET}`;
  if (entity.kind === 'key') return `${colors.key}K${String(entity.data.sign ?? '').slice(0, 1)}${RESET}`;
  if (entity.kind === 'lock') return `${colors.lock}L${String(entity.data.sign ?? '').slice(0, 1)}${RESET}`;
  if (entity.kind === 'conveyorButton') return `${colors.button}Y${Boolean(entity.data.open) ? '^' : '_'}${RESET}`;
  if (entity.kind === 'stoneButton') return `${colors.button}R${Boolean(entity.data.open) ? '^' : '_'}${RESET}`;
  if (entity.kind === 'conveyorX' || entity.kind === 'conveyorY') return `${colors.conveyor}${directionToken(entity)}${RESET}`;
  if (entity.kind === 'stone' || entity.kind === 'stoneAngle') return `${colors.stone}${directionToken(entity)}${RESET}`;
  return null;
}

function visibleEntityAt(state: GameState, x: number, y: number): Entity | null {
  const priority: Partial<Record<Entity['kind'], number>> = {
    player: 0,
    wall: 1,
    lock: 2,
    key: 3,
    carrot: 4,
    goal: 5,
    channel: 6,
    trap: 7,
    conveyorButton: 8,
    stoneButton: 9,
    conveyorX: 10,
    conveyorY: 11,
    stone: 12,
    stoneAngle: 13,
    bornPlace: 14,
  };
  const entities = state.entities
    .filter((entity) => {
      if (entity.dead) return false;
      const pos = cell(entity, state.tileSize);
      return pos.x === x && pos.y === y;
    })
    .sort((a, b) => (priority[a.kind] ?? 99) - (priority[b.kind] ?? 99));
  return entities[0] ?? null;
}

class TuiGame {
  private state!: GameState;
  private simulation!: GameSimulation;
  private tickTimer: ReturnType<typeof setTimeout> | null = null;
  private queuedDirection: Direction = null;

  constructor(private mapName: string, private renderMode: RenderMode) {}

  async start() {
    await this.load(this.mapName);
    this.installInput();
    process.stdout.write(`${process.stdout.isTTY ? ENTER_ALT_SCREEN : ''}${HIDE_CURSOR}`);
    this.render();
  }

  private async load(mapName: string) {
    this.mapName = mapName;
    this.state = await loadGame(mapName);
    this.simulation = new GameSimulation(this.state);
  }

  private installInput() {
    process.stdin.setEncoding('utf8');
    if (process.stdin.isTTY) process.stdin.setRawMode?.(true);
    process.stdin.resume();
    process.stdin.on('data', (input) => {
      if (input === '\u0003' || input === 'q' || input === 'Q') this.stop();
      if (input === 'r' || input === 'R') {
        void this.load(this.mapName).then(() => this.render());
        return;
      }
      if ((input === 'n' || input === 'N') && this.state.won) {
        const next = nextMapName(this.mapName);
        if (next) void this.load(next).then(() => this.render());
        return;
      }
      const direction = directionForKey(input);
      if (direction) {
        this.queuedDirection = direction;
        this.requestTick();
      }
    });
    process.on('SIGINT', () => this.stop());
  }

  private requestTick() {
    if (this.tickTimer !== null) return;
    this.tickTimer = setTimeout(() => {
      this.tickTimer = null;
      this.tick();
    }, TICK_MS);
  }

  private tick() {
    let changed = false;

    if (!this.state.player.dead && !this.state.won && (this.queuedDirection || this.simulation.isMoving())) {
      if (this.queuedDirection) {
        this.simulation.dispatch({ type: 'move', direction: this.queuedDirection });
        this.queuedDirection = null;
      }
      this.simulation.update(TICK_MS / 1000);
      changed = true;
    }

    if (changed) this.render();
    if (!this.state.player.dead && !this.state.won && (this.queuedDirection || this.simulation.isMoving())) {
      this.requestTick();
    }
  }

  private viewport() {
    const terminalCols = Math.max(20, process.stdout.columns ?? 80);
    const terminalRows = Math.max(12, process.stdout.rows ?? 24);
    const cols = Math.min(this.state.tilemap.cols, Math.floor(terminalCols / CELL_WIDTH));
    const rows = Math.min(this.state.tilemap.rows, terminalRows - 5);
    const playerCell = cell(this.state.player, this.state.tileSize);
    const x = Math.max(0, Math.min(this.state.tilemap.cols - cols, playerCell.x - Math.floor(cols / 2)));
    const y = Math.max(0, Math.min(this.state.tilemap.rows - rows, playerCell.y - Math.floor(rows / 2)));
    return { x, y, cols, rows };
  }

  private render() {
    const view = this.viewport();
    const remain = Math.max(0, this.state.requiredCarrots - this.state.inventory.carrots);
    const keys = Object.keys(this.state.inventory.keys).filter((key) => this.state.inventory.keys[key]).join(',') || '-';
    let output = CLEAR;
    output += `Bobby Carrot  ${this.state.mapName}  Time ${Math.floor(this.state.stats.timeElapsed)}  Remain ${remain}  Keys ${keys}\n`;
    output += `Move: arrows/WASD  Restart: R  ${this.state.won ? 'Next: N  ' : ''}Quit: Q\n`;

    for (let row = view.y; row < view.y + view.rows; row += 1) {
      for (let col = view.x; col < view.x + view.cols; col += 1) {
        const entity = visibleEntityAt(this.state, col, row);
        const token = entity ? entityToken(entity, this.renderMode) : null;
        output += token ?? tileToken(this.state.tilemap.data[row * this.state.tilemap.cols + col] ?? 0, this.renderMode);
      }
      output += '\n';
    }

    if (this.state.won) output += '\n🎉 SUCCESS! Press N for next level or R to replay.\n';
    if (this.state.player.dead) output += '\nTRY AGAIN. Press R to restart.\n';
    process.stdout.write(output);
  }

  private stop() {
    if (this.tickTimer !== null) clearTimeout(this.tickTimer);
    process.stdout.write(`${RESET}${SHOW_CURSOR}${process.stdout.isTTY ? EXIT_ALT_SCREEN : '\n'}`);
    if (process.stdin.isTTY) process.stdin.setRawMode?.(false);
    process.stdin.pause();
    process.exit(0);
  }
}

if (process.argv.includes('--help') || process.argv.includes('-h')) {
  usage();
  process.exit(0);
}

const game = new TuiGame(parseMapName(), parseRenderMode());
game.start().catch((error: unknown) => {
  process.stdout.write(`${RESET}${SHOW_CURSOR}${process.stdout.isTTY ? EXIT_ALT_SCREEN : '\n'}`);
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
