<script>
  import { getAuthor } from '$lib/blog/authors.js';
  export let post;

  $: author = getAuthor(post.author);

  function formatDate(d) {
    if (!d) return '';
    return new Date(d).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }
</script>

<a
  href={`/blog/${post.slug}`}
  class="group flex flex-col rounded-2xl border border-default bg-primary p-6 hover:border-brand transition-colors duration-200"
>
  {#if post.category}
    <span
      class="self-start inline-flex items-center rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-medium mb-3"
    >
      {post.category}
    </span>
  {/if}
  <h2
    class="text-xl font-semibold text-primary group-hover:text-brand transition-colors duration-200"
  >
    {post.title}
  </h2>
  <p class="mt-2 text-secondary text-sm line-clamp-3">{post.description}</p>
  <div class="mt-4 flex items-center gap-3 text-xs text-secondary">
    <span>{author.name}</span>
    <span aria-hidden="true">·</span>
    <time datetime={post.date}>{formatDate(post.date)}</time>
    {#if post.readingMinutes}
      <span aria-hidden="true">·</span>
      <span>{post.readingMinutes} min</span>
    {/if}
  </div>
</a>
