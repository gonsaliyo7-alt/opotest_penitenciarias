
import type { Test } from '../../types';

export const TEST_TOPIC_1: Test = {
  id: 'topic-1',
  title: 'Tema 1: La Constitución Española',
  questions: [
    { 
      questionText: 'La Constitución se fundamenta en:', 
      options: ['La indisoluble unidad de la Nación española', 'La autonomía de las regiones', 'La solidaridad internacional', 'La monarquía'], 
      correctAnswer: 0,
      explanation: 'El artículo 2 de la Constitución establece que esta se fundamenta en la indisoluble unidad de la Nación española, patria común e indivisible de todos los españoles.'
    },
    { 
      questionText: '¿Qué artículo establece que el castellano es la lengua española oficial del Estado?', 
      options: ['Artículo 2', 'Artículo 3', 'Artículo 4', 'Artículo 5'], 
      correctAnswer: 1,
      explanation: 'El artículo 3.1 de la Constitución establece que el castellano es la lengua española oficial del Estado.'
    },
    { 
      questionText: 'Los valores superiores del ordenamiento jurídico son la libertad, la justicia, la igualdad y:', 
      options: ['La fraternidad', 'El pluralismo político', 'La seguridad', 'El orden'], 
      correctAnswer: 1,
      explanation: 'El artículo 1.1 de la Constitución propugna como valores superiores de su ordenamiento jurídico la libertad, la justicia, la igualdad y el pluralismo político.'
    },
    { 
      questionText: 'La Constitución Española fue ratificada por el pueblo español en referéndum el día:', 
      options: ['31 de octubre de 1978', '6 de diciembre de 1978', '27 de diciembre de 1978', '29 de diciembre de 1978'], 
      correctAnswer: 1,
      explanation: 'La Constitución fue aprobada por las Cortes el 31 de octubre, ratificada en referéndum el 6 de diciembre y sancionada el 27 de diciembre de 1978.'
    },
    { 
      questionText: '¿Cuál es la forma política del Estado español?', 
      options: ['República Parlamentaria', 'Monarquía Parlamentaria', 'Monarquía Absoluta', 'Estado Federal'], 
      correctAnswer: 1,
      explanation: 'El artículo 1.3 de la Constitución establece que la forma política del Estado español es la Monarquía parlamentaria.'
    },
    { 
      questionText: 'La soberanía nacional reside en:', 
      options: ['El Rey', 'Las Cortes Generales', 'El pueblo español', 'El Gobierno'], 
      correctAnswer: 2,
      explanation: 'El artículo 1.2 de la Constitución establece que la soberanía nacional reside en el pueblo español, del que emanan los poderes del Estado.'
    },
    { 
      questionText: 'La bandera de España está formada por tres franjas horizontales:', 
      options: ['Rojo, amarillo y rojo, siendo la amarilla de doble anchura', 'Rojo, amarillo y rojo, todas de igual anchura', 'Rojo, gualda y rojo, siendo la roja de doble anchura', 'Amarillo, rojo y amarillo'], 
      correctAnswer: 0,
      explanation: 'El artículo 4.1 describe la bandera de España formada por tres franjas horizontales, roja, amarilla y roja, siendo la amarilla de doble anchura que cada una de las rojas.'
    },
    { 
      questionText: 'Los partidos políticos expresan:', 
      options: ['La unidad del Estado', 'El pluralismo político', 'La soberanía del Rey', 'El poder judicial'], 
      correctAnswer: 1,
      explanation: 'El artículo 6 establece que los partidos políticos expresan el pluralismo político, concurren a la formación y manifestación de la voluntad popular y son instrumento fundamental para la participación política.'
    },
    { 
      questionText: '¿Qué título de la Constitución trata "De la Corona"?', 
      options: ['Título I', 'Título II', 'Título III', 'Título IV'], 
      correctAnswer: 1,
      explanation: 'El Título II de la Constitución (artículos 56 a 65) trata "De la Corona".'
    },
    { 
      questionText: 'La capital del Estado es la villa de:', 
      options: ['Valladolid', 'Toledo', 'Madrid', 'Barcelona'], 
      correctAnswer: 2,
      explanation: 'El artículo 5 de la Constitución establece que la capital del Estado es la villa de Madrid.'
    }
  ]
};

