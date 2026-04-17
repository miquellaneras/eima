<script>
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>Página no encontrada - EIMA Fisioterapia</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<section class="max-w-7xl mx-auto px-8 md:px-16 py-24 md:py-32 text-center">
  <p class="text-6xl md:text-8xl font-bold text-brand">{$page.status}</p>
  <h1 class="text-3xl md:text-4xl font-semibold mt-6">
    {$page.status === 404 ? 'Página no encontrada' : 'Ha ocurrido un error'}
  </h1>
  <p class="text-lg text-secondary mt-4 max-w-lg mx-auto">
    {$page.status === 404
      ? 'La página que buscas no existe o ha sido movida.'
      : 'Algo ha salido mal. Inténtalo de nuevo o vuelve al inicio.'}
  </p>

  <div class="flex flex-col sm:flex-row gap-4 justify-center mt-10">
    <a
      href="/"
      class="inline-flex items-center justify-center gap-2 rounded-lg bg-brand text-inverse px-6 py-3
        hover:scale-102 transition-transform duration-200 font-medium"
    >
      <span class="material-symbols-rounded">home</span>
      <span>Volver al inicio</span>
    </a>
    <a
      href="/contacto"
      class="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-brand text-brand px-6 py-3
        hover:bg-brand hover:text-inverse transition-all duration-200 font-medium"
    >
      <span class="material-symbols-rounded">mail</span>
      <span>Contactar</span>
    </a>
  </div>
</section>
