<script>
  import ProcessSection from '$lib/components/sections/ProcessSection.svelte';
  import ServicesSection from '$lib/components/sections/ServicesSection.svelte';
  import PricingSection from '$lib/components/sections/PricingSection.svelte';
  import ContactCTASection from '$lib/components/sections/ContactCTASection.svelte';
</script>

<svelte:head>
  <title>Qué haremos juntos | EIMA Fisioterapia</title>
  <meta
    name="description"
    content="Cómo es una sesión de fisioterapia a domicilio con EIMA. Valoración, tratamiento adaptado, ejercicio terapéutico, terapia manual y seguimiento continuo."
  />
  <link rel="canonical" href="https://eimafisioterapia.es/que-haremos" />
  <meta property="og:title" content="Qué haremos juntos | EIMA Fisioterapia" />
  <meta
    property="og:description"
    content="El proceso de tratamiento en EIMA, paso a paso: escuchamos, valoramos, tratamos y seguimos contigo."
  />
  <meta property="og:url" content="https://eimafisioterapia.es/que-haremos" />
  <meta property="og:image" content="https://eimafisioterapia.es/og-image.png" />
</svelte:head>

<article class="max-w-4xl mx-auto px-6 md:px-8 pt-16 pb-10">
  <nav aria-label="Migas de pan" class="text-sm text-secondary mb-6">
    <a href="/" class="hover:text-brand">Inicio</a>
    <span aria-hidden="true" class="mx-2">/</span>
    <span>Qué haremos</span>
  </nav>

  <header class="mb-10">
    <p class="text-sm font-medium text-brand uppercase tracking-wide mb-3">
      El proceso EIMA
    </p>
    <h1 class="text-4xl md:text-5xl font-semibold text-primary leading-tight">
      Un tratamiento que parte de ti y vuelve a ti
    </h1>
    <p class="text-lg text-secondary mt-4">
      Cada persona llega en un momento distinto. Nuestro trabajo es entender el tuyo y, desde ahí, diseñar un plan que tenga sentido para tu cuerpo y para tu vida.
    </p>
  </header>

  <section class="prose-blog">
    <h2>Sesiones a domicilio, sin prisas</h2>
    <p>
      Vamos a tu casa con el material necesario. Cada sesión dura entre 50 y 80 minutos y combina distintos elementos según lo que necesites en ese momento: ejercicio, terapia manual, educación, seguimiento de objetivos.
    </p>
    <h2>Trabajamos en equipo</h2>
    <p>
      Tú eres el protagonista. Te explicamos qué estamos haciendo y por qué, para que puedas entender tu proceso y tomar decisiones informadas. Si hay otros profesionales implicados (oncólogos, médicos de familia, enfermería), nos coordinamos con ellos cuando tiene sentido.
    </p>
  </section>
</article>

<div class="space-y-20 md:space-y-28 mb-10 mt-10">
  <ProcessSection />
  <ServicesSection />
  <PricingSection />
  <ContactCTASection />
</div>
