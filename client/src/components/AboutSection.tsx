import { portfolioData } from "@/data/portfolioData";

export default function AboutSection() {
  const { personal, stats } = portfolioData;

  return (
    <section id="sobre-mi" className="py-20 bg-slate-800" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="about-title">Sobre mí</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-portfolio-primary">Mi Historia</h3>
            <p className="text-slate-300 leading-relaxed" data-testid="about-bio">
              {personal.bio}
            </p>
            <p className="text-slate-300 leading-relaxed" data-testid="about-education">
              {personal.education}
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-slate-700 rounded-lg">
                <div className="text-2xl font-bold text-portfolio-primary" data-testid="stat-projects">
                  {stats.projects}+
                </div>
                <div className="text-slate-300">Proyectos</div>
              </div>
              <div className="text-center p-4 bg-slate-700 rounded-lg">
                <div className="text-2xl font-bold text-portfolio-secondary" data-testid="stat-technologies">
                  {stats.technologies}+
                </div>
                <div className="text-slate-300">Tecnologías</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
              alt="Workspace de desarrollo" 
              className="rounded-lg shadow-2xl"
              data-testid="workspace-image"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-portfolio-primary/20 to-portfolio-secondary/20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
