export type Service = {
  slug: string;
  icon: string;
  title: string;
  short: string;
  description: string;
};

export const services: Service[] = [
  {
    slug: 'cancer',
    icon: 'favorite',
    title: 'Ejercicio y fisioterapia durante el cáncer',
    short:
      'Te acompañamos antes, durante y después del tratamiento oncológico con un plan seguro y progresivo.',
    description:
      'El ejercicio terapéutico mejora la fatiga, la fuerza y la calidad de vida durante y después del cáncer. Trabajamos de forma personalizada, respetando tus tiempos, tus síntomas y tu estado emocional.'
  },
  {
    slug: 'dolor-cronico',
    icon: 'healing',
    title: 'Dolor crónico y oncológico',
    short:
      'Recuperamos movimiento y confianza cuando el dolor lleva tiempo limitando tu vida.',
    description:
      'Abordamos el dolor persistente desde una visión moderna: el cuerpo, la mente y el día a día. Te damos herramientas para que el movimiento vuelva a ser algo seguro y disfrutable.'
  },
  {
    slug: 'ejercicio-terapeutico',
    icon: 'fitness_center',
    title: 'Ejercicio terapéutico basado en la evidencia',
    short:
      'Planes de ejercicio adaptados a ti, que funcionan porque tienen sentido para tu cuerpo.',
    description:
      'Nada de recetas genéricas. Analizamos cómo te mueves, qué necesitas y diseñamos un plan progresivo que respeta tu punto de partida y te lleva más lejos semana a semana.'
  },
  {
    slug: 'terapia-manual',
    icon: 'back_hand',
    title: 'Terapia manual',
    short: 'Cuando las manos ayudan, las usamos. Siempre acompañadas de movimiento.',
    description:
      'La terapia manual puede ser una herramienta útil para reducir molestias o facilitar el movimiento. Para nosotros es un recurso, nunca el centro del tratamiento.'
  },
  {
    slug: 'educacion-habitos',
    icon: 'school',
    title: 'Educación y hábitos',
    short: 'Entender lo que te pasa es el primer paso para mejorar.',
    description:
      'Dedicamos tiempo a explicarte qué ocurre en tu cuerpo y por qué hacemos lo que hacemos. Así las decisiones no dependen del fisio: dependen de ti.'
  },
  {
    slug: 'centro-salud-virtual',
    icon: 'videocam',
    title: 'Centro de Salud Virtual',
    short: 'Seguimiento online para continuar el trabajo entre sesiones.',
    description:
      'Cuando vivir lejos o la agenda complican las visitas presenciales, podemos seguir acompañándote en formato online, con planes personalizados y revisiones periódicas.'
  }
];
