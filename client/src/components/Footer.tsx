import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const { personal, social } = portfolioData;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-950 py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-portfolio-primary" data-testid="footer-name">
              {personal.name}
            </h3>
            <p className="text-slate-400 mb-4" data-testid="footer-description">
              {personal.description}
            </p>
            <div className="flex space-x-4">
              {social.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  target={link.platform !== "Email" ? "_blank" : undefined}
                  rel={link.platform !== "Email" ? "noopener noreferrer" : undefined}
                  className="text-slate-400 hover:text-portfolio-primary transition-colors"
                  data-testid={`footer-social-${link.platform.toLowerCase()}`}
                >
                  <i className={`${link.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button 
                  onClick={() => scrollToSection("inicio")}
                  className="hover:text-portfolio-primary transition-colors"
                  data-testid="footer-nav-inicio"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("sobre-mi")}
                  className="hover:text-portfolio-primary transition-colors"
                  data-testid="footer-nav-sobre-mi"
                >
                  Sobre mí
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("habilidades")}
                  className="hover:text-portfolio-primary transition-colors"
                  data-testid="footer-nav-habilidades"
                >
                  Habilidades
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("proyectos")}
                  className="hover:text-portfolio-primary transition-colors"
                  data-testid="footer-nav-proyectos"
                >
                  Proyectos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contacto")}
                  className="hover:text-portfolio-primary transition-colors"
                  data-testid="footer-nav-contacto"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Disponibilidad</h4>
            <p className="text-slate-400 mb-2" data-testid="availability-status">
              <i className="fas fa-check-circle text-green-400 mr-2"></i>
              Disponible para proyectos
            </p>
            <p className="text-slate-400 mb-2" data-testid="job-seeking-status">
              <i className="fas fa-briefcase text-portfolio-primary mr-2"></i>
              Buscando oportunidades
            </p>
            <p className="text-slate-400" data-testid="student-status">
              <i className="fas fa-graduation-cap text-portfolio-secondary mr-2"></i>
              Estudiante activo
            </p>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p data-testid="copyright">
            &copy; 2024 <span>{personal.name}</span>. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
