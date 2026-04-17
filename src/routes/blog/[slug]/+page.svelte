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
  <link rel="alternate" hreflang="es-ES" href={canonical} />

  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.title} />
  <meta property="og:description" content={data.description} />
  <meta property="og:url" content={canonical} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:image:alt" content={data.imageAlt} />
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

<article class="max-w-3xl mx-auto px-6 md:px-8 pt-16 pb-16">
  <nav aria-label="Migas de pan" class="text-sm text-secondary mb-6">
    <a href="/" class="hover:text-brand">Inicio</a>
    <span aria-hidden="true" class="mx-2">/</span>
    <a href="/blog" class="hover:text-brand">Blog</a>
    <span aria-hidden="true" class="mx-2">/</span>
    <span class="text-primary">{data.title}</span>
  </nav>

  <header class="mb-8">
    <h1 class="text-4xl md:text-5xl font-semibold text-primary mb-4 leading-tight">
      {data.title}
    </h1>
    <p class="text-lg text-secondary mb-6">{data.description}</p>
    <PostMeta
      date={data.date}
      updated={data.updated}
      authorName={author.name}
      readingMinutes={data.readingMinutes}
      category={data.category}
    />
  </header>

  {#if post?.Component}
    <svelte:component this={post.Component} />
  {/if}

  <AuthorBox {author} />

  {#if hasFaq}
    <section
      class="mt-10 rounded-2xl border border-default p-6"
      aria-labelledby="faq-heading"
    >
      <h2 id="faq-heading" class="text-2xl font-semibold text-primary mb-6">
        Preguntas frecuentes
      </h2>
      <dl class="space-y-5">
        {#each data.faq as item}
          <div>
            <dt class="text-base md:text-lg font-semibold text-primary mb-2">{item.question}</dt>
            <dd class="text-secondary leading-relaxed">{item.answer}</dd>
          </div>
        {/each}
      </dl>
    </section>
  {/if}

  <aside class="mt-10 rounded-2xl bg-brand/5 border border-brand/20 p-6 text-center">
    <h2 class="text-xl font-semibold text-primary mb-2">
      ¿Quieres que te acompañemos en tu proceso?
    </h2>
    <p class="text-secondary mb-4">
      Reserva una primera toma de contacto gratuita y sin compromiso.
    </p>
    <a
      href="/contacto"
      class="inline-flex items-center gap-2 rounded-lg bg-brand text-inverse px-5 py-3 hover:scale-105 transition-transform duration-200"
    >
      Contactar
      <span class="material-symbols-rounded !text-base">arrow_forward</span>
    </a>
  </aside>

  {#if related.length > 0}
    <section class="mt-16">
      <h2 class="text-2xl font-semibold text-primary mb-6">Artículos relacionados</h2>
      <div class="grid gap-6 md:grid-cols-2">
        {#each related as rp (rp.slug)}
          <PostCard post={rp} />
        {/each}
      </div>
    </section>
  {/if}
</article>
