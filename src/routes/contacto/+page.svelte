<script>
  import ContactFormSection from '$lib/components/sections/ContactFormSection.svelte';
  export let form;
</script>

<svelte:head>
  <title>Contacto | EIMA Fisioterapia</title>
  <meta
    name="description"
    content="¿Tienes dudas o quieres reservar una primera consulta? Escríbenos, llámanos al 658 52 10 77 o envíanos un WhatsApp."
  />
  <link rel="canonical" href="https://eimafisioterapia.es/contacto" />
  <meta property="og:title" content="Contacto | EIMA Fisioterapia" />
  <meta property="og:url" content="https://eimafisioterapia.es/contacto" />
  <meta property="og:image" content="https://eimafisioterapia.es/og-image.png" />
</svelte:head>

<section class="pt-16 pb-6">
  <div class="mx-auto max-w-6xl px-6 md:px-10">
    <nav aria-label="Migas de pan" class="text-sm font-light opacity-70 mb-6">
      <a href="/" class="hover:opacity-100">Inicio</a>
      <span aria-hidden="true" class="mx-2">/</span>
      <span>Contacto</span>
    </nav>
    <header class="max-w-3xl">
      <h1 class="text-3xl md:text-5xl leading-tight">
        <span class="font-light">Hablemos. La primera toma de contacto es </span>
        <span class="font-bold">gratuita.</span>
      </h1>
    </header>
  </div>
</section>

<ContactFormSection {form} />
