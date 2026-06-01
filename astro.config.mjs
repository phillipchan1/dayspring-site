// @ts-check
import { defineConfig } from 'astro/config';

// First Light — Dayspring marketing site.
// Static-first, island-light. No UI framework; scoped CSS mirrors the prototype.
export default defineConfig({
  site: 'https://dayspring.app',
  output: 'static',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
