
import type { Test } from '../../types';

export const TEST_TOPIC_41: Test = {
  id: 'topic-41',
  title: 'Tema 41: Régimen Disciplinario',
  questions: [
    { 
      questionText: 'El principio de legalidad en materia disciplinaria exige:', 
      options: ['Que las infracciones y sanciones estén tipificadas en la Ley (y Reglamento)', 'Que decida el Director', 'Que sea rápido', 'Que sea severo'], 
      correctAnswer: 0,
      explanation: 'El artículo 41 de la LOGP establece el principio de legalidad, exigiendo que las infracciones y sanciones estén tipificadas en la Ley y el Reglamento.'
    },
    { 
      questionText: '¿Se puede sancionar dos veces por el mismo hecho?', 
      options: ['Sí', 'No (Non bis in idem)', 'A veces', 'Si es grave sí'], 
      correctAnswer: 1,
      explanation: 'El principio "non bis in idem" prohíbe sancionar dos veces por el mismo hecho, tanto en el ámbito penal como disciplinario.'
    },
    { 
      questionText: 'La agresión a un funcionario se considera falta:', 
      options: ['Leve', 'Grave', 'Muy grave', 'No es falta'], 
      correctAnswer: 2,
      explanation: 'El artículo 109 del Reglamento Penitenciario tipifica la agresión física a funcionarios como falta muy grave.'
    },
    { 
      questionText: 'El aislamiento en celda como sanción no puede exceder de:', 
      options: ['14 días', '30 días', '7 días', '20 días'], 
      correctAnswer: 0,
      explanation: 'El artículo 42 de la LOGP establece que el aislamiento en celda no podrá exceder de catorce días.'
    },
    { 
      questionText: 'Las sanciones las impone:', 
      options: ['La Comisión Disciplinaria (o Director según gravedad)', 'El Juez', 'El Funcionario', 'El Médico'], 
      correctAnswer: 0,
      explanation: 'El artículo 44 de la LOGP atribuye la imposición de sanciones por faltas muy graves a la Comisión Disciplinaria, y por faltas graves y leves al Director.'
    },
    { 
      questionText: 'Las faltas muy graves prescriben a los:', 
      options: ['3 años', '2 años', '1 año', '6 meses'], 
      correctAnswer: 0,
      explanation: 'El artículo 255 del Reglamento Penitenciario establece que las faltas muy graves prescriben a los tres años.'
    },
    { 
      questionText: 'Contra la sanción cabe recurso ante:', 
      options: ['El Juez de Vigilancia Penitenciaria', 'El Rey', 'El Ministro', 'Nadie'], 
      correctAnswer: 0,
      explanation: 'El artículo 76 de la LOGP establece que los internos pueden recurrir las sanciones ante el Juez de Vigilancia Penitenciaria.'
    },
    { 
      questionText: 'La sanción de aislamiento no se aplica a:', 
      options: ['Mujeres gestantes y madres lactantes (hasta 6 meses hijo)', 'Hombres', 'Jóvenes', 'Reincidentes'], 
      correctAnswer: 0,
      explanation: 'El artículo 254 del Reglamento Penitenciario prohíbe aplicar el aislamiento en celda a mujeres gestantes y madres lactantes hasta que el hijo cumpla seis meses.'
    },
    { 
      questionText: 'La ejecución de la sanción puede suspenderse:', 
      options: ['Sí, por el Juez o la Comisión', 'No, nunca', 'Solo si paga', 'Si llora'], 
      correctAnswer: 0,
      explanation: 'El artículo 260 del Reglamento Penitenciario permite suspender la ejecución de las sanciones por motivos de salud u otros justificados.'
    },
    { 
      questionText: 'La instigación a motines es falta:', 
      options: ['Muy grave', 'Leve', 'Grave', 'No es falta'], 
      correctAnswer: 0,
      explanation: 'El artículo 109 del Reglamento Penitenciario tipifica la instigación a motines como falta muy grave.'
    }
  ]
};

