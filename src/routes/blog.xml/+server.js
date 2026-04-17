import { posts } from '$lib/blog/posts.js';
import { getAuthor } from '$lib/blog/authors.js';

export const prerender = true;

const SITE = 'https://eimafisioterapia.es';

function escapeXml(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function GET() {
  const items = posts
    .slice(0, 20)
    .map((p) => {
      const author = getAuthor(p.author);
      const url = `${SITE}/blog/${p.slug}`;
      return `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description>${escapeXml(p.description)}</description>
      <author>info@eimafisioterapia.es (${escapeXml(author.name)})</author>
      <category>${escapeXml(p.category)}</category>
    </item>`;
    })
    .join('\n');

  const lastBuild = posts[0]?.date
    ? new Date(posts[0].date).toUTCString()
    : new Date().toUTCString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Blog EIMA Fisioterapia</title>
    <link>${SITE}/blog</link>
    <atom:link href="${SITE}/blog.xml" rel="self" type="application/rss+xml" />
    <description>Artículos sobre ejercicio terapéutico, fisioterapia oncológica y dolor crónico.</description>
    <language>es-ES</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
