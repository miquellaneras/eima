<script>
  export let author;
</script>

<aside
  class="mt-12 rounded-[10px] bg-white p-6 flex flex-col sm:flex-row gap-4 items-start shadow-[0_1px_3px_rgba(14,29,38,0.06)]"
>
  <div
    class="shrink-0 w-14 h-14 rounded-full bg-[color:var(--color-brand-accent)] text-[color:var(--color-brand)] flex items-center justify-center"
  >
    <span class="material-symbols-rounded !text-3xl">account_circle</span>
  </div>
  <div class="flex-1">
    <p class="text-sm font-light opacity-70">Escrito por</p>
    <p class="text-lg font-medium">{author.name}</p>
    <p class="text-sm text-[color:var(--color-brand-soft)] mb-2 font-light">{author.role}</p>
    <p class="text-sm font-light opacity-85">{author.bio}</p>
  </div>
</aside>
