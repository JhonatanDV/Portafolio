import { portfolioData } from "@/data/portfolioData";

export default function ProjectsSection() {
  const { projects, social } = portfolioData;

  const getCategoryColor = (category: string) => {
    const colors = {
      frontend: "text-portfolio-primary",
      backend: "text-portfolio-secondary", 
      fullstack: "text-portfolio-accent",
      mobile: "text-portfolio-primary",
      data: "text-portfolio-secondary",
      devops: "text-portfolio-accent"
    };
    return colors[category as keyof typeof colors] || "text-portfolio-primary";
  };

  const getTechColor = (category: string) => {
    const colors = {
      frontend: "bg-portfolio-primary/20 text-portfolio-primary",
      backend: "bg-portfolio-secondary/20 text-portfolio-secondary",
      fullstack: "bg-portfolio-accent/20 text-portfolio-accent", 
      mobile: "bg-portfolio-primary/20 text-portfolio-primary",
      data: "bg-portfolio-secondary/20 text-portfolio-secondary",
      devops: "bg-portfolio-accent/20 text-portfolio-accent"
    };
    return colors[category as keyof typeof colors] || "bg-portfolio-primary/20 text-portfolio-primary";
  };

  return (
    <section id="proyectos" className="py-20 bg-slate-800" data-testid="projects-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="projects-title">Mis Proyectos</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary mx-auto"></div>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            Una selección de mis trabajos más destacados en desarrollo full-stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:transform hover:scale-105"
              data-testid={`project-card-${project.id}`}
            >
              <img 
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
                data-testid={`project-image-${project.id}`}
              />
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2" data-testid={`project-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4" data-testid={`project-description-${project.id}`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className={`px-3 py-1 ${getTechColor(project.category)} rounded-full text-xs`}
                      data-testid={`project-tech-${project.id}-${index}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl}
                      className={`${getCategoryColor(project.category)} hover:opacity-80 transition-colors`}
                      data-testid={`project-demo-${project.id}`}
                    >
                      <i className="fas fa-external-link-alt mr-1"></i>Demo
                    </a>
                  )}
                  {project.codeUrl && (
                    <a 
                      href={project.codeUrl}
                      className="text-slate-400 hover:text-white transition-colors"
                      data-testid={`project-code-${project.id}`}
                    >
                      <i className="fab fa-github mr-1"></i>Código
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          {social.find(link => link.platform === "GitHub") && (
            <a 
              href={social.find(link => link.platform === "GitHub")?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-portfolio-primary hover:bg-portfolio-primary/80 rounded-lg font-semibold transition-all transform hover:scale-105"
              data-testid="github-link"
            >
              <i className="fab fa-github mr-2"></i>
              Ver más en GitHub
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
