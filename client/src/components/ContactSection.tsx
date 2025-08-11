import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { personal, social } = portfolioData;
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      // TODO: Replace with actual form submission logic
      // You can use services like EmailJS, Formspree, or your own API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Mensaje enviado",
        description: "¡Gracias por tu mensaje! Te contactaré pronto.",
      });
      
      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje. Intenta nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-slate-900" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="contact-title">¡Trabajemos Juntos!</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary mx-auto"></div>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escuchar sobre tu idea y colaborar contigo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Información de Contacto</h3>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-portfolio-primary rounded-lg flex items-center justify-center">
                <i className="fas fa-envelope text-white"></i>
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-slate-300" data-testid="contact-email">{personal.email}</p>
              </div>
            </div>
            
            {social.find(link => link.platform === "LinkedIn") && (
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-portfolio-secondary rounded-lg flex items-center justify-center">
                  <i className="fab fa-linkedin text-white"></i>
                </div>
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <p className="text-slate-300" data-testid="contact-linkedin">
                    {social.find(link => link.platform === "LinkedIn")?.url.replace("https://linkedin.com", "")}
                  </p>
                </div>
              </div>
            )}
            
            {social.find(link => link.platform === "GitHub") && (
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-portfolio-accent rounded-lg flex items-center justify-center">
                  <i className="fab fa-github text-white"></i>
                </div>
                <div>
                  <p className="font-semibold">GitHub</p>
                  <p className="text-slate-300" data-testid="contact-github">
                    {social.find(link => link.platform === "GitHub")?.url.replace("https://", "")}
                  </p>
                </div>
              </div>
            )}
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-portfolio-primary rounded-lg flex items-center justify-center">
                <i className="fas fa-map-marker-alt text-white"></i>
              </div>
              <div>
                <p className="font-semibold">Ubicación</p>
                <p className="text-slate-300" data-testid="contact-location">{personal.location}</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-6">Envíame un Mensaje</h3>
            
            <form className="space-y-6" onSubmit={handleSubmit} data-testid="contact-form">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nombre
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-portfolio-primary transition-colors text-white"
                  placeholder="Tu nombre completo"
                  data-testid="input-name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-portfolio-primary transition-colors text-white"
                  placeholder="tu@email.com"
                  data-testid="input-email"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Asunto
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  required 
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-portfolio-primary transition-colors text-white"
                  placeholder="¿Sobre qué quieres hablar?"
                  data-testid="input-subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensaje
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  required 
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-portfolio-primary transition-colors text-white resize-none"
                  placeholder="Cuéntame sobre tu proyecto o idea..."
                  data-testid="textarea-message"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-portfolio-primary hover:bg-portfolio-primary/80 disabled:bg-portfolio-primary/60 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105 disabled:transform-none"
                data-testid="submit-button"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
