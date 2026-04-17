import { posts } from '$lib/blog/posts.js';

export const prerender = true;

const SITE = 'https://eimafisioterapia.es';

const staticRoutes = [
  { path: '/', lastmod: '2026-04-17', changefreq: 'weekly', priority: '1.0' },
  { path: '/cancer', lastmod: '2026-04-17', changefreq: 'monthly', priority: '0.9' },
  { path: '/que-haremos', lastmod: '2026-04-17', changefreq: 'monthly', priority: '0.9' },
  { path: '/quienes-somos', lastmod: '2026-04-17', changefreq: 'monthly', priority: '0.8' },
  {
    path: '/centro-salud-virtual',
    lastmod: '2026-04-17',
    changefreq: 'monthly',
    priority: '0.7'
  },
  { path: '/contacto', lastmod: '2026-04-17', changefreq: 'monthly', priority: '0.9' },
  { path: '/aviso-legal', lastmod: '2026-04-17', changefreq: 'yearly', priority: '0.3' },
  { path: '/politica-privacidad', lastmod: '2026-04-17', changefreq: 'yearly', priority: '0.3' },
  { path: '/politica-cookies', lastmod: '2026-04-17', changefreq: 'yearly', priority: '0.3' },
  { path: '/terminos', lastmod: '2026-04-17', changefreq: 'yearly', priority: '0.3' }
];

function toISODate(d) {
  if (!d) return new Date().toISOString().slice(0, 10);
  return new Date(d).toISOString().slice(0, 10);
}

export function GET() {
  const latestPost = posts[0]?.updated ?? posts[0]?.date;
  const blogIndexLastmod = latestPost ? toISODate(latestPost) : '2026-04-17';

  const urls = [
    ...staticRoutes.map(
      (r) => `  <url>
    <loc>${SITE}${r.path}</loc>
    <lastmod>${r.lastmod}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
    ),
    `  <url>
    <loc>${SITE}/blog</loc>
    <lastmod>${blogIndexLastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`,
    ...posts.map(
      (p) => `  <url>
    <loc>${SITE}/blog/${p.slug}</loc>
    <lastmod>${toISODate(p.updated ?? p.date)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
    )
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
