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
    name: "Jhonatan Díaz",
    title: "Estudiante de Ingeniería en Software",
    description: "Me apasiona la tecnología, el aprendizaje continuo y la creación de soluciones innovadoras", 
    bio: "Soy estudiante de Ingeniería en Software con interés en el desarrollo de aplicaciones, la resolución de problemas y el aprendizaje de nuevas tecnologías. Me considero una persona responsable, proactiva y con habilidades para trabajar en equipo. Busco crecer profesionalmente y aportar soluciones innovadoras en el ámbito tecnológico.",
    education: "Estudiante de la Universidad Cooperativa de Colombia con un técnico en sistemas del SENA",
    email: "jhonatandiaz918@gmail.com",
    location: "Pasto, Colombia",
    profileImage: "/images/perfil.png",
  },
  social: [
    {
      platform: "GitHub",
      url: "https://github.com/JhonatanDV",
      icon: "fab fa-github"
    },
    {
      platform: "LinkedIn", 
      url: "https://www.linkedin.com/in/jhonatan-d%C3%ADaz-615985328/",
      icon: "fab fa-linkedin"
    },
    {
      platform: "Email",
      url: "mailto:jhonatandiaz918@gmail.com", 
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
