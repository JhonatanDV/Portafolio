import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glassmorphism" : "bg-white/10 backdrop-blur-sm"
      }`}
      style={{
        backgroundColor: isScrolled ? "rgba(15, 23, 42, 0.95)" : "rgba(255, 255, 255, 0.1)"
      }}
      data-testid="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-portfolio-primary">
            <span data-testid="logo">Jhonatan Díaz</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="hover:text-portfolio-primary transition-colors"
              data-testid="nav-inicio"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("sobre-mi")}
              className="hover:text-portfolio-primary transition-colors"
              data-testid="nav-sobre-mi"
            >
              Sobre mí
            </button>
            <button
              onClick={() => scrollToSection("habilidades")}
              className="hover:text-portfolio-primary transition-colors"
              data-testid="nav-habilidades"
            >
              Habilidades
            </button>
            <button
              onClick={() => scrollToSection("proyectos")}
              className="hover:text-portfolio-primary transition-colors"
              data-testid="nav-proyectos"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="hover:text-portfolio-primary transition-colors"
              data-testid="nav-contacto"
            >
              Contacto
            </button>
          </div>
          
          <button 
            className="md:hidden text-white"
            onClick={toggleMenu}
            data-testid="mobile-menu-toggle"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`${isMenuOpen ? "block" : "hidden"} md:hidden glassmorphism border-t border-white/20`}
        data-testid="mobile-menu"
      >
        <div className="px-4 py-4 space-y-3">
          <button
            onClick={() => scrollToSection("inicio")}
            className="block hover:text-portfolio-primary transition-colors"
            data-testid="mobile-nav-inicio"
          >
            Inicio
          </button>
          <button
            onClick={() => scrollToSection("sobre-mi")}
            className="block hover:text-portfolio-primary transition-colors"
            data-testid="mobile-nav-sobre-mi"
          >
            Sobre mí
          </button>
          <button
            onClick={() => scrollToSection("habilidades")}
            className="block hover:text-portfolio-primary transition-colors"
            data-testid="mobile-nav-habilidades"
          >
            Habilidades
          </button>
          <button
            onClick={() => scrollToSection("proyectos")}
            className="block hover:text-portfolio-primary transition-colors"
            data-testid="mobile-nav-proyectos"
          >
            Proyectos
          </button>
          <button
            onClick={() => scrollToSection("contacto")}
            className="block hover:text-portfolio-primary transition-colors"
            data-testid="mobile-nav-contacto"
          >
            Contacto
          </button>
        </div>
      </div>
    </nav>
  );
}
