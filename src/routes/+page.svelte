<script>
  import HeroSection from '$lib/components/sections/HeroSection.svelte';
  import AudienceSection from '$lib/components/sections/AudienceSection.svelte';
  import ValuePropsSection from '$lib/components/sections/ValuePropsSection.svelte';
  import ProcessSection from '$lib/components/sections/ProcessSection.svelte';
  import CoverageSection from '$lib/components/sections/CoverageSection.svelte';
  import SaludTiempoStrip from '$lib/components/sections/SaludTiempoStrip.svelte';
  import TeamSection from '$lib/components/sections/TeamSection.svelte';
  import ContactFormSection from '$lib/components/sections/ContactFormSection.svelte';
  import FAQSection from '$lib/components/sections/FAQSection.svelte';
</script>

<svelte:head>
  <title>EIMA Fisioterapia | Fisioterapia a domicilio en Mallorca</title>
  <meta
    name="description"
    content="Fisioterapia y ejercicio a domicilio en Mallorca para personas con cáncer y dolor crónico. Menos limitaciones, mejor vida, desde casa."
  />

  <link rel="canonical" href="https://eimafisioterapia.es/" />
  <link rel="alternate" hreflang="es-ES" href="https://eimafisioterapia.es/" />
  <link rel="alternate" hreflang="es" href="https://eimafisioterapia.es/" />
  <link rel="alternate" hreflang="x-default" href="https://eimafisioterapia.es/" />

  <meta property="og:title" content="EIMA Fisioterapia | Fisioterapia a domicilio en Mallorca" />
  <meta
    property="og:description"
    content="Fisioterapia y ejercicio a domicilio en Mallorca para personas con cáncer y dolor crónico."
  />
  <meta property="og:url" content="https://eimafisioterapia.es/" />
  <meta property="og:image" content="https://eimafisioterapia.es/og-image.png" />
  <meta property="og:image:alt" content="EIMA Fisioterapia — Fisioterapia a domicilio en Mallorca" />
  <meta name="twitter:title" content="EIMA Fisioterapia | Fisioterapia a domicilio en Mallorca" />
  <meta
    name="twitter:description"
    content="Fisioterapia y ejercicio a domicilio en Mallorca para personas con cáncer y dolor crónico."
  />
  <meta name="twitter:image" content="https://eimafisioterapia.es/og-image.png" />
</svelte:head>

<HeroSection />
<AudienceSection />
<ValuePropsSection />
<ProcessSection />
<CoverageSection />
<SaludTiempoStrip />
<TeamSection />
<ContactFormSection />
<FAQSection />
