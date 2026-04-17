<script>
  export let form;
</script>

<svelte:head>
  <title>Contacto | EIMA Fisioterapia</title>
  <meta
    name="description"
    content="¿Tienes dudas o quieres reservar una primera consulta? Escríbenos, llámanos al 658 52 10 77 o envíanos un WhatsApp."
  />
  <link rel="canonical" href="https://eimafisioterapia.es/contacto" />
  <meta property="og:title" content="Contacto | EIMA Fisioterapia" />
  <meta
    property="og:description"
    content="Reserva tu primera consulta gratuita con EIMA. Teléfono, WhatsApp, email y formulario."
  />
  <meta property="og:url" content="https://eimafisioterapia.es/contacto" />
  <meta property="og:image" content="https://eimafisioterapia.es/og-image.png" />
</svelte:head>

<section class="max-w-4xl mx-auto px-6 md:px-8 pt-16 pb-16">
  <nav aria-label="Migas de pan" class="text-sm text-secondary mb-6">
    <a href="/" class="hover:text-brand">Inicio</a>
    <span aria-hidden="true" class="mx-2">/</span>
    <span>Contacto</span>
  </nav>

  <header class="mb-10 max-w-2xl">
    <p class="text-sm font-medium text-brand uppercase tracking-wide mb-3">Hablemos</p>
    <h1 class="text-4xl md:text-5xl font-semibold text-primary leading-tight">
      Cuéntanos tu situación
    </h1>
    <p class="text-lg text-secondary mt-4">
      La primera toma de contacto es gratuita y sin compromiso. Responde lo que puedas — ya nos ocuparemos del resto cuando hablemos.
    </p>
  </header>

  <div class="grid gap-10 md:grid-cols-[1fr_320px]">
    <div>
      {#if form?.success}
        <div
          class="rounded-2xl border border-brand/30 bg-brand/5 p-6 text-primary"
          role="status"
          aria-live="polite"
        >
          <p class="text-lg font-semibold text-brand">¡Gracias! Hemos recibido tu mensaje.</p>
          <p class="text-secondary mt-2">
            Te responderemos lo antes posible. Si necesitas hablar ya, puedes llamarnos al
            <a href="tel:+34658521077" class="text-brand underline">658 52 10 77</a>.
          </p>
        </div>
      {:else}
        <form method="POST" class="flex flex-col gap-5 bg-primary border border-default rounded-2xl p-6">
          <div style="position:absolute;left:-9999px;top:-9999px" aria-hidden="true">
            <label>
              Empresa (no rellenar)
              <input type="text" name="company" tabindex="-1" autocomplete="off" />
            </label>
            <label>
              Web (no rellenar)
              <input type="text" name="website" tabindex="-1" autocomplete="off" />
            </label>
          </div>

          <label class="flex flex-col gap-1 text-sm">
            <span class="font-medium text-primary">Nombre <span class="text-brand">*</span></span>
            <input
              name="name"
              type="text"
              required
              autocomplete="name"
              class="rounded-lg border border-default bg-default px-4 py-3 text-primary focus:border-brand focus:outline-none"
            />
          </label>

          <label class="flex flex-col gap-1 text-sm">
            <span class="font-medium text-primary">Email <span class="text-brand">*</span></span>
            <input
              name="email"
              type="email"
              required
              autocomplete="email"
              class="rounded-lg border border-default bg-default px-4 py-3 text-primary focus:border-brand focus:outline-none"
            />
          </label>

          <div class="grid gap-5 md:grid-cols-2">
            <label class="flex flex-col gap-1 text-sm">
              <span class="font-medium text-primary">Teléfono</span>
              <input
                name="phone"
                type="tel"
                autocomplete="tel"
                class="rounded-lg border border-default bg-default px-4 py-3 text-primary focus:border-brand focus:outline-none"
              />
            </label>
            <label class="flex flex-col gap-1 text-sm">
              <span class="font-medium text-primary">Localidad</span>
              <input
                name="location"
                type="text"
                placeholder="p.ej. Manacor"
                class="rounded-lg border border-default bg-default px-4 py-3 text-primary focus:border-brand focus:outline-none"
              />
            </label>
          </div>

          <label class="flex flex-col gap-1 text-sm">
            <span class="font-medium text-primary">¿En qué podemos ayudarte?</span>
            <textarea
              name="message"
              rows="5"
              placeholder="Cuéntanos un poco sobre tu situación y qué te gustaría conseguir."
              class="rounded-lg border border-default bg-default px-4 py-3 text-primary focus:border-brand focus:outline-none resize-y"
            ></textarea>
          </label>

          {#if form && !form.success && form.error}
            <p class="text-sm text-red-600">{form.error}</p>
          {/if}

          <button
            type="submit"
            class="inline-flex items-center justify-center gap-2 rounded-lg bg-brand text-inverse px-6 py-3 hover:scale-102 transition-transform duration-200 font-medium"
          >
            <span>Enviar mensaje</span>
            <span class="material-symbols-rounded">send</span>
          </button>

          <p class="text-xs text-secondary">
            Al enviar este formulario aceptas nuestra
            <a href="/politica-privacidad" class="text-brand underline">política de privacidad</a>.
          </p>
        </form>
      {/if}
    </div>

    <aside class="bg-primary border border-default rounded-2xl p-6 h-fit">
      <h2 class="text-lg font-semibold text-primary">También puedes</h2>
      <ul class="mt-4 space-y-3 text-sm">
        <li>
          <a
            href="tel:+34658521077"
            class="flex items-center gap-3 text-primary hover:text-brand transition-colors"
          >
            <span class="material-symbols-rounded text-brand">call</span>
            <span>+34 658 52 10 77</span>
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/34658521077"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-3 text-primary hover:text-brand transition-colors"
          >
            <span class="material-symbols-rounded text-brand">chat</span>
            <span>WhatsApp</span>
          </a>
        </li>
        <li>
          <a
            href="mailto:info@eimafisioterapia.es"
            class="flex items-center gap-3 text-primary hover:text-brand transition-colors"
          >
            <span class="material-symbols-rounded text-brand">mail</span>
            <span>info@eimafisioterapia.es</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/eima.fisioterapia"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-3 text-primary hover:text-brand transition-colors"
          >
            <span class="material-symbols-rounded text-brand">photo_camera</span>
            <span>@eima.fisioterapia</span>
          </a>
        </li>
      </ul>
      <div class="mt-6 text-sm text-secondary">
        <p class="font-medium text-primary mb-1">Zona de atención</p>
        <p>Centro y nordeste de Mallorca</p>
      </div>
    </aside>
  </div>
</section>
