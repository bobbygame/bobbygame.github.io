import type { Direction } from './movement';

const MAX_RADIUS = 42;
const DEAD_ZONE = 16;

function pointerDirection(dx: number, dy: number): Direction {
  if (Math.hypot(dx, dy) < DEAD_ZONE) return null;
  if (Math.abs(dx) > Math.abs(dy)) return dx < 0 ? 'left' : 'right';
  return dy < 0 ? 'up' : 'down';
}

export class VirtualJoystick {
  private readonly root: HTMLDivElement;
  private readonly knob: HTMLDivElement;
  private pointerId: number | null = null;
  private activeDirection: Direction = null;

  constructor() {
    this.root = document.createElement('div');
    this.root.className = 'touch-joystick';
    this.root.setAttribute('aria-label', 'Move Bobby');

    const ring = document.createElement('div');
    ring.className = 'touch-joystick__ring';

    this.knob = document.createElement('div');
    this.knob.className = 'touch-joystick__knob';

    this.root.append(ring, this.knob);
    document.body.appendChild(this.root);

    this.root.addEventListener('pointerdown', this.onPointerDown);
    window.addEventListener('pointermove', this.onPointerMove, { passive: false });
    window.addEventListener('pointerup', this.onPointerUp);
    window.addEventListener('pointercancel', this.onPointerUp);
  }

  direction(): Direction {
    return this.activeDirection;
  }

  private onPointerDown = (event: PointerEvent) => {
    if (this.pointerId !== null) return;
    this.pointerId = event.pointerId;
    this.root.setPointerCapture(event.pointerId);
    this.root.classList.add('touch-joystick--active');
    this.updatePointer(event);
    event.preventDefault();
  };

  private onPointerMove = (event: PointerEvent) => {
    if (event.pointerId !== this.pointerId) return;
    this.updatePointer(event);
    event.preventDefault();
  };

  private onPointerUp = (event: PointerEvent) => {
    if (event.pointerId !== this.pointerId) return;
    this.pointerId = null;
    this.activeDirection = null;
    this.root.classList.remove('touch-joystick--active');
    this.knob.style.transform = 'translate(-50%, -50%)';
  };

  private updatePointer(event: PointerEvent) {
    const rect = this.root.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = event.clientX - centerX;
    const dy = event.clientY - centerY;
    const distance = Math.hypot(dx, dy);
    const scale = distance > MAX_RADIUS ? MAX_RADIUS / distance : 1;
    const knobX = dx * scale;
    const knobY = dy * scale;

    this.knob.style.transform = `translate(calc(-50% + ${knobX}px), calc(-50% + ${knobY}px))`;
    this.activeDirection = pointerDirection(dx, dy);
  }
}
