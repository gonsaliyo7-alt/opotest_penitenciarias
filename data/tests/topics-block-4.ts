
import type { Test } from '../../types';

export const TEST_TOPIC_31: Test = {
  id: 'topic-31',
  title: 'Tema 31: Establecimientos',
  questions: [
    { 
      questionText: 'Los Centros de Inserción Social son establecimientos de régimen:', 
      options: ['Cerrado', 'Abierto', 'Ordinario', 'Preventivo'], 
      correctAnswer: 1,
      explanation: 'El artículo 163 del Reglamento Penitenciario define los Centros de Inserción Social como establecimientos de régimen abierto.'
    },
    { 
      questionText: 'Las Unidades Psiquiátricas Penitenciarias son establecimientos:', 
      options: ['De cumplimiento', 'Especiales', 'De preventivos', 'De ocio'], 
      correctAnswer: 1,
      explanation: 'El artículo 11 de la LOGP clasifica los establecimientos en: de preventivos, de cumplimiento y especiales (entre los que se incluyen los psiquiátricos).'
    },
    { 
      questionText: 'El aforo de las celdas, según la LOGP, debe ser preferentemente:', 
      options: ['Individual', 'Doble', 'Cuádruple', 'Colectivo'], 
      correctAnswer: 0,
      explanation: 'El artículo 19 de la LOGP establece el principio celular, disponiendo que cada interno se alojará en una celda individual.'
    },
    { 
      questionText: 'Los establecimientos de preventivos sirven para:', 
      options: ['La retención y custodia de detenidos y presos', 'Cumplir penas largas', 'Tratamiento', 'Vacaciones'], 
      correctAnswer: 0,
      explanation: 'El artículo 8 de la LOGP establece que los establecimientos de preventivos están destinados a la retención y custodia de detenidos y presos.'
    },
    { 
      questionText: 'Los Centros Penitenciarios pueden ser:', 
      options: ['Preventivos, Cumplimiento y Especiales', 'Rojos y Azules', 'Grandes y Pequeños', 'Nacionales y Locales'], 
      correctAnswer: 0,
      explanation: 'El artículo 7 de la LOGP clasifica los establecimientos penitenciarios en tres tipos: de preventivos, de cumplimiento de penas y especiales.'
    },
    { 
      questionText: 'Los Departamentos de Régimen Cerrado se ubican en:', 
      options: ['Centros de cumplimiento (o preventivos)', 'Hoteles', 'Comisarías', 'Juzgados'], 
      correctAnswer: 0,
      explanation: 'El artículo 10 de la LOGP establece que los departamentos de régimen cerrado pueden ubicarse en los centros de cumplimiento (y también en preventivos según el RP).'
    },
    { 
      questionText: 'Las Unidades de Madres son para:', 
      options: ['Madres con hijos menores de 3 años', 'Embarazadas solo', 'Madres solas', 'Visitas'], 
      correctAnswer: 0,
      explanation: 'El artículo 178 del Reglamento Penitenciario regula las Unidades de Madres para internas con hijos menores de tres años consigo.'
    },
    { 
      questionText: 'Los Departamentos Mixtos:', 
      options: ['Pueden existir excepcionalmente', 'Están prohibidos', 'Son la norma', 'No existen'], 
      correctAnswer: 0,
      explanation: 'El artículo 173 del Reglamento Penitenciario permite excepcionalmente la existencia de departamentos mixtos para la ejecución de programas específicos.'
    },
    { 
      questionText: 'El patio es un elemento:', 
      options: ['Obligatorio en cada departamento', 'Opcional', 'Prohibido', 'Decorativo'], 
      correctAnswer: 0,
      explanation: 'El artículo 13 de la LOGP establece que los establecimientos deberán contar con patios para la permanencia de los internos al aire libre.'
    },
    { 
      questionText: 'La seguridad interior corresponde a:', 
      options: ['Funcionarios de II.PP.', 'Guardia Civil', 'Policía Local', 'Ejército'], 
      correctAnswer: 0,
      explanation: 'El artículo 280 del Reglamento Penitenciario establece que la seguridad interior corresponde a los funcionarios de Instituciones Penitenciarias.'
    }
  ]
};

