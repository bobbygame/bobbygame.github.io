import { defineConfig } from 'vite';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  root: '.',
  base: isGitHubPages ? '/bobbygame/' : '/',
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
