<script>
  export let mobileMenuOpen = false;

  const links = [
    { href: '/cancer', label: 'Cáncer' },
    { href: '/que-haremos', label: 'Qué haremos' },
    { href: '/quienes-somos', label: 'Quiénes somos' },
    { href: '/centro-salud-virtual', label: 'Centro de Salud Virtual' },
    { href: '/blog', label: 'Blog' }
  ];
</script>

<header class="sticky top-0 z-40">
  <div class="relative">
    <div
      class="flex items-center justify-between gap-4 bg-gradient-to-b from-slate-50 via-slate-50 to-slate-50/90"
    >
      <a href="/" aria-label="Inicio" class="flex items-center">
        <img
          src="/eima-logo.png"
          alt="EIMA Fisioterapia"
          class="h-10 md:h-12 mx-3 md:mx-6 my-2 w-auto"
        />
      </a>
      <nav class="hidden lg:flex px-8 py-4 items-center gap-7">
        {#each links as link (link.href)}
          <a
            href={link.href}
            class="border-b border-transparent hover:text-brand hover:border-brand transition-colors duration-200 text-sm"
          >
            {link.label}
          </a>
        {/each}
        <a
          href="tel:+34658521077"
          class="inline-flex items-center gap-1.5 text-sm hover:text-brand transition-colors duration-200"
          aria-label="Llamar al +34 658 52 10 77"
        >
          <span class="material-symbols-rounded !text-base">call</span>
          <span>658 52 10 77</span>
        </a>
        <a
          href="/contacto"
          class="rounded-lg bg-brand text-inverse px-4 py-2 text-sm hover:scale-102 transition-transform duration-200"
        >
          Contacto
        </a>
      </nav>
      <button
        aria-label="Menú"
        aria-expanded={mobileMenuOpen}
        class="lg:hidden mx-5 my-4 hover:text-brand transition-colors duration-200"
        on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
      >
        <span class="relative block w-6 h-6" aria-hidden="true">
          <span
            class="absolute left-0 right-0 top-1 block h-[2px] rounded bg-current transition-transform duration-200 ease-in-out"
            class:translate-y-[7px]={mobileMenuOpen}
            class:rotate-45={mobileMenuOpen}
          ></span>
          <span
            class="absolute left-0 right-0 top-1/2 -translate-y-1/2 block h-[2px] rounded bg-current transition-opacity duration-200 ease-in-out"
            class:opacity-0={mobileMenuOpen}
          ></span>
          <span
            class="absolute left-0 right-0 bottom-1 block h-[2px] rounded bg-current transition-transform duration-200 ease-in-out"
            class:-translate-y-[7px]={mobileMenuOpen}
            class:-rotate-45={mobileMenuOpen}
          ></span>
        </span>
      </button>
    </div>
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 -bottom-14 h-14
        bg-gradient-to-b from-slate-50/90 via-slate-50/60 to-transparent
        {mobileMenuOpen ? 'w-0 duration-300' : 'w-full duration-100'}
        transition-width ease-in-out"
    ></div>
  </div>
</header>
