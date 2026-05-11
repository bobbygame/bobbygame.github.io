import { ButtonSystem } from './buttons';
import { armTrapIfLeft, handleArrival } from './interactions';
import { MovementSystem } from './movement';
import type { GameAction } from './actions';
import type { GameState } from './types';

export type SimulationStatus = 'playing' | 'won' | 'dead';

export interface SimulationStep {
  status: SimulationStatus;
  events: string[];
}

export class GameSimulation {
  private readonly movement: MovementSystem;
  private readonly buttons: ButtonSystem;

  constructor(public readonly state: GameState) {
    this.movement = new MovementSystem(state);
    this.buttons = new ButtonSystem(state);
  }

  isMoving() {
    return this.movement.isMoving();
  }

  status(): SimulationStatus {
    if (this.state.player.dead) return 'dead';
    if (this.state.won) return 'won';
    return 'playing';
  }

  dispatch(action: GameAction) {
    if (action.type !== 'move' || this.status() !== 'playing') return;
    this.movement.setIntent(action.direction);
  }

  update(dt: number): SimulationStep {
    const firstEvent = this.state.events.length;

    if (this.status() === 'playing') {
      this.movement.update(dt);
      this.buttons.update();
      if (!this.movement.isMoving()) {
        armTrapIfLeft(this.state);
        handleArrival(this.state);
      }
    }

    return {
      status: this.status(),
      events: this.state.events.slice(firstEvent),
    };
  }
}
