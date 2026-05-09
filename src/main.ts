import { loadGame } from './game/loader';
import { MovementSystem } from './game/movement';
import { handleArrival, armTrapIfLeft } from './game/interactions';
import { ButtonSystem } from './game/buttons';
import { Renderer } from './game/render';
import { audio } from './game/audio';
import { loadAssetManifest } from './game/assets';
import { SpriteLoader } from './game/sprites';

const params = new URLSearchParams(window.location.search);
const mapName = params.get('map') ?? 'map1';

function getNextMap(current: string): string | null {
  const match = current.match(/^map(\d+)$/);
  if (!match) return null;
  const num = parseInt(match[1]);
  if (num >= 30) return 'end';
  return `map${num + 1}`;
}

const app = document.querySelector<HTMLDivElement>('#app');
if (!app) throw new Error('App container missing');
const container = app;

async function main() {
  const manifest = await loadAssetManifest();
  const sprites = new SpriteLoader(manifest);
  await sprites.preloadAll();
  const state = await loadGame(mapName);
  const move = new MovementSystem(state);
  const buttons = new ButtonSystem(state);
  const renderer = new Renderer(state, container, sprites);

  // Start background music (may be blocked by autoplay policy)
  audio.playBgMusic();

  let deathTimer = 0;
  let winTimer = 0;

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Alt') {
      e.preventDefault();
      window.location.reload();
      return;
    }

    if (state.won) {
      const next = getNextMap(mapName);
      if (next) {
        window.location.href = `?map=${next}`;
      } else {
        window.location.href = '?map=map1';
      }
      return;
    }
    if (state.player.dead) return;
    
    if (e.key === 'ArrowLeft' || e.key === 'a') move.setIntent('left');
    if (e.key === 'ArrowRight' || e.key === 'd') move.setIntent('right');
    if (e.key === 'ArrowUp' || e.key === 'w') move.setIntent('up');
    if (e.key === 'ArrowDown' || e.key === 's') move.setIntent('down');
  });

  let last = performance.now();
  function tick(now: number) {
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    if (state.player.dead) {
      deathTimer += dt;
      if (deathTimer > 2) {
        window.location.reload(); // Restart level
      }
    } else if (state.won) {
      winTimer += dt;
      // Show win screen, wait for key press
    } else {
      move.update(dt);
      buttons.update();
      // Only trigger tile interactions when the player has fully arrived on a cell.
      if (!move.isMoving()) {
        armTrapIfLeft(state);
        handleArrival(state);
      }
    }
    
    renderer.draw();
    requestAnimationFrame(tick);
  }
  renderer.draw();
  requestAnimationFrame(tick);
}

main().catch((err) => {
  if (app) app.textContent = err instanceof Error ? err.message : String(err);
});
