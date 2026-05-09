<script>
  import HeroSection from '$lib/components/sections/HeroSection.svelte';
  import AudienceSection from '$lib/components/sections/AudienceSection.svelte';
  import CommonSituationsSection from '$lib/components/sections/CommonSituationsSection.svelte';
  import ValuePropsSection from '$lib/components/sections/ValuePropsSection.svelte';
  import RecoveryGoalsSection from '$lib/components/sections/RecoveryGoalsSection.svelte';
  import ParallaxSloganSection from '$lib/components/sections/ParallaxSloganSection.svelte';
</script>

<svelte:head>
  <title>EIMA | Fisioterapia a domicilio para personas con cáncer</title>
  <meta
    name="description"
    content="Fisioterapia a domicilio en Mallorca para personas con cáncer. Si estás en tratamiento o ya lo has pasado: recupera fuerza y energía con ejercicio en casa."
  />

  <link rel="canonical" href="https://eimafisioterapia.es/" />
  <link rel="alternate" hreflang="es-ES" href="https://eimafisioterapia.es/" />
  <link rel="alternate" hreflang="es" href="https://eimafisioterapia.es/" />
  <link rel="alternate" hreflang="x-default" href="https://eimafisioterapia.es/" />

  <meta property="og:title" content="Fisioterapeutas especializados en cáncer y dolor oncológico" />
  <meta
    property="og:description"
    content="Fisioterapia y ejercicio a domicilio en Mallorca. Te guiamos durante y después del cáncer con un plan seguro, progresivo y personalizado para recuperar fuerza y energía, incluso con dolor oncológico."
  />
  <meta property="og:url" content="https://eimafisioterapia.es/" />
  <meta property="og:image" content="https://eimafisioterapia.es/og-image.png" />
  <meta property="og:image:alt" content="EIMA Fisioterapia — Fisioterapia a domicilio en Mallorca" />
  <meta name="twitter:title" content="Fisioterapeutas especializados en cáncer y dolor oncológico" />
  <meta
    name="twitter:description"
    content="Fisioterapia y ejercicio a domicilio en Mallorca. Te guiamos durante y después del cáncer con un plan seguro, progresivo y personalizado para recuperar fuerza y energía, incluso con dolor oncológico."
  />
  <meta name="twitter:image" content="https://eimafisioterapia.es/og-image.png" />
</svelte:head>

<HeroSection />
<AudienceSection />
<CommonSituationsSection />
<RecoveryGoalsSection />
<ParallaxSloganSection
  image="/Gemini_Generated_Image_8crr28crr28crr28-100.png"
  topHtml="<strong>Sin SALUD,</strong> no disfrutas de tu tiempo."
  middleHtml="<strong>Sin TIEMPO,</strong> no puedes cuidar tu salud."
  bottomHtml="Con nosotros, <strong>cuidarás tu salud sin renunciar a tu tiempo.</strong>"
  mobileTopSize={16}
  desktopTopSize={22}
  mobileMiddleSize={16}
  desktopMiddleSize={22}
  mobileBottomSize={22}
  desktopBottomSize={33}
  lineGap={20}
/>
<ValuePropsSection />
