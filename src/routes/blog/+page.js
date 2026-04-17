import { posts } from '$lib/blog/posts.js';

export const prerender = true;

export function load() {
  return {
    posts: posts.map((p) => ({
      slug: p.slug,
      title: p.title,
      description: p.description,
      date: p.date,
      updated: p.updated,
      author: p.author,
      category: p.category,
      tags: p.tags,
      image: p.image,
      imageAlt: p.imageAlt,
      readingMinutes: p.readingMinutes
    }))
  };
}
