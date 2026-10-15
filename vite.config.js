import { defineConfig } from 'vite';

/**
 * Vite используется как dev-сервер и сборщик статики в dist/.
 *
 * base задаётся переменной окружения VITE_BASE:
 *   - по умолчанию '/'  → сайт отдаётся с корня домена (thegodproduct.ru / Beget);
 *   - для GitHub Pages (страница проекта) сборка идёт с VITE_BASE=/TheGodproduct/.
 *
 * Так одна и та же кодовая база собирается под оба варианта деплоя.
 */
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  build: {
    outDir: 'dist',
  },
});
