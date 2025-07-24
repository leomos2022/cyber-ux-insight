import { Button } from "@/components/ui/button";
import cyberHero from "@/assets/cyber-hero.jpg";

const Hero = () => {
  const scrollToStudy = () => {
    document.getElementById('introduction')?.scrollIntoView({ behavior: 'smooth' });
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
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
          Estudio de Caso: UX y Seguridad en 
          <span className="block text-accent"> Aplicaciones Web</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
          Análisis de vulnerabilidades, simulación de ataque SQL y propuestas de mitigación
        </p>
        
        <Button 
          onClick={scrollToStudy}
          size="lg" 
          className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Leer el estudio completo
        </Button>
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