export const TEST_TOPIC_42: Test = {
  id: 'topic-42',
  title: 'Tema 42: Recompensas',
  questions: [
    { 
      questionText: 'Las recompensas pueden ser revocadas:', 
      options: ['Si se aplicaron con falsedad de datos', 'Nunca', 'Si el interno quiere', 'Al salir en libertad'], 
      correctAnswer: 0,
      explanation: 'El artículo 266 del Reglamento Penitenciario permite revocar las recompensas si se acredita que se concedieron con falsedad de datos.'
    },
    { 
      questionText: '¿Cuál es una recompensa válida?', 
      options: ['Alcohol', 'Visitas extraordinarias', 'Armas', 'Drogas'], 
      correctAnswer: 1,
      explanation: 'El artículo 263 del Reglamento Penitenciario enumera las comunicaciones especiales como una de las recompensas posibles.'
    },
    { 
      questionText: 'Las comunicaciones especiales adicionales pueden darse como:', 
      options: ['Castigo', 'Recompensa', 'Derecho básico', 'Obligación'], 
      correctAnswer: 1,
      explanation: 'El artículo 263 del Reglamento Penitenciario incluye las comunicaciones especiales entre las recompensas.'
    },
    { 
      questionText: 'Las notas meritorias:', 
      options: ['Se anotan en el expediente', 'Se borran', 'Son malas', 'No sirven'], 
      correctAnswer: 0,
      explanation: 'El artículo 263 del Reglamento Penitenciario establece que las notas meritorias se anotarán en el expediente personal del interno.'
    },
    { 
      questionText: 'La reducción de condena por trabajo (antigua redención):', 
      options: ['Fue derogada (salvo régimen transitorio CP 1973)', 'Sigue vigente', 'Es nueva', 'Aplica a todos'], 
      correctAnswer: 0,
      explanation: 'La redención de penas por el trabajo fue derogada con el Código Penal de 1995, manteniéndose solo en régimen transitorio para condenas anteriores.'
    },
    { 
      questionText: 'Los premios en metálico:', 
      options: ['Existen como recompensa', 'Están prohibidos', 'Son soborno', 'Son salario'], 
      correctAnswer: 0,
      explanation: 'El artículo 263 del Reglamento Penitenciario contempla los premios en metálico como una de las recompensas posibles.'
    },
    { 
      questionText: 'La concesión de recompensas corresponde a:', 
      options: ['La Comisión Disciplinaria', 'El Juez', 'El Funcionario', 'El interno'], 
      correctAnswer: 0,
      explanation: 'El artículo 264 del Reglamento Penitenciario atribuye a la Comisión Disciplinaria la competencia para conceder recompensas.'
    },
    { 
      questionText: 'Las recompensas buscan:', 
      options: ['Estimular la buena conducta y el trabajo', 'Comprar al interno', 'Nada', 'Castigar'], 
      correctAnswer: 0,
      explanation: 'El artículo 263 del Reglamento Penitenciario establece que las recompensas tienen por objeto estimular la buena conducta, el espíritu de trabajo y el interés en la formación.'
    },
    { 
      questionText: 'Las becas de estudio pueden ser:', 
      options: ['Una recompensa', 'Una sanción', 'Un delito', 'Una falta'], 
      correctAnswer: 0,
      explanation: 'El artículo 263 del Reglamento Penitenciario incluye las becas de estudio entre las recompensas posibles.'
    },
    { 
      questionText: 'La prioridad en la participación en salidas puede ser recompensa:', 
      options: ['Sí', 'No', 'A veces', 'Nunca'], 
      correctAnswer: 0,
      explanation: 'El artículo 263 del Reglamento Penitenciario contempla la prioridad en la participación en actividades como una recompensa.'
    }
  ]
};

export const TEST_TOPIC_43: Test = {
  id: 'topic-43',
  title: 'Tema 43: Sanidad',
  questions: [
    { 
      questionText: 'A su ingreso, todos los internos serán examinados por el médico:', 
      options: ['Si quieren', 'Obligatoriamente (para detectar enfermedades y prevenir contagios)', 'Solo si tienen fiebre', 'A la semana'], 
      correctAnswer: 1,
      explanation: 'El artículo 20 del Reglamento Penitenciario establece que todos los internos serán reconocidos por el médico en las 24 horas siguientes a su ingreso.'
    },
    { 
      questionText: 'Los medicamentos en prisión:', 
      options: ['Los guarda el interno', 'Se administran bajo control (dosis unitaria habitualmente)', 'Se venden', 'Están prohibidos'], 
      correctAnswer: 1,
      explanation: 'El artículo 210 del Reglamento Penitenciario regula la administración de medicamentos bajo control sanitario, generalmente mediante el sistema de dosis unitaria.'
    },
    { 
      questionText: 'La huelga de hambre requiere:', 
      options: ['Control médico diario', 'Ignorar al interno', 'Sanción inmediata', 'Alimentación forzosa siempre'], 
      correctAnswer: 0,
      explanation: 'El artículo 212 del Reglamento Penitenciario establece que los internos en huelga de hambre serán reconocidos diariamente por el médico.'
    },
    { 
      questionText: 'La administración forzosa de alimentos se puede autorizar:', 
      options: ['Cuando corra riesgo inminente la vida (por Juez)', 'Nunca', 'Siempre', 'Si adelgaza'], 
      correctAnswer: 0,
      explanation: 'El artículo 212 del Reglamento Penitenciario permite la alimentación forzosa cuando exista riesgo inminente para la vida, previa autorización del Juez de Vigilancia.'
    },
    { 
      questionText: 'Los enfermos mentales se alojan preferentemente en:', 
      options: ['Hospitales Psiquiátricos Penitenciarios o Unidades adecuadas', 'Celdas de castigo', 'Patios', 'Talleres'], 
      correctAnswer: 0,
      explanation: 'El artículo 184 del Reglamento Penitenciario establece que los enfermos mentales serán alojados en Hospitales Psiquiátricos Penitenciarios o unidades especializadas.'
    },
    { 
      questionText: 'La atención sanitaria es:', 
      options: ['Integral y equivalente a la red pública', 'De pago', 'Mínima', 'Nula'], 
      correctAnswer: 0,
      explanation: 'El artículo 36 de la LOGP establece que la atención sanitaria será integral y equivalente a la dispensada al conjunto de la población.'
    },
    { 
      questionText: 'Las enfermedades infectocontagiosas requieren:', 
      options: ['Aislamiento sanitario', 'Libertad', 'Nada', 'Castigo'], 
      correctAnswer: 0,
      explanation: 'El artículo 185 del Reglamento Penitenciario establece medidas de aislamiento sanitario para enfermedades infectocontagiosas.'
    },
    { 
      questionText: 'El médico visita la enfermería:', 
      options: ['Diariamente', 'Semanalmente', 'Mensualmente', 'Nunca'], 
      correctAnswer: 0,
      explanation: 'El artículo 209 del Reglamento Penitenciario establece que el médico visitará diariamente la enfermería.'
    },
    { 
      questionText: 'Los internos pueden solicitar médico externo:', 
      options: ['Sí, a su costa', 'No', 'Si lo paga la prisión', 'Si es famoso'], 
      correctAnswer: 0,
      explanation: 'El artículo 211 del Reglamento Penitenciario permite a los internos solicitar asistencia de médicos de su elección, a su costa.'
    },
    { 
      questionText: 'El PAIEM es:', 
      options: ['Programa de Atención Integral al Enfermo Mental', 'Un medicamento', 'Una sanción', 'Un director'], 
      correctAnswer: 0,
      explanation: 'El PAIEM (Programa de Atención Integral al Enfermo Mental) es un programa específico para la atención de internos con trastornos mentales.'
    }
  ]
};

