<script>
  import { valueProps } from '$lib/data/audience';

  /** Parse **bold** markers into HTML */
  function format(text) {
    return text.replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold">$1</strong>');
  }
</script>

<section class="relative py-24 md:py-32">
  <div class="mx-auto max-w-6xl px-6 md:px-10">
    <header class="text-center mb-4 max-w-3xl mx-auto">
      <h2 class="text-2xl md:text-3xl">
        <span class="font-light">¿Por qué cada vez más personas eligen la </span>
        <span class="font-bold">fisioterapia a domicilio</span>?
      </h2>
      <p class="mt-3 text-sm opacity-70">(y cada vez más personas la eligen)</p>
    </header>

    <div class="relative mt-16">
      <!-- Vertical line (desktop only) -->
      <div
        class="hidden md:block absolute left-1/2 top-6 bottom-6 w-px bg-[color:var(--color-brand-soft)]/40 -translate-x-1/2"
        aria-hidden="true"
      ></div>

      <ol class="flex flex-col gap-10 md:gap-16">
        {#each valueProps as prop, i (prop.title)}
          {@const isLeft = i % 2 === 0}
          <li class="relative flex gap-5 md:gap-0 items-start md:items-center">
            <!-- MOBILE: single column, check + card side by side -->
            <span
              class="md:hidden shrink-0 w-10 h-10 rounded-full bg-[color:var(--color-brand)] text-[color:var(--color-brand-accent)] flex items-center justify-center"
              aria-hidden="true"
            >
              <span class="material-symbols-rounded !text-[18px]">check_circle</span>
            </span>
            <article class="md:hidden flex-1 rounded-[12px] bg-white/70 backdrop-blur-sm p-5 shadow-[0_1px_3px_rgba(14,29,38,0.06)]">
              <h3 class="text-lg font-light mb-3">{prop.title}</h3>
              <p class="text-[15px] font-light leading-relaxed opacity-85">{@html format(prop.body)}</p>
            </article>

            <!-- DESKTOP: 3-column grid alternating card position -->
            <div class="hidden md:grid w-full md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8">
              <div class={isLeft ? 'flex justify-end' : ''}>
                {#if isLeft}
                  <article class="max-w-md rounded-[12px] bg-white/70 backdrop-blur-sm p-7 shadow-[0_1px_3px_rgba(14,29,38,0.06)]">
                    <h3 class="text-xl font-light mb-3">{prop.title}</h3>
                    <p class="text-[15px] font-light leading-relaxed opacity-85">{@html format(prop.body)}</p>
                  </article>
                {/if}
              </div>

              <span
                class="shrink-0 w-11 h-11 rounded-full bg-[color:var(--color-brand)] text-[color:var(--color-brand-accent)] flex items-center justify-center relative z-10 shadow-sm justify-self-center"
                aria-hidden="true"
              >
                <span class="material-symbols-rounded !text-[20px]">check_circle</span>
              </span>

              <div class={!isLeft ? 'flex justify-start' : ''}>
                {#if !isLeft}
                  <article class="max-w-md rounded-[12px] bg-white/70 backdrop-blur-sm p-7 shadow-[0_1px_3px_rgba(14,29,38,0.06)]">
                    <h3 class="text-xl font-light mb-3">{prop.title}</h3>
                    <p class="text-[15px] font-light leading-relaxed opacity-85">{@html format(prop.body)}</p>
                  </article>
                {/if}
              </div>
            </div>
          </li>
        {/each}
      </ol>
    </div>
  </div>
</section>
