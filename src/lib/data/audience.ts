import { WEB_WHATSAPP_MESSAGE } from '$lib/data/whatsapp';

export type AudienceItem = {
  letter: string;
  quote: string;
  actionLines: string[];
  whatsappMessage: string;
};

export const audience: AudienceItem[] = [
  {
    letter: 'A',
    quote: '“No he hecho ejercicio nunca y no sé por dónde empezar.”',
    actionLines: [
      'Te guiaremos con un plan claro y',
      'progresivo. Empezaremos con',
      'seguridad, sin agobios.'
    ],
    whatsappMessage: WEB_WHATSAPP_MESSAGE
  },
  {
    letter: 'B',
    quote: '“Hago algo por mi cuenta, pero no sé si ahora me conviene.”',
    actionLines: [
      'Ajustaremos tu entrenamiento',
      'para que sea eficaz. Y lo haremos',
      'sostenible para tu día a día.'
    ],
    whatsappMessage: WEB_WHATSAPP_MESSAGE
  },
  {
    letter: 'C',
    quote: '“Sé que moverme me puede ayudar, pero tengo dolor o fatiga.”',
    actionLines: [
      'Aprenderás a moverte con',
      'confianza. Y a progresar sin miedo,',
      'incluso con dolor o fatiga.'
    ],
    whatsappMessage: WEB_WHATSAPP_MESSAGE
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
