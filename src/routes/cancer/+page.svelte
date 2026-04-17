<script>
  import ProcessSection from '$lib/components/sections/ProcessSection.svelte';
  import FAQSection from '$lib/components/sections/FAQSection.svelte';
  import ContactFormSection from '$lib/components/sections/ContactFormSection.svelte';
</script>

<svelte:head>
  <title>Fisioterapia para pacientes con cáncer en Mallorca | EIMA</title>
  <meta
    name="description"
    content="Ejercicio terapéutico y fisioterapia a domicilio durante y después del tratamiento oncológico. Seguro, progresivo y personalizado. En Mallorca."
  />
  <link rel="canonical" href="https://eimafisioterapia.es/cancer" />
  <meta property="og:image" content="https://eimafisioterapia.es/og-image.png" />
</svelte:head>

<section class="relative overflow-hidden" style="min-height: 60vh;">
  <div
    class="absolute inset-0 bg-center bg-cover"
    style="background-image: url('/hero.jpg');"
    aria-hidden="true"
  ></div>
  <div
    class="absolute inset-0"
    style="background: linear-gradient(90deg, rgba(35,63,78,0.8) 0%, rgba(35,63,78,0.4) 100%);"
    aria-hidden="true"
  ></div>

  <div class="relative z-10 mx-auto max-w-6xl px-6 md:px-10 pt-24 md:pt-32 pb-16">
    <nav aria-label="Migas de pan" class="text-sm font-light text-white/70 mb-6">
      <a href="/" class="hover:text-white">Inicio</a>
      <span aria-hidden="true" class="mx-2">/</span>
      <span>Cáncer</span>
    </nav>
    <h1 class="text-4xl md:text-6xl leading-tight text-white max-w-4xl">
      <span class="block font-light">Ejercicio y fisioterapia</span>
      <span class="block font-bold">durante y después del cáncer.</span>
      <span class="block mt-3 font-serif-italic text-2xl md:text-4xl" style="color: var(--color-brand-accent); font-weight: 300;">
        Con criterio. Con calma. Desde casa.
      </span>
    </h1>
  </div>
</section>

<section class="py-20 md:py-28">
  <div class="mx-auto max-w-3xl px-6 md:px-10 prose-blog">
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
      <li><strong>Fuerza y resistencia:</strong> para que las tareas cotidianas vuelvan a ser fáciles.</li>
      <li><strong>Movilidad y linfedema:</strong> trabajo específico tras cirugías o radioterapia.</li>
      <li><strong>Dolor oncológico:</strong> abordaje desde el movimiento y la educación.</li>
      <li><strong>Confianza en el cuerpo:</strong> volver a sentirlo tuyo, sin miedo.</li>
    </ul>

    <h2>Cómo lo hacemos</h2>
    <p>
      Todo el trabajo ocurre en tu casa, a tu ritmo. Coordinamos con tu equipo médico cuando hace falta y adaptamos cada sesión a cómo te encuentras ese día.
    </p>
  </div>
</section>

<ProcessSection />
<FAQSection />
<ContactFormSection />
