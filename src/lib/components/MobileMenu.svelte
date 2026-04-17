<script>
  export let mobileMenuOpen = false;
  export let onClose = () => {};

  const links = [
    { href: '/', label: 'Inicio' },
    { href: '/cancer', label: 'Cáncer' },
    { href: '/que-haremos', label: 'Qué haremos' },
    { href: '/quienes-somos', label: 'Quiénes somos' },
    { href: '/centro-salud-virtual', label: 'Centro de Salud Virtual' },
    { href: '/contacto', label: 'Contacto' },
    { href: '/blog', label: 'Blog' }
  ];
</script>

<div
  class={`fixed inset-0 z-30 bg-default transform transition-transform duration-250 ease-in-out
    ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
  role="dialog"
  aria-modal="true"
  aria-hidden={!mobileMenuOpen}
>
  <nav class="mt-24 mb-10 px-8 flex flex-col gap-2">
    {#each links as link (link.href)}
      <a
        href={link.href}
        class="text-xl font-light text-[color:var(--color-brand-soft)] hover:text-[color:var(--color-brand)] py-2 border-b border-default transition-colors"
        on:click={onClose}
      >
        {link.label}
      </a>
    {/each}
    <a
      href="tel:+34658521077"
      class="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--color-brand-accent)] text-[color:var(--color-brand)] px-6 py-3 font-medium"
      on:click={onClose}
    >
      <span class="material-symbols-rounded !text-base">call</span>
      Llámanos
    </a>
  </nav>
</div>
