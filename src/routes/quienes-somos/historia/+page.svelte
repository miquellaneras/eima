<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { storyProfiles } from '$lib/data/stories';
  import { WEB_WHATSAPP_HREF } from '$lib/data/whatsapp';

  let activeId = 'miquel';
  let selectedCover = null;

  $: activeProfile = storyProfiles.find((profile) => profile.id === activeId) ?? storyProfiles[0];

  onMount(() => {
    const setProfileFromHash = () => {
      const profileId = window.location.hash.replace('#', '');
      if (profileId === 'miquel' || profileId === 'jaume') {
        activeId = profileId;
        requestAnimationFrame(() => {
          const target = document.getElementById('historias');
          if (!target) return;

          const top = target.getBoundingClientRect().top + window.scrollY + 86;
          window.scrollTo({ top, behavior: 'auto' });
        });
      }
    };

    setProfileFromHash();
    window.addEventListener('hashchange', setProfileFromHash);

    return () => {
      window.removeEventListener('hashchange', setProfileFromHash);
    };
  });

  const storyMarks = {
    miquel: [
      { text: 'quería dedicarme a ayudar a las personas.', mark: 'bold' },
      { text: 'sensación constante de inconformidad.', mark: 'bold' },
      {
        text: '¿Por qué hacemos esto así? ¿De verdad me enseñan técnicas que no están demostradas científicamente? ¿Estoy tratando el dolor sin entender por qué le duele a mi paciente?',
        mark: 'italic'
      },
      {
        text: '¿Cómo va a mejorar alguien que no puede caminar por el dolor si lo único que hacemos es un masaje en la espalda?',
        mark: 'bold'
      },
      { text: 'Esa frustración', mark: 'bold' },
      { text: 'Necesitaba entender cómo funciona el dolor', mark: 'bold' },
      { text: 'grandes profesionales', mark: 'bold' },
      { text: 'Pablo Mendo, Rafael Torres o Louis Gifford', mark: 'bold' },
      { text: 'trasladar todo este conocimiento a cada persona con la que trabajo', mark: 'bold' },
      { text: 'nace EIMA.', mark: 'bold' }
    ],
    jaume: [
      { text: '“la mitad de vosotros tendrá cáncer de mayor”', mark: 'bold' },
      { text: 'espina clavada.', mark: 'bold' },
      { text: 'sufrí episodios de dolor lumbar', mark: 'bold' },
      { text: 'entender el cuerpo, el dolor y el movimiento.', mark: 'bold' },
      { text: 'la independencia', mark: 'bold' },
      { text: 'dependencia que crea la camilla.', mark: 'bold' },
      { text: 'lo que tú mismo haces por TU cuerpo.', mark: 'bold' },
      { text: 'la calidad de vida no era la misma.', mark: 'bold' },
      { text: 'Thomas Seyfried', mark: 'bold' },
      { text: 'el papel del metabolismo', mark: 'bold' },
      { text: 'filtrar el ruido.', mark: 'bold' },
      { text: 'Mi misión', mark: 'bold' }
    ]
  };

  const getMarkedSegments = (text, profileId) => {
    const marks = storyMarks[profileId] ?? [];
    const segments = [];
    let cursor = 0;

    while (cursor < text.length) {
      const next = marks
        .map((mark) => ({ ...mark, index: text.indexOf(mark.text, cursor) }))
        .filter((mark) => mark.index !== -1)
        .sort((a, b) => a.index - b.index || b.text.length - a.text.length)[0];

      if (!next) {
        segments.push({ text: text.slice(cursor), mark: 'plain' });
        break;
      }

      if (next.index > cursor) {
        segments.push({ text: text.slice(cursor, next.index), mark: 'plain' });
      }

      segments.push({ text: next.text, mark: next.mark });
      cursor = next.index + next.text.length;
    }

    return segments;
  };

  const readingCovers = {
    'Explain Pain': '/book-explain-pain.png',
    'Aches & Pains': '/book-aches-pains.png',
    'Understanding sciatica': '/book-understanding-sciatica.png',
    'The Biomechanics of Low Back Pain': '/book-biomechanics-back-pain.png',
    'El ayuno contra el cáncer': '/book-ayuno-cancer.png',
    'Hábitos atómicos': '/book-habitos-atomicos.png',
    'Neurociencia del cuerpo': '/book-neurociencia-cuerpo.png',
    'Essential Guide Cervical Spine': '/book-essential-guide-cervical-spine.jpg',
    'Antifrágil': '/book-antifragil.jpg',
    'Medio ambiente y salud': '/book-medio-ambiente-salud.png',
    'El ejercicio: Un muro contra el cáncer': '/book-ejercicio-muro-cancer.png',
    'La Enciclopedia del Cáncer: Metabolismo, Sistema Inmune y Microbiota': '/book-cancer-integral.png',
    'Libérate de tóxicos: Guía para evitar los disruptores endocrinos': '/book-liberate-toxicos.png'
  };

  const displayReadingTitle = (title) => {
    if (title.startsWith('Aches & Pains') || title.toLowerCase().startsWith('aches and pains')) {
      return 'Aches & Pains';
    }

    if (title.startsWith('Medio ambiente y salud:')) {
      return 'Medio ambiente y salud';
    }

    if (title.startsWith('El ejercicio, un muro contra el cáncer')) {
      return 'El ejercicio: Un muro contra el cáncer';
    }

    return title;
  };

  const normalizeStatus = (status) => {
    const lower = status.toLowerCase();
    if (status.includes('✔') || lower.includes('acabado')) return 'Acabado';
    if (lower.includes('en curso')) return 'En curso';
    return status;
  };

  const parseReading = (reading) => {
    const [rawTitle, detail = ''] = reading.split(' — ');
    const title = displayReadingTitle(rawTitle);
    const statusMatch = detail.match(/\s*(\([^)]*\)|✔️)$/u);
    const rawStatus = statusMatch?.[1] ?? '';
    const status = normalizeStatus(rawStatus);
    let author = rawStatus ? detail.replace(rawStatus, '').trim() : detail.trim();

    if (title.startsWith('La Enciclopedia del Cáncer')) {
      author = 'Alfonso Fernández (Cáncer Integral)';
    }

    const authorParts = author.match(/^(.*?)\s*(\([^)]*\))$/u);
    const authorName = authorParts ? authorParts[1].trim() : author;
    const authorNote = authorParts ? authorParts[2] : '';

    return {
      title,
      author,
      authorName,
      authorNote,
      status,
      cover: readingCovers[rawTitle] ?? readingCovers[title]
    };
  };

  const getDisplayReadings = (profile) => {
    const seen = new Set();

    return profile.readings.filter((reading) => {
      const parsed = parseReading(reading);
      const key = parsed.title;

      if (profile.id === 'jaume' && key === 'Aches & Pains') {
        if (seen.has(key)) return false;
        seen.add(key);
      }

      return true;
    });
  };

  const parseEducationItem = (item) => {
    const [main, ...rest] = item.split(' — ');
    const detail = rest.join(' — ');
    const detailParts = detail.match(/^(.*?)\s*(\([^)]*\))$/u);

    return {
      main,
      detail,
      detailName: detailParts ? detailParts[1].trim() : detail,
      detailNote: detailParts ? detailParts[2] : ''
    };
  };