export const TEST_TOPIC_32: Test = {
  id: 'topic-32',
  title: 'Tema 32: Ingreso y Libertad',
  questions: [
    { 
      questionText: 'Tras el ingreso, el interno pasa al departamento de:', 
      options: ['Aislamiento', 'Ingresos', 'Enfermería', 'Talleres'], 
      correctAnswer: 1,
      explanation: 'El artículo 15 del Reglamento Penitenciario establece que el interno ingresado pasará al Departamento de Ingresos.'
    },
    { 
      questionText: 'El plazo máximo para que el médico reconozca al interno tras su ingreso es:', 
      options: ['24 horas', '48 horas', '72 horas', '1 semana'], 
      correctAnswer: 0,
      explanation: 'El artículo 20 del Reglamento Penitenciario establece que el interno será reconocido por el médico dentro de las 24 horas siguientes a su ingreso.'
    },
    { 
      questionText: 'La libertad definitiva debe ser aprobada por:', 
      options: ['El Director (conforme a la liquidación de condena aprobada por el Tribunal)', 'El Funcionario', 'El Abogado', 'El Médico'], 
      correctAnswer: 0,
      explanation: 'El artículo 22 del Reglamento Penitenciario establece que la libertad definitiva de los penados será acordada por el Director del establecimiento, de conformidad con la liquidación de condena aprobada por el Tribunal Sentenciador.'
    },
    { 
      questionText: 'El ingreso requiere mandamiento de:', 
      options: ['Autoridad Judicial', 'Policía', 'Abogado', 'Alcalde'], 
      correctAnswer: 0,
      explanation: 'El artículo 15 del Reglamento Penitenciario establece que el ingreso de un detenido, preso o penado requerirá mandamiento de la Autoridad Judicial (o presentación voluntaria/detención policial en supuestos específicos).'
    },
    { 
      questionText: 'En caso de presentación voluntaria:', 
      options: ['Se admite y se comunica al Juez (plazo 24h para orden)', 'Se rechaza', 'Se detiene', 'Se ignora'], 
      correctAnswer: 0,
      explanation: 'El artículo 16 del Reglamento Penitenciario regula la presentación voluntaria, debiendo comunicarse a la autoridad judicial, quien deberá ordenar el ingreso o libertad en 24 horas.'
    },
    { 
      questionText: 'Al ingresar se abre un:', 
      options: ['Expediente personal', 'Blog', 'Juicio', 'Negocio'], 
      correctAnswer: 0,
      explanation: 'El artículo 15 del Reglamento Penitenciario establece la apertura de un expediente personal relativo a la situación procesal y penitenciaria de cada interno.'
    },
    { 
      questionText: 'Los objetos de valor se:', 
      options: ['Retiran y guardan a buen recaudo (o entregan a familia)', 'Tiran', 'Venden', 'Regalan'], 
      correctAnswer: 0,
      explanation: 'El artículo 315 del Reglamento Penitenciario establece que los objetos de valor serán retirados y custodiados por la Administración o entregados a la persona que el interno designe.'
    },
    { 
      questionText: 'El interno tiene derecho a realizar una llamada al ingresar:', 
      options: ['Sí', 'No', 'Solo si paga', 'A la policía'], 
      correctAnswer: 0,
      explanation: 'El artículo 41.3 del Reglamento Penitenciario reconoce el derecho del interno a comunicar su ingreso a su familia y abogado.'
    },
    { 
      questionText: 'La libertad por cumplimiento se notifica al:', 
      options: ['Tribunal Sentenciador', 'Rey', 'Vecino', 'Portero'], 
      correctAnswer: 0,
      explanation: 'El artículo 22 del Reglamento Penitenciario establece que la excarcelación se notificará al Tribunal Sentenciador.'
    },
    { 
      questionText: 'La excarcelación de un preventivo la ordena:', 
      options: ['La Autoridad Judicial a cuya disposición esté', 'El Director', 'El Ministro', 'La Policía'], 
      correctAnswer: 0,
      explanation: 'El artículo 21 del Reglamento Penitenciario establece que la libertad de los detenidos y presos será ordenada por la Autoridad Judicial de quien dependan.'
    }
  ]
};