export const TEST_TOPIC_2: Test = {
  id: 'topic-2',
  title: 'Tema 2: Derechos y Deberes',
  questions: [
    { 
      questionText: '¿Se puede obligar a alguien a declarar sobre su ideología, religión o creencias?', 
      options: ['Sí, por seguridad nacional', 'No, nunca', 'Sí, ante un juez', 'Sí, para estadísticas'], 
      correctAnswer: 1,
      explanation: 'El artículo 16.2 de la Constitución establece que nadie podrá ser obligado a declarar sobre su ideología, religión o creencias.'
    },
    { 
      questionText: 'El derecho a la huelga se reconoce en la Constitución para:', 
      options: ['Todos los ciudadanos', 'Los trabajadores', 'Los funcionarios exclusivamente', 'Los estudiantes'], 
      correctAnswer: 1,
      explanation: 'El artículo 28.2 reconoce el derecho a la huelga de los trabajadores para la defensa de sus intereses.'
    },
    { 
      questionText: 'La detención preventiva no podrá durar más del tiempo estrictamente necesario y, en todo caso, en el plazo máximo de:', 
      options: ['24 horas', '48 horas', '72 horas', '5 días'], 
      correctAnswer: 2,
      explanation: 'El artículo 17.2 establece que la detención preventiva no podrá durar más del tiempo estrictamente necesario para la realización de las averiguaciones tendentes al esclarecimiento de los hechos, y en todo caso, en el plazo máximo de setenta y dos horas.'
    },
    { 
      questionText: 'Los españoles son mayores de edad:', 
      options: ['A los 16 años', 'A los 18 años', 'A los 21 años', 'A los 25 años'], 
      correctAnswer: 1,
      explanation: 'El artículo 12 de la Constitución establece que los españoles son mayores de edad a los dieciocho años.'
    },
    { 
      questionText: 'Nadie puede ser condenado o sancionado por acciones u omisiones que en el momento de producirse:', 
      options: ['No fueran inmorales', 'No constituyan delito, falta o infracción administrativa según la legislación vigente', 'No sean conocidas por la policía', 'Sean leves'], 
      correctAnswer: 1,
      explanation: 'El artículo 25.1 consagra el principio de legalidad penal: nadie puede ser condenado por acciones u omisiones que en el momento de producirse no constituyan delito, falta o infracción administrativa.'
    },
    { 
      questionText: 'El derecho a la vida se reconoce en el artículo:', 
      options: ['14', '15', '16', '17'], 
      correctAnswer: 1,
      explanation: 'El artículo 15 de la Constitución reconoce que todos tienen derecho a la vida y a la integridad física y moral.'
    },
    { 
      questionText: '¿Se admite la pena de muerte en la Constitución?', 
      options: ['Sí, en cualquier caso', 'No, salvo lo que puedan disponer las leyes penales militares para tiempos de guerra', 'Sí, para terrorismo', 'Nunca'], 
      correctAnswer: 1,
      explanation: 'El artículo 15 abole la pena de muerte, salvo lo que puedan disponer las leyes penales militares para tiempos de guerra.'
    },
    { 
      questionText: 'La enseñanza básica es:', 
      options: ['Obligatoria y de pago', 'Obligatoria y gratuita', 'Voluntaria y gratuita', 'Voluntaria y de pago'], 
      correctAnswer: 1,
      explanation: 'El artículo 27.4 establece que la enseñanza básica es obligatoria y gratuita.'
    },
    { 
      questionText: 'El Defensor del Pueblo es designado por:', 
      options: ['El Rey', 'El Gobierno', 'Las Cortes Generales', 'El pueblo'], 
      correctAnswer: 2,
      explanation: 'El artículo 54 establece que el Defensor del Pueblo es el alto comisionado de las Cortes Generales, designado por estas.'
    },
    { 
      questionText: 'Los extranjeros gozarán en España de las libertades públicas que garantiza el Título I:', 
      options: ['En los términos que establezcan los tratados y la ley', 'Igual que los españoles siempre', 'Solo si son comunitarios', 'No tienen derechos'], 
      correctAnswer: 0,
      explanation: 'El artículo 13.1 establece que los extranjeros gozarán en España de las libertades públicas del Título I en los términos que establezcan los tratados y la ley.'
    }
  ]
};

export const TEST_TOPIC_3: Test = {
  id: 'topic-3',
  title: 'Tema 3: La Corona',
  questions: [
    { 
      questionText: 'El Rey es:', 
      options: ['Jefe del Gobierno', 'Jefe del Estado', 'Presidente de las Cortes', 'Defensor del Pueblo'], 
      correctAnswer: 1,
      explanation: 'El artículo 56.1 define al Rey como el Jefe del Estado, símbolo de su unidad y permanencia.'
    },
    { 
      questionText: 'La persona del Rey es:', 
      options: ['Inviolable y no está sujeta a responsabilidad', 'Responsable ante el Parlamento', 'Juzgable por el Supremo', 'Elegible'], 
      correctAnswer: 0,
      explanation: 'El artículo 56.3 establece que la persona del Rey es inviolable y no está sujeta a responsabilidad.'
    },
    { 
      questionText: '¿Qué corresponde al Rey respecto a las leyes?', 
      options: ['Redactarlas', 'Sancionarlas y promulgarlas', 'Debatirlas', 'Ignorarlas'], 
      correctAnswer: 1,
      explanation: 'El artículo 62.a atribuye al Rey la función de sancionar y promulgar las leyes.'
    },
    { 
      questionText: 'La Corona de España es hereditaria en los sucesores de:', 
      options: ['S.M. Don Juan Carlos I de Borbón', 'Los Reyes Católicos', 'Felipe VI', 'Carlos III'], 
      correctAnswer: 0,
      explanation: 'El artículo 57.1 establece que la Corona de España es hereditaria en los sucesores de S.M. Don Juan Carlos I de Borbón, legítimo heredero de la dinastía histórica.'
    },
    { 
      questionText: 'En la sucesión a la Corona, ¿qué principio prevalece en el mismo grado?', 
      options: ['El varón sobre la mujer', 'La mujer sobre el varón', 'El sorteo', 'La elección'], 
      correctAnswer: 0,
      explanation: 'El artículo 57.1 establece el orden de sucesión, prefiriendo en el mismo grado al varón sobre la mujer.'
    },
    { 
      questionText: 'Si se extinguieran todas las líneas llamadas en Derecho, ¿quién proveerá a la sucesión?', 
      options: ['El pueblo en referéndum', 'Las Cortes Generales', 'El Gobierno', 'El Consejo de Estado'], 
      correctAnswer: 1,
      explanation: 'El artículo 57.3 establece que extinguidas todas las líneas llamadas en Derecho, las Cortes Generales proveerán a la sucesión en la Corona en la forma que más convenga a los intereses de España.'
    },
    { 
      questionText: 'El Rey puede declarar la guerra y hacer la paz, previa autorización de:', 
      options: ['El Gobierno', 'Las Cortes Generales', 'El Consejo de Seguridad Nacional', 'La ONU'], 
      correctAnswer: 1,
      explanation: 'El artículo 63.3 establece que al Rey corresponde, previa autorización de las Cortes Generales, declarar la guerra y hacer la paz.'
    },
    { 
      questionText: 'La Regencia se ejerce en nombre del Rey y:', 
      options: ['Por mandato constitucional', 'Por mandato divino', 'Por elección', 'Por delegación'], 
      correctAnswer: 0,
      explanation: 'El artículo 59.5 establece que la Regencia se ejercerá por mandato constitucional y siempre en nombre del Rey.'
    },
    { 
      questionText: 'El Príncipe heredero, desde su nacimiento, tendrá la dignidad de:', 
      options: ['Infante de España', 'Príncipe de Asturias', 'Duque de Lugo', 'Conde de Barcelona'], 
      correctAnswer: 1,
      explanation: 'El artículo 57.2 establece que el Príncipe heredero tendrá la dignidad de Príncipe de Asturias y los demás títulos vinculados tradicionalmente al sucesor de la Corona de España.'
    },
    { 
      questionText: 'Los actos del Rey serán refrendados, como norma general, por:', 
      options: ['El Presidente del Gobierno y, en su caso, los Ministros competentes', 'El Presidente del Congreso', 'El Presidente del Senado', 'El Rey no necesita refrendo'], 
      correctAnswer: 0,
      explanation: 'El artículo 64.1 establece que los actos del Rey serán refrendados por el Presidente del Gobierno y, en su caso, por los Ministros competentes.'
    }
  ]
};

