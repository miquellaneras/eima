<script lang="ts">
  import { faqs } from '$lib/data/faqs';
  import { slide } from 'svelte/transition';

  let openIndex: number | null = null;
  let visibleIndex: number | null = null;
  let closing: number[] = [];

  function keepOpen(i: number) {
    if (!closing.includes(i)) {
      closing = [...closing, i];
    }
  }

  function doneClosing(i: number) {
    if (closing.includes(i)) {
      closing = closing.filter((x) => x !== i);
    }
  }

  function toggle(index: number) {
    if (openIndex === index) {
      keepOpen(index);
      visibleIndex = null;
      openIndex = null;
    } else {
      if (visibleIndex !== null) keepOpen(visibleIndex);
      openIndex = index;
      visibleIndex = index;
    }
  }
</script>

<section id="faq" class="max-w-4xl mx-auto px-8 md:px-16">
  <header class="text-center mb-10">
    <h2 class="text-3xl md:text-4xl font-semibold text-primary">Preguntas frecuentes</h2>
  </header>
  <div class="mx-auto rounded-2xl overflow-hidden bg-primary border border-default">
    <div class="divide-y divide-default">
      {#each faqs as faq, i (faq.q)}
        <details class="group p-6" open={openIndex === i || closing.includes(i)}>
          <summary
            class="flex items-center justify-between cursor-pointer list-none gap-4"
            on:click|preventDefault={() => toggle(i)}
          >
            <span class="text-base md:text-lg font-medium text-primary">{faq.q}</span>
            <span
              class="material-symbols-rounded transition-transform group-hover:scale-110 shrink-0
                {visibleIndex === i ? 'rotate-180 duration-250' : 'rotate-0 duration-200'}"
            >
              expand_more
            </span>
          </summary>
          {#if visibleIndex === i}
            <div
              class="mt-3 text-secondary leading-relaxed"
              in:slide={{ duration: 250 }}
              out:slide={{ duration: 200 }}
              on:outroend={() => doneClosing(i)}
            >
              <p>{@html faq.a}</p>
            </div>
          {/if}
        </details>
      {/each}
    </div>
  </div>
</section>