export const TEST_TOPIC_44: Test = {
  id: 'topic-44',
  title: 'Tema 44: Oficina de Gestión',
  questions: [
    { 
      questionText: 'La Oficina de Gestión se encarga de:', 
      options: ['La seguridad de los muros', 'La tramitación administrativa de expedientes, libertades, traslados, etc.', 'La comida', 'El tratamiento psicológico'], 
      correctAnswer: 1,
      explanation: 'La Oficina de Gestión Penitenciaria es responsable de la tramitación administrativa de expedientes, libertades, traslados y demás documentación penitenciaria.'
    },
    { 
      questionText: 'El expediente penitenciario es:', 
      options: ['Secreto para el interno', 'Accesible para el interno (con limitaciones de seguridad/intimidad terceros)', 'Público', 'Inexistente'], 
      correctAnswer: 1,
      explanation: 'El artículo 51 de la LOGP reconoce el derecho del interno a conocer su expediente, con las limitaciones relativas a la seguridad e intimidad de terceros.'
    },
    { 
      questionText: 'El recuento de la población reclusa se comunica a la Oficina:', 
      options: ['Diariamente', 'Semanalmente', 'Mensualmente', 'Nunca'], 
      correctAnswer: 0,
      explanation: 'El recuento de la población reclusa se realiza diariamente y se comunica a la Oficina de Gestión para su control y registro.'
    },
    { 
      questionText: 'Las conducciones de presos las realiza:', 
      options: ['Fuerzas y Cuerpos de Seguridad', 'Funcionarios de Prisiones', 'Taxis', 'Ambulancias'], 
      correctAnswer: 0,
      explanation: 'El artículo 36 del Reglamento Penitenciario establece que las conducciones de presos corresponden a las Fuerzas y Cuerpos de Seguridad del Estado.'
    },
    { 
      questionText: 'El Libro de Ingresos y Salidas es:', 
      options: ['Obligatorio', 'Opcional', 'Digital solo', 'Privado'], 
      correctAnswer: 0,
      explanation: 'El Libro de Ingresos y Salidas es un registro obligatorio que debe llevarse en todos los establecimientos penitenciarios.'
    },
    { 
      questionText: 'La filiación del interno incluye:', 
      options: ['Huellas, fotos y datos personales', 'ADN obligatorio', 'Gustos musicales', 'Signo zodiacal'], 
      correctAnswer: 0,
      explanation: 'El artículo 15 del Reglamento Penitenciario establece que se procederá a la filiación del interno mediante huellas dactilares, fotografía y datos personales.'
    },
    { 
      questionText: 'Los traslados los decide:', 
      options: ['El Centro Directivo (Secretaría General)', 'El Director', 'El Juez', 'El Funcionario'], 
      correctAnswer: 0,
      explanation: 'El artículo 31 del Reglamento Penitenciario atribuye al Centro Directivo (Secretaría General de Instituciones Penitenciarias) la competencia para acordar los traslados.'
    },
    { 
      questionText: 'La Oficina de Gestión controla:', 
      options: ['Las fechas de cumplimiento y liquidaciones', 'La cocina', 'El patio', 'La limpieza'], 
      correctAnswer: 0,
      explanation: 'La Oficina de Gestión es responsable del control de las fechas de cumplimiento de condena y las liquidaciones de pena.'
    },
    { 
      questionText: 'El protocolo de personalidad se abre:', 
      options: ['Al ingresar', 'Al salir', 'Nunca', 'Al morir'], 
      correctAnswer: 0,
      explanation: 'El protocolo de personalidad se abre al ingreso del interno como parte del expediente personal.'
    },
    { 
      questionText: 'La custodia de la documentación judicial corresponde a:', 
      options: ['La Oficina de Gestión (Régimen)', 'La Enfermería', 'El Economato', 'Talleres'], 
      correctAnswer: 0,
      explanation: 'La custodia y tramitación de la documentación judicial corresponde a la Oficina de Gestión Penitenciaria.'
    }
  ]
};

