<script>
  import PostCard from '$lib/components/blog/PostCard.svelte';
  export let data;

  $: jsonLdBlog = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': 'https://eimafisioterapia.es/blog#blog',
    name: 'Blog EIMA Fisioterapia',
    description:
      'Fisioterapia oncológica y ejercicio terapéutico para personas con cáncer: fuerza, fatiga, dolor, movilidad y salud durante y después del tratamiento.',
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
  <title>Blog | Cáncer, ejercicio y fisioterapia oncológica</title>
  <meta
    name="description"
    content="Artículos sobre ejercicio durante y después del cáncer, fisioterapia oncológica, fatiga, dolor y hábitos para recuperar fuerza y salud."
  />
  <link rel="canonical" href="https://eimafisioterapia.es/blog" />
  <link rel="alternate" type="application/rss+xml" title="EIMA Blog RSS" href="https://eimafisioterapia.es/blog.xml" />
  <meta property="og:title" content="Blog | Cáncer, ejercicio y fisioterapia oncológica" />
  <meta
    property="og:description"
    content="Guías de EIMA sobre fisioterapia oncológica, ejercicio terapéutico, fatiga, dolor y salud para personas con cáncer en Mallorca."
  />
  <meta property="og:url" content="https://eimafisioterapia.es/blog" />
  <meta property="og:image" content="https://eimafisioterapia.es/og-image.png" />
  <meta property="og:image:alt" content="EIMA Fisioterapia — Blog sobre cáncer, ejercicio y salud" />
  <meta name="twitter:title" content="Blog | Cáncer, ejercicio y fisioterapia oncológica" />
  <meta
    name="twitter:description"
    content="Guías de EIMA sobre fisioterapia oncológica, ejercicio terapéutico, fatiga, dolor y salud para personas con cáncer en Mallorca."
  />
  <meta name="twitter:image" content="https://eimafisioterapia.es/og-image.png" />
  {@html ldBlogHtml}
  {@html ldBreadcrumbHtml}
</svelte:head>

<section class="relative overflow-hidden" style="min-height: 45vh;">
  <div
    class="absolute inset-0 bg-center bg-cover"
    style="background-image: url('/blog-hero-mallorca.png');"
    aria-hidden="true"
  ></div>
  <div class="absolute inset-0" style="background: linear-gradient(90deg, rgba(35,63,78,0.85) 0%, rgba(35,63,78,0.5) 100%);" aria-hidden="true"></div>

  <div class="relative z-10 mx-auto max-w-6xl px-6 md:px-10 pt-24 md:pt-32 pb-16">
    <nav aria-label="Migas de pan" class="text-sm font-light text-white/70 mb-6">
      <a href="/" class="hover:text-white">Inicio</a>
      <span aria-hidden="true" class="mx-2">/</span>
      <span>Blog</span>
    </nav>
    <h1 class="blog-hero-title max-w-[12ch] text-[42px] leading-[0.98] text-white md:max-w-none md:text-[60px]">
      <span class="block md:whitespace-nowrap">Artículos sobre</span>
      <span class="block text-[#8CD0D6] md:hidden">cáncer, ejercicio</span>
      <span class="block text-[#8CD0D6] md:hidden">y salud.</span>
      <span class="hidden text-[#8CD0D6] md:block md:whitespace-nowrap">cáncer, ejercicio y salud.</span>
    </h1>
    <p class="mt-5 text-white/80 font-light max-w-xl text-[15px]">
      Fisioterapia oncológica y ejercicio terapéutico para personas con cáncer: fuerza, fatiga, dolor, movilidad y salud durante y después del tratamiento.
    </p>
  </div>
</section>

<style>
  .blog-hero-title,
  .blog-hero-title * {
    font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
    font-weight: 500;
    letter-spacing: 0;
  }
</style>

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
