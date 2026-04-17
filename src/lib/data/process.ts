export type ProcessStep = {
  n: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const process: ProcessStep[] = [
  {
    n: 1,
    title: 'Te escuchamos para entender tu situación',
    description:
      'Comprendemos tu caso en detalle: tu historia, tus limitaciones y lo que quieres conseguir. Con esa información definimos el tratamiento y qué es lo que realmente puede ayudarte.',
    image: '/hero.jpg',
    imageAlt: 'Sesión de valoración con el fisioterapeuta'
  },
  {
    n: 2,
    title: 'Valoramos cómo te mueves en casa',
    description:
      'Vamos a tu domicilio para valorar cómo te mueves, qué necesitas y qué espacio tenemos disponible. La valoración es la base de todo lo que viene después.',
    image: '/hero.jpg',
    imageAlt: 'Valoración fisioterapéutica en domicilio'
  },
  {
    n: 3,
    title: 'Diseñamos un tratamiento a tu medida',
    description:
      'Combinamos ejercicio terapéutico, terapia manual y educación. Cada sesión dura entre 50 y 80 minutos y se adapta a cómo te encuentras ese día.',
    image: '/hero.jpg',
    imageAlt: 'Sesión de tratamiento en casa'
  },
  {
    n: 4,
    title: 'Definimos un plan de acción con seguimiento',
    description:
      'Establecemos objetivos claros, reevaluamos periódicamente y ajustamos el plan. El objetivo: que avances siempre — y que cada vez dependas menos de nosotros.',
    image: '/hero.jpg',
    imageAlt: 'Plan de acción y seguimiento'
  }
];
