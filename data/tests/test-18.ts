
import type { Test } from '../../types';

export const TEST_18: Test = {
  id: 'test-18',
  title: 'Test 18: Dº Penitenciario VI (36-40)',
  questions: [
    // Tema 36: Régimen Cerrado
    { 
      questionText: 'El artículo 91 del Reglamento Penitenciario regula:', 
      options: ['El régimen abierto', 'El régimen ordinario', 'Las modalidades de vida en régimen cerrado', 'Las visitas'], 
      correctAnswer: 2,
      explanation: 'El artículo 91 del Reglamento Penitenciario establece las dos modalidades de vida en régimen cerrado: Centros o Módulos de Régimen Cerrado y Departamentos Especiales.'
    },
    { 
      questionText: 'En los departamentos de régimen cerrado, los cacheos de celdas se realizarán:', 
      options: ['Semanalmente', 'Mensualmente', 'Diariamente', 'Nunca'], 
      correctAnswer: 2,
      explanation: 'El artículo 93 del Reglamento Penitenciario establece que en los departamentos de régimen cerrado los registros de celdas se realizarán diariamente.'
    },
    
    // Tema 37: Permisos
    { 
      questionText: 'Los permisos ordinarios tienen una duración máxima anual para internos en 2º grado de:', 
      options: ['36 días', '48 días', '18 días', '12 días'], 
      correctAnswer: 0,
      explanation: 'El artículo 154 del Reglamento Penitenciario establece que los internos clasificados en segundo grado podrán disfrutar de hasta 36 días de permiso al año.'
    },
    { 
      questionText: 'Si un interno tiene que salir por fallecimiento de un familiar y es peligroso, el permiso extraordinario será:', 
      options: ['Denegado siempre', 'Concedido con medidas de seguridad (custodia policial)', 'Concedido libremente', 'Aplazado'], 
      correctAnswer: 1,
      explanation: 'El artículo 155 del Reglamento Penitenciario prevé que los permisos extraordinarios puedan concederse con las medidas de seguridad adecuadas (custodia de Fuerzas y Cuerpos de Seguridad) si las circunstancias del interno lo requieren.'
    },
    
    // Tema 38: Libertad condicional
    { 
      questionText: 'La libertad condicional se puede adelantar a los 90 años de edad:', 
      options: ['Falso', 'Verdadero, cumpliendo ciertos requisitos (septuagenarios)', 'Solo a los 70', 'A los 65'], 
      correctAnswer: 1,
      explanation: 'El artículo 91 del Código Penal permite adelantar la libertad condicional a los penados que hubieren cumplido 70 años (septuagenarios). Al tener 90 años, cumple el requisito de edad (>70).'
    },
    { 
      questionText: 'Para la concesión de la libertad condicional se requiere un informe de:', 
      options: ['Pronóstico de reinserción social', 'Antecedentes penales', 'Solvencia económica', 'Salud física exclusivamente'], 
      correctAnswer: 0,
      explanation: 'El artículo 90 del Código Penal exige, entre otros requisitos, que exista un pronóstico favorable de reinserción social, emitido por los expertos que el Juez de Vigilancia estime convenientes.'
    },
    
    // Tema 39: Asistencia Social
    { 
      questionText: 'La colaboración de las ONG y el voluntariado en prisión:', 
      options: ['Está prohibida', 'Es fomentada por la Administración Penitenciaria', 'Es obligatoria', 'Solo para actos religiosos'], 
      correctAnswer: 1,
      explanation: 'La normativa penitenciaria fomenta la participación de Organizaciones No Gubernamentales (ONG) y voluntariado para la realización de actividades de intervención y tratamiento.'
    },
    { 
      questionText: 'Los programas de intervención para drogodependientes son parte de la:', 
      options: ['Seguridad', 'Asistencia y Tratamiento', 'Administración', 'Limpieza'], 
      correctAnswer: 1,
      explanation: 'La intervención con drogodependientes se encuadra dentro de las áreas de Asistencia Sanitaria y Tratamiento Penitenciario.'
    },
    
    // Tema 40: Trabajo
    { 
      questionText: 'La retribución de los internos trabajadores se fija tomando como referencia:', 
      options: ['El Salario Mínimo Interprofesional (proporcional)', 'Lo que quiera la empresa', 'No cobran', 'El sueldo de los funcionarios'], 
      correctAnswer: 0,
      explanation: 'El RD 782/2001 establece que la retribución se fijará por módulo de actividad o tiempo, tomando como referencia el Salario Mínimo Interprofesional (SMI) vigente, proporcional a las horas trabajadas y rendimiento.'
    },
    { 
      questionText: 'En caso de accidente laboral en los talleres productivos, el interno:', 
      options: ['No tiene cobertura', 'Tiene derecho a las prestaciones de Seguridad Social correspondientes', 'Es expulsado', 'Paga los daños'], 
      correctAnswer: 1,
      explanation: 'Los internos trabajadores están incluidos en el Régimen General de la Seguridad Social y tienen derecho a las prestaciones por accidente de trabajo y enfermedad profesional.'
    },
  ]
};