export const TEST_TOPIC_45: Test = {
  id: 'topic-45',
  title: 'Tema 45: Peculio',
  questions: [
    { 
      questionText: 'El dinero que el interno porta al ingresar:', 
      options: ['Se le deja en el bolsillo', 'Se le retira y se abona en su cuenta de peculio', 'Se confisca', 'Se quema'], 
      correctAnswer: 1,
      explanation: 'El artículo 315 del Reglamento Penitenciario establece que el dinero que porte el interno al ingresar se retirará y abonará en su cuenta de peculio.'
    },
    { 
      questionText: '¿Puede un interno enviar dinero al exterior?', 
      options: ['No', 'Sí, a sus familiares o personas autorizadas', 'Solo al abogado', 'Solo al Estado'], 
      correctAnswer: 1,
      explanation: 'El artículo 320 del Reglamento Penitenciario permite a los internos enviar dinero a sus familiares o personas autorizadas.'
    },
    { 
      questionText: 'En caso de fallecimiento, el peculio:', 
      options: ['Se lo queda la prisión', 'Se entrega a sus herederos legales', 'Se dona', 'Desaparece'], 
      correctAnswer: 1,
      explanation: 'El artículo 321 del Reglamento Penitenciario establece que el peculio del interno fallecido se entregará a sus herederos legales.'
    },
    { 
      questionText: 'El uso de dinero de curso legal dentro de prisión:', 
      options: ['Está prohibido (salvo régimen abierto/excepciones)', 'Es libre', 'Es obligatorio', 'Se permite en monedas'], 
      correctAnswer: 0,
      explanation: 'El artículo 316 del Reglamento Penitenciario prohíbe el uso de dinero de curso legal en el interior de los establecimientos, salvo en régimen abierto y excepciones autorizadas.'
    },
    { 
      questionText: 'Las tarjetas de peculio sirven para:', 
      options: ['Comprar en economato y llamar', 'Abrir puertas', 'Identificarse', 'Jugar'], 
      correctAnswer: 0,
      explanation: 'Las tarjetas de peculio permiten a los internos realizar compras en el economato y efectuar llamadas telefónicas.'
    },
    { 
      questionText: 'El saldo de libre disposición semanal:', 
      options: ['Está limitado', 'Es ilimitado', 'No existe', 'Es de 1000 euros'], 
      correctAnswer: 0,
      explanation: 'El artículo 318 del Reglamento Penitenciario establece límites al saldo de libre disposición semanal de los internos.'
    },
    { 
      questionText: 'Si un interno es trasladado, su peculio:', 
      options: ['Se transfiere al nuevo centro', 'Se pierde', 'Se queda en el viejo', 'Se cobra'], 
      correctAnswer: 0,
      explanation: 'El artículo 319 del Reglamento Penitenciario establece que el peculio se transferirá al nuevo centro en caso de traslado.'
    },
    { 
      questionText: 'El peculio puede ser embargado:', 
      options: ['Sí, para responsabilidades civiles (respetando SMI/mínimos)', 'No, es inembargable', 'Nunca', 'Por el Director'], 
      correctAnswer: 0,
      explanation: 'El peculio puede ser embargado para satisfacer responsabilidades civiles, respetando los mínimos legales equivalentes al SMI.'
    },
    { 
      questionText: 'Los ingresos de dinero por familiares se hacen:', 
      options: ['Por transferencia o ventanilla', 'En mano al interno', 'Por correo en sobre', 'Escondido'], 
      correctAnswer: 0,
      explanation: 'El artículo 317 del Reglamento Penitenciario regula los ingresos de dinero por transferencia bancaria o en ventanilla del centro.'
    },
    { 
      questionText: 'El administrador del centro es responsable de:', 
      options: ['La gestión económica y peculio', 'La seguridad', 'El tratamiento', 'La sanidad'], 
      correctAnswer: 0,
      explanation: 'El Administrador del centro es responsable de la gestión económica, incluida la administración del peculio de los internos.'
    }
  ]
};

