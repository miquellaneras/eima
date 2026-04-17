<script>
  import { coverage } from '$lib/data/coverage';

  let postcode = '';
  let status = '';

  function check() {
    if (!postcode.trim()) {
      status = 'Indícanos tu municipio o código postal.';
      return;
    }
    const match = coverage.find((t) =>
      postcode.toLowerCase().includes(t.toLowerCase()) || t.toLowerCase().includes(postcode.toLowerCase())
    );
    status = match
      ? `Sí llegamos a ${match}. Escríbenos y reservamos una primera toma de contacto.`
      : 'No reconocemos esa ubicación, pero escríbenos y lo valoramos contigo.';
  }
</script>

<section id="zona" class="py-20 md:py-28">
  <div class="mx-auto max-w-6xl px-6 md:px-10 grid gap-10 md:grid-cols-2 items-center">
    <div class="flex justify-center">
      <div
        class="aspect-[4/3] w-full max-w-md rounded-[10px] bg-[color:var(--color-brand-soft)]/10 flex items-center justify-center"
      >
        <span class="material-symbols-rounded !text-[120px] text-[color:var(--color-brand-soft)]/40"
          >map</span
        >
      </div>
    </div>

    <div>
      <h2 class="text-2xl md:text-3xl">
        <span class="font-light">¿Llegamos hasta tu casa con nuestra </span>
        <span class="font-bold">fisioterapia a domicilio en Mallorca?</span>
      </h2>
      <p class="mt-4 text-[15px] font-light opacity-85">
        <strong class="font-semibold text-[color:var(--color-brand)]">Indícanos tu municipio</strong>
        <br />
        y te confirmamos si llegamos a tu casa.
      </p>

      <form
        on:submit|preventDefault={check}
        class="mt-6 flex flex-col sm:flex-row gap-3 max-w-md"
      >
        <input
          type="text"
          bind:value={postcode}
          placeholder="p.ej. Manacor o 07500"
          class="flex-1 rounded-full border border-default bg-white px-5 py-3 text-[15px] focus:border-[color:var(--color-brand-accent)] focus:outline-none"
        />
        <button
          type="submit"
          class="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--color-brand-accent)] text-[color:var(--color-brand)] px-6 py-3 font-medium text-[15px] hover:scale-[1.03] transition-transform whitespace-nowrap"
        >
          Enviar mi zona
        </button>
      </form>

      {#if status}
        <p class="mt-4 text-sm font-light text-[color:var(--color-brand-soft)]">{status}</p>
      {/if}

      <div class="mt-8">
        <p class="text-xs uppercase tracking-wide opacity-70 mb-3">Zonas principales</p>
        <ul class="flex flex-wrap gap-2">
          {#each coverage as town (town)}
            <li
              class="inline-flex items-center rounded-full bg-white border border-default px-3 py-1.5 text-[13px] font-light"
            >
              {town}
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</section>
