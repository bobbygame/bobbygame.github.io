import { defineConfig } from 'vite';

export default defineConfig({
  publicDir: false,
  build: {
    outDir: 'dist-tui',
    emptyOutDir: true,
    target: 'node20',
    minify: false,
    lib: {
      entry: 'src/tui/cli.ts',
      formats: ['es'],
      fileName: () => 'cli.js',
    },
    rollupOptions: {
      output: {
        banner: '#!/usr/bin/env node',
        inlineDynamicImports: true,
      },
    },
  },
});
