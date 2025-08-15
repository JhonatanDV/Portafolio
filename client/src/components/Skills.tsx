import { Code, Server, Database } from "lucide-react";

export default function Skills() {
  const frontendSkills = [
    {
      name: "React.js",
      level: 85,
      description: "Biblioteca de JavaScript para crear interfaces de usuario interactivas y reutilizables"
    },
    {
      name: "Vue.js",
      level: 75,
      description: "Framework progresivo para construir interfaces de usuario modernas y reactivas"
    },
    {
      name: "TypeScript",
      level: 80,
      description: "Superset de JavaScript que añade tipado estático para mayor robustez del código"
    },
    {
      name: "Tailwind CSS",
      level: 90,
      description: "Framework CSS utility-first para diseño rápido y responsive"
    },
    {
      name: "Next.js",
      level: 70,
      description: "Framework de React para aplicaciones web con SSR y generación estática"
    }
  ];

  const backendSkills = [
    {
      name: "Node.js",
      level: 85,
      description: "Entorno de ejecución de JavaScript del lado del servidor para aplicaciones escalables"
    },
    {
      name: "Python",
      level: 80,
      description: "Lenguaje versátil para desarrollo web, análisis de datos y machine learning"
    },
    {
      name: "Java",
      level: 75,
      description: "Lenguaje robusto y multiplataforma para aplicaciones empresariales"
    },
    {
      name: "Express.js",
      level: 85,
      description: "Framework minimalista para Node.js ideal para APIs REST y aplicaciones web"
    },
    {
      name: "FastAPI",
      level: 70,
      description: "Framework moderno de Python para APIs rápidas con validación automática"
    }
  ];

  const databaseSkills = [
    {
      name: "MongoDB",
      level: 80,
      description: "Base de datos NoSQL orientada a documentos para aplicaciones modernas"
    },
    {
      name: "PostgreSQL",
      level: 75,
      description: "Sistema de gestión de bases de datos relacionales avanzado y de código abierto"
    },
    {
      name: "MySQL",
      level: 80,
      description: "Base de datos relacional ampliamente utilizada para aplicaciones web"
    },
    {
      name: "Redis",
      level: 65,
      description: "Base de datos en memoria para cache y gestión de sesiones de alta velocidad"
    },
    {
      name: "Git & GitHub",
      level: 85,
      description: "Sistema de control de versiones distribuido para colaboración en código"
    },
    {
      name: "Docker",
      level: 70,
      description: "Plataforma de contenedores para desarrollo y despliegue de aplicaciones"
    },
    {
      name: "AWS",
      level: 60,
      description: "Servicios de computación en la nube para infraestructura escalable"
    },
    {
      name: "Firebase",
      level: 75,
      description: "Plataforma de desarrollo de aplicaciones con base de datos en tiempo real"
    }
  ];

  const otherTechnologies = [
    "Docker", "AWS", "Firebase", "Next.js", "Redux", "GraphQL"
  ];

  const SkillCard = ({ 
    title, 
    icon, 
    skills, 
    colorClass 
  }: { 
    title: string; 
    icon: React.ReactNode; 
    skills: Array<{name: string; level: number; description: string}>; 
    colorClass: string;
  }) => (
    <div className="bg-medium-blue p-8 rounded-xl hover:bg-light-blue transition-all duration-300 transform hover:scale-105">
      <div className="text-center mb-6">
        <div className={`w-16 h-16 ${colorClass} rounded-full flex items-center justify-center mx-auto mb-4`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <span className={`${title === 'Frontend' ? 'text-purple-400' : title === 'Backend' ? 'text-blue-400' : 'text-cyan-400'}`}>
                {skill.name}
              </span>
              <span className="text-sm text-gray-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className={`${colorClass.replace('bg-gradient-to-r', 'bg-gradient-to-r')} h-2 rounded-full`}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-400 mt-1">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="habilidades" className="py-20 bg-dark-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Habilidades Técnicas</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones completas
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <SkillCard
            title="Frontend"
            icon={<Code className="text-2xl text-white" />}
            skills={frontendSkills}
            colorClass="bg-gradient-to-r from-purple-500 to-purple-600"
          />
          
          <SkillCard
            title="Backend"
            icon={<Server className="text-2xl text-white" />}
            skills={backendSkills}
            colorClass="bg-gradient-to-r from-blue-500 to-blue-600"
          />
          
          <SkillCard
            title="Bases de Datos"
            icon={<Database className="text-2xl text-white" />}
            skills={databaseSkills}
            colorClass="bg-gradient-to-r from-cyan-500 to-cyan-600"
          />
        </div>
        
        {/* Additional Technologies */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Otras Tecnologías</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {otherTechnologies.map((tech, index) => (
              <span 
                key={index}
                className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 rounded-full text-sm font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
