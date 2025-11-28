
import type { Test } from '../../types';

export const TEST_TOPIC_21: Test = {
  id: 'topic-21',
  title: 'Tema 21: Formas del Delito',
  questions: [
    { 
      questionText: 'La conspiración existe cuando:', 
      options: ['Dos o más personas se conciertan para la ejecución de un delito y resuelven ejecutarlo', 'Alguien lo piensa solo', 'Se intenta y falla', 'Se ayuda a otro'], 
      correctAnswer: 0,
      explanation: 'El artículo 17 del Código Penal establece que la conspiración existe cuando dos o más personas se conciertan para la ejecución de un delito y resuelven ejecutarlo.'
    },
    { 
      questionText: 'El cómplice es aquel que:', 
      options: ['Realiza el hecho', 'Coopera con actos anteriores o simultáneos no necesarios', 'Induce', 'Encubre'], 
      correctAnswer: 1,
      explanation: 'El artículo 29 del Código Penal define al cómplice como quien coopera a la ejecución del hecho con actos anteriores o simultáneos que no sean necesarios.'
    },
    { 
      questionText: 'La provocación solo se castiga:', 
      options: ['Siempre', 'En los casos previstos por la Ley', 'Nunca', 'Si hay violencia'], 
      correctAnswer: 1,
      explanation: 'El artículo 18 del Código Penal establece que la provocación, la conspiración y la proposición solo se castigarán en los casos especialmente previstos en la Ley.'
    },
    { 
      questionText: 'La tentativa se castiga con:', 
      options: ['La misma pena que el consumado', 'La pena inferior en uno o dos grados', 'Multa', 'No se castiga'], 
      correctAnswer: 1,
      explanation: 'El artículo 62 del Código Penal establece que a los autores de tentativa se les impondrá la pena inferior en uno o dos grados a la señalada por la Ley para el delito consumado.'
    },
    { 
      questionText: 'Si el sujeto desiste voluntariamente de la ejecución del delito (arrepentimiento):', 
      options: ['Quedará exento de responsabilidad penal por el delito intentado', 'Se le castiga igual', 'Se le rebaja la pena', 'Va a prisión'], 
      correctAnswer: 0,
      explanation: 'El artículo 16.2 del Código Penal establece que quedará exento de responsabilidad penal por el delito intentado quien evite voluntariamente la consumación del delito.'
    },
    { 
      questionText: 'Es autor quien realiza el hecho:', 
      options: ['Por sí solo, conjuntamente o por medio de otro', 'Solo por sí solo', 'Solo conjuntamente', 'Solo por medio de otro'], 
      correctAnswer: 0,
      explanation: 'El artículo 28 del Código Penal considera autores a quienes realizan el hecho por sí solos (autor material), conjuntamente (coautores) o por medio de otro del que se sirven como instrumento (autor mediato).'
    },
    { 
      questionText: 'La proposición existe cuando:', 
      options: ['El que ha resuelto cometer un delito invita a otro u otros a participar en él', 'Dos personas se ponen de acuerdo', 'Se provoca', 'Se sugiere'], 
      correctAnswer: 0,
      explanation: 'El artículo 17 del Código Penal define la proposición como la invitación que hace quien ha resuelto cometer un delito a otra u otras personas para que participen en él.'
    },
    { 
      questionText: 'El cooperador necesario se considera:', 
      options: ['Cómplice', 'Autor', 'Encubridor', 'Testigo'], 
      correctAnswer: 1,
      explanation: 'El artículo 28 del Código Penal equipara a los cooperadores necesarios (quienes cooperan con actos necesarios) con los autores.'
    },
    { 
      questionText: 'Los actos preparatorios (conspiración, proposición, provocación) se castigan:', 
      options: ['En todos los delitos', 'Solo en los casos especialmente previstos en la Ley', 'Nunca', 'Siempre'], 
      correctAnswer: 1,
      explanation: 'El artículo 18 del Código Penal establece expresamente que la provocación, la conspiración y la proposición solo se castigarán en los casos especialmente previstos en la Ley.'
    },
    { 
      questionText: 'El inductor se castiga con la pena de:', 
      options: ['Cómplice', 'Autor', 'Leve', 'Mitad'], 
      correctAnswer: 1,
      explanation: 'El artículo 28 del Código Penal equipara al inductor (quien induce directamente a otro a ejecutar el hecho) con los autores.'
    }
  ]
};

