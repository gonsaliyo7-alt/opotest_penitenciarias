
import type { Test } from '../../types';

export const TEST_4: Test = {
  id: 'test-4',
  title: 'Test 4: Presupuesto y Dº Penal I (Temas 16-20)',
  questions: [
    // Tema 16: El Presupuesto del Estado
    { 
      questionText: 'El control externo de la gestión económica y financiera del Sector Público corresponde a:', 
      options: ['La Intervención General', 'El Tribunal de Cuentas', 'El Ministerio de Hacienda', 'El Banco de España'], 
      correctAnswer: 1,
      explanation: 'El artículo 136 de la Constitución establece que el Tribunal de Cuentas es el supremo órgano fiscalizador de las cuentas y de la gestión económica del Estado, así como del sector público.'
    },
    { 
      questionText: 'Si la Ley de Presupuestos no se aprueba antes del primer día del ejercicio económico correspondiente:', 
      options: ['Se paraliza la Administración', 'Se consideran automáticamente prorrogados los del ejercicio anterior', 'El Gobierno debe dimitir', 'Se aprueba un presupuesto de emergencia'], 
      correctAnswer: 1,
      explanation: 'El artículo 134.4 de la Constitución dispone que si la Ley de Presupuestos no se aprobara antes del primer día del ejercicio económico correspondiente, se considerarán automáticamente prorrogados los Presupuestos del ejercicio anterior hasta la aprobación de los nuevos.'
    },
    
    // Tema 17: Ministerio del Interior
    { 
      questionText: 'La Secretaría General de Instituciones Penitenciarias tiene rango de:', 
      options: ['Dirección General', 'Subsecretaría', 'Secretaría de Estado', 'Vicepresidencia'], 
      correctAnswer: 1,
      explanation: 'Según la estructura orgánica básica del Ministerio del Interior, la Secretaría General de Instituciones Penitenciarias tiene rango de Subsecretaría.'
    },
    { 
      questionText: '¿De quién depende la Entidad de Derecho Público Trabajo Penitenciario y Formación para el Empleo?', 
      options: ['Del Ministerio de Trabajo', 'De la Secretaría General de Instituciones Penitenciarias', 'Del Ministerio de Educación', 'De las Comunidades Autónomas'], 
      correctAnswer: 1,
      explanation: 'La Entidad Estatal Trabajo Penitenciario y Formación para el Empleo (TPFE) está adscrita al Ministerio del Interior a través de la Secretaría General de Instituciones Penitenciarias.'
    },
    
    // Tema 18: Concepto y principios Dº Penal
    { 
      questionText: 'El principio "non bis in idem" significa que:', 
      options: ['No se puede castigar dos veces el mismo hecho si hay identidad de sujeto, hecho y fundamento', 'Siempre hay que imponer dos penas', 'La pena debe ser doble si hay reincidencia', 'No se puede juzgar a dos personas a la vez'], 
      correctAnswer: 0,
      explanation: 'El principio "non bis in idem" impide sancionar dos veces el mismo hecho cuando concurra la triple identidad de sujeto, hecho y fundamento.'
    },
    { 
      questionText: '¿Cuál es la fuente principal del Derecho Penal?', 
      options: ['La costumbre', 'Los principios generales del derecho', 'La Ley Orgánica', 'La jurisprudencia'], 
      correctAnswer: 2,
      explanation: 'En Derecho Penal rige el principio de legalidad. Las leyes penales que impongan penas privativas de libertad deben tener rango de Ley Orgánica (art. 81 CE), siendo esta la fuente principal.'
    },
    
    // Tema 19: Ley Penal tiempo/espacio y Acción
    { 
      questionText: 'Las leyes penales tienen efecto retroactivo cuando:', 
      options: ['Son sancionadoras', 'Favorecen al reo', 'El delito es muy grave', 'Nunca'], 
      correctAnswer: 1,
      explanation: 'El artículo 2.2 del Código Penal establece que tendrán efecto retroactivo aquellas leyes penales que favorezcan al reo, aunque al entrar en vigor hubiera recaído sentencia firme y el sujeto estuviese cumpliendo condena.'
    },
    { 
      questionText: 'En la teoría del delito, la "tipicidad" significa que:', 
      options: ['La acción debe estar descrita en la ley como delito', 'La acción es contraria a derecho', 'El autor es culpable', 'La acción es habitual'], 
      correctAnswer: 0,
      explanation: 'La tipicidad es la adecuación del acto humano voluntario ejecutado por el sujeto a la figura descrita por la ley como delito (el tipo penal).'
    },
    
    // Tema 20: Omisión y Clasificación
    { 
      questionText: 'En los delitos de omisión impropia (comisión por omisión), se requiere que el sujeto tenga:', 
      options: ['Antecedentes penales', 'Posición de garante', 'Intención de dañar', 'Armas'], 
      correctAnswer: 1,
      explanation: 'El artículo 11 del Código Penal establece que para la comisión por omisión se requiere que el omitente tenga un deber jurídico de actuar ("posición de garante"), ya sea por ley, contrato o actuar precedente.'
    },
    { 
      questionText: 'Según el Código Penal, los delitos se clasifican en:', 
      options: ['Graves, menos graves y leves', 'Mayores y menores', 'Crímenes y delitos', 'Dolosos e imprudentes'], 
      correctAnswer: 0,
      explanation: 'El artículo 13 del Código Penal clasifica los delitos en graves, menos graves y leves, en función de la naturaleza y duración de la pena que llevan aparejada.'
    },
  ]
};
