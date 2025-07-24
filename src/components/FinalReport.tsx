import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, Shield, Users, Lightbulb, BookOpen } from "lucide-react";

const FinalReport = () => {
  const recommendations = [
    {
      icon: Shield,
      title: "Implementación de Defensa en Profundidad",
      description: "Establecer múltiples capas de seguridad que trabajen en conjunto para proteger la aplicación",
      priority: "Alta"
    },
    {
      icon: CheckCircle,
      title: "Adopción de Desarrollo Seguro",
      description: "Integrar prácticas de seguridad en cada fase del ciclo de vida del desarrollo de software",
      priority: "Alta"
    },
    {
      icon: Users,
      title: "Capacitación Continua del Equipo",
      description: "Programas regulares de formación en ciberseguridad para desarrolladores y personal técnico",
      priority: "Media"
    },
    {
      icon: Lightbulb,
      title: "Monitoreo y Respuesta a Incidentes",
      description: "Sistemas de detección temprana y protocolos de respuesta ante vulnerabilidades",
      priority: "Media"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-foreground">
            Informe y Recomendaciones Finales
          </h2>
          
          <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed max-w-4xl mx-auto">
            Síntesis de los hallazgos principales y estrategias recomendadas para fortalecer 
            la seguridad de aplicaciones web en el futuro.
          </p>

          {/* Executive Summary */}
          <Alert className="mb-12 border-accent bg-accent/5">
            <BookOpen className="h-4 w-4 text-accent" />
            <AlertDescription className="text-lg">
              <strong>Resumen Ejecutivo:</strong> El estudio confirma la criticidad de las vulnerabilidades 
              de inyección SQL y su impacto directo en la experiencia del usuario. La implementación 
              de medidas preventivas es esencial para mantener la confianza y seguridad del sistema.
            </AlertDescription>
          </Alert>

          {/* Key Learnings */}
          <div className="mb-12">
            <Card className="border-l-4 border-accent">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Aprendizajes Clave del Estudio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-foreground mb-4 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Hallazgos Técnicos
                    </h4>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        La validación insuficiente de entradas es la causa principal de vulnerabilidades
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        Las consultas preparadas son 99% efectivas contra inyección SQL
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        El impacto de una vulnerabilidad trasciende aspectos técnicos
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        La detección temprana reduce significativamente el daño potencial
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-4 flex items-center">
                      <Users className="w-5 h-5 text-blue-500 mr-2" />
                      Impacto en UX/Negocio
                    </h4>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        Las brechas de seguridad erosionan la confianza del usuario inmediatamente
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        El costo de remediar vulnerabilidades post-producción es 100x mayor
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        La seguridad debe ser considerada un requisito de UX, no opcional
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        Los usuarios valoran la transparencia en temas de seguridad
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recommendations */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">
              Recomendaciones Estratégicas
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {recommendations.map((rec, index) => {
                const IconComponent = rec.icon;
                const priorityColor = rec.priority === "Alta" ? "text-red-600" : "text-yellow-600";
                
                return (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-accent" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-foreground">{rec.title}</h4>
                            <span className={`text-xs font-bold ${priorityColor}`}>
                              {rec.priority}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">{rec.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Defense in Depth */}
          <Card className="mb-12 bg-gradient-to-r from-accent/5 to-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground text-center">
                Enfoque de Defensa en Profundidad
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <h4 className="font-semibold text-foreground">Capa de Red</h4>
                  <p className="text-sm text-muted-foreground">Firewalls, WAF, detección de intrusiones</p>
                </div>
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🖥️</span>
                  </div>
                  <h4 className="font-semibold text-foreground">Capa de Sistema</h4>
                  <p className="text-sm text-muted-foreground">Hardening, actualizaciones, monitoreo</p>
                </div>
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">💻</span>
                  </div>
                  <h4 className="font-semibold text-foreground">Capa de Aplicación</h4>
                  <p className="text-sm text-muted-foreground">Validación, autenticación, autorización</p>
                </div>
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h4 className="font-semibold text-foreground">Capa de Datos</h4>
                  <p className="text-sm text-muted-foreground">Cifrado, backups, control de acceso</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Implementation Roadmap */}
          <Card className="border-l-4 border-primary">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                Hoja de Ruta de Implementación
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Fase Inmediata (0-1 mes)</h4>
                    <p className="text-sm text-muted-foreground">
                      Implementar consultas preparadas, validación básica de entradas, 
                      y auditoría de código existente
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Fase Intermedia (1-3 meses)</h4>
                    <p className="text-sm text-muted-foreground">
                      Configurar protecciones XSS/CSRF, implementar monitoreo de seguridad, 
                      y establecer políticas de desarrollo seguro
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Fase Avanzada (3-6 meses)</h4>
                    <p className="text-sm text-muted-foreground">
                      Automatizar pruebas de seguridad, implementar respuesta a incidentes, 
                      y establecer programa de capacitación continua
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FinalReport;