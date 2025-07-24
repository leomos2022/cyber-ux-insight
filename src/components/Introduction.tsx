import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Eye } from "lucide-react";

const Introduction = () => {
  return (
    <section id="introduction" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-foreground">
            Introducción al Estudio
          </h2>
          
          <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed">
            En el panorama digital actual, la seguridad de las aplicaciones web se ha convertido 
            en una prioridad crítica. Este estudio examina cómo las vulnerabilidades comunes 
            pueden comprometer tanto la seguridad como la experiencia del usuario.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                  Protección de Aplicaciones
                </h3>
                <p className="text-muted-foreground">
                  Análisis de la importancia crítica de implementar medidas de seguridad 
                  robustas en el desarrollo web moderno.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <Target className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                  Identificación de Vulnerabilidades
                </h3>
                <p className="text-muted-foreground">
                  Exploración de las principales causas y vectores de ataque 
                  que comprometen la seguridad de las aplicaciones.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <Eye className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                  Simulación Práctica
                </h3>
                <p className="text-muted-foreground">
                  Demostración real de ataques de inyección SQL y análisis 
                  del impacto en la experiencia del usuario.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-cyber-light p-8 rounded-lg border-l-4 border-accent">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Objetivos del Estudio
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Comprender el impacto de las vulnerabilidades en la experiencia del usuario
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Demostrar técnicas de explotación mediante simulación controlada
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Proponer estrategias efectivas de mitigación y prevención
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Promover la integración de seguridad en el ciclo de desarrollo
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;