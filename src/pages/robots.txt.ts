import type { APIRoute } from 'astro';

/**
 * Generated rather than dropped in `public/` so the sitemap URL follows `site`
 * in astro.config.mjs. A hardcoded robots.txt would go stale the moment the
 * custom domain lands.
 */
export const GET: APIRoute = ({ site }) =>
  new Response(
    ['User-agent: *', 'Allow: /', '', `Sitemap: ${new URL('sitemap-index.xml', site)}`, ''].join(
      '\n'
    ),
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
  );
