import { posts } from '$lib/blog/posts.js';

export const prerender = true;

const SITE = 'https://eimafisioterapia.es';

function toISODate(d) {
  if (!d) return new Date().toISOString().slice(0, 10);
  return new Date(d).toISOString().slice(0, 10);
}

export function GET() {
  const latestPost = posts[0]?.updated ?? posts[0]?.date;
  const lastmod = latestPost ? toISODate(latestPost) : '2026-04-17';

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${SITE}/sitemap.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
</sitemapindex>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
