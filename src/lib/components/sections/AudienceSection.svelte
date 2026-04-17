<script>
  import { audience } from '$lib/data/audience';
</script>

<section class="max-w-7xl mx-auto px-8 md:px-16">
  <header class="text-center mb-12 max-w-3xl mx-auto">
    <h2 class="text-3xl md:text-4xl font-semibold text-primary">¿Te reconoces en alguno de estos momentos?</h2>
    <p class="text-lg text-secondary mt-4">
      No hace falta tener una historia concreta para venir. Solo querer mejorar y sentirte mejor.
    </p>
  </header>
  <div class="grid gap-6 md:grid-cols-3">
    {#each audience as item (item.title)}
      <div class="bg-primary border border-default rounded-2xl p-6 hover:border-brand transition-colors duration-200">
        <div class="w-12 h-12 rounded-lg bg-brand/10 text-brand flex items-center justify-center mb-4">
          <span class="material-symbols-rounded">{item.icon}</span>
        </div>
        <h3 class="text-xl font-semibold text-primary mb-2">{item.title}</h3>
        <p class="text-secondary leading-relaxed">{item.description}</p>
      </div>
    {/each}
  </div>
</section>