export const TEST_TOPIC_33: Test = {
  id: 'topic-33',
  title: 'Tema 33: Clasificación',
  questions: [
    { 
      questionText: 'La Junta de Tratamiento debe revisar la clasificación de los penados cada:', 
      options: ['3 meses máx (grados 1º y 2º) o 6 meses', '6 meses máx', '1 año', 'Nunca'], 
      correctAnswer: 1,
      explanation: 'El artículo 105 del Reglamento Penitenciario establece que la clasificación se revisará cada seis meses como máximo.'
    },
    { 
      questionText: 'El principio de flexibilidad (art 100.2 RP) necesita aprobación del:', 
      options: ['Director', 'Juez de Vigilancia Penitenciaria', 'Ministro', 'Jefe de Servicios'], 
      correctAnswer: 1,
      explanation: 'El artículo 100.2 del Reglamento Penitenciario establece que la aplicación del principio de flexibilidad requerirá la aprobación del Juez de Vigilancia.'
    },
    { 
      questionText: 'Los preventivos:', 
      options: ['Se clasifican en primer grado', 'No se clasifican', 'Se clasifican en segundo grado', 'Se clasifican en tercer grado'], 
      correctAnswer: 1,
      explanation: 'El artículo 10 del Reglamento Penitenciario establece que los detenidos y presos (preventivos) no serán objeto de clasificación.'
    },
    { 
      questionText: 'El tercer grado corresponde al régimen:', 
      options: ['Abierto', 'Ordinario', 'Cerrado', 'Preventivo'], 
      correctAnswer: 0,
      explanation: 'El artículo 72 de la LOGP vincula el tercer grado de tratamiento con el régimen abierto.'
    },
    { 
      questionText: 'El primer grado corresponde al régimen:', 
      options: ['Cerrado', 'Abierto', 'Ordinario', 'Libertad'], 
      correctAnswer: 0,
      explanation: 'El artículo 72 de la LOGP vincula el primer grado de tratamiento con el régimen cerrado.'
    },
    { 
      questionText: 'La clasificación inicial se hace en un plazo de:', 
      options: ['2 meses desde recepción testimonio sentencia', '6 meses', '1 mes', '15 días'], 
      correctAnswer: 0,
      explanation: 'El artículo 103 del Reglamento Penitenciario establece que la propuesta de clasificación inicial se formulará en el plazo máximo de dos meses desde la recepción del testimonio de la sentencia.'
    },
    { 
      questionText: 'El periodo de seguridad impide el tercer grado hasta cumplir la mitad de la condena en penas superiores a:', 
      options: ['5 años', '3 años', '1 año', '10 años'], 
      correctAnswer: 0,
      explanation: 'El artículo 36.2 del Código Penal establece el periodo de seguridad para penas de prisión superiores a cinco años.'
    },
    { 
      questionText: 'La regresión de grado la acuerda:', 
      options: ['La Secretaría General (tras propuesta Junta)', 'El Director', 'El Juez', 'El Funcionario'], 
      correctAnswer: 0,
      explanation: 'El artículo 106 del Reglamento Penitenciario establece que la resolución sobre regresión de grado corresponde al Centro Directivo.'
    },
    { 
      questionText: 'La Central Penitenciaria de Observación asesora sobre:', 
      options: ['Clasificación y tratamiento', 'Seguridad', 'Obras', 'Comida'], 
      correctAnswer: 0,
      explanation: 'El artículo 70 de la LOGP atribuye a la Central Penitenciaria de Observación funciones de asesoramiento en materia de observación, clasificación y tratamiento.'
    },
    { 
      questionText: '¿Es recurrible la clasificación?', 
      options: ['Sí, ante el JVP', 'No', 'Solo ante el Director', 'Ante el Rey'], 
      correctAnswer: 0,
      explanation: 'El artículo 76 de la LOGP establece que los internos pueden recurrir su clasificación ante el Juez de Vigilancia Penitenciaria.'
    }
  ]
};

export const TEST_TOPIC_34: Test = {
  id: 'topic-34',
  title: 'Tema 34: Régimen Ordinario',
  questions: [
    { 
      questionText: 'El régimen ordinario se aplica a:', 
      options: ['Penados de 2º grado, preventivos y penados sin clasificar', 'Solo 3º grado', 'Solo 1º grado', 'Menores'], 
      correctAnswer: 0,
      explanation: 'El artículo 76 del Reglamento Penitenciario establece que el régimen ordinario se aplicará a los penados clasificados en segundo grado, a los penados sin clasificar y a los detenidos y presos.'
    },
    { 
      questionText: 'Los cacheos con desnudo integral deben ser autorizados por:', 
      options: ['El funcionario', 'El Jefe de Servicios (y comunicados al Director)', 'El Juez', 'El Médico'], 
      correctAnswer: 1,
      explanation: 'El artículo 68 del Reglamento Penitenciario establece que el cacheo con desnudo integral deberá ser autorizado por el Jefe de Servicios y comunicado al Director.'
    },
    { 
      questionText: 'Las puertas de las celdas durante el día permanecerán:', 
      options: ['Siempre cerradas', 'Abiertas o cerradas según el horario y actividades', 'Entornadas', 'Bloqueadas'], 
      correctAnswer: 1,
      explanation: 'El artículo 77 del Reglamento Penitenciario regula la apertura y cierre de celdas, permitiendo que permanezcan abiertas o cerradas en función de las actividades y necesidades del servicio.'
    },
    { 
      questionText: 'El recuento ordinario se hace:', 
      options: ['Al levantarse, acostarse y relevos', 'Solo de noche', 'Una vez', 'Nunca'], 
      correctAnswer: 0,
      explanation: 'El artículo 78 del Reglamento Penitenciario establece que los recuentos ordinarios se efectuarán al levantarse, al acostarse y en los relevos de servicio.'
    },
    { 
      questionText: 'Las visitas de familiares en locutorios duran:', 
      options: ['20 minutos', '40 minutos al menos', '1 hora', '2 horas'], 
      correctAnswer: 0,
      explanation: 'El artículo 42 del Reglamento Penitenciario establece una duración mínima de 20 minutos para las comunicaciones orales, aunque suelen acumularse.'
    },
    { 
      questionText: 'Los vis a vis íntimos se conceden:', 
      options: ['Al menos una vez al mes', 'Diariamente', 'Anualmente', 'Nunca'], 
      correctAnswer: 0,
      explanation: 'El artículo 45 del Reglamento Penitenciario establece que se concederá una comunicación íntima al mes como mínimo.'
    },
    { 
      questionText: 'Los internos pueden recibir paquetes:', 
      options: ['Libremente', 'Con las limitaciones reglamentarias (número y peso)', 'Prohibido', 'Solo comida'], 
      correctAnswer: 1,
      explanation: 'El artículo 50 del Reglamento Penitenciario regula la recepción de paquetes, estableciendo limitaciones en cuanto a número, peso y contenido.'
    },
    { 
      questionText: 'El horario es aprobado por:', 
      options: ['Consejo de Dirección', 'Junta de Tratamiento', 'Director', 'Juez'], 
      correctAnswer: 0,
      explanation: 'El artículo 277 del Reglamento Penitenciario atribuye al Consejo de Dirección la competencia para aprobar los horarios del Centro.'
    },
    { 
      questionText: 'Los medios coercitivos se usan:', 
      options: ['Como castigo', 'Para restablecer la normalidad, evitar fugas o daños', 'Por diversión', 'Siempre'], 
      correctAnswer: 1,
      explanation: 'El artículo 45 de la LOGP y el 72 del RP establecen que los medios coercitivos solo se usarán para restablecer la normalidad, evitar fugas o daños, y nunca como sanción.'
    },
    { 
      questionText: 'El uso de esposas es un medio:', 
      options: ['Coercitivo', 'Disciplinario', 'De tratamiento', 'Educativo'], 
      correctAnswer: 0,
      explanation: 'El artículo 72 del Reglamento Penitenciario enumera las esposas entre los medios coercitivos autorizados.'
    }
  ]
};

