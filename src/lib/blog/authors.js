export const AUTHORS = {
  jaume: {
    id: 'jaume',
    name: 'Jaume Sansó Servera',
    role: 'Fisioterapeuta · Ejercicio y cáncer',
    jobTitle: 'Fisioterapeuta especializado en ejercicio terapéutico y cáncer',
    bio: 'Fisioterapeuta con más de siete años de experiencia hospitalaria acompañando a personas durante y después del cáncer.',
    url: 'https://eimafisioterapia.es/quienes-somos',
    sameAs: 'https://www.instagram.com/eima.fisioterapia'
  },
  miquel: {
    id: 'miquel',
    name: 'Miquel Galmés Vives',
    role: 'Fisioterapeuta · Ejercicio y dolor oncológico',
    jobTitle: 'Fisioterapeuta especializado en dolor persistente y dolor oncológico',
    bio: 'Fisioterapeuta especializado en el abordaje del dolor persistente y del dolor oncológico desde el movimiento y la educación.',
    url: 'https://eimafisioterapia.es/quienes-somos',
    sameAs: 'https://www.instagram.com/eima.fisioterapia'
  }
};

export function getAuthor(id) {
  return AUTHORS[id] ?? AUTHORS.jaume;
}
