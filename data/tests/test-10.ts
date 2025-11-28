
import type { Test } from '../../types';

export const TEST_10: Test = {
  id: 'test-10',
  title: 'Test 10: JVP y Conducta Humana (Temas 46-50)',
  questions: [
    // Tema 46: Jurisdicción de Vigilancia
    { 
      questionText: 'El Juez de Vigilancia Penitenciaria tiene competencia para:', 
      options: ['Dictar sentencia condenatoria', 'Resolver quejas sobre el régimen y tratamiento penitenciario', 'Detener a los delincuentes', 'Nombrar al Director del centro'], 
      correctAnswer: 1,
      explanation: 'El artículo 76 de la LOGP atribuye al Juez de Vigilancia la función de salvaguardar los derechos de los internos y corregir los abusos y desviaciones que puedan producirse en el cumplimiento de los preceptos del régimen penitenciario.'
    },
    { 
      questionText: 'Las resoluciones del Juez de Vigilancia en materia de clasificación de grado son recurribles ante:', 
      options: ['El Tribunal Constitucional', 'El Juez de Instrucción', 'El Tribunal sentenciador (apelación)', 'El Ministerio del Interior'], 
      correctAnswer: 2,
      explanation: 'La Disposición Adicional Quinta de la LOPJ establece que los recursos de apelación contra las resoluciones del Juez de Vigilancia en materia de clasificación de grado corresponderán al Tribunal sentenciador.'
    },
    
    // Tema 47: Recursos y reclamaciones
    { 
      questionText: 'Los internos pueden formular quejas y peticiones a:', 
      options: ['Solo al Director', 'Al Director, Juez de Vigilancia, Defensor del Pueblo, etc.', 'Solo a su abogado', 'A la prensa directamente'], 
      correctAnswer: 1,
      explanation: 'El artículo 53 del Reglamento Penitenciario reconoce el derecho de los internos a formular peticiones y quejas ante el Director, la Administración Penitenciaria, el Juez de Vigilancia, el Defensor del Pueblo, etc.'
    },
    { 
      questionText: '¿Qué recurso cabe contra las sanciones disciplinarias impuestas por la Comisión Disciplinaria?', 
      options: ['Alzada ante el Director', 'Queja/Recurso ante el Juez de Vigilancia Penitenciaria', 'Reposición ante la misma Comisión', 'No cabe recurso'], 
      correctAnswer: 1,
      explanation: 'El artículo 76.2.d) de la LOGP establece que corresponde al Juez de Vigilancia resolver por vía de recurso las reclamaciones que formulen los internos sobre sanciones disciplinarias.'
    },
    
    // Tema 48: Bases de la conducta humana
    { 
      questionText: 'En el esquema E-O-R (Estímulo-Organismo-Respuesta), el aprendizaje:', 
      options: ['No influye', 'Modifica la estructura del organismo y sus futuras respuestas', 'Es genético', 'Solo depende del estímulo'], 
      correctAnswer: 1,
      explanation: 'En psicología, el aprendizaje se entiende como un cambio relativamente permanente en la conducta o en la capacidad de conducta (modificación del Organismo) resultado de la experiencia.'
    },
    { 
      questionText: '¿Qué variable influye directamente en la conducta según la psicología básica?', 
      options: ['La motivación', 'El clima meteorológico exclusivamente', 'La ropa', 'El nombre de la persona'], 
      correctAnswer: 0,
      explanation: 'La motivación es uno de los procesos psicológicos básicos que activa, dirige y mantiene la conducta hacia una meta.'
    },
    
    // Tema 49: Subcultura carcelaria
    { 
      questionText: 'El concepto de "prisionización" definido por Clemmer hace referencia a:', 
      options: ['La construcción de prisiones', 'La asimilación por el interno de los usos, costumbres y cultura de la prisión', 'El intento de fuga', 'La condena penal'], 
      correctAnswer: 1,
      explanation: 'Donald Clemmer definió la prisionización como la asimilación por parte de los internos de la cultura, costumbres, normas y valores propios de la comunidad penitenciaria.'
    },
    { 
      questionText: 'Uno de los efectos de la prisionización es:', 
      options: ['Aumento de la autoestima', 'Pérdida de autonomía e iniciativa (institucionalización)', 'Mejora de las habilidades laborales', 'Mayor libertad'], 
      correctAnswer: 1,
      explanation: 'La prisionización conlleva efectos como la pérdida de autonomía, la dependencia institucional, la asunción del rol de enfermo/interno y la desculturación.'
    },
    
    // Tema 50: Habilidades sociales
    { 
      questionText: 'La asertividad se define como:', 
      options: ['La capacidad de imponer la propia voluntad a gritos', 'La capacidad de expresar opiniones y sentimientos de forma adecuada, respetando los derechos propios y ajenos', 'La sumisión ante la autoridad', 'La indiferencia'], 
      correctAnswer: 1,
      explanation: 'La asertividad es una habilidad social que consiste en la capacidad de autoafirmar los propios derechos, opiniones y sentimientos de manera adecuada, sin agredir a los demás ni someterse a ellos.'
    },
    { 
      questionText: 'En la comunicación, la "escucha activa" implica:', 
      options: ['Oír sin prestar atención', 'Interrumpir constantemente', 'Prestar atención, comprender y dar feedback al interlocutor', 'Mirar hacia otro lado'], 
      correctAnswer: 2,
      explanation: 'La escucha activa es una técnica de comunicación que requiere prestar atención completa al interlocutor, comprender su mensaje (verbal y no verbal) y demostrarle que se le está escuchando (feedback).'
    },
  ]
};
