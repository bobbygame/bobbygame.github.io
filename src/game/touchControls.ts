import type { Direction } from './movement';

type ButtonDirection = Exclude<Direction, null>;

const DIRECTIONS: Array<{ direction: ButtonDirection; label: string }> = [
  { direction: 'up', label: 'Move up' },
  { direction: 'left', label: 'Move left' },
  { direction: 'right', label: 'Move right' },
  { direction: 'down', label: 'Move down' },
];

export class VirtualJoystick {
  private readonly root: HTMLDivElement;
  private pointerId: number | null = null;
  private activeDirection: Direction = null;
  private activeButton: HTMLButtonElement | null = null;

  constructor() {
    this.root = document.createElement('div');
    this.root.className = 'touch-dpad';
    this.root.setAttribute('aria-label', 'Move Bobby');

    for (const { direction, label } of DIRECTIONS) {
      const button = document.createElement('button');
      button.className = `touch-dpad__button touch-dpad__button--${direction}`;
      button.type = 'button';
      button.dataset.direction = direction;
      button.setAttribute('aria-label', label);
      this.root.append(button);
    }
    document.body.appendChild(this.root);

    this.root.addEventListener('pointerdown', this.onPointerDown);
    window.addEventListener('pointerup', this.onPointerUp);
    window.addEventListener('pointercancel', this.onPointerUp);
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
}
