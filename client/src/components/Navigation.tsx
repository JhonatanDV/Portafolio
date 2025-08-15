import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const targetPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-dark-blue/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-accent-purple">Jhonatan Díaz</div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="hover:text-accent-purple transition-colors duration-300"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('sobre-mi')}
              className="hover:text-accent-purple transition-colors duration-300"
            >
              Sobre mí
            </button>
            <button 
              onClick={() => scrollToSection('habilidades')}
              className="hover:text-accent-purple transition-colors duration-300"
            >
              Habilidades
            </button>
            <button 
              onClick={() => scrollToSection('proyectos')}
              className="hover:text-accent-purple transition-colors duration-300"
            >
              Proyectos
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="hover:text-accent-purple transition-colors duration-300"
            >
              Contacto
            </button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-accent-purple"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-medium-blue border-t border-gray-700">
          <div className="px-4 py-2 space-y-2">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="block hover:text-accent-purple transition-colors duration-300 py-2 w-full text-left"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('sobre-mi')}
              className="block hover:text-accent-purple transition-colors duration-300 py-2 w-full text-left"
            >
              Sobre mí
            </button>
            <button 
              onClick={() => scrollToSection('habilidades')}
              className="block hover:text-accent-purple transition-colors duration-300 py-2 w-full text-left"
            >
              Habilidades
            </button>
            <button 
              onClick={() => scrollToSection('proyectos')}
              className="block hover:text-accent-purple transition-colors duration-300 py-2 w-full text-left"
            >
              Proyectos
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="block hover:text-accent-purple transition-colors duration-300 py-2 w-full text-left"
            >
              Contacto
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
