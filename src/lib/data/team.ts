export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  specialty: string;
};

export const team: TeamMember[] = [
  {
    id: 'jaume',
    name: 'Jaume Sansó Servera',
    role: 'Fisioterapeuta · Ejercicio y cáncer',
    specialty: 'Ejercicio terapéutico en paciente oncológico',
    bio: 'Más de siete años de experiencia en el ámbito hospitalario acompañando a personas durante y después del cáncer. Apasionado por el ejercicio como herramienta para recuperar fuerza, energía e independencia.'
  },
  {
    id: 'miquel',
    name: 'Miquel Galmés Vives',
    role: 'Fisioterapeuta · Ejercicio y dolor oncológico',
    specialty: 'Dolor persistente y dolor oncológico',
    bio: 'Especializado en el abordaje del dolor persistente y del dolor oncológico. Cree en un acompañamiento cercano, basado en la evidencia y en el compromiso de la persona con su propio proceso.'
  }
];
