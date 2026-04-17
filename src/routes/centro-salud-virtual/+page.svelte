<script>
  import ContactCTASection from '$lib/components/sections/ContactCTASection.svelte';
</script>

<svelte:head>
  <title>Centro de Salud Virtual | EIMA Fisioterapia</title>
  <meta
    name="description"
    content="Seguimiento online de tu proceso de ejercicio y fisioterapia. Ideal para continuar el trabajo entre sesiones presenciales o cuando los desplazamientos complican la agenda."
  />
  <link rel="canonical" href="https://eimafisioterapia.es/centro-salud-virtual" />
  <meta property="og:title" content="Centro de Salud Virtual | EIMA Fisioterapia" />
  <meta
    property="og:description"
    content="Acompañamiento online para continuar el trabajo entre sesiones presenciales."
  />
  <meta property="og:url" content="https://eimafisioterapia.es/centro-salud-virtual" />
  <meta property="og:image" content="https://eimafisioterapia.es/og-image.png" />
</svelte:head>

<article class="max-w-4xl mx-auto px-6 md:px-8 pt-16 pb-10">
  <nav aria-label="Migas de pan" class="text-sm text-secondary mb-6">
    <a href="/" class="hover:text-brand">Inicio</a>
    <span aria-hidden="true" class="mx-2">/</span>
    <span>Centro de Salud Virtual</span>
  </nav>

  <header class="mb-10">
    <p class="text-sm font-medium text-brand uppercase tracking-wide mb-3">Acompañamiento online</p>
    <h1 class="text-4xl md:text-5xl font-semibold text-primary leading-tight">
      Centro de Salud Virtual
    </h1>
    <p class="text-lg text-secondary mt-4">
      A veces la distancia, la agenda o la fase del tratamiento complican los desplazamientos. En esos momentos, seguimos contigo en formato online.
    </p>
  </header>

  <section class="prose-blog">
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
    <p>
      Si tu situación es compleja, empezamos por una videollamada sin compromiso para valorar si el formato online es adecuado o conviene una visita presencial primero.
    </p>
  </section>
</article>

<div class="space-y-20 md:space-y-28 mb-10 mt-10">
  <ContactCTASection />
</div>
