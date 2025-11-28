
import type { Test } from '../../types';

export const TEST_9: Test = {
  id: 'test-9',
  title: 'Test 9: Dº Penitenciario IV (Temas 41-45)',
  questions: [
    // Tema 41: Régimen Disciplinario
    { 
      questionText: '¿Quién es competente para imponer sanciones por faltas graves y leves?', 
      options: ['El Juez de Vigilancia', 'El Director del Establecimiento (o Consejo de Dirección)', 'El Jefe de Servicios', 'El funcionario de servicio'], 
      correctAnswer: 1,
      explanation: 'El artículo 44 de la LOGP y el 233 del RP establecen que la competencia para imponer sanciones por faltas graves y leves corresponde al Director (o Consejo de Dirección según el caso). Las muy graves a la Comisión Disciplinaria.'
    },
    { 
      questionText: 'La sanción de aislamiento en celda no podrá exceder de:', 
      options: ['7 días', '14 días', '21 días', '30 días'], 
      correctAnswer: 1,
      explanation: 'El artículo 42 de la LOGP establece que el aislamiento en celda no podrá exceder de catorce días.'
    },
    
    // Tema 42: Recompensas
    { 
      questionText: 'Las recompensas se conceden por:', 
      options: ['Cumplir la condena', 'La realización de actos que pongan de relieve buena conducta, espíritu de trabajo y sentido de responsabilidad', 'Pagar una tasa', 'No tener sanciones en un mes'], 
      correctAnswer: 1,
      explanation: 'El artículo 263 del Reglamento Penitenciario establece que se podrán conceder recompensas a los internos que se distingan por su buena conducta, espíritu de trabajo y sentido de responsabilidad.'
    },
    { 
      questionText: '¿Cuál de las siguientes es una recompensa reglamentaria?', 
      options: ['Reducción de condena automática', 'Becas de estudio', 'Libertad definitiva', 'Indulto'], 
      correctAnswer: 1,
      explanation: 'El artículo 263 del RP enumera las recompensas, entre las que se incluyen las becas de estudio, notas meritorias, premios en metálico, etc.'
    },
    
    // Tema 43: Asistencia sanitaria
    { 
      questionText: 'La atención sanitaria en prisión incluye:', 
      options: ['Solo urgencias', 'Atención primaria y especializada equivalente a la del Sistema Nacional de Salud', 'Solo medicina general', 'Solo odontología'], 
      correctAnswer: 1,
      explanation: 'El artículo 207 del Reglamento Penitenciario garantiza a los internos una atención médico-sanitaria equivalente a la dispensada al conjunto de la población (Atención Primaria y Especializada).'
    },
    { 
      questionText: '¿Dónde deben permanecer los internos con enfermedades infecto-contagiosas en periodo agudo?', 
      options: ['En celdas de castigo', 'En la enfermería o zona sanitaria aislados si es necesario', 'En el patio', 'Con el resto de la población'], 
      correctAnswer: 1,
      explanation: 'El artículo 215 del RP establece que los internos con enfermedades infecto-contagiosas en periodo agudo serán alojados en la enfermería o departamento sanitario, adoptándose las medidas de aislamiento necesarias.'
    },
    
    // Tema 44: Oficina de gestión
    { 
      questionText: 'El Libro de Ingresos y Salidas es llevado por:', 
      options: ['El servicio médico', 'La Oficina de Gestión', 'El servicio de cocina', 'El capellán'], 
      correctAnswer: 1,
      explanation: 'El artículo 307 del Reglamento Penitenciario atribuye a la Oficina de Gestión la llevanza del Libro de Ingresos y Salidas.'
    },
    { 
      questionText: 'En el expediente personal del interno se archivan:', 
      options: ['Sus cartas privadas', 'Los documentos judiciales y administrativos relativos a su situación procesal y penitenciaria', 'Sus objetos personales', 'La ropa de calle'], 
      correctAnswer: 1,
      explanation: 'El artículo 14 del RP establece que el expediente personal (Protocolo) contendrá los documentos administrativos y judiciales relativos a la situación procesal y penitenciaria del interno.'
    },
    
    // Tema 45: El Peculio
    { 
      questionText: '¿Pueden los internos tener dinero de curso legal (billetes/monedas) en su poder dentro del recinto?', 
      options: ['Sí, sin límite', 'No, está prohibido salvo autorización expresa (peculio de libre disposición)', 'Sí, hasta 100 euros', 'Depende del módulo'], 
      correctAnswer: 1,
      explanation: 'El artículo 316 del RP prohíbe a los internos tener en su poder dinero de curso legal, salvo en los supuestos autorizados (como en régimen abierto o salidas).'
    },
    { 
      questionText: 'El sistema de gestión del dinero de los internos se realiza mediante:', 
      options: ['Cuentas bancarias externas', 'Cuenta de peculio administrada por el centro (tarjetas o vales)', 'Caja fuerte en la celda', 'Intercambio de bienes'], 
      correctAnswer: 1,
      explanation: 'El artículo 317 del RP establece el sistema de resguardo de peculio, gestionándose el dinero mediante cuentas administradas por el centro (actualmente tarjetas monedero).'
    },
  ]
};
