<script>
  export let form = null;
</script>

<section id="contacto" class="py-20 md:py-28">
  <div class="mx-auto max-w-6xl px-6 md:px-10 grid gap-10 md:grid-cols-[1fr_1.1fr] items-start">
    <div>
      <h2 class="text-3xl md:text-5xl leading-tight">
        <span class="font-light">¿Listo/a para tomar las </span>
        <span class="font-bold">riendas de tu salud?</span>
      </h2>
      <p class="mt-6 text-[15px] font-light opacity-85 max-w-md">
        Si tienes dudas, escríbenos o llámanos de forma totalmente gratuita. La primera toma de
        contacto es sin compromiso.
      </p>
      <div class="mt-8 flex flex-col gap-3">
        <a
          href="tel:+34658521077"
          class="inline-flex items-center gap-3 text-[15px] font-light hover:text-[color:var(--color-brand-soft)] transition-colors"
        >
          <span
            class="w-10 h-10 rounded-full bg-[color:var(--color-brand-accent)] text-[color:var(--color-brand)] flex items-center justify-center"
          >
            <span class="material-symbols-rounded !text-[18px]">call</span>
          </span>
          <span>+34 658 52 10 77</span>
        </a>
        <a
          href="mailto:info@eimafisioterapia.es"
          class="inline-flex items-center gap-3 text-[15px] font-light hover:text-[color:var(--color-brand-soft)] transition-colors"
        >
          <span
            class="w-10 h-10 rounded-full bg-[color:var(--color-brand-accent)] text-[color:var(--color-brand)] flex items-center justify-center"
          >
            <span class="material-symbols-rounded !text-[18px]">mail</span>
          </span>
          <span>info@eimafisioterapia.es</span>
        </a>
        <a
          href="https://wa.me/34658521077"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-3 text-[15px] font-light hover:text-[color:var(--color-brand-soft)] transition-colors"
        >
          <span
            class="w-10 h-10 rounded-full bg-[color:var(--color-brand-accent)] text-[color:var(--color-brand)] flex items-center justify-center"
          >
            <span class="material-symbols-rounded !text-[18px]">chat</span>
          </span>
          <span>WhatsApp</span>
        </a>
      </div>
    </div>

    <div class="rounded-[10px] bg-white p-7 md:p-9 shadow-[0_1px_6px_rgba(14,29,38,0.08)]">
      <div class="flex items-center gap-3 mb-6">
        <span class="material-symbols-rounded !text-[28px] text-[color:var(--color-brand-soft)]"
          >send</span
        >
        <h3 class="text-sm font-medium tracking-[0.2em] uppercase">Contacta con nosotros</h3>
      </div>

      {#if form?.success}
        <div class="rounded-[10px] bg-[color:var(--color-brand-accent)]/20 p-5 text-[15px]" role="status" aria-live="polite">
          <p class="font-medium mb-1">¡Gracias! Hemos recibido tu mensaje.</p>
          <p class="font-light opacity-80">
            Te responderemos lo antes posible. Si necesitas hablar ya, puedes llamarnos al
            <a href="tel:+34658521077" class="underline">658 52 10 77</a>.
          </p>
        </div>
      {:else}
        <form method="POST" action="/contacto" class="flex flex-col gap-4">
          <div style="position:absolute;left:-9999px;top:-9999px" aria-hidden="true">
            <input type="text" name="company" tabindex="-1" autocomplete="off" />
            <input type="text" name="website" tabindex="-1" autocomplete="off" />
          </div>

          <label class="flex flex-col gap-1.5 text-sm">
            <span class="font-medium text-[color:var(--color-brand)]"
              >Nombre <span class="text-[color:var(--color-brand-soft)]">*</span></span
            >
            <input
              name="name"
              type="text"
              required
              autocomplete="name"
              placeholder="Nombre"
              class="rounded-full border border-default bg-white px-5 py-3 text-[15px] font-light focus:border-[color:var(--color-brand-accent)] focus:outline-none"
            />
          </label>

          <label class="flex flex-col gap-1.5 text-sm">
            <span class="font-medium text-[color:var(--color-brand)]"
              >Teléfono <span class="text-[color:var(--color-brand-soft)]">*</span></span
            >
            <input
              name="phone"
              type="tel"
              required
              autocomplete="tel"
              placeholder="Teléfono"
              class="rounded-full border border-default bg-white px-5 py-3 text-[15px] font-light focus:border-[color:var(--color-brand-accent)] focus:outline-none"
            />
          </label>

          <label class="flex flex-col gap-1.5 text-sm">
            <span class="font-medium text-[color:var(--color-brand)]"
              >Email <span class="text-[color:var(--color-brand-soft)]">*</span></span
            >
            <input
              name="email"
              type="email"
              required
              autocomplete="email"
              placeholder="Email"
              class="rounded-full border border-default bg-white px-5 py-3 text-[15px] font-light focus:border-[color:var(--color-brand-accent)] focus:outline-none"
            />
          </label>

          <label class="flex flex-col gap-1.5 text-sm">
            <span class="font-medium text-[color:var(--color-brand)]">Cuéntanos tu caso</span>
            <textarea
              name="message"
              rows="4"
              placeholder="Cuéntanos tu caso"
              class="rounded-[10px] border border-default bg-white px-5 py-3 text-[15px] font-light focus:border-[color:var(--color-brand-accent)] focus:outline-none resize-y"
            ></textarea>
          </label>

          {#if form && !form.success && form.error}
            <p class="text-sm text-red-600">{form.error}</p>
          {/if}

          <div class="flex flex-col sm:flex-row justify-between items-center gap-4 pt-2">
            <p class="text-xs font-light opacity-70">
              Al enviar aceptas nuestra
              <a href="/politica-privacidad" class="underline">política de privacidad</a>.
            </p>
            <button
              type="submit"
              class="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--color-brand-accent)] text-[color:var(--color-brand)] px-7 py-3 font-medium text-[15px] hover:scale-[1.03] transition-transform"
            >
              Enviar
            </button>
          </div>
        </form>
      {/if}
    </div>
  </div>
</section>
