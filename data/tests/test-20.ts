
import type { Test } from '../../types';

export const TEST_20: Test = {
  id: 'test-20',
  title: 'Test 20: JVP/Conducta II (46-50)',
  questions: [
    // Tema 46: JVP
    { 
      questionText: 'Para sancionar con aislamiento en celda superior a 14 días se requiere:', 
      options: ['Aprobación del Director', 'Aprobación del Juez de Vigilancia', 'Aprobación del Ministro', 'Visto bueno del médico'], 
      correctAnswer: 1,
      explanation: 'El artículo 42 de la LOGP establece que el aislamiento en celda no podrá exceder de 14 días. Si se imponen sanciones acumuladas que superen este límite, se requerirá la aprobación del Juez de Vigilancia.'
    },
    { 
      questionText: 'La competencia territorial del JVP se determina por:', 
      options: ['El lugar del delito', 'El lugar donde radica el establecimiento penitenciario', 'El domicilio del interno', 'Madrid siempre'], 
      correctAnswer: 1,
      explanation: 'La competencia territorial de los Jueces de Vigilancia Penitenciaria viene determinada por el lugar donde radica el establecimiento penitenciario donde el interno cumple condena.'
    },
    
    // Tema 47: Recursos
    { 
      questionText: 'El plazo para interponer recurso de reforma contra autos del JVP es de:', 
      options: ['3 días', '5 días', '10 días', '15 días'], 
      correctAnswer: 0,
      explanation: 'Según la Ley de Enjuiciamiento Criminal, el recurso de reforma contra los autos de los jueces de instrucción (y por remisión, JVP) se interpondrá en el plazo de tres días.'
    },
    { 
      questionText: '¿Están legitimados los internos para acudir al Defensor del Pueblo?', 
      options: ['No, están presos', 'Sí, libremente y sin censura', 'Solo con permiso del Director', 'Solo a través de abogado'], 
      correctAnswer: 1,
      explanation: 'La Ley Orgánica del Defensor del Pueblo garantiza que toda persona podrá dirigirse al Defensor del Pueblo. La correspondencia con él no podrá ser objeto de censura.'
    },
    
    // Tema 48: Conducta
    { 
      questionText: 'En el condicionamiento operante, el refuerzo positivo busca:', 
      options: ['Disminuir una conducta', 'Aumentar la probabilidad de repetición de una conducta', 'Castigar', 'Ignorar'], 
      correctAnswer: 1,
      explanation: 'En la teoría del condicionamiento operante (Skinner), el refuerzo positivo consiste en presentar un estímulo agradable tras una conducta para aumentar la probabilidad de que ésta se repita.'
    },
    { 
      questionText: 'La Pirámide de Maslow jerarquiza:', 
      options: ['Los delitos', 'Las necesidades humanas', 'Los grados penitenciarios', 'Las leyes'], 
      correctAnswer: 1,
      explanation: 'La pirámide de Maslow es una teoría psicológica que jerarquiza las necesidades humanas, desde las fisiológicas (base) hasta la autorrealización (cúspide).'
    },
    
    // Tema 49: Subcultura
    { 
      questionText: 'Una norma básica del código subcultural recluso ("código del preso") es:', 
      options: ['Colaborar con los funcionarios', 'No "chivarse" o delatar a otros internos', 'Pagar impuestos', 'Ser puntual'], 
      correctAnswer: 1,
      explanation: 'El "código del preso" incluye normas no escritas como no delatar a otros internos ("no chivarse"), desconfiar de los funcionarios y mantener la solidaridad entre reclusos.'
    },
    { 
      questionText: 'La aculturación en prisión se refiere a:', 
      options: ['Aprender cultura general', 'El proceso de pérdida de la cultura propia y asimilación de la carcelaria', 'Hacer cursos', 'Leer libros'], 
      correctAnswer: 1,
      explanation: 'La prisionización o aculturación en prisión implica la asimilación por parte del interno de los valores, normas y pautas de conducta propios de la subcultura carcelaria.'
    },
    
    // Tema 50: Habilidades
    { 
      questionText: 'La comunicación no verbal incluye:', 
      options: ['Solo las palabras escritas', 'Gestos, postura, mirada y tono de voz', 'El correo electrónico', 'El teléfono'], 
      correctAnswer: 1,
      explanation: 'La comunicación no verbal abarca todos los elementos de la comunicación que no son palabras, como el lenguaje corporal (gestos, postura), la expresión facial, el contacto visual y el paralenguaje (tono, volumen).'
    },
    { 
      questionText: 'La empatía se diferencia de la simpatía en que:', 
      options: ['Es lo mismo', 'La empatía implica comprender emocionalmente al otro sin necesariamente compartir su opinión o afecto', 'La empatía es reírse con el otro', 'La simpatía es mala'], 
      correctAnswer: 1,
      explanation: 'La empatía es la capacidad de ponerse en el lugar del otro y comprender sus sentimientos y perspectivas, mientras que la simpatía implica una afinidad o inclinación afectiva hacia alguien.'
    },
  ]
};