</script>

<svelte:head>
  <title>Nuestra historia | Jaume y Miquel, fisioterapeutas EIMA</title>
  <meta
    name="description"
    content="Descubre la historia de los fisioterapeutas de EIMA y por qué acompañan a personas con cáncer a recuperar energía, confianza y autonomía."
  />
  <link rel="canonical" href="https://eimafisioterapia.es/quienes-somos/historia" />
  <meta property="og:title" content="Nuestra historia | Jaume y Miquel, fisioterapeutas EIMA" />
  <meta
    property="og:description"
    content="Conoce el camino de Jaume Sansó y Miquel Galmés, fisioterapeutas fundadores de EIMA, y su forma de acompañar a personas con cáncer."
  />
  <meta property="og:url" content="https://eimafisioterapia.es/quienes-somos/historia" />
  <meta property="og:image" content="https://eimafisioterapia.es/og-image.png" />
  <meta property="og:image:alt" content="Jaume y Miquel, fisioterapeutas fundadores de EIMA" />
  <meta name="twitter:title" content="Nuestra historia | Jaume y Miquel, fisioterapeutas EIMA" />
  <meta
    name="twitter:description"
    content="Conoce el camino de Jaume Sansó y Miquel Galmés, fisioterapeutas fundadores de EIMA, y su forma de acompañar a personas con cáncer."
  />
  <meta name="twitter:image" content="https://eimafisioterapia.es/og-image.png" />
