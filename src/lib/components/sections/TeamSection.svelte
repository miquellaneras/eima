<script>
  import { team } from '$lib/data/team';
</script>

<section id="equipo" class="max-w-7xl mx-auto px-8 md:px-16">
  <header class="text-center mb-12 max-w-3xl mx-auto">
    <h2 class="text-3xl md:text-4xl font-semibold text-primary">Quiénes somos</h2>
    <p class="text-lg text-secondary mt-4">
      Dos fisioterapeutas con más de siete años de experiencia en hospitales y clínicas, especializados en ejercicio terapéutico y dolor.
    </p>
  </header>
  <div class="grid gap-6 md:grid-cols-2">
    {#each team as member (member.id)}
      <article class="bg-primary border border-default rounded-2xl p-6 flex flex-col sm:flex-row gap-5 items-start">
        <div class="shrink-0 w-16 h-16 rounded-full bg-brand/10 text-brand flex items-center justify-center">
          <span class="material-symbols-rounded !text-4xl">account_circle</span>
        </div>
        <div class="flex-1">
          <h3 class="text-xl font-semibold text-primary">{member.name}</h3>
          <p class="text-brand text-sm mt-1">{member.role}</p>
          <p class="text-secondary text-sm mt-3 leading-relaxed">{member.bio}</p>
        </div>
      </article>
    {/each}
  </div>
</section>
