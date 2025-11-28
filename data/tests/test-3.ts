
import type { Test } from '../../types';

export const TEST_3: Test = {
  id: 'test-3',
  title: 'Test 3: Función Pública y Procedimiento (Temas 11-15)',
  questions: [
    // Tema 11: La Administración Pública
    { 
      questionText: '¿Cuál de los siguientes es un principio de actuación de la Administración Pública según la Constitución?', 
      options: ['Arbitrariedad', 'Eficacia', 'Secreto', 'Lentitud'], 
      correctAnswer: 1,
      explanation: 'El artículo 103.1 de la Constitución establece que la Administración Pública sirve con objetividad los intereses generales y actúa de acuerdo con los principios de eficacia, jerarquía, descentralización, desconcentración y coordinación, con sometimiento pleno a la ley y al Derecho.'
    },
    { 
      questionText: 'La potestad sancionadora de la Administración:', 
      options: ['Puede imponer penas de prisión', 'No puede imponer penas privativas de libertad', 'Es ilimitada', 'Sustituye a los Tribunales Penales'], 
      correctAnswer: 1,
      explanation: 'El artículo 25.3 de la Constitución establece expresamente que la Administración civil no podrá imponer sanciones que, directa o subsidiariamente, impliquen privación de libertad.'
    },
    
    // Tema 12: Ley 40/2015 Sector Público
    { 
      questionText: 'Según la Ley 40/2015, los órganos administrativos podrán dirigir las actividades de sus órganos jerárquicamente dependientes mediante:', 
      options: ['Instrucciones y órdenes de servicio', 'Decretos Leyes', 'Sentencias', 'Reglamentos orgánicos'], 
      correctAnswer: 0,
      explanation: 'El artículo 6 de la Ley 40/2015 establece que los órganos administrativos podrán dirigir las actividades de sus órganos jerárquicamente dependientes mediante instrucciones y órdenes de servicio.'
    },
    { 
      questionText: '¿Qué principio rige las relaciones entre las distintas Administraciones Públicas?', 
      options: ['Jerarquía', 'Lealtad institucional', 'Competencia desleal', 'Subordinación absoluta'], 
      correctAnswer: 1,
      explanation: 'El artículo 3.1.e) de la Ley 40/2015 establece la lealtad institucional como uno de los principios generales de las relaciones entre las Administraciones Públicas (no jerarquía, ya que son autónomas).'
    },
    
    // Tema 13: El personal al servicio de las AAPP
    { 
      questionText: 'Según el EBEP, ¿quiénes son empleados públicos?', 
      options: ['Solo los funcionarios de carrera', 'Funcionarios de carrera, interinos, personal laboral y personal eventual', 'Solo el personal laboral', 'Los políticos electos'], 
      correctAnswer: 1,
      explanation: 'El artículo 8 del Texto Refundido de la Ley del Estatuto Básico del Empleado Público (TREBEP) clasifica a los empleados públicos en: a) Funcionarios de carrera. b) Funcionarios interinos. c) Personal laboral. d) Personal eventual.'
    },
    { 
      questionText: 'El personal eventual se caracteriza por:', 
      options: ['Tener un nombramiento permanente', 'Realizar funciones de confianza o asesoramiento especial', 'Acceder por concurso-oposición', 'Ser inamovible'], 
      correctAnswer: 1,
      explanation: 'El artículo 12 del TREBEP define al personal eventual como aquel que, en virtud de nombramiento y con carácter no permanente, sólo realiza funciones expresamente calificadas como de confianza o asesoramiento especial.'
    },
    
    // Tema 14: Adquisición y pérdida relación servicio
    { 
      questionText: '¿Cuál de las siguientes NO es una causa de pérdida de la condición de funcionario de carrera?', 
      options: ['La renuncia', 'La jubilación', 'La sanción disciplinaria de separación del servicio', 'La excedencia voluntaria por interés particular'], 
      correctAnswer: 3,
      explanation: 'El artículo 63 del TREBEP enumera las causas de pérdida de la condición de funcionario. La excedencia voluntaria es una situación administrativa, no supone la pérdida de la condición de funcionario (se mantiene el derecho al reingreso).'
    },
    { 
      questionText: '¿Qué tipo de falta es el abandono del servicio según el régimen disciplinario?', 
      options: ['Leve', 'Grave', 'Muy grave', 'No es falta'], 
      correctAnswer: 2,
      explanation: 'El artículo 95.2.c) del TREBEP tipifica como falta muy grave "El abandono del servicio, así como no hacerse cargo voluntariamente de las tareas o funciones que tienen encomendadas".'
    },
    
    // Tema 15: Ley 39/2015
    { 
      questionText: 'Según la Ley 39/2015, los sábados se consideran días:', 
      options: ['Hábiles', 'Inhábiles', 'Festivos', 'Depende de la CCAA'], 
      correctAnswer: 1,
      explanation: 'El artículo 30.2 de la Ley 39/2015 excluye del cómputo de plazos señalados en días hábiles a los sábados, domingos y los declarados festivos. Por tanto, los sábados son inhábiles.'
    },
    { 
      questionText: 'Contra los actos que ponen fin a la vía administrativa, ¿qué recurso administrativo cabe interponer?', 
      options: ['Recurso de alzada', 'Recurso potestativo de reposición', 'Recurso de queja', 'Ninguno, solo vía judicial'], 
      correctAnswer: 1,
      explanation: 'El artículo 123 de la Ley 39/2015 establece que los actos administrativos que pongan fin a la vía administrativa podrán ser recurridos potestativamente en reposición ante el mismo órgano que los hubiera dictado o ser impugnados directamente ante el orden jurisdiccional contencioso-administrativo.'
    },
  ]
};
