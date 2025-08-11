import { portfolioData } from "@/data/portfolioData";

export default function HeroSection() {
  const { personal, social } = portfolioData;

  const scrollToProjects = () => {
    const element = document.getElementById("proyectos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="inicio" 
      className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      data-testid="hero-section"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzYzNjZmMSIgZmlsbC1vcGFjaXR5PSIwLjEiPgo8Y2lyY2xlIGN4PSI3IiBjeT0iNyIgcj0iMSIvPgo8L2c+CjwvZz4KPC9zdmc+')] bg-repeat"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="mb-8">
          <img 
            src={personal.profileImage}
            alt="Foto de perfil profesional" 
            className="w-32 h-32 rounded-full mx-auto border-4 border-portfolio-primary shadow-2xl animate-float"
            data-testid="profile-image"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hola, soy <span className="text-gradient" data-testid="hero-name">{personal.name}</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto" data-testid="hero-description">
          {personal.description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToProjects}
            className="bg-portfolio-primary hover:bg-portfolio-primary/80 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            data-testid="cta-projects"
          >
            Ver mis proyectos
          </button>
          <button
            onClick={scrollToContact}
            className="border-2 border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition-all"
            data-testid="cta-contact"
          >
            Contáctame
          </button>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-12">
          {social.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.platform !== "Email" ? "_blank" : undefined}
              rel={link.platform !== "Email" ? "noopener noreferrer" : undefined}
              className="text-slate-400 hover:text-portfolio-primary transition-colors text-2xl"
              data-testid={`social-${link.platform.toLowerCase()}`}
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-2xl text-slate-400" data-testid="scroll-indicator"></i>
      </div>
    </section>
  );
}
