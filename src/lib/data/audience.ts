export type AudienceItem = {
  headline: string;
  subhead: string;
  quote: string;
  action: string;
};

export const audience: AudienceItem[] = [
  {
    headline: 'Nunca has hecho ejercicio.',
    subhead: 'Y no sabes cómo empezar.',
    quote: '"Me han dicho que el ejercicio puede ayudarme. Pero no sé por dónde empezar."',
    action:
      'Te guiaremos con un plan claro y progresivo. Empezaremos con seguridad, sin agobios.'
  },
  {
    headline: 'Sí has hecho ejercicio.',
    subhead: 'Pero dudas si lo haces bien.',
    quote: '"Estoy haciendo algo, pero tengo dudas. Quiero mejorar sin interferir con mis tratamientos."',
    action:
      'Ajustaremos tu entrenamiento para que sea eficaz. Y lo haremos sostenible para tu día a día.'
  },
  {
    headline: 'Quieres hacer ejercicio.',
    subhead: 'Pero el dolor te frena.',
    quote: '"Quiero hacer ejercicio, pero me da miedo empeorar. No sé qué ejercicios me convienen ahora."',
    action:
      'Aprenderás a moverte con confianza. Y a progresar sin miedo, incluso con dolor.'
  }
];

export type ValueProp = {
  title: string;
  bold?: string;
  body: string;
};

export const valueProps: ValueProp[] = [
  {
    title: 'Comodidad real, resultados reales',
    body:
      'Nada como recuperarte donde estás más cómodo: **en casa**. Con **tus horarios** y a **tu ritmo**. Con la fisioterapia a domicilio te eliminamos barreras para que avances con más **facilidad**.'
  },
  {
    title: 'Ganarás tiempo, sin perder salud',
    body:
      'Sin desplazamientos, sin tráfico, sin estrés. Un formato pensado para **priorizar tu tiempo y tu bienestar**.'
  },
  {
    title: 'Atención verdaderamente personalizada',
    body:
      'Una sesión contigo. Un único fisioterapeuta que conoce **tu historia**, tus objetivos y tu forma de moverte. Sin prisas ni salas compartidas.'
  },
  {
    title: 'Experiencia que marca la diferencia',
    body:
      '**+7 años** en hospital nos han enseñado qué funciona: criterio basado en la evidencia y trato humano de verdad. Ese nivel de **calidad** es el que llevamos **a tu casa**.'
  },
  {
    title: 'Independencia, no dependencia',
    body:
      'Queremos **devolverte la seguridad y confianza** para que puedas manejar tu día a día con menos limitaciones. Buscamos que **dependas menos**, no más.'
  }
];
