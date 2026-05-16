import type { Direction } from './movement';
import { subscribeLanguage, t } from './i18n';

type ButtonDirection = Exclude<Direction, null>;

const DIRECTIONS: Array<{ direction: ButtonDirection; labelKey: string }> = [
  { direction: 'up', labelKey: 'game.touch.up' },
  { direction: 'left', labelKey: 'game.touch.left' },
  { direction: 'right', labelKey: 'game.touch.right' },
  { direction: 'down', labelKey: 'game.touch.down' },
];

export class VirtualJoystick {
  private readonly root: HTMLDivElement;
  private pointerId: number | null = null;
  private activeDirection: Direction = null;
  private activeButton: HTMLButtonElement | null = null;
  private readonly unsubscribeLanguage: () => void;

  constructor() {
    this.root = document.createElement('div');
    this.root.className = 'touch-dpad';
    this.root.setAttribute('aria-label', t('game.touch.root'));

    for (const { direction, labelKey } of DIRECTIONS) {
      const button = document.createElement('button');
      button.className = `touch-dpad__button touch-dpad__button--${direction}`;
      button.type = 'button';
      button.dataset.direction = direction;
      button.setAttribute('aria-label', t(labelKey));
      this.root.append(button);
    }
    document.body.appendChild(this.root);

    this.root.addEventListener('pointerdown', this.onPointerDown);
    window.addEventListener('pointerup', this.onPointerUp);
    window.addEventListener('pointercancel', this.onPointerUp);
    this.unsubscribeLanguage = subscribeLanguage(() => this.updateLanguage());
  }

  direction(): Direction {
    return this.activeDirection;
  }

  private onPointerDown = (event: PointerEvent) => {
    if (this.pointerId !== null) return;
    const button = event.target instanceof HTMLElement
      ? event.target.closest<HTMLButtonElement>('.touch-dpad__button')
      : null;
    const direction = button?.dataset.direction as ButtonDirection | undefined;
    if (!button || !direction) return;

    this.pointerId = event.pointerId;
    this.activeButton = button;
    this.activeDirection = direction;
    button.setPointerCapture(event.pointerId);
    button.classList.add('touch-dpad__button--active');
    event.preventDefault();
  };

  private onPointerUp = (event: PointerEvent) => {
    if (event.pointerId !== this.pointerId) return;
    this.activeButton?.classList.remove('touch-dpad__button--active');
    this.pointerId = null;
    this.activeDirection = null;
    this.activeButton = null;
  };

  destroy() {
    this.unsubscribeLanguage();
    this.root.removeEventListener('pointerdown', this.onPointerDown);
    window.removeEventListener('pointerup', this.onPointerUp);
    window.removeEventListener('pointercancel', this.onPointerUp);
    this.root.remove();
  }

  private updateLanguage() {
    this.root.setAttribute('aria-label', t('game.touch.root'));
    for (const { direction, labelKey } of DIRECTIONS) {
      this.root
        .querySelector<HTMLButtonElement>(`.touch-dpad__button--${direction}`)
        ?.setAttribute('aria-label', t(labelKey));
    }
  }
}
