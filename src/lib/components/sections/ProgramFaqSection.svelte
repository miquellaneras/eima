<script lang="ts">
  import { slide } from 'svelte/transition';
  import { WEB_WHATSAPP_HREF } from '$lib/data/whatsapp';

  type Faq = {
    q: string;
    a: string[];
    icon: string;
    cta?: string;
  };

  const waLink = (_text: string) => WEB_WHATSAPP_HREF;
  const inlineCaseLink = `<a class="faq-inline-link" href="${waLink('Quiero contaros mi caso')}" target="_blank" rel="noopener noreferrer"><span class="faq-inline-link__word">aquí</span> <span class="faq-inline-link__arrow">↗</span></a>`;
  const inlineReviewLink = `<a class="faq-inline-link" href="${waLink('Quiero que reviséis mi situación antes de empezar')}" target="_blank" rel="noopener noreferrer"><span class="faq-inline-link__word">aquí</span> <span class="faq-inline-link__arrow">↗</span></a>`;
  const inlineSituationLink = `<a class="faq-inline-link" href="${waLink('Quiero explicaros mi situación')}" target="_blank" rel="noopener noreferrer"><span class="faq-inline-link__word">aquí</span> <span class="faq-inline-link__arrow">↗</span></a>`;
  const inlineAskLink = `<a class="faq-inline-link" href="${waLink('Quiero preguntaros si es buen momento para empezar')}" target="_blank" rel="noopener noreferrer"><span class="faq-inline-link__word">aquí</span> <span class="faq-inline-link__arrow">↗</span></a>`;
  const inlineWriteLink = `<a class="faq-inline-link" href="${waLink('Quiero escribiros para saber si podéis ayudarme')}" target="_blank" rel="noopener noreferrer"><span class="faq-inline-link__word">aquí</span> <span class="faq-inline-link__arrow">↗</span></a>`;

  const rawFaqs: Faq[] = [
    {
      q: '¿Es <strong>seguro hacer ejercicio</strong> durante el tratamiento del cáncer (quimioterapia o radioterapia)?',
      a: [
        'En la mayoría de casos, <strong>sí.</strong> Hacer ejercicio durante el tratamiento oncológico puede ser seguro cuando está <strong>adaptado</strong> a tu situación, tus síntomas y el momento de tu tratamiento.',
        'Por eso en Empenta no trabajamos con pautas genéricas. Primero <strong>valoramos tu caso</strong>, entendemos cómo estás y <strong>ajustamos el ejercicio a ti, no tú al ejercicio.</strong>',
        'La idea no es exigirte más porque sí, sino ayudarte a <strong>moverte con criterio y seguridad, para que el ejercicio sume</strong> dentro del proceso en lugar de convertirse en una carga más.',
        'Si esta es una de las dudas que te frena, podemos orientarte antes de empezar.'
      ],
      cta: 'Quiero saber si esto encaja conmigo',
      icon: 'M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.26,47,25.53a8,8,0,0,0,4.2,0c1-.27,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm-34.32,69.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z'
    },
    {
      q: '¿Necesito la <strong>derivación de mi oncólogo</strong> para empezar este programa de ejercicio?',
      a: [
        'No pasa nada. Lo importante no es que tu oncólogo conozca el nombre del programa, sino que el ejercicio esté bien adaptado a tu situación clínica real.',
        'En la valoración inicial <strong>revisamos la información médica</strong> que tengas disponible: informes, analíticas, PET-TAC, electrocardiogramas, pruebas recientes, medicación e indicaciones específicas de tu equipo médico.',
        'Empenta no va por libre. Cuando sea necesario y posible, y siempre con tu autorización, <strong>podemos coordinarnos con tu oncólogo/a para compartir tu evolución</strong> y ajustar mejor el plan según el momento del tratamiento: quimioterapia, inmunoterapia, radioterapia o cirugía.',
        'La idea es formar un pequeño <strong>equipo alrededor de ti</strong>: que oncología tenga información útil sobre tu evolución y que nosotros podamos adaptar el ejercicio a lo que esté ocurriendo en tu tratamiento.',
        `Si quieres que revisemos tu situación antes de empezar, puedes verlo ${inlineReviewLink}.`
      ],
      icon: 'M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm32,128H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z'
    },
    {
      q: '¿El ejercicio puede ayudarme con la <strong>fatiga oncológica?</strong>',
      a: [
        'Sí. El ejercicio adaptado puede ayudar a muchas personas con cáncer a manejar mejor la <strong>fatiga oncológica</strong>, especialmente cuando se ajusta a su nivel de energía, síntomas y momento del tratamiento.',
        'La fatiga oncológica no es simplemente estar cansado. A veces aparece aunque hayas descansado, y puede hacer que <strong>tareas normales</strong> —caminar, ducharte, salir de casa o subir unas escaleras— se sientan <strong>más pesadas de lo habitual.</strong>',
        'No significa que el cansancio desaparezca de golpe, ni que todos los días vayas a sentirte igual. Pero con una pauta bien ajustada, el ejercicio puede ayudarte a conservar <strong>fuerza</strong>, tolerar mejor el <strong>esfuerzo</strong> y sentir que recuperas algo de <strong>control</strong> sobre tu cuerpo.',
        'Si la fatiga te está limitando, podemos ayudarte a valorar por dónde empezar.'
      ],
      cta: 'Quiero orientación para empezar',
      icon: 'M88,8a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,8Zm72,176H96a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V192A8,8,0,0,0,160,184ZM200,56V224a24,24,0,0,1-24,24H80a24,24,0,0,1-24-24V56A24,24,0,0,1,80,32h96A24,24,0,0,1,200,56Zm-16,0a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8V224a8,8,0,0,0,8,8h96a8,8,0,0,0,8-8Z'
    },
    {
      q: '¿Puedo hacer ejercicio si tengo <strong>metástasis, dolor o anemia</strong> por el cáncer?',
      a: [
        '<strong>Precisamente por eso no damos pautas genéricas.</strong>',
        'Si tienes dolor, anemia, metástasis óseas, bajada importante de defensas, neuropatía u otros efectos secundarios del tratamiento, el ejercicio no se elimina automáticamente, pero sí <strong>debe adaptarse con más precisión.</strong>',
        'En algunos casos habrá que bajar la intensidad. En otros, cambiar el tipo de ejercicio, reducir la duración, modificar posiciones o evitar ciertos movimientos. Y en momentos concretos, puede tener sentido pausar, priorizar movilidad suave o centrarnos solo en mantener actividad básica.',
        'No se trata de forzar ni de entrenar pase lo que pase. Se trata de encontrar la forma más <strong>segura, útil y realista</strong> de moverte según tu situación actual.',
        `Si tienes dudas sobre tu caso concreto, puedes explicarnos tu situación ${inlineSituationLink}.`
      ],
      icon: 'M216,130.16q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.6,107.6,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.29,107.29,0,0,0-26.25-10.86,8,8,0,0,0-7.06,1.48L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.6,107.6,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z'
    },
    {
      q: '<strong>¿Cuándo empezar a hacer ejercicio:</strong> durante o después del tratamiento del cáncer?',
      a: [
        'En general, si tu situación lo permite, suele tener más sentido <strong>empezar poco a poco durante el tratamiento oncológico</strong> que esperar al momento perfecto.',
        'Muchas veces ese momento perfecto tarda mucho en llegar. Y mientras tanto, pueden pasar semanas o meses en los que podrías haber empezado a moverte, aunque fuera poco, para conservar mejor tu <strong>fuerza, movilidad, energía y autonomía.</strong>',
        'No se trata de empezar fuerte, sino de empezar con <strong>una dosis adaptada a ti.</strong> Esperar solo tendría sentido si hay una limitación concreta o una situación clínica que obligue a modificar el plan. Por eso primero valoramos tu caso y, a partir de ahí, decidimos qué tiene sentido para ti.',
        `Si no sabes si es buen momento para empezar, puedes preguntarnos ${inlineAskLink}.`
      ],
      icon: 'M200,75.64V40a16,16,0,0,0-16-16H72A16,16,0,0,0,56,40V76a16.07,16.07,0,0,0,6.4,12.8L114.67,128,62.4,167.2A16.07,16.07,0,0,0,56,180v36a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V180.36a16.09,16.09,0,0,0-6.35-12.77L141.27,128l52.38-39.59A16.09,16.09,0,0,0,200,75.64ZM184,180.36V216H72V180l48-36v24a8,8,0,0,0,16,0V144.08Zm0-104.72L178.23,80H77.33L72,76V40H184Z'
    },
    {
      q: '¿Qué pasa si <strong>nunca he hecho ejercicio</strong> y me diagnostican cáncer?',
      a: [
        'No pasa nada. Empenta también está pensado para personas que <strong>nunca han hecho ejercicio</strong> o que llevan mucho tiempo sin moverse.',
        'Muchas veces el problema no es la falta de ganas, sino no saber <strong>qué hacer, cuánto hacer o cómo empezar sin miedo.</strong> Y cuando todo parece demasiado confuso, es fácil bloquearse y acabar sin hacer nada.',
        'Por eso no buscamos que lo hagas perfecto desde el primer día. Primero entendemos tu punto de partida, te explicamos cómo funciona todo y empezamos con una <strong>dosis asumible para ti.</strong>',
        `Si partes de cero, puedes contarnos tu caso ${inlineCaseLink} y vemos si este programa encaja contigo.`
      ],
      icon: 'M216.06,192v12A36,36,0,0,1,144,204V192a8,8,0,0,1,8-8h56A8,8,0,0,1,216.06,192ZM104,160h-56a8,8,0,0,0-8,8v12A36,36,0,0,0,112,180V168A8,8,0,0,0,104,160ZM76,16C64.36,16,53.07,26.31,44.2,45c-13.93,29.38-18.56,73,.29,96a8,8,0,0,0,6.2,2.93h50.55a8,8,0,0,0,6.2-2.93c18.85-23,14.22-66.65.29-96C98.85,26.31,87.57,16,76,16Zm78.8,152h50.55a8,8,0,0,0,6.2-2.93c18.85-23,14.22-66.65.29-96C202.93,50.31,191.64,40,180,40s-22.89,10.31-31.77,29c-13.93,29.38-18.56,73,.29,96A8,8,0,0,0,154.76,168Z'
    },
    {
      q: '¿Qué pasa si una semana <strong>me encuentro peor?</strong>',
      a: [
        'Si una semana te encuentras peor, <strong>nos avisas y ajustamos el plan.</strong> No tienes que esperar a la siguiente cita para saber qué hacer, qué reducir o qué evitar.',
        'Durante el tratamiento hay semanas mejores y semanas más difíciles. Por eso el ejercicio <strong>no puede ser rígido.</strong>',
        'Si tienes más fatiga, dolor, mal descanso, efectos secundarios o menos energía, bajamos la carga, modificamos los ejercicios o cambiamos el objetivo de esa semana. Ya <strong>volveremos a progresar cuando tu cuerpo esté preparado.</strong>',
        'La idea no es que tú encajes en una rutina cerrada, sino que <strong>el plan encaje contigo.</strong> Nuestro objetivo es que puedas seguir avanzando sin sentir que estás fallando cada vez que tienes una semana complicada.'
      ],
      cta: 'Quiero saber cómo sería mi plan',
      icon: 'M224,128a96,96,0,0,1-94.71,96H128A95.38,95.38,0,0,1,62.1,197.8a8,8,0,0,1,11-11.63A80,80,0,1,0,71.43,71.39a3.07,3.07,0,0,1-.26.25L60.63,81.29l17,17A8,8,0,0,1,72,112H24a8,8,0,0,1-8-8V56A8,8,0,0,1,29.66,50.3L49.31,70,60.25,60A96,96,0,0,1,224,128Z'
    },
    {
      q: '¿La valoración es <strong>presencial</strong> o todo es <strong>online?</strong>',
      a: [
        '<strong>La valoración inicial</strong> la hacemos <strong>de forma presencial</strong> en tu casa, para conocerte bien antes de pautar ejercicio. En esa primera visita revisamos tu situación, tus síntomas, tus limitaciones, el momento del proceso oncológico y tu punto de partida físico.',
        'Después, el <strong>seguimiento del programa</strong> es principalmente <strong>online</strong>. Esto nos permite ajustar mejor el ejercicio a tu energía, síntomas y horarios, sin añadir más desplazamientos innecesarios.',
        'Mucha gente piensa que online significa distante. En Empenta lo usamos justo para lo contrario: para poder estar más pendientes de <strong>cómo evolucionas entre una visita y otra.</strong>',
        'Antes de empezar, te explicamos cómo sería el proceso en tu caso.'
      ],
      cta: 'Quiero que me expliquéis el proceso',
      icon: 'M240,208H224V136l2.34,2.34A8,8,0,0,0,237.66,127L139.31,28.68a16,16,0,0,0-22.62,0L18.34,127a8,8,0,0,0,11.32,11.31L32,136v72H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16Zm-88,0H104V160a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4Z'
    },
    {
      q: '¿Y si tengo <strong>dudas</strong> o no se me da bien la <strong>tecnología?</strong>',
      a: [
        '<strong>No estarás solo/a.</strong> Durante el proceso tendrás acompañamiento para resolver dudas, ajustar el ejercicio y revisar cómo vas evolucionando.',
        'Si no sabes si estás haciendo bien un ejercicio, si una semana tienes más fatiga, si aparece algún dolor o si algo te preocupa, <strong>no tienes que quedarte con la duda.</strong>',
        'Y si la tecnología no se te da bien, tampoco pasa nada. Te lo explicamos <strong>paso a paso</strong> y usamos <strong>herramientas sencillas.</strong> No necesitas dominar ninguna aplicación para poder empezar. Y si al principio necesitas que te ayude un familiar, puede participar sin ningún problema.',
        'La parte online no está pensada para complicarte la vida, sino para <strong>acompañarte mejor sin obligarte a desplazarte más.</strong>',
        'Si esto es una de las cosas que te frena, lo vemos contigo desde el principio.'
      ],
      cta: 'Quiero resolver mis dudas',
      icon: 'M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm32,128H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z'
    },
    {
      q: '¿El ejercicio físico <strong>sustituye al tratamiento médico</strong> contra el cáncer?',
      a: [
        'No. Empenta no sustituye a la oncología ni a la medicación, la quimioterapia, la radioterapia, la cirugía, la inmunoterapia ni ningún tratamiento indicado por tu equipo médico.',
        'No es elegir entre tratamiento médico o ejercicio. Es <strong>unir fuerzas contra el cáncer.</strong>',
        'El tratamiento oncológico se dirige contra la enfermedad. El ejercicio adaptado busca <strong>ayudarte a cuidar el resto</strong>: tus músculos, tu energía, tu movilidad, tu sistema inmune, tu metabolismo, tu tolerancia al esfuerzo y tu autonomía.',
        'La idea es <strong>crear sinergia.</strong> Que el tratamiento médico haga su parte contra el cáncer y que el ejercicio —junto con otros pilares como la nutrición, el descanso, la gestión emocional y la reducción de tóxicos— ayude a que tu cuerpo llegue al proceso en las mejores condiciones posibles dentro de tu situación.',
        `Si quieres saber cómo podríamos ayudarte sin interferir con tu tratamiento, puedes escribirnos ${inlineWriteLink}.`
      ],
      icon: 'M64.12,147.8a4,4,0,0,1-4,4.2H16a8,8,0,0,1-7.8-6.17,8.35,8.35,0,0,1,1.62-6.93A67.79,67.79,0,0,1,37,117.51a40,40,0,1,1,66.46-35.8,3.94,3.94,0,0,1-2.27,4.18A64.08,64.08,0,0,0,64,144C64,145.28,64,146.54,64.12,147.8Zm182-8.91A67.76,67.76,0,0,0,219,117.51a40,40,0,1,0-66.46-35.8,3.94,3.94,0,0,0,2.27,4.18A64.08,64.08,0,0,1,192,144c0,1.28,0,2.54-.12,3.8a4,4,0,0,0,4,4.2H240a8,8,0,0,0,7.8-6.17A8.33,8.33,0,0,0,246.17,138.89Zm-89,43.18a48,48,0,1,0-58.37,0A72.13,72.13,0,0,0,65.07,212,8,8,0,0,0,72,224H184a8,8,0,0,0,6.93-12A72.15,72.15,0,0,0,157.19,182.07Z'
    }
  ];

  const faqs: Faq[] = [
    rawFaqs[0],
    rawFaqs[2],
    rawFaqs[1],
    rawFaqs[9],
    rawFaqs[7],
    rawFaqs[8],
    rawFaqs[3],
    rawFaqs[4],
    rawFaqs[5],
    rawFaqs[6]
  ];

  function htmlToText(value: string) {
    return value
      .replace(/<[^>]*>/g, ' ')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/\s+/g, ' ')
      .trim();
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: htmlToText(faq.q),
      acceptedAnswer: {
        '@type': 'Answer',
        text: htmlToText(faq.a.join(' '))
      }
    }))
  };

  const faqSchemaHtml = `<script type="application/ld+json">${JSON.stringify(faqSchema).replace(/</g, '\\u003c')}<\/script>`;

  let openIndex: number | null = 0;

  function revealOnScroll(node: HTMLElement) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.dataset.visible = 'true';
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -5% 0px' }
    );

    observer.observe(node);

    return {
      destroy() {
        observer.disconnect();
      }
    };
  }

  function toggle(index: number) {
    openIndex = openIndex === index ? null : index;
  }
