<script>
  import { services } from '$lib/data/services';
</script>

<section id="servicios" class="max-w-7xl mx-auto px-8 md:px-16">
  <header class="text-center mb-12 max-w-3xl mx-auto">
    <h2 class="text-3xl md:text-4xl font-semibold text-primary">Qué haremos juntos</h2>
    <p class="text-lg text-secondary mt-4">
      Combinamos lo que la evidencia dice que funciona con lo que tú necesitas. Siempre en este orden.
    </p>
  </header>
  <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {#each services as service (service.slug)}
      <article class="bg-primary border border-default rounded-2xl p-6 hover:border-brand transition-colors duration-200">
        <div class="w-12 h-12 rounded-lg bg-brand/10 text-brand flex items-center justify-center mb-4">
          <span class="material-symbols-rounded">{service.icon}</span>
        </div>
        <h3 class="text-lg font-semibold text-primary mb-2">{service.title}</h3>
        <p class="text-secondary text-sm leading-relaxed">{service.description}</p>
      </article>
    {/each}
  </div>
</section>
