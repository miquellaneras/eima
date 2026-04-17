<script>
  import ProcessSection from '$lib/components/sections/ProcessSection.svelte';
  import CoverageSection from '$lib/components/sections/CoverageSection.svelte';
  import ContactFormSection from '$lib/components/sections/ContactFormSection.svelte';
</script>

<svelte:head>
  <title>Qué haremos juntos | EIMA Fisioterapia</title>
  <meta
    name="description"
    content="Cómo es una sesión de fisioterapia a domicilio con EIMA. Valoración, tratamiento adaptado y seguimiento continuo."
  />
  <link rel="canonical" href="https://eimafisioterapia.es/que-haremos" />
  <meta property="og:image" content="https://eimafisioterapia.es/og-image.png" />
</svelte:head>

<section class="relative overflow-hidden" style="min-height: 55vh;">
  <div class="absolute inset-0 bg-center bg-cover" style="background-image: url('/hero.jpg');" aria-hidden="true"></div>
  <div class="absolute inset-0" style="background: linear-gradient(90deg, rgba(35,63,78,0.82) 0%, rgba(35,63,78,0.45) 100%);" aria-hidden="true"></div>

  <div class="relative z-10 mx-auto max-w-6xl px-6 md:px-10 pt-24 md:pt-32 pb-16">
    <nav aria-label="Migas de pan" class="text-sm font-light text-white/70 mb-6">
      <a href="/" class="hover:text-white">Inicio</a>
      <span aria-hidden="true" class="mx-2">/</span>
      <span>Qué haremos</span>
    </nav>
    <h1 class="text-4xl md:text-6xl leading-tight text-white max-w-4xl">
      <span class="block font-light">Un tratamiento que parte </span>
      <span class="block font-bold">de ti y vuelve a ti.</span>
    </h1>
  </div>
</section>

<section class="py-20 md:py-28">
  <div class="mx-auto max-w-3xl px-6 md:px-10 prose-blog">
    <h2>Sesiones a domicilio, sin prisas</h2>
    <p>
      Vamos a tu casa con el material necesario. Cada sesión dura entre 50 y 80 minutos y combina lo que necesitas en ese momento: ejercicio, terapia manual, educación y seguimiento de objetivos.
    </p>
    <h2>Trabajamos en equipo</h2>
    <p>
      Tú eres el protagonista. Te explicamos qué estamos haciendo y por qué, para que puedas entender tu proceso y tomar decisiones informadas. Si hay otros profesionales implicados (oncólogos, médicos de familia, enfermería), nos coordinamos con ellos cuando tiene sentido.
    </p>
  </div>
</section>

<ProcessSection />
<CoverageSection />
<ContactFormSection />
