<script>
  const year = new Date().getFullYear();

  const pageLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/cancer', label: 'Cáncer' },
    { href: '/que-haremos', label: 'Qué haremos' },
    { href: '/quienes-somos', label: 'Quiénes somos' },
    { href: '/centro-salud-virtual', label: 'Centro de Salud Virtual' },
    { href: '/contacto', label: 'Contacto' },
    { href: '/blog', label: 'Blog' }
  ];

  const legalLinks = [
    { href: '/terminos', label: 'Términos y condiciones' },
    { href: '/politica-privacidad', label: 'Política de privacidad' },
    { href: '/politica-cookies', label: 'Política de cookies' }
  ];
</script>

<footer class="bg-dark text-[color:var(--color-inverse)] mt-10">
  <div class="mx-auto max-w-6xl px-6 py-16 grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
    <div class="flex flex-col items-center md:items-start gap-5">
      <img src="/eima-logo-white.png" alt="EIMA Fisioterapia" class="h-14 w-auto" />
      <p class="text-sm opacity-90 tracking-wide">Hablemos</p>
      <div class="flex items-center gap-3">
        <a
          href="https://www.instagram.com/eima.fisioterapia"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          class="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition-colors"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
            />
          </svg>
        </a>
        <a
          href="tel:+34658521077"
          aria-label="Llamar"
          class="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition-colors"
        >
          <span class="material-symbols-rounded !text-[20px]">call</span>
        </a>
        <a
          href="mailto:info@eimafisioterapia.es"
          aria-label="Email"
          class="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition-colors"
        >
          <span class="material-symbols-rounded !text-[20px]">mail</span>
        </a>
      </div>
    </div>

    <div>
      <p class="text-lg font-medium mb-4">Menú de páginas</p>
      <ul class="space-y-2 text-sm font-light opacity-90">
        {#each pageLinks as link (link.href)}
          <li>
            <a href={link.href} class="hover:opacity-70 transition-opacity">{link.label}</a>
          </li>
        {/each}
      </ul>
    </div>

    <div>
      <p class="text-lg font-medium mb-4">Páginas legales</p>
      <ul class="space-y-2 text-sm font-light opacity-90">
        {#each legalLinks as link (link.href)}
          <li>
            <a href={link.href} class="hover:opacity-70 transition-opacity">{link.label}</a>
          </li>
        {/each}
      </ul>
    </div>
  </div>

  <div class="border-t border-white/10">
    <div
      class="mx-auto max-w-6xl px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-2 text-xs opacity-70"
    >
      <p>Copyright © {year} EIMA Fisioterapia</p>
      <p>Creado con ❤️ en Mallorca</p>
    </div>
  </div>
</footer>
