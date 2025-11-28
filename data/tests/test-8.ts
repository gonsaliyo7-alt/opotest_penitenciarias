
import type { Test } from '../../types';

export const TEST_8: Test = {
  id: 'test-8',
  title: 'Test 8: Dº Penitenciario III (Temas 36-40)',
  questions: [
    // Tema 36: Régimen Cerrado
    { 
      questionText: 'El régimen cerrado se aplica a internos calificados en:', 
      options: ['Segundo grado', 'Primer grado', 'Tercer grado', 'Preventivos siempre'], 
      correctAnswer: 1,
      explanation: 'El artículo 72 de la LOGP vincula el primer grado de tratamiento con el régimen cerrado.'
    },
    { 
      questionText: 'En la modalidad de departamentos de régimen cerrado, los internos disfrutarán de un mínimo de horas de salida al patio de:', 
      options: ['1 hora diaria', '4 horas diarias', '3 horas diarias (o 4 si hay actividades)', '8 horas diarias'], 
      correctAnswer: 1,
      explanation: 'El artículo 93 del Reglamento Penitenciario establece que en los departamentos de régimen cerrado los internos disfrutarán de un mínimo de cuatro horas diarias de vida en común (o tres si no realizan actividades programadas).'
    },
    
    // Tema 37: Permisos de salida
    { 
      questionText: 'Para conceder un permiso ordinario es necesario haber cumplido:', 
      options: ['La mitad de la condena', 'La cuarta parte de la condena', 'Las tres cuartas partes', 'Un año de prisión'], 
      correctAnswer: 1,
      explanation: 'El artículo 47.2 de la LOGP y el 154 del RP exigen haber extinguido la cuarta parte de la condena para la concesión de permisos ordinarios.'
    },
    { 
      questionText: 'Los permisos extraordinarios se conceden por:', 
      options: ['Buena conducta', 'Motivos graves justificados (fallecimiento familiar, nacimiento hijo...)', 'Antigüedad', 'Vacaciones'], 
      correctAnswer: 1,
      explanation: 'El artículo 47.1 de la LOGP y el 155 del RP prevén la concesión de permisos extraordinarios en caso de fallecimiento o enfermedad grave de los padres, cónyuge, hijos, hermanos y otras personas íntimamente vinculadas, alumbramiento de la esposa, etc.'
    },
    
    // Tema 38: Libertad condicional
    { 
      questionText: 'La revocación de la libertad condicional se produce si:', 
      options: ['El liberado delinque o incumple las reglas de conducta', 'No encuentra trabajo', 'Llega tarde a casa un día', 'No tiene dinero'], 
      correctAnswer: 0,
      explanation: 'El artículo 90 del Código Penal establece que el juez de vigilancia penitenciaria revocará la libertad condicional si el penado delinque o incumple las prohibiciones y reglas de conducta impuestas.'
    },
    { 
      questionText: '¿Qué grado de tratamiento es necesario para acceder a la libertad condicional ordinaria?', 
      options: ['Primero', 'Segundo', 'Tercero', 'Cuarto'], 
      correctAnswer: 2,
      explanation: 'Para acceder a la libertad condicional es requisito indispensable estar clasificado en tercer grado de tratamiento penitenciario (Art. 90 CP).'
    },
    
    // Tema 39: Asistencia Social
    { 
      questionText: 'La Comisión de Asistencia Social Penitenciaria tiene como función:', 
      options: ['Juzgar al interno', 'Prestar asistencia a los internos, liberados y familiares', 'Vigilar los muros', 'Limpiar las celdas'], 
      correctAnswer: 1,
      explanation: 'El artículo 74 de la LOGP atribuye a la Comisión de Asistencia Social la función de prestar la asistencia social necesaria a los internos, a los liberados condicionales o definitivos y a los familiares de unos y otros.'
    },
    { 
      questionText: '¿Qué ayuda económica existe para los liberados de prisión que no tengan derecho a desempleo?', 
      options: ['El subsidio de liberados de prisión', 'La pensión de jubilación', 'La beca de estudios', 'Ninguna'], 
      correctAnswer: 0,
      explanation: 'Existe un subsidio por desempleo específico para liberados de prisión que hayan cumplido una pena superior a 6 meses y no tengan derecho a la prestación contributiva.'
    },
    
    // Tema 40: El trabajo penitenciario
    { 
      questionText: 'La relación laboral especial penitenciaria se caracteriza por:', 
      options: ['Ser obligatoria para todos', 'Ser voluntaria, retribuida y con Seguridad Social', 'No tener derecho a vacaciones', 'Ser gratuita'], 
      correctAnswer: 1,
      explanation: 'El trabajo productivo en prisión se configura como una relación laboral de carácter especial, siendo voluntario, retribuido y con protección de Seguridad Social (RD 782/2001).'
    },
    { 
      questionText: '¿Quién es el empleador en el trabajo productivo en los talleres penitenciarios?', 
      options: ['El Director de la prisión', 'La Entidad Estatal TPFE (o empresa colaboradora)', 'El Ministerio de Justicia', 'El funcionario de vigilancia'], 
      correctAnswer: 1,
      explanation: 'El empleador en la relación laboral especial penitenciaria es la Entidad Estatal Trabajo Penitenciario y Formación para el Empleo (TPFE).'
    },
  ]
};
