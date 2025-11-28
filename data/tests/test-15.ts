
import type { Test } from '../../types';

export const TEST_15: Test = {
  id: 'test-15',
  title: 'Test 15: Dº Penal III (Temas 21-25)',
  questions: [
    // Tema 21: Formas delito
    { 
      questionText: 'La inducción consiste en:', 
      options: ['Ayudar al autor', 'Hacer nacer en otro la resolución de cometer un delito', 'Ser testigo del delito', 'Ocultar el delito'], 
      correctAnswer: 1,
      explanation: 'El artículo 28 del Código Penal considera autores a los que inducen directamente a otro u otros a ejecutar el delito. La inducción consiste en hacer nacer en otro la voluntad criminal.'
    },
    { 
      questionText: 'Existe autoría mediata cuando:', 
      options: ['Se realiza el hecho por medio de otro del que se sirve como instrumento', 'Se coopera necesariamente', 'Se conspira', 'Se encubre'], 
      correctAnswer: 0,
      explanation: 'El artículo 28 del Código Penal define la autoría mediata como la realización del hecho por medio de otro del que se sirven como instrumento.'
    },
    
    // Tema 22: Extinción responsabilidad
    { 
      questionText: 'El indulto es una medida de gracia que corresponde otorgar a:', 
      options: ['El Rey (a propuesta del Gobierno)', 'El Juez de Vigilancia', 'El Director de la prisión', 'El Tribunal Constitucional'], 
      correctAnswer: 0,
      explanation: 'El artículo 62.i) de la Constitución atribuye al Rey la función de ejercer el derecho de gracia con arreglo a la ley (Ley de 1870), que no podrá autorizar indultos generales.'
    },
    { 
      questionText: 'El perdón del ofendido extingue la responsabilidad penal en:', 
      options: ['Todos los delitos', 'Delitos leves perseguibles a instancia de parte o cuando la ley lo prevea', 'Delitos graves', 'Ningún caso'], 
      correctAnswer: 1,
      explanation: 'El artículo 130.1.5º del Código Penal establece que el perdón del ofendido extingue la responsabilidad criminal cuando se trate de delitos leves perseguibles a instancias del agraviado o la ley así lo prevea.'
    },
    
    // Tema 23: Penas
    { 
      questionText: 'El sistema de días-multa fija la cuota diaria en función de:', 
      options: ['La gravedad del delito', 'La capacidad económica del reo', 'La edad del reo', 'El coste del juicio'], 
      correctAnswer: 1,
      explanation: 'El artículo 50.5 del Código Penal establece que los jueces o tribunales determinarán la cuota diaria teniendo en cuenta exclusivamente la situación económica del reo.'
    },
    { 
      questionText: 'La localización permanente obliga al penado a permanecer en su domicilio o lugar determinado:', 
      options: ['Solo los fines de semana', 'Hasta 12 meses', 'Hasta 6 meses', 'De por vida'], 
      correctAnswer: 2,
      explanation: 'El artículo 37 del Código Penal establece que la localización permanente tendrá una duración de hasta seis meses.'
    },
    
    // Tema 24: Suspensión
    { 
      questionText: '¿Se puede suspender una pena de prisión superior a 2 años?', 
      options: ['Nunca', 'Excepcionalmente en casos de enfermedad muy grave con padecimientos incurables o drogodependencia (con requisitos)', 'Siempre si es primario', 'Si paga una fianza'], 
      correctAnswer: 1,
      explanation: 'El artículo 80 del Código Penal permite excepcionalmente suspender penas superiores a 2 años en casos de enfermedad muy grave con padecimientos incurables (sin límite de pena) o drogodependencia (penas hasta 5 años).'
    },
    { 
      questionText: 'La sustitución de penas de prisión por expulsión del territorio nacional se aplica a:', 
      options: ['Ciudadanos españoles', 'Ciudadanos extranjeros no residentes legalmente (y residentes con penas > 1 año)', 'Menores de edad', 'Diplomáticos'], 
      correctAnswer: 1,
      explanation: 'El artículo 89 del Código Penal regula la sustitución de penas de prisión por la expulsión del territorio nacional para ciudadanos extranjeros.'
    },
    
    // Tema 25: Delitos Admin
    { 
      questionText: 'El funcionario que acepta una dádiva o regalo para realizar un acto propio de su cargo comete delito de:', 
      options: ['Malversación', 'Cohecho', 'Prevaricación', 'Tráfico de influencias'], 
      correctAnswer: 1,
      explanation: 'El artículo 419 y siguientes del Código Penal tipifican el cohecho pasivo, que consiste en que la autoridad o funcionario público solicite o reciba dádiva, favor o retribución para realizar un acto propio de su cargo.'
    },
    { 
      questionText: 'El delito de tráfico de influencias requiere que el sujeto activo:', 
      options: ['Use armas', 'Influyan en un funcionario o autoridad prevaliéndose de su cargo o relación personal', 'Robe dinero público', 'Falsifique documentos'], 
      correctAnswer: 1,
      explanation: 'El artículo 428 del Código Penal define el tráfico de influencias como la conducta del funcionario público o autoridad que influyere en otro funcionario público o autoridad prevaliéndose del ejercicio de las facultades de su cargo o de cualquier otra situación derivada de su relación personal o jerárquica.'
    },
  ]
};
