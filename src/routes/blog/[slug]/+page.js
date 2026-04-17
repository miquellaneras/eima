import { error } from '@sveltejs/kit';
import { posts, getPost } from '$lib/blog/posts.js';

export const prerender = true;

export function entries() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function load({ params }) {
  const post = getPost(params.slug);
  if (!post) throw error(404, 'Artículo no encontrado');
  return {
    slug: post.slug,
    title: post.title,
    description: post.description,
    date: post.date,
    updated: post.updated,
    author: post.author,
    category: post.category,
    tags: post.tags,
    image: post.image,
    imageAlt: post.imageAlt,
    keywords: post.keywords,
    readingMinutes: post.readingMinutes,
    faq: post.faq ?? []
  };
}
