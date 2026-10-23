import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [sitemap()],
  // The custom domain, which is the canonical address now — Pages 301s the old
  // oddlybuilt.github.io URLs here. This has to match the domain in public/CNAME
  // and the one set under Settings -> Pages, because canonical tags, og: tags and
  // the sitemap are all built from it: leave it on the github.io address and the
  // site advertises a URL that redirects, splitting it across two addresses.
  //
  // Still hardcoded rather than read from an env var, because Pages exposes no
  // deploy URL at build time. The repo name means Pages serves from the root
  // either way, so no `base` is needed.
  site: 'https://oddlybuilt.net',
});