export const TEST_TOPIC_4: Test = {
  id: 'topic-4',
  title: 'Tema 4: Las Cortes Generales',
  questions: [
    { 
      questionText: 'El Congreso de los Diputados se compone de un mínimo y un máximo de:', 
      options: ['300 y 400 diputados', '250 y 350 diputados', '100 y 200 diputados', 'No hay límite'], 
      correctAnswer: 0,
      explanation: 'El artículo 68.1 de la Constitución establece que el Congreso se compone de un mínimo de 300 y un máximo de 400 Diputados.'
    },
    { 
      questionText: '¿Quién elige a los Senadores?', 
      options: ['Solo el Rey', 'Una parte los ciudadanos y otra los Parlamentos Autonómicos', 'Solo los Parlamentos Autonómicos', 'El Gobierno'], 
      correctAnswer: 1,
      explanation: 'El artículo 69 establece que una parte de los Senadores son elegidos por los ciudadanos en cada provincia y otra parte son designados por las Asambleas Legislativas de las Comunidades Autónomas.'
    },
    { 
      questionText: 'El voto de los Diputados y Senadores es:', 
      options: ['Personal e indelegable', 'Delegable en el portavoz', 'Público siempre', 'Colegiado'], 
      correctAnswer: 0,
      explanation: 'El artículo 79.3 establece que el voto de Senadores y Diputados es personal e indelegable.'
    },
    { 
      questionText: 'Las Cortes Generales representan:', 
      options: ['Al Gobierno', 'Al pueblo español', 'A las CCAA', 'Al Rey'], 
      correctAnswer: 1,
      explanation: 'El artículo 66.1 establece que las Cortes Generales representan al pueblo español.'
    },
    { 
      questionText: 'Los miembros de las Cortes Generales gozarán de inviolabilidad por:', 
      options: ['Sus delitos privados', 'Las opiniones manifestadas en el ejercicio de sus funciones', 'Cualquier acto', 'Sus deudas'], 
      correctAnswer: 1,
      explanation: 'El artículo 71.1 establece que los Diputados y Senadores gozarán de inviolabilidad por las opiniones manifestadas en el ejercicio de sus funciones.'
    },
    { 
      questionText: 'Durante el periodo de su mandato, los Diputados y Senadores solo podrán ser detenidos en caso de:', 
      options: ['Delito leve', 'Flagrante delito', 'Orden del Gobierno', 'Manifestación ilegal'], 
      correctAnswer: 1,
      explanation: 'El artículo 71.2 establece que durante el período de su mandato los Diputados y Senadores gozarán de inmunidad y sólo podrán ser detenidos en caso de flagrante delito.'
    },
    { 
      questionText: 'La circunscripción electoral del Congreso es:', 
      options: ['La Comunidad Autónoma', 'La Provincia', 'El Municipio', 'El Estado único'], 
      correctAnswer: 1,
      explanation: 'El artículo 68.2 establece que la circunscripción electoral es la provincia.'
    },
    { 
      questionText: 'El Senado es la Cámara de:', 
      options: ['Representación popular directa', 'Representación territorial', 'Control judicial', 'Segunda lectura obligatoria'], 
      correctAnswer: 1,
      explanation: 'El artículo 69.1 define al Senado como la Cámara de representación territorial.'
    },
    { 
      questionText: 'Las sesiones plenarias de las Cámaras serán:', 
      options: ['Secretas', 'Públicas, salvo acuerdo en contrario', 'Solo para prensa', 'Televisadas obligatoriamente'], 
      correctAnswer: 1,
      explanation: 'El artículo 80 establece que las sesiones plenarias de las Cámaras serán públicas, salvo acuerdo en contrario de cada Cámara, adoptado por mayoría absoluta o con arreglo al Reglamento.'
    },
    { 
      questionText: '¿Quién convalida los Decretos-leyes?', 
      options: ['El Senado', 'El Congreso de los Diputados', 'El Rey', 'El Tribunal Constitucional'], 
      correctAnswer: 1,
      explanation: 'El artículo 86.2 establece que los Decretos-leyes deberán ser inmediatamente sometidos a debate y votación de totalidad al Congreso de los Diputados.'
    }
  ]
};

