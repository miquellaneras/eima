<script>
  export let mobileMenuOpen = false;
  export let onClose = () => {};

  const links = [
    { href: '/', label: 'Inicio' },
    { href: '/cancer', label: 'Cáncer' },
    { href: '/que-haremos', label: 'Qué haremos' },
    { href: '/quienes-somos', label: 'Quiénes somos' },
    { href: '/centro-salud-virtual', label: 'Centro de Salud Virtual' },
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
  <nav class="mt-20 mb-10 px-6 z-40">
    {#each links as link (link.href)}
      <a
        href={link.href}
        class="flex items-center justify-between !text-xl py-2 hover:text-brand transition-colors duration-200 relative group"
        on:click={onClose}
      >
        <span>{link.label}</span>
        <span
          class="material-symbols-rounded group-hover:-translate-x-2 transition-all duration-300"
        >
          arrow_forward
        </span>
        <span
          class="absolute bottom-0 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full"
        ></span>
      </a>
    {/each}
    <a
      href="tel:+34658521077"
      class="flex items-center justify-between !text-xl py-2 hover:text-brand transition-colors duration-200 relative group"
      on:click={onClose}
    >
      <span>658 52 10 77</span>
      <span class="material-symbols-rounded">call</span>
    </a>
    <a
      href="/contacto"
      class="group relative flex items-center !text-xl py-2"
      on:click={onClose}
    >
      <span
        class="relative z-10 inline-flex rounded-lg bg-brand text-inverse
          px-4 py-2 flex-none transition-[flex-grow,padding-right] duration-300 ease-in-out
          group-hover:flex-grow group-hover:pr-12"
      >
        Contacto
      </span>
      <span
        class="material-symbols-rounded absolute right-0 z-20 transition-all duration-300 ease-in-out
          group-hover:text-inverse group-hover:-translate-x-2"
      >
        arrow_forward
      </span>
    </a>
  </nav>
</div>