export const TEST_TOPIC_35: Test = {
  id: 'topic-35',
  title: 'Tema 35: Régimen Abierto',
  questions: [
    { 
      questionText: 'El objetivo del régimen abierto es:', 
      options: ['El castigo', 'Potenciar las capacidades de inserción social en semilibertad', 'La vigilancia extrema', 'El trabajo forzado'], 
      correctAnswer: 1,
      explanation: 'El artículo 80 del Reglamento Penitenciario establece que el régimen abierto tiene por objeto potenciar las capacidades de inserción social de los penados en situación de semilibertad.'
    },
    { 
      questionText: 'La modalidad de vida en régimen abierto que permite no pernoctar en el centro es:', 
      options: ['Control telemático (art 86.4)', 'Tercer grado pleno', 'Restringido', 'Ninguna'], 
      correctAnswer: 0,
      explanation: 'El artículo 86.4 del Reglamento Penitenciario regula la modalidad de cumplimiento mediante control telemático, sin necesidad de pernoctar en el centro.'
    },
    { 
      questionText: 'Las salidas de fin de semana son propias del régimen:', 
      options: ['Cerrado', 'Ordinario', 'Abierto', 'Preventivo'], 
      correctAnswer: 2,
      explanation: 'El artículo 87 del Reglamento Penitenciario regula las salidas de fin de semana como características del régimen abierto.'
    },
    { 
      questionText: 'El régimen abierto se aplica a internos en:', 
      options: ['Tercer grado', 'Segundo grado', 'Primer grado', 'Preventivos'], 
      correctAnswer: 0,
      explanation: 'El artículo 80 del Reglamento Penitenciario vincula el régimen abierto a los penados clasificados en tercer grado.'
    },
    { 
      questionText: 'Un CIS es un:', 
      options: ['Centro de Inserción Social', 'Centro de Internamiento Severo', 'Club', 'Cine'], 
      correctAnswer: 0,
      explanation: 'CIS son las siglas de Centro de Inserción Social, establecimiento destinado al cumplimiento de penas en régimen abierto.'
    },
    { 
      questionText: 'El artículo 82 RP define:', 
      options: ['El régimen abierto restringido', 'El ordinario', 'El cerrado', 'La libertad'], 
      correctAnswer: 0,
      explanation: 'El artículo 82 del Reglamento Penitenciario regula la modalidad de régimen abierto restringido para aquellos internos que no puedan salir a trabajar al exterior.'
    },
    { 
      questionText: 'Las salidas de fin de semana comienzan:', 
      options: ['El viernes tarde', 'El sábado', 'El domingo', 'El lunes'], 
      correctAnswer: 0,
      explanation: 'El artículo 87 del Reglamento Penitenciario establece que las salidas de fin de semana se iniciarán, como regla general, a partir de las dieciséis horas del viernes.'
    },
    { 
      questionText: 'Para acceder a tercer grado es necesario:', 
      options: ['Haber satisfecho la responsabilidad civil (o compromiso/garantías)', 'Ser alto', 'Ser rico', 'Saber inglés'], 
      correctAnswer: 0,
      explanation: 'El artículo 72.5 de la LOGP exige la satisfacción de la responsabilidad civil derivada del delito para la progresión a tercer grado.'
    },
    { 
      questionText: 'El régimen abierto busca:', 
      options: ['La autodisciplina y confianza', 'El miedo', 'La fuga', 'El dolor'], 
      correctAnswer: 0,
      explanation: 'El artículo 80 del Reglamento Penitenciario establece que el tratamiento en régimen abierto se basará en la ausencia de controles rígidos, apelando a la autodisciplina y confianza.'
    },
    { 
      questionText: '¿Pueden ir al régimen abierto los preventivos?', 
      options: ['No', 'Sí', 'A veces', 'Si pagan'], 
      correctAnswer: 0,
      explanation: 'No, el régimen abierto es una modalidad de cumplimiento de pena reservada a penados clasificados en tercer grado. Los preventivos están en régimen ordinario (o cerrado).'
    }
  ]
};