export const TEST_TOPIC_5: Test = {
  id: 'topic-5',
  title: 'Tema 5: Gobierno y TC',
  questions: [
    { 
      questionText: '¿Quién dirige la acción del Gobierno?', 
      options: ['El Rey', 'El Presidente del Gobierno', 'El Ministro de Presidencia', 'Las Cortes'], 
      correctAnswer: 1,
      explanation: 'El artículo 98.2 establece que el Presidente dirige la acción del Gobierno y coordina las funciones de los demás miembros del mismo.'
    },
    { 
      questionText: 'La moción de censura debe ser propuesta al menos por:', 
      options: ['La mayoría absoluta', 'La décima parte de los Diputados', '35 diputados', 'Un grupo parlamentario'], 
      correctAnswer: 1,
      explanation: 'El artículo 113.2 establece que la moción de censura deberá ser propuesta al menos por la décima parte de los Diputados.'
    },
    { 
      questionText: 'El Tribunal Constitucional se compone de:', 
      options: ['10 miembros', '12 miembros', '15 miembros', '9 miembros'], 
      correctAnswer: 1,
      explanation: 'El artículo 159.1 establece que el Tribunal Constitucional se compone de 12 miembros nombrados por el Rey.'
    },
    { 
      questionText: 'Los miembros del Gobierno no podrán ejercer otras funciones representativas que las propias del:', 
      options: ['Mandato parlamentario', 'Sindicato', 'Consejo de administración', 'Partido político'], 
      correctAnswer: 0,
      explanation: 'El artículo 98.3 establece que los miembros del Gobierno no podrán ejercer otras funciones representativas que las propias del mandato parlamentario.'
    },
    { 
      questionText: 'El Gobierno cesa tras la celebración de:', 
      options: ['Elecciones generales', 'El Consejo de Ministros', 'El Debate del Estado de la Nación', 'La Navidad'], 
      correctAnswer: 0,
      explanation: 'El artículo 101 establece que el Gobierno cesa tras la celebración de elecciones generales, en los casos de pérdida de la confianza parlamentaria, o por dimisión o fallecimiento de su Presidente.'
    },
    { 
      questionText: 'El Consejo de Estado es el supremo órgano:', 
      options: ['Consultivo del Gobierno', 'Jurisdiccional', 'Legislativo', 'Ejecutivo'], 
      correctAnswer: 0,
      explanation: 'El artículo 107 establece que el Consejo de Estado es el supremo órgano consultivo del Gobierno.'
    },
    { 
      questionText: '¿Quién nombra a los miembros del Tribunal Constitucional?', 
      options: ['El Rey', 'El Gobierno', 'El Presidente del TC', 'El Consejo General del Poder Judicial'], 
      correctAnswer: 0,
      explanation: 'El artículo 159.1 establece que los miembros del Tribunal Constitucional son nombrados por el Rey (a propuesta de Congreso, Senado, Gobierno y CGPJ).'
    },
    { 
      questionText: 'El Presidente del Tribunal Constitucional es nombrado por el Rey, a propuesta de:', 
      options: ['El Gobierno', 'El mismo Tribunal en pleno', 'El Congreso', 'El Senado'], 
      correctAnswer: 1,
      explanation: 'El artículo 160 establece que el Presidente del Tribunal Constitucional será nombrado entre sus miembros por el Rey, a propuesta del mismo Tribunal en pleno.'
    },
    { 
      questionText: 'El recurso de amparo constitucional protege:', 
      options: ['Todos los derechos', 'Los derechos y libertades reconocidos en los art. 14 a 29 y 30.2', 'Solo la propiedad', 'Los principios rectores'], 
      correctAnswer: 1,
      explanation: 'El artículo 53.2 establece que cualquier ciudadano podrá recabar la tutela de las libertades y derechos reconocidos en el artículo 14 y la Sección primera del Capítulo segundo (arts. 15-29) ante los Tribunales ordinarios y, en su caso, a través del recurso de amparo ante el Tribunal Constitucional. También la objeción de conciencia (art. 30.2).'
    },
    { 
      questionText: '¿Pueden los miembros del Gobierno ser juzgados por traición?', 
      options: ['No, son inviolables', 'Sí, solo ante la Sala de lo Penal del Tribunal Supremo', 'Sí, ante cualquier juez', 'Solo por el TC'], 
      correctAnswer: 1,
      explanation: 'El artículo 102.2 establece que si la acusación fuere por traición o por cualquier delito contra la seguridad del Estado en el ejercicio de sus funciones, sólo podrá ser planteada por iniciativa de la cuarta parte de los miembros del Congreso, y con la aprobación de la mayoría absoluta del mismo. La responsabilidad criminal será exigible ante la Sala de lo Penal del Tribunal Supremo (art. 102.1).'
    }
  ]
};

