import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
export default function Hero() {
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
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 text-center px-4">
        {/* Profile photo placeholder with glowing border */}
        <div className="w-32 h-32 mx-auto mb-8 rounded-full border-4 border-accent-purple shadow-2xl shadow-purple-500/50 overflow-hidden">
          <img 
            src="/profile.jpg"
            alt="Jhonatan Díaz" 
            className="w-full h-full object-cover" 
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Jhonatan Díaz</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Me apasiona la tecnología, el aprendizaje continuo y la creación de soluciones innovadoras
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button 
            onClick={() => scrollToSection('proyectos')}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Ver mis proyectos
          </button>
          <button 
            onClick={() => scrollToSection('contacto')}
            className="border border-purple-500 hover:bg-purple-500/20 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            Contáctame
          </button>
        </div>
        
        <div className="flex justify-center space-x-6">
          <a 
            href="https://github.com/JhonatanDV" 
            className="text-gray-400 hover:text-white transition-colors duration-300" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/jhonatan-d%C3%ADaz-615985328/" 
            className="text-gray-400 hover:text-white transition-colors duration-300" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:jhonatandiaz918@gmail.com" 
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-white/60" />
      </div>
    </section>
  );
}
