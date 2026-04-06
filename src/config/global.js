export default {
  global: {
    Name:
      'Herramientas y materias primas para la producción de productos de repostería',
    Description:
      'Este componente formativo tiene como objetivo fundamental que el aprendiz identifique los elementos para el buen uso de maquinaria, herramientas y alistar las materias primas e insumo para la elaboración de productos de repostería según su respectivo procedimiento.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Generalidades y normativa en la elaboración de repostería',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Importancia de las Buenas Prácticas de Manufactura (BPM) en el taller de repostería',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Marco normativo: higiene, seguridad e inocuidad alimentaria',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'El perfil del repostero y la seguridad en el área de trabajo',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Maquinaria y herramientas en repostería',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Clasificación técnica de la maquinaria: equipos de cocción, batido y refrigeración',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Herramientas de mano y utensilios especializados: moldes, boquillas y básculas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Manuales de procedimiento: operación, ensamble y seguridad técnica de los equipos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Protocolos de mantenimiento preventivo y desinfección de herramientas',
            hash: 't_2_4',
          },
        ],
      },

      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Materias primas e insumos: identificación y selección',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Caracterización de ingredientes base: harinas, azúcares, grasas y leudantes',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Clasificación de insumos complementarios: lácteos, chocolates, frutas y aditivos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Criterios de calidad y fichas técnicas de las materias primas',
            hash: 't_3_3',
          },
        ],
      },

      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Procesos de alistamiento y diagramas de flujo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'El concepto de <em>mise en place</em> aplicado a la producción de repostería',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Interpretación de diagramas de proceso para el alistamiento de insumos',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Abatidor de temperatura',
      significado:
        'Equipo de refrigeración que enfría rápidamente alimentos calientes, reduciendo el riesgo de proliferación bacteriana.',
    },
    {
      termino: 'Bactericida',
      significado:
        'Sustancia o agente físico que tiene la propiedad de destruir bacterias.',
    },
    {
      termino: 'Baño maría',
      significado:
        'Método de calentamiento que consiste en introducir un recipiente con la preparación dentro de otro con agua caliente, para una cocción suave y uniforme.',
    },
    {
      termino: 'Boquilla (dúctil)',
      significado:
        'Pieza cónica de metal o plástico que se acopla a la manga pastelera para dar forma a la crema, merengue o masa al ser dispensada.',
    },
    {
      termino: 'BPM (Buenas Prácticas de Manufactura)',
      significado:
        'Conjunto de principios y procedimientos aplicados en el procesamiento de alimentos para garantizar su inocuidad y salubridad.',
    },
    {
      termino: 'Contaminación cruzada',
      significado:
        'Transferencia de microorganismos patógenos (bacterias, virus) de un alimento contaminado (generalmente crudo) a otro que no lo está.',
    },
    {
      termino: 'Cremado',
      significado:
        'Técnica de batir mantequilla (o grasa) con azúcar hasta obtener una mezcla pálida y esponjosa que incorpora aire.',
    },
    {
      termino: 'Emulsión',
      significado:
        'Mezcla homogénea de dos líquidos inmiscibles (que no se mezclan), como el aceite y el agua, estabilizada por un emulsionante (ej. la lecitina de la yema de huevo).',
    },
    {
      termino: 'Estandarización',
      significado:
        'Proceso de definir y aplicar procedimientos y especificaciones para asegurar que un producto o servicio mantenga una calidad uniforme.',
    },
    {
      termino: 'Ficha técnica (FIT)',
      significado:
        'Documento que especifica las características, composición, condiciones de manejo y vida útil de una materia prima o producto terminado.',
    },
    {
      termino: 'Grenetina (gelatina sin sabor)',
      significado:
        'Proteína obtenida del colágeno, utilizada como espesante y gelificante en postres y <em>mousses</em>.',
    },
    {
      termino: 'Higroscópico',
      significado:
        'Propiedad de una sustancia de absorber la humedad del ambiente (ej. el azúcar, la sal).',
    },
    {
      termino: 'Inocuidad',
      significado:
        'La condición de los alimentos que garantiza que no causarán daño al consumidor cuando sean preparados o ingeridos.',
    },
    {
      termino: 'Leudante',
      significado:
        'Sustancia o microorganismo que produce gases en una masa, haciéndola aumentar de volumen.',
    },
    {
      termino: 'Manteca de cacao',
      significado:
        'Grasa natural extraída del grano de cacao, es la base de la cobertura de chocolate de calidad.',
    },
    {
      termino: '<em>Mise en place</em>',
      significado:
        'Término francés que significa poner en su lugar. Se refiere a la preparación y organización de todos los ingredientes y herramientas antes de comenzar a cocinar.',
    },
    {
      termino: 'PEPS (primero en entrar, primero en salir)',
      significado:
        'Método de rotación de inventarios que utiliza primero los productos que ingresaron primero (con fecha de vencimiento más cercana).',
    },
    {
      termino: 'POES (procedimientos operativos estandarizados de saneamiento)',
      significado:
        'Protocolos escritos que describen cómo llevar a cabo las tareas de limpieza y desinfección.',
    },
    {
      termino: 'Punto de humeo',
      significado:
        'Temperatura a la cual una grasa o aceite comienza a descomponerse y a desprender humo visible y sustancias tóxicas.',
    },
    {
      termino: 'Reacción de Maillard',
      significado:
        'Reacción química entre aminoácidos y azúcares reductores que se produce con el calor, responsable del color dorado y los sabores tostados característicos en panes y masas horneadas.',
    },
    {
      termino: 'Tamizar',
      significado:
        'Acción de pasar ingredientes secos (harina, azúcar, <em>cocoa</em>) por un tamiz o colador para airearlos, mezclarlos y eliminar grumos.',
    },
    {
      termino: 'Zona de peligro (temperatura)',
      significado:
        'Rango de temperatura (entre 5 °C y 60 °C) en el que las bacterias patógenas pueden crecer y multiplicarse rápidamente en los alimentos.',
    },
  ],
  referencias: [
    {
      referencia:
        'ASOCIACIÓN ESPAÑOLA DE PANADERÍA Y PASTELERÍA. (2021). <em>Manual de Buenas Prácticas.</em>',
      link: 'https://www.asemac.es/publicaciones/guias-tecnicas',
    },
    {
      referencia: 'CODEX ALIMENTARIUS. (2020). <em>CAC/RCP 1-1969.</em>',
      link:
        'http://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/es/',
    },
    {
      referencia:
        'COLOMBIA. CONGRESO DE LA REPÚBLICA. (1979). <em>Ley 9 de 1979.</em>',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=1177',
    },
    {
      referencia:
        'COLOMBIA. MINISTERIO DE SALUD Y PROTECCIÓN SOCIAL. (2013). <em>Resolución 2674 de 2013.</em>',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-2674-de-2013.pdf',
    },
    {
      referencia:
        'COLOMBIA. MINISTERIO DE SALUD Y PROTECCIÓN SOCIAL. (2020). <em>Resolución 2019050025 de 2020.</em>',
      link: 'https://www.invima.gov.co/resoluciones',
    },
    {
      referencia:
        'FOOD AND DRUG ADMINISTRATION (FDA). (2022). <em>Food Code.</em>',
      link: 'https://www.fda.gov/food/fda-food-code/food-code-2022',
    },
    {
      referencia:
        'GISSELEN, W. (2010). <em>Gastronomía Molecular: La Ciencia en la Cocina.</em> Editorial Acribia.',
      link:
        'https://www.editorialacribia.com/libro/gastronomia-molecular_116018',
    },
    {
      referencia:
        'HERRERA, J. (2015). <em>Manual de Gestión de Calidad para Panaderías y Pastelerías.</em> Ediciones Díaz de Santos.',
    },
    {
      referencia:
        'INSTITUTO COLOMBIANO DE NORMAS TÉCNICAS Y CERTIFICACIÓN (ICONTEC). (2005). <em>NTC-ISO 22000:2005.</em>',
      link:
        'https://tienda.icontec.org/ntc-sistemas-de-gestion-de-inocuidad-de-los-alimentos-requisitos-para-cualquier-organizacion-en-la-cadena-alimentaria-ntc-iso-22000-2005.html',
    },
    {
      referencia:
        'INSTITUTO COLOMBIANO DE NORMAS TÉCNICAS Y CERTIFICACIÓN (ICONTEC). (2009). <em>NTC 5842:2009.</em>',
      link:
        'https://tienda.icontec.org/ntc-buenas-practicas-de-higiene-para-el-control-de-listeria-monocytogenes-en-alimentos-ntc5842-2009.html',
    },
    {
      referencia:
        'INSTITUTO NACIONAL DE VIGILANCIA DE MEDICAMENTOS Y ALIMENTOS (INVIMA). (2023). <em>Lineamientos BPM.</em>',
      link:
        'https://www.invima.gov.co/biblioteca/lineamientos-certificados-bpm-cvl-registro-sanitario',
    },
    {
      referencia:
        'INTERNATIONAL ORGANIZATION FOR STANDARDIZATION (ISO). (2018). <em>ISO 22000:2018.</em>',
      link: 'https://www.iso.org/standard/65464.html',
    },
    {
      referencia:
        'MCGEE, H. (2007). <em>La Cocina y los Alimentos: Enciclopedia de la Ciencia y la Cultura de la Comida.</em> Editorial Debate.',
    },
    {
      referencia:
        'MINISTERIO DE SALUD Y PROTECCIÓN SOCIAL DE COLOMBIA. (2023). <em>Sistema de Consulta de Normas.</em>',
      link:
        'https://www.minsalud.gov.co/salud/Paginas/inocuidad-alimentos.aspx',
    },
    {
      referencia:
        'MONTAÑÉS, J. (2012). <em>Pastelería: Arte y Técnica. Volumen 1: Materias Primas y Masas.</em> Editorial Montagud.',
      link: 'https://www.montagud.com/libros-de-pasteleria/',
    },
    {
      referencia:
        'ORGANIZACIÓN DE LAS NACIONES UNIDAS PARA LA ALIMENTACIÓN Y LA AGRICULTURA (FAO). (2016). <em>Sistemas de Calidad e Inocuidad de los Alimentos.</em>',
      link: 'https://www.fao.org/3/y5307s/y5307s00.htm',
    },
    {
      referencia:
        'ORGANIZACIÓN MUNDIAL DE LA SALUD (OMS). (2020). <em>Cinco claves para la inocuidad de los alimentos.</em>',
      link: 'https://www.who.int/es/news-room/fact-sheets/detail/food-safety',
    },
    {
      referencia:
        'ORGANIZACIÓN PANAMERICANA DE LA SALUD (OPS). (2019). <em>Inocuidad de Alimentos.</em>',
      link: 'https://www.paho.org/es/temas/inocuidad-alimentos',
    },
    {
      referencia:
        'PÉREZ, A., & MARTÍNEZ, J. (2020). <em>Revista Española de Ciencia y Tecnología de Alimentos, 28(3), 112-125.</em>',
      link:
        'https://www.elsevier.es/es-revista-revista-espanola-nutricion-humana-dietetica-314',
    },
    {
      referencia:
        'RAMÍREZ, L., & GÓMEZ, M. (2019). <em>Revista Colombiana de Ciencias Agroindustriales, 5(2), 45-58.</em>',
      link: 'https://dialnet.unirioja.es/ejemplar/619353',
    },
    {
      referencia:
        'SERVICIO NACIONAL DE APRENDIZAJE (SENA). (2015). <em>Buenas Prácticas de Manufactura (BPM) para la industria gastronómica.</em>',
    },
    {
      referencia:
        'SERVICIO NACIONAL DE APRENDIZAJE (SENA). (2018). <em>Manipulación de Alimentos: Cartilla Didáctica.</em>',
    },
    {
      referencia:
        'Telule Barahona, H. A., Aguilar Amaya, L. A., Angulo Bonilla, J. W., & Álvarez Santana, J. A. (2023). <em>Manual de buenas prácticas de manufactura. Planta procesadora PRODISMAX.</em>',
    },
    {
      referencia:
        'TORTELLI, E. (2016). <em>La Biblia de la Repostería: Técnicas Clásicas y Contemporáneas.</em> Ediciones Akal.',
    },
    {
      referencia:
        'VILLEGAS, A. (2017). <em>Tecnología de Alimentos Aplicada a la Panadería y Repostería.</em> Universidad de Antioquia.',
      link: 'https://bibliotecadigital.udea.edu.co/handle/10495/12456',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de la línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Yina Paola Castro Zarate',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jair Enrique Coll Gallardo ',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldan',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Carlos Andrés Diaz Pinto',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
