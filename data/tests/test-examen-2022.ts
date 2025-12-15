
import type { Test } from '../../types';

export const TEST_EXAMEN_2022: Test = {
  id: 'test-examen-2022',
  title: 'Examen Oficial 2022 - OEP 2021/2022',
  questions: [
    // Pregunta 1
    {
      questionText: 'Señale la respuesta incorrecta. Corresponde al Rey:',
      options: [
        'Expedir los decretos acordados por el Consejo de Ministros',
        'Proponer el/la candidata/a del Gobierno y, en su caso nombrarlo/a',
        'Presidir las sesiones del Consejo de Ministros, cuando lo estime oportuno, a petición del/la Presidente/a del Gobierno, a fin de ser informado/a de los asuntos de Estado',
        'Representar al Gobierno'
      ],
      correctAnswer: 3,
      explanation: 'El Rey asume la más alta representación del Estado español en las relaciones internacionales (art. 56 CE), pero NO representa al Gobierno. La representación y dirección del Gobierno corresponden a su Presidente.'
    },

    // Pregunta 2
    {
      questionText: 'El/la Fiscal General del Estado:',
      options: [
        'Será nombrado/a por el Congreso de los Diputados a propuesta del Gobierno',
        'Se elegirá entre juristas españoles/as de reconocido prestigio con más de 15 años de ejercicio efectivo de su profesión',
        'Una vez nombrado/a y tras prestar juramento o promeso ante el Rey, tomará posesión ante el pleno de las Cortes Generales',
        'Se elegirá entre miembros de la carrera judicial o fiscal, de reconocido prestigio y con más de 15 años en el ejercicio efectivo de la profesión'
      ],
      correctAnswer: 1,
      explanation: 'Según el art. 29 del Estatuto Orgánico del Ministerio Fiscal, el Fiscal General será nombrado por el Rey, a propuesta del Gobierno, oído el CGPJ, eligiéndolo entre juristas españoles de reconocido prestigio con más de quince años de ejercicio efectivo de su profesión.'
    },

    // Pregunta 3
    {
      questionText: 'Según la ley 50/1997, de 27 de noviembre, del Gobierno, la Presidencia de la Comisión General de Secretarios de Estado y Subsecretarios corresponde a:',
      options: [
        'La persona titular del Ministerio de la Presidencia, Relaciones con las Cortes y Memoria Democrática o, en su defecto, a un/a Vicepresidente/a',
        'La persona titular del Ministerio de la presidencia, Relaciones con las Cortes y Memoria Democrática, siempre',
        'La persona titular del Ministerio de la presidencia, Relaciones con las Cortes y Memoria Democrática, en defecto de un/a Vicepresidente/a',
        'La persona titular del Ministerio de Hacienda y Función Pública'
      ],
      correctAnswer: 0,
      explanation: 'Corresponde a un Vicepresidente o, en su defecto, al Ministro de la Presidencia (art. 8 de la Ley del Gobierno).'
    },

    // Pregunta 4
    {
      questionText: 'Según el artículo 152.1 de la Constitución Española, el/la Presidente/a de una Comunidad Autónoma será elegido/a por:',
      options: [
        'El Consejo de Gobierno',
        'La Asamblea Legislativa',
        'El/la Presidente/a del Gobierno',
        'Las Cortes Generales'
      ],
      correctAnswer: 1,
      explanation: 'El art. 152.1 CE establece que el Presidente será elegido por la Asamblea, de entre sus miembros, y nombrado por el Rey.'
    },

    // Pregunta 5
    {
      questionText: 'Señale la respuesta incorrecta. Es una Institución de la Unión Europea:',
      options: [
        'El Consejo de Europa',
        'La Comisión Europea',
        'El Banco Central Europeo',
        'El Tribunal de Justicia de la Unión Europea'
      ],
      correctAnswer: 0,
      explanation: 'El Consejo de Europa es una organización internacional distinta de la Unión Europea (no es una institución de la UE). El Consejo Europeo y el Consejo de la UE sí son instituciones de la UE.'
    },

    // Pregunta 6
    {
      questionText: '¿Cuál de los siguientes órganos directivos NO depende de la Secretaría de Estado de Seguridad?',
      options: [
        'La Dirección General de la Policía',
        'La Dirección General de la Guardia Civil',
        'La Dirección General de Relaciones Internacionales y Extranjería',
        'La Dirección General de Protección Civil y Emergencias'
      ],
      correctAnswer: 3,
      explanation: 'La Dirección General de Protección Civil y Emergencias depende de la Subsecretaría del Interior, no de la Secretaría de Estado de Seguridad (RD estructura Ministerio Interior).'
    },

    // Pregunta 7
    {
      questionText: 'En relación con los derechos de los ciudadanos en sus relaciones con las Administraciones Públicas, señale la respuesta correcta:',
      options: [
        'Tienen derecho a ser asistidos en el uso de medios electrónicos en sus relaciones con las Administraciones Públicas.',
        'Tienen derecho a exigir la responsabilidad de las Administraciones Públicas y del personal a su servicio, cuando así corresponda legalmente.',
        'Tienen derecho al acceso a la información pública, archivos y registros.',
        'Todas las respuestas anteriores son correctas.'
      ],
      correctAnswer: 3,
      explanation: 'El artículo 13 de la Ley 39/2015 recoge todos estos derechos.'
    },

    // Pregunta 8
    {
      questionText: 'El plazo máximo en el que debe notificarse la resolución expresa de un procedimiento sancionador será:',
      options: [
        'El fijado por la norma reguladora del correspondiente procedimiento',
        'Tres meses',
        'Seis meses',
        'Un año'
      ],
      correctAnswer: 0,
      explanation: 'El plazo será el fijado por la norma reguladora. Si no fija plazo, será de 3 meses, pero en sancionadores suele ser mayor (ej. 6 meses o 1 año según la ley específica).'
    },

    // Pregunta 9
    {
      questionText: 'Contra las disposiciones administrativas de carácter general:',
      options: [
        'Cabe recurso de alzada',
        'Cabe recurso potestativo de reposición',
        'No cabrá recurso en vía administrativa',
        'Cabe recurso extraordinario de revisión'
      ],
      correctAnswer: 2,
      explanation: 'El artículo 112.3 de la Ley 39/2015 establece que contra las disposiciones administrativas de carácter general no cabrá recurso en vía administrativa.'
    },

    // Pregunta 10
    {
      questionText: 'La potestad sancionadora de las Administraciones Públicas:',
      options: [
        'Se ejercerá cuando haya sido expresamente reconocida por una norma con rango de Ley (o reglamentaria en el caso de Entidades Locales)',
        'Es ilimitada',
        'No requiere procedimiento previo',
        'Se puede delegar en empresas privadas'
      ],
      correctAnswer: 0,
      explanation: 'Requiere cobertura legal (art. 25 Ley 40/2015) y procedimiento reglamentario.'
    },

    // Pregunta 11
    {
      questionText: 'La Agenda 2030 para el Desarrollo Sostenible fue aprobada por:',
      options: [
        'La Asamblea General de la ONU',
        'El Consejo de Seguridad de la ONU',
        'La Unión Europea',
        'El G20'
      ],
      correctAnswer: 0,
      explanation: 'Fue aprobada por la Asamblea General de la ONU en septiembre de 2015.'
    },

    // Pregunta 12
    {
      questionText: 'El Portal de Transparencia de la Administración General del Estado:',
      options: [
        'Depende del Ministerio de la Presidencia',
        'Depende del Ministerio de Hacienda y Función Pública',
        'Es un organismo autónomo',
        'No depende de ningún ministerio'
      ],
      correctAnswer: 1,
      explanation: 'Su gestión corresponde al Ministerio de Hacienda y Función Pública (o el competente en función pública).'
    },

    // Pregunta 13
    {
      questionText: 'La igualdad de trato y no discriminación en el acceso al empleo público:',
      options: [
        'Es un principio rector',
        'No se aplica a interinos',
        'Permite discriminación positiva sin límites',
        'Solo se aplica a mujeres'
      ],
      correctAnswer: 0,
      explanation: 'Es un principio fundamental recogido en el EBEP (art. 55).'
    },

    // Pregunta 14
    {
      questionText: 'El permiso por nacimiento para la madre biológica tiene una duración de:',
      options: [
        '16 semanas',
        '12 semanas',
        '20 semanas',
        '14 semanas'
      ],
      correctAnswer: 0,
      explanation: 'El permiso es de 16 semanas (art. 49 EBEP).'
    },

    // Pregunta 15
    {
      questionText: 'Las situaciones administrativas de los funcionarios de carrera son:',
      options: [
        'Servicio activo, servicios especiales, servicio en otras AAPP, excedencia y suspensión de funciones',
        'Solo activo y excedencia',
        'Activo, pasivo y reserva',
        'Funcionarios y laborales'
      ],
      correctAnswer: 0,
      explanation: 'Son las enumeradas en el art. 85 del TREBEP.'
    },

    // Pregunta 16
    {
      questionText: 'El contrato de obras:',
      options: [
        'Tiene por objeto la realización de una obra o trabajo de construcción o ingeniería civil',
        'Es un contrato privado',
        'No requiere proyecto',
        'Se adjudica siempre directamente'
      ],
      correctAnswer: 0,
      explanation: 'Definición del contrato de obras en la LCSP.'
    },

    // Pregunta 17
    {
      questionText: 'La pena de prisión permanente revisable:',
      options: [
        'Fue introducida por la LO 1/2015',
        'Siempre existió en el CP 1995',
        'Es inconstitucional',
        'Se aplica a delitos leves'
      ],
      correctAnswer: 0,
      explanation: 'Fue introducida en la reforma del Código Penal operada por la Ley Orgánica 1/2015.'
    },

    // Pregunta 18
    {
      questionText: 'Son circunstancias agravantes:',
      options: [
        'La alevosía',
        'El obrar por causas o estímulos tan poderosos que hayan producido arrebato, obcecación u otro estado pasional de entidad semejante',
        'La confesión',
        'La reparación del daño'
      ],
      correctAnswer: 0,
      explanation: 'La alevosía es una agravante (art. 22 CP). El arrebato es atenuante.'
    },

    // Pregunta 19
    {
      questionText: 'El grado máximo de la pena de prisión de 10 a 15 años es:',
      options: [
        'Toda la pena entre 12 años y un día y 15 años',
        '15 años',
        '22 años y 6 meses',
        '12 años y medio'
      ],
      correctAnswer: 0,
      explanation: 'El grado máximo es la mitad superior. De 10 a 15, la mitad es 12,5. El intervalo superior es de 12 años y 6 meses a 15 años.'
    },

    // Pregunta 20
    {
      questionText: 'La libertad condicional se regula en el Código Penal como:',
      options: [
        'Una modalidad de suspensión de la ejecución del resto de la pena',
        'Un grado de tratamiento',
        'Una pena sustitutiva',
        'Un derecho fundamental'
      ],
      correctAnswer: 0,
      explanation: 'Tras la reforma de 2015, la libertad condicional es una modalidad de suspensión de la ejecución de la pena de prisión.'
    },

    // Pregunta 21
    {
      questionText: 'El delito de prevaricación judicial:',
      options: [
        'Solo puede ser cometido por Juez o Magistrado',
        'Puede cometerlo un funcionario',
        'Puede cometerlo un abogado',
        'No existe'
      ],
      correctAnswer: 0,
      explanation: 'Es un delito especial propio de Jueces y Magistrados (art. 446 CP).'
    },

    // Pregunta 22
    {
      questionText: 'La tortura se define en el Código Penal en el artículo:',
      options: [
        '174',
        '173',
        '175',
        '176'
      ],
      correctAnswer: 0,
      explanation: 'El artículo 174 CP tipifica la tortura cometida por autoridad o funcionario público.'
    },

    // Pregunta 23
    {
      questionText: 'El indulto:',
      options: [
        'Es una medida de gracia que extingue la responsabilidad penal',
        'Borra los antecedentes penales',
        'Lo concede el Juez',
        'Es un recurso judicial'
      ],
      correctAnswer: 0,
      explanation: 'El indulto es derecho de gracia que extingue la pena (responsabilidad criminal), pero no cancela antecedentes por sí solo.'
    },

    // Pregunta 24
    {
      questionText: 'La Ley Orgánica General Penitenciaria es la Ley:',
      options: [
        '1/1979, de 26 de septiembre',
        '6/1985, de 1 de julio',
        '10/1995, de 23 de noviembre',
        '4/2015, de 30 de marzo'
      ],
      correctAnswer: 0,
      explanation: 'LOGP 1/1979, de 26 de septiembre.'
    },

    // Pregunta 25
    {
      questionText: 'El Reglamento Penitenciario vigente fue aprobado por:',
      options: [
        'Real Decreto 190/1996, de 9 de febrero',
        'Real Decreto 1201/1981, de 8 de mayo',
        'Real Decreto 840/2011, de 17 de junio',
        'Ley Orgánica 1/1979'
      ],
      correctAnswer: 0,
      explanation: 'El RP actual es el aprobado por RD 190/1996.'
    },

    // Pregunta 26
    {
      questionText: 'La separación interior de los reclusos tendrá en cuenta:',
      options: [
        'Sexo, edad, antecedentes, estado físico y mental',
        'Raza y religión',
        'Nacionalidad',
        'Opinión política'
      ],
      correctAnswer: 0,
      explanation: 'Art. 16 LOGP: separación por sexo, edad (jóvenes/adultos), antecedentes (primarios/reincidentes), salud.'
    },

    // Pregunta 27
    {
      questionText: 'El régimen de preventivos se caracteriza por:',
      options: [
        'La limitación de la libertad ambulatoria para asegurar la presencia en el proceso',
        'El trabajo obligatorio',
        'La clasificación en grados',
        'No tener derechos'
      ],
      correctAnswer: 0,
      explanation: 'Los preventivos no están clasificados y su régimen busca retención y custodia (art. 8 y 10 LOGP).'
    },

    // Pregunta 28
    {
      questionText: 'La Junta de Tratamiento es un órgano:',
      options: [
        'Colegiado',
        'Unipersonal',
        'Judicial',
        'Exterior'
      ],
      correctAnswer: 0,
      explanation: 'Es un órgano colegiado presidido por el Director (art. 272 RP).'
    },

    // Pregunta 29
    {
      questionText: 'Contra el acuerdo de regresión de grado cabe recurso ante:',
      options: [
        'El Juez de Vigilancia Penitenciaria',
        'El Director del Centro',
        'El Ministro del Interior',
        'El Tribunal Supremo'
      ],
      correctAnswer: 0,
      explanation: 'Las resoluciones sobre clasificación son recurribles ante el JVP (art. 76 LOGP).'
    },

    // Pregunta 31
    {
      questionText: 'Según el artículo 38 de la Ley Orgánica General Penitenciaria, las madres internas:',
      options: [
        'Podrán tener en su compañía a los hijos menores de tres años',
        'Podrán tener en su compañía a los hijos menores de seis años',
        'No podrán tener a sus hijos en prisión',
        'Solo en caso de lactancia'
      ],
      correctAnswer: 0,
      explanation: 'Las internas pueden tener a sus hijos menores de 3 años consigo en prisión (art. 38 LOGP).'
    },

    // Pregunta 32
    {
      questionText: 'Para que las internas puedan tener a sus hijos menores en prisión se requiere (art. 17 RP):',
      options: [
        'Solicitud de la madre, acreditación de filiación y que no entrañe riesgo para el menor',
        'Autorización del Juez de Menores',
        'Informe favorable del Ministerio Fiscal preceptivo',
        'Resolución del Consejo de Dirección'
      ],
      correctAnswer: 0,
      explanation: 'Se requiere solicitud de la madre, acreditar filiación y que no haya riesgo para el menor.'
    },

    // Pregunta 33
    {
      questionText: 'Conforme a lo dispuesto en el artículo 67.2 del Reglamento Penitenciario, los recuentos extraordinarios se realizarán:',
      options: [
        'Diariamente, en los momentos de la jornada regimental que coincida con los relevos del personal de vigilancia',
        'Los que se fijen en el horario aprobado por el Consejo de Dirección',
        'Los que ordene el/la Jefe/a de Servicios, comunicándolo a la Dirección',
        'Exclusivamente cuando lo ordene el/la directora/a'
      ],
      correctAnswer: 2,
      explanation: 'Los recuentos extraordinarios los ordena el Jefe de Servicios, comunicándolo al Director.'
    },

    // Pregunta 34
    {
      questionText: 'Conforme a las previsiones del artículo 13 del R.P., el sistema penitenciario estará orientado por:',
      options: [
        'El principio modular',
        'El principio celular',
        'El principio departamental',
        'El principio de vida en común'
      ],
      correctAnswer: 1,
      explanation: 'El sistema penitenciario se orientará por el principio celular, aunque la vida en prisión es comunitaria.'
    },

    // Pregunta 35
    {
      questionText: 'Señale la respuesta incorrecta. Conforme al artículo 83 del R.P., la actividad penitenciaria en régimen abierto se rige por los principios de:',
      options: [
        'Normalización social e integración',
        'Coordinación con organismos e instituciones públicas',
        'Ausencia de medidas de control, sin perjuicio del establecimiento de programas de seguimiento',
        'Prevención para tratar de evitar la desestructuración familiar y social'
      ],
      correctAnswer: 2,
      explanation: 'El régimen abierto tiene atenuación de medidas de control, no ausencia total.'
    },

    // Pregunta 36
    {
      questionText: 'Todas las resoluciones de clasificación o progresión a tercer grado se notificarán al Ministerio Fiscal:',
      options: [
        'Dentro de los tres días hábiles siguientes a la fecha de su adopción',
        'Dentro de los cinco días naturales',
        'Inmediatamente',
        'Mensualmente'
      ],
      correctAnswer: 0,
      explanation: 'Se notificarán al Ministerio Fiscal dentro de los tres días hábiles siguientes (art. 107 RP).'
    },

    // Pregunta 37
    {
      questionText: 'Según el artículo 102.5 del Reglamento Penitenciario, entre los factores a ponderar para clasificar en primer grado NO se encuentra:',
      options: [
        'La pertenencia a organizaciones delictivas o a bandas armadas',
        'La elevada cuantía de las condenas (esto no es un factor directo de primer grado, sino la peligrosidad)',
        'La naturaleza de los delitos cometidos',
        'La comisión de actos que atenten contra la vida o integridad física'
      ],
      correctAnswer: 1,
      explanation: 'La cuantía de la pena por sí sola no determina el primer grado, sino la peligrosidad extrema o inadaptación manifiesta.'
    },

    // Pregunta 38
    {
      questionText: 'Las conducciones de los internos se realizarán:',
      options: [
        'Respetando la dignidad y derechos de los internos y la seguridad de la conducción',
        'En transporte público',
        'Solo de noche',
        'Sin custodia policial'
      ],
      correctAnswer: 0,
      explanation: 'El art. 18 LOGP establece que el traslado debe respetar la dignidad y seguridad.'
    },

    // Pregunta 39
    {
      questionText: 'El Centro Directivo ordenará el traslado de los detenidos y presos a propuesta de:',
      options: [
        'Los Directores de los establecimientos',
        'El Juez competente',
        'La familia',
        'El abogado'
      ],
      correctAnswer: 0,
      explanation: 'Para preventivos, el traslado lo ordena el Centro Directivo, pero se notificará a la autoridad judicial a cuya disposición estén.'
    },

    // Pregunta 40
    {
      questionText: 'Los internos tienen derecho a recibir información:',
      options: [
        'Personal y actualizada de su situación procesal y penitenciaria',
        'Sobre la vida de otros internos',
        'Sobre la seguridad del centro',
        'Sobre los domicilios de los funcionarios'
      ],
      correctAnswer: 0,
      explanation: 'Art. 4.2 LOGP: Derecho a información personal y actualizada de su situación.'
    },

    // Pregunta 41
    {
      questionText: 'La asistencia religiosa católica se presta:',
      options: [
        'De conformidad con los Acuerdos entre el Estado y la Santa Sede',
        'Solo si hay presupuesto',
        'No se presta asistencia religiosa en prisiones públicas',
        'Solo los domingos'
      ],
      correctAnswer: 0,
      explanation: 'Se garantiza la libertad religiosa y la asistencia según acuerdos con confesiones (art. 54 LOGP).'
    },

    // Pregunta 42
    {
      questionText: 'El personal penitenciario:',
      options: [
        'Será funcionario público, debidamente seleccionado y formado',
        'Puede ser personal de seguridad privada para el interior',
        'Es militar',
        'Es voluntario'
      ],
      correctAnswer: 0,
      explanation: 'El personal de II.PP. es funcionario público civil (Título V LOGP).'
    },

    // Pregunta 43
    {
      questionText: 'La Comisión Disciplinaria se reunirá:',
      options: [
        'Al menos una vez a la semana',
        'Diariamente',
        'Mensualmente',
        'Cuando lo decida el Juez'
      ],
      correctAnswer: 0,
      explanation: 'La Comisión Disciplinaria se reunirá, al menos, una vez a la semana (art. 276 RP).'
    },

    // Pregunta 44
    {
      questionText: 'Son faltas muy graves de los internos:',
      options: [
        'Participar en motines, plantas, o desórdenes colectivos',
        'La falta de aseo',
        'No hacer la cama',
        'Hablar alto'
      ],
      correctAnswer: 0,
      explanation: 'Participar en motines es falta muy grave (art. 108 RP).'
    },

    // Pregunta 45
    {
      questionText: 'La sanción de aislamiento en celda no será de aplicación a:',
      options: [
        'Las mujeres gestantes y las madres lactantes (hasta 6 meses después del parto)',
        'Los hombres mayores de 60 años',
        'Los extranjeros',
        'Los preventivos'
      ],
      correctAnswer: 0,
      explanation: 'Art. 254 RP: No se aplica a gestantes ni madres lactantes.'
    },

    // Pregunta 46
    {
      questionText: 'La ejecución de las sanciones disciplinarias:',
      options: [
        'Podrá suspenderse por el Director si el interno observa buena conducta (para sanciones de aislamiento hasta confirmar JVP)',
        'Es inmediata siempre',
        'No se puede suspender',
        'La suspende el médico'
      ],
      correctAnswer: 0,
      explanation: 'El Director puede suspender provisionalmente la ejecución (art. 44 LOGP).'
    },

    // Pregunta 47
    {
      questionText: 'Los Establecimientos de cumplimiento de régimen cerrado son para:',
      options: [
        'Internos calificados de peligrosidad extrema o inadaptación al régimen ordinario',
        'Todos los penados',
        'Solo terroristas',
        'Preventivos'
      ],
      correctAnswer: 0,
      explanation: 'Se destinan a internos de primer grado (art. 10 LOGP/art. 90 RP).'
    },

    // Pregunta 48
    {
      questionText: 'En los módulos de respeto:',
      options: [
        'La participación del interno en la organización de la vida diaria es fundamental',
        'No hay funcionarios',
        'No hay normas',
        'Es régimen cerrado'
      ],
      correctAnswer: 0,
      explanation: 'Modelo basado en la participación, responsabilidad y normas de convivencia.'
    },

    // Pregunta 49
    {
      questionText: 'Las Unidades de Custodia Hospitalaria (UCH):',
      options: [
        'Están ubicadas en hospitales de la red sanitaria pública',
        'Están dentro de la prisión',
        'Son privadas',
        'No existen'
      ],
      correctAnswer: 0,
      explanation: 'Son unidades seguras en hospitales públicos para ingresos hospitalarios de internos.'
    },

    // Pregunta 50
    {
      questionText: 'El tratamiento terapéutico con drogas (metadona, etc.):',
      options: [
        'Requiere el consentimiento del interno',
        'Es obligatorio',
        'Está prohibido',
        'Lo ordena el Juez'
      ],
      correctAnswer: 0,
      explanation: 'Todo tratamiento médico requiere consentimiento informado (salvo riesgo vital o salud pública).'
    },
    
    // Pregunta 51
    {
      questionText: 'La tentativa de delito se castiga:',
      options: [
        'Con la pena inferior en uno o dos grados',
        'Como delito consumado',
        'No se castiga',
        'Con multa siempre'
      ],
      correctAnswer: 0,
      explanation: 'La tentativa conlleva la pena inferior en uno o dos grados a la señalada para el delito consumado (art. 62 CP).'
    },
    
    // Pregunta 52
    {
      questionText: 'No se impondrá pena sin que haya sido procesado y condenado en virtud de un procedimiento instruido con todas las garantías. Es el principio de:',
      options: [
        'Legalidad procesal',
        'Tipicidad',
        'Irretroactividad',
        'Non bis in idem'
      ],
      correctAnswer: 0,
      explanation: 'Garantía procesal del principio de legalidad (art. 3 CP).'
    },
    
    // Pregunta 53
    {
      questionText: 'Las medidas de seguridad no pueden imponerse si:',
      options: [
        'No se ha cometido un delito previo (hecho tipificado como tal)',
        'El sujeto es imputable',
        'El delito es leve',
        'No hay denuncia'
      ],
      correctAnswer: 0,
      explanation: 'Las medidas de seguridad presuponen la comisión de un hecho delictivo y la peligrosidad criminal (art. 6 CP).'
    },
    
    // Pregunta 54
    {
      questionText: 'La conspiración, proposición y provocación para delinquir:',
      options: [
        'Solo se castigan en los casos especialmente previstos en la Ley',
        'Se castigan siempre',
        'Nunca se castigan',
        'Son faltas administrativas'
      ],
      correctAnswer: 0,
      explanation: 'Los actos preparatorios solo se castigan cuando el Código Penal lo prevé expresamente (art. 17 y 18 CP).'
    },
    
    // Pregunta 55
    {
      questionText: 'El error invencible sobre un hecho constitutivo de la infracción penal:',
      options: [
        'Excluye la responsabilidad criminal',
        'Atenúa la pena',
        'Se castiga como imprudente',
        'No tiene efectos'
      ],
      correctAnswer: 0,
      explanation: 'El error invencible de tipo excluye la responsabilidad criminal. Si es vencible, se castiga como imprudente (art. 14 CP).'
    },
    
    // Pregunta 56
    {
      questionText: 'La responsabilidad civil derivada de delito comprende:',
      options: [
        'La restitución, la reparación del daño y la indemnización de perjuicios',
        'Solo la restitución',
        'La multa',
        'Las costas procesales'
      ],
      correctAnswer: 0,
      explanation: 'Art. 110 CP: Restitución, reparación e indemnización.'
    },
    
    // Pregunta 57
    {
      questionText: 'El impago de la multa impuesta a una persona jurídica:',
      options: [
        'Podrá ser intervenida hasta el pago total',
        'Se convierte en prisión para el administrador',
        'Se perdona',
        'Se sustituye por trabajos comunitarios'
      ],
      correctAnswer: 0,
      explanation: 'La responsabilidad subsidiaria por impago de multa en personas jurídicas permite su intervención (art. 53 CP).'
    },
    
    // Pregunta 58
    {
      questionText: 'La suspensión de la ejecución de la pena de prisión requiere una pena no superior a:',
      options: [
        'Dos años (como regla general)',
        'Un año',
        'Tres años',
        'Cinco años'
      ],
      correctAnswer: 0,
      explanation: 'Regla general: penas no superiores a 2 años para primarios (art. 80 CP).'
    },
    
    // Pregunta 59
    {
      questionText: 'La sustitución de penas (art. 88 CP antiguo) fue suprimida y refundida en:',
      options: [
        'La suspensión de la ejecución',
        'La libertad condicional',
        'El indulto',
        'La prescripción'
      ],
      correctAnswer: 0,
      explanation: 'La reforma de 2015 eliminó la sustitución como figura autónoma, integrándola en la suspensión.'
    },
    
    // Pregunta 60
    {
      questionText: 'El delito de omisión del deber de socorro:',
      options: [
        'Castiga al que no socorriere a una persona que se halle desamparada y en peligro manifiesto y grave',
        'Solo a médicos',
        'Solo si hay accidente de tráfico',
        'Es una falta leve'
      ],
      correctAnswer: 0,
      explanation: 'Art. 195 CP: Omisión de socorro a persona desamparada y en peligro manifiesto y grave.'
    },
    
    // Pregunta 61
    {
      questionText: 'El blanqueo de capitales busca:',
      options: [
        'Ocultar o encubrir el origen ilícito de bienes',
        'Pagar impuestos',
        'Robar bancos',
        'Falsificar dinero'
      ],
      correctAnswer: 0,
      explanation: 'Art. 301 CP: Adquirir, poseer, utilizar... sabiendo que provienen de una actividad delictiva para ocultar su origen.'
    },
    
    // Pregunta 62
    {
      questionText: 'El delito de tenencia ilícita de armas:',
      options: [
        'Castiga la tenencia de armas prohibidas o de armas reglamentarias sin licencia',
        'Tener un cuchillo de cocina',
        'Tener armas de juguete',
        'Solo vender armas'
      ],
      correctAnswer: 0,
      explanation: 'Art. 563 y ss CP protegen el orden público prohibiendo armas peligrosas sin control.'
    },
    
    // Pregunta 63
    {
      questionText: 'La violencia doméstica (intrafamiliar) se diferencia de la de género en:',
      options: [
        'El sujeto pasivo (cualquier miembro familiar vs. mujer pareja/ex pareja del agresor hombre)',
        'Es menos grave',
        'No tiene pena de prisión',
        'Es lo mismo'
      ],
      correctAnswer: 0,
      explanation: 'La violencia de género es específica del hombre contra la mujer pareja/ex pareja. La doméstica abarca otros vínculos familiares.'
    },
    
    // Pregunta 64
    {
      questionText: 'El delito de sedición fue derogado y sustituido principalmente por:',
      options: [
        'Desórdenes públicos agravados',
        'Rebelión',
        'Traición',
        'Terrorismo'
      ],
      correctAnswer: 0,
      explanation: 'Reforma de 2022 suprimió la sedición, reconduciendo conductas a desórdenes públicos agravados.'
    },
    
    // Pregunta 65
    {
      questionText: 'La sustracción de cosa propia a su utilidad social o cultural:',
      options: [
        'Es un delito contra el patrimonio histórico',
        'Es un hurto',
        'No es delito porque es propia',
        'Es una falta administrativa'
      ],
      correctAnswer: 0,
      explanation: 'Existen delitos sobre el patrimonio histórico incluso si el bien es de propiedad privada.'
    },
    
    // Pregunta 66
    {
      questionText: 'El recurso de amparo se presenta ante:',
      options: [
        'El Tribunal Constitucional',
        'El Tribunal Supremo',
        'La Audiencia Nacional',
        'El Rey'
      ],
      correctAnswer: 0,
      explanation: 'El recurso de amparo por violación de derechos fundamentales es competencia del TC.'
    },
    
    // Pregunta 67
    {
      questionText: 'El Tribunal de Cuentas:',
      options: [
        'Es el supremo órgano fiscalizador de las cuentas y gestión económica del Estado',
        'Es un tribunal de justicia ordinario',
        'Depende del Gobierno',
        'Es un banco'
      ],
      correctAnswer: 0,
      explanation: 'Art. 136 CE: Supremo órgano fiscalizador, depende directamente de las Cortes Generales.'
    },
    
    // Pregunta 68
    {
      questionText: 'El Consejo de Estado es:',
      options: [
        'El supremo órgano consultivo del Gobierno',
        'El Consejo de Ministros',
        'Un órgano legislativo',
        'El Tribunal Supremo'
      ],
      correctAnswer: 0,
      explanation: 'Art. 107 CE: Supremo órgano consultivo del Gobierno.'
    },
    
    // Pregunta 69
    {
      questionText: 'Las Comunidades Autónomas pueden asumir competencias:',
      options: [
        'A través de sus Estatutos de Autonomía, dentro del marco constitucional',
        'Todas las del Estado',
        'Solo sanidad y educación',
        'Ninguna'
      ],
      correctAnswer: 0,
      explanation: 'Art. 147 y 148 CE: Asunción de competencias vía estatutaria.'
    },
    
    // Pregunta 70
    {
      questionText: 'El Fondo de Compensación Interterritorial:',
      options: [
        'Tienen como fin corregir desequilibrios económicos interterritoriales',
        'Pagar la deuda',
        'Financiar partidos políticos',
        'Es para la UE'
      ],
      correctAnswer: 0,
      explanation: 'Art. 158.2 CE: Para hacer efectivo el principio de solidaridad.'
    },
    
    // Pregunta 71
    {
      questionText: 'La moción de censura:',
      options: [
        'Debe ser propuesta por al menos la décima parte de los Diputados y presentar un candidato alternativo (constructiva)',
        'La propone el Rey',
        'La propone el Senado',
        'No requiere candidato'
      ],
      correctAnswer: 0,
      explanation: 'Art. 113 CE: Moción de censura constructiva.'
    },
    
    // Pregunta 72
    {
      questionText: 'La cuestión de confianza:',
      options: [
        'La plantea el Presidente del Gobierno ante el Congreso sobre su programa o una declaración de política general',
        'La plantea la oposición',
        'Se plantea ante el Senado',
        'Es automática'
      ],
      correctAnswer: 0,
      explanation: 'Art. 112 CE: El Presidente plantea la cuestión de confianza.'
    },
    
    // Pregunta 73
    {
      questionText: 'El contrato administrativo típico es:',
      options: [
        'Obras, concesión de obras, concesión de servicios, suministro y servicios',
        'Compraventa civil',
        'Arrendamiento urbano',
        'Laboral'
      ],
      correctAnswer: 0,
      explanation: 'Son los contratos típicos regulados en la LCSP.'
    },
    
    // Pregunta 74
    {
      questionText: 'Para contratar con la Administración se requiere:',
      options: [
        'Plena capacidad de obrar, no estar incurso en prohibición de contratar y solvencia económica/técnica',
        'Ser amigo del alcalde',
        'Tener nacionalidad española siempre',
        'No tener deudas privadas'
      ],
      correctAnswer: 0,
      explanation: 'Requisitos de aptitud para contratar (art. 65 LCSP).'
    },
    
    // Pregunta 75
    {
      questionText: 'La adjudicación de los contratos se basa en:',
      options: [
        'La mejor relación calidad-precio',
        'El precio más bajo siempre',
        'El sorteo',
        'La decisión arbitraria'
      ],
      correctAnswer: 0,
      explanation: 'Criterio de la mejor relación calidad-precio (art. 145 LCSP).'
    },
    
    // Pregunta 76
    {
      questionText: 'El recurso especial en materia de contratación:',
      options: [
        'Es un recurso administrativo gratuito y potestativo previo al contencioso para ciertos contratos (SARA)',
        'Es judicial',
        'Cuesta dinero',
        'No existe'
      ],
      correctAnswer: 0,
      explanation: 'Recurso rápido y gratuito para contratos de cierta cuantía/tipo.'
    },
    
    // Pregunta 77
    {
      questionText: 'La responsabilidad disciplinaria de los funcionarios se extingue por:',
      options: [
        'Cumplimiento de la sanción, muerte, prescripción de falta o sanción, indulto, amnistía',
        'Cambio de puesto',
        'Vacaciones',
        'Jubilación (no extingue la responsabilidad por hechos previos salvo pérdida de condición)'
      ],
      correctAnswer: 0,
      explanation: 'Causas de extinción de la responsabilidad disciplinaria.'
    },
    
    // Pregunta 78
    {
      questionText: 'Las retribuciones de los funcionarios son:',
      options: [
        'Básicas (sueldo y trienios) y complementarias (destino, específico, productividad, gratificaciones)',
        'Solo sueldo',
        'En especie',
        'Aleatorias'
      ],
      correctAnswer: 0,
      explanation: 'Estructura retributiva del TREBEP.'
    },
    
    // Pregunta 79
    {
      questionText: 'El complemento de destino retribuye:',
      options: [
        'El nivel del puesto de trabajo desempeñado',
        'La antigüedad',
        'El rendimiento',
        'Las horas extra'
      ],
      correctAnswer: 0,
      explanation: 'Está ligado al nivel del puesto (del 1 al 30).'
    },
    
    // Pregunta 80
    {
      questionText: 'El complemento específico retribuye:',
      options: [
        'La especial dificultad técnica, dedicación, responsabilidad, peligrosidad o penosidad del puesto',
        'El nivel',
        'La antigüedad',
        'Los servicios extraordinarios'
      ],
      correctAnswer: 0,
      explanation: 'Retribuye las condiciones particulares del puesto de trabajo.'
    },
    
    // Pregunta 81
    {
      questionText: 'El Real Decreto 364/1995 regula:',
      options: [
        'El ingreso del personal al servicio de la Administración General del Estado y la provisión de puestos',
        'El Reglamento Penitenciario',
        'El Código Penal',
        'La Contratación'
      ],
      correctAnswer: 0,
      explanation: 'Reglamento de ingreso y provisión de puestos (EX11).'
    },
    
    // Pregunta 82
    {
      questionText: 'La provisión de puestos de trabajo se realiza mediante:',
      options: [
        'Concurso (regla general) y libre designación',
        'Oposición',
        'Sorteo',
        'Herencia'
      ],
      correctAnswer: 0,
      explanation: 'Sistemas normales de provisión (art. 78 EBEP).'
    },
    
    // Pregunta 83
    {
      questionText: 'La comisión de servicios:',
      options: [
        'Es una forma temporal de provisión de puestos por necesidades urgentes (máx 1+1 año)',
        'Es definitiva',
        'Es una sanción',
        'Es vacaciones'
      ],
      correctAnswer: 0,
      explanation: 'Movilidad temporal por necesidades del servicio.'
    },
    
    // Pregunta 84
    {
      questionText: 'La motivación en conducta humana:',
      options: [
        'Es el motor de la conducta, lo que nos impulsa a actuar (necesidades, impulsos)',
        'Es la inteligencia',
        'Es el aprendizaje',
        'Es la percepción'
      ],
      correctAnswer: 0,
      explanation: 'Fuerza que activa y dirige el comportamiento.'
    },
    
    // Pregunta 85
    {
      questionText: 'La pirámide de Maslow jerarquiza las necesidades en:',
      options: [
        'Fisiológicas, seguridad, afiliación, reconocimiento y autorrealización',
        'Dinero y poder',
        'Comer y dormir',
        'No tiene orden'
      ],
      correctAnswer: 0,
      explanation: 'Teoría de la jerarquía de las necesidades humanas.'
    },
    
    // Pregunta 86
    {
      questionText: 'La actitud tiene tres componentes:',
      options: [
        'Cognitivo, afectivo y conductual',
        'Bueno, malo y regular',
        'Verdadero y falso',
        'Pasado, presente y futuro'
      ],
      correctAnswer: 0,
      explanation: 'Modelo tridimensional de las actitudes.'
    },
    
    // Pregunta 87
    {
      questionText: 'El efecto halo consiste en:',
      options: [
        'Generalizar una característica positiva o negativa de una persona a toda su personalidad',
        'Ver luces',
        'Ser un santo',
        'Tener miedo'
      ],
      correctAnswer: 0,
      explanation: 'Sesgo cognitivo en la percepción de personas.'
    },
    
    // Pregunta 88
    {
      questionText: 'La conformidad o conformismo social:',
      options: [
        'Cambio de conducta u opinión de una persona como resultado de la presión real o imaginada del grupo',
        'Ser rebelde',
        'Liderar el grupo',
        'Estar solo'
      ],
      correctAnswer: 0,
      explanation: 'Influencia social mayoritaria (experimentos de Asch).'
    },
    
    // Pregunta 89
    {
      questionText: 'La obediencia a la autoridad:',
      options: [
        'Seguir órdenes de una figura de autoridad incluso si van contra la conciencia (experimento Milgram)',
        'Es siempre buena',
        'Es imposible',
        'Nadie obedece'
      ],
      correctAnswer: 0,
      explanation: 'Influencia social basada en la jerarquía y autoridad.'
    },
    
    // Pregunta 90
    {
      questionText: 'El tratamiento penitenciario debe ser:',
      options: [
        'Individualizado, científico y continuo',
        'Igual para todos',
        'Aleatorio',
        'Solo farmacológico'
      ],
      correctAnswer: 0,
      explanation: 'Principios del tratamiento penitenciario.'
    },
    
    // Pregunta 91
    {
      questionText: 'El Programa Marco de Prevención de Suicidios (PPS):',
      options: [
        'Incluye la figura del Interno de Apoyo para acompañar al interno en riesgo',
        'Aísla al interno',
        'No hace nada',
        'Expulsa al interno'
      ],
      correctAnswer: 0,
      explanation: 'El PPS utiliza internos de apoyo (sombras) para vigilancia y acompañamiento.'
    },
    
    // Pregunta 92
    {
      questionText: 'La Secretaría General de Instituciones Penitenciarias depende de:',
      options: [
        'El Ministerio del Interior',
        'El Ministerio de Justicia',
        'El Ministerio de Defensa',
        'Presidencia del Gobierno'
      ],
      correctAnswer: 0,
      explanation: 'Depende del Ministerio del Interior (Secretaría de Estado de Seguridad).'
    },
    
    // Pregunta 93
    {
      questionText: 'El Organismo Autónomo Trabajo Penitenciario y Formación para el Empleo (TPFE):',
      options: [
        'Gestiona los talleres productivos y la formación profesional en prisión',
        'Vigila los muros',
        'Lleva la sanidad',
        'Es un sindicato'
      ],
      correctAnswer: 0,
      explanation: 'Su función es promover el trabajo productivo y la formación laboral.'
    },
    
    // Pregunta 94
    {
      questionText: 'La relación laboral especial penitenciaria (RD 782/2001):',
      options: [
        'Se aplica a los internos que trabajan en talleres productivos del centro',
        'A los funcionarios',
        'A los voluntarios',
        'A los que limpian su celda solo'
      ],
      correctAnswer: 0,
      explanation: 'Regula la relación laboral especial de los penados.'
    },
    
    // Pregunta 95
    {
      questionText: 'Las prestaciones de la Seguridad Social para internos trabajadores:',
      options: [
        'Tienen derecho a la protección de la Seguridad Social (desempleo, jubilación, etc.) excepto incapacidad temporal por contingencias comunes',
        'No tienen derecho a nada',
        'Solo jubilación',
        'Tienen más derechos que los libres'
      ],
      correctAnswer: 0,
      explanation: 'Cotizan y tienen derechos, con especificidades en la prestación sanitaria (que da la Admon penitenciaria) e IT.'
    },
    
    // Pregunta 96
    {
      questionText: 'El sistema de individualización científica implica:',
      options: [
        'Separación en grados según la evolución del tratamiento',
        'Solo custodia',
        'Trato militar',
        'Castigo físico'
      ],
      correctAnswer: 0,
      explanation: 'Sistema penitenciario español: grados y tratamiento individualizado.'
    },
    
    // Pregunta 97
    {
      questionText: 'La libertad condicional para septuagenarios y enfermos muy graves:',
      options: [
        'Puede concederse sin cumplir las 3/4 partes de la condena si hay pronóstico favorable y escasa peligrosidad',
        'Nunca se concede',
        'Es automática',
        'Requiere cumplir todo'
      ],
      correctAnswer: 0,
      explanation: 'Adelantamiento de la libertad condicional por razones humanitarias (edad/enfermedad).'
    },
    
    // Pregunta 98
    {
      questionText: 'El licenciamiento definitivo:',
      options: [
        'Supone la extinción total de la responsabilidad penal por cumplimiento (aprobado por el Juez o Tribunal Sentenciador)',
        'Es un permiso',
        'Es el tercer grado',
        'Es la libertad condicional'
      ],
      correctAnswer: 0,
      explanation: 'El licenciamiento es la fecha de cumplimiento final y libertad definitiva.'
    },
    
    // Pregunta 99
    {
      questionText: 'El control de los dispositivos telemáticos (pulseras) corresponde a:',
      options: [
        'Los servicios de gestión de penas y medidas alternativas (y el Centro de Control de Medios Telemáticos)',
        'La policía local',
        'Nadie',
        'El interno'
      ],
      correctAnswer: 0,
      explanation: 'Se gestiona centralizadamente para el control de tercer grado telemático o libertad vigilada.'
    },
    
    // Pregunta 100
    {
      questionText: 'La Ley de Prevención de Riesgos Laborales:',
      options: [
        'Se aplica también en el ámbito penitenciario con las adaptaciones necesarias para la seguridad',
        'No se aplica a funcionarios',
        'Solo a empresas privadas',
        'Es voluntaria'
      ],
      correctAnswer: 0,
      explanation: 'Es aplicable a la Administración con particularidades en servicios operativos.'
    },
    
    // Pregunta 101
    {
      questionText: 'El Delegado de Prevención:',
      options: [
        'Es el representante de los trabajadores en materia de seguridad y salud',
        'Es el jefe',
        'Es un médico',
        'Es un inspector'
      ],
      correctAnswer: 0,
      explanation: 'Figura de representación de los trabajadores en PRL.'
    },
    
    // Pregunta 102
    {
      questionText: 'Los EPIs (Equipos de Protección Individual):',
      options: [
        'Deben ser proporcionados por el empleador gratuitamente',
        'Los compra el trabajador',
        'No sirven para nada',
        'Son decorativos'
      ],
      correctAnswer: 0,
      explanation: 'Obligación del empresario de proporcionar protección.'
    },
    
    // Pregunta 103
    {
      questionText: 'El Plan de Igualdad de la AGE:',
      options: [
        'Incluye medidas para garantizar la igualdad real entre mujeres y hombres en la Administración',
        'Es papel mojado',
        'Solo para directivos',
        'No existe'
      ],
      correctAnswer: 0,
      explanation: 'Instrumento para la igualdad efectiva en la función pública.'
    },
    
    // Pregunta 104
    {
      questionText: 'El protocolo contra el acoso sexual en la AGE:',
      options: [
        'Establece procedimientos de denuncia y actuación ante conductas de acoso sexual o por razón de sexo',
        'Protege a los acosadores',
        'No es obligatorio',
        'Solo se aplica en empresas'
      ],
      correctAnswer: 0,
      explanation: 'Herramienta obligatoria para prevenir y sancionar el acoso.'
    },
    
    // Pregunta 105
    {
      questionText: 'La Oficina de Asistencia a las Víctimas del Delito:',
      options: [
        'Presta apoyo asistencial, psicológico y jurídico a las víctimas',
        'Persigue delitos',
        'Juzga a los delincuentes',
        'Es una cárcel'
      ],
      correctAnswer: 0,
      explanation: 'Servicio público gratuito para atención integral a víctimas.'
    },
    
    // Pregunta 106
    {
      questionText: 'El Estatuto de la Víctima del Delito:',
      options: [
        'Reconoce derechos procesales y extraprocesales a las víctimas (información, protección, participación)',
        'Les prohíbe hablar',
        'Les obliga a perdonar',
        'Solo indemniza'
      ],
      correctAnswer: 0,
      explanation: 'Norma marco de derechos de las víctimas.'
    },
    
    // Pregunta 107
    {
      questionText: 'La justicia restaurativa:',
      options: [
        'Busca la reparación del daño y la mediación entre víctima e infractor',
        'Busca la venganza',
        'Es solo castigo',
        'Ignora a la víctima'
      ],
      correctAnswer: 0,
      explanation: 'Paradigma enfocado en reparar el daño causado.'
    },
    
    // Pregunta 108
    {
      questionText: 'El Habeas Corpus:',
      options: [
        'Procedimiento para la inmediata puesta a disposición judicial de quien se considere ilegalmente detenido',
        'Es un delito',
        'Es una enfermedad',
        'Es un cuerpo policial'
      ],
      correctAnswer: 0,
      explanation: 'Garantía constitucional contra la detención ilegal (art. 17.4 CE).'
    },
    
    // Pregunta 109
    {
      questionText: 'La inviolabilidad del domicilio:',
      options: [
        'Nadie puede entrar sin consentimiento del titular o resolución judicial, salvo flagrante delito',
        'La policía puede entrar siempre',
        'No existe',
        'Solo de noche'
      ],
      correctAnswer: 0,
      explanation: 'Derecho fundamental (art. 18.2 CE).'
    },
    
    // Pregunta 110
    {
      questionText: 'El secreto de las comunicaciones:',
      options: [
        'Solo puede levantarse por resolución judicial',
        'No incluye el WhatsApp',
        'El Director de la prisión puede levantarlo siempre',
        'No existe para presos'
      ],
      correctAnswer: 0,
      explanation: 'Derecho fundamental (art. 18.3 CE). En prisión requiere autorización judicial para intervenir (salvo terrorismo con comunicación posterior).'
    },
    
    // Pregunta 111
    {
      questionText: 'El Defensor del Pueblo puede:',
      options: [
        'Supervisar la actividad de la Administración e informar a las Cortes',
        'Juzgar casos',
        'Anular leyes',
        'Destituir al Presidente'
      ],
      correctAnswer: 0,
      explanation: 'Alto comisionado de las Cortes para la defensa de derechos.'
    },
    
    // Pregunta 112
    {
      questionText: 'El Mecanismo Nacional de Prevención de la Tortura (MNP) en España lo ejerce:',
      options: [
        'El Defensor del Pueblo',
        'El Ministerio del Interior',
        'La ONU',
        'La Guardia Civil'
      ],
      correctAnswer: 0,
      explanation: 'El Defensor del Pueblo actúa como MNP bajo el Protocolo de Estambul.'
    },
    
    // Pregunta 113
    {
      questionText: 'La responsabilidad penal de los menores (Ley 5/2000):',
      options: [
        'Se aplica a mayores de 14 años y menores de 18',
        'Se aplica a menores de 14',
        'Se aplica hasta los 21',
        'No existe'
      ],
      correctAnswer: 0,
      explanation: 'Rango de edad de la responsabilidad penal juvenil: 14 a 17 años.'
    },
    
    // Pregunta 114
    {
      questionText: 'El internamiento en centro de menores tiene finalidad:',
      options: [
        'Educativa y sancionadora',
        'Solo retributiva',
        'Laboral',
        'De ocio'
      ],
      correctAnswer: 0,
      explanation: 'Predomina el interés superior del menor y la finalidad educativa.'
    },
    
    // Pregunta 115
    {
      questionText: 'La violencia institucional:',
      options: [
        'Uso abusivo de poder por parte de funcionarios',
        'Violencia entre presos',
        'Peleas en el patio',
        'No existe'
      ],
      correctAnswer: 0,
      explanation: 'Violencia ejercida por el Estado o sus agentes.'
    },
    
    // Pregunta 116
    {
      questionText: 'El racismo y la xenofobia en prisión:',
      options: [
        'Deben combatirse activamente promoviendo la convivencia y respeto intercultural',
        'Son permitidos',
        'No importan',
        'Son obligatorios'
      ],
      correctAnswer: 0,
      explanation: 'Los delitos de odio y la discriminación son contrarios a los fines penitenciarios.'
    },
    
    // Pregunta 117
    {
      questionText: 'La mediación penitenciaria:',
      options: [
        'Herramienta para la resolución pacífica de conflictos entre internos',
        'Juicio rápido',
        'Pelea reglada',
        'Sanción'
      ],
      correctAnswer: 0,
      explanation: 'Método alternativo de resolución de conflictos convivenciales.'
    },
    
    // Pregunta 118
    {
      questionText: 'El voluntariado en prisiones:',
      options: [
        'Colabora en actividades de tratamiento y reinserción bajo supervisión',
        'Sustituye a los funcionarios',
        'Manda sobre los internos',
        'Cobra sueldo'
      ],
      correctAnswer: 0,
      explanation: 'Las ONGs y voluntarios son agentes complementarios de la acción penitenciaria.'
    },
    
    // Pregunta 119
    {
      questionText: 'La libertad religiosa en prisión incluye:',
      options: [
        'Derecho a practicar el propio culto, alimentación respetuosa (sin cerdo, etc.), y asistencia espiritual',
        'Obligación de ir a misa',
        'Prohibición de rezar',
        'Solo catolicismo'
      ],
      correctAnswer: 0,
      explanation: 'Garantía del art. 16 CE en el ámbito penitenciario.'
    },
    
    // Pregunta 120
    {
      questionText: 'Los permisos de salida son:',
      options: [
        'Un elemento clave del tratamiento para la preparación de la vida en libertad',
        'Un derecho automático',
        'Un regalo',
        'Peligrosos'
      ],
      correctAnswer: 0,
      explanation: 'Parte fundamental del programa de tratamiento.'
    },
    
    // Pregunta 121
    {
      questionText: 'La denegación de un permiso de salida debe ser:',
      options: [
        'Motivada',
        'Arbitraria',
        'Silenciosa',
        'Por sorteo'
      ],
      correctAnswer: 0,
      explanation: 'Todo acto limitativo de derechos debe ser motivado.'
    },
    
    // Pregunta 122
    {
      questionText: 'El recurso de reforma se interpone ante:',
      options: [
        'El mismo órgano judicial que dictó la resolución (Juez de Vigilancia)',
        'El tribunal superior',
        'El Director',
        'El Fiscal'
      ],
      correctAnswer: 0,
      explanation: 'Recurso no devolutivo ante el mismo órgano.'
    },
    
    // Pregunta 123
    {
      questionText: 'El recurso de apelación contra autos del JVP se interpone ante:',
      options: [
        'La Audiencia Provincial (o Audiencia Nacional según competencia)',
        'El Tribunal Supremo',
        'El Tribunal Constitucional',
        'El Gobierno'
      ],
      correctAnswer: 0,
      explanation: 'Recurso devolutivo ante el superior jerárquico.'
    },
    
    // Pregunta 124
    {
      questionText: 'La identificación de los funcionarios:',
      options: [
        'Deben portar su tarjeta de identidad profesional o número de identificación en el uniforme',
        'Es secreta siempre',
        'No es necesaria',
        'Solo el nombre de pila'
      ],
      correctAnswer: 0,
      explanation: 'Obligación de ir identificados (normalmente por número para seguridad).'
    },
    
    // Pregunta 125
    {
      questionText: 'El saludo reglamentario:',
      options: [
        'Signo de cortesía y disciplina entre funcionarios',
        'Ya no existe',
        'Es dar la mano',
        'Es un abrazo'
      ],
      correctAnswer: 0,
      explanation: 'Normas de cortesía y disciplina en cuerpos uniformados.'
    },
    
    // Pregunta 126
    {
      questionText: 'El uso de uniforme:',
      options: [
        'Es obligatorio para el personal de vigilancia durante el servicio',
        'Es opcional',
        'Es para que estén guapos',
        'Solo en desfiles'
      ],
      correctAnswer: 0,
      explanation: 'El personal de interior debe vestir el uniforme reglamentario.'
    },
    
    // Pregunta 127
    {
      questionText: 'La cadena de mando:',
      options: [
        'Estructura jerárquica que debe respetarse para la transmisión de órdenes e informes',
        'No importa',
        'Cada uno hace lo que quiere',
        'Es circular'
      ],
      correctAnswer: 0,
      explanation: 'Principio de jerarquía normativa y orgánica.'
    },
    
    // Pregunta 128
    {
      questionText: 'La obediencia debida:',
      options: [
        'Obligación de acatar órdenes superiores, salvo que sean manifiestamente ilegales',
        'Obediencia ciega siempre',
        'No existe',
        'Solo al Rey'
      ],
      correctAnswer: 0,
      explanation: 'Art. 91 EBEP: Obediencia a órdenes legales; exención si son manifiestamente ilegales.'
    },
    
    // Pregunta 129
    {
      questionText: 'El secreto profesional:',
      options: [
        'Deber de no divulgar información conocida por razón del cargo',
        'Contar cotilleos',
        'No hablar con nadie',
        'Es opcional'
      ],
      correctAnswer: 0,
      explanation: 'Deber fundamental de sigilo sobre asuntos del servicio.'
    },
    
    // Pregunta 130
    {
      questionText: 'La responsabilidad penal de los funcionarios:',
      options: [
        'Responden por delitos cometidos en el ejercicio de su cargo (prevaricación, malversación, torturas...)',
        'Tienen inmunidad total',
        'Solo multas',
        'No tienen responsabilidad'
      ],
      correctAnswer: 0,
      explanation: 'Sujeción al Código Penal como cualquier ciudadano, con tipos específicos agravados.'
    },
    
    // Pregunta 131
    {
      questionText: 'El registro de celdas:',
      options: [
        'Puede realizarse por motivos de seguridad, respetando la dignidad y pertenencias del interno',
        'Es ilegal',
        'Requiere orden judicial',
        'Solo con el preso delante siempre'
      ],
      correctAnswer: 0,
      explanation: 'Medida de seguridad regimental ordinaria.'
    },
    
    // Pregunta 132
    {
      questionText: 'La requisa personal (cacheo):',
      options: [
        'Registro superficial del cuerpo y ropa por motivos de seguridad',
        'Es un masaje',
        'Es tortura',
        'No se hace nunca'
      ],
      correctAnswer: 0,
      explanation: 'Medida de control ordinaria.'
    },
    
    // Pregunta 133
    {
      questionText: 'Las armas de fuego en el interior de los establecimientos:',
      options: [
        'Están prohibidas salvo casos excepcionales previstos legalmente',
        'Todos los funcionarios llevan pistola',
        'Están permitidas siempre',
        'Se venden en el economato'
      ],
      correctAnswer: 0,
      explanation: 'Prohibición general de armas en el interior (zona de custodia).'
    },
    
    // Pregunta 134
    {
      questionText: 'El perímetro exterior es vigilado por:',
      options: [
        'Las Fuerzas y Cuerpos de Seguridad (Guardia Civil/Policía Nacional)',
        'Funcionarios de prisiones',
        'Seguridad privada solo',
        'Drones'
      ],
      correctAnswer: 0,
      explanation: 'Competencia de FCSE.'
    },
    
    // Pregunta 135
    {
      questionText: 'El control de accesos:',
      options: [
        'Filtro de seguridad para personas y vehículos que entran y salen del recinto',
        'Puerta abierta siempre',
        'No hay control',
        'Solo para visitas'
      ],
      correctAnswer: 0,
      explanation: 'Punto crítico de la seguridad estática.'
    },
    
    // Pregunta 136
    {
      questionText: 'Los inhibidores de frecuencia:',
      options: [
        'Impiden el uso de teléfonos móviles no autorizados en el interior',
        'Dan dolor de cabeza',
        'Son para la radio',
        'No funcionan'
      ],
      correctAnswer: 0,
      explanation: 'Medida tecnológica de seguridad activa.'
    },
    
    // Pregunta 137
    {
      questionText: 'La video-vigilancia:',
      options: [
        'Uso de cámaras para el control y seguridad de zonas comunes',
        'Para grabar películas',
        'En las duchas siempre',
        'Está prohibida'
      ],
      correctAnswer: 0,
      explanation: 'Herramienta de apoyo a la seguridad, con limitaciones de privacidad (no en baños/celdas salvo suicidio/observación).'
    },
    
    // Pregunta 138
    {
      questionText: 'La clasificación de documentos:',
      options: [
        'Secreto, Reservado, Confidencial...',
        'Público y privado',
        'Importante y no importante',
        'Bueno y malo'
      ],
      correctAnswer: 0,
      explanation: 'Ley de Secretos Oficiales y normativa de seguridad de la información.'
    },
    
    // Pregunta 139
    {
      questionText: 'La Ley de Contratos del Sector Público de 2017 transpone:',
      options: [
        'Directivas europeas sobre contratación',
        'Leyes americanas',
        'Normas ISO',
        'El Código Civil'
      ],
      correctAnswer: 0,
      explanation: 'Transposición de Directivas 2014/23 y 2014/24/UE.'
    },
    
    // Pregunta 140
    {
      questionText: 'El expediente de contratación:',
      options: [
        'Conjunto de documentos que conforman la preparación y adjudicación del contrato',
        'La factura',
        'El recibo',
        'El contrato firmado solo'
      ],
      correctAnswer: 0,
      explanation: 'Todo el proceso administrativo desde la necesidad hasta la formalización.'
    },
    
    // Pregunta 141
    {
      questionText: 'La mesa de contratación:',
      options: [
        'Órgano de asistencia técnica especializada que valora las ofertas',
        'Mesa de despacho',
        'Donde se firma',
        'El tribunal de oposiciones'
      ],
      correctAnswer: 0,
      explanation: 'Órgano que evalúa ofertas y propone adjudicación.'
    },
    
    // Pregunta 142
    {
      questionText: 'La formalización del contrato:',
      options: [
        'Perfecciona el contrato administrativo (salvo menores)',
        'Es opcional',
        'Se hace verbalmente',
        'No es necesaria'
      ],
      correctAnswer: 0,
      explanation: 'El contrato se perfecciona con su formalización.'
    },
    
    // Pregunta 143
    {
      questionText: 'La ejecución del contrato:',
      options: [
        'Realización de la prestación pactada a riesgo y ventura del contratista',
        'Hacer lo que se quiera',
        'Cobrar sin trabajar',
        'Subcontratar todo sin límite'
      ],
      correctAnswer: 0,
      explanation: 'Principio de riesgo y ventura (salvo fuerza mayor).'
    },
    
    // Pregunta 144
    {
      questionText: 'La modificación del contrato:',
      options: [
        'Solo por razones de interés público y en casos tasados (ius variandi limitado)',
        'Cuando quiera el contratista',
        'Para pagar más',
        'Nunca se puede'
      ],
      correctAnswer: 0,
      explanation: 'Restricciones a los modificados para evitar fraudes.'
    },
    
    // Pregunta 145
    {
      questionText: 'La resolución del contrato:',
      options: [
        'Finalización anticipada por incumplimiento, mutuo acuerdo, etc.',
        'Cumplimiento total',
        'Prórroga',
        'Inicio'
      ],
      correctAnswer: 0,
      explanation: 'Extinción anormal del contrato.'
    },
    
    // Pregunta 146
    {
      questionText: 'La nulidad del contrato:',
      options: [
        'Por vicios graves en su preparación o adjudicación',
        'Por ser barato',
        'Por ser caro',
        'Por perderlo'
      ],
      correctAnswer: 0,
      explanation: 'Causas de invalidez.'
    },
    
    // Pregunta 147
    {
      questionText: 'El recurso administrativo ordinario es:',
      options: [
        'Alzada y Reposición',
        'Casación',
        'Amparo',
        'Queja'
      ],
      correctAnswer: 0,
      explanation: 'Recursos administrativos comunes.'
    },
    
    // Pregunta 148
    {
      questionText: 'El silencio administrativo positivo:',
      options: [
        'Estimación de la solicitud por falta de respuesta en plazo (regla general salvo norma con rango de Ley)',
        'Desestimación',
        'No existe',
        'Es para multas'
      ],
      correctAnswer: 0,
      explanation: 'Art. 24 Ley 39/2015.'
    },
    
    // Pregunta 149
    {
      questionText: 'La ejecutoriedad de los actos administrativos:',
      options: [
        'La Administración puede hacer cumplir sus actos por sus propios medios (autotutela ejecutiva)',
        'Necesita ir al Juez siempre',
        'No tienen fuerza',
        'Es opcional'
      ],
      correctAnswer: 0,
      explanation: 'Privilegio de la Administración.'
    },
    
    // Pregunta 150
    {
      questionText: 'La vía de hecho:',
      options: [
        'Actuación material de la Administración sin procedimiento ni cobertura legal',
        'Hacer las cosas bien',
        'Procedimiento de urgencia',
        'Una carretera'
      ],
      correctAnswer: 0,
      explanation: 'Actuación ilegal material susceptible de recurso contencioso directo.'
    }
  ]
};
