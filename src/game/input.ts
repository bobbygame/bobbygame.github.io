import { actionFromKeyboardKey, type GameAction } from './actions';

export class BrowserInputManager {
  private keydownHandler?: (event: KeyboardEvent) => void;

  constructor(private readonly dispatch: (action: GameAction) => void) {}

  bindKeyboard(target: Window = window) {
    this.unbindKeyboard(target);
    this.keydownHandler = (event) => {
      const action = actionFromKeyboardKey(event.key);
      if (action) {
        event.preventDefault();
        this.dispatch(action);
        return;
      }
      this.dispatch({ type: 'confirm' });
    };
    target.addEventListener('keydown', this.keydownHandler);
  }

  unbindKeyboard(target: Window = window) {
    if (!this.keydownHandler) return;
    target.removeEventListener('keydown', this.keydownHandler);
    this.keydownHandler = undefined;
  }
}