export const TEST_TOPIC_6: Test = {
  id: 'topic-6',
  title: 'Tema 6: Organización Territorial',
  questions: [
    { 
      questionText: 'El gobierno y administración autónoma de las provincias corresponde a:', 
      options: ['Los Ayuntamientos', 'Las Diputaciones u otras Corporaciones de carácter representativo', 'El Delegado del Gobierno', 'La CCAA'], 
      correctAnswer: 1,
      explanation: 'El artículo 141.2 establece que el gobierno y la administración autónoma de las provincias estarán encomendados a Diputaciones u otras Corporaciones de carácter representativo.'
    },
    { 
      questionText: 'El Estado garantiza la realización efectiva del principio de solidaridad velando por:', 
      options: ['El equilibrio económico', 'La uniformidad cultural', 'La centralización', 'La independencia'], 
      correctAnswer: 0,
      explanation: 'El artículo 138.1 establece que el Estado garantiza la realización efectiva del principio de solidaridad, velando por el establecimiento de un equilibrio económico, adecuado y justo entre las diversas partes del territorio español.'
    },
    { 
      questionText: '¿Pueden las CCAA celebrar acuerdos de cooperación entre sí?', 
      options: ['No, nunca', 'Sí, con autorización de las Cortes Generales', 'Sí, libremente', 'Solo para turismo'], 
      correctAnswer: 1,
      explanation: 'El artículo 145.2 establece que para los acuerdos de cooperación entre Comunidades Autónomas distintos de los convenios de gestión, se requerirá la previa autorización de las Cortes Generales.'
    },
    { 
      questionText: 'El control de la constitucionalidad de las disposiciones normativas de las CCAA con fuerza de ley corresponde a:', 
      options: ['El Gobierno', 'El Tribunal Constitucional', 'La Jurisdicción Contencioso-Administrativa', 'El Tribunal de Cuentas'], 
      correctAnswer: 1,
      explanation: 'El artículo 153.a establece que el control de la actividad de los órganos de las Comunidades Autónomas se ejercerá por el Tribunal Constitucional, el relativo a la constitucionalidad de sus disposiciones normativas con fuerza de ley.'
    },
    { 
      questionText: 'La iniciativa del proceso autonómico corresponde a:', 
      options: ['El Rey', 'Las Diputaciones y órganos interinsulares y a las 2/3 partes de los municipios', 'El Gobierno central', 'Los sindicatos'], 
      correctAnswer: 1,
      explanation: 'El artículo 143.2 establece que la iniciativa corresponde a todas las Diputaciones interesadas o al órgano interinsular correspondiente y a las dos terceras partes de los municipios cuya población represente, al menos, la mayoría del censo electoral de cada provincia o isla.'
    },
    { 
      questionText: 'El Delegado del Gobierno en la Comunidad Autónoma es nombrado por:', 
      options: ['El Presidente de la CCAA', 'El Consejo de Ministros', 'El Rey', 'El Parlamento Autonómico'], 
      correctAnswer: 1,
      explanation: 'El artículo 154 establece que un Delegado nombrado por el Gobierno dirigirá la Administración del Estado en el territorio de la Comunidad Autónoma. La Ley 40/2015 especifica que es nombrado por el Consejo de Ministros a propuesta del Presidente del Gobierno.'
    },
    { 
      questionText: 'La norma institucional básica de cada Comunidad Autónoma es:', 
      options: ['La Constitución', 'El Estatuto de Autonomía', 'La Ley de Bases', 'El Reglamento Orgánico'], 
      correctAnswer: 1,
      explanation: 'El artículo 147.1 establece que los Estatutos serán la norma institucional básica de cada Comunidad Autónoma.'
    },
    { 
      questionText: 'Los Concejales son elegidos por:', 
      options: ['El Alcalde', 'Los vecinos', 'La Diputación', 'Sorteo'], 
      correctAnswer: 1,
      explanation: 'El artículo 140 establece que los Concejales serán elegidos por los vecinos del municipio mediante sufragio universal, igual, libre, directo y secreto.'
    },
    { 
      questionText: 'La provincia es una entidad local con personalidad jurídica propia determinada por la agrupación de:', 
      options: ['Municipios', 'Comarcas', 'Barrios', 'Distritos'], 
      correctAnswer: 0,
      explanation: 'El artículo 141.1 define la provincia como una entidad local con personalidad jurídica propia, determinada por la agrupación de municipios.'
    },
    { 
      questionText: 'En los archipiélagos, las islas tendrán además su administración propia en forma de:', 
      options: ['Cabildos o Consejos', 'Diputaciones', 'Ayuntamientos', 'Comisiones'], 
      correctAnswer: 0,
      explanation: 'El artículo 141.4 establece que en los archipiélagos, las islas tendrán además su administración propia en forma de Cabildos o Consejos.'
    }
  ]
};

