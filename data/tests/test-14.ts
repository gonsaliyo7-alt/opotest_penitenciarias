
import type { Test } from '../../types';

export const TEST_14: Test = {
  id: 'test-14',
  title: 'Test 14: Presupuesto/Penal II (Temas 16-20)',
  questions: [
    // Tema 16: Presupuesto
    { 
      questionText: '¿Qué principio presupuestario exige que todos los ingresos y gastos se incluyan en un único documento?', 
      options: ['Principio de unidad', 'Principio de especialidad', 'Principio de universalidad', 'Principio de anualidad'], 
      correctAnswer: 0,
      explanation: 'El principio de unidad presupuestaria exige que todos los ingresos y gastos del Estado se incluyan en un único documento para facilitar su control y aprobación.'
    },
    { 
      questionText: 'Los créditos ampliables son aquellos cuya cuantía:', 
      options: ['No puede aumentarse', 'Puede incrementarse en función de la recaudación o reconocimiento de obligaciones específicas', 'Se puede transferir libremente', 'Es secreta'], 
      correctAnswer: 1,
      explanation: 'Los créditos ampliables (art. 54 LGP) son aquellos que pueden incrementarse en función de la efectiva recaudación de los derechos afectados o de las obligaciones específicas que se reconozcan.'
    },
    
    // Tema 17: Interior
    { 
      questionText: 'En la estructura periférica del Estado, ¿quién ejerce el mando de las Fuerzas y Cuerpos de Seguridad del Estado en la provincia?', 
      options: ['El Alcalde', 'El Subdelegado del Gobierno (bajo la dirección del Delegado)', 'El Juez Decano', 'El Presidente de la Diputación'], 
      correctAnswer: 1,
      explanation: 'El Subdelegado del Gobierno ejerce el mando de las Fuerzas y Cuerpos de Seguridad del Estado en la provincia, bajo la superior dirección del Delegado del Gobierno.'
    },
    { 
      questionText: 'La Entidad Estatal Trabajo Penitenciario y Formación para el Empleo (TPFE) tiene personalidad jurídica:', 
      options: ['Pública diferenciada', 'Privada', 'No tiene personalidad jurídica', 'Mixta'], 
      correctAnswer: 0,
      explanation: 'La TPFE es una Entidad Estatal de Derecho Público, con personalidad jurídica pública diferenciada, patrimonio y tesorería propios.'
    },
    
    // Tema 18: Penal I
    { 
      questionText: 'La prohibición de la analogía en Derecho Penal se aplica:', 
      options: ['Siempre', 'Cuando perjudica al reo (in malam partem)', 'Cuando le beneficia', 'Nunca'], 
      correctAnswer: 1,
      explanation: 'El principio de legalidad prohíbe la analogía "in malam partem" (en perjuicio del reo), es decir, aplicar una norma penal a un supuesto no previsto en ella que sea similar.'
    },
    { 
      questionText: 'El principio de intervención mínima implica que el Derecho Penal es:', 
      options: ['La primera opción', 'La ultima ratio (último recurso)', 'Irrelevante', 'Opcional'], 
      correctAnswer: 1,
      explanation: 'El principio de intervención mínima o "ultima ratio" significa que el Derecho Penal solo debe intervenir cuando fallan otros mecanismos de control social menos lesivos (administrativo, civil, etc.) y para proteger los bienes jurídicos más importantes.'
    },
    
    // Tema 19: Penal Tiempo/Espacio
    { 
      questionText: 'Respecto al lugar de comisión del delito, el Código Penal español sigue la teoría de:', 
      options: ['La actividad', 'El resultado', 'La ubicuidad (se considera cometido tanto donde se actúa como donde se produce el resultado)', 'La nacionalidad'], 
      correctAnswer: 2,
      explanation: 'Aunque el Código Penal no lo establece explícitamente para todos los casos, la doctrina y jurisprudencia (Acuerdo TS 2005) se inclinan por la teoría de la ubicuidad para determinar la competencia territorial, considerando cometido el delito tanto donde se realiza la acción como donde se produce el resultado.'
    },
    { 
      questionText: 'El delito se considera cometido:', 
      options: ['En el momento en que se ejecuta la acción u omisión', 'Cuando se produce el resultado', 'Cuando se descubre', 'Cuando se condena'], 
      correctAnswer: 0,
      explanation: 'El artículo 7 del Código Penal establece que los delitos se consideran cometidos en el momento en que el sujeto ejecuta la acción u omite el acto que estaba obligado a realizar (Teoría de la actividad).'
    },
    
    // Tema 20: Omisión y Clasificación
    { 
      questionText: 'Los delitos leves solo se castigan cuando:', 
      options: ['Han sido consumados (salvo excepciones)', 'Son intentados', 'Se piensan', 'Hay conspiración'], 
      correctAnswer: 0,
      explanation: 'El artículo 15 del Código Penal establece que los delitos leves sólo se castigarán cuando hayan sido consumados, excepto los intentados contra las personas o el patrimonio.'
    },
    { 
      questionText: 'El error sobre un hecho constitutivo de la infracción penal se denomina:', 
      options: ['Error de prohibición', 'Error de tipo', 'Error de cálculo', 'Error judicial'], 
      correctAnswer: 1,
      explanation: 'El artículo 14.1 del Código Penal define el error de tipo como el error invencible sobre un hecho constitutivo de la infracción penal, que excluye la responsabilidad criminal.'
    },
  ]
};