export const TEST_TOPIC_46: Test = {
  id: 'topic-46',
  title: 'Tema 46: JVP',
  questions: [
    { 
      questionText: 'El Juez de Vigilancia Penitenciaria autoriza los permisos de salida de:', 
      options: ['Más de 2 días (excepto 3º grado)', 'Todos', 'Menos de 2 días', 'Fin de semana'], 
      correctAnswer: 0,
      explanation: 'El artículo 156 del Reglamento Penitenciario atribuye al JVP la autorización de permisos de salida, especialmente los superiores a dos días.'
    },
    { 
      questionText: 'Las resoluciones del JVP se adoptan mediante:', 
      options: ['Auto', 'Sentencia', 'Ley', 'Decreto'], 
      correctAnswer: 0,
      explanation: 'El artículo 76 de la LOGP establece que el Juez de Vigilancia adoptará sus resoluciones mediante auto.'
    },
    { 
      questionText: '¿El Ministerio Fiscal interviene en los procedimientos ante el JVP?', 
      options: ['No', 'Sí, siempre', 'Solo si lo pide el interno', 'A veces'], 
      correctAnswer: 1,
      explanation: 'El artículo 76 de la LOGP establece que el Ministerio Fiscal intervenirá en todos los procedimientos ante el Juez de Vigilancia.'
    },
    { 
      questionText: 'El JVP resuelve sobre:', 
      options: ['Libertad condicional', 'Divorcios', 'Herencias', 'Multas de tráfico'], 
      correctAnswer: 0,
      explanation: 'El artículo 76 de la LOGP atribuye al JVP la competencia para acordar la libertad condicional.'
    },
    { 
      questionText: 'El JVP aprueba:', 
      options: ['El aislamiento superior a 14 días', 'El menú', 'El uniforme', 'El horario'], 
      correctAnswer: 0,
      explanation: 'El artículo 42 de la LOGP requiere la aprobación del JVP para el aislamiento en celda superior a 14 días (por acumulación de sanciones).'
    },
    { 
      questionText: 'Los recursos sobre clasificación los resuelve:', 
      options: ['El JVP', 'El Director', 'El Ministro', 'La Policía'], 
      correctAnswer: 0,
      explanation: 'El artículo 76 de la LOGP atribuye al JVP la competencia para resolver recursos sobre clasificación.'
    },
    { 
      questionText: 'El JVP debe visitar los establecimientos:', 
      options: ['Periódicamente', 'Nunca', 'Diariamente', 'Si le invitan'], 
      correctAnswer: 0,
      explanation: 'El artículo 76 de la LOGP establece que el JVP visitará periódicamente los establecimientos penitenciarios.'
    },
    { 
      questionText: 'El JVP salvaguarda los derechos de:', 
      options: ['Los internos', 'Los funcionarios', 'Los jueces', 'Los políticos'], 
      correctAnswer: 0,
      explanation: 'El artículo 76 de la LOGP establece que el JVP tiene como función salvaguardar los derechos de los internos.'
    },
    { 
      questionText: '¿Cuántos JVP hay?', 
      options: ['Uno o varios por provincia/partido judicial', 'Uno en España', 'Ninguno', 'Mil'], 
      correctAnswer: 0,
      explanation: 'Existen Juzgados de Vigilancia Penitenciaria distribuidos por provincias y partidos judiciales según las necesidades.'
    },
    { 
      questionText: 'El JVP depende orgánicamente de:', 
      options: ['El Consejo General del Poder Judicial', 'El Ministerio del Interior', 'La Prisión', 'El Alcalde'], 
      correctAnswer: 0,
      explanation: 'El JVP es un órgano jurisdiccional que depende orgánicamente del Consejo General del Poder Judicial, no del Ministerio del Interior.'
    }
  ]
};