export const TEST_TOPIC_22: Test = {
  id: 'topic-22',
  title: 'Tema 22: Extinción Responsabilidad',
  questions: [
    { 
      questionText: 'La muerte del reo extingue:', 
      options: ['La responsabilidad penal', 'La responsabilidad civil siempre', 'La deuda', 'Nada'], 
      correctAnswer: 0,
      explanation: 'El artículo 130 del Código Penal establece que la responsabilidad criminal se extingue por la muerte del reo.'
    },
    { 
      questionText: 'La prescripción del delito se interrumpe por:', 
      options: ['El paso del tiempo', 'La presentación de querella o denuncia formulada ante el juzgado (y admisión)', 'La huida', 'El silencio'], 
      correctAnswer: 1,
      explanation: 'El artículo 132 del Código Penal establece que la prescripción del delito se interrumpe, quedando sin efecto el tiempo transcurrido, cuando el procedimiento se dirija contra el culpable.'
    },
    { 
      questionText: 'El indulto puede ser:', 
      options: ['Total o parcial', 'Solo total', 'Preventivo', 'Judicial'], 
      correctAnswer: 0,
      explanation: 'El indulto puede ser total (remisión de toda la pena) o parcial (remisión de alguna o algunas de las penas impuestas, o conmutación por otra menos grave).'
    },
    { 
      questionText: 'El perdón del ofendido extingue la pena en delitos:', 
      options: ['Públicos', 'Semipúblicos', 'Leves perseguibles a instancia de parte o cuando la Ley lo prevea', 'Graves'], 
      correctAnswer: 2,
      explanation: 'El artículo 130.1.5 del Código Penal establece que el perdón del ofendido extingue la responsabilidad penal en los delitos leves perseguibles a instancia del agraviado y en los casos en que la Ley así lo prevea.'
    },
    { 
      questionText: 'Los delitos de lesa humanidad y genocidio:', 
      options: ['Prescriben a los 20 años', 'No prescriben', 'Prescriben a los 30 años', 'Prescriben a los 5 años'], 
      correctAnswer: 1,
      explanation: 'El artículo 131.3 del Código Penal establece que los delitos de lesa humanidad y de genocidio, y los delitos contra las personas y bienes protegidos en caso de conflicto armado, no prescribirán en ningún caso.'
    },
    { 
      questionText: 'La responsabilidad civil derivada del delito:', 
      options: ['Se extingue con la muerte', 'Se transmite a los herederos', 'Desaparece', 'La paga el Estado'], 
      correctAnswer: 1,
      explanation: 'El artículo 116 del Código Penal establece que toda persona criminalmente responsable de un delito lo es también civilmente. Esta responsabilidad civil se transmite a los herederos.'
    },
    { 
      questionText: 'El cumplimiento de la condena extingue:', 
      options: ['La responsabilidad penal', 'Los antecedentes inmediatamente', 'La culpa moral', 'La deuda civil'], 
      correctAnswer: 0,
      explanation: 'El artículo 130.2 del Código Penal establece que la responsabilidad penal se extingue por el cumplimiento de la condena.'
    },
    { 
      questionText: 'La amnistía:', 
      options: ['Está prohibida explícitamente', 'No está regulada en la Constitución expresamente como tal (pero prohíbe indultos generales)', 'Es común', 'La da el juez'], 
      correctAnswer: 1,
      explanation: 'El artículo 62.i de la Constitución prohíbe el indulto general. La amnistía, aunque no expresamente prohibida, no está regulada en el ordenamiento actual.'
    },
    { 
      questionText: 'Los antecedentes penales se cancelan:', 
      options: ['De oficio o a instancia de parte tras los plazos legales sin delinquir', 'Nunca', 'Al salir de prisión', 'Pagando'], 
      correctAnswer: 0,
      explanation: 'El artículo 136 del Código Penal regula la cancelación de antecedentes penales, que se produce de oficio o a instancia de parte, transcurridos los plazos establecidos sin haber vuelto a delinquir.'
    },
    { 
      questionText: 'La prescripción de la pena comienza desde:', 
      options: ['La comisión del hecho', 'La firmeza de la sentencia (o quebrantamiento)', 'El juicio', 'La detención'], 
      correctAnswer: 1,
      explanation: 'El artículo 133 del Código Penal establece que las penas impuestas por sentencia firme prescriben desde la fecha de la firmeza de la sentencia o desde el quebrantamiento de la condena.'
    }
  ]
};

