<script>
  import { onMount } from 'svelte';

  const phrases = ['Más energía', 'Más salud', 'Más vida.'];
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  let phraseIndex = 0;
  let typedPhrase = '';

  onMount(() => {
    let cancelled = false;

    async function animate() {
      while (!cancelled) {
        const phrase = phrases[phraseIndex];
        typedPhrase = '';

        for (let i = 1; i <= phrase.length && !cancelled; i += 1) {
          typedPhrase = phrase.slice(0, i);
          await sleep(90);
        }

        await sleep(760);

        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }

    animate();

    return () => {
      cancelled = true;
    };
  });
</script>

<section class="relative w-full overflow-hidden" style="min-height: 92vh;">
  <video
    class="absolute inset-0 h-full w-full object-cover"
    autoplay
    muted
    loop
    playsinline
    poster="/hero.jpg"
    aria-hidden="true"
  >
    <source src="/videos/hero.mp4" type="video/mp4" />
  </video>
  <div
    class="absolute inset-0"
    style="background: linear-gradient(90deg, rgba(20,38,49,0.92) 0%, rgba(20,38,49,0.78) 55%, rgba(20,38,49,0.55) 100%);"
    aria-hidden="true"
  ></div>

  <div class="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-20 md:px-10 md:pt-24">
    <h1 class="max-w-3xl leading-[1.02] tracking-tight">
      <span class="mb-4 block max-w-xl text-[7px] font-light tracking-wide text-white/10 md:text-[7px]">
        Ejercicio y fisioterapia a domicilio en Mallorca para personas con cáncer.
      </span>
      <span class="block text-4xl font-normal text-white md:text-6xl">Menos limitaciones.</span>
      <span
        class="mt-1 block text-5xl font-bold text-white md:mt-2 md:text-[5rem]"
        aria-label={phrases[phraseIndex]}
      >
        <span class="inline-block min-w-[10ch]">{typedPhrase}</span>
      </span>
      <span
        class="mt-3 block font-serif-italic text-3xl md:text-[3.2rem]"
        style="color: var(--color-brand-accent); font-weight: 300;"
      >
        Desde casa.
      </span>
    </h1>

    <div class="mt-10 max-w-lg text-[15px] font-light leading-relaxed text-white/90 md:text-base">
      <p>
        Si estás pasando por un <strong class="font-semibold">cáncer</strong> (o ya lo has pasado),
        te ayudamos a empezar o retomar el <strong class="font-semibold">ejercicio</strong> de forma
        segura con un acompañamiento de 12 semanas adaptado a ti.
      </p>
      <p class="mt-4">
        Incluso si sigues con
        <strong class="font-semibold">dolor, fatiga o miedo a empeorar</strong> tras tus
        tratamientos.
      </p>
    </div>

    <div class="mt-10 flex flex-col items-center gap-4">
      <a
        href={`https://wa.me/34604529731?text=${encodeURIComponent('Hola, quiero saber si podéis ayudarme.')}`}
        target="_blank"
        rel="noopener noreferrer"
        class="hero-cta inline-flex w-fit items-center justify-center rounded-full border border-white/50 px-7 py-3.5 text-white font-light transition-[background-color,transform,font-weight] duration-300 ease-out hover:scale-[1.03] hover:bg-white/10 hover:font-bold"
      >
        Cuéntanos tu caso aquí
      </a>
      <p class="max-w-md text-center text-xs font-light leading-relaxed text-white/75 md:text-sm">
        Valoraremos tu caso, resolveremos tus dudas y te diremos si este acompañamiento encaja contigo.
      </p>
    </div>
  </div>
</section>

<style>
  .hero-cta {
    isolation: isolate;
    overflow: hidden;
    position: relative;
  }

  .hero-cta::before {
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.55), transparent);
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform: translateX(-180%) skewX(-18deg);
    transition: transform 420ms ease-out;
    width: 44%;
    z-index: 0;
  }

  .hero-cta:hover::before {
    transform: translateX(260%) skewX(-18deg);
  }

  .hero-cta :global(*) {
    position: relative;
    z-index: 1;
  }
</style>
