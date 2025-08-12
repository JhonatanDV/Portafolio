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
  'tailwind': {
    name: 'Tailwind CSS',
    description: 'Framework CSS utility-first para construir interfaces personalizadas rápidamente.',
    type: 'frontend',
    officialUrl: 'https://tailwindcss.com/',
    features: [
      'Utility classes predefinidas',
      'Diseño responsive',
      'Customización completa',
      'Tree-shaking automático',
      'Dark mode integrado'
    ],
    useCases: [
      'Prototipos rápidos',
      'Sistemas de diseño consistentes',
      'Landing pages',
      'Aplicaciones web modernas'
    ],
    popularity: 'high'
  },
  'nodejs': {
    name: 'Node.js',
    description: 'Runtime de JavaScript construido en el motor V8 de Chrome para desarrollar aplicaciones del lado del servidor.',
    type: 'backend',
    officialUrl: 'https://nodejs.org/',
    features: [
      'Event-driven, non-blocking I/O',
      'NPM ecosystem masivo',
      'Single-threaded con event loop',
      'Cross-platform',
      'Real-time applications'
    ],
    useCases: [
      'APIs REST y GraphQL',
      'Aplicaciones en tiempo real',
      'Microservicios',
      'Herramientas de construcción'
    ],
    popularity: 'high'
  },
  'python': {
    name: 'Python',
    description: 'Lenguaje de programación interpretado, de alto nivel y propósito general con sintaxis simple.',
    type: 'language',
    officialUrl: 'https://www.python.org/',
    features: [
      'Sintaxis clara y legible',
      'Tipado dinámico',
      'Bibliotecas extensivas',
      'Multiplataforma',
      'Comunidad activa'
    ],
    useCases: [
      'Desarrollo web (Django, Flask)',
      'Data Science y ML',
      'Automatización y scripting',
      'Desarrollo de APIs'
    ],
    popularity: 'high'
  },
  'mongodb': {
    name: 'MongoDB',
    description: 'Base de datos NoSQL orientada a documentos, escalable y flexible.',
    type: 'database',
    officialUrl: 'https://www.mongodb.com/',
    features: [
      'Documentos JSON/BSON',
      'Esquema flexible',
      'Escalabilidad horizontal',
      'Agregación potente',
      'Atlas cloud service'
    ],
    useCases: [
      'Aplicaciones web modernas',
      'APIs con datos complejos',
      'Aplicaciones de tiempo real',
      'Content management'
    ],
    popularity: 'high'
  },
  'postgresql': {
    name: 'PostgreSQL',
    description: 'Sistema de gestión de bases de datos relacionales y orientado a objetos de código abierto.',
    type: 'database',
    officialUrl: 'https://www.postgresql.org/',
    features: [
      'ACID compliance',
      'Tipos de datos avanzados',
      'Extensiones personalizadas',
      'JSON support nativo',
      'Replicación robusta'
    ],
    useCases: [
      'Aplicaciones enterprise',
      'Data warehousing',
      'GIS applications',
      'Aplicaciones financieras'
    ],
    popularity: 'high'
  },
  'docker': {
    name: 'Docker',
    description: 'Plataforma de contenedorización que permite empaquetar aplicaciones con sus dependencias.',
    type: 'tool',
    officialUrl: 'https://www.docker.com/',
    features: [
      'Containerización ligera',
      'Portabilidad entre entornos',
      'Orchestración con Compose',
      'Registry público y privado',
      'Microservices support'
    ],
    useCases: [
      'Desarrollo y deployment',
      'Microservicios',
      'CI/CD pipelines',
      'Entornos de desarrollo consistentes'
    ],
    popularity: 'high'
  },
  'aws': {
    name: 'Amazon Web Services',
    description: 'Plataforma de servicios en la nube más completa y adoptada mundialmente.',
    type: 'tool',
    officialUrl: 'https://aws.amazon.com/',
    features: [
      '200+ servicios disponibles',
      'Global infrastructure',
      'Pay-as-you-use pricing',
      'Alta disponibilidad',
      'Security y compliance'
    ],
    useCases: [
      'Hosting de aplicaciones',
      'Data storage y analytics',
      'Machine learning',
      'DevOps y CI/CD'
    ],
    popularity: 'high'
  },
  'firebase': {
    name: 'Firebase',
    description: 'Plataforma de desarrollo de aplicaciones de Google con backend-as-a-service.',
    type: 'tool',
    officialUrl: 'https://firebase.google.com/',
    features: [
      'Real-time database',
      'Authentication integrada',
      'Cloud Functions',
      'Hosting estático',
      'Analytics integrados'
    ],
    useCases: [
      'Apps móviles rápidas',
      'Aplicaciones en tiempo real',
      'Prototipos con backend',
      'Chat applications'
    ],
    popularity: 'high'
  },
  'nextjs': {
    name: 'Next.js',
    description: 'Framework de React para producción con renderizado híbrido y optimizaciones automáticas.',
    type: 'frontend',
    officialUrl: 'https://nextjs.org/',
    features: [
      'Server-side rendering (SSR)',
      'Static site generation (SSG)',
      'API routes integradas',
      'Optimizaciones automáticas',
      'Deploy con Vercel'
    ],
    useCases: [
      'E-commerce sites',
      'Blogs y CMS',
      'Landing pages optimizadas',
      'Aplicaciones full-stack'
    ],
    popularity: 'high'
  },
  'redux': {
    name: 'Redux',
    description: 'Biblioteca predictible de manejo de estado para aplicaciones JavaScript.',
    type: 'frontend',
    officialUrl: 'https://redux.js.org/',
    features: [
      'Single source of truth',
      'Estado inmutable',
      'DevTools avanzadas',
      'Middleware ecosystem',
      'Time travel debugging'
    ],
    useCases: [
      'Aplicaciones con estado complejo',
      'Sharing state entre componentes',
      'Debugging avanzado',
      'Aplicaciones enterprise'
    ],
    popularity: 'medium'
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
    .replace(/tailwind\s*css/, 'tailwind');

  return technologiesDatabase[normalizedName] || null;
}

// Función para generar URL de búsqueda como fallback
export function generateSearchUrl(techName: string): string {
  const searchTerm = encodeURIComponent(`${techName} programming technology documentation`);
  return `https://www.google.com/search?q=${searchTerm}`;
}