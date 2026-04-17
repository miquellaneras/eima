<script>
  export let date;
  export let updated = null;
  export let authorName;
  export let readingMinutes = null;
  export let category = null;

  function formatDate(d) {
    if (!d) return '';
    return new Date(d).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
</script>

<div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-light opacity-80">
  {#if category}
    <span
      class="inline-flex items-center rounded-full bg-[color:var(--color-brand-accent)]/30 text-[color:var(--color-brand)] px-3 py-1 text-xs font-medium tracking-wide uppercase"
    >
      {category}
    </span>
  {/if}
  <span class="inline-flex items-center gap-1">
    <span class="material-symbols-rounded !text-base">person</span>
    {authorName}
  </span>
  <span class="inline-flex items-center gap-1">
    <span class="material-symbols-rounded !text-base">calendar_today</span>
    <time datetime={date}>{formatDate(date)}</time>
  </span>
  {#if updated && updated !== date}
    <span class="inline-flex items-center gap-1">
      <span class="material-symbols-rounded !text-base">update</span>
      Actualizado: <time datetime={updated}>{formatDate(updated)}</time>
    </span>
  {/if}
  {#if readingMinutes}
    <span class="inline-flex items-center gap-1">
      <span class="material-symbols-rounded !text-base">schedule</span>
      {readingMinutes} min de lectura
    </span>
  {/if}
</div>
