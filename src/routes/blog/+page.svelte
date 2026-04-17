<script>
  import PostCard from '$lib/components/blog/PostCard.svelte';
  export let data;

  $: jsonLdBlog = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': 'https://eimafisioterapia.es/blog#blog',
    name: 'Blog EIMA Fisioterapia',
    description:
      'Artículos sobre ejercicio terapéutico, fisioterapia oncológica, dolor crónico y hábitos saludables.',
    url: 'https://eimafisioterapia.es/blog',
    inLanguage: 'es-ES',
    publisher: { '@id': 'https://eimafisioterapia.es/#organization' },
    blogPost: data.posts.map((/** @type {any} */ p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      description: p.description,
      datePublished: p.date,
      dateModified: p.updated ?? p.date,
      url: `https://eimafisioterapia.es/blog/${p.slug}`
    }))
  };

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://eimafisioterapia.es/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://eimafisioterapia.es/blog' }
    ]
  };

  $: ldBlogHtml = `<script type="application/ld+json">${JSON.stringify(jsonLdBlog)}<\/script>`;
  const ldBreadcrumbHtml = `<script type="application/ld+json">${JSON.stringify(jsonLdBreadcrumb)}<\/script>`;
</script>

<svelte:head>
  <title>Blog | EIMA Fisioterapia</title>
  <meta
    name="description"
    content="Artículos sobre ejercicio terapéutico, fisioterapia oncológica, dolor crónico y hábitos saludables. Escritos por fisioterapeutas con experiencia hospitalaria."
  />

  <link rel="canonical" href="https://eimafisioterapia.es/blog" />
  <link rel="alternate" hreflang="es-ES" href="https://eimafisioterapia.es/blog" />
  <link
    rel="alternate"
    type="application/rss+xml"
    title="EIMA Blog RSS"
    href="https://eimafisioterapia.es/blog.xml"
  />

  <meta property="og:title" content="Blog | EIMA Fisioterapia" />
  <meta
    property="og:description"
    content="Artículos sobre ejercicio terapéutico, fisioterapia oncológica y dolor crónico."
  />
  <meta property="og:url" content="https://eimafisioterapia.es/blog" />
  <meta property="og:image" content="https://eimafisioterapia.es/og-image.png" />

  {@html ldBlogHtml}
  {@html ldBreadcrumbHtml}
</svelte:head>

<section class="max-w-5xl mx-auto px-6 md:px-8 pt-16 pb-16">
  <nav aria-label="Migas de pan" class="text-sm text-secondary mb-6">
    <a href="/" class="hover:text-brand">Inicio</a>
    <span aria-hidden="true" class="mx-2">/</span>
    <span>Blog</span>
  </nav>

  <header class="mb-12 max-w-3xl">
    <h1 class="text-4xl md:text-5xl font-semibold text-primary mb-4">
      Blog de fisioterapia y ejercicio
    </h1>
    <p class="text-lg text-secondary">
      Artículos sobre ejercicio terapéutico, fisioterapia oncológica, dolor crónico y hábitos que marcan la diferencia. Escritos desde la experiencia directa con pacientes.
    </p>
  </header>

  {#if data.posts.length === 0}
    <p class="text-secondary">Próximamente publicaremos nuestros primeros artículos.</p>
  {:else}
    <div class="grid gap-6 md:grid-cols-2">
      {#each data.posts as post (post.slug)}
        <PostCard {post} />
      {/each}
    </div>
  {/if}
</section>
