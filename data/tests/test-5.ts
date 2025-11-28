
import type { Test } from '../../types';

export const TEST_5: Test = {
  id: 'test-5',
  title: 'Test 5: Dº Penal II (Temas 21-25)',
  questions: [
    // Tema 21: Formas de aparición del delito
    { 
      questionText: 'La tentativa existe cuando el sujeto:', 
      options: ['Piensa en cometer el delito', 'Da principio a la ejecución del delito pero no lo consuma por causas independientes de su voluntad', 'Realiza todos los actos y consigue el resultado', 'Provoca a otros a delinquir'], 
      correctAnswer: 1,
      explanation: 'El artículo 16 del Código Penal define la tentativa: "Hay tentativa cuando el sujeto da principio a la ejecución del delito directamente por hechos exteriores, practicando todos o parte de los actos que objetivamente deberían producir el resultado, y sin embargo éste no se produce por causas independientes de la voluntad del autor".'
    },
    { 
      questionText: '¿Quiénes son responsables criminalmente de los delitos?', 
      options: ['Solo los autores', 'Los autores y los cómplices', 'Los encubridores únicamente', 'Los testigos'], 
      correctAnswer: 1,
      explanation: 'El artículo 27 del Código Penal establece que son responsables criminalmente de los delitos los autores y los cómplices.'
    },
    
    // Tema 22: Causas de extinción
    { 
      questionText: '¿Cuál de las siguientes es una causa de extinción de la responsabilidad penal?', 
      options: ['La embriaguez', 'La prescripción del delito', 'La legítima defensa', 'El estado de necesidad'], 
      correctAnswer: 1,
      explanation: 'El artículo 130 del Código Penal enumera las causas de extinción de la responsabilidad criminal, entre las que se encuentra la prescripción del delito.'
    },
    { 
      questionText: 'La prescripción de la pena comienza a computarse desde:', 
      options: ['El día de comisión del delito', 'El día de la sentencia firme', 'El día que se detiene al autor', 'El día que ingresa en prisión'], 
      correctAnswer: 1,
      explanation: 'El artículo 133 del Código Penal establece que el tiempo de la prescripción de la pena se computará desde la fecha de la sentencia firme, o desde el quebrantamiento de la condena si ésta hubiese comenzado a cumplirse.'
    },
    
    // Tema 23: La pena
    { 
      questionText: 'La pena de prisión permanente revisable es una pena:', 
      options: ['Privativa de derechos', 'Privativa de libertad grave', 'Leve', 'De multa'], 
      correctAnswer: 1,
      explanation: 'El artículo 33 del Código Penal clasifica la prisión permanente revisable como una pena grave privativa de libertad.'
    },
    { 
      questionText: 'Las medidas de seguridad se aplican a:', 
      options: ['Sujetos imputables y culpables', 'Sujetos inimputables o semiimputables en función de su peligrosidad', 'Víctimas del delito', 'Testigos protegidos'], 
      correctAnswer: 1,
      explanation: 'Las medidas de seguridad se fundamentan en la peligrosidad criminal del sujeto y se aplican a personas inimputables o semiimputables (arts. 6 y 95 CP).'
    },
    
    // Tema 24: Suspensión y Libertad Condicional
    { 
      questionText: 'Para la suspensión de la pena de prisión, ¿es necesario haber satisfecho las responsabilidades civiles (o comprometerse a ello)?', 
      options: ['No, nunca', 'Sí, es un requisito necesario', 'Solo si la víctima lo pide', 'Depende del delito'], 
      correctAnswer: 1,
      explanation: 'El artículo 80.2.3ª del Código Penal establece como condición necesaria para la suspensión haber satisfecho las responsabilidades civiles que se hubieren originado y haberse hecho efectivo el decomiso.'
    },
    { 
      questionText: 'La libertad condicional supone:', 
      options: ['La suspensión de la ejecución del resto de la pena', 'El indulto total', 'La eliminación de los antecedentes', 'Un permiso de fin de semana'], 
      correctAnswer: 0,
      explanation: 'El artículo 90 del Código Penal regula la libertad condicional como una modalidad de suspensión de la ejecución del resto de la pena de prisión.'
    },
    
    // Tema 25: Delitos Admin y Seguridad
    { 
      questionText: 'El delito de prevaricación lo comete:', 
      options: ['El particular que soborna', 'La autoridad o funcionario que dicta resolución arbitraria a sabiendas de su injusticia', 'Quien malversa fondos', 'Quien desobedece a la autoridad'], 
      correctAnswer: 1,
      explanation: 'El artículo 404 del Código Penal define la prevaricación administrativa: "A la autoridad o funcionario público que, a sabiendas de su injusticia, dictare una resolución arbitraria en un asunto administrativo...".'
    },
    { 
      questionText: 'Conducir un vehículo de motor con exceso de velocidad punible es un delito contra:', 
      options: ['El patrimonio', 'La seguridad colectiva (seguridad vial)', 'La Administración Pública', 'El honor'], 
      correctAnswer: 1,
      explanation: 'Los delitos contra la seguridad vial (como el exceso de velocidad del art. 379 CP) se encuadran dentro del Título XVII: "De los delitos contra la seguridad colectiva".'
    },
  ]
};