export const TEST_TOPIC_47: Test = {
  id: 'topic-47',
  title: 'Tema 47: Recursos',
  questions: [
    { 
      questionText: 'El recurso de apelación contra los autos del JVP se interpone ante:', 
      options: ['El mismo JVP', 'La Audiencia Provincial (o AN)', 'El Supremo', 'El Constitucional'], 
      correctAnswer: 1,
      explanation: 'El artículo 76 de la LOGP establece que contra los autos del JVP cabe recurso de apelación ante la Audiencia Provincial (o Audiencia Nacional según el caso).'
    },
    { 
      questionText: 'Las quejas sobre servicios penitenciarios pueden dirigirse al:', 
      options: ['Defensor del Pueblo', 'Cocinero', 'Vecino', 'Portero'], 
      correctAnswer: 0,
      explanation: 'El artículo 50 de la LOGP permite a los internos dirigir quejas al Defensor del Pueblo sobre el funcionamiento de los servicios penitenciarios.'
    },
    { 
      questionText: 'El interno debe ser informado de su derecho a recurrir:', 
      options: ['Siempre al notificarse una resolución', 'Nunca', 'Si pregunta', 'Si sabe leer'], 
      correctAnswer: 0,
      explanation: 'El principio de tutela judicial efectiva exige que se informe al interno de su derecho a recurrir al notificarle cualquier resolución.'
    },
    { 
      questionText: 'El recurso de reforma se interpone ante:', 
      options: ['El mismo Juez que dictó la resolución', 'El superior', 'El Tribunal Supremo', 'El Ministro'], 
      correctAnswer: 0,
      explanation: 'El recurso de reforma se interpone ante el mismo órgano que dictó la resolución, solicitando que la reconsidere.'
    },
    { 
      questionText: 'El plazo para el recurso de reforma suele ser:', 
      options: ['3 días', '10 días', '1 mes', '1 año'], 
      correctAnswer: 0,
      explanation: 'El plazo general para interponer el recurso de reforma es de tres días desde la notificación de la resolución.'
    },
    { 
      questionText: 'El abogado es preceptivo en:', 
      options: ['Los recursos de apelación', 'Las quejas simples', 'Las peticiones', 'Las instancias'], 
      correctAnswer: 0,
      explanation: 'La Ley de Enjuiciamiento Criminal establece la necesidad de abogado para los recursos de apelación.'
    },
    { 
      questionText: 'El interno puede quejarse al JVP sobre:', 
      options: ['Régimen y tratamiento penitenciario', 'El clima', 'La política', 'El fútbol'], 
      correctAnswer: 0,
      explanation: 'El artículo 76 de la LOGP permite a los internos formular quejas ante el JVP sobre el régimen y tratamiento penitenciario.'
    },
    { 
      questionText: 'Las resoluciones administrativas de la Dirección General se recurren ante:', 
      options: ['La Jurisdicción Contencioso-Administrativa (o alzada previo)', 'El JVP', 'El Penal', 'El Civil'], 
      correctAnswer: 0,
      explanation: 'Las resoluciones administrativas se recurren en vía administrativa (alzada) y posteriormente ante la Jurisdicción Contencioso-Administrativa.'
    },
    { 
      questionText: 'El recurso de amparo se presenta ante:', 
      options: ['El Tribunal Constitucional', 'El Supremo', 'El JVP', 'El Director'], 
      correctAnswer: 0,
      explanation: 'El recurso de amparo por vulneración de derechos fundamentales se presenta ante el Tribunal Constitucional.'
    },
    { 
      questionText: 'La asistencia jurídica gratuita:', 
      options: ['Se garantiza a los internos sin recursos', 'No existe', 'Es de pago', 'Es mala'], 
      correctAnswer: 0,
      explanation: 'La Ley de Asistencia Jurídica Gratuita garantiza el derecho a la defensa gratuita para quienes carecen de recursos económicos suficientes.'
    }
  ]
};

