<script>
  import { coverage, coverageNote } from '$lib/data/coverage';
</script>

<section id="zona" class="max-w-5xl mx-auto px-8 md:px-16">
  <header class="text-center mb-10 max-w-3xl mx-auto">
    <h2 class="text-3xl md:text-4xl font-semibold text-primary">Zona de atención</h2>
    <p class="text-lg text-secondary mt-4">
      Nos desplazamos por el centro y nordeste de Mallorca.
    </p>
  </header>
  <div class="bg-primary border border-default rounded-2xl p-6 md:p-8">
    <ul class="flex flex-wrap gap-2 justify-center">
      {#each coverage as town (town)}
        <li
          class="inline-flex items-center rounded-full bg-brand/5 border border-brand/20 text-brand px-3 py-1.5 text-sm"
        >
          <span class="material-symbols-rounded !text-sm mr-1">location_on</span>
          {town}
        </li>
      {/each}
    </ul>
    <p class="text-center text-sm text-secondary mt-6">{coverageNote}</p>
  </div>
</section>
