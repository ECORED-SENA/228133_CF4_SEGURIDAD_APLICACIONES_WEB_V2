export default {
  global: {
    componenteFormativo:
      'Pruebas de seguridad orientadas a aplicaciones web con OWASP',
    descripcionCurso:
      'Este componente formativo pretende enseñar a cómo realizar pruebas de seguridad a las aplicaciones web utilizando OWASP, los niveles de seguridad, tipos de pruebas, métodos, metodologías y confidencialidad; además escanear las vulnerabilidades y el tipo de ataques orientados a estas aplicaciones y, por último, documentar los hallazgos de las pruebas realizadas. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        titulo: 'Tipología de ataques web',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Clasificación de ataques ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Prueba de seguridad orientada a aplicaciones web ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Documentación de hallazgos  ',
        desarrolloContenidos: true,
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
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
      tema: '1. Tipología de ataques web.',
      referencia:
        'Belcic, I. (2020). <em>¿Qué es la inyección de SQL y cómo funciona?</em>Avast.',
      tipo: 'Página web ',
      link: 'https://www.avast.com/es-es/c-sql-injection  ',
    },
    {
      tema: '1. Tipología de ataques web.',
      referencia:
        'Quanti Media Group [QuantiSolutions]. (2019). <em> Las 10 Vulnerabilidades más peligrosas usadas por aplicaciones web (Owasp 10) - 4K.</em> [Video]. YouTube.',
      tipo: 'Video  ',
      link: 'https://www.youtube.com/embed/kNo9fZC1Isw  ',
    },
    {
      tema: '1. Tipología de ataques web.',
      referencia:
        'Roelcode. (2021). <em>Cómo Descargar e Instalar Java JDK 16 en Windows 10 - 2021.</em> [Video]. YouTube.',
      tipo: 'Video  ',
      link: 'https://youtu.be/hCBEavs08as ',
    },
    {
      tema: '1. Tipología de ataques web.',
      referencia:
        'WeLiveSecurity. (2015). <em>¿En qué consiste la vulnerabilidad Cross Site Request Forgery (CSRF)?</em> We Live Security.',
      tipo: 'Pagina web ',
      link:
        'https://www.welivesecurity.com/la-es/2015/04/21/vulnerabilidad-cross-site-request-forgery-csrf/ ',
    },
    {
      tema: '1. Tipología de ataques web.',
      referencia:
        'Kumar, C. (2015). <em> Cookie segura con HttpOnly y bandera segura en Apache.</em> Geekflare.',
      tipo: 'Pagina web',
      link: 'https://geekflare.com/es/httponly-secure-cookie-apache/  ',
    },
    {
      tema: '2. Clasificación de ataques.',
      referencia:
        'GioCode [giova50000]. (2020).<em> Los tipos de malware | GioCode </em>[Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/embed/A6FAqk2QDjM ',
    },
    {
      tema: '3. Prueba de seguridad orientada a aplicaciones web.',
      referencia:
        'De Luz, S. (2021). <em>Owasp ZAP, audita la seguridad de webs y evita vulnerabilidades.</em> RedesZone.',
      tipo: 'Pagina web',
      link:
        'https://www.redeszone.net/tutoriales/seguridad/owasp-zap-auditar-seguridad-web/  ',
    },
  ],
  glosario: [
    {
      termino: 'Amenaza ',
      significado:
        'cualquier evento que puede afectar los activos de información y se relaciona, principalmente, con recursos humanos, eventos naturales o fallas técnicas. ',
    },
    {
      termino: 'Aplicación ',
      significado:
        'programa informático diseñado como una herramienta para realizar operaciones o funciones específicas. Generalmente, son diseñadas para facilitar ciertas tareas complejas y hacer más sencilla la experiencia informática de las personas. ',
    },
    {
      termino: 'Base de datos ',
      significado:
        'recopilación organizada de información o datos estructurados, que normalmente se almacena de forma electrónica en un sistema informático. ',
    },
    {
      termino: '<em>Browser</em> ',
      significado:
        'es el término inglés que se utiliza para identificar a un navegador web o navegador de internet, consiste en un <em> software</em>, programa o incluso aplicación, que ofrece al usuario el acceso a la red ',
    },
    {
      termino: 'Delegar ',
      significado:
        'dar (a una persona u organización) un poder, una función o una responsabilidad a alguien para que los ejerza en su lugar o para obrar en representación suya.',
    },
    {
      termino: 'Implementación ',
      significado:
        'poner en funcionamiento o aplicar métodos, medidas, etc., para realizar algo. ',
    },
    {
      termino: 'Interfaz ',
      significado:
        'en informática, es la conexión física y funcional que se establece entre dos aparatos, dispositivos o sistemas que funcionan independientemente uno del otro, en este sentido, la comunicación entre un ser humano y una computadora se realiza por medio de una interfaz. ',
    },
    {
      termino: 'OWASP ',
      significado: '<em>Open web Application Security.</em> ',
    },
    {
      termino: 'Riesgo ',
      significado:
        'posibilidad de que una amenaza se produzca, dando lugar a un ataque sobre un recurso o servicio tecnológico; esto no es otra cosa que la probabilidad de que ocurra el ataque por parte de la amenaza. ',
    },
    {
      termino: 'Servidor ',
      significado:
        'conjunto de computadoras capaz de atender las peticiones de un cliente y devolverle una respuesta en concordancia. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Calder, A. (2018). <em>NIST Cybersecurity Framework: Una guía de bolsillo.</em> IT Governance Publishing Ltd. ',
      link: '',
    },
    {
      referencia:
        'Cano, J. (2011). Ciberseguridad y ciberdefensa: dos tendencias emergentes en un contexto global. <em>Sistemas (Asociación Colombiana de Ingenieros de Sistemas)</em>, 119, 4-7. ',
      link: '',
    },
    {
      referencia:
        'Dongee. (2018). <em>Las 7 vulnerabilidades más comunes de sitios web que no puedes pasar por alto.</em> Dongee.',
      link:
        'https://blog.dongee.com/las-7-vulnerabilidades-m%C3%A1s-comunes-de-sitios-web-que-no-puedes-pasar-por-alto-59f29c1c3aea ',
    },
    {
      referencia:
        'Firma-e. (2021). <em>¿Qué es un SGSI – Sistema de Gestión de Seguridad de la Información?</em> Firma-e.',
      link:
        'https://www.firma-e.com/blog/que-es-un-sgsi-sistema-de-gestion-de-seguridad-de-la-informacion ',
    },
    {
      referencia:
        'Gómez, M., J. (2017). <em>Gestión de la ciberseguridad según el ISO/IEC 27032:2012.</em>',
      link:
        'https://www.linkedin.com/pulse/gesti%C3%B3n-de-la-ciberseguridad-seg%C3%BAn-el-isoiec-gianncarlo-g%C3%B3mez-morales ',
    },
    {
      referencia:
        'ISO/IEC. (2020). <em>Tecnologías de la información. Técnicas de seguridad.</em> Directrices para ciberseguridad.',
      link:
        'https://tienda.icontec.org/gp-tecnologias-de-la-informacion-tecnicas-de-seguridad-directrices-para-ciberseguridad-gtc-iso-iec27032-2020.html ',
    },
    {
      referencia:
        'Portal de la Administración Electrónica - PAE (s. f.). <em>Magerit v.3: Metodología de análisis y gestión de riesgos de los sistemas de información.</em>',
      link:
        'https://administracionelectronica.gob.es/pae_Home/pae_Documentacion/pae_Metodolog/pae_Magerit.html ',
    },
    {
      referencia:
        'Presupuesto Online. (2021). ISO 27001 - <em>Certificado ISO 27001 punto por punto.</em>',
      link: 'https://normaiso27001.es ',
    },
    {
      referencia:
        'Seguridad 7”A”. (s. f.). <em>Metodología NIST SP 800-30. </em> National Institute of Standards and Technology.',
      link: 'http://seguridades7a.blogspot.com/p/nist-sp-800-30.html',
    },
    {
      referencia:
        'Soriano, M. (2014). <em>Seguridad en redes y seguridad de la información.</em> Improvet. ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'David Eduardo Lozada Cerón ',
          cargo: 'Experto Temático  ',
          centro:
            'Regional Cauca - Centro de Tele informática y Producción Industrial  ',
        },
        {
          nombre: 'Paula Andrea Taborda Ortiz ',
          cargo: 'Diseñadora Instruccional ',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y Los Servicios CIES ',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia ',
          cargo: 'Asesor Metodológico ',
          centro: 'Regional Distrito Capital – Centro de Diseño y Metrología ',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes ',
          cargo: 'Responsable Equipo de Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'José Gabriel Ortiz Abella ',
          cargo: 'Corrector de estilo ',
          centro:
            'Regional Distrito Capital – Centro de Diseño y Metrología.  ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Fabian Andres Zarate',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Camilo Andres Bolaño Rey',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada ',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Camilo Andres Bolaño Rey ',
          cargo: 'Actividad Didáctica',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
