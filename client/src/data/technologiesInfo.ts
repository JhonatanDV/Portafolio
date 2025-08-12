export interface TechInfo {
  name: string;
  description: string;
  type: 'frontend' | 'backend' | 'database' | 'tool' | 'language';
  officialUrl: string;
  logoUrl?: string;
  features: string[];
  useCases: string[];
  popularity: 'high' | 'medium' | 'low';
}

export const technologiesDatabase: Record<string, TechInfo> = {
  // Frontend Technologies
  'react': {
    name: 'React.js',
    description: 'Biblioteca de JavaScript para construir interfaces de usuario declarativas y basadas en componentes.',
    type: 'frontend',
    officialUrl: 'https://react.dev/',
    features: [
      'Virtual DOM para renderizado eficiente',
      'Componentes reutilizables',
      'Hooks para manejo de estado',
      'Ecosistema robusto',
      'Server-side rendering'
    ],
    useCases: [
      'Aplicaciones web de una sola página (SPA)',
      'Aplicaciones móviles con React Native',
      'Dashboards interactivos',
      'E-commerce platforms'
    ],
    popularity: 'high'
  },
  'vue': {
    name: 'Vue.js',
    description: 'Framework progresivo de JavaScript para construir interfaces de usuario modernas.',
    type: 'frontend',
    officialUrl: 'https://vuejs.org/',
    features: [
      'Template syntax intuitiva',
      'Reactivity system avanzado',
      'Composition API',
      'Directivas personalizadas',
      'CLI potente'
    ],
    useCases: [
      'Aplicaciones web progresivas',
      'Prototipos rápidos',
      'Integración gradual en proyectos existentes',
      'Aplicaciones enterprise'
    ],
    popularity: 'high'
  },
  'nextjs': {
    name: 'Next.js',
    description: 'Framework de React que habilita funcionalidades como server-side rendering y generación de sitios estáticos.',
    type: 'frontend',
    officialUrl: 'https://nextjs.org/',
    features: [
      'Server-Side Rendering (SSR)',
      'Static Site Generation (SSG)',
      'API Routes integradas',
      'Automatic code splitting',
      'Image optimization'
    ],
    useCases: [
      'E-commerce websites',
      'Blogs y portfolios',
      'Aplicaciones SEO-friendly',
      'Landing pages optimizadas'
    ],
    popularity: 'high'
  },
  'redux': {
    name: 'Redux',
    description: 'Contenedor de estado predecible para aplicaciones JavaScript que ayuda a escribir aplicaciones que se comportan de manera consistente.',
    type: 'frontend',
    officialUrl: 'https://redux.js.org/',
    features: [
      'Estado global centralizado',
      'Actions y reducers',
      'Time-travel debugging',
      'Middleware support',
      'DevTools integration'
    ],
    useCases: [
      'Aplicaciones complejas con mucho estado',
      'Aplicaciones multi-usuario',
      'Debugging avanzado',
      'Estado compartido entre componentes'
    ],
    popularity: 'medium'
  },
  'tailwind': {
    name: 'Tailwind CSS',
    description: 'Framework CSS utility-first para construir interfaces personalizadas rápidamente.',
    type: 'frontend',
    officialUrl: 'https://tailwindcss.com/',
    features: [
      'Utility classes predefinidas',
      'Customización completa',
      'Responsive design integrado',
      'Dark mode support',
      'JIT compiler'
    ],
    useCases: [
      'Prototipos rápidos',
      'Design systems consistentes',
      'Responsive web design',
      'Component libraries'
    ],
    popularity: 'high'
  },
  'sass': {
    name: 'Sass/SCSS',
    description: 'Preprocesador CSS que añade características como variables, anidación, mixins y funciones.',
    type: 'frontend',
    officialUrl: 'https://sass-lang.com/',
    features: [
      'Variables CSS',
      'Anidación de selectores',
      'Mixins reutilizables',
      'Funciones personalizadas',
      'Partials e imports'
    ],
    useCases: [
      'Proyectos CSS complejos',
      'Sistemas de diseño',
      'Mantenimiento de estilos',
      'Themes dinámicos'
    ],
    popularity: 'medium'
  },

  // Backend Technologies
  'nodejs': {
    name: 'Node.js',
    description: 'Runtime de JavaScript construido sobre el motor V8 de Chrome, permite ejecutar JavaScript del lado del servidor.',
    type: 'backend',
    officialUrl: 'https://nodejs.org/',
    features: [
      'Event-driven architecture',
      'Non-blocking I/O',
      'NPM package manager',
      'Cross-platform',
      'Microservices friendly'
    ],
    useCases: [
      'APIs REST y GraphQL',
      'Real-time applications',
      'Microservices architecture',
      'Command-line tools'
    ],
    popularity: 'high'
  },
  'express': {
    name: 'Express.js',
    description: 'Framework web mínimo y flexible para Node.js que proporciona un conjunto robusto de características.',
    type: 'backend',
    officialUrl: 'https://expressjs.com/',
    features: [
      'Middleware system',
      'Routing robusto',
      'Template engines support',
      'Error handling',
      'Static file serving'
    ],
    useCases: [
      'REST APIs',
      'Web applications',
      'Microservices',
      'Real-time applications'
    ],
    popularity: 'high'
  },
  'python': {
    name: 'Python',
    description: 'Lenguaje de programación interpretado de alto nivel con sintaxis clara y legible.',
    type: 'language',
    officialUrl: 'https://www.python.org/',
    features: [
      'Sintaxis simple y clara',
      'Gran biblioteca estándar',
      'Multiplataforma',
      'Tipado dinámico',
      'Comunidad activa'
    ],
    useCases: [
      'Desarrollo web con Django/Flask',
      'Data science y machine learning',
      'Automatización y scripting',
      'APIs y web scraping'
    ],
    popularity: 'high'
  },
  'django': {
    name: 'Django',
    description: 'Framework web de alto nivel para Python que fomenta el desarrollo rápido y el diseño limpio y pragmático.',
    type: 'backend',
    officialUrl: 'https://www.djangoproject.com/',
    features: [
      'ORM integrado',
      'Sistema de administración automático',
      'Authentication system',
      'Security features',
      'Scalable architecture'
    ],
    useCases: [
      'Aplicaciones web complejas',
      'Content management systems',
      'E-commerce platforms',
      'Social networks'
    ],
    popularity: 'high'
  },
  'flask': {
    name: 'Flask',
    description: 'Micro framework web para Python basado en Werkzeug y Jinja2.',
    type: 'backend',
    officialUrl: 'https://flask.palletsprojects.com/',
    features: [
      'Lightweight y flexible',
      'Jinja2 templating',
      'Werkzeug WSGI toolkit',
      'Unit testing support',
      'RESTful request dispatching'
    ],
    useCases: [
      'APIs ligeras',
      'Prototipos rápidos',
      'Microservices',
      'Small to medium web apps'
    ],
    popularity: 'high'
  },
  'java': {
    name: 'Java',
    description: 'Lenguaje de programación orientado a objetos, independiente de plataforma y de propósito general.',
    type: 'language',
    officialUrl: 'https://www.oracle.com/java/',
    features: [
      'Write once, run anywhere',
      'Fuertemente tipado',
      'Garbage collection automático',
      'Multithreading nativo',
      'Seguridad robusta'
    ],
    useCases: [
      'Aplicaciones enterprise',
      'Aplicaciones móviles Android',
      'Web applications con Spring',
      'Desktop applications'
    ],
    popularity: 'high'
  },
  'spring': {
    name: 'Spring Framework',
    description: 'Framework comprehensive para desarrollo de aplicaciones Java empresariales.',
    type: 'backend',
    officialUrl: 'https://spring.io/',
    features: [
      'Dependency injection',
      'Aspect-oriented programming',
      'Spring Boot para quick start',
      'Security integration',
      'Data access abstraction'
    ],
    useCases: [
      'Enterprise applications',
      'RESTful web services',
      'Microservices architecture',
      'Batch processing'
    ],
    popularity: 'high'
  },
  'graphql': {
    name: 'GraphQL',
    description: 'Lenguaje de consulta y runtime para APIs que permite obtener exactamente los datos necesarios.',
    type: 'backend',
    officialUrl: 'https://graphql.org/',
    features: [
      'Single endpoint',
      'Type system fuerte',
      'Real-time subscriptions',
      'Introspection automática',
      'Ecosystem de herramientas'
    ],
    useCases: [
      'APIs modernas y flexibles',
      'Aplicaciones móviles',
      'Microservices federation',
      'Real-time applications'
    ],
    popularity: 'medium'
  },

  // Languages
  'typescript': {
    name: 'TypeScript',
    description: 'Superset tipado de JavaScript que compila a JavaScript plano, agregando tipos estáticos.',
    type: 'language',
    officialUrl: 'https://www.typescriptlang.org/',
    features: [
      'Sistema de tipos estático',
      'Intellisense mejorado',
      'Detección temprana de errores',
      'Refactoring seguro',
      'Compatibilidad con JavaScript'
    ],
    useCases: [
      'Aplicaciones enterprise grandes',
      'APIs robustas',
      'Desarrollo en equipo',
      'Proyectos de larga duración'
    ],
    popularity: 'high'
  },
  'javascript': {
    name: 'JavaScript',
    description: 'Lenguaje de programación dinámico que permite crear contenido interactivo y dinámico en la web.',
    type: 'language',
    officialUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    features: [
      'Tipado dinámico',
      'First-class functions',
      'Prototype-based OOP',
      'Event-driven programming',
      'Cross-platform'
    ],
    useCases: [
      'Desarrollo web frontend',
      'Backend con Node.js',
      'Mobile apps con React Native',
      'Desktop apps con Electron'
    ],
    popularity: 'high'
  },

  // Databases
  'mongodb': {
    name: 'MongoDB',
    description: 'Base de datos NoSQL orientada a documentos que utiliza documentos similares a JSON con esquemas dinámicos.',
    type: 'database',
    officialUrl: 'https://www.mongodb.com/',
    features: [
      'Document-oriented storage',
      'Schema flexible',
      'Horizontal scaling',
      'Rich query language',
      'Built-in replication'
    ],
    useCases: [
      'Aplicaciones web modernas',
      'Big data y analytics',
      'Content management',
      'Real-time applications'
    ],
    popularity: 'high'
  },
  'mysql': {
    name: 'MySQL',
    description: 'Sistema de gestión de bases de datos relacional de código abierto más popular del mundo.',
    type: 'database',
    officialUrl: 'https://www.mysql.com/',
    features: [
      'ACID compliance',
      'Multi-version concurrency control',
      'Triggers y stored procedures',
      'Replication y clustering',
      'Security features'
    ],
    useCases: [
      'Aplicaciones web',
      'E-commerce platforms',
      'Data warehousing',
      'Embedded applications'
    ],
    popularity: 'high'
  },
  'postgresql': {
    name: 'PostgreSQL',
    description: 'Sistema de base de datos objeto-relacional de código abierto con más de 30 años de desarrollo activo.',
    type: 'database',
    officialUrl: 'https://www.postgresql.org/',
    features: [
      'ACID compliant',
      'Extensible type system',
      'Full-text search',
      'JSON/JSONB support',
      'Advanced indexing'
    ],
    useCases: [
      'Enterprise applications',
      'Geospatial applications',
      'Financial systems',
      'Scientific data'
    ],
    popularity: 'high'
  },
  'redis': {
    name: 'Redis',
    description: 'Base de datos en memoria de código abierto usada como base de datos, caché y message broker.',
    type: 'database',
    officialUrl: 'https://redis.io/',
    features: [
      'In-memory data store',
      'Múltiples estructuras de datos',
      'Pub/Sub messaging',
      'Lua scripting',
      'High availability'
    ],
    useCases: [
      'Caching de aplicaciones',
      'Session storage',
      'Real-time analytics',
      'Message queues'
    ],
    popularity: 'high'
  },

  // Tools & Platforms
  'docker': {
    name: 'Docker',
    description: 'Plataforma de contenedorización que permite empaquetar aplicaciones y sus dependencias en contenedores portátiles.',
    type: 'tool',
    officialUrl: 'https://www.docker.com/',
    features: [
      'Containerización de aplicaciones',
      'Portabilidad entre entornos',
      'Escalabilidad automática',
      'Aislamiento de recursos',
      'Docker Compose para multi-contenedor'
    ],
    useCases: [
      'Desarrollo y testing consistente',
      'Deployment de microservices',
      'CI/CD pipelines',
      'Cloud migration'
    ],
    popularity: 'high'
  },
  'aws': {
    name: 'Amazon Web Services',
    description: 'Plataforma de servicios en la nube más completa del mundo, con más de 200 servicios.',
    type: 'tool',
    officialUrl: 'https://aws.amazon.com/',
    features: [
      'EC2 para computación',
      'S3 para almacenamiento',
      'RDS para bases de datos',
      'Lambda para serverless',
      'CloudFormation para infraestructura como código'
    ],
    useCases: [
      'Hosting de aplicaciones web',
      'Data analytics y machine learning',
      'Backup y disaster recovery',
      'Content delivery networks'
    ],
    popularity: 'high'
  },
  'firebase': {
    name: 'Firebase',
    description: 'Plataforma de desarrollo de aplicaciones de Google que proporciona backend como servicio.',
    type: 'tool',
    officialUrl: 'https://firebase.google.com/',
    features: [
      'Realtime Database',
      'Authentication integrada',
      'Cloud Functions',
      'Hosting estático',
      'Analytics avanzado'
    ],
    useCases: [
      'Aplicaciones móviles rápidas',
      'Prototipos y MVPs',
      'Apps con tiempo real',
      'Sistemas de autenticación'
    ],
    popularity: 'high'
  },
  'git': {
    name: 'Git',
    description: 'Sistema de control de versiones distribuido para rastrear cambios en el código fuente durante el desarrollo.',
    type: 'tool',
    officialUrl: 'https://git-scm.com/',
    features: [
      'Control de versiones distribuido',
      'Branching y merging',
      'Historial completo',
      'Trabajo colaborativo',
      'Backup automático'
    ],
    useCases: [
      'Desarrollo colaborativo',
      'Versionado de código',
      'Backup de proyectos',
      'Release management'
    ],
    popularity: 'high'
  },
  'figma': {
    name: 'Figma',
    description: 'Herramienta de diseño colaborativo basada en navegador para crear interfaces de usuario y prototipos.',
    type: 'tool',
    officialUrl: 'https://www.figma.com/',
    features: [
      'Diseño colaborativo en tiempo real',
      'Prototipado interactivo',
      'Sistemas de diseño',
      'Handoff automático a desarrollo',
      'Plugins extensivos'
    ],
    useCases: [
      'Diseño de interfaces',
      'Prototipado rápido',
      'Design systems',
      'Colaboración diseño-desarrollo'
    ],
    popularity: 'high'
  },
  'vscode': {
    name: 'Visual Studio Code',
    description: 'Editor de código fuente gratuito y de código abierto desarrollado por Microsoft.',
    type: 'tool',
    officialUrl: 'https://code.visualstudio.com/',
    features: [
      'IntelliSense avanzado',
      'Terminal integrado',
      'Control de versiones Git',
      'Marketplace de extensiones',
      'Debugging integrado'
    ],
    useCases: [
      'Desarrollo web y móvil',
      'Scripting y automatización',
      'Desarrollo multi-lenguaje',
      'Remote development'
    ],
    popularity: 'high'
  },
  'postman': {
    name: 'Postman',
    description: 'Plataforma para desarrollo, testing y documentación de APIs.',
    type: 'tool',
    officialUrl: 'https://www.postman.com/',
    features: [
      'Testing de APIs REST y GraphQL',
      'Documentación automática',
      'Mock servers',
      'Monitoring de APIs',
      'Colecciones compartidas'
    ],
    useCases: [
      'Testing de APIs',
      'Documentación de endpoints',
      'Desarrollo de microservices',
      'API monitoring'
    ],
    popularity: 'high'
  },
  'webpack': {
    name: 'Webpack',
    description: 'Bundler de módulos estáticos para aplicaciones JavaScript modernas.',
    type: 'tool',
    officialUrl: 'https://webpack.js.org/',
    features: [
      'Module bundling',
      'Code splitting',
      'Hot Module Replacement',
      'Loaders para diferentes tipos de archivos',
      'Plugins extensibles'
    ],
    useCases: [
      'Build de aplicaciones SPA',
      'Optimización de assets',
      'Development servers',
      'Production bundling'
    ],
    popularity: 'medium'
  },
  'jest': {
    name: 'Jest',
    description: 'Framework de testing para JavaScript que funciona fuera de la caja para la mayoría de proyectos.',
    type: 'tool',
    officialUrl: 'https://jestjs.io/',
    features: [
      'Zero configuration',
      'Snapshot testing',
      'Mock functions',
      'Code coverage reports',
      'Parallel testing'
    ],
    useCases: [
      'Unit testing',
      'Integration testing',
      'TDD/BDD development',
      'CI/CD pipelines'
    ],
    popularity: 'high'
  },
  'linux': {
    name: 'Linux',
    description: 'Sistema operativo de código abierto basado en Unix, ampliamente usado en servidores y desarrollo.',
    type: 'tool',
    officialUrl: 'https://www.linux.org/',
    features: [
      'Sistema de archivos robusto',
      'Terminal y command line',
      'Package managers',
      'Containerización nativa',
      'Networking avanzado'
    ],
    useCases: [
      'Servidores de producción',
      'Desarrollo backend',
      'DevOps y automatización',
      'Cloud computing'
    ],
    popularity: 'high'
  },
  'nginx': {
    name: 'Nginx',
    description: 'Servidor web HTTP y proxy inverso de alto rendimiento, balanceador de carga y caché HTTP.',
    type: 'tool',
    officialUrl: 'https://nginx.org/',
    features: [
      'High performance web server',
      'Reverse proxy',
      'Load balancing',
      'SSL/TLS termination',
      'Static file serving'
    ],
    useCases: [
      'Web server para sitios estáticos',
      'Reverse proxy para APIs',
      'Load balancing',
      'SSL termination'
    ],
    popularity: 'high'
  }
};

// Función helper para buscar tecnología por nombre (case-insensitive)
export function getTechInfo(techName: string): TechInfo | null {
  const normalizedName = techName.toLowerCase()
    .replace(/\s+/g, '')
    .replace(/\.js$/, '')
    .replace(/\.css$/, '')
    .replace(/^react\.js$/, 'react')
    .replace(/^vue\.js$/, 'vue')
    .replace(/^node\.js$/, 'nodejs')
    .replace(/^next\.js$/, 'nextjs')
    .replace(/tailwind\s*css/, 'tailwind')
    .replace(/visual\s*studio\s*code/, 'vscode')
    .replace(/amazon\s*web\s*services/, 'aws');

  return technologiesDatabase[normalizedName] || null;
}

// Función para generar URL de búsqueda como fallback
export function generateSearchUrl(techName: string): string {
  const searchTerm = encodeURIComponent(`${techName} programming technology documentation`);
  return `https://www.google.com/search?q=${searchTerm}`;
}