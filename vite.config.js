import { defineConfig } from 'vite';
import sassGlobImports from 'vite-plugin-sass-glob-import';

export default defineConfig({
  base: '',
  root: './src',
  publicDir: './../public',
  build: {
    outDir: './../docs',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: '/index.html',
      },
    },
  },

  plugins: [sassGlobImports()],
});
