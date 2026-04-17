<script>
  import { process } from '$lib/data/process';

  let active = 0;
</script>

<section id="proceso" class="relative bg-warm py-20 md:py-28">
  <div class="mx-auto max-w-6xl px-6 md:px-10">
    <header class="text-center mb-14 max-w-3xl mx-auto">
      <h2 class="text-2xl md:text-3xl">
        <span class="font-light">Cómo es </span>
        <span class="font-bold">una sesión con nosotros</span>
      </h2>
      <p class="mt-3 text-[color:var(--color-brand-soft)] text-sm font-light">
        Un proceso transparente en cuatro pasos. Sin sorpresas, sin prisas.
      </p>
    </header>

    <div class="grid gap-8 md:grid-cols-[280px_1fr] md:items-start">
      <div class="flex flex-col gap-3">
        {#each process as step, i (step.n)}
          <button
            type="button"
            class="w-full text-left rounded-[10px] px-6 py-5 bg-white transition-all duration-200 border-2
              {active === i
                ? 'border-[color:var(--color-brand-accent)] shadow-[0_1px_3px_rgba(14,29,38,0.1)]'
                : 'border-transparent shadow-[0_1px_2px_rgba(14,29,38,0.04)] hover:border-[color:var(--color-brand-accent)]/50'}"
            on:click={() => (active = i)}
            aria-pressed={active === i}
          >
            <span class="text-xl md:text-[22px] font-bold tracking-tight">PASO {step.n}</span>
          </button>
        {/each}
      </div>

      <div class="rounded-[10px] bg-white p-8 md:p-10 shadow-[0_1px_3px_rgba(14,29,38,0.06)]">
        <h3 class="text-lg md:text-xl font-bold text-center mb-4">
          {process[active].title}
        </h3>
        <p class="text-[15px] font-light leading-relaxed text-center opacity-85 mb-8">
          {process[active].description}
        </p>
        <img
          src={process[active].image}
          alt={process[active].imageAlt}
          class="w-full rounded-[10px] object-cover aspect-[16/9]"
        />
      </div>
    </div>

    <div class="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5 text-center">
      <p class="text-[15px] font-light">
        ¿Quieres saber en profundidad cómo sería <strong class="font-semibold"
          >una sesión con nosotros</strong
        >?
      </p>
      <a
        href="/que-haremos"
        class="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-brand-accent)] text-[color:var(--color-brand)] px-6 py-2.5 font-medium text-[15px] hover:scale-[1.03] transition-transform"
      >
        Saber más
        <span class="material-symbols-rounded !text-base">arrow_forward</span>
      </a>
    </div>
  </div>
</section>
