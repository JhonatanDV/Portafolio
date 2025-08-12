import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import TechInfoModal from "./TechInfoModal";

export default function SkillsSection() {
  const { skills } = portfolioData;
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const frontendSkills = skills.filter(skill => skill.category === "frontend");
  const backendSkills = skills.filter(skill => skill.category === "backend"); 
  const databaseSkills = skills.filter(skill => skill.category === "database");
  const toolSkills = skills.filter(skill => skill.category === "tools");

  // Tecnologías organizadas por categorías para mejor visualización
  const cloudAndDevOps = ["Docker", "AWS", "Firebase", "Linux", "Nginx"];
  const frameworksAndLibraries = ["Next.js", "Redux", "GraphQL", "Jest", "Webpack"];
  const designAndTools = ["Figma", "VS Code", "Postman", "Git", "Sass"];

  const renderSkillBar = (skill: any) => (
    <div 
      key={skill.name} 
      className="flex items-center justify-between cursor-pointer hover:bg-slate-700/50 p-2 rounded-lg transition-all group" 
      onClick={() => setSelectedTech(skill.name)}
      data-testid={`skill-${skill.name.toLowerCase().replace(/[.\s]/g, '-')}`}
    >
      <span className="group-hover:text-portfolio-primary transition-colors">{skill.name}</span>
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

        {/* Additional Technologies - Organized by Categories */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Otras Tecnologías y Herramientas</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cloud & DevOps */}
            <div className="bg-slate-800 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary rounded-lg flex items-center justify-center mr-3">
                  <i className="fas fa-cloud text-white"></i>
                </div>
                <h4 className="text-lg font-semibold">Cloud & DevOps</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {cloudAndDevOps.map((tech, index) => (
                  <button 
                    key={index}
                    onClick={() => setSelectedTech(tech)}
                    className="px-3 py-1 bg-slate-700 text-portfolio-primary rounded-full text-sm hover:bg-portfolio-primary hover:text-white transition-all cursor-pointer transform hover:scale-105"
                    data-testid={`cloud-tech-${tech.toLowerCase().replace(/[.\s]/g, '-')}`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div className="bg-slate-800 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-portfolio-secondary to-portfolio-accent rounded-lg flex items-center justify-center mr-3">
                  <i className="fas fa-code-branch text-white"></i>
                </div>
                <h4 className="text-lg font-semibold">Frameworks & Librerías</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {frameworksAndLibraries.map((tech, index) => (
                  <button 
                    key={index}
                    onClick={() => setSelectedTech(tech)}
                    className="px-3 py-1 bg-slate-700 text-portfolio-secondary rounded-full text-sm hover:bg-portfolio-secondary hover:text-white transition-all cursor-pointer transform hover:scale-105"
                    data-testid={`framework-tech-${tech.toLowerCase().replace(/[.\s]/g, '-')}`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>

            {/* Design & Tools */}
            <div className="bg-slate-800 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-portfolio-accent to-portfolio-primary rounded-lg flex items-center justify-center mr-3">
                  <i className="fas fa-tools text-white"></i>
                </div>
                <h4 className="text-lg font-semibold">Diseño & Herramientas</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {designAndTools.map((tech, index) => (
                  <button 
                    key={index}
                    onClick={() => setSelectedTech(tech)}
                    className="px-3 py-1 bg-slate-700 text-portfolio-accent rounded-full text-sm hover:bg-portfolio-accent hover:text-white transition-all cursor-pointer transform hover:scale-105"
                    data-testid={`design-tool-${tech.toLowerCase().replace(/[.\s]/g, '-')}`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Professional Skills Summary */}
          <div className="mt-12 text-center bg-slate-800 p-8 rounded-xl">
            <h4 className="text-xl font-semibold mb-4">Competencias Profesionales</h4>
            <div className="grid md:grid-cols-4 gap-6 text-sm">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-laptop-code text-2xl text-white"></i>
                </div>
                <h5 className="font-semibold text-portfolio-primary">Full-Stack Development</h5>
                <p className="text-slate-400 mt-1">Frontend + Backend + Bases de datos</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-portfolio-secondary to-portfolio-accent rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-mobile-alt text-2xl text-white"></i>
                </div>
                <h5 className="font-semibold text-portfolio-secondary">Responsive Design</h5>
                <p className="text-slate-400 mt-1">Mobile-first, cross-browser</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-portfolio-accent to-portfolio-primary rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-rocket text-2xl text-white"></i>
                </div>
                <h5 className="font-semibold text-portfolio-accent">Performance Optimization</h5>
                <p className="text-slate-400 mt-1">SEO, Core Web Vitals</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-users text-2xl text-white"></i>
                </div>
                <h5 className="font-semibold text-portfolio-primary">Team Collaboration</h5>
                <p className="text-slate-400 mt-1">Git, Code reviews, Agile</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Info Modal */}
      <TechInfoModal 
        isOpen={selectedTech !== null}
        onClose={() => setSelectedTech(null)}
        techName={selectedTech || ""}
      />
    </section>
  );
}
