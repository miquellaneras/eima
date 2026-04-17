<script>
  export let author;
</script>

<aside
  class="mt-12 rounded-2xl border border-default bg-primary p-6 flex flex-col sm:flex-row gap-4 items-start"
>
  <div
    class="shrink-0 w-14 h-14 rounded-full bg-brand/10 text-brand flex items-center justify-center"
  >
    <span class="material-symbols-rounded !text-3xl">account_circle</span>
  </div>
  <div class="flex-1">
    <p class="text-sm text-secondary">Escrito por</p>
    <p class="text-lg font-semibold text-primary">{author.name}</p>
    <p class="text-sm text-brand mb-2">{author.role}</p>
    <p class="text-sm text-secondary">{author.bio}</p>
    <div class="mt-3 flex items-center gap-3 text-sm">
      <a href="/quienes-somos" class="text-brand hover:underline">Quiénes somos</a>
    </div>
  </div>
</aside>
