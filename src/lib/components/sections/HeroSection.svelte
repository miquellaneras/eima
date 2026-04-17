<script>
  export let image = '/hero.jpg';
  export let eyebrow = 'Fisioterapia a domicilio · Mallorca';
  export let title = 'Ejercicio y fisioterapia a domicilio en Mallorca';
  export let highlight = 'para personas con cáncer y dolor crónico';
  export let tagline = 'Menos limitaciones. Mejor vida. Desde casa.';
</script>

<section class="relative bg-default overflow-hidden">
  <div class="relative">
    <div class="relative z-10 max-w-7xl mx-auto p-8 md:p-16">
      <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div class="flex-1 text-center lg:text-left">
          <p class="text-sm font-medium text-brand mb-3 tracking-wide uppercase mt-4">
            {eyebrow}
          </p>
          <h1 class="text-4xl md:text-5xl font-semibold leading-tight text-primary">
            {title} <span class="text-brand">{highlight}</span>
          </h1>
          <p class="text-xl text-secondary mt-6">
            {tagline}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
            <a
              href="/contacto"
              class="inline-flex items-center justify-center gap-2 rounded-lg bg-brand text-inverse px-6 py-3
                hover:scale-102 transition-transform duration-200 font-medium"
            >
              <span>Reservar primera consulta</span>
              <span class="material-symbols-rounded">arrow_forward</span>
            </a>
            <a
              href="https://wa.me/34658521077"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-brand text-brand px-6 py-3
                hover:bg-brand hover:text-inverse transition-all duration-200 font-medium"
            >
              <span class="material-symbols-rounded">chat</span>
              <span>Escríbenos por WhatsApp</span>
            </a>
          </div>
          <p class="text-sm text-secondary mt-4">Primera toma de contacto gratuita y sin compromiso.</p>
        </div>
        <div class="flex-shrink-0 w-full lg:w-auto max-w-md lg:max-w-none">
          <img
            src={image}
            alt="Fisioterapia a domicilio en Mallorca"
            class="w-full lg:w-[480px] xl:w-[560px] rounded-2xl shadow-lg lg:shadow-xl border border-slate-200 object-cover aspect-[4/3]"
          />
        </div>
      </div>
    </div>
  </div>
</section>