export const TEST_TOPIC_48: Test = {
  id: 'topic-48',
  title: 'Tema 48: Conducta Humana',
  questions: [
    { 
      questionText: 'El aprendizaje vicario o por observación (Bandura) implica:', 
      options: ['Aprender observando modelos', 'Aprender recibiendo descargas', 'Aprender durmiendo', 'No aprender'], 
      correctAnswer: 0,
      explanation: 'Albert Bandura demostró que las personas pueden aprender nuevas conductas observando a otros (modelos), sin necesidad de refuerzo directo.'
    },
    { 
      questionText: 'La motivación intrínseca es:', 
      options: ['La que viene de fuera (dinero)', 'La que nace del propio interés y satisfacción por la tarea', 'El miedo al castigo', 'La obligación'], 
      correctAnswer: 1,
      explanation: 'La motivación intrínseca surge del interés personal y la satisfacción que produce la actividad en sí misma, no de recompensas externas.'
    },
    { 
      questionText: 'El estrés es una respuesta:', 
      options: ['Adaptativa ante demandas del entorno', 'Siempre patológica', 'Imaginaria', 'De sueño'], 
      correctAnswer: 0,
      explanation: 'El estrés es una respuesta adaptativa del organismo ante demandas o amenazas del entorno, aunque puede volverse patológico si es excesivo o prolongado.'
    },
    { 
      questionText: 'La pirámide de Maslow sitúa en la base las necesidades:', 
      options: ['Fisiológicas', 'De autorrealización', 'De estima', 'Sociales'], 
      correctAnswer: 0,
      explanation: 'Abraham Maslow propuso una jerarquía de necesidades con las fisiológicas (hambre, sed, sueño) en la base, como las más básicas.'
    },
    { 
      questionText: 'El condicionamiento operante (Skinner) usa:', 
      options: ['Refuerzos y castigos', 'Saliva', 'Campanas', 'Sueños'], 
      correctAnswer: 0,
      explanation: 'B.F. Skinner demostró que las conductas se pueden modificar mediante refuerzos (que aumentan la conducta) y castigos (que la disminuyen).'
    },
    { 
      questionText: 'La percepción social es:', 
      options: ['Cómo interpretamos y entendemos a los demás', 'La vista', 'El oído', 'El tacto'], 
      correctAnswer: 0,
      explanation: 'La percepción social es el proceso mediante el cual interpretamos y entendemos a otras personas, sus intenciones y comportamientos.'
    },
    { 
      questionText: 'El prejuicio es una actitud:', 
      options: ['Generalmente negativa y preconcebida hacia un grupo', 'Positiva', 'Neutra', 'Científica'], 
      correctAnswer: 0,
      explanation: 'El prejuicio es una actitud generalmente negativa hacia un grupo social, basada en estereotipos y formada sin conocimiento directo.'
    },
    { 
      questionText: 'La inteligencia emocional incluye:', 
      options: ['Reconocer y gestionar emociones propias y ajenas', 'Saber matemáticas', 'Saber historia', 'Ser fuerte'], 
      correctAnswer: 0,
      explanation: 'La inteligencia emocional (Goleman) incluye la capacidad de reconocer, comprender y gestionar las emociones propias y ajenas.'
    },
    { 
      questionText: 'El efecto halo consiste en:', 
      options: ['Generalizar una característica positiva/negativa a toda la persona', 'Ver luces', 'Oír voces', 'Volar'], 
      correctAnswer: 0,
      explanation: 'El efecto halo es un sesgo cognitivo por el cual una característica destacada de una persona influye en la percepción global que tenemos de ella.'
    },
    { 
      questionText: 'La disonancia cognitiva es:', 
      options: ['Malestar por tener creencias contradictorias', 'Música', 'Ruido', 'Placer'], 
      correctAnswer: 0,
      explanation: 'La disonancia cognitiva (Festinger) es el malestar psicológico que experimentamos cuando mantenemos creencias, actitudes o conductas contradictorias.'
    }
  ]
};

export const TEST_TOPIC_49: Test = {
  id: 'topic-49',
  title: 'Tema 49: Subcultura Carcelaria',
  questions: [
    { 
      questionText: 'La "institucionalización" provoca:', 
      options: ['Dependencia de la institución y pérdida de habilidades para la vida libre', 'Independencia', 'Riqueza', 'Salud'], 
      correctAnswer: 0,
      explanation: 'La institucionalización es el proceso por el cual el interno se adapta excesivamente a la prisión, perdiendo habilidades para la vida en libertad.'
    },
    { 
      questionText: 'El argot carcelario es:', 
      options: ['Un lenguaje propio de la subcultura', 'El latín', 'El inglés', 'Un código secreto militar'], 
      correctAnswer: 0,
      explanation: 'El argot carcelario es un lenguaje específico desarrollado en el contexto penitenciario, parte de la subcultura carcelaria.'
    },
    { 
      questionText: 'La jerarquía informal entre presos se basa en:', 
      options: ['El delito, la fuerza, la antigüedad y la posesión de bienes', 'El nivel de estudios', 'La bondad', 'La edad solo'], 
      correctAnswer: 0,
      explanation: 'La jerarquía informal en prisión se establece según factores como el tipo de delito, la fuerza física, la antigüedad y el acceso a recursos.'
    },
    { 
      questionText: 'La prisionización es mayor si:', 
      options: ['La condena es larga y hay poco contacto exterior', 'La condena es corta', 'Hay muchas visitas', 'Se trabaja'], 
      correctAnswer: 0,
      explanation: 'Clemmer demostró que la prisionización (asimilación de la cultura carcelaria) es mayor en condenas largas y con poco contacto con el exterior.'
    },
    { 
      questionText: 'El código del recluso impone:', 
      options: ['No colaborar con los funcionarios ("no chivarse")', 'Ayudar a la policía', 'Ser amable', 'Estudiar'], 
      correctAnswer: 0,
      explanation: 'El código informal de los reclusos incluye normas como no colaborar con la autoridad y no delatar a otros internos.'
    },
    { 
      questionText: 'Clemmer acuñó el término:', 
      options: ['Prisionización', 'Libertad', 'Cárcel', 'Delito'], 
      correctAnswer: 0,
      explanation: 'Donald Clemmer acuñó el término "prisionización" para describir el proceso de asimilación de la cultura y costumbres carcelarias.'
    },
    { 
      questionText: 'Los "kinkis" o grupos marginales en prisión suelen:', 
      options: ['Mantener su cohesión y rechazo a la norma', 'Ser sumisos', 'Ser ricos', 'Ser directores'], 
      correctAnswer: 0,
      explanation: 'Los grupos marginales en prisión tienden a mantener su cohesión interna y su rechazo a las normas institucionales.'
    },
    { 
      questionText: 'La adaptación a la prisión puede ser:', 
      options: ['Regresiva (institucionalización) o constructiva', 'Siempre buena', 'Siempre mala', 'Neutra'], 
      correctAnswer: 0,
      explanation: 'La adaptación puede ser regresiva (dependencia de la institución) o constructiva (aprovechamiento de recursos para la reinserción).'
    },
    { 
      questionText: 'El estigma social afecta a:', 
      options: ['La reinserción', 'La comida', 'El sueño', 'Nada'], 
      correctAnswer: 0,
      explanation: 'El estigma social asociado al paso por prisión dificulta gravemente el proceso de reinserción social y laboral.'
    },
    { 
      questionText: 'La subcultura carcelaria surge como:', 
      options: ['Adaptación a las privaciones del encierro', 'Capricho', 'Orden del Director', 'Ley'], 
      correctAnswer: 0,
      explanation: 'La subcultura carcelaria surge como mecanismo de adaptación a las privaciones y condiciones del encierro (Sykes y Messinger).'
    }
  ]
};

