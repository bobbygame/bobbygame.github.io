import { installFonts } from './game/fonts';
import { BrowserGameRuntime } from './game/runtime';
import { FIRST_LEVEL } from './game/levelProgression';

const params = new URLSearchParams(window.location.search);
const mapName = params.get('map') ?? FIRST_LEVEL;
const communityId = params.get('community') ?? undefined;

const app = document.querySelector<HTMLDivElement>('#app');
if (!app) throw new Error('App container missing');
const container = app;
installFonts();

async function main() {
  if (window.location.pathname.startsWith('/editor')) {
    const { mountEditor } = await import('./editor/app');
    await mountEditor(container);
    return;
  }

  const runtime = new BrowserGameRuntime({
    container,
    initialMap: mapName,
    initialCommunityId: communityId,
  });
  await runtime.start();
}

main().catch((err) => {
  if (app) app.textContent = err instanceof Error ? err.message : String(err);
});
