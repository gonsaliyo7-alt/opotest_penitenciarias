
import type { Test } from '../../types';

export const TEST_17: Test = {
  id: 'test-17',
  title: 'Test 17: Dº Penitenciario V (31-35)',
  questions: [
    // Tema 31: Establecimientos
    { 
      questionText: 'Las Unidades de Madres están destinadas a:', 
      options: ['Internas embarazadas', 'Internas con hijos menores de 3 años consigo', 'Visitas familiares', 'Madres de funcionarios'], 
      correctAnswer: 1,
      explanation: 'El artículo 178 del Reglamento Penitenciario regula las Unidades de Madres para internas con hijos menores de tres años consigo.'
    },
    { 
      questionText: '¿Pueden existir departamentos mixtos para hombres y mujeres?', 
      options: ['No, la separación es absoluta', 'Sí, excepcionalmente para actividades o tratamiento específico', 'Sí, en todas las prisiones', 'Solo en régimen abierto'], 
      correctAnswer: 1,
      explanation: 'El artículo 168 del Reglamento Penitenciario permite excepcionalmente la existencia de departamentos mixtos para la ejecución de programas específicos de tratamiento o actividades comunes.'
    },
    
    // Tema 32: Ingreso
    { 
      questionText: 'En caso de presentación voluntaria sin orden judicial, el Director:', 
      options: ['No puede admitirlo', 'Lo admite y recaba la orden judicial en 24 horas', 'Lo detiene', 'Llama a su familia'], 
      correctAnswer: 1,
      explanation: 'El artículo 16 del Reglamento Penitenciario establece que en caso de presentación voluntaria, el Director recabará de la autoridad judicial el correspondiente mandamiento, procediéndose a la excarcelación si no se recibe en el plazo de 24 horas.'
    },
    { 
      questionText: 'La separación interior de los reclusos debe tener en cuenta:', 
      options: ['El sexo, la edad y los antecedentes delictivos', 'La raza', 'La religión', 'La altura'], 
      correctAnswer: 0,
      explanation: 'El artículo 16 de la LOGP establece los criterios de separación interior: hombres/mujeres, detenidos/presos/penados, jóvenes/adultos, enfermos/sanos, y primarios/reincidentes (antecedentes).'
    },
    
    // Tema 33: Clasificación
    { 
      questionText: 'La regresión de grado procede cuando:', 
      options: ['El interno evoluciona positivamente', 'Se produce una evolución negativa en el pronóstico de integración', 'Lleva mucho tiempo en el mismo grado', 'Lo pide la familia'], 
      correctAnswer: 1,
      explanation: 'El artículo 106 del Reglamento Penitenciario establece que procederá la regresión de grado cuando se aprecie una evolución negativa en el pronóstico de integración social y en la personalidad o conducta del interno.'
    },
    { 
      questionText: 'La Central Penitenciaria de Observación (CPO) se encarga de:', 
      options: ['Vigilar con cámaras', 'Realizar labores de observación y clasificación de internos complejos', 'Cocinar', 'Limpiar'], 
      correctAnswer: 1,
      explanation: 'La Central Penitenciaria de Observación es un órgano técnico encargado de completar la labor de los Equipos Técnicos de los establecimientos en tareas de observación, clasificación y tratamiento, especialmente en casos complejos.'
    },
    
    // Tema 34: Régimen Ordinario
    { 
      questionText: 'El horario general del centro es aprobado por:', 
      options: ['El Director', 'El Consejo de Dirección', 'La Junta de Tratamiento', 'El Juez'], 
      correctAnswer: 1,
      explanation: 'El artículo 273 del Reglamento Penitenciario atribuye al Consejo de Dirección la competencia para aprobar el horario general del Centro.'
    },
    { 
      questionText: 'El número de paquetes que un interno puede recibir en régimen ordinario es habitualmente:', 
      options: ['Uno al año', 'Dos al mes', 'Diario', 'Sin límite'], 
      correctAnswer: 1,
      explanation: 'El artículo 51 del Reglamento Penitenciario establece que el Consejo de Dirección determinará el número de paquetes, que habitualmente es de dos al mes en régimen ordinario.'
    },
    
    // Tema 35: Régimen Abierto
    { 
      questionText: 'Los internos en tercer grado pueden ser asignados a Unidades Dependientes, que son:', 
      options: ['Instalaciones ubicadas fuera del recinto penitenciario, gestionadas por entidades públicas o privadas', 'Celdas de castigo', 'Hospitales', 'Comisarías'], 
      correctAnswer: 0,
      explanation: 'El artículo 165 del Reglamento Penitenciario define las Unidades Dependientes como instalaciones residenciales ubicadas fuera del recinto penitenciario, gestionadas por entidades públicas o privadas mediante convenio.'
    },
    { 
      questionText: 'El artículo 100.2 del Reglamento Penitenciario permite:', 
      options: ['La libertad total', 'Aplicar aspectos de un grado a internos clasificados en otro (principio de flexibilidad)', 'No trabajar', 'Salir sin permiso'], 
      correctAnswer: 1,
      explanation: 'El artículo 100.2 del RP consagra el principio de flexibilidad, permitiendo al Equipo Técnico proponer un modelo de ejecución en el que se combinen aspectos característicos de cada uno de los grados de clasificación.'
    },
  ]
};
