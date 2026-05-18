import { installFonts } from './game/fonts';
import { BrowserGameRuntime } from './game/runtime';
import { FIRST_LEVEL } from './game/levelProgression';
import { currentRoutePath } from './game/paths';
import { trackFrontendError } from './game/analytics';

const params = new URLSearchParams(window.location.search);
const hasLevelQuery = params.has('map') || params.has('community');
const mapName = params.get('map') || FIRST_LEVEL;
const communityId = params.get('community') || undefined;

const app = document.querySelector<HTMLDivElement>('#app');
if (!app) throw new Error('App container missing');
const container = app;
installFonts();

async function main() {
  const routePath = currentRoutePath();
  if (routePath === '/editor' || routePath.startsWith('/editor/')) {
    const { mountEditor } = await import('./editor/app');
    await mountEditor(container);
    return;
  }

  container.className = 'game-app';
  const runtime = new BrowserGameRuntime({
    container,
    initialMap: mapName,
    initialCommunityId: communityId,
    restoreSavedGame: !hasLevelQuery,
  });
  await runtime.start();
}

main().catch((err) => {
  trackFrontendError(err);
  if (app) app.textContent = err instanceof Error ? err.message : String(err);
});
