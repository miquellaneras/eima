<script>
  import '@fontsource/material-symbols-rounded/300.css';
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import MobileMenu from '$lib/components/MobileMenu.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let mobileMenuOpen = false;

  function closeMobileMenu() {
    mobileMenuOpen = false;
  }
</script>

<svelte:head>
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="es_ES" />
  <meta property="og:site_name" content="EIMA Fisioterapia" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:domain" content="eimafisioterapia.es" />
</svelte:head>

<main class="min-h-screen text-primary bg-default">
  <Header bind:mobileMenuOpen />
  <MobileMenu {mobileMenuOpen} onClose={closeMobileMenu} />

  <slot />

  <Footer />
</main>
