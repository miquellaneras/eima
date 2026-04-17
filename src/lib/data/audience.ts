export type AudienceItem = {
  icon: string;
  title: string;
  description: string;
};

export const audience: AudienceItem[] = [
  {
    icon: 'directions_walk',
    title: 'Nunca has hecho ejercicio',
    description:
      'Te gustaría moverte más pero no sabes por dónde empezar o te da respeto hacerlo solo. Partimos desde cero, a tu ritmo.'
  },
  {
    icon: 'fitness_center',
    title: 'Haces ejercicio pero tienes dudas',
    description:
      'Te mueves, pero no tienes claro si lo haces bien, si es suficiente o si es adecuado para tu situación actual.'
  },
  {
    icon: 'healing',
    title: 'Quieres moverte pero el dolor te frena',
    description:
      'El dolor, la fatiga o el miedo a empeorar te están limitando. Te ayudamos a recuperar movimiento sin miedo.'
  }
];

export const valueProps = [
  {
    icon: 'home',
    title: 'Desde casa, sin desplazamientos',
    description: 'Nosotros vamos a ti. Ahorras tiempo y energía para lo que importa.'
  },
  {
    icon: 'person',
    title: 'Atención personalizada',
    description: 'Una sesión, un profesional, tu plan. Sin cintas transportadoras.'
  },
  {
    icon: 'verified',
    title: 'Más de 7 años en hospital',
    description: 'Experiencia real acompañando a pacientes oncológicos en el sistema público.'
  },
  {
    icon: 'self_improvement',
    title: 'Pensado para tu autonomía',
    description: 'Nuestro objetivo no es que nos necesites, sino que dejes de hacerlo.'
  },
  {
    icon: 'science',
    title: 'Basado en la evidencia',
    description: 'Cada decisión tiene un porqué. Si no funciona, lo cambiamos.'
  }
];
