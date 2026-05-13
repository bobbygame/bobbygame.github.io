import { defineConfig } from 'vite';
import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

function githubPagesRoutes() {
  return {
    name: 'github-pages-routes',
    closeBundle() {
      const indexPath = resolve('dist/index.html');
      if (!existsSync(indexPath)) return;

      copyFileSync(indexPath, resolve('dist/404.html'));

      const editorPath = resolve('dist/editor/index.html');
      mkdirSync(dirname(editorPath), { recursive: true });
      copyFileSync(indexPath, editorPath);
    },
  };
}

export default defineConfig({
  root: '.',
  base: '/',
  plugins: isGitHubPages ? [githubPagesRoutes()] : [],
  publicDir: 'public',
  server: {
    host: true,
    port: 5173,
  },
  preview: {
    host: true,
    port: 4173,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