</svelte:head>

<section class="story-hero relative overflow-hidden bg-[#13212b] pt-28 pb-10 md:pt-34 md:pb-14">
  <div class="absolute inset-0">
    <img
      src="/historia-hero.jpg"
      alt=""
      class="h-full w-full object-cover object-center"
    />
    <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,18,24,0.62)_0%,rgba(8,18,24,0.42)_42%,rgba(8,18,24,0.18)_100%)]"></div>
    <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,18,24,0.2)_0%,rgba(8,18,24,0.08)_46%,rgba(8,18,24,0.46)_100%)]"></div>
  </div>

  <div class="relative z-10 mx-auto max-w-6xl px-5 md:px-10">
    <div class="max-w-2xl text-left">
      <p class="story-eyebrow text-[0.78rem] font-medium uppercase text-[#8CD0D6]">
        Nuestra historia
      </p>
      <h1 class="story-title mt-5 text-[3rem] font-medium leading-[0.98] tracking-[0] text-white md:text-[60px]">
        <span class="story-title__line">Conoce <span>nuestra</span></span>
        <span class="story-title__line"><span>historia</span> a fondo</span>
      </h1>
      <p class="mt-7 max-w-xl text-[16px] font-light leading-[1.85] text-white/88">
        <span class="block">Dos caminos distintos, una <strong>misma idea</strong>:</span>
        <span class="block">Ayudarte a recuperar seguridad, energía y confianza en tu proceso.</span>
      </p>
    </div>

    <div class="mt-9 flex justify-center">
      <a
        href={WEB_WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        class="hero-story-cta inline-flex w-fit items-center justify-center rounded-full border border-white/50 px-7 py-3.5 font-light text-white transition-[background-color,transform,font-weight] duration-300 ease-out hover:scale-[1.03] hover:bg-white/10 hover:font-bold"
      >
        Cuéntanos tu historia
      </a>
    </div>
  </div>
</section>

<section id="historias" class="story-page bg-[#F8F4F0] pt-16 pb-20 md:pt-20 md:pb-28">
  <div class="mx-auto max-w-6xl px-5 md:px-10">
    <div class="mx-auto w-full max-w-[28rem]">
      <p class="story-eyebrow mb-5 text-center text-[0.78rem] font-medium uppercase text-[#4083A7]">
        Conócenos
      </p>
      <div class="team-photo-frame" aria-label="Miquel y Jaume, fisioterapeutas de EIMA">
        <button
          type="button"
          class="story-person-slot story-person-slot--miquel"
          aria-label="Ver la historia de Miquel"
          on:click={() => (activeId = 'miquel')}
        >
          <img
            class:inactive-person={activeId !== 'miquel'}
            class="story-person story-person--miquel"
            src="/story-miquel-crop.png"
            alt="Miquel Galmés"
          />
        </button>
        <button
          type="button"
          class="story-person-slot story-person-slot--jaume"
          aria-label="Ver la historia de Jaume"
          on:click={() => (activeId = 'jaume')}
        >
          <img
            class:inactive-person={activeId !== 'jaume'}
            class="story-person story-person--jaume"
            src="/story-jaume-crop.png"
            alt="Jaume Sansó"
          />
        </button>
      </div>

      <div class="story-tabs mt-5" aria-label="Elegir historia">
        <button
          type="button"
          class:active-person={activeId === 'miquel'}
          on:click={() => (activeId = 'miquel')}
        >
          Miquel
        </button>
        <button
          type="button"
          class:active-person={activeId === 'jaume'}
          on:click={() => (activeId = 'jaume')}
        >
          Jaume
        </button>
      </div>
    </div>

    {#if activeProfile}
      {#key activeId}
        <article
          in:fade={{ duration: 260 }}
          class="mt-14 space-y-10 md:mt-16 md:space-y-14"
        >
          <section class="profile-card">
            <header class="profile-card__header profile-card__header--dark">
              <h2 class="story-name story-profile-name text-white">
                {activeProfile.name}
              </h2>
              <p class="mx-auto mt-3 max-w-2xl text-[16px] font-light leading-[1.7] text-white/86">
                {activeProfile.specialty}
              </p>
            </header>

            <div class="profile-card__body space-y-10">
              {#each activeProfile.storySections as section}
                <section>
                  <h3
                    class="story-section-heading text-[22px] leading-[1.2] text-[#4083A7]"
                    style={section.title.includes('respuestas') ? 'font-size: 21.5px;' : ''}
                  >
                    {section.title}
                  </h3>
                  <div class="mt-4 space-y-4 text-[14px] font-light leading-[1.85] text-[#233F4E]/86">
                    {#each section.paragraphs as paragraph}
                      {@const segments = getMarkedSegments(paragraph, activeProfile.id)}
                      <p>
                        {#each segments as segment}
                          {#if segment.mark === 'bold'}
                            <strong>{segment.text}</strong>
                          {:else if segment.mark === 'italic'}
                            <em>{segment.text}</em>
                          {:else}
                            {segment.text}
                          {/if}
                        {/each}
                      </p>
                    {/each}
                  </div>
                </section>
              {/each}
            </div>
          </section>

          <section class="profile-card">
            <header class="profile-card__header profile-card__header--blue">
              <h3 class="story-side-title text-[28px] text-white">
                Mi formación
              </h3>
            </header>

            <div class="profile-card__body">
              <div class="education-timeline">
                {#each activeProfile.education as group}
                  <div class="education-year-block">
                    <p class="education-year">{group.year}</p>
                    <div class="education-items">
                      {#each group.items as item}
                        {@const educationItem = parseEducationItem(item)}
                        <div class="education-item">
                          <span class="education-dot" aria-hidden="true"></span>
                          <p>
                            <strong>{educationItem.main}</strong>
                            {#if educationItem.detailName}
                              <span>
                                — {educationItem.detailName}
                                {#if educationItem.detailNote}
                                  <em>{educationItem.detailNote}</em>
                                {/if}
                              </span>
                            {/if}
                          </p>
                        </div>
                      {/each}
                    </div>
                  </div>
                {/each}
              </div>
            </div>
          </section>

          <section class="profile-card">
            <header class="profile-card__header profile-card__header--blue">
              <h3 class="story-side-title text-[28px] text-white">
                Mis lecturas
              </h3>
            </header>

            <div class="profile-card__body">
              <div class="readings-grid">
                {#each getDisplayReadings(activeProfile) as reading}
                  {@const parsedReading = parseReading(reading)}
                  <article
                    class:reading-card--lift-author={parsedReading.title.startsWith('La Enciclopedia del Cáncer') ||
                      parsedReading.title.startsWith('Libérate de tóxicos')}
                    class:reading-card--lift-simple={parsedReading.title === 'Explain Pain' ||
                      parsedReading.title === 'Aches & Pains' ||
                      parsedReading.title === 'Medio ambiente y salud' ||
                      parsedReading.title === 'Understanding sciatica' ||
                      parsedReading.title === 'El ayuno contra el cáncer' ||
                      parsedReading.title === 'Hábitos atómicos' ||
                      parsedReading.title === 'Neurociencia del cuerpo' ||
                      parsedReading.title === 'Essential Guide Cervical Spine' ||
                      parsedReading.title === 'Antifrágil'}
                    class:reading-card--lift-exercise={parsedReading.title ===
                      'El ejercicio: Un muro contra el cáncer'}
                    class:reading-card--lift-biomechanics={parsedReading.title ===
                      'The Biomechanics of Low Back Pain'}
                    class="reading-card"
                  >
                    {#if parsedReading.cover}
                      <button
                        type="button"
                        class="reading-cover-button"
                        aria-label={`Ampliar portada de ${parsedReading.title}`}
                        on:click={() => (selectedCover = parsedReading)}
                      >
                        <img
                          class="reading-cover-image"
                          src={parsedReading.cover}
                          alt={`Portada de ${parsedReading.title}`}
                        />
                      </button>
                    {:else}
                      <div class="reading-cover" aria-hidden="true">
                        <span>{parsedReading.title.slice(0, 1)}</span>
                      </div>
                    {/if}
                    <h4>{parsedReading.title}</h4>
                    {#if parsedReading.authorName}
                      <p class="reading-author">
                        {parsedReading.authorName}
                        {#if parsedReading.authorNote}
                          <em>{parsedReading.authorNote}</em>
                        {/if}
                      </p>
                    {/if}
                    {#if parsedReading.status}
                      <span
                        class:reading-status--done={parsedReading.status === 'Acabado'}
                        class:reading-status--progress={parsedReading.status === 'En curso'}
                        class="reading-status"
                      >
                        {parsedReading.status}
                      </span>
                    {/if}
                  </article>
                {/each}
              </div>
            </div>
          </section>

          <div class="story-closing">
            <p>{activeProfile.cta}</p>
            <a
              href={WEB_WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              class="story-cta inline-flex items-center justify-center rounded-full bg-[#8CD0D6] px-6 py-3 text-[15px] font-medium text-[#233F4E] transition-all duration-300 hover:scale-[1.03] hover:bg-[#4083A7] hover:font-bold hover:text-white hover:shadow-[0_10px_24px_rgba(64,131,167,0.28)]"
            >
              Te escuchamos
            </a>
          </div>
        </article>
      {/key}
    {/if}
  </div>
</section>

{#if selectedCover}
  <div
    class="cover-modal"
    role="dialog"
    aria-modal="true"
    aria-label={`Portada de ${selectedCover.title}`}
    on:click={() => (selectedCover = null)}
  >
    <button class="cover-modal__close" type="button" aria-label="Cerrar" on:click={() => (selectedCover = null)}>
      ×
    </button>
    <div class="cover-modal__content" on:click|stopPropagation>
      <img src={selectedCover.cover} alt={`Portada de ${selectedCover.title}`} />
      <p>{selectedCover.title}</p>
    </div>
  </div>
{/if}

<style>
  .story-name {
    font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
    letter-spacing: 0;
  }

  .story-title {
    font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
  }

  .story-eyebrow {
    letter-spacing: 0.32em;
  }

  .story-title__line {
    display: block;
    font-family: inherit;
    color: inherit;
  }

  .story-title span {
    font-family: inherit;
  }

  .story-title__line span {
    color: #8cd0d6;
  }

  .story-section-heading,
  .story-side-title {
    font-family: 'Noto Serif', Georgia, 'Times New Roman', serif;
    font-weight: 700;
  }

  .profile-card {
    overflow: hidden;
    border-radius: 8px;
    background: #ffffff;
    box-shadow: 0 24px 70px rgba(14, 29, 38, 0.1);
    border: 1px solid rgba(35, 63, 78, 0.1);
  }

  .profile-card__header {
    padding: 1.35rem 1.5rem;
    text-align: center;
    color: #ffffff;
  }

  .profile-card__header--dark {
    background: #233f4e;
  }

  .profile-card__header--blue {
    background: #4083a7;
  }

  .profile-card__body {
    background: #ffffff;
    padding: 2rem 1.5rem;
  }

  .story-profile-name {
    font-size: 30px;
    line-height: 1.08;
  }

  .education-timeline {
    position: relative;
    display: grid;
    gap: 0;
  }

  .education-timeline::before {
    content: '';
    position: absolute;
    left: calc(4.5rem + 1.25rem + 1.25rem - 19px + 4px);
    top: 0.45rem;
    bottom: 0.45rem;
    width: 1px;
    transform: translateX(-50%);
    background: rgba(35, 63, 78, 0.34);
  }

  .education-year-block {
    display: grid;
    grid-template-columns: 4.5rem minmax(0, 1fr);
    gap: 1.25rem;
    padding-bottom: 1.75rem;
  }

  .education-year-block:last-child {
    padding-bottom: 0;
  }

  .education-year {
    padding-top: 0;
    text-align: right;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.65;
    letter-spacing: 0.18em;
    color: #4083a7;
  }

  .education-items {
    position: relative;
    display: grid;
    gap: 0.8rem;
    padding-left: 1.25rem;
  }

  .education-item {
    position: relative;
    min-height: 1.45rem;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.65;
    color: rgba(35, 63, 78, 0.86);
  }

  .education-item em {
    font-style: italic;
    margin-left: 0.18rem;
  }

  .education-item strong,
  .profile-card__body strong {
    font-weight: 700;
    color: #233f4e;
  }

  .profile-card__body em {
    font-style: italic;
  }

  .education-dot {
    position: absolute;
    left: -19px;
    top: 0.5rem;
    width: 8px;
    height: 8px;
    border-radius: 9999px;
    background: #233f4e;
    z-index: 1;
  }

  .readings-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1rem;
  }

  .reading-card {
    display: grid;
    grid-template-rows: 8.85rem 4rem 1.9rem 1.85rem;
    align-items: center;
    justify-items: center;
    row-gap: 0.28rem;
    border-radius: 8px;
    border: 1px solid rgba(140, 208, 214, 0.7);
    background: #f8f4f0;
    padding: 1rem;
    text-align: center;
  }

  .reading-cover {
    display: flex;
    aspect-ratio: 0.72;
    width: min(100%, 5.2rem);
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background: linear-gradient(145deg, #233f4e, #4083a7);
    color: #ffffff;
    box-shadow: 0 10px 22px rgba(14, 29, 38, 0.16);
  }

  .reading-cover-button {
    display: flex;
    width: 100%;
    height: 8.85rem;
    align-items: center;
    justify-content: center;
    cursor: zoom-in;
    border: 0;
    background: transparent;
    padding: 0;
  }

  .reading-cover-button:focus-visible {
    outline: 2px solid #4083a7;
    outline-offset: 4px;
    border-radius: 8px;
  }

  .reading-cover-image {
    display: block;
    width: min(100%, 6.2rem);
    height: 100%;
    aspect-ratio: 0.72;
    object-fit: contain;
    object-position: center;
    border-radius: 6px;
    background: #ffffff;
    box-shadow: 0 10px 22px rgba(14, 29, 38, 0.16);
  }

  .reading-cover span {
    font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
    font-size: 2rem;
    line-height: 1;
  }

  .reading-card h4 {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 100%;
    margin: 0;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.35;
    color: #233f4e;
  }

  .reading-card p {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 100%;
    margin: 0;
    font-size: 12px;
    font-weight: 300;
    line-height: 1.45;
    color: rgba(35, 63, 78, 0.74);
  }

  .reading-author em {
    font-style: italic;
    margin-left: 0.18rem;
  }

  .reading-card--lift-author .reading-author {
    transform: translateY(-0.42rem);
  }

  .reading-card--lift-simple h4,
  .reading-card--lift-simple .reading-author {
    transform: translateY(-1.2rem);
  }

  .reading-card--lift-exercise h4 {
    transform: translateY(-0.58rem);
  }

  .reading-card--lift-exercise .reading-author {
    transform: translateY(-0.36rem);
  }

  .reading-card--lift-biomechanics h4 {
    transform: translateY(-0.82rem);
  }

  .reading-card--lift-biomechanics .reading-author {
    transform: translateY(-0.88rem);
  }

  .reading-status {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    min-width: 4.5rem;
    height: 1.85rem;
    padding: 0 0.65rem;
    font-size: 12px;
    line-height: 1.45;
    color: #233f4e;
  }

  .reading-status--done {
    background: #8cd0d6;
    font-weight: 700;
  }

  .reading-status--progress {
    background: #e8e8f6;
    font-weight: 300;
  }

  .story-closing {
    display: grid;
    justify-items: center;
    gap: 1rem;
    padding-top: 0.65rem;
    text-align: center;
  }

  .story-closing p {
    font-size: 14px;
    font-weight: 300;
    line-height: 1.7;
    color: #233f4e;
  }

  .cover-modal {
    position: fixed;
    inset: 0;
    z-index: 80;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(8, 18, 24, 0.76);
    padding: 1.5rem;
  }

  .cover-modal__content {
    display: grid;
    justify-items: center;
    gap: 1rem;
    max-width: min(92vw, 34rem);
  }

  .cover-modal__content img {
    max-height: min(78vh, 42rem);
    max-width: 100%;
    border-radius: 8px;
    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.42);
  }

  .cover-modal__content p {
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
  }

  .cover-modal__close {
    position: fixed;
    right: 1.25rem;
    top: 1rem;
    color: #ffffff;
    font-size: 2.1rem;
    line-height: 1;
  }

  .team-photo-frame {
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 2.35rem;
    overflow: hidden;
    aspect-ratio: 1.35;
    border-radius: 8px;
    background: #ffffff;
    box-shadow: 0 20px 52px rgba(14, 29, 38, 0.14);
    isolation: isolate;
    padding: 0.32rem 1.3rem 0;
  }

  .story-person-slot {
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 100%;
    min-width: 0;
    cursor: pointer;
    appearance: none;
    border: 0;
    background: transparent;
    padding: 0;
  }

  .story-person-slot:focus-visible {
    outline: 2px solid #4083a7;
    outline-offset: -4px;
  }

  .story-person {
    display: block;
    height: 124%;
    width: auto;
    object-fit: contain;
    object-position: bottom center;
    transition:
      filter 280ms ease,
      opacity 280ms ease,
      transform 280ms ease;
  }

  .story-person--miquel {
    z-index: 2;
    margin: 0;
  }

  .story-person--jaume {
    z-index: 1;
    margin: 0;
  }

  .story-person:not(.inactive-person) {
    filter: none;
    transform: scale(1.02);
  }

  .story-person.inactive-person {
    filter: blur(3px) saturate(0.7);
    opacity: 0.38;
    transform: scale(0.98);
  }

  .story-tabs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    width: min(100%, 18.5rem);
    margin-inline: auto;
    padding: 0.55rem;
    border-radius: 9999px;
    background: #ffffff;
    box-shadow:
      0 9px 22px rgba(14, 29, 38, 0.13),
      inset 0 0 0 1px rgba(35, 63, 78, 0.08);
  }

  .story-tabs button {
    min-height: 2.8rem;
    border-radius: 9999px;
    background: #e8e8f6;
    color: #233f4e;
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
    transition:
      background-color 240ms ease,
      color 240ms ease,
      transform 240ms ease,
      font-weight 240ms ease;
  }

  .story-tabs button:hover {
    transform: translateY(-1px);
  }

  .story-tabs button.active-person {
    background: #4083a7;
    color: #ffffff;
    font-weight: 700;
  }

  @media (max-width: 767px) {
    .story-title {
      font-size: 2.35rem;
    }

    .story-tabs {
      width: min(100%, 18rem);
    }

    .team-photo-frame {
      aspect-ratio: 1.35;
      gap: 1.45rem;
      padding: 0.28rem 1rem 0;
    }

    .story-person {
      height: 122%;
    }

    .story-person--miquel {
      margin: 0;
    }

    .story-person--jaume {
      margin: 0;
    }

    .story-tabs button {
      min-height: 2.85rem;
      font-size: 16px;
    }

    .profile-card__body {
      padding: 1.5rem 1.1rem;
    }

    .education-year-block {
      grid-template-columns: 3.5rem minmax(0, 1fr);
      gap: 0.95rem;
    }

    .education-timeline::before {
      left: calc(3.5rem + 0.95rem + 1.25rem - 15px);
    }

    .education-year {
      font-size: 16px;
      letter-spacing: 0.14em;
    }

    .readings-grid {
      grid-template-columns: 1fr;
      justify-items: center;
    }

    .reading-card {
      width: min(100%, 18rem);
    }
  }
</style>
