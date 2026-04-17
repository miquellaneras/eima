const modules = import.meta.glob('/src/content/blog/*.md', { eager: true });

function toSlug(path) {
  return path.split('/').pop().replace(/\.md$/, '');
}

export const posts = Object.entries(modules)
  .map(([path, mod]) => {
    const metadata = mod.metadata ?? {};
    return {
      slug: toSlug(path),
      title: metadata.title ?? 'Sin título',
      description: metadata.description ?? '',
      date: metadata.date ?? null,
      updated: metadata.updated ?? metadata.date ?? null,
      author: metadata.author ?? 'jaume',
      category: metadata.category ?? 'General',
      tags: metadata.tags ?? [],
      image: metadata.image ?? '/og-image.png',
      imageAlt: metadata.imageAlt ?? metadata.title ?? 'EIMA Fisioterapia',
      keywords: metadata.keywords ?? '',
      readingMinutes: metadata.readingMinutes ?? null,
      faq: metadata.faq ?? [],
      Component: mod.default
    };
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}

export function getRelated(slug, limit = 3) {
  const current = getPost(slug);
  if (!current) return [];
  const currentTags = new Set(current.tags);
  return posts
    .filter((p) => p.slug !== slug)
    .map((p) => ({
      post: p,
      score: p.tags.filter((t) => currentTags.has(t)).length
    }))
    .sort((a, b) => b.score - a.score || new Date(b.post.date) - new Date(a.post.date))
    .slice(0, limit)
    .map(({ post }) => post);
}
