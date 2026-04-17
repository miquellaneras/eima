<script>
  import { audience } from '$lib/data/audience';
</script>

<section class="relative bg-warm py-20 md:py-28">
  <div class="mx-auto max-w-7xl px-6 md:px-10">
    <header class="text-center mb-14 max-w-3xl mx-auto">
      <h2 class="text-2xl md:text-3xl font-normal">
        <span class="font-bold">¿Para quién</span> es nuestra fisioterapia a domicilio en Mallorca?
      </h2>
    </header>

    <div class="grid gap-6 md:grid-cols-3">
      {#each audience as item, i (item.headline)}
        <article
          class="relative rounded-[10px] bg-white/70 backdrop-blur-sm p-7 pt-14 shadow-[0_1px_3px_rgba(14,29,38,0.06)]"
        >
          <h3 class="text-xl md:text-2xl font-normal leading-snug mb-5">
            <span class="block font-light opacity-60">{item.headline}</span>
            <span class="block font-semibold">{item.subhead}</span>
          </h3>

          <p class="font-serif-italic text-[color:var(--color-brand-soft)] text-[15px] leading-relaxed mb-5">
            {item.quote}
          </p>

          <p class="text-[15px] font-light leading-relaxed mb-6">
            <span class="text-[color:var(--color-brand-accent)]">👉</span>
            {item.action}
          </p>

          <a
            href="/contacto"
            class="inline-flex items-center gap-3 text-sm font-medium text-[color:var(--color-brand-soft)] hover:text-[color:var(--color-brand)] transition-colors uppercase tracking-wide"
          >
            <span
              class="w-9 h-9 rounded-full border border-[color:var(--color-brand-soft)] flex items-center justify-center"
            >
              <span class="material-symbols-rounded !text-[18px]">arrow_forward</span>
            </span>
            Ver si es para mí
          </a>
        </article>
      {/each}
    </div>

    <div class="mt-14 text-center">
      <p class="text-xl md:text-2xl font-light mb-1">Pero el objetivo es el mismo:</p>
      <p class="text-3xl md:text-4xl">
        <span class="font-light">Recuperar tu</span>
        <span class="font-bold">autonomía.</span>
      </p>
    </div>
  </div>

  <div class="bg-[color:var(--color-brand-soft)] mt-16 py-6">
    <div
      class="mx-auto max-w-4xl px-6 flex flex-col sm:flex-row items-center justify-center gap-5 text-white text-center"
    >
      <p class="text-[15px] md:text-base font-light">¿Te encuentras en una de estas situaciones?</p>
      <a
        href="/contacto"
        class="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--color-brand-accent)] text-[color:var(--color-brand)] px-6 py-2.5 font-medium text-[15px] hover:scale-[1.03] transition-transform"
      >
        Escríbenos
      </a>
    </div>
  </div>
</section>
