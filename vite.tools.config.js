import { defineConfig } from 'vite';

export default defineConfig({
  publicDir: false,
  build: {
    outDir: 'dist-tools',
    emptyOutDir: true,
    target: 'node20',
    minify: false,
    lib: {
      entry: 'src/tools/validate-levels.ts',
      formats: ['es'],
      fileName: () => 'validate-levels.js',
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
  },
});