</script>

<svelte:head>
  {@html faqSchemaHtml}
</svelte:head>

<section id="faq" class="bg-[#f8f4f0] pb-16 pt-10 md:pb-22 md:pt-12">
  <div class="mx-auto max-w-5xl px-6 md:px-10">
    <header class="mx-auto max-w-3xl text-center">
      <p class="mb-3 text-[16px] font-light leading-relaxed text-[#233F4E]/76">Preguntas frecuentes</p>
      <h2
        class="faq-title text-[35px] font-medium leading-[1.06] tracking-[0] text-[#233F4E] md:text-[48px]"
        style="font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;"
      >
        <span class="text-[#4083A7]" style="font-family: inherit;">Dudas habituales</span><br class="md:hidden" />
        sobre<br class="hidden md:block" />
        nuestro programa<br class="md:hidden" />
        Empenta
      </h2>
    </header>

    <div class="mt-10 flex flex-col gap-3 md:mt-12">
      {#each faqs as faq, index}
        <article
          use:revealOnScroll
          class={`faq-reveal faq-card overflow-hidden rounded-[14px] transition-all duration-300 ${
            openIndex === index
              ? 'border-2 border-[#4083A7] bg-white shadow-[0_16px_34px_rgba(14,29,38,0.10)]'
              : 'border-2 border-transparent bg-white shadow-[0_10px_24px_rgba(14,29,38,0.06)] hover:border-[#4083A7] hover:shadow-[0_14px_30px_rgba(14,29,38,0.09)]'
          }`}
          style={`--reveal-delay: ${Math.min(index, 5) * 70}ms`}
        >
          <button
            type="button"
            class={`faq-trigger group flex w-full items-center gap-4 px-5 py-4 text-left transition-colors duration-300 md:px-6 md:py-3 ${
              openIndex === index ? 'bg-[#4083A7] text-white' : 'bg-white text-[#4083A7]'
            }`}
            on:click={() => toggle(index)}
            aria-expanded={openIndex === index}
          >
            <span
              class={`flex h-12 w-12 shrink-0 items-center justify-center md:h-10 md:w-10 ${
                openIndex === index ? 'text-white' : 'text-[#4083A7]'
              }`}
              aria-hidden="true"
            >
              <svg viewBox="0 0 256 256" class="h-11 w-11 fill-current md:h-9 md:w-9">
                <path d={faq.icon}></path>
              </svg>
            </span>

            <span
              class={`faq-question flex-1 text-[16px] leading-[1.3] md:text-[16px] ${
                openIndex === index ? 'text-white' : 'text-[#4083A7]'
              }`}
            >
              {@html faq.q}
            </span>

            <span
              class={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-250 ${
                openIndex === index
                  ? 'border-white bg-white text-[#4083A7] rotate-180'
                  : 'border-[#4083A7] bg-white text-[#4083A7] group-hover:bg-[#4083A7] group-hover:text-white'
              }`}
              aria-hidden="true"
            >
              <span class="material-symbols-rounded !text-[20px]">expand_more</span>
            </span>
          </button>

          {#if openIndex === index}
            <div
              class="px-5 pb-5 pt-4 md:px-6"
              in:slide={{ duration: 340 }}
              out:slide={{ duration: 280 }}
            >
              <div class="faq-answer text-[14px] font-light leading-[1.75] text-[#245B7D] md:text-[14px]">
                {#each faq.a as paragraph}
                  <p>{@html paragraph}</p>
                {/each}

                {#if faq.cta}
                  <div class="mt-5">
                    <a
                      href={waLink(faq.cta)}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="faq-cta inline-flex w-fit items-center justify-center self-center rounded-full bg-[#8CD0D6] px-5 py-2.5 text-center text-[14px] font-medium text-[#233F4E] transition-[transform,background-color,color,font-weight,box-shadow] duration-300 ease-out hover:scale-[1.03] hover:bg-[#4083A7] hover:font-bold hover:text-white hover:shadow-[0_10px_24px_rgba(64,131,167,0.28)]"
                    >
                      <span class="faq-cta__label">{faq.cta}</span>
                    </a>
                  </div>
                {/if}
              </div>
            </div>
          {/if}
        </article>
      {/each}
    </div>

    <div class="faq-bottom-cta mx-auto mt-10 flex max-w-3xl flex-col items-center justify-center gap-4 text-center md:mt-12 md:flex-row md:gap-6 md:text-left">
      <p class="text-[16px] font-light leading-relaxed text-[#233F4E]">
        ¿Todavía tienes dudas?
      </p>

      <a
        href={WEB_WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        class="faq-call-cta inline-flex w-fit items-center justify-center gap-2 rounded-full bg-[#8CD0D6] px-6 py-3 text-[15px] font-medium text-[#233F4E] shadow-[0_10px_24px_rgba(14,29,38,0.10)] transition-[transform,background-color,color,font-weight,box-shadow] duration-300 ease-out hover:scale-[1.03] hover:bg-[#4083A7] hover:font-bold hover:text-white hover:shadow-[0_12px_28px_rgba(64,131,167,0.28)]"
      >
        <svg class="h-[18px] w-[18px]" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
          <path
            d="M380.9 97.1C339 55.1 283.2 32 223.9 32 101.4 32 1.9 131.5 1.9 254c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.4 0 222-99.5 222-222 0-59.3-23.1-115-65-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 54 81.2 54 130.4-.1 101.8-82.9 184.7-184.5 184.7zm101.2-138.1c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.5-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.5-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.8 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.5z"
          />
        </svg>
        <span>Escríbenos</span>
      </a>
    </div>
  </div>
</section>

<style>
  .faq-title,
  .faq-title * {
    font-family: 'Playfair Display', Georgia, 'Times New Roman', serif !important;
  }

  section {
    scroll-margin-top: 96px;
  }

  .faq-question {
    font-family: Inter, system-ui, sans-serif !important;
    font-weight: 400;
  }

  .faq-question :global(strong) {
    font-weight: 700;
  }

  .faq-answer,
  .faq-answer * {
    font-family: Inter, system-ui, sans-serif !important;
    font-weight: 300;
  }

  .faq-answer :global(strong) {
    font-weight: 700 !important;
    color: inherit;
  }

  .faq-answer p + p {
    margin-top: 0.95rem;
  }

  .faq-card {
    will-change: transform, opacity, filter;
  }

  .faq-reveal {
    opacity: 0;
    transform: translate3d(0, 24px, 0);
    transition:
      opacity 560ms ease-out,
      transform 560ms ease-out,
      border-color 300ms ease-out,
      box-shadow 300ms ease-out,
      background-color 300ms ease-out;
    transition-delay: var(--reveal-delay, 0ms);
  }

  :global(.faq-reveal[data-visible='true']) {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  .faq-answer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .faq-answer p {
    width: 100%;
  }

  .faq-answer :global(.faq-inline-link) {
    border-bottom: 1px dotted currentColor;
    color: #4083a7;
    display: inline;
    font-weight: 500;
    padding-bottom: 0.06em;
    text-decoration: none !important;
    transition: color 220ms ease;
  }

  .faq-answer :global(.faq-inline-link__word) {
    display: inline;
  }

  .faq-answer :global(.faq-inline-link:hover) {
    color: #233f4e;
  }

  .faq-answer :global(.faq-inline-link__arrow) {
    font-size: 0.92em;
    line-height: 1;
    margin-left: 0.18rem;
  }

  .faq-cta {
    isolation: isolate;
    overflow: hidden;
    position: relative;
  }

  .faq-cta::before {
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.55), transparent);
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform: translateX(-180%) skewX(-18deg);
    transition: transform 420ms ease-out;
    width: 44%;
    z-index: 0;
  }

  .faq-cta:hover::before {
    transform: translateX(260%) skewX(-18deg);
  }

  .faq-cta__label {
    position: relative;
    z-index: 1;
  }

  .faq-call-cta {
    isolation: isolate;
    overflow: hidden;
    position: relative;
  }

  .faq-call-cta::before {
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.55), transparent);
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform: translateX(-180%) skewX(-18deg);
    transition: transform 420ms ease-out;
    width: 44%;
    z-index: 0;
  }

  .faq-call-cta:hover::before {
    transform: translateX(260%) skewX(-18deg);
  }

  .faq-call-cta span,
  .faq-call-cta svg {
    position: relative;
    z-index: 1;
  }

  @media (prefers-reduced-motion: reduce) {
    .faq-reveal,
    .faq-card,
    .faq-cta,
    .faq-cta::before,
    .faq-call-cta,
    .faq-call-cta::before {
      transition: none;
    }

    .faq-reveal {
      opacity: 1;
      transform: none;
    }
  }
</style>


