<script>
  import { getAuthor } from '$lib/blog/authors.js';
  export let post;

  $: author = getAuthor(post.author);
  $: titleParts =
    post.titleAccent && post.title?.includes(post.titleAccent)
      ? post.title.split(post.titleAccent)
      : null;

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
  class="group flex h-full flex-col rounded-[10px] border border-transparent bg-white p-7 shadow-[0_1px_3px_rgba(14,29,38,0.06)] transition-[border-color,box-shadow] duration-250 ease-out hover:border-[#8CD0D6] hover:shadow-[0_2px_10px_rgba(14,29,38,0.08)] md:p-6"
>
  <h2
    class="post-card-title text-xl font-normal leading-snug md:line-clamp-3 md:min-h-[5.15rem] md:text-[1.35rem]"
  >
    {#if titleParts}
      {titleParts[0]}<span>{post.titleAccent}</span>{titleParts.slice(1).join(post.titleAccent)}
    {:else}
      {post.title}
    {/if}
  </h2>
  <p class="mt-3 text-sm font-light leading-relaxed opacity-75 md:line-clamp-3 md:min-h-[4rem]">{post.description}</p>
  <div class="mt-7 flex flex-wrap items-center justify-start gap-x-3 gap-y-1 text-left text-xs font-light opacity-70">
    <span class="whitespace-nowrap">{author.name}</span>
    <span aria-hidden="true" class="opacity-70">&middot;</span>
    <time class="whitespace-nowrap" datetime={post.date}>{formatDate(post.date)}</time>
    {#if post.readingMinutes}
      <span aria-hidden="true" class="opacity-70">&middot;</span>
      <span class="whitespace-nowrap">{post.readingMinutes} min</span>
    {/if}
  </div>
</a>

<style>
  .post-card-title,
  .post-card-title * {
    color: #233f4e;
    font-family: 'Noto Serif', Georgia, 'Times New Roman', serif;
    letter-spacing: 0;
  }

  .post-card-title span {
    font-weight: 700;
  }
</style>
