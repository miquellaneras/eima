<script>
  import HeroSection from '$lib/components/sections/HeroSection.svelte';
  import AudienceSection from '$lib/components/sections/AudienceSection.svelte';
  import ValuePropsSection from '$lib/components/sections/ValuePropsSection.svelte';
  import ProcessSection from '$lib/components/sections/ProcessSection.svelte';
  import ServicesSection from '$lib/components/sections/ServicesSection.svelte';
  import TeamSection from '$lib/components/sections/TeamSection.svelte';
  import PricingSection from '$lib/components/sections/PricingSection.svelte';
  import CoverageSection from '$lib/components/sections/CoverageSection.svelte';
  import FAQSection from '$lib/components/sections/FAQSection.svelte';
  import ContactCTASection from '$lib/components/sections/ContactCTASection.svelte';
</script>

<svelte:head>
  <title>EIMA Fisioterapia | Fisioterapia a domicilio en Mallorca</title>
  <meta
    name="description"
    content="Fisioterapia y ejercicio a domicilio en Mallorca para personas con cáncer y dolor crónico. Tratamiento personalizado, basado en la evidencia, desde casa. Primera consulta gratuita."
  />

  <link rel="canonical" href="https://eimafisioterapia.es/" />
  <link rel="alternate" hreflang="es-ES" href="https://eimafisioterapia.es/" />
  <link rel="alternate" hreflang="es" href="https://eimafisioterapia.es/" />
  <link rel="alternate" hreflang="x-default" href="https://eimafisioterapia.es/" />

  <meta
    property="og:title"
    content="EIMA Fisioterapia | Fisioterapia a domicilio en Mallorca"
  />
  <meta
    property="og:description"
    content="Fisioterapia y ejercicio a domicilio en Mallorca para personas con cáncer y dolor crónico. Primera consulta gratuita."
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

  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Cuánto cuesta una sesión de fisioterapia a domicilio?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Las sesiones tienen un precio de entre 60 € y 80 €, dependiendo de la duración y del trabajo que se realice. Cada sesión dura entre 50 y 80 minutos."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cuánto espacio necesito en casa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Con aproximadamente 6 a 8 m² es suficiente. Llevamos el material necesario y adaptamos los ejercicios al espacio disponible."
          }
        },
        {
          "@type": "Question",
          "name": "¿A qué zonas de Mallorca vais?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cubrimos principalmente el centro y nordeste de Mallorca: Inca, Manacor, Artà, Sineu, Petra, Santa Margalida, Selva, Llubí, Vilafranca, Costitx y municipios cercanos."
          }
        },
        {
          "@type": "Question",
          "name": "¿Es una terapia adecuada si estoy en tratamiento oncológico?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. El ejercicio terapéutico guiado por profesionales se considera una herramienta clave durante y después del cáncer. Trabajamos en coordinación con tu equipo médico."
          }
        },
        {
          "@type": "Question",
          "name": "¿Ofrecéis una primera consulta gratuita?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. La primera toma de contacto es gratuita y sin compromiso, para entender tu situación y valorar juntos cómo podemos ayudarte."
          }
        }
      ]
    }
  </script>
</svelte:head>

<div class="space-y-20 md:space-y-28 mb-10">
  <HeroSection />
  <AudienceSection />
  <ValuePropsSection />
  <ProcessSection />
  <ServicesSection />
  <TeamSection />
  <PricingSection />
  <CoverageSection />
  <FAQSection />
  <ContactCTASection />
</div>
