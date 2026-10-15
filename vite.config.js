import { defineConfig } from 'vite';

/**
 * Vite используется как dev-сервер и сборщик статики в dist/.
 *
 * base: '/' — сайт отдаётся с корня домена (thegodproduct.ru).
 * Для GitHub Pages (страница проекта вида user.github.io/repo)
 * замените base на './' или '/<имя-репозитория>/'.
 */
export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
  },
});
