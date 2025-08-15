import { Mail, Linkedin, Github, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="py-20 bg-dark-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¡Trabajemos Juntos!</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escuchar sobre tu idea y colaborar contigo.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {/* Email */}
            <div className="bg-medium-blue p-6 rounded-xl hover:bg-light-blue transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-2xl text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a 
                href="mailto:jhonatandiaz918@gmail.com" 
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300 break-all text-sm"
              >
                jhonatandiaz918@gmail.com
              </a>
            </div>
            
            {/* LinkedIn */}
            <div className="bg-medium-blue p-6 rounded-xl hover:bg-light-blue transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Linkedin className="text-2xl text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/in/jhonatan-d%C3%ADaz-615985328/" 
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Conectar en LinkedIn
              </a>
            </div>
            
            {/* GitHub */}
            <div className="bg-medium-blue p-6 rounded-xl hover:bg-light-blue transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Github className="text-2xl text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <a 
                href="https://github.com/JhonatanDV" 
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                github.com/JhonatanDV
              </a>
            </div>
            
            {/* Location */}
            <div className="bg-medium-blue p-6 rounded-xl hover:bg-light-blue transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-2xl text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Ubicación</h3>
              <p className="text-gray-300">Pasto, Colombia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