export const TEST_TOPIC_7: Test = {
  id: 'topic-7',
  title: 'Tema 7: La Unión Europea',
  questions: [
    { 
      questionText: 'El Tratado de adhesión de España a la CEE se firmó en:', 
      options: ['1978', '1985', '1992', '1981'], 
      correctAnswer: 1,
      explanation: 'El Tratado de Adhesión de España a las Comunidades Europeas se firmó en Madrid el 12 de junio de 1985, entrando en vigor el 1 de enero de 1986.'
    },
    { 
      questionText: '¿Qué institución representa los intereses de los Estados miembros?', 
      options: ['La Comisión', 'El Parlamento', 'El Consejo de la Unión Europea', 'El Tribunal de Justicia'], 
      correctAnswer: 2,
      explanation: 'El Consejo de la Unión Europea (o Consejo de Ministros) representa los intereses de los Estados miembros.'
    },
    { 
      questionText: 'La primacía del Derecho Comunitario implica que:', 
      options: ['Prevalece sobre el derecho nacional en caso de conflicto', 'Es supletorio', 'Solo aplica si lo dice el Rey', 'Es inferior a la Ley nacional'], 
      correctAnswer: 0,
      explanation: 'El principio de primacía establece que el Derecho de la Unión Europea prevalece sobre el Derecho nacional de los Estados miembros en caso de conflicto.'
    },
    { 
      questionText: '¿Quiénes componen el Consejo Europeo?', 
      options: ['Los Ministros de cada país', 'Los Jefes de Estado o de Gobierno de los Estados miembros, su Presidente y el Presidente de la Comisión', 'Los eurodiputados', 'Los jueces'], 
      correctAnswer: 1,
      explanation: 'El Consejo Europeo está compuesto por los Jefes de Estado o de Gobierno de los Estados miembros, así como por su Presidente y el Presidente de la Comisión.'
    },
    { 
      questionText: 'El poder legislativo en la UE es compartido principalmente por:', 
      options: ['La Comisión y el Consejo', 'El Parlamento Europeo y el Consejo', 'El Tribunal y el Parlamento', 'El Consejo Europeo y el BCE'], 
      correctAnswer: 1,
      explanation: 'El Parlamento Europeo y el Consejo de la Unión Europea comparten la función legislativa (procedimiento legislativo ordinario).'
    },
    { 
      questionText: 'La Comisión Europea representa:', 
      options: ['Los intereses de los Estados', 'El interés general de la Unión', 'A los ciudadanos', 'A los bancos'], 
      correctAnswer: 1,
      explanation: 'La Comisión Europea promueve el interés general de la Unión y toma las iniciativas adecuadas con este fin.'
    },
    { 
      questionText: '¿Qué tratado estableció la ciudadanía europea?', 
      options: ['Tratado de Roma', 'Tratado de Maastricht', 'Tratado de París', 'Acta Única'], 
      correctAnswer: 1,
      explanation: 'El Tratado de Maastricht (1992) introdujo la ciudadanía de la Unión.'
    },
    { 
      questionText: 'El Tribunal de Justicia de la Unión Europea tiene su sede en:', 
      options: ['Bruselas', 'Estrasburgo', 'Luxemburgo', 'La Haya'], 
      correctAnswer: 2,
      explanation: 'El Tribunal de Justicia de la Unión Europea tiene su sede en Luxemburgo.'
    },
    { 
      questionText: 'Los Reglamentos comunitarios son:', 
      options: ['Obligatorios en todos sus elementos y directamente aplicables', 'Obligatorios en cuanto al resultado', 'Recomendaciones', 'No vinculantes'], 
      correctAnswer: 0,
      explanation: 'El Reglamento es obligatorio en todos sus elementos y directamente aplicable en cada Estado miembro.'
    },
    { 
      questionText: 'La Directiva comunitaria obliga al Estado miembro en cuanto a:', 
      options: ['La forma y los medios', 'El resultado que debe conseguirse', 'Nada', 'El plazo solamente'], 
      correctAnswer: 1,
      explanation: 'La Directiva obligará al Estado miembro destinatario en cuanto al resultado que deba conseguirse, dejando, sin embargo, a las autoridades nacionales la elección de la forma y de los medios.'
    }
  ]
};

export const TEST_TOPIC_8: Test = {
  id: 'topic-8',
  title: 'Tema 8: Fuentes Dº Administrativo',
  questions: [
    { 
      questionText: 'La inderogabilidad singular de los reglamentos significa que:', 
      options: ['No se pueden derogar nunca', 'Las resoluciones administrativas de carácter particular no pueden vulnerar lo establecido en una disposición de carácter general', 'Solo el juez los deroga', 'Son eternos'], 
      correctAnswer: 1,
      explanation: 'El artículo 37.1 de la LPAC establece que las resoluciones administrativas de carácter particular no podrán vulnerar lo establecido en una disposición de carácter general, aunque aquéllas tengan igual o superior rango a éstas.'
    },
    { 
      questionText: 'Los Decretos Legislativos son normas con rango de ley dictadas por:', 
      options: ['El Parlamento', 'El Gobierno por delegación de las Cortes', 'Los Jueces', 'El Rey'], 
      correctAnswer: 1,
      explanation: 'Los Decretos Legislativos son normas con rango de ley dictadas por el Gobierno en virtud de una delegación legislativa de las Cortes Generales (Art. 82 CE).'
    },
    { 
      questionText: '¿Qué principio rige la relación entre Ley Orgánica y Ley Ordinaria?', 
      options: ['Jerarquía', 'Competencia', 'Antigüedad', 'Especialidad'], 
      correctAnswer: 1,
      explanation: 'La relación entre Ley Orgánica y Ley Ordinaria se rige por el principio de competencia (materias reservadas), no de jerarquía.'
    },
    { 
      questionText: 'La costumbre en nuestro ordenamiento jurídico:', 
      options: ['Es la fuente principal', 'Solo rige en defecto de ley aplicable', 'No es fuente', 'Es superior a la ley'], 
      correctAnswer: 1,
      explanation: 'El artículo 1.3 del Código Civil establece que la costumbre sólo regirá en defecto de ley aplicable, siempre que no sea contraria a la moral o al orden público y que resulte probada.'
    },
    { 
      questionText: 'Los Tratados Internacionales válidamente celebrados formarán parte del ordenamiento interno:', 
      options: ['Inmediatamente', 'Una vez publicados oficialmente en España', 'Cuando lo diga el Rey', 'A los 20 días'], 
      correctAnswer: 1,
      explanation: 'El artículo 96.1 de la Constitución establece que los Tratados internacionales válidamente celebrados, una vez publicados oficialmente en España, formarán parte del ordenamiento interno.'
    },
    { 
      questionText: '¿Qué son los Decretos-Leyes?', 
      options: ['Normas del Parlamento', 'Disposiciones legislativas provisionales dictadas por el Gobierno en caso de extraordinaria y urgente necesidad', 'Reglamentos', 'Leyes orgánicas'], 
      correctAnswer: 1,
      explanation: 'El artículo 86.1 de la Constitución define los Decretos-leyes como disposiciones legislativas provisionales que el Gobierno podrá dictar en caso de extraordinaria y urgente necesidad.'
    },
    { 
      questionText: 'La potestad reglamentaria originaria corresponde:', 
      options: ['A los Ministros', 'Al Gobierno de la Nación', 'A los Directores Generales', 'A los Alcaldes'], 
      correctAnswer: 1,
      explanation: 'El artículo 97 de la Constitución atribuye al Gobierno la potestad reglamentaria.'
    },
    { 
      questionText: '¿Pueden los reglamentos regular materias reservadas a la Ley?', 
      options: ['Sí, siempre', 'No', 'Solo si es urgente', 'Solo organizativamente'], 
      correctAnswer: 1,
      explanation: 'Los reglamentos no pueden regular materias reservadas a la Ley (principio de reserva de ley), salvo para desarrollar o complementar lo establecido en ella (reglamentos ejecutivos).'
    },
    { 
      questionText: 'Las Leyes Orgánicas requieren para su aprobación:', 
      options: ['Mayoría simple', 'Mayoría absoluta del Congreso', 'Mayoría de 2/3', 'Unanimidad'], 
      correctAnswer: 1,
      explanation: 'El artículo 81.2 de la Constitución establece que la aprobación, modificación o derogación de las leyes orgánicas exigirá mayoría absoluta del Congreso, en una votación final sobre el conjunto del proyecto.'
    },
    { 
      questionText: 'La jurisprudencia complementará el ordenamiento jurídico con la doctrina que establezca:', 
      options: ['El Tribunal Constitucional', 'El Tribunal Supremo', 'La Audiencia Nacional', 'Los Juzgados'], 
      correctAnswer: 1,
      explanation: 'El artículo 1.6 del Código Civil establece que la jurisprudencia complementará el ordenamiento jurídico con la doctrina que, de modo reiterado, establezca el Tribunal Supremo al interpretar y aplicar la ley, la costumbre y los principios generales del derecho.'
    }
  ]
};