export const TEST_TOPIC_23: Test = {
  id: 'topic-23',
  title: 'Tema 23: La Pena',
  questions: [
    { 
      questionText: 'La pena de trabajos en beneficio de la comunidad requiere:', 
      options: ['Pago previo', 'El consentimiento del penado', 'Ser funcionario', 'Tener coche'], 
      correctAnswer: 1,
      explanation: 'El artículo 49 del Código Penal establece que los trabajos en beneficio de la comunidad no podrán imponerse sin el consentimiento del penado.'
    },
    { 
      questionText: 'Las penas privativas de derechos incluyen:', 
      options: ['La prisión', 'La inhabilitación absoluta o especial', 'La multa', 'El arresto'], 
      correctAnswer: 1,
      explanation: 'El artículo 39 del Código Penal enumera las penas privativas de derechos, entre las que se encuentran la inhabilitación absoluta, la inhabilitación especial, la suspensión de empleo o cargo público, etc.'
    },
    { 
      questionText: 'La medida de seguridad de internamiento en centro psiquiátrico es:', 
      options: ['Privativa de libertad', 'No privativa', 'Una pena', 'Voluntaria'], 
      correctAnswer: 0,
      explanation: 'El artículo 96 del Código Penal clasifica las medidas de seguridad en privativas y no privativas de libertad. El internamiento en centro psiquiátrico es una medida privativa de libertad.'
    },
    { 
      questionText: 'La prisión permanente revisable es una pena:', 
      options: ['Grave', 'Menos grave', 'Leve', 'Inconstitucional'], 
      correctAnswer: 0,
      explanation: 'El artículo 33 del Código Penal clasifica la prisión permanente revisable como pena grave.'
    },
    { 
      questionText: 'La pena de multa se impone generalmente por el sistema de:', 
      options: ['Días-multa', 'Cuota fija', 'Proporcional', 'Arbitrio judicial'], 
      correctAnswer: 0,
      explanation: 'El artículo 50 del Código Penal establece el sistema de días-multa como el general para la imposición de la pena de multa.'
    },
    { 
      questionText: 'La localización permanente tiene una duración máxima de:', 
      options: ['3 meses', '6 meses', '1 año', '12 días'], 
      correctAnswer: 1,
      explanation: 'El artículo 37 del Código Penal establece que la localización permanente tiene una duración de hasta seis meses.'
    },
    { 
      questionText: 'La responsabilidad personal subsidiaria por impago de multa:', 
      options: ['No existe', 'Supone un día de privación de libertad por cada dos cuotas no satisfechas', 'Es de un año', 'Se paga con trabajo siempre'], 
      correctAnswer: 1,
      explanation: 'El artículo 53 del Código Penal establece que la responsabilidad personal subsidiaria por impago de multa será de un día de privación de libertad por cada dos cuotas diarias no satisfechas.'
    },
    { 
      questionText: 'Las penas se clasifican en:', 
      options: ['Graves, menos graves y leves', 'Altas y bajas', 'Caras y baratas', 'Justas e injustas'], 
      correctAnswer: 0,
      explanation: 'El artículo 33 del Código Penal clasifica las penas en graves, menos graves y leves, según su naturaleza y duración.'
    },
    { 
      questionText: 'No se reputan penas:', 
      options: ['La prisión', 'La detención y prisión preventiva', 'La multa', 'La inhabilitación'], 
      correctAnswer: 1,
      explanation: 'El artículo 35 del Código Penal establece expresamente que no se reputarán penas la detención y prisión preventiva y las demás medidas cautelares de naturaleza penal.'
    },
    { 
      questionText: 'La prohibición de aproximación a la víctima es una pena:', 
      options: ['Privativa de libertad', 'Privativa de derechos', 'Pecuniaria', 'Leve siempre'], 
      correctAnswer: 1,
      explanation: 'El artículo 48 del Código Penal regula la prohibición de aproximación como una pena privativa de derechos.'
    }
  ]
};

export const TEST_TOPIC_24: Test = {
  id: 'topic-24',
  title: 'Tema 24: Suspensión',
  questions: [
    { 
      questionText: 'El plazo de suspensión de la pena será de:', 
      options: ['2 a 5 años para penas <= 2 años', '1 año fijo', '10 años', 'Indefinido'], 
      correctAnswer: 0,
      explanation: 'El artículo 81 del Código Penal establece que el plazo de suspensión será de dos a cinco años para las penas privativas de libertad no superiores a dos años.'
    },
    { 
      questionText: 'La suspensión extraordinaria por enfermedad muy grave:', 
      options: ['No requiere requisito de tiempo de pena', 'Requiere haber cumplido la mitad', 'Es automática', 'No existe'], 
      correctAnswer: 0,
      explanation: 'El artículo 80.4 del Código Penal permite suspender la pena sin sujeción a requisito alguno en caso de enfermedad muy grave con padecimientos incurables.'
    },
    { 
      questionText: 'Si se delinque durante la suspensión:', 
      options: ['No pasa nada', 'Se puede revocar la suspensión y ejecutar la pena', 'Se perdona', 'Se paga multa'], 
      correctAnswer: 1,
      explanation: 'El artículo 86 del Código Penal establece que el juez o tribunal revocará la suspensión y ordenará la ejecución de la pena si el penado delinque durante el plazo de suspensión.'
    },
    { 
      questionText: 'La suspensión ordinaria requiere que la pena de prisión no exceda de:', 
      options: ['1 año', '2 años', '3 años', '4 años'], 
      correctAnswer: 1,
      explanation: 'El artículo 80.1 del Código Penal establece como requisito que la pena o la suma de las impuestas no sea superior a dos años.'
    },
    { 
      questionText: 'Para suspender la pena es necesario:', 
      options: ['Ser reincidente', 'Haber delinquido por primera vez (o no tener antecedentes computables)', 'Tener trabajo', 'Ser joven'], 
      correctAnswer: 1,
      explanation: 'El artículo 80.2.1ª del Código Penal exige que el condenado haya delinquido por primera vez (sin tener en cuenta antecedentes cancelados o por delitos leves/imprudentes).'
    },
    { 
      questionText: 'La sustitución de la pena por expulsión se aplica a extranjeros con pena superior a:', 
      options: ['6 meses', '1 año', '2 años', '5 años'], 
      correctAnswer: 1,
      explanation: 'El artículo 89 del Código Penal establece la sustitución de penas de prisión superiores a un año por la expulsión del territorio español para ciudadanos extranjeros.'
    },
    { 
      questionText: 'La suspensión puede condicionarse al cumplimiento de:', 
      options: ['Reglas de conducta', 'Deseos de la víctima', 'Órdenes de la policía', 'Nada'], 
      correctAnswer: 0,
      explanation: 'El artículo 83 del Código Penal permite condicionar la suspensión al cumplimiento de prohibiciones y deberes (reglas de conducta).'
    },
    { 
      questionText: 'El plazo de suspensión se computa desde:', 
      options: ['La fecha de la sentencia firme', 'El día del delito', 'El ingreso en prisión', 'Nunca'], 
      correctAnswer: 0,
      explanation: 'El artículo 82 del Código Penal establece que el plazo de suspensión se computará desde la fecha de la resolución que la acuerda (normalmente en sentencia firme).'
    },
    { 
      questionText: 'La remisión definitiva de la pena se produce:', 
      options: ['Si transcurre el plazo de suspensión sin delinquir y cumpliendo reglas', 'Al pagar', 'A los 10 años', 'Al morir'], 
      correctAnswer: 0,
      explanation: 'El artículo 87 del Código Penal establece que transcurrido el plazo de suspensión sin haber cometido delito y cumplidas las reglas, se acordará la remisión de la pena.'
    },
    { 
      questionText: 'Para drogodependientes, la pena se puede suspender si no supera los:', 
      options: ['2 años', '5 años', '3 años', '6 años'], 
      correctAnswer: 1,
      explanation: 'El artículo 80.5 del Código Penal permite suspender penas privativas de libertad no superiores a cinco años si el delito se cometió a causa de la dependencia y se certifica la deshabituación.'
    }
  ]
};

