<script>
  export let mobileMenuOpen = false;
  export let transparent = false;

  const links = [
    { href: '/', label: 'Inicio' },
    { href: '/cancer', label: 'Cáncer' },
    { href: '/que-haremos', label: 'Qué haremos' },
    { href: '/quienes-somos', label: 'Quiénes somos' },
    { href: '/centro-salud-virtual', label: 'Centro de Salud Virtual' },
    { href: '/contacto', label: 'Contacto' }
  ];
</script>

<header
  class="sticky top-0 z-40 w-full transition-colors duration-300
    {transparent ? 'bg-transparent' : 'bg-[color-mix(in_srgb,var(--color-surface)_92%,transparent)] backdrop-blur-sm'}"
>
  <div class="mx-auto max-w-7xl px-5 md:px-10 flex items-center justify-between py-3">
    <a href="/" aria-label="Inicio" class="flex items-center">
      <img
        src="/eima-logo.png"
        alt="EIMA Fisioterapia"
        class="h-10 md:h-12 w-auto"
      />
    </a>

    <nav class="hidden lg:flex items-center gap-7">
      {#each links as link (link.href)}
        <a
          href={link.href}
          class="text-[15px] font-light text-[color:var(--color-brand-soft)] hover:text-[color:var(--color-brand)] transition-colors"
        >
          {link.label}
        </a>
      {/each}
      <a
        href="tel:+34658521077"
        class="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-brand-accent)] text-[color:var(--color-brand)] px-5 py-2.5 text-sm font-medium hover:scale-[1.03] transition-transform"
        aria-label="Llamar al 658 52 10 77"
      >
        <span class="material-symbols-rounded !text-base">call</span>
        <span>Llámanos</span>
      </a>
    </nav>

    <button
      aria-label="Menú"
      aria-expanded={mobileMenuOpen}
      class="lg:hidden hover:opacity-70 transition-opacity"
      on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
    >
      <span class="relative block w-6 h-6" aria-hidden="true">
        <span
          class="absolute left-0 right-0 top-1 block h-[2px] rounded bg-[color:var(--color-brand)] transition-transform duration-200"
          class:translate-y-[7px]={mobileMenuOpen}
          class:rotate-45={mobileMenuOpen}
        ></span>
        <span
          class="absolute left-0 right-0 top-1/2 -translate-y-1/2 block h-[2px] rounded bg-[color:var(--color-brand)] transition-opacity duration-200"
          class:opacity-0={mobileMenuOpen}
        ></span>
        <span
          class="absolute left-0 right-0 bottom-1 block h-[2px] rounded bg-[color:var(--color-brand)] transition-transform duration-200"
          class:-translate-y-[7px]={mobileMenuOpen}
          class:-rotate-45={mobileMenuOpen}
        ></span>
      </span>
    </button>
  </div>
</header>
