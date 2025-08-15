import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-medium-blue py-8 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400">
            © 2024 Jhonatan Díaz. Desarrollado con 💜 y mucho café.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a 
              href="https://github.com/JhonatanDV" 
              className="text-gray-400 hover:text-white transition-colors duration-300" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/jhonatan-d%C3%ADaz-615985328/" 
              className="text-gray-400 hover:text-white transition-colors duration-300" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:jhonatandiaz918@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