export const TEST_TOPIC_25: Test = {
  id: 'topic-25',
  title: 'Tema 25: Delitos AAPP',
  questions: [
    { 
      questionText: 'La desobediencia grave a la autoridad es delito si es:', 
      options: ['Reiterada', 'Negativa abierta a cumplir una orden legítima', 'Secreta', 'Leve'], 
      correctAnswer: 1,
      explanation: 'El artículo 556 del Código Penal castiga la desobediencia grave a la autoridad, entendida como una negativa abierta y reiterada a cumplir una orden legítima.'
    },
    { 
      questionText: 'El delito de atentado requiere:', 
      options: ['Insultos', 'Acometimiento, empleo de fuerza, intimidación grave o resistencia activa grave', 'Huir', 'Mentir'], 
      correctAnswer: 1,
      explanation: 'El artículo 550 del Código Penal define el atentado como el acometimiento, empleo de fuerza, intimidación grave o resistencia activa también grave contra la autoridad, sus agentes o funcionarios públicos.'
    },
    { 
      questionText: 'La malversación protege:', 
      options: ['El honor', 'El patrimonio público', 'La libertad', 'La salud'], 
      correctAnswer: 1,
      explanation: 'El delito de malversación (art. 432 CP) protege el patrimonio público y la correcta gestión de los caudales públicos.'
    },
    { 
      questionText: 'La prevaricación consiste en dictar una resolución arbitraria:', 
      options: ['Por error', 'A sabiendas de su injusticia', 'Por orden superior', 'Por miedo'], 
      correctAnswer: 1,
      explanation: 'El artículo 404 del Código Penal castiga a la autoridad o funcionario público que, a sabiendas de su injusticia, dictare una resolución arbitraria en un asunto administrativo.'
    },
    { 
      questionText: 'El cohecho pasivo lo comete:', 
      options: ['El particular', 'La autoridad o funcionario que recibe/solicita dádiva', 'El juez', 'Nadie'], 
      correctAnswer: 1,
      explanation: 'El cohecho pasivo (art. 419 CP) es cometido por la autoridad o funcionario público que solicita o recibe dádiva o promesa.'
    },
    { 
      questionText: 'El tráfico de influencias lo puede cometer:', 
      options: ['Solo funcionario', 'Funcionario o particular', 'Solo particular', 'Nadie'], 
      correctAnswer: 1,
      explanation: 'El Código Penal tipifica el tráfico de influencias cometido tanto por funcionario público (art. 428) como por particular (art. 429).'
    },
    { 
      questionText: 'La revelación de secretos por funcionario público:', 
      options: ['Es delito', 'Es falta administrativa', 'Es legal', 'Es un derecho'], 
      correctAnswer: 0,
      explanation: 'El artículo 417 del Código Penal castiga a la autoridad o funcionario público que revelare secretos o informaciones de los que tenga conocimiento por razón de su oficio o cargo.'
    },
    { 
      questionText: 'El abandono de destino para no impedir delitos es:', 
      options: ['Delito', 'Falta leve', 'Permiso', 'Huelga'], 
      correctAnswer: 0,
      explanation: 'El artículo 408 del Código Penal castiga la omisión del deber de perseguir delitos o el abandono de destino para no impedirlos.'
    },
    { 
      questionText: 'Los desórdenes públicos sancionan la alteración de:', 
      options: ['La paz pública', 'El tráfico', 'El sueño', 'La moda'], 
      correctAnswer: 0,
      explanation: 'El artículo 557 del Código Penal castiga a quienes actuando en grupo o individualmente pero amparados en él, alteren la paz pública.'
    },
    { 
      questionText: 'La tenencia ilícita de armas es un delito contra:', 
      options: ['El orden público', 'La seguridad colectiva', 'El patrimonio', 'La salud'], 
      correctAnswer: 0,
      explanation: 'Los delitos de tenencia, tráfico y depósito de armas se encuentran regulados en el Título XXII "Delitos contra el orden público".'
    }
  ]
};

