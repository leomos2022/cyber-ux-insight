import { Button } from "@/components/ui/button";
import { ExternalLink, Terminal, Code } from "lucide-react";
import cyberHero from "@/assets/cyber-hero.jpg";

const Hero = () => {
  const scrollToStudy = () => {
    document.getElementById('introduction')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openYouTubeVideo = () => {
    window.open('https://www.youtube.com/watch?v=3RjQznt-8kE&t=5s', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cyberHero})` }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
          Seguridad en la Web
          <span className="block text-accent"> Estudio de Caso Completo</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
          Análisis de vulnerabilidades, simulación de ataque SQL y propuestas de mitigación
        </p>

        {/* Video de YouTube embebido */}
        <div className="mb-8">
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-4 inline-block">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/3RjQznt-8kE?start=5"
              title="Control de Versiones y Despliegue Continuo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-2xl"
            ></iframe>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button 
            onClick={scrollToStudy}
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Leer el estudio completo
          </Button>
          
          <Button 
            onClick={openYouTubeVideo}
            size="lg" 
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Abrir en YouTube
          </Button>
        </div>

        {/* Información de conexión al proyecto */}
        <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6">
          <h3 className="text-lg font-semibold text-primary-foreground mb-4">
            Conectarse al Proyecto
          </h3>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Terminal className="w-6 h-6 text-accent" />
              <div>
                <p className="font-medium text-primary-foreground">Clonar Repositorio:</p>
                <code className="text-sm text-primary-foreground/80 bg-primary-foreground/20 px-2 py-1 rounded">
                  git clone https://github.com/leomos2022/cyber-ux-insight.git
                </code>
              </div>
            </div>
            <div className="text-center">
              <Button 
                onClick={() => window.open('https://github.com/leomos2022/cyber-ux-insight.git', '_blank')}
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-6 py-2 text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Ver Repositorio en GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;