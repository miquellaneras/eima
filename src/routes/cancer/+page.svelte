<script>
  import ProcessSection from '$lib/components/sections/ProcessSection.svelte';
  import FAQSection from '$lib/components/sections/FAQSection.svelte';
  import ContactCTASection from '$lib/components/sections/ContactCTASection.svelte';
</script>

<svelte:head>
  <title>Fisioterapia y ejercicio para pacientes con cáncer en Mallorca | EIMA</title>
  <meta
    name="description"
    content="Ejercicio terapéutico y fisioterapia a domicilio para personas durante y después del tratamiento oncológico. Seguro, progresivo y personalizado. En Mallorca."
  />
  <link rel="canonical" href="https://eimafisioterapia.es/cancer" />
  <meta
    property="og:title"
    content="Fisioterapia y ejercicio para pacientes con cáncer en Mallorca | EIMA"
  />
  <meta
    property="og:description"
    content="Ejercicio terapéutico y fisioterapia a domicilio durante y después del tratamiento oncológico."
  />
  <meta property="og:url" content="https://eimafisioterapia.es/cancer" />
  <meta property="og:image" content="https://eimafisioterapia.es/og-image.png" />
</svelte:head>

<article class="max-w-4xl mx-auto px-6 md:px-8 pt-16 pb-10">
  <nav aria-label="Migas de pan" class="text-sm text-secondary mb-6">
    <a href="/" class="hover:text-brand">Inicio</a>
    <span aria-hidden="true" class="mx-2">/</span>
    <span>Cáncer</span>
  </nav>

  <header class="mb-10">
    <p class="text-sm font-medium text-brand uppercase tracking-wide mb-3">
      Fisioterapia oncológica
    </p>
    <h1 class="text-4xl md:text-5xl font-semibold text-primary leading-tight">
      Ejercicio y fisioterapia durante y después del cáncer
    </h1>
    <p class="text-lg text-secondary mt-4">
      El cáncer no es solo una enfermedad: es una experiencia compleja que afecta al cuerpo, la mente y la vida diaria. Te acompañamos con un plan seguro, progresivo y adaptado a tu momento.
    </p>
  </header>

  <section class="prose-blog">
    <h2>Por qué el ejercicio importa</h2>
    <p>
      La evidencia es clara: moverse durante y después del tratamiento oncológico mejora la fatiga, preserva fuerza muscular, reduce el riesgo de complicaciones y mejora la calidad de vida. No es un extra: es una parte del tratamiento.
    </p>
    <p>
      Pero no sirve cualquier ejercicio. Hace falta un plan hecho para ti, que respete tus síntomas, tu energía de cada día y la fase en la que estás.
    </p>

    <h2>Qué podemos trabajar juntos</h2>
    <ul>
      <li><strong>Fatiga oncológica:</strong> estrategias y ejercicio progresivo para recuperar energía.</li>
      <li><strong>Fuerza y resistencia:</strong> para que tareas cotidianas vuelvan a ser fáciles.</li>
      <li><strong>Movilidad y linfedema:</strong> trabajo específico tras cirugías o radioterapia.</li>
      <li><strong>Dolor oncológico:</strong> abordaje desde el movimiento y la educación.</li>
      <li><strong>Confianza en el cuerpo:</strong> volver a sentirlo tuyo, sin miedo.</li>
    </ul>

    <h2>Cómo lo hacemos</h2>
    <p>
      Todo el trabajo ocurre en tu casa, a tu ritmo. Coordinamos con tu equipo médico cuando hace falta y adaptamos cada sesión a cómo te encuentras ese día.
    </p>
  </section>
</article>

<div class="space-y-20 md:space-y-28 mb-10 mt-10">
  <ProcessSection />
  <FAQSection />
  <ContactCTASection />
</div>
