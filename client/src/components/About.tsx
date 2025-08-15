export default function About() {
  return (
    <section id="sobre-mi" className="py-20 bg-medium-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre mí</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-accent-purple">Mi Historia</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Soy estudiante de Ingeniería en Software con gran interés en el desarrollo de aplicaciones, 
              la resolución de problemas y el aprendizaje de nuevas tecnologías. Me considero una persona 
              responsable, proactiva y con habilidades para trabajar en equipo. Busco crecer profesionalmente 
              y aportar soluciones innovadoras en el ámbito tecnológico.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Estudiante de la Universidad Cooperativa de Colombia con un técnico en sistemas del SENA. 
              Apasionado por el desarrollo full-stack y las tecnologías emergentes.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-light-blue p-6 rounded-lg text-center hover:bg-gray-700 transition-colors duration-300">
                <div className="text-3xl font-bold text-accent-purple mb-2">15+</div>
                <div className="text-gray-300">Proyectos</div>
              </div>
              <div className="bg-light-blue p-6 rounded-lg text-center hover:bg-gray-700 transition-colors duration-300">
                <div className="text-3xl font-bold text-accent-blue mb-2">12+</div>
                <div className="text-gray-300">Tecnologías</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Programming workspace with code on multiple monitors" 
              className="rounded-xl shadow-2xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