export const TEST_TOPIC_26: Test = {
  id: 'topic-26',
  title: 'Tema 26: Delitos Personas',
  questions: [
    { 
      questionText: 'El homicidio se diferencia del asesinato por la ausencia de:', 
      options: ['Muerte', 'Circunstancias específicas (alevosía, precio, ensañamiento, para facilitar otro delito)', 'Dolo', 'Arma'], 
      correctAnswer: 1,
      explanation: 'El asesinato (art. 139 CP) es un homicidio cualificado por la concurrencia de alevosía, precio/recompensa/promesa, ensañamiento o para facilitar/evitar otro delito.'
    },
    { 
      questionText: 'El delito de lesiones requiere:', 
      options: ['Solo una primera asistencia facultativa', 'Tratamiento médico o quirúrgico (además de la primera asistencia)', 'Dolor', 'Sangre'], 
      correctAnswer: 1,
      explanation: 'El artículo 147 del Código Penal establece que el delito de lesiones requiere objetivamente para su sanidad, además de una primera asistencia facultativa, tratamiento médico o quirúrgico.'
    },
    { 
      questionText: 'La extorsión es un delito contra:', 
      options: ['El patrimonio', 'La libertad sexual', 'El honor', 'La administración'], 
      correctAnswer: 0,
      explanation: 'La extorsión (art. 243 CP) es un delito contra el patrimonio y el orden socioeconómico.'
    },
    { 
      questionText: 'La alevosía convierte el homicidio en:', 
      options: ['Asesinato', 'Homicidio imprudente', 'Falta', 'Lesiones'], 
      correctAnswer: 0,
      explanation: 'La concurrencia de alevosía es una de las circunstancias que cualifican el homicidio como asesinato (art. 139 CP).'
    },
    { 
      questionText: 'La inducción al suicidio:', 
      options: ['Es impune', 'Es delito', 'Es falta', 'Es legal'], 
      correctAnswer: 1,
      explanation: 'El artículo 143 del Código Penal castiga al que induzca al suicidio de otro.'
    },
    { 
      questionText: 'Las amenazas consisten en:', 
      options: ['Anunciar un mal futuro constitutivo o no de delito', 'Golpear', 'Insultar', 'Robar'], 
      correctAnswer: 0,
      explanation: 'El delito de amenazas (art. 169 CP) consiste en anunciar a otro un mal futuro, injusto, determinado y posible, con el propósito de intimidar.'
    },
    { 
      questionText: 'El robo con fuerza en las cosas requiere:', 
      options: ['Escalamiento, rompimiento, llaves falsas...', 'Violencia física', 'Intimidación', 'Engaño'], 
      correctAnswer: 0,
      explanation: 'El artículo 238 del Código Penal enumera las circunstancias de fuerza en las cosas: escalamiento, rompimiento de pared/techo/suelo, fractura de puerta/ventana, uso de llaves falsas, etc.'
    },
    { 
      questionText: 'El hurto se distingue del robo por:', 
      options: ['La cuantía', 'La ausencia de fuerza, violencia o intimidación', 'El objeto', 'El lugar'], 
      correctAnswer: 1,
      explanation: 'El hurto (art. 234 CP) consiste en tomar cosas muebles ajenas sin la voluntad de su dueño, sin fuerza en las cosas ni violencia o intimidación en las personas (que constituirían robo).'
    },
    { 
      questionText: 'La detención ilegal cometida por particular:', 
      options: ['Es delito', 'Es legal', 'Es falta', 'Es broma'], 
      correctAnswer: 0,
      explanation: 'El artículo 163 del Código Penal castiga al particular que encerrare o detuviere a otro, privándole de su libertad.'
    },
    { 
      questionText: 'La violencia de género (lesiones) requiere que la víctima sea:', 
      options: ['Cualquier mujer', 'Esposa o mujer ligada por análoga relación de afectividad (aún sin convivencia)', 'Hija', 'Madre'], 
      correctAnswer: 1,
      explanation: 'El artículo 153 del Código Penal protege específicamente a quien sea o haya sido esposa, o mujer que esté o haya estado ligada a él por una análoga relación de afectividad aun sin convivencia.'
    }
  ]
};