export const TEST_TOPIC_36: Test = {
  id: 'topic-36',
  title: 'Tema 36: Régimen Cerrado',
  questions: [
    { 
      questionText: 'Se aplica régimen cerrado por:', 
      options: ['Peligrosidad extrema o inadaptación manifiesta', 'Delitos leves', 'No tener familia', 'Solicitud propia'], 
      correctAnswer: 0,
      explanation: 'El artículo 10 de la LOGP establece que el régimen cerrado se aplicará a los internos calificados de peligrosidad extrema o inadaptación manifiesta a los regímenes ordinario y abierto.'
    },
    { 
      questionText: 'La revisión de la clasificación en primer grado se hace cada:', 
      options: ['6 meses', '3 meses', '1 mes', '1 año'], 
      correctAnswer: 1,
      explanation: 'El artículo 92 del Reglamento Penitenciario establece que la revisión de la clasificación en primer grado se efectuará cada tres meses.'
    },
    { 
      questionText: 'Las actividades en régimen cerrado son:', 
      options: ['Inexistentes', 'Prioritariamente culturales, deportivas y ocupacionales, en grupos reducidos', 'Solo laborales', 'Al aire libre siempre'], 
      correctAnswer: 1,
      explanation: 'El artículo 90 del Reglamento Penitenciario establece que se programarán actividades culturales, deportivas y ocupacionales, realizándose en grupos reducidos.'
    },
    { 
      questionText: 'Las horas de salida al patio en régimen cerrado son:', 
      options: ['Mínimo 4 horas (o 3)', 'Mínimo 8 horas', 'Mínimo 1 hora', 'Libres'], 
      correctAnswer: 0,
      explanation: 'El artículo 93 del Reglamento Penitenciario establece un mínimo de 4 horas de patio (3 horas en departamentos especiales según art. 94).'
    },
    { 
      questionText: 'El número de internos en actividades conjuntas en régimen cerrado se limita a:', 
      options: ['5', '10', '20', '50'], 
      correctAnswer: 0,
      explanation: 'El artículo 93 del Reglamento Penitenciario limita a cinco el número de internos que pueden realizar actividades en común en departamentos especiales.'
    },
    { 
      questionText: 'El régimen cerrado se aplica en:', 
      options: ['Departamentos especiales o módulos cerrados', 'Celdas normales', 'En la calle', 'En hospitales'], 
      correctAnswer: 0,
      explanation: 'El artículo 91 del Reglamento Penitenciario establece que el régimen cerrado se cumplirá en Centros o Módulos de Régimen Cerrado o en Departamentos Especiales.'
    },
    { 
      questionText: 'El artículo 10 LOGP regula:', 
      options: ['Los departamentos de régimen cerrado', 'El régimen abierto', 'La libertad', 'El trabajo'], 
      correctAnswer: 0,
      explanation: 'El artículo 10 de la LOGP regula los establecimientos de régimen cerrado.'
    },
    { 
      questionText: 'La clasificación en primer grado requiere:', 
      options: ['Resolución motivada', 'Sorteo', 'Petición', 'Nada'], 
      correctAnswer: 0,
      explanation: 'El artículo 95 del Reglamento Penitenciario exige que el acuerdo de clasificación en primer grado sea motivado.'
    },
    { 
      questionText: 'Los cacheos en régimen cerrado son:', 
      options: ['Más frecuentes (diarios celdas)', 'Menos frecuentes', 'Iguales', 'No se hacen'], 
      correctAnswer: 0,
      explanation: 'El artículo 93 del Reglamento Penitenciario establece que en los departamentos especiales el registro de celdas será diario.'
    },
    { 
      questionText: '¿Es recurrible la aplicación del régimen cerrado?', 
      options: ['Sí, al JVP', 'No', 'Solo al Director', 'A la prensa'], 
      correctAnswer: 0,
      explanation: 'Sí, como cualquier resolución de clasificación o aplicación de régimen, es recurrible ante el Juez de Vigilancia Penitenciaria (Art. 76 LOGP).'
    }
  ]
};

