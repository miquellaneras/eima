<script>
  import TeamSection from '$lib/components/sections/TeamSection.svelte';
  import ContactCTASection from '$lib/components/sections/ContactCTASection.svelte';
</script>

<svelte:head>
  <title>Quiénes somos | EIMA Fisioterapia</title>
  <meta
    name="description"
    content="Conoce a los fisioterapeutas de EIMA. Jaume Sansó Servera y Miquel Galmés Vives, especializados en ejercicio terapéutico, cáncer y dolor persistente."
  />
  <link rel="canonical" href="https://eimafisioterapia.es/quienes-somos" />
  <meta property="og:title" content="Quiénes somos | EIMA Fisioterapia" />
  <meta
    property="og:description"
    content="El equipo detrás de EIMA: fisioterapia a domicilio en Mallorca para personas con cáncer y dolor crónico."
  />
  <meta property="og:url" content="https://eimafisioterapia.es/quienes-somos" />
  <meta property="og:image" content="https://eimafisioterapia.es/og-image.png" />
</svelte:head>

<article class="max-w-4xl mx-auto px-6 md:px-8 pt-16 pb-10">
  <nav aria-label="Migas de pan" class="text-sm text-secondary mb-6">
    <a href="/" class="hover:text-brand">Inicio</a>
    <span aria-hidden="true" class="mx-2">/</span>
    <span>Quiénes somos</span>
  </nav>

  <header class="mb-10">
    <p class="text-sm font-medium text-brand uppercase tracking-wide mb-3">El equipo</p>
    <h1 class="text-4xl md:text-5xl font-semibold text-primary leading-tight">
      Dos fisioterapeutas, una forma de entender el acompañamiento
    </h1>
    <p class="text-lg text-secondary mt-4">
      Venimos del hospital y de la atención directa a pacientes oncológicos. EIMA nace de la idea de llevar ese acompañamiento a casa, sin prisas y sin que la enfermedad te obligue a desplazarte.
    </p>
  </header>

  <section class="prose-blog">
    <h2>Nuestra forma de trabajar</h2>
    <p>
      Creemos en un acompañamiento cercano, basado en la evidencia y pensado para que ganes autonomía. No queremos que nos necesites; queremos que puedas valerte por ti.
    </p>
    <p>
      Funcionamos bien con personas que quieren entender lo que les pasa y que están dispuestas a participar activamente en su proceso. Si buscas una terapia pasiva en la que recibir "tratamiento" sin implicarte, probablemente no somos lo que buscas — y no pasa nada.
    </p>
    <h2>Formación y experiencia</h2>
    <p>
      Entre ambos sumamos más de siete años trabajando en el sistema sanitario público y privado, con formación específica en ejercicio terapéutico, fisioterapia oncológica y abordaje del dolor persistente.
    </p>
  </section>
</article>

<div class="space-y-20 md:space-y-28 mb-10 mt-10">
  <TeamSection />
  <ContactCTASection />
</div>