export const TEST_TOPIC_27: Test = {
  id: 'topic-27',
  title: 'Tema 27: Delitos Sexuales/Honor',
  questions: [
    { 
      questionText: 'El consentimiento sexual debe ser:', 
      options: ['Presunto', 'Manifestado libremente mediante actos que expresen clara voluntad', 'Tácito', 'Forzado'], 
      correctAnswer: 1,
      explanation: 'El artículo 178 del Código Penal (tras la reforma de la LO 10/2022) establece que solo se entenderá que hay consentimiento cuando se haya manifestado libremente mediante actos que, en atención a las circunstancias del caso, expresen de manera clara la voluntad de la persona.'
    },
    { 
      questionText: 'La calumnia consiste en:', 
      options: ['Insultar', 'La imputación de un delito hecha con conocimiento de su falsedad o temerario desprecio a la verdad', 'Hablar mal', 'Criticar'], 
      correctAnswer: 1,
      explanation: 'El artículo 205 del Código Penal define la calumnia como la imputación de un delito hecha con conocimiento de su falsedad o temerario desprecio hacia la verdad.'
    },
    { 
      questionText: 'En los delitos contra el honor, la "exceptio veritatis" (prueba de la verdad) se admite en:', 
      options: ['Injuria siempre', 'Calumnia', 'Nunca', 'Amenazas'], 
      correctAnswer: 1,
      explanation: 'El artículo 207 del Código Penal admite la prueba de la verdad en la calumnia (el acusado quedará exento de toda pena probando el hecho criminal imputado).'
    },
    { 
      questionText: 'La agresión sexual incluye:', 
      options: ['Cualquier acto contra la libertad sexual sin consentimiento', 'Solo violación', 'Solo tocamientos', 'Solo con violencia'], 
      correctAnswer: 0,
      explanation: 'Tras la reforma de la LO 10/2022, se unifica el abuso y la agresión, considerándose agresión sexual cualquier acto que atente contra la libertad sexual de otra persona sin su consentimiento.'
    },
    { 
      questionText: 'Si la víctima de agresión sexual es menor de 16 años:', 
      options: ['No cabe consentimiento válido', 'Depende de la madurez', 'Es legal', 'Es falta'], 
      correctAnswer: 0,
      explanation: 'El artículo 181 del Código Penal establece que siempre se considera agresión sexual cuando la víctima sea menor de 16 años, ya que no cabe consentimiento válido.'
    },
    { 
      questionText: 'Las injurias graves hechas con publicidad:', 
      options: ['Son delito', 'Son falta', 'Son libres', 'Son legales'], 
      correctAnswer: 0,
      explanation: 'El artículo 209 del Código Penal castiga las injurias graves hechas con publicidad.'
    },
    { 
      questionText: 'El perdón del ofendido en delitos contra el honor:', 
      options: ['Extingue la acción penal', 'No sirve', 'Atenúa', 'Agrava'], 
      correctAnswer: 0,
      explanation: 'El artículo 215 del Código Penal establece que el perdón del ofendido o de su representante legal, en su caso, extingue la acción penal.'
    },
    { 
      questionText: 'La prostitución coactiva es delito contra:', 
      options: ['La libertad sexual', 'El patrimonio', 'El honor', 'La salud'], 
      correctAnswer: 0,
      explanation: 'El delito de prostitución coactiva (art. 187 CP) atenta contra la libertad sexual de la víctima.'
    },
    { 
      questionText: 'La pornografía infantil es delito:', 
      options: ['Siempre', 'Solo si se distribuye', 'Solo si se vende', 'Nunca'], 
      correctAnswer: 0,
      explanation: 'El artículo 189 del Código Penal castiga la producción, venta, distribución, exhibición y tenencia de pornografía infantil.'
    },
    { 
      questionText: 'El acoso sexual requiere:', 
      options: ['Solicitar favores sexuales en el ámbito laboral/docente provocando situación objetiva y gravemente intimidatoria/hostil/humillante', 'Mirar mal', 'Invitar a café', 'Ser jefe'], 
      correctAnswer: 0,
      explanation: 'El artículo 184 del Código Penal define el acoso sexual como solicitar favores de naturaleza sexual, en el ámbito de una relación laboral, docente o de prestación de servicios, provocando a la víctima una situación objetiva y gravemente intimidatoria, hostil o humillante.'
    }
  ]
};

