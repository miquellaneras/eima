export type ProcessStep = {
  n: number;
  icon: string;
  title: string;
  description: string;
};

export const process: ProcessStep[] = [
  {
    n: 1,
    icon: 'hearing',
    title: 'Te escuchamos',
    description:
      'Primera conversación sin compromiso para entender tu historia, tus síntomas y lo que esperas conseguir.'
  },
  {
    n: 2,
    icon: 'home',
    title: 'Valoración en casa',
    description:
      'Nos desplazamos a tu domicilio para valorar cómo te mueves, qué necesitas y qué espacio tenemos disponible.'
  },
  {
    n: 3,
    icon: 'tune',
    title: 'Tratamiento adaptado',
    description:
      'Diseñamos un tratamiento a tu medida, combinando ejercicio terapéutico, terapia manual y educación.'
  },
  {
    n: 4,
    icon: 'flag',
    title: 'Plan de acción y seguimiento',
    description:
      'Definimos objetivos claros, reevaluamos periódicamente y ajustamos el plan para que siempre avance contigo.'
  }
];
