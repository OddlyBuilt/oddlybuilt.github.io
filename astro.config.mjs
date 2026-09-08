import { defineConfig } from 'astro/config';

export default defineConfig({
  // The repo is named oddlybuilt.github.io, so Pages serves it from the root and
  // no `base` is needed. Hardcoded rather than read from an env var because Pages
  // exposes no deploy URL at build time — this is the only address the site has.
  site: 'https://oddlybuilt.github.io',
});
