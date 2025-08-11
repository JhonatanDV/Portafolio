import { portfolioData } from "@/data/portfolioData";

export default function SkillsSection() {
  const { skills } = portfolioData;

  const frontendSkills = skills.filter(skill => skill.category === "frontend");
  const backendSkills = skills.filter(skill => skill.category === "backend"); 
  const databaseSkills = skills.filter(skill => skill.category === "database");
  const toolSkills = skills.filter(skill => skill.category === "tools");

  const otherTechnologies = [
    "Docker", "AWS", "Firebase", "Next.js", "Redux", "GraphQL"
  ];

  const renderSkillBar = (skill: any) => (
    <div key={skill.name} className="flex items-center justify-between" data-testid={`skill-${skill.name.toLowerCase().replace(/[.\s]/g, '-')}`}>
      <span>{skill.name}</span>
      <div className="w-24 bg-slate-700 rounded-full h-2">
        <div 
          className="bg-current h-2 rounded-full transition-all duration-500"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="habilidades" className="py-20 bg-slate-900" data-testid="skills-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="skills-title">Habilidades Técnicas</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary mx-auto"></div>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones completas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <div className="bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:transform hover:scale-105" data-testid="frontend-skills-card">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-palette text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold">Frontend</h3>
            </div>
            
            <div className="space-y-4 text-portfolio-primary">
              {frontendSkills.map(renderSkillBar)}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:transform hover:scale-105" data-testid="backend-skills-card">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-portfolio-secondary to-portfolio-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-server text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold">Backend</h3>
            </div>
            
            <div className="space-y-4 text-portfolio-secondary">
              {backendSkills.map(renderSkillBar)}
            </div>
          </div>

          {/* Database & Tools */}
          <div className="bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:transform hover:scale-105" data-testid="database-skills-card">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-portfolio-accent to-portfolio-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-database text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold">Bases de Datos</h3>
            </div>
            
            <div className="space-y-4 text-portfolio-accent">
              {[...databaseSkills, ...toolSkills].map(renderSkillBar)}
            </div>
          </div>
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-8">Otras Tecnologías</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {otherTechnologies.map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-slate-800 text-portfolio-primary rounded-full text-sm hover:bg-portfolio-primary hover:text-white transition-all cursor-default"
                data-testid={`tech-tag-${tech.toLowerCase().replace(/[.\s]/g, '-')}`}
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