export const TEST_TOPIC_37: Test = {
  id: 'topic-37',
  title: 'Tema 37: Permisos',
  questions: [
    { 
      questionText: 'La duración máxima de los permisos ordinarios en 3º grado es de:', 
      options: ['36 días', '48 días', '18 días', '7 días'], 
      correctAnswer: 1,
      explanation: 'El artículo 154 del Reglamento Penitenciario establece que los internos clasificados en tercer grado podrán disfrutar de hasta 48 días de permisos ordinarios al año.'
    },
    { 
      questionText: 'Los permisos de hasta 2 días (en 2º grado) los concede:', 
      options: ['El Director', 'El Juez de Vigilancia', 'El Ministerio', 'La Junta'], 
      correctAnswer: 1,
      explanation: 'El artículo 156 del Reglamento Penitenciario establece que los permisos de salida, incluso los de hasta dos días, requieren autorización del Juez de Vigilancia Penitenciaria.'
    },
    { 
      questionText: '¿Se puede conceder un permiso a un preventivo?', 
      options: ['No', 'Sí, con autorización de la Autoridad Judicial a cuya disposición esté', 'Sí, lo da el Director', 'Sí, la Policía'], 
      correctAnswer: 1,
      explanation: 'El artículo 47 de la LOGP permite conceder permisos a los preventivos con autorización de la Autoridad Judicial a cuya disposición se encuentren.'
    },
    { 
      questionText: 'Los permisos ordinarios en 2º grado son de máximo:', 
      options: ['36 días al año', '48 días', '12 días', '6 días'], 
      correctAnswer: 0,
      explanation: 'El artículo 154 del Reglamento Penitenciario establece que los internos clasificados en segundo grado podrán disfrutar de hasta 36 días de permisos ordinarios al año.'
    },
    { 
      questionText: 'Para disfrutar permiso ordinario se requiere haber cumplido:', 
      options: ['1/4 de la condena', '1/2 condena', '3/4 condena', '1/3 condena'], 
      correctAnswer: 0,
      explanation: 'El artículo 154 del Reglamento Penitenciario exige haber cumplido la cuarta parte de la condena para poder disfrutar de permisos ordinarios.'
    },
    { 
      questionText: 'Los permisos extraordinarios se dan por:', 
      options: ['Motivos muy graves (muerte familiar, nacimiento...)', 'Vacaciones', 'Buen comportamiento', 'Estudios'], 
      correctAnswer: 0,
      explanation: 'El artículo 155 del Reglamento Penitenciario regula los permisos extraordinarios para casos de fallecimiento o enfermedad grave de familiares, nacimiento de hijos, etc.'
    },
    { 
      questionText: 'La duración de los permisos extraordinarios es:', 
      options: ['El tiempo necesario (hasta límites)', '7 días fijos', '1 mes', '3 días'], 
      correctAnswer: 0,
      explanation: 'El artículo 155 del Reglamento Penitenciario establece que la duración será la necesaria según las circunstancias, con los límites establecidos.'
    },
    { 
      questionText: '¿Quién autoriza los permisos ordinarios de más de 2 días en 2º grado?', 
      options: ['El JVP', 'El Director', 'La Junta', 'El Centro Directivo'], 
      correctAnswer: 0,
      explanation: 'El artículo 156 del Reglamento Penitenciario atribuye al Juez de Vigilancia Penitenciaria la competencia para autorizar los permisos de salida.'
    },
    { 
      questionText: 'Durante el permiso, el interno:', 
      options: ['Sigue cumpliendo condena', 'Interrumpe la condena', 'Está libre', 'No cuenta'], 
      correctAnswer: 0,
      explanation: 'El permiso de salida es una institución penitenciaria que no interrumpe el cumplimiento de la condena, sino que forma parte del tratamiento.'
    },
    { 
      questionText: 'El mal comportamiento durante un permiso puede motivar:', 
      options: ['Su suspensión o revocación', 'Un premio', 'Nada', 'El traslado'], 
      correctAnswer: 0,
      explanation: 'El artículo 158 del Reglamento Penitenciario permite suspender o revocar los permisos cuando el interno incumpla las condiciones establecidas.'
    }
  ]
};

