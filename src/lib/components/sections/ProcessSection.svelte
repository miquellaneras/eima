<script>
  import { process } from '$lib/data/process';
</script>

<section id="proceso" class="max-w-7xl mx-auto px-8 md:px-16">
  <header class="text-center mb-12 max-w-3xl mx-auto">
    <h2 class="text-3xl md:text-4xl font-semibold text-primary">Cómo trabajamos</h2>
    <p class="text-lg text-secondary mt-4">
      Un proceso transparente en cuatro pasos. Sin sorpresas, sin prisas.
    </p>
  </header>
  <ol class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
    {#each process as step (step.n)}
      <li class="relative bg-primary border border-default rounded-2xl p-6">
        <div class="flex items-center gap-3 mb-4">
          <span
            class="w-9 h-9 rounded-full bg-brand text-inverse font-semibold flex items-center justify-center text-sm"
            aria-hidden="true">{step.n}</span
          >
          <span class="material-symbols-rounded text-brand">{step.icon}</span>
        </div>
        <h3 class="text-lg font-semibold text-primary mb-2">{step.title}</h3>
        <p class="text-secondary text-sm leading-relaxed">{step.description}</p>
      </li>
    {/each}
  </ol>
</section>
