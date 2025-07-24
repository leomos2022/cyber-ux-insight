import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Quote, Heart, Brain, Lightbulb } from "lucide-react";

const PersonalReflection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-foreground">
            Reflexión Personal
          </h2>
          
          <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed">
            Análisis crítico sobre las implicaciones de la seguridad en aplicaciones web 
            y su impacto en la experiencia del usuario y la sociedad digital.
          </p>

          {/* Main Reflection */}
          <Card className="mb-8 border-l-4 border-accent">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-accent">
                <Quote className="w-6 h-6" />
                <span>Consecuencias de Ignorar las Vulnerabilidades</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Ignorar las vulnerabilidades de seguridad en aplicaciones web no es simplemente 
                un problema técnico; es una decisión que puede tener consecuencias devastadoras 
                tanto para los usuarios como para las organizaciones. Durante este estudio, he 
                comprendido que cada línea de código sin validar representa una puerta potencial 
                para atacantes maliciosos.
              </p>
              <p>
                La facilidad con la que se ejecutó el ataque de inyección SQL en nuestro entorno 
                de prueba fue alarmante. Un simple payload de <code className="bg-muted px-1 rounded">' OR '1'='1</code> 
                fue suficiente para comprometer completamente el sistema de autenticación. Esto me 
                ha hecho reflexionar sobre cuántas aplicaciones en producción podrían tener vulnerabilidades 
                similares sin que sus desarrolladores lo sepan.
              </p>
            </CardContent>
          </Card>

          {/* Impact Analysis Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  <span className="text-foreground">Impacto Humano</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="text-sm leading-relaxed">
                  Las vulnerabilidades no afectan solo sistemas; afectan personas reales. 
                  Cuando un usuario confía sus datos personales a una aplicación, está 
                  depositando su confianza en nosotros como desarrolladores. Una brecha 
                  de seguridad puede resultar en robo de identidad, pérdidas financieras 
                  o daño emocional que perdura mucho más allá del incidente técnico.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="w-5 h-5 text-blue-500" />
                  <span className="text-foreground">Cambio de Mentalidad</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="text-sm leading-relaxed">
                  Este estudio ha transformado mi perspectiva sobre el desarrollo de software. 
                  Ya no veo la seguridad como una característica adicional, sino como un 
                  requisito fundamental que debe estar presente desde la concepción del proyecto. 
                  Cada decisión de diseño debe considerar las implicaciones de seguridad.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* UX and Security Connection */}
          <Card className="mb-8 bg-gradient-to-r from-accent/5 to-primary/5">
            <CardHeader>
              <CardTitle className="text-center text-foreground">
                La Relación Intrínseca entre Seguridad y Experiencia de Usuario
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Una de las revelaciones más importantes de este estudio es entender que la seguridad 
                y la experiencia del usuario no son conceptos separados, sino facetas complementarias 
                de un producto digital exitoso.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <h4 className="font-semibold text-foreground">Confianza</h4>
                  <p className="text-sm text-muted-foreground">
                    Los usuarios necesitan sentirse seguros para tener una experiencia positiva
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-blue-600 font-bold">⚡</span>
                  </div>
                  <h4 className="font-semibold text-foreground">Rendimiento</h4>
                  <p className="text-sm text-muted-foreground">
                    Las medidas de seguridad bien implementadas no comprometen la velocidad
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-purple-600 font-bold">🎯</span>
                  </div>
                  <h4 className="font-semibold text-foreground">Transparencia</h4>
                  <p className="text-sm text-muted-foreground">
                    Comunicar las medidas de seguridad genera confianza adicional
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Integration in SDLC */}
          <Card className="mb-8 border-l-4 border-primary">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lightbulb className="w-6 h-6 text-primary" />
                <span className="text-foreground">Integración de Seguridad en el Ciclo de Vida del Software</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                La implementación exitosa de medidas de seguridad requiere un cambio fundamental 
                en cómo concebimos el desarrollo de software. No podemos continuar tratando la 
                seguridad como un "add-on" que se implementa al final del proceso.
              </p>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-foreground mb-3">Principios Fundamentales Aprendidos:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">1.</span>
                    <strong>Security by Design:</strong> Incorporar consideraciones de seguridad desde la fase de diseño
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">2.</span>
                    <strong>Validación Continua:</strong> Implementar controles de seguridad en cada etapa del desarrollo
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">3.</span>
                    <strong>Educación Permanente:</strong> Mantener al equipo actualizado sobre nuevas amenazas y técnicas
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">4.</span>
                    <strong>Cultura de Responsabilidad:</strong> Cada miembro del equipo debe sentirse responsable de la seguridad
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Final Thoughts */}
          <Card className="bg-accent/5 border-accent/20">
            <CardContent className="p-8 text-center">
              <Quote className="w-12 h-12 text-accent mx-auto mb-4" />
              <blockquote className="text-lg text-foreground mb-4 font-medium italic">
                "La seguridad no es un destino, sino un viaje continuo de aprendizaje, 
                adaptación y mejora constante."
              </blockquote>
              <p className="text-muted-foreground">
                Este estudio ha reforzado mi compromiso personal de desarrollar aplicaciones 
                que no solo sean funcionales y atractivas, sino también seguras y confiables 
                para todos los usuarios que confíen en ellas.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PersonalReflection;