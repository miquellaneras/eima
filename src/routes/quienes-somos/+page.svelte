<script>
  import TeamSection from '$lib/components/sections/TeamSection.svelte';
  import ContactFormSection from '$lib/components/sections/ContactFormSection.svelte';
</script>

<svelte:head>
  <title>Quiénes somos | EIMA Fisioterapia</title>
  <meta
    name="description"
    content="Conoce a los fisioterapeutas de EIMA. Jaume Sansó Servera y Miquel Galmés Vives, especializados en ejercicio, cáncer y dolor persistente."
  />
  <link rel="canonical" href="https://eimafisioterapia.es/quienes-somos" />
  <meta property="og:image" content="https://eimafisioterapia.es/og-image.png" />
</svelte:head>

<section class="relative overflow-hidden" style="min-height: 55vh;">
  <div class="absolute inset-0 bg-center bg-cover" style="background-image: url('/hero.jpg');" aria-hidden="true"></div>
  <div class="absolute inset-0" style="background: linear-gradient(90deg, rgba(35,63,78,0.85) 0%, rgba(35,63,78,0.5) 100%);" aria-hidden="true"></div>

  <div class="relative z-10 mx-auto max-w-6xl px-6 md:px-10 pt-24 md:pt-32 pb-16">
    <nav aria-label="Migas de pan" class="text-sm font-light text-white/70 mb-6">
      <a href="/" class="hover:text-white">Inicio</a>
      <span aria-hidden="true" class="mx-2">/</span>
      <span>Quiénes somos</span>
    </nav>
    <h1 class="text-4xl md:text-6xl leading-tight text-white max-w-4xl">
      <span class="block font-light">Dos fisioterapeutas.</span>
      <span class="block font-bold">Una forma de acompañarte.</span>
    </h1>
  </div>
</section>

<section class="py-20 md:py-28">
  <div class="mx-auto max-w-3xl px-6 md:px-10 prose-blog">
    <h2>Nuestra forma de trabajar</h2>
    <p>
      Creemos en un acompañamiento cercano, basado en la evidencia y pensado para que ganes autonomía. No queremos que nos necesites; queremos que puedas valerte por ti.
    </p>
    <p>
      Funcionamos bien con personas que quieren entender lo que les pasa y que están dispuestas a participar activamente en su proceso.
    </p>
    <h2>Formación y experiencia</h2>
    <p>
      Entre ambos sumamos más de siete años trabajando en el sistema sanitario público y privado, con formación específica en ejercicio terapéutico, fisioterapia oncológica y abordaje del dolor persistente.
    </p>
  </div>
</section>

<TeamSection />
<ContactFormSection />
