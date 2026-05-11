import type { GameState } from './types';

function entitiesAt(state: GameState, x: number, y: number) {
  const gridX = Math.round(x / state.tileSize);
  const gridY = Math.round(y / state.tileSize);
  return state.entities.filter((e) => !e.dead
    && Math.round(e.pos.x / state.tileSize) === gridX
    && Math.round(e.pos.y / state.tileSize) === gridY);
}

export class ButtonSystem {
  private lastButtonState = new Map<number, boolean>();

  constructor(private state: GameState) {}

  update() {
    this.checkConveyorButtons();
    this.checkStoneButtons();
  }

  private checkConveyorButtons() {
    const { player, entities } = this.state;
    for (const btn of entities) {
      if (btn.dead || btn.kind !== 'conveyorButton') continue;
      const isOn = entitiesAt(this.state, player.pos.x, player.pos.y).includes(btn);
      const wasOn = this.lastButtonState.get(btn.id) ?? false;

      if (isOn && !wasOn && Boolean(btn.data.open)) {
        btn.data.open = false;
        for (const b of entities) {
          if (b.kind === 'conveyorButton' && b.id !== btn.id) b.data.open = !Boolean(b.data.open);
        }

        for (const belt of entities) {
          if (belt.kind === 'conveyorX') {
            belt.data.direction1 = Number(belt.data.direction1 ?? 0) === 0 ? 1 : 0;
            belt.data.isLeft = Number(belt.data.direction1) === 0;
          }
          if (belt.kind === 'conveyorY') {
            belt.data.direction1 = Number(belt.data.direction1 ?? 0) === 0 ? 1 : 0;
            belt.data.isUp = Number(belt.data.direction1) === 0;
          }
        }
        this.state.events.push('Conveyor button toggled');
      }
      this.lastButtonState.set(btn.id, isOn);
    }
  }

  private checkStoneButtons() {
    const { player, entities } = this.state;
    for (const btn of entities) {
      if (btn.dead || btn.kind !== 'stoneButton') continue;
      const isOn = entitiesAt(this.state, player.pos.x, player.pos.y).includes(btn);
      const wasOn = this.lastButtonState.get(btn.id) ?? false;

      if (isOn && !wasOn && Boolean(btn.data.open)) {
        btn.data.open = false;
        for (const b of entities) {
          if (b.kind === 'stoneButton' && b.id !== btn.id) b.data.open = !Boolean(b.data.open);
        }

        for (const stone of entities) {
          if (stone.kind === 'stone') {
            let sign = Number(stone.data.sign ?? 1);
            sign += 1;
            if (sign === 3) sign = 1;
            stone.data.sign = sign;
          }
          // increment stoneAngle.sign by 1, wrap at 5
          if (stone.kind === 'stoneAngle') {
            let sign = Number(stone.data.sign ?? 1);
            sign = sign + 1;
            if (sign === 5) sign = 1;
            stone.data.sign = sign;
          }
        }
        this.state.events.push('Stone button toggled');
      }
      this.lastButtonState.set(btn.id, isOn);
    }
  }
}
