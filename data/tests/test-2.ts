
import type { Test } from '../../types';

export const TEST_2: Test = {
  id: 'test-2',
  title: 'Test 2: Org. Territorial y Dº Admin (Temas 6-10)',
  questions: [
    // Tema 6: Organización territorial
    { 
      questionText: 'Según el artículo 137 de la Constitución, el Estado se organiza territorialmente en:', 
      options: ['Municipios, Provincias y Comunidades Autónomas', 'Regiones y Nacionalidades', 'Distritos y Comarcas', 'Estados federados'], 
      correctAnswer: 0,
      explanation: 'El artículo 137 de la CE establece que "El Estado se organiza territorialmente en municipios, en provincias y en las Comunidades Autónomas que se constituyan. Todas estas entidades gozan de autonomía para la gestión de sus respectivos intereses".'
    },
    { 
      questionText: 'La provincia es una entidad local con personalidad jurídica propia, determinada por la agrupación de:', 
      options: ['Comarcas', 'Municipios', 'Barrios', 'Distritos'], 
      correctAnswer: 1,
      explanation: 'El artículo 141.1 de la CE define la provincia como "una entidad local con personalidad jurídica propia, determinada por la agrupación de municipios y división territorial para el cumplimiento de las actividades del Estado".'
    },
    
    // Tema 7: La Unión Europea
    { 
      questionText: '¿Qué institución de la UE ejerce la función legislativa junto con el Parlamento Europeo?', 
      options: ['La Comisión Europea', 'El Consejo de la Unión Europea', 'El Tribunal de Cuentas', 'El Banco Central Europeo'], 
      correctAnswer: 1,
      explanation: 'El Consejo de la Unión Europea (o Consejo de Ministros) ejerce, junto con el Parlamento Europeo, la función legislativa y la función presupuestaria.'
    },
    { 
      questionText: 'En el Derecho Comunitario derivado, la Directiva se diferencia del Reglamento en que:', 
      options: ['Es de alcance general', 'Obliga al Estado miembro en cuanto al resultado, dejando libertad de medios', 'Es directamente aplicable', 'No es vinculante'], 
      correctAnswer: 1,
      explanation: 'Según el artículo 288 del TFUE, la directiva obligará al Estado miembro destinatario en cuanto al resultado que deba conseguirse, dejando, sin embargo, a las autoridades nacionales la elección de la forma y de los medios.'
    },
    
    // Tema 8: Fuentes del Derecho Administrativo
    { 
      questionText: 'En la jerarquía normativa, ¿qué rango tienen los Reglamentos respecto a la Ley?', 
      options: ['Superior', 'Igual', 'Inferior', 'Independiente'], 
      correctAnswer: 2,
      explanation: 'Los reglamentos son normas de rango inferior a la ley. No pueden contradecir lo dispuesto en las leyes ni regular materias reservadas a la ley (principio de jerarquía normativa y reserva de ley).'
    },
    { 
      questionText: 'La potestad reglamentaria originaria corresponde, según la Constitución, a:', 
      options: ['Los Ministros', 'El Gobierno', 'Las Cortes Generales', 'Los Directores Generales'], 
      correctAnswer: 1,
      explanation: 'El artículo 97 de la CE atribuye al Gobierno la función ejecutiva y la potestad reglamentaria de acuerdo con la Constitución y las leyes.'
    },
    
    // Tema 9: El acto administrativo
    { 
      questionText: 'Un elemento esencial del acto administrativo es la "motivación". ¿Es obligatoria para todos los actos?', 
      options: ['Sí, siempre', 'No, solo para los actos que limiten derechos subjetivos o intereses legítimos, entre otros', 'Nunca es obligatoria', 'Solo para los actos verbales'], 
      correctAnswer: 1,
      explanation: 'El artículo 35 de la Ley 39/2015 establece que deben motivarse, con sucinta referencia de hechos y fundamentos de derecho, los actos que limiten derechos subjetivos o intereses legítimos, entre otros supuestos tasados.'
    },
    { 
      questionText: '¿Cuándo se produce la eficacia del acto administrativo como regla general?', 
      options: ['Desde que se dicta, salvo que se disponga otra cosa', 'Desde que se notifica', 'A los 20 días de su publicación', 'Cuando es firme'], 
      correctAnswer: 0,
      explanation: 'El artículo 39.1 de la Ley 39/2015 establece que "Los actos de las Administraciones Públicas sujetos al Derecho Administrativo se presumirán válidos y producirán efectos desde la fecha en que se dicten, salvo que en ellos se disponga otra cosa".'
    },
    
    // Tema 10: Procedimiento administrativo común
    { 
      questionText: 'La fase de instrucción del procedimiento administrativo tiene por objeto:', 
      options: ['Dictar la resolución final', 'La determinación, conocimiento y comprobación de los datos para resolver', 'Notificar al interesado', 'Archivar el expediente'], 
      correctAnswer: 1,
      explanation: 'El artículo 75.1 de la Ley 39/2015 dispone que los actos de instrucción necesarios para la determinación, conocimiento y comprobación de los datos en virtud de los cuales deba pronunciarse la resolución, se realizarán de oficio y a través de medios electrónicos.'
    },
    { 
      questionText: 'Como regla general, el plazo máximo para resolver y notificar en un procedimiento administrativo (si la norma no fija otro) es de:', 
      options: ['6 meses', '3 meses', '1 mes', '1 año'], 
      correctAnswer: 1,
      explanation: 'El artículo 21.3 de la Ley 39/2015 establece que cuando las normas reguladoras de los procedimientos no fijen el plazo máximo, este será de tres meses.'
    }
  ]
};