export const TEST_TOPIC_38: Test = {
  id: 'topic-38',
  title: 'Tema 38: Libertad Condicional',
  questions: [
    { 
      questionText: 'La libertad condicional se considera:', 
      options: ['Una gracia', 'El último grado de cumplimiento de la condena (suspensión)', 'Una amnistía', 'Un indulto'], 
      correctAnswer: 1,
      explanation: 'El artículo 90 del Código Penal configura la libertad condicional como el último grado de cumplimiento de la pena privativa de libertad.'
    },
    { 
      questionText: 'Para la libertad condicional ordinaria se requiere haber cumplido:', 
      options: ['1/2 condena', '2/3 condena', '3/4 partes de la condena', '1/4 condena'], 
      correctAnswer: 2,
      explanation: 'El artículo 90 del Código Penal exige haber cumplido las tres cuartas partes de la condena para acceder a la libertad condicional ordinaria.'
    },
    { 
      questionText: '¿Quién concede la libertad condicional?', 
      options: ['El Juez de Vigilancia Penitenciaria', 'El Director', 'La Junta de Tratamiento', 'El Rey'], 
      correctAnswer: 0,
      explanation: 'El artículo 76 de la LOGP atribuye al Juez de Vigilancia Penitenciaria la competencia para acordar la libertad condicional.'
    },
    { 
      questionText: 'La libertad condicional se puede adelantar a los 2/3 de condena por:', 
      options: ['Desarrollo continuo de actividades laborales, culturales o deportivas y pronóstico favorable', 'Edad', 'Enfermedad', 'Azar'], 
      correctAnswer: 0,
      explanation: 'El artículo 90.2 del Código Penal permite adelantar la libertad condicional a los dos tercios cuando el penado haya desarrollado continuadamente actividades laborales, culturales u ocupacionales y exista pronóstico individualizado y favorable de reinserción social.'
    },
    { 
      questionText: 'La libertad condicional para septuagenarios o enfermos muy graves:', 
      options: ['No requiere cumplir 3/4', 'Requiere cumplir 3/4', 'No existe', 'Requiere pago'], 
      correctAnswer: 0,
      explanation: 'El artículo 91 del Código Penal permite conceder la libertad condicional a septuagenarios o enfermos muy graves con padecimientos incurables sin el requisito de haber cumplido las tres cuartas partes.'
    },
    { 
      questionText: 'La revocación de la libertad condicional conlleva:', 
      options: ['Reingreso en prisión', 'Multa', 'Nada', 'Amonestación'], 
      correctAnswer: 0,
      explanation: 'El artículo 93 del Código Penal establece que la revocación de la libertad condicional conlleva el reingreso en prisión para cumplir el tiempo de condena que reste.'
    },
    { 
      questionText: 'El periodo de libertad condicional dura:', 
      options: ['Lo que falte de condena', '1 año fijo', '5 años', 'Toda la vida'], 
      correctAnswer: 0,
      explanation: 'La libertad condicional se extiende por el tiempo que reste de condena hasta su cumplimiento total.'
    },
    { 
      questionText: 'Es requisito estar clasificado en:', 
      options: ['Tercer grado', 'Segundo grado', 'Primer grado', 'Ninguno'], 
      correctAnswer: 0,
      explanation: 'El artículo 90 del Código Penal exige estar clasificado en tercer grado de tratamiento penitenciario para acceder a la libertad condicional.'
    },
    { 
      questionText: 'La buena conducta es requisito para:', 
      options: ['La libertad condicional', 'Ingresar', 'Comer', 'Dormir'], 
      correctAnswer: 0,
      explanation: 'El artículo 90 del Código Penal establece como requisito haber observado buena conducta para acceder a la libertad condicional.'
    },
    { 
      questionText: 'El JVP puede imponer reglas de conducta:', 
      options: ['Sí', 'No', 'Solo si quiere el interno', 'Nunca'], 
      correctAnswer: 0,
      explanation: 'El artículo 90 del Código Penal permite al Juez de Vigilancia imponer reglas de conducta durante el periodo de libertad condicional.'
    }
  ]
};

export const TEST_TOPIC_39: Test = {
  id: 'topic-39',
  title: 'Tema 39: Asistencia Social',
  questions: [
    { 
      questionText: 'La acción social penitenciaria se dirige a:', 
      options: ['La reincorporación social del interno y soporte familiar', 'Vigilar', 'Castigar', 'Juzgar'], 
      correctAnswer: 0,
      explanation: 'El artículo 62 de la LOGP establece que la asistencia social penitenciaria se dirige a la reincorporación social del interno y al soporte de su familia.'
    },
    { 
      questionText: 'El Trabajo Social es parte del:', 
      options: ['Equipo Técnico', 'Servicio de vigilancia', 'Servicio de limpieza', 'Sindicato'], 
      correctAnswer: 0,
      explanation: 'El artículo 273 del Reglamento Penitenciario incluye a los trabajadores sociales como miembros del Equipo Técnico.'
    },
    { 
      questionText: '¿Existen ayudas para el transporte de familiares para visitas?', 
      options: ['No', 'Sí, pueden existir ayudas de la Comisión de Asistencia Social u ONGs', 'Están prohibidas', 'Solo en Navidad'], 
      correctAnswer: 1,
      explanation: 'Existen programas de ayuda al transporte de familiares gestionados por la Comisión de Asistencia Social Penitenciaria y organizaciones colaboradoras.'
    },
    { 
      questionText: 'La Comisión de Asistencia Social Penitenciaria es un órgano:', 
      options: ['Colegiado', 'Unipersonal', 'Judicial', 'Privado'], 
      correctAnswer: 0,
      explanation: 'La Comisión de Asistencia Social Penitenciaria es un órgano colegiado que coordina la acción social penitenciaria.'
    },
    { 
      questionText: 'El subsidio de excarcelación se gestiona ante:', 
      options: ['El SEPE', 'La Prisión', 'El Juez', 'El Ayuntamiento'], 
      correctAnswer: 0,
      explanation: 'El subsidio de excarcelación se gestiona ante el Servicio Público de Empleo Estatal (SEPE), siendo una prestación para liberados de prisión.'
    },
    { 
      questionText: 'La asistencia social atiende a:', 
      options: ['Internos, liberados condicionales y familiares', 'Solo funcionarios', 'Solo víctimas', 'Turistas'], 
      correctAnswer: 0,
      explanation: 'El artículo 62 de la LOGP establece que la asistencia social se extiende a internos, liberados condicionales y familiares de ambos.'
    },
    { 
      questionText: 'Las ONGs pueden entrar en prisión:', 
      options: ['Sí, para programas autorizados', 'No, nunca', 'Libremente', 'Solo a rezar'], 
      correctAnswer: 0,
      explanation: 'El artículo 62 de la LOGP permite la colaboración de entidades y asociaciones en la asistencia social penitenciaria, previa autorización.'
    },
    { 
      questionText: 'El programa de preparación para la libertad es:', 
      options: ['Prioritario', 'Irrelevante', 'Prohibido', 'Opcional'], 
      correctAnswer: 0,
      explanation: 'El artículo 177 del Reglamento Penitenciario establece como prioritarios los programas de preparación para la libertad.'
    },
    { 
      questionText: 'Los problemas de documentación (DNI) los gestiona:', 
      options: ['Trabajo Social / Oficinas', 'El médico', 'El interno solo', 'Nadie'], 
      correctAnswer: 0,
      explanation: 'Los trabajadores sociales y las oficinas de gestión penitenciaria gestionan los trámites de documentación de los internos.'
    },
    { 
      questionText: 'La acogida a la salida de prisión puede hacerse en:', 
      options: ['Pisos de acogida', 'La calle', 'La comisaría', 'El juzgado'], 
      correctAnswer: 0,
      explanation: 'Existen recursos de acogida como pisos y centros gestionados por entidades colaboradoras para facilitar la reinserción social.'
    }
  ]
};