export const TEST_TOPIC_28: Test = {
  id: 'topic-28',
  title: 'Tema 28: LOGP',
  questions: [
    { 
      questionText: 'La LOGP fue la primera Ley Orgánica aprobada tras la Constitución, en fecha:', 
      options: ['26 de septiembre de 1979', '1 de enero de 1980', '6 de diciembre de 1978', '20 de noviembre de 1975'], 
      correctAnswer: 0,
      explanation: 'La Ley Orgánica 1/1979, General Penitenciaria, fue aprobada el 26 de septiembre de 1979.'
    },
    { 
      questionText: 'El sistema penitenciario español se define como:', 
      options: ['De individualización científica', 'Progresivo puro', 'Regresivo', 'Militar'], 
      correctAnswer: 0,
      explanation: 'El artículo 72.1 de la LOGP establece que el sistema penitenciario español es el de individualización científica, separado en grados.'
    },
    { 
      questionText: 'Las mujeres conservan el derecho a tener consigo a sus hijos en prisión hasta que cumplan:', 
      options: ['1 año', '3 años', '6 años', '5 años'], 
      correctAnswer: 1,
      explanation: 'El artículo 38 de la LOGP establece que las internas podrán tener en su compañía a los hijos menores de tres años.'
    },
    { 
      questionText: 'El fin primordial de las instituciones penitenciarias es:', 
      options: ['La reeducación y reinserción social', 'El castigo', 'La custodia', 'La venganza'], 
      correctAnswer: 0,
      explanation: 'El artículo 1 de la LOGP establece que las instituciones penitenciarias tienen como fin primordial la reeducación y la reinserción social de los sentenciados.'
    },
    { 
      questionText: 'Los grados de tratamiento son:', 
      options: ['1, 2, 3 y libertad condicional', 'A, B, C', 'Alto, medio, bajo', 'Abierto, cerrado'], 
      correctAnswer: 0,
      explanation: 'El artículo 72 de la LOGP establece tres grados de tratamiento (primero, segundo y tercero). La libertad condicional se configura como la última fase (a veces referida como cuarto grado).'
    },
    { 
      questionText: 'El tratamiento penitenciario es:', 
      options: ['Voluntario para el interno', 'Obligatorio', 'Forzoso', 'Innecesario'], 
      correctAnswer: 0,
      explanation: 'El artículo 112.3 del Reglamento Penitenciario (y 61 LOGP implícitamente) establece que el tratamiento será voluntario, no pudiendo imponerse coactivamente.'
    },
    { 
      questionText: 'La separación entre detenidos y penados es:', 
      options: ['Obligatoria', 'Opcional', 'Recomendable', 'Imposible'], 
      correctAnswer: 0,
      explanation: 'El artículo 16 de la LOGP establece la separación obligatoria entre detenidos (preventivos) y penados (condenados).'
    },
    { 
      questionText: 'La LOGP reconoce el derecho de los internos a:', 
      options: ['Un trabajo remunerado', 'No trabajar', 'Elegir celda', 'Tener móvil'], 
      correctAnswer: 0,
      explanation: 'El artículo 26 de la LOGP establece que el trabajo será un derecho y un deber del interno, y tendrá carácter remunerado.'
    },
    { 
      questionText: 'La asistencia religiosa es:', 
      options: ['Un derecho', 'Una obligación', 'Prohibida', 'Solo católica'], 
      correctAnswer: 0,
      explanation: 'El artículo 54 de la LOGP garantiza la libertad religiosa de los internos y su derecho a la asistencia religiosa.'
    },
    { 
      questionText: 'El Reglamento Penitenciario desarrolla la LOGP y es de:', 
      options: ['1996', '1979', '2011', '2000'], 
      correctAnswer: 0,
      explanation: 'El vigente Reglamento Penitenciario fue aprobado por Real Decreto 190/1996, de 9 de febrero.'
    }
  ]
};

export const TEST_TOPIC_29: Test = {
  id: 'topic-29',
  title: 'Tema 29: El Interno',
  questions: [
    { 
      questionText: 'Los internos tienen el deber de:', 
      options: ['Observar una conducta correcta y acatar las normas de régimen interior', 'Trabajar gratis', 'No hablar', 'Rezar'], 
      correctAnswer: 0,
      explanation: 'El artículo 4 de la LOGP establece como deber de los internos observar una conducta correcta y acatar las normas de régimen interior.'
    },
    { 
      questionText: 'Respecto a la religión, la Administración:', 
      options: ['Impone la católica', 'Garantiza la libertad religiosa y de culto', 'Prohíbe el culto', 'Ignora el tema'], 
      correctAnswer: 1,
      explanation: 'El artículo 54 de la LOGP establece que la Administración garantizará la libertad religiosa y de culto de los internos.'
    },
    { 
      questionText: 'Las comunicaciones orales pueden realizarse:', 
      options: ['Por locutorios y vis a vis', 'Solo por carta', 'Solo por teléfono', 'Por señales de humo'], 
      correctAnswer: 0,
      explanation: 'El artículo 51 de la LOGP regula las comunicaciones orales, que pueden ser a través de locutorios o, en su caso, comunicaciones íntimas, familiares y de convivencia (vis a vis).'
    },
    { 
      questionText: 'El derecho a la información de los internos incluye:', 
      options: ['Prensa, radio y TV', 'Internet libre', 'Móvil', 'Cine diario'], 
      correctAnswer: 0,
      explanation: 'El artículo 58 de la LOGP reconoce el derecho de los internos a la información a través de prensa, radio y televisión.'
    },
    { 
      questionText: 'Las peticiones y quejas pueden dirigirse a:', 
      options: ['Director, JVP, Defensor del Pueblo...', 'Solo al Director', 'Solo al Juez', 'A la prensa'], 
      correctAnswer: 0,
      explanation: 'El artículo 50 de la LOGP permite a los internos formular peticiones y quejas al Director, al Juez de Vigilancia, al Defensor del Pueblo, al Ministerio Fiscal, etc.'
    },
    { 
      questionText: 'El interno tiene derecho a ser designado por:', 
      options: ['Su nombre', 'Un número', 'Un mote', 'Su delito'], 
      correctAnswer: 0,
      explanation: 'El artículo 4 de la LOGP establece el derecho del interno a ser designado por su propio nombre.'
    },
    { 
      questionText: 'La higiene personal es:', 
      options: ['Un deber y un derecho', 'Opcional', 'Prohibida', 'Solo los domingos'], 
      correctAnswer: 0,
      explanation: 'El artículo 3 de la LOGP y el 19 del Reglamento Penitenciario configuran la higiene personal como un derecho y un deber del interno.'
    },
    { 
      questionText: 'Las comunicaciones con abogados:', 
      options: ['Son confidenciales salvo orden judicial (y terrorismo)', 'Se graban siempre', 'Se escuchan', 'Se prohíben'], 
      correctAnswer: 0,
      explanation: 'El artículo 51.2 de la LOGP establece que las comunicaciones con abogados no podrán ser suspendidas ni intervenidas salvo por orden judicial y en supuestos de terrorismo.'
    },
    { 
      questionText: 'Los internos extranjeros tienen derecho a comunicarse con:', 
      options: ['Sus representantes diplomáticos o consulares', 'Nadie', 'Solo el Director', 'La ONU'], 
      correctAnswer: 0,
      explanation: 'El artículo 51.4 de la LOGP reconoce el derecho de los internos extranjeros a comunicar con sus representantes diplomáticos o consulares.'
    },
    { 
      questionText: 'La participación de los internos se canaliza a través de:', 
      options: ['Comisiones de internos', 'Sindicatos', 'Partidos', 'Huelgas'], 
      correctAnswer: 0,
      explanation: 'El artículo 22 de la LOGP fomenta la participación de los internos en la organización de actividades a través de Comisiones.'
    }
  ]
};

