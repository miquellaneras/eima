<script>
  /** @param {HTMLElement} node */
  function revealOnScroll(node) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.dataset.visible = 'true';
          observer.disconnect();
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(node);

    return {
      destroy() {
        observer.disconnect();
      }
    };
  }

  const situations = [
    {
      icon: 'battery',
      body:
        'Te notas con <strong>menos fuerza y menos energía</strong>, y sientes que tu cuerpo ya no responde como antes.'
    },
    {
      icon: 'stethoscope',
      body:
        'Tu oncólogo/a te ha recomendado moverte, pero <strong>no sabes qué hacer, cuánto hacer ni cómo adaptarlo</strong> a tus tratamientos, síntomas y situación actual.'
    },
    {
      icon: 'question',
      body:
        'Quieres hacer algo para encontrarte mejor, pero <strong>te da miedo pasarte, agotarte o empeorar tus síntomas.</strong>'
    }
  ];
</script>

<section class="relative bg-[#f8f4f0] pb-12 pt-20 md:pb-14 md:pt-24">
  <div class="mx-auto max-w-6xl px-6 md:px-10">
    <header class="mx-auto max-w-4xl text-center">
      <h2
        class="font-display-serif text-[1.95rem] leading-[1.02] font-medium text-[color:var(--color-brand)] md:text-[40px]"
      >
        Si ahora mismo te pasa algo de esto
      </h2>
    </header>

    <div
      class="mt-10 grid gap-10 md:mt-12 md:grid-cols-[minmax(0,1fr)_minmax(21rem,24rem)] md:items-stretch md:gap-12 lg:gap-14"
    >
      <div class="flex flex-col gap-[1.35rem] md:mx-auto md:max-w-[40rem] md:gap-7">
        {#each situations as item, i (item.body)}
          <article
            use:revealOnScroll
            class="common-drop situation-card grid grid-cols-[auto_1fr] items-center gap-4 rounded-[8px] border border-transparent bg-white px-4 py-4 shadow-[0_12px_30px_rgba(14,29,38,0.08)] transition-[border-color,box-shadow] duration-300 ease-out md:px-5"
            style={`--reveal-delay: ${i * 90}ms`}
          >
            <div
              class="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#8CD0D6] text-[color:var(--color-brand)]"
              aria-hidden="true"
            >
              {#if item.icon === 'battery'}
                <svg class="h-10 w-10" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3.5"
                    y="7"
                    width="15"
                    height="10"
                    rx="2"
                    stroke="currentColor"
                    stroke-width="1.45"
                  />
                  <path
                    d="M20 10V14"
                    stroke="currentColor"
                    stroke-width="1.45"
                    stroke-linecap="round"
                  />
                  <rect x="5.7" y="9.2" width="4.2" height="5.6" rx="0.9" fill="currentColor" />
                </svg>
              {:else if item.icon === 'stethoscope'}
                <svg class="h-10 w-10" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
                  <path
                    d="M220,160a12,12,0,1,1-12-12A12,12,0,0,1,220,160Zm-4.55,39.29A48.08,48.08,0,0,1,168,240H144a48.05,48.05,0,0,1-48-48V151.49A64,64,0,0,1,40,88V40a8,8,0,0,1,8-8H72a8,8,0,0,1,0,16H56V88a48,48,0,0,0,48.64,48c26.11-.34,47.36-22.25,47.36-48.83V48H136a8,8,0,0,1,0-16h24a8,8,0,0,1,8,8V87.17c0,32.84-24.53,60.29-56,64.31V192a32,32,0,0,0,32,32h24a32.06,32.06,0,0,0,31.22-25,40,40,0,1,1,16.23.27ZM232,160a24,24,0,1,0-24,24A24,24,0,0,0,232,160Z"
                  ></path>
                </svg>
              {:else}
                <svg class="h-10 w-10" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
                  <path
                    d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"
                  ></path>
                </svg>
              {/if}
            </div>

            <div class="border-l border-[color:var(--color-brand-accent)]/35 pl-5">
              <p class="text-[16px] leading-[1.5] text-[color:var(--color-brand)]">
                {@html item.body}
              </p>
            </div>
          </article>
        {/each}
      </div>

      <aside
        use:revealOnScroll
        class="common-fade flex justify-center md:h-full md:justify-end"
        style="--reveal-delay: 270ms"
      >
        <div
          class="relative w-full max-w-[22rem] overflow-hidden rounded-[10px] shadow-[0_20px_44px_rgba(14,29,38,0.2)] md:h-full md:w-[24rem] md:max-w-none"
        >
          <img
            src="/buyer-persona-Cx-2.png"
            alt="Acompañamiento cercano en casa"
            class="absolute inset-0 h-full w-full object-cover"
          />
          <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,29,38,0.38)_0%,rgba(14,29,38,0.52)_45%,rgba(14,29,38,0.72)_100%)]"></div>

          <div class="relative flex h-full flex-col items-center justify-center px-7 pb-5 pt-5 text-center">
            <h3 class="font-noto-serif text-[28px] leading-[1.03] text-white md:text-[28px]">
              <span class="block">Tienes que saber que</span>
              <span class="block">
                <span class="font-bold">NO</span>
                es culpa tuya
              </span>
            </h3>

            <div class="mt-7 h-px w-24 bg-[#8CD0D6]"></div>

            <div class="mt-8 max-w-[17.4rem] text-[18px] leading-[1.6] text-white/92">
              <p>Esto le pasa a muchas personas durante y después del tratamiento.</p>
              <p class="mt-4">Y no significa que estés fallando.</p>
              <p class="mt-4">
                Significa que
                <strong class="font-bold">necesitas una guía adaptada</strong>
                a tu momento actual.
              </p>
            </div>
          </div>
        </div>
      </aside>
    </div>

    <div class="mx-auto mt-10 max-w-4xl text-center md:mt-12">
      <p class="text-[15px] leading-relaxed text-[color:var(--color-brand)] md:text-[1.05rem]">
        Por eso, no se trata de moverte sin más, sino de hacerlo de una forma que te ayude de
        verdad en tu día a día.
      </p>
      <a
        href={`https://wa.me/34604529731?text=${encodeURIComponent('Hola, quiero saber si podéis ayudarme.')}`}
        target="_blank"
        rel="noreferrer"
        class="common-cta mt-5 inline-flex items-center justify-center rounded-full bg-[#8CD0D6] px-6 py-3 text-[15px] font-medium text-[color:var(--color-brand)] transition-[transform,background-color,color,font-weight,box-shadow] duration-300 ease-out hover:scale-[1.03] hover:bg-[#4083A7] hover:font-bold hover:text-white hover:shadow-[0_10px_24px_rgba(64,131,167,0.28)]"
      >
        Cuéntanos qué te pasa
      </a>
    </div>
  </div>
</section>

<style>
  .situation-card:hover {
    border-color: #8cd0d6;
    box-shadow: 0 16px 34px rgba(14, 29, 38, 0.11);
  }

  .common-drop {
    opacity: 0;
    transform: translate3d(0, -22px, 0);
    transition:
      opacity 560ms ease-out,
      transform 560ms ease-out;
    transition-delay: var(--reveal-delay, 0ms);
  }

  :global(.common-drop[data-visible='true']) {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  .common-fade {
    opacity: 0;
    transition: opacity 520ms ease-out;
    transition-delay: var(--reveal-delay, 0ms);
  }

  :global(.common-fade[data-visible='true']) {
    opacity: 1;
  }

  .common-cta {
    overflow: hidden;
    position: relative;
  }

  .common-cta::before {
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.55), transparent);
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform: translateX(-180%) skewX(-18deg);
    transition: transform 420ms ease-out;
    width: 44%;
  }

  .common-cta:hover::before {
    transform: translateX(260%) skewX(-18deg);
  }

  .common-cta :global(*) {
    position: relative;
    z-index: 1;
  }

  @media (prefers-reduced-motion: reduce) {
    .common-drop,
    .common-fade {
      transition: none;
    }
  }
</style>