export const TEST_TOPIC_9: Test = {
  id: 'topic-9',
  title: 'Tema 9: El Acto Administrativo',
  questions: [
    { 
      questionText: 'Los actos presuntos son:', 
      options: ['Actos escritos', 'Actos verbales', 'Los que resultan del silencio administrativo', 'Actos nulos'], 
      correctAnswer: 2,
      explanation: 'Los actos presuntos son aquellos que se producen por el silencio administrativo (ficción legal) ante la falta de resolución expresa en plazo.'
    },
    { 
      questionText: '¿Qué actos ponen fin a la vía administrativa?', 
      options: ['Todos', 'Los de los Ministros y Secretarios de Estado (salvo ley en contrario)', 'Los de los Jefes de Sección', 'Los de trámite'], 
      correctAnswer: 1,
      explanation: 'El artículo 114 de la LPAC establece qué actos ponen fin a la vía administrativa, incluyendo los de los miembros del Gobierno, Ministros y Secretarios de Estado.'
    },
    { 
      questionText: 'La notificación defectuosa:', 
      options: ['Es válida siempre', 'Surte efecto si el interesado realiza actuaciones que supongan el conocimiento del contenido', 'Es nula radicalmente', 'No existe'], 
      correctAnswer: 1,
      explanation: 'El artículo 40.3 de la LPAC establece que las notificaciones defectuosas surtirán efecto a partir de la fecha en que el interesado realice actuaciones que supongan el conocimiento del contenido y alcance de la resolución.'
    },
    { 
      questionText: 'Son anulables los actos de la Administración que:', 
      options: ['Incurran en cualquier infracción del ordenamiento jurídico, incluso la desviación de poder', 'Sean dictados por órgano manifiestamente incompetente', 'Lesionen derechos fundamentales', 'Sean constitutivos de delito'], 
      correctAnswer: 0,
      explanation: 'El artículo 48 de la LPAC establece que son anulables los actos que incurran en cualquier infracción del ordenamiento jurídico, incluso la desviación de poder.'
    },
    { 
      questionText: 'Los actos nulos de pleno derecho:', 
      options: ['Pueden convalidarse', 'No pueden convalidarse', 'Caducan a los 4 años', 'Son válidos si no se recurren'], 
      correctAnswer: 1,
      explanation: 'La nulidad de pleno derecho es insubsanable, por lo que los actos nulos no pueden convalidarse (Art. 52 LPAC).'
    },
    { 
      questionText: 'La eficacia de los actos administrativos quedará demorada cuando:', 
      options: ['Así lo exija el contenido del acto o esté supeditada a notificación/publicación', 'El funcionario quiera', 'Sea fin de semana', 'Haya huelga'], 
      correctAnswer: 0,
      explanation: 'El artículo 39.2 de la LPAC establece que la eficacia quedará demorada cuando así lo exija el contenido del acto o esté supeditada a su notificación, publicación o aprobación superior.'
    },
    { 
      questionText: 'La motivación de los actos es obligatoria:', 
      options: ['Siempre', 'Para los actos que limiten derechos subjetivos o intereses legítimos', 'Nunca', 'Solo en multas'], 
      correctAnswer: 1,
      explanation: 'El artículo 35 de la LPAC exige la motivación de los actos que limiten derechos subjetivos o intereses legítimos, entre otros.'
    },
    { 
      questionText: 'El silencio administrativo en procedimientos iniciados a solicitud del interesado es generalmente:', 
      options: ['Negativo', 'Positivo', 'Neutro', 'Aleatorio'], 
      correctAnswer: 1,
      explanation: 'El artículo 24 de la LPAC establece como regla general el silencio positivo en procedimientos iniciados a solicitud del interesado, salvo norma con rango de ley o excepciones.'
    },
    { 
      questionText: 'Los actos administrativos se presumen:', 
      options: ['Nulos', 'Válidos y producen efectos desde que se dictan', 'Falsos', 'Inexistentes'], 
      correctAnswer: 1,
      explanation: 'El artículo 39.1 de la LPAC establece que los actos de las Administraciones Públicas sujetos al Derecho Administrativo se presumirán válidos y producirán efectos desde la fecha en que se dicten.'
    },
    { 
      questionText: 'La ejecución de los actos administrativos puede realizarse mediante:', 
      options: ['Multa coercitiva', 'Embargo', 'Compulsión sobre las personas', 'Todas son correctas'], 
      correctAnswer: 3,
      explanation: 'El artículo 100 de la LPAC enumera los medios de ejecución forzosa: apremio sobre el patrimonio, ejecución subsidiaria, multa coercitiva y compulsión sobre las personas.'
    }
  ]
};

