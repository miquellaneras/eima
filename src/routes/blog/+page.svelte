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
    blogPost: data.posts.map((p) => ({
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
    content="Artículos sobre ejercicio terapéutico, fisioterapia oncológica, dolor crónico y hábitos saludables."
  />
  <link rel="canonical" href="https://eimafisioterapia.es/blog" />
  <link rel="alternate" type="application/rss+xml" title="EIMA Blog RSS" href="https://eimafisioterapia.es/blog.xml" />
  <meta property="og:title" content="Blog | EIMA Fisioterapia" />
  <meta property="og:url" content="https://eimafisioterapia.es/blog" />
  <meta property="og:image" content="https://eimafisioterapia.es/og-image.png" />
  {@html ldBlogHtml}
  {@html ldBreadcrumbHtml}
</svelte:head>

<section class="relative overflow-hidden" style="min-height: 45vh;">
  <div class="absolute inset-0 bg-center bg-cover" style="background-image: url('/hero.jpg');" aria-hidden="true"></div>
  <div class="absolute inset-0" style="background: linear-gradient(90deg, rgba(35,63,78,0.85) 0%, rgba(35,63,78,0.5) 100%);" aria-hidden="true"></div>

  <div class="relative z-10 mx-auto max-w-6xl px-6 md:px-10 pt-24 md:pt-32 pb-16">
    <nav aria-label="Migas de pan" class="text-sm font-light text-white/70 mb-6">
      <a href="/" class="hover:text-white">Inicio</a>
      <span aria-hidden="true" class="mx-2">/</span>
      <span>Blog</span>
    </nav>
    <h1 class="text-4xl md:text-6xl leading-tight text-white max-w-3xl">
      <span class="block font-light">Artículos sobre</span>
      <span class="block font-bold">ejercicio y salud.</span>
    </h1>
    <p class="mt-5 text-white/80 font-light max-w-xl text-[15px]">
      Guías prácticas sobre ejercicio terapéutico, fisioterapia oncológica, dolor crónico y hábitos que marcan la diferencia.
    </p>
  </div>
</section>

<section class="py-20 md:py-28">
  <div class="mx-auto max-w-5xl px-6 md:px-10">
    {#if data.posts.length === 0}
      <p class="text-center opacity-70">Próximamente publicaremos nuestros primeros artículos.</p>
    {:else}
      <div class="grid gap-6 md:grid-cols-2">
        {#each data.posts as post (post.slug)}
          <PostCard {post} />
        {/each}
      </div>
    {/if}
  </div>
</section>