export const TEST_TOPIC_30: Test = {
  id: 'topic-30',
  title: 'Tema 30: Personal Penitenciario',
  questions: [
    { 
      questionText: 'El Cuerpo Especial de Instituciones Penitenciarias es del grupo:', 
      options: ['A1', 'A2', 'C1', 'C2'], 
      correctAnswer: 1,
      explanation: 'El Cuerpo Especial de Instituciones Penitenciarias se clasifica en el Subgrupo A2.'
    },
    { 
      questionText: 'La seguridad exterior de los centros corresponde a:', 
      options: ['Los funcionarios de prisiones', 'Las Fuerzas y Cuerpos de Seguridad del Estado', 'Seguridad privada', 'Los internos'], 
      correctAnswer: 1,
      explanation: 'El artículo 280 del Reglamento Penitenciario (y la LO 2/86) establece que la seguridad exterior corresponde a las Fuerzas y Cuerpos de Seguridad del Estado.'
    },
    { 
      questionText: 'El Director del Centro es nombrado por:', 
      options: ['El Subdelegado del Gobierno', 'El Secretario General de II.PP. (libre designación)', 'Los funcionarios', 'Oposición'], 
      correctAnswer: 1,
      explanation: 'El Director del Centro Penitenciario es un puesto de libre designación nombrado por el Secretario General de Instituciones Penitenciarias.'
    },
    { 
      questionText: 'El Cuerpo de Ayudantes (C1) realiza funciones de:', 
      options: ['Vigilancia y custodia interior', 'Tratamiento médico', 'Dirección', 'Cocina'], 
      correctAnswer: 0,
      explanation: 'El Cuerpo de Ayudantes de Instituciones Penitenciarias (C1) tiene encomendadas principalmente las tareas de vigilancia y custodia interior.'
    },
    { 
      questionText: 'Los funcionarios tienen la condición de:', 
      options: ['Agentes de la autoridad', 'Jueces', 'Militares', 'Civiles sin autoridad'], 
      correctAnswer: 0,
      explanation: 'El artículo 80 de la LOGP establece que los funcionarios de Instituciones Penitenciarias tendrán la condición de agentes de la autoridad.'
    },
    { 
      questionText: 'El Consejo de Dirección es un órgano:', 
      options: ['Colegiado de gobierno del centro', 'Unipersonal', 'Consultivo', 'Judicial'], 
      correctAnswer: 0,
      explanation: 'El artículo 269 del Reglamento Penitenciario define al Consejo de Dirección como el órgano colegiado de gobierno del Centro Penitenciario.'
    },
    { 
      questionText: 'La Junta de Tratamiento se encarga de:', 
      options: ['Establecer los programas de tratamiento y clasificación', 'La seguridad', 'La limpieza', 'La comida'], 
      correctAnswer: 0,
      explanation: 'El artículo 272 del Reglamento Penitenciario atribuye a la Junta de Tratamiento las funciones relativas a la clasificación y tratamiento de los internos.'
    },
    { 
      questionText: 'El Jefe de Servicios coordina:', 
      options: ['Los servicios de vigilancia', 'A los médicos', 'A los maestros', 'Al Director'], 
      correctAnswer: 0,
      explanation: 'El artículo 284 del Reglamento Penitenciario establece que el Jefe de Servicios coordina los servicios de vigilancia bajo la dirección del Subdirector de Seguridad.'
    },
    { 
      questionText: 'El deber de residencia obliga a vivir:', 
      options: ['Donde se preste servicio o se permita', 'En la prisión', 'En Madrid', 'Donde se quiera'], 
      correctAnswer: 0,
      explanation: 'Los funcionarios tienen el deber de residir en el término municipal donde presten su función, o en otro distinto siempre que se garantice el cumplimiento del servicio (previa autorización).'
    },
    { 
      questionText: 'El uniforme es obligatorio:', 
      options: ['Durante el servicio', 'En casa', 'Nunca', 'Solo en desfiles'], 
      correctAnswer: 0,
      explanation: 'El artículo 325 del Reglamento Penitenciario establece la obligatoriedad del uso del uniforme durante la prestación del servicio.'
    }
  ]
};
