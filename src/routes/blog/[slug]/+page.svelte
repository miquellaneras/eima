<script>
  import { getPost, getRelated } from '$lib/blog/posts.js';
  import { getAuthor } from '$lib/blog/authors.js';
  import PostMeta from '$lib/components/blog/PostMeta.svelte';
  import AuthorBox from '$lib/components/blog/AuthorBox.svelte';
  import PostCard from '$lib/components/blog/PostCard.svelte';

  export let data;

  $: post = getPost(data.slug);
  $: author = getAuthor(data.author);
  $: related = getRelated(data.slug, 3);
  $: canonical = `https://eimafisioterapia.es/blog/${data.slug}`;
  $: ogImage = data.image?.startsWith('http')
    ? data.image
    : `https://eimafisioterapia.es${data.image}`;

  $: jsonLdPost = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${canonical}#article`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    headline: data.title,
    description: data.description,
    image: ogImage,
    datePublished: data.date,
    dateModified: data.updated ?? data.date,
    inLanguage: 'es-ES',
    articleSection: data.category,
    keywords: (data.tags ?? []).join(', '),
    author: {
      '@type': 'Person',
      name: author.name,
      jobTitle: author.jobTitle,
      url: author.url,
      sameAs: [author.sameAs],
      worksFor: { '@id': 'https://eimafisioterapia.es/#organization' }
    },
    publisher: { '@id': 'https://eimafisioterapia.es/#organization' },
    isPartOf: { '@id': 'https://eimafisioterapia.es/blog#blog' }
  };

  $: jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://eimafisioterapia.es/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://eimafisioterapia.es/blog' },
      { '@type': 'ListItem', position: 3, name: data.title, item: canonical }
    ]
  };

  $: hasFaq = Array.isArray(data.faq) && data.faq.length > 0;

  $: jsonLdFaq = hasFaq
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: data.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer }
        }))
      }
    : null;

  $: ldPostHtml = `<script type="application/ld+json">${JSON.stringify(jsonLdPost)}<\/script>`;
  $: ldBreadcrumbHtml = `<script type="application/ld+json">${JSON.stringify(jsonLdBreadcrumb)}<\/script>`;
  $: ldFaqHtml = jsonLdFaq
    ? `<script type="application/ld+json">${JSON.stringify(jsonLdFaq)}<\/script>`
    : '';
</script>

<svelte:head>
  <title>{data.title} | EIMA Fisioterapia</title>
  <meta name="description" content={data.description} />
  {#if data.keywords}
    <meta name="keywords" content={data.keywords} />
  {/if}
  <meta name="author" content={author.name} />
  <link rel="canonical" href={canonical} />
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.title} />
  <meta property="og:description" content={data.description} />
  <meta property="og:url" content={canonical} />
  <meta property="og:image" content={ogImage} />
  <meta property="article:published_time" content={data.date} />
  <meta property="article:modified_time" content={data.updated ?? data.date} />
  <meta property="article:author" content={author.name} />
  <meta property="article:section" content={data.category} />
  {#each data.tags ?? [] as tag}
    <meta property="article:tag" content={tag} />
  {/each}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={data.title} />
  <meta name="twitter:description" content={data.description} />
  <meta name="twitter:image" content={ogImage} />
  {@html ldPostHtml}
  {@html ldBreadcrumbHtml}
  {#if ldFaqHtml}{@html ldFaqHtml}{/if}
</svelte:head>

<section class="relative overflow-hidden" style="min-height: 40vh;">
  <div class="absolute inset-0 bg-center bg-cover" style="background-image: url('/hero.jpg');" aria-hidden="true"></div>
  <div class="absolute inset-0" style="background: linear-gradient(90deg, rgba(35,63,78,0.88) 0%, rgba(35,63,78,0.6) 100%);" aria-hidden="true"></div>

  <div class="relative z-10 mx-auto max-w-4xl px-6 md:px-10 pt-24 md:pt-32 pb-16">
    <nav aria-label="Migas de pan" class="text-sm font-light text-white/70 mb-6">
      <a href="/" class="hover:text-white">Inicio</a>
      <span aria-hidden="true" class="mx-2">/</span>
      <a href="/blog" class="hover:text-white">Blog</a>
    </nav>
    <h1 class="text-3xl md:text-5xl font-light text-white leading-tight">{data.title}</h1>
    <p class="mt-4 text-white/85 font-light text-[15px] max-w-2xl">{data.description}</p>
  </div>
</section>

<article class="py-16 md:py-20">
  <div class="mx-auto max-w-3xl px-6 md:px-10">
    <PostMeta
      date={data.date}
      updated={data.updated}
      authorName={author.name}
      readingMinutes={data.readingMinutes}
      category={data.category}
    />

    <div class="mt-10">
      {#if post?.Component}
        <svelte:component this={post.Component} />
      {/if}
    </div>

    <AuthorBox {author} />

    {#if hasFaq}
      <section class="mt-12 rounded-[10px] bg-white p-7 shadow-[0_1px_3px_rgba(14,29,38,0.06)]" aria-labelledby="faq-heading">
        <h2 id="faq-heading" class="text-xl font-medium mb-6">Preguntas frecuentes</h2>
        <dl class="space-y-5">
          {#each data.faq as item}
            <div>
              <dt class="font-medium mb-2">{item.question}</dt>
              <dd class="text-sm font-light opacity-85 leading-relaxed">{item.answer}</dd>
            </div>
          {/each}
        </dl>
      </section>
    {/if}

    <aside class="mt-12 rounded-[10px] bg-[color:var(--color-brand-accent)]/15 p-7 text-center">
      <h2 class="text-xl font-light mb-2">¿Quieres que te acompañemos en tu proceso?</h2>
      <p class="opacity-80 font-light text-sm mb-4">
        Reserva una primera toma de contacto gratuita y sin compromiso.
      </p>
      <a
        href="/contacto"
        class="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-brand-accent)] text-[color:var(--color-brand)] px-6 py-3 font-medium text-[15px] hover:scale-[1.03] transition-transform"
      >
        Contactar
        <span class="material-symbols-rounded !text-base">arrow_forward</span>
      </a>
    </aside>

    {#if related.length > 0}
      <section class="mt-16">
        <h2 class="text-2xl font-light mb-6">Artículos relacionados</h2>
        <div class="grid gap-6 md:grid-cols-2">
          {#each related as rp (rp.slug)}
            <PostCard post={rp} />
          {/each}
        </div>
      </section>
    {/if}
  </div>
</article>
