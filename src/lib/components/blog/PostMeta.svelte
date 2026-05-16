<script>
  export let date;
  export let updated = null;
  export let readingMinutes = null;

  function formatDate(d) {
    if (!d) return '';
    return new Date(d).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
</script>

<div class="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center text-sm font-light opacity-80">
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