export const TEST_TOPIC_40: Test = {
  id: 'topic-40',
  title: 'Tema 40: Trabajo Penitenciario',
  questions: [
    { 
      questionText: 'El trabajo penitenciario es un derecho y un deber, pero NO puede ser:', 
      options: ['Remunerado', 'Productivo', 'Aflictivo (castigo)', 'Formativo'], 
      correctAnswer: 2,
      explanation: 'El artículo 25 de la LOGP establece que el trabajo no tendrá carácter aflictivo, es decir, no puede ser un castigo.'
    },
    { 
      questionText: '¿Tienen derecho los internos trabajadores a vacaciones?', 
      options: ['No', 'Sí, 30 días naturales', 'Solo si son buenos', 'Depende del Director'], 
      correctAnswer: 1,
      explanation: 'El artículo 27 de la LOGP reconoce el derecho de los internos trabajadores a 30 días naturales de vacaciones retribuidas.'
    },
    { 
      questionText: 'La organización del trabajo productivo corresponde a:', 
      options: ['La TPFE (Trabajo Penitenciario y Formación para el Empleo)', 'La Policía', 'El Juez', 'Los internos'], 
      correctAnswer: 0,
      explanation: 'El Organismo Autónomo Trabajo Penitenciario y Formación para el Empleo (TPFE) es el encargado de organizar el trabajo productivo en prisiones.'
    },
    { 
      questionText: 'El trabajo productivo se retribuye:', 
      options: ['Conforme al rendimiento y horario (referencia SMI)', 'Con tabaco', 'No se paga', 'Con permisos'], 
      correctAnswer: 0,
      explanation: 'El artículo 27 de la LOGP establece que el trabajo será remunerado conforme al rendimiento, tomando como referencia el Salario Mínimo Interprofesional.'
    },
    { 
      questionText: 'Los internos trabajadores cotizan a:', 
      options: ['La Seguridad Social', 'Nadie', 'Un fondo privado', 'Al Director'], 
      correctAnswer: 0,
      explanation: 'El artículo 28 de la LOGP establece que los internos trabajadores estarán incluidos en el Régimen General de la Seguridad Social.'
    },
    { 
      questionText: 'El trabajo es:', 
      options: ['Voluntario en su acceso', 'Obligatorio forzoso', 'Esclavitud', 'Juego'], 
      correctAnswer: 0,
      explanation: 'El artículo 26 de la LOGP configura el trabajo como un derecho y un deber, pero su acceso es voluntario, no pudiendo imponerse coactivamente.'
    },
    { 
      questionText: 'La relación laboral especial penitenciaria se regula por:', 
      options: ['RD 782/2001', 'Estatuto de los Trabajadores general', 'Código Penal', 'Ley de Vagos'], 
      correctAnswer: 0,
      explanation: 'El Real Decreto 782/2001 regula la relación laboral de carácter especial de los penados que realicen actividades laborales en talleres penitenciarios.'
    },
    { 
      questionText: 'El despido disciplinario en prisión:', 
      options: ['Es posible', 'No existe', 'Es imposible', 'Es premio'], 
      correctAnswer: 0,
      explanation: 'El RD 782/2001 prevé la posibilidad de despido disciplinario en la relación laboral especial penitenciaria por incumplimientos graves.'
    },
    { 
      questionText: 'Los trabajos ocupacionales (no productivos):', 
      options: ['No son remunerados (pueden tener estímulos)', 'Son pagados como salario', 'Cotizan', 'Son delito'], 
      correctAnswer: 0,
      explanation: 'Los trabajos ocupacionales no tienen carácter productivo ni remuneración salarial, aunque pueden conllevar estímulos o compensaciones.'
    },
    { 
      questionText: 'La formación profesional es:', 
      options: ['Fundamental para la reinserción', 'Pérdida de tiempo', 'Castigo', 'Ocio'], 
      correctAnswer: 0,
      explanation: 'El artículo 59 de la LOGP establece la formación profesional como elemento fundamental del tratamiento penitenciario orientado a la reinserción social.'
    }
  ]
};
