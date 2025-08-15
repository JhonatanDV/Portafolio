import { Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Todo SQLite Flutter",
      description: "Aplicación móvil de gestión de tareas desarrollada en Flutter con base de datos SQLite local. Incluye funcionalidades CRUD completas y interfaz intuitiva.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Flutter", "Dart", "SQLite", "Android"],
      techColors: ["bg-blue-600", "bg-cyan-600", "bg-gray-600", "bg-green-600"],
      github: "https://github.com/JhonatanDV/Electiva3Sqflite"
    },
    {
      title: "VR46 Inventario",
      description: "Sistema de gestión de inventario móvil desarrollado con Flutter. Permite control de stock, registro de productos y generación de reportes.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Flutter", "Dart", "SQLite", "Mobile"],
      techColors: ["bg-blue-600", "bg-cyan-600", "bg-gray-600", "bg-purple-600"],
      github: "https://github.com/JhonatanDV/VR46INV"
    },
    {
      title: "App Calorías",
      description: "Aplicación web para tracking de calorías y nutrición desarrollada con JavaScript y Node.js. Incluye contenerización con Docker.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["JavaScript", "Node.js", "Docker", "Web"],
      techColors: ["bg-yellow-600", "bg-green-600", "bg-blue-600", "bg-red-600"],
      github: "https://github.com/JhonatanDV/AppCalorias"
    },
    {
      title: "Microservicio Inventario",
      description: "Microservicio para gestión de inventario desarrollado en Java con Spring Boot. Incluye CI/CD con GitHub Actions y arquitectura escalable.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Java", "Spring Boot", "Maven", "GitHub Actions"],
      techColors: ["bg-red-600", "bg-green-600", "bg-purple-600", "bg-gray-600"],
      github: "https://github.com/JhonatanDV/microinventario"
    },
    {
      title: "Delicheq Firebase",
      description: "Aplicación móvil de delivery gastronómico desarrollada con Flutter y Firebase. Incluye autenticación, base de datos en tiempo real y notificaciones.",
      image: "	https://tse4.mm.bing.net/th/id/OIP.t7dmLj4DChVI2m9iYA-phQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
      technologies: ["Flutter", "Dart", "Firebase", "Cloud Firestore"],
      techColors: ["bg-blue-600", "bg-cyan-600", "bg-orange-600", "bg-yellow-600"],
      github: "https://github.com/JhonatanDV/DelicheqFire"
    }
  ];

  return (
    <section id="proyectos" className="py-20 bg-medium-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mis Proyectos</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Una selección de mis trabajos más destacados en desarrollo full-stack
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-light-blue rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`${project.techColors[techIndex]} text-xs px-2 py-1 rounded text-white`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a 
                    href={project.github} 
                    className="flex items-center gap-2 text-accent-blue hover:text-blue-400 transition-colors duration-300" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Github size={16} /> Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/JhonatanDV" 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Github size={20} /> Ver más en GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
