<script>
  import { team } from '$lib/data/team';
</script>

<section id="equipo" class="py-20 md:py-28">
  <div class="mx-auto max-w-6xl px-6 md:px-10">
    <header class="text-center mb-14 max-w-3xl mx-auto">
      <h2 class="text-2xl md:text-3xl font-bold">Conoce a tus fisioterapeutas</h2>
    </header>

    <div class="grid gap-8 md:grid-cols-2">
      {#each team as member (member.id)}
        <article class="flex flex-col">
          <div
            class="aspect-[3/4] bg-[color:var(--color-brand-soft)]/20 rounded-[10px] overflow-hidden flex items-center justify-center"
          >
            <span
              class="material-symbols-rounded !text-[160px] text-[color:var(--color-brand-soft)]/60"
            >
              account_circle
            </span>
          </div>
          <h3 class="mt-6 text-2xl font-light text-center">
            {member.name}
          </h3>
          <p class="mt-2 text-sm text-[color:var(--color-brand-soft)] font-light text-center">
            {member.role}
          </p>
          <p class="mt-4 text-[15px] font-light leading-relaxed opacity-85 text-center max-w-md mx-auto">
            {member.bio}
          </p>
        </article>
      {/each}
    </div>

    <div class="mt-14 flex flex-col sm:flex-row items-center justify-center gap-5 text-center">
      <p class="text-[15px] font-light">
        ¿Quieres conocer <strong class="font-semibold">nuestra historia</strong> en profundidad?
      </p>
      <a
        href="/quienes-somos"
        class="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-brand-accent)] text-[color:var(--color-brand)] px-6 py-2.5 font-medium text-[15px] hover:scale-[1.03] transition-transform"
      >
        Más detalles aquí
        <span class="material-symbols-rounded !text-base">arrow_forward</span>
      </a>
    </div>
  </div>
</section>