export const TEST_TOPIC_10: Test = {
  id: 'topic-10',
  title: 'Tema 10: Procedimiento Administrativo',
  questions: [
    { 
      questionText: 'La iniciación del procedimiento puede ser:', 
      options: ['De oficio o a solicitud de interesado', 'Solo de oficio', 'Solo a solicitud', 'Por sorteo'], 
      correctAnswer: 0,
      explanation: 'El artículo 54 de la LPAC establece que los procedimientos podrán iniciarse de oficio o a solicitud del interesado.'
    },
    { 
      questionText: 'El trámite de audiencia se realiza:', 
      options: ['Antes de la propuesta de resolución (instrucción)', 'Después de la resolución', 'Al inicio', 'Cuando quiera el funcionario'], 
      correctAnswer: 0,
      explanation: 'El artículo 82 de la LPAC establece que instruidos los procedimientos, e inmediatamente antes de redactar la propuesta de resolución, se pondrá de manifiesto a los interesados (trámite de audiencia).'
    },
    { 
      questionText: 'La caducidad del procedimiento se produce por:', 
      options: ['Falta de pago', 'Paralización por causa imputable al interesado (tras advertencia y plazo)', 'Desistimiento de la Administración', 'Error informático'], 
      correctAnswer: 1,
      explanation: 'El artículo 95 de la LPAC establece que en los procedimientos iniciados a solicitud del interesado, cuando se produzca su paralización por causa imputable al mismo, la Administración le advertirá que, transcurridos tres meses, se producirá la caducidad.'
    },
    { 
      questionText: 'Los plazos expresados en días se cuentan:', 
      options: ['Días naturales', 'Días hábiles (excluyendo sábados, domingos y festivos)', 'Semanas', 'Meses'], 
      correctAnswer: 1,
      explanation: 'El artículo 30.2 de la LPAC establece que, salvo que se disponga otra cosa, cuando los plazos se señalen por días, se entiende que éstos son hábiles, excluyéndose del cómputo los sábados, los domingos y los declarados festivos.'
    },
    { 
      questionText: '¿Es obligatoria la resolución expresa en todos los procedimientos?', 
      options: ['Sí, la Administración está obligada a dictar resolución expresa', 'No, basta el silencio', 'Solo en los sancionadores', 'Depende del funcionario'], 
      correctAnswer: 0,
      explanation: 'El artículo 21 de la LPAC establece que la Administración está obligada a dictar resolución expresa y a notificarla en todos los procedimientos cualquiera que sea su forma de iniciación.'
    },
    { 
      questionText: 'Las medidas provisionales se pueden adoptar:', 
      options: ['Solo al final', 'En cualquier momento del procedimiento para asegurar la eficacia de la resolución', 'Nunca', 'Solo si hay delito'], 
      correctAnswer: 1,
      explanation: 'El artículo 56 de la LPAC permite adoptar medidas provisionales en cualquier momento del procedimiento para asegurar la eficacia de la resolución que pudiera recaer.'
    },
    { 
      questionText: 'La ampliación de plazos no puede exceder de:', 
      options: ['La mitad de los mismos', 'El doble', 'Un mes', 'Diez días'], 
      correctAnswer: 0,
      explanation: 'El artículo 32 de la LPAC permite conceder una ampliación de los plazos establecidos, que no exceda de la mitad de los mismos.'
    },
    { 
      questionText: 'La causa de abstención "tener interés personal en el asunto" aplica a:', 
      options: ['Los interesados', 'Las autoridades y personal al servicio de la Administración', 'Los jueces solo', 'Los testigos'], 
      correctAnswer: 1,
      explanation: 'El artículo 23 de la Ley 40/2015 establece que las autoridades y el personal al servicio de las Administraciones se abstendrán de intervenir en el procedimiento si tienen interés personal en el asunto.'
    },
    { 
      questionText: 'El periodo de prueba podrá tener una duración no superior a:', 
      options: ['10 días', '20 días', '30 días', '6 meses'], 
      correctAnswer: 2,
      explanation: 'El artículo 77.2 de la LPAC establece que el período de prueba tendrá una duración no superior a treinta días ni inferior a diez.'
    },
    { 
      questionText: 'La terminación convencional del procedimiento consiste en:', 
      options: ['Una sentencia', 'Un acuerdo, pacto o convenio', 'El archivo', 'La caducidad'], 
      correctAnswer: 1,
      explanation: 'El artículo 86 de la LPAC regula la terminación convencional, que consiste en celebrar acuerdos, pactos, convenios o contratos con personas tanto de Derecho público como privado.'
    }
  ]
};
