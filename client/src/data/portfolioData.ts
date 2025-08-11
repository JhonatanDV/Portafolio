export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  codeUrl?: string;
  imageUrl: string;
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile' | 'data' | 'devops';
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'database' | 'tools';
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    description: string;
    bio: string;
    education: string;
    email: string;
    location: string;
    profileImage: string;
  };
  social: SocialLink[];
  skills: Skill[];
  projects: Project[];
  stats: {
    projects: number;
    technologies: number;
    experience: string;
  };
}

// EDITAR: Personaliza estos datos con tu información real
export const portfolioData: PortfolioData = {
  personal: {
    name: "Tu Nombre Completo",
    title: "Estudiante de Ingeniería",
    description: "Estudiante de Ingeniería apasionado por el desarrollo full-stack y la innovación tecnológica",
    bio: "Soy un estudiante de Ingeniería de Sistemas apasionado por la tecnología y el desarrollo de software. Mi viaje comenzó con la curiosidad de entender cómo funcionan las aplicaciones que usamos diariamente, lo que me llevó a explorar tanto el frontend como el backend.",
    education: "Actualmente cursando el 7mo semestre de Ingeniería de Sistemas, he desarrollado proyectos utilizando diversas tecnologías modernas, siempre buscando crear soluciones innovadoras y eficientes que generen un impacto positivo.",
    email: "tu@email.com",
    location: "Tu Ciudad, País",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
  },
  social: [
    {
      platform: "GitHub",
      url: "https://github.com/tu-usuario",
      icon: "fab fa-github"
    },
    {
      platform: "LinkedIn", 
      url: "https://linkedin.com/in/tu-perfil",
      icon: "fab fa-linkedin"
    },
    {
      platform: "Email",
      url: "mailto:tu@email.com", 
      icon: "fas fa-envelope"
    }
  ],
  stats: {
    projects: 15,
    technologies: 12,
    experience: "2+ años"
  },
  skills: [
    // Frontend
    { name: "React.js", level: 85, category: "frontend" },
    { name: "Vue.js", level: 70, category: "frontend" },
    { name: "TypeScript", level: 80, category: "frontend" },
    { name: "Tailwind CSS", level: 90, category: "frontend" },
    { name: "Next.js", level: 75, category: "frontend" },
    
    // Backend
    { name: "Node.js", level: 85, category: "backend" },
    { name: "Python", level: 80, category: "backend" },
    { name: "Java", level: 75, category: "backend" },
    { name: "Express.js", level: 85, category: "backend" },
    { name: "FastAPI", level: 70, category: "backend" },
    
    // Database
    { name: "MongoDB", level: 80, category: "database" },
    { name: "PostgreSQL", level: 75, category: "database" },
    { name: "MySQL", level: 80, category: "database" },
    { name: "Redis", level: 65, category: "database" },
    
    // Tools
    { name: "Git & GitHub", level: 90, category: "tools" },
    { name: "Docker", level: 70, category: "tools" },
    { name: "AWS", level: 65, category: "tools" },
    { name: "Firebase", level: 75, category: "tools" },
  ],
  projects: [
    {
      id: "1",
      title: "Tienda Virtual React",
      description: "E-commerce completo desarrollado con React, Redux y integración con APIs de pago. Incluye carrito de compras, autenticación de usuarios y panel administrativo.",
      technologies: ["React", "Redux", "Node.js", "MongoDB"],
      demoUrl: "#",
      codeUrl: "#",
      imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      category: "frontend"
    },
    {
      id: "2", 
      title: "API REST Gestión Tareas",
      description: "API robusta para gestión de tareas con autenticación JWT, validación de datos, y documentación completa con Swagger. Incluye tests unitarios y CI/CD.",
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT"],
      demoUrl: "#",
      codeUrl: "#", 
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      category: "backend"
    },
    {
      id: "3",
      title: "Dashboard Analítica", 
      description: "Aplicación full-stack para visualización de datos en tiempo real. Incluye gráficos interactivos, filtros dinámicos y exportación de reportes.",
      technologies: ["Vue.js", "Python", "FastAPI", "MySQL"],
      demoUrl: "#",
      codeUrl: "#",
      imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300", 
      category: "fullstack"
    },
    {
      id: "4",
      title: "App Móvil Fitness",
      description: "Aplicación móvil para seguimiento de ejercicios con React Native. Incluye temporizadores, rutinas personalizadas y sincronización en la nube.",
      technologies: ["React Native", "Expo", "Firebase", "AsyncStorage"],
      demoUrl: "#",
      codeUrl: "#",
      imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      category: "mobile"
    },
    {
      id: "5", 
      title: "Análisis Predictivo ML",
      description: "Proyecto de machine learning para predicción de ventas utilizando algoritmos de regresión. Incluye visualización de datos y modelo entrenado.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      demoUrl: "#",
      codeUrl: "#",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      category: "data"
    },
    {
      id: "6",
      title: "Pipeline CI/CD",
      description: "Configuración completa de CI/CD con Docker, automatización de despliegues y monitoreo. Reducción del tiempo de deploy en 80%.",
      technologies: ["Docker", "GitHub Actions", "AWS", "Nginx"],
      demoUrl: "#",
      codeUrl: "#", 
      imageUrl: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      category: "devops"
    }
  ]
};
