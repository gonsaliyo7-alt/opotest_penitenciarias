
import type { Test } from '../../types';

export const TEST_6: Test = {
  id: 'test-6',
  title: 'Test 6: Delitos y Dº Penitenciario I (Temas 26-30)',
  questions: [
    // Tema 26: Delitos personas y patrimonio
    { 
      questionText: 'El que matare a otro concurriendo alevosía comete un delito de:', 
      options: ['Homicidio imprudente', 'Asesinato', 'Homicidio doloso', 'Lesiones'], 
      correctAnswer: 1,
      explanation: 'El artículo 139 del Código Penal califica como asesinato el homicidio en el que concurre alguna de las circunstancias siguientes: 1.ª Alevosía. 2.ª Precio, recompensa o promesa. 3.ª Ensañamiento. 4.ª Para facilitar otro delito o evitar ser descubierto.'
    },
    { 
      questionText: 'El delito de estafa se caracteriza fundamentalmente por el uso de:', 
      options: ['Fuerza en las cosas', 'Violencia o intimidación', 'Engaño bastante', 'Armas'], 
      correctAnswer: 2,
      explanation: 'El artículo 248 del Código Penal define la estafa: "Cometen estafa los que, con ánimo de lucro, utilizaren engaño bastante para producir error en otro, induciéndolo a realizar un acto de disposición...".'
    },
    
    // Tema 27: Delitos sexuales y honor
    { 
      questionText: 'En los delitos contra la libertad sexual, tras la reforma de la LO 10/2022, la distinción entre abuso y agresión:', 
      options: ['Se mantiene igual', 'Desaparece, unificándose en agresión sexual', 'Se basa en la edad', 'Depende del horario'], 
      correctAnswer: 1,
      explanation: 'La Ley Orgánica 10/2022 de garantía integral de la libertad sexual eliminó la distinción entre abuso y agresión sexual, unificando todas las conductas bajo el tipo de agresión sexual.'
    },
    { 
      questionText: 'La acción o expresión que lesionan la dignidad de otra persona, menoscabando su fama, constituye:', 
      options: ['Calumnia', 'Injuria', 'Falso testimonio', 'Amenaza'], 
      correctAnswer: 1,
      explanation: 'El artículo 208 del Código Penal define la injuria como "la acción o expresión que lesionan la dignidad de otra persona, menoscabando su fama o atentando contra su propia estimación".'
    },
    
    // Tema 28: LOGP
    { 
      questionText: 'La Ley Orgánica General Penitenciaria establece que la actividad penitenciaria se ejercerá respetando:', 
      options: ['La personalidad del interno y sus derechos e intereses legítimos no afectados por la condena', 'Solo las órdenes del Director', 'La voluntad de la víctima', 'La religión católica'], 
      correctAnswer: 0,
      explanation: 'El artículo 3 de la LOGP establece que la actividad penitenciaria se ejercerá respetando, en todo caso, la personalidad humana de los recluidos y los derechos e intereses jurídicos de los mismos no afectados por la condena.'
    },
    { 
      questionText: 'Según la LOGP, ¿cuál es el fin primordial de las instituciones penitenciarias?', 
      options: ['La retención y custodia', 'La reeducación y reinserción social', 'El castigo físico', 'La explotación laboral'], 
      correctAnswer: 1,
      explanation: 'El artículo 1 de la LOGP (y el 25.2 de la CE) establece que las Instituciones Penitenciarias tienen como fin primordial la reeducación y la reinserción social de los sentenciados a penas y medidas penales privativas de libertad.'
    },
    
    // Tema 29: El interno
    { 
      questionText: 'Los internos tienen derecho a ser llamados por:', 
      options: ['Su número de expediente', 'Su mote o alias', 'Su nombre', 'Su delito'], 
      correctAnswer: 2,
      explanation: 'El artículo 15 del Reglamento Penitenciario (y derivado del respeto a la dignidad del art. 3 LOGP) establece que los internos tienen derecho a ser designados por su propio nombre.'
    },
    { 
      questionText: 'Las comunicaciones de los internos con sus abogados defensores:', 
      options: ['Pueden ser intervenidas siempre', 'No pueden ser suspendidas ni intervenidas, salvo orden judicial y supuestos de terrorismo', 'Deben hacerse en presencia de un funcionario', 'Están prohibidas'], 
      correctAnswer: 1,
      explanation: 'El artículo 51.2 de la LOGP establece que las comunicaciones con el abogado defensor no podrán ser suspendidas ni intervenidas salvo por orden de la autoridad judicial y en los supuestos de terrorismo.'
    },
    
    // Tema 30: Personal penitenciario
    { 
      questionText: 'El Cuerpo de Ayudantes de Instituciones Penitenciarias realiza funciones de:', 
      options: ['Vigilancia, custodia y tareas administrativas', 'Dirección del centro', 'Tratamiento psicológico', 'Asistencia jurídica'], 
      correctAnswer: 0,
      explanation: 'El Cuerpo de Ayudantes de II.PP. tiene encomendadas funciones de vigilancia, custodia y servicios administrativos (según la Ley de creación del cuerpo y normativa de desarrollo).'
    },
    { 
      questionText: 'Los funcionarios de instituciones penitenciarias, en el ejercicio de sus funciones, tienen la consideración de:', 
      options: ['Personal laboral', 'Autoridad (o Agentes de la autoridad)', 'Jueces', 'Militares'], 
      correctAnswer: 1,
      explanation: 'El artículo 80 de la LOGP establece que los funcionarios de Instituciones Penitenciarias tendrán la consideración de Agentes de la Autoridad en el ejercicio de sus funciones.'
    },
  ]
};
