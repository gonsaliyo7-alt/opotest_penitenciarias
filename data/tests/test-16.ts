import type { Test } from '../../types';

export const TEST_16: Test = {
  id: 'test-16',
  title: 'Derecho Penal',
  questions: [
    {
      questionText: '¿Cuál de las siguientes afirmaciones sobre las medidas de seguridad en el Derecho Penal español es FALSA?',
      options: [
        'Las medidas de seguridad se fundamentan en la peligrosidad criminal del sujeto.',
        'Solo pueden imponerse a personas declaradas exentas de responsabilidad criminal por anomalía o alteración psíquica, estado de intoxicación o alteración de la percepción.',
        'El internamiento en centro psiquiátrico es una medida de seguridad privativa de libertad.',
        'La duración de las medidas de seguridad no puede exceder del tiempo que habría durado la pena de prisión si el sujeto hubiera sido condenado por el hecho cometido.'
      ],
      correctAnswer: 1,
      explanation: 'Las medidas de seguridad se pueden imponer no solo a inimputables, sino también a semiimputables (art. 99 en relación con el 104 CP) y a sujetos imputables en casos como la libertad vigilada (art. 106 CP).'
    },
    {
      questionText: 'En relación con el delito de homicidio, señale la respuesta CORRECTA:',
      options: [
        'El homicidio imprudente grave siempre se castiga con pena de prisión de uno a cuatro años.',
        'Si el homicidio se comete con un vehículo a motor, la pena de inhabilitación especial para el derecho de conducir es siempre accesoria.',
        'La provocación, la conspiración y la proposición para cometer homicidio son punibles.',
        'El que matare a otro será castigado, como reo de homicidio, con la pena de prisión de diez a quince años, sin excepciones.'
      ],
      correctAnswer: 2,
      explanation: 'El artículo 141 del Código Penal castiga expresamente la provocación, la conspiración y la proposición para cometer los delitos de homicidio y asesinato.'
    },
    {
      questionText: '¿Qué tipo de error excluye la culpabilidad y, por tanto, la responsabilidad penal, si es invencible?',
      options: [
        'Error de tipo.',
        'Error de prohibición.',
        'Error sobre el objeto.',
        'Error en el golpe (aberratio ictus).'
      ],
      correctAnswer: 1,
      explanation: 'El error de prohibición invencible, regulado en el artículo 14.3 del Código Penal, excluye la culpabilidad al recaer sobre el conocimiento de la antijuridicidad del hecho. El error de tipo (art. 14.1 y 14.2) excluye el dolo.'
    },
    {
      questionText: 'Señale cuál de los siguientes NO es un requisito del estado de necesidad como causa de justificación:',
      options: [
        'Que el mal causado no sea mayor que el que se pretende evitar.',
        'Que la situación de necesidad no haya sido provocada intencionadamente por el sujeto.',
        'Que el necesitado no tenga, por su oficio o cargo, obligación de sacrificarse.',
        'Que la agresión sea ilegítima.'
      ],
      correctAnswer: 3,
      explanation: 'La "agresión ilegítima" es un requisito de la legítima defensa (art. 20.4 CP), no del estado de necesidad (art. 20.5 CP).'
    },
    {
      questionText: 'La libertad condicional en el Código Penal español es:',
      options: [
        'Una causa de extinción de la responsabilidad criminal.',
        'Un beneficio penitenciario.',
        'La última fase del cumplimiento de la pena de prisión.',
        'Una pena alternativa a la prisión.'
      ],
      correctAnswer: 2,
      explanation: 'Tras la reforma de 2015, la libertad condicional se configura como una modalidad de suspensión de la ejecución del resto de la pena de prisión, como establece el artículo 90 del Código Penal.'
    },
    {
      questionText: '¿Cuál de las siguientes circunstancias es una agravante específica del delito de robo con fuerza en las cosas?',
      options: [
        'Uso de armas u otros medios igualmente peligrosos.',
        'Que se cometa en casa habitada, edificio o local abiertos al público.',
        'Aprovechamiento de las circunstancias de tiempo, lugar o auxilio de otras personas.',
        'Ser reincidente.'
      ],
      correctAnswer: 1,
      explanation: 'El artículo 242.3 del Código Penal aplica una pena superior en grado cuando el robo se comete en casa habitada, edificio o local abiertos al público o en cualquiera de sus dependencias. El uso de armas es una agravante del robo con violencia o intimidación.'
    },
    {
      questionText: 'En el delito de allanamiento de morada, ¿qué se considera "morada" a efectos penales?',
      options: [
        'Únicamente el lugar donde una persona habita de forma permanente.',
        'Cualquier espacio cerrado, aunque no esté habitado.',
        'El espacio cerrado donde una persona reside, aunque sea de forma temporal, desarrollando su vida privada.',
        'Solo los inmuebles que tengan la consideración de domicilio fiscal.'
      ],
      correctAnswer: 2,
      explanation: 'El concepto penal de morada es más amplio que el administrativo. Abarca cualquier espacio cerrado y separado del exterior donde el sujeto desarrolla su vida íntima y privada, con independencia del título jurídico que se tenga sobre el mismo (propiedad, alquiler, etc.) y del carácter permanente o temporal de la estancia.'
    },
    {
      questionText: 'La diferencia fundamental entre el delito de hurto y el de robo es:',
      options: [
        'El valor de la cosa sustraída.',
        'La existencia de violencia o intimidación en las personas o fuerza en las cosas.',
        'La nocturnidad.',
        'La condición de funcionario público del autor.'
      ],
      correctAnswer: 1,
      explanation: 'La diferencia esencial radica en los medios comisivos. El robo requiere el uso de fuerza en las cosas para acceder o abandonar el lugar donde se encuentran o violencia o intimidación en las personas (art. 237 CP), mientras que el hurto es la mera sustracción sin emplear dichos medios (art. 234 CP).'
    },
    {
      questionText: '¿Cuándo se considera que un delito se ha cometido en grado de tentativa?',
      options: [
        'Cuando el sujeto desiste voluntariamente de la ejecución del delito.',
        'Cuando el sujeto da principio a la ejecución del delito directamente por hechos exteriores, practicando todos o parte de los actos que objetivamente deberían producir el resultado, y sin embargo éste no se produce por causas independientes de la voluntad del autor.',
        'Cuando se proponen la ejecución de un delito y resuelven ejecutarlo.',
        'Cuando dos o más personas se conciertan para la ejecución de un delito y resuelven ejecutarlo.'
      ],
      correctAnswer: 1,
      explanation: 'El artículo 16.1 del Código Penal define la tentativa de esta manera. El desistimiento voluntario (opción A) exime de responsabilidad por el delito intentado. Las opciones C y D se refieren a la proposición y la conspiración, que son actos preparatorios punibles.'
    },
    {
      questionText: '¿Cuál de las siguientes penas NO es una pena privativa de derechos?',
      options: [
        'La inhabilitación absoluta.',
        'Los trabajos en beneficio de la comunidad.',
        'La localización permanente.',
        'La privación del derecho a conducir vehículos a motor y ciclomotores.'
      ],
      correctAnswer: 2,
      explanation: 'Según el artículo 32 del Código Penal, las penas privativas de derechos son las enumeradas en el artículo 39. La localización permanente es una pena privativa de libertad, según el art. 35 CP.'
    },
    {
      questionText: 'El principio de legalidad en Derecho Penal implica que:',
      options: [
        'Nadie puede ser condenado por una acción u omisión que en el momento de producirse no constituya delito según la legislación vigente.',
        'Las penas no pueden ser inhumanas o degradantes.',
        'La ley penal es irretroactiva, salvo que sea más favorable para el reo.',
        'Todas las anteriores son correctas.'
      ],
      correctAnswer: 3,
      explanation: 'El principio de legalidad (nullum crimen, nulla poena sine lege) engloba varias garantías: criminal (lex scripta), penal (lex praevia), jurisdiccional y de ejecución. La irretroactividad de las leyes penales no favorables (opción C) es una manifestación de la garantía penal, y la exigencia de que el delito esté tipificado previamente (opción A) es la garantía criminal. La prohibición de penas inhumanas (opción B) es otro principio del Derecho Penal, recogido en el art. 15 CE.'
    },
    {
      questionText: '¿Qué se entiende por "dolo" en Derecho Penal?',
      options: [
        'La comisión de un delito por imprudencia grave.',
        'El conocimiento y la voluntad de realizar los elementos del tipo objetivo de un delito.',
        'El móvil o la razón que impulsa al autor a delinquir.',
        'La creencia errónea de que se está actuando lícitamente.'
      ],
      correctAnswer: 1,
      explanation: 'El dolo, como elemento subjetivo del tipo, consiste en el conocimiento de los elementos objetivos del tipo (aspecto cognitivo) y la voluntad de realizarlos (aspecto volitivo). La imprudencia es otra forma de culpabilidad. El móvil es irrelevante para la existencia de dolo (aunque puede ser relevante para la pena). La creencia errónea de actuar lícitamente es un error de prohibición.'
    },
    {
      questionText: 'Señale la afirmación CORRECTA sobre la complicidad en el delito:',
      options: [
        'El cómplice es castigado con la misma pena que el autor.',
        'La complicidad requiere un acuerdo previo con el autor.',
        'El cómplice coopera a la ejecución del hecho con actos anteriores o simultáneos.',
        'Solo se puede ser cómplice en delitos dolosos.'
      ],
      correctAnswer: 2,
      explanation: 'El artículo 29 del Código Penal define a los cómplices como los que, no hallándose comprendidos en el artículo 28 (autores y cooperadores necesarios), cooperan a la ejecución del hecho con actos anteriores o simultáneos. Se castigan con la pena inferior en grado a la fijada para los autores (art. 63 CP).'
    },
    {
      questionText: '¿Cuál de los siguientes es un delito contra la Administración Pública?',
      options: [
        'Estafa.',
        'Falsedad documental.',
        'Cohecho.',
        'Blanqueo de capitales.'
      ],
      correctAnswer: 2,
      explanation: 'El cohecho (arts. 419 y ss. CP) es un delito contra la Administración Pública que castiga al funcionario público que solicita o recibe una dádiva o favor para realizar un acto contrario a sus deberes o para no realizar o retrasar injustificadamente el que debiera practicar. La estafa, la falsedad y el blanqueo pertenecen a otros Títulos del Código Penal.'
    },
    {
      questionText: 'La suspensión de la ejecución de las penas privativas de libertad:',
      options: [
        'Es un derecho del condenado si cumple los requisitos legales.',
        'Solo se puede conceder para penas de prisión no superiores a dos años.',
        'Exige siempre el pago de la responsabilidad civil.',
        'Es una decisión discrecional del Juez o Tribunal, aunque se cumplan los requisitos.'
      ],
      correctAnswer: 1,
      explanation: 'El artículo 80.1 del Código Penal establece que el juez o tribunal "podrán" suspender la ejecución de las penas, lo que indica su carácter facultativo o discrecional, no un derecho automático del reo, aunque se den los presupuestos legales para ello.'
    }
  ]
};