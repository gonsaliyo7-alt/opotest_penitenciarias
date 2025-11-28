
import type { Test } from '../../types';

export const TEST_19: Test = {
  id: 'test-19',
  title: 'Test 19: Dº Penitenciario VII (41-45)',
  questions: [
    // Tema 41: Disciplinario
    { 
      questionText: '¿Quién compone la Comisión Disciplinaria?', 
      options: ['Solo el Director', 'Director, Subdirector Seg., Subdirector Trat., Jurista, Jefe Servicios, 1 Funcionario y 1 Asistente Social', 'El Juez de Vigilancia', 'Los internos'], 
      correctAnswer: 1,
      explanation: 'El artículo 276 del Reglamento Penitenciario establece la composición de la Comisión Disciplinaria: Director (presidente), Subdirectores de Régimen y Tratamiento, un Jurista, el Jefe de Servicios, un funcionario de vigilancia y un trabajador social (asistente social).'
    },
    { 
      questionText: 'Las faltas muy graves prescriben a los:', 
      options: ['3 años', '2 años', '1 año', '6 meses'], 
      correctAnswer: 0,
      explanation: 'El artículo 112 del Reglamento Penitenciario (en relación con la LRJSP) establece que las faltas muy graves prescribirán a los tres años.'
    },
    
    // Tema 42: Recompensas
    { 
      questionText: 'Las notas meritorias son:', 
      options: ['Una sanción', 'Una recompensa que se anota en el expediente', 'Un permiso', 'Dinero'], 
      correctAnswer: 1,
      explanation: 'El artículo 263 del Reglamento Penitenciario incluye las notas meritorias como una de las recompensas que pueden concederse a los internos, anotándose en su expediente.'
    },
    { 
      questionText: 'Los premios en metálico concedidos como recompensa:', 
      options: ['Se entregan en mano', 'Se abonan al peculio del interno', 'Son ilegales', 'Se envían a la familia'], 
      correctAnswer: 1,
      explanation: 'Los premios en metálico se abonan en la cuenta de peculio del interno, ya que no pueden tener dinero de curso legal en su poder.'
    },
    
    // Tema 43: Sanidad
    { 
      questionText: 'La historia clínica de los internos es:', 
      options: ['Pública', 'Confidencial', 'Accesible a todos los funcionarios', 'Propiedad del Juez'], 
      correctAnswer: 1,
      explanation: 'El artículo 210 del Reglamento Penitenciario establece el carácter confidencial de la historia clínica, a la que solo tendrán acceso el personal sanitario y las autoridades competentes.'
    },
    { 
      questionText: 'Si un interno necesita hospitalización y no puede ser atendido en la enfermería:', 
      options: ['Se le da el alta', 'Se le traslada a un hospital extra-penitenciario (preferentemente con unidad de custodia)', 'Se espera a que mejore', 'Se llama a un curandero'], 
      correctAnswer: 1,
      explanation: 'El artículo 218 del Reglamento Penitenciario prevé el traslado a hospitales de la red sanitaria pública cuando la asistencia requerida no pueda ser facilitada en el establecimiento.'
    },
    
    // Tema 44: Oficina
    { 
      questionText: 'Al ingresar un interno se le toman las impresiones dactilares para:', 
      options: ['Ver si tiene las manos limpias', 'Su plena identificación', 'Estudios estadísticos', 'Hacerle el DNI'], 
      correctAnswer: 1,
      explanation: 'El artículo 15 del Reglamento Penitenciario establece que al ingreso se procederá a la identificación del interno mediante la toma de impresiones dactilares (reseña).'
    },
    { 
      questionText: 'Las conducciones de traslado de presos entre centros las realiza habitualmente:', 
      options: ['Los funcionarios de prisiones', 'La Guardia Civil', 'El Ejército', 'Empresas privadas'], 
      correctAnswer: 1,
      explanation: 'El artículo 18 de la LOGP establece que las conducciones de detenidos, presos y penados serán competencia de las Fuerzas y Cuerpos de Seguridad del Estado (habitualmente Guardia Civil).'
    },
    
    // Tema 45: Peculio
    { 
      questionText: 'Las tarjetas monedero utilizadas en prisión sirven para:', 
      options: ['Llamar por teléfono y comprar en economato', 'Abrir puertas', 'Identificarse', 'Salir a la calle'], 
      correctAnswer: 0,
      explanation: 'Las tarjetas del sistema de peculio permiten a los internos realizar pagos en el economato y cafetería, así como utilizar las cabinas telefónicas.'
    },
    { 
      questionText: '¿Existe un límite máximo de saldo de libre disposición semanal en las tarjetas?', 
      options: ['No', 'Sí, establecido por el Consejo de Dirección', 'Es de 1000 euros', 'Depende del banco'], 
      correctAnswer: 1,
      explanation: 'El artículo 317 del Reglamento Penitenciario establece que el Consejo de Dirección fijará los límites de dinero de libre disposición que pueden tener los internos.'
    },
  ]
};
