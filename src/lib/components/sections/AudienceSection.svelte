<script>
  import { audience } from '$lib/data/audience';

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
</script>

<section class="relative bg-[#f8f4f0] pb-16 pt-10 md:pb-[5.5rem] md:pt-12">
  <div class="mx-auto max-w-6xl px-6 md:px-10">
    <header class="mx-auto mb-10 max-w-4xl text-center md:mb-12">
      <h2
        class="font-display-serif text-[1.95rem] leading-[1.02] font-medium text-[color:var(--color-brand)] md:whitespace-nowrap md:text-[40px]"
      >
        ¿Te ves reflejado en alguna de estas situaciones?
      </h2>
      <p class="text-muted mt-4 text-[13px] font-light leading-relaxed md:text-base">
        No todo el mundo parte del mismo punto. Por eso adaptamos el proceso a tu caso.
      </p>
    </header>

    <div class="grid gap-7 justify-items-center md:grid-cols-3 md:gap-8 lg:gap-10">
      {#each audience as item, i (item.letter)}
        <div
          use:revealOnScroll
          class="audience-reveal"
          style={`--reveal-delay: ${i * 90}ms`}
        >
          <article
            class="audience-card flex h-full w-full max-w-[19.6rem] flex-col rounded-[8px] border border-transparent bg-white px-3 py-3 text-center shadow-[0_14px_34px_rgba(14,29,38,0.10)] md:mx-auto md:min-h-[20rem] md:max-w-[18.75rem] md:px-3.5 md:pb-3 md:pt-3.5"
          >
            <div
              class="mx-auto grid h-11 w-11 place-items-center rounded-full bg-[#8CD0D6] text-[1.65rem] text-[color:var(--color-brand)] md:h-11 md:w-11 md:text-[1.75rem]"
            >
              <span class="audience-letter font-display-serif">{item.letter}</span>
            </div>

            <p
              class="font-noto-serif mx-auto mt-3 min-h-[4.9rem] max-w-[17.4rem] text-[1.45rem] leading-[1.05] text-[color:var(--color-brand)] md:min-h-[5.1rem] md:max-w-[17.6rem] md:text-[1.54rem]"
            >
              {item.quote}
            </p>

            <div class="mx-auto mt-4 h-px w-[4.75rem] bg-[color:var(--color-brand-accent)]"></div>

            <p
              class="text-muted mx-auto mt-4 min-h-[3.15rem] max-w-[17.6rem] text-[13px] font-light leading-[1.38] md:min-h-[3.3rem] md:max-w-[17.8rem] md:text-[14px]"
            >
              {#each item.actionLines as line}
                <span class="block">{line}</span>
              {/each}
            </p>

            <a
              href={`https://wa.me/34604529731?text=${encodeURIComponent(item.whatsappMessage)}`}
              target="_blank"
              rel="noreferrer"
              class="audience-button mt-5 inline-flex items-center justify-center gap-2.5 self-center rounded-full bg-[color:var(--color-brand-accent)] px-5 py-2.5 text-[13px] font-medium text-[color:var(--color-brand)] shadow-[0_6px_14px_rgba(14,29,38,0.12)] transition-[transform,background-color,color,font-weight,box-shadow] duration-300 ease-out md:mt-4 md:px-[1.4rem] md:py-[0.8rem]"
            >
              <span class="audience-button-label">Ver si es para mí</span>
              <span class="material-symbols-rounded audience-button-arrow !text-[20px]">arrow_forward</span>
            </a>
          </article>
        </div>
      {/each}
    </div>

    <div class="mx-auto mt-10 max-w-[30rem] text-center md:mt-12">
      <p
        use:revealOnScroll
        class="audience-fade leading-[1.35] text-[color:var(--color-brand)]"
        style="--reveal-delay: 0ms"
      >
        <span class="block text-[20px] font-light">3 situaciones diferentes.</span>
        <span class="block text-[20px] font-light">Pero con un objetivo común:</span>
      </p>
      <div
        use:revealOnScroll
        class="audience-fade my-4 flex justify-center md:my-5"
        style="--reveal-delay: 90ms"
        aria-hidden="true"
      >
        <img
          src="/download_130837.png"
          alt=""
          class="h-10 w-auto opacity-80 md:h-12"
        />
      </div>
      <p
        use:revealOnScroll
        class="audience-fade mt-2 text-[25px] leading-tight text-[color:var(--color-brand)]"
        style="--reveal-delay: 180ms"
      >
        <span class="font-light">Recuperar su</span>
        <span class="font-bold">autonomía</span>
      </p>
    </div>
  </div>
</section>

<style>
  .audience-letter {
    display: block;
    line-height: 1;
    transform: translateY(-0.03em);
  }

  .audience-reveal {
    opacity: 0;
    transform: translate3d(-18px, 22px, 0);
    transition:
      opacity 560ms ease-out,
      transform 560ms ease-out;
    transition-delay: var(--reveal-delay, 0ms);
  }

  :global(.audience-reveal[data-visible='true']) {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  .audience-fade {
    opacity: 0;
    transition: opacity 520ms ease-out;
    transition-delay: var(--reveal-delay, 0ms);
  }

  :global(.audience-fade[data-visible='true']) {
    opacity: 1;
  }

  .audience-card {
    transition:
      transform 300ms ease-out,
      border-color 300ms ease-out,
      box-shadow 300ms ease-out;
  }

  .audience-card:hover {
    border-color: var(--color-brand-accent);
    box-shadow: 0 18px 42px rgba(14, 29, 38, 0.14);
    transform: translateY(-4px) scale(1.02);
  }

  .audience-button {
    overflow: hidden;
    position: relative;
  }

  .audience-button::before {
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

  .audience-button-label,
  .audience-button-arrow {
    position: relative;
    z-index: 1;
  }

  .audience-button-arrow {
    transition: transform 300ms ease-out;
  }

  .audience-card:hover .audience-button,
  .audience-button:hover {
    background: #4083a7;
    box-shadow: 0 9px 18px rgba(14, 29, 38, 0.16);
    font-weight: 700;
    color: #ffffff;
    transform: translateY(-1px);
  }

  .audience-card:hover .audience-button::before,
  .audience-button:hover::before {
    transform: translateX(260%) skewX(-18deg);
  }

  .audience-card:hover .audience-button-arrow,
  .audience-button:hover .audience-button-arrow {
    transform: translateX(5px);
  }

  @media (prefers-reduced-motion: reduce) {
    .audience-reveal,
    .audience-fade,
    .audience-card,
    .audience-button,
    .audience-button::before,
    .audience-button-arrow {
      transition: none;
    }
  }
</style>