export const TEST_TOPIC_50: Test = {
  id: 'topic-50',
  title: 'Tema 50: Habilidades Sociales',
  questions: [
    { 
      questionText: 'La conducta pasiva se caracteriza por:', 
      options: ['Violar los derechos ajenos', 'No defender los propios derechos y someterse a los demás', 'Defenderse adecuadamente', 'Gritar'], 
      correctAnswer: 1,
      explanation: 'La conducta pasiva implica no defender los propios derechos, someterse a los deseos de otros y evitar el conflicto a costa de uno mismo.'
    },
    { 
      questionText: 'La técnica del "disco rayado" consiste en:', 
      options: ['Repetir el mensaje insistentemente sin enfadarse', 'Romper un disco', 'Cambiar de tema', 'Insultar'], 
      correctAnswer: 0,
      explanation: 'La técnica del disco rayado es una estrategia asertiva que consiste en repetir el mensaje de forma calmada y persistente.'
    },
    { 
      questionText: 'Para resolver conflictos es fundamental:', 
      options: ['La negociación y la empatía', 'La violencia', 'La huida', 'La negación'], 
      correctAnswer: 0,
      explanation: 'La resolución constructiva de conflictos requiere habilidades de negociación, empatía y comunicación efectiva.'
    },
    { 
      questionText: 'La asertividad es:', 
      options: ['Expresar lo que se piensa/siente respetando al otro', 'Agredir', 'Callarse', 'Mentir'], 
      correctAnswer: 0,
      explanation: 'La asertividad es la capacidad de expresar opiniones, sentimientos y necesidades de forma directa y honesta, respetando a los demás.'
    },
    { 
      questionText: 'La escucha activa implica:', 
      options: ['Atender, comprender y dar feedback', 'Oír ruido', 'Interrumpir', 'Mirar el móvil'], 
      correctAnswer: 0,
      explanation: 'La escucha activa requiere atender plenamente, comprender el mensaje y proporcionar retroalimentación al interlocutor.'
    },
    { 
      questionText: 'El lenguaje no verbal representa:', 
      options: ['Una gran parte de la comunicación', 'Nada', 'Poco', 'Solo el 1%'], 
      correctAnswer: 0,
      explanation: 'El lenguaje no verbal (gestos, postura, expresión facial) representa una gran parte de la comunicación humana, a menudo más que las palabras.'
    },
    { 
      questionText: 'El liderazgo democrático fomenta:', 
      options: ['La participación', 'El miedo', 'La pasividad', 'El caos'], 
      correctAnswer: 0,
      explanation: 'El liderazgo democrático se caracteriza por fomentar la participación, la colaboración y la toma de decisiones compartida.'
    },
    { 
      questionText: 'La empatía es:', 
      options: ['Ponerse en el lugar del otro', 'Ser simpático', 'Reír', 'Llorar'], 
      correctAnswer: 0,
      explanation: 'La empatía es la capacidad de comprender y compartir los sentimientos de otra persona, poniéndose en su lugar.'
    },
    { 
      questionText: 'El feedback debe ser:', 
      options: ['Constructivo y específico', 'Insultante', 'General', 'Falso'], 
      correctAnswer: 0,
      explanation: 'El feedback efectivo debe ser constructivo, específico, oportuno y centrado en conductas observables, no en la persona.'
    },
    { 
      questionText: 'Los facilitadores de la comunicación son:', 
      options: ['Lugar adecuado, momento oportuno, escucha', 'Ruido', 'Prisa', 'Gritos'], 
      correctAnswer: 0,
      explanation: 'Los facilitadores de la comunicación incluyen un entorno adecuado, momento oportuno, escucha activa y actitud abierta.'
    }
  ]
};
