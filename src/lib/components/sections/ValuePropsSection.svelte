<script>
  import { valueProps } from '$lib/data/audience';
</script>

<section class="max-w-7xl mx-auto px-8 md:px-16">
  <header class="text-center mb-12 max-w-3xl mx-auto">
    <h2 class="text-3xl md:text-4xl font-semibold text-primary">Por qué EIMA</h2>
    <p class="text-lg text-secondary mt-4">
      Un servicio pensado para que ganes autonomía, no dependencia.
    </p>
  </header>
  <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
    {#each valueProps as item (item.title)}
      <div class="flex flex-col items-start gap-3 p-5 bg-primary rounded-2xl border border-default">
        <div class="w-11 h-11 rounded-lg bg-brand/10 text-brand flex items-center justify-center">
          <span class="material-symbols-rounded">{item.icon}</span>
        </div>
        <h3 class="text-base font-semibold text-primary">{item.title}</h3>
        <p class="text-sm text-secondary leading-relaxed">{item.description}</p>
      </div>
    {/each}
  </div>
</section>
