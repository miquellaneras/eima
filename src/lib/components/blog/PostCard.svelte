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
  class="group flex flex-col rounded-[10px] bg-white p-7 shadow-[0_1px_3px_rgba(14,29,38,0.06)] hover:shadow-[0_2px_10px_rgba(14,29,38,0.08)] transition-shadow"
>
  {#if post.category}
    <span
      class="self-start inline-flex items-center rounded-full bg-[color:var(--color-brand-accent)]/30 text-[color:var(--color-brand)] px-3 py-1 text-xs font-medium mb-4 tracking-wide uppercase"
    >
      {post.category}
    </span>
  {/if}
  <h2
    class="text-xl md:text-2xl font-light text-[color:var(--color-brand)] group-hover:text-[color:var(--color-brand-soft)] transition-colors leading-snug"
  >
    {post.title}
  </h2>
  <p class="mt-3 text-sm font-light leading-relaxed opacity-75 line-clamp-3">{post.description}</p>
  <div class="mt-5 flex items-center gap-3 text-xs font-light opacity-70">
    <span>{author.name}</span>
    <span aria-hidden="true">·</span>
    <time datetime={post.date}>{formatDate(post.date)}</time>
    {#if post.readingMinutes}
      <span aria-hidden="true">·</span>
      <span>{post.readingMinutes} min</span>
    {/if}
  </div>
</a>
