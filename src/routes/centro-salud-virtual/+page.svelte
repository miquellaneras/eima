<script>
  import ContactFormSection from '$lib/components/sections/ContactFormSection.svelte';
</script>

<svelte:head>
  <title>Centro de Salud Virtual | EIMA Fisioterapia</title>
  <meta
    name="description"
    content="Seguimiento online de tu proceso de ejercicio y fisioterapia. Ideal para continuar el trabajo entre sesiones presenciales."
  />
  <link rel="canonical" href="https://eimafisioterapia.es/centro-salud-virtual" />
  <meta property="og:image" content="https://eimafisioterapia.es/og-image.png" />
</svelte:head>

<section class="relative overflow-hidden" style="min-height: 55vh;">
  <div class="absolute inset-0 bg-center bg-cover" style="background-image: url('/hero.jpg');" aria-hidden="true"></div>
  <div class="absolute inset-0" style="background: linear-gradient(90deg, rgba(35,63,78,0.85) 0%, rgba(35,63,78,0.5) 100%);" aria-hidden="true"></div>

  <div class="relative z-10 mx-auto max-w-6xl px-6 md:px-10 pt-24 md:pt-32 pb-16">
    <nav aria-label="Migas de pan" class="text-sm font-light text-white/70 mb-6">
      <a href="/" class="hover:text-white">Inicio</a>
      <span aria-hidden="true" class="mx-2">/</span>
      <span>Centro de Salud Virtual</span>
    </nav>
    <h1 class="text-4xl md:text-6xl leading-tight text-white max-w-4xl">
      <span class="block font-light">Acompañamiento</span>
      <span class="block font-bold">también online.</span>
    </h1>
  </div>
</section>

<section class="py-20 md:py-28">
  <div class="mx-auto max-w-3xl px-6 md:px-10 prose-blog">
    <h2>¿Qué incluye?</h2>
    <ul>
      <li>Plan de ejercicio personalizado revisable semana a semana.</li>
      <li>Videoconsultas periódicas para valorar evolución y ajustar el plan.</li>
      <li>Canal de contacto directo para resolver dudas entre sesiones.</li>
      <li>Material audiovisual con las rutinas explicadas, para que puedas consultarlas cuando lo necesites.</li>
    </ul>
    <h2>¿Para quién es?</h2>
    <p>
      Para personas que ya han empezado el proceso con nosotros y quieren continuar desde casa, y para personas que viven lejos de nuestra zona de atención pero quieren un acompañamiento riguroso y personalizado.
    </p>
  </div>
</section>

<ContactFormSection />
