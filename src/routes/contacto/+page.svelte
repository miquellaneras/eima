<script>
  import ContactFormSection from '$lib/components/sections/ContactFormSection.svelte';

  export let form;
</script>

<svelte:head>
  <title>Contacto | Fisioterapia oncológica a domicilio en Mallorca</title>
  <meta
    name="description"
    content="Escríbenos o llámanos para contarnos tu caso. Te diremos con honestidad si Empenta puede ayudarte durante o después del cáncer."
  />
  <link rel="canonical" href="https://eimafisioterapia.es/contacto" />
  <meta property="og:title" content="Contacto | Fisioterapia oncológica a domicilio en Mallorca" />
  <meta
    property="og:description"
    content="Cuéntanos tu caso sin compromiso. Valoramos si podemos ayudarte con fisioterapia oncológica y ejercicio a domicilio en Mallorca."
  />
  <meta property="og:url" content="https://eimafisioterapia.es/contacto" />
  <meta property="og:image" content="https://eimafisioterapia.es/og-image.png" />
  <meta property="og:image:alt" content="EIMA Fisioterapia — Contacto" />
  <meta name="twitter:title" content="Contacto | Fisioterapia oncológica a domicilio en Mallorca" />
  <meta
    name="twitter:description"
    content="Cuéntanos tu caso sin compromiso. Valoramos si podemos ayudarte con fisioterapia oncológica y ejercicio a domicilio en Mallorca."
  />
  <meta name="twitter:image" content="https://eimafisioterapia.es/og-image.png" />
</svelte:head>

<ContactFormSection {form} />
