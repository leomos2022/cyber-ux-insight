import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Lock, Eye, Database } from "lucide-react";

const MitigationTable = () => {
  const mitigations = [
    {
      vulnerability: "Inyección SQL",
      icon: Database,
      techniques: [
        "Consultas preparadas (Prepared Statements)",
        "Uso de ORM (Object-Relational Mapping)",
        "Validación estricta de entradas",
        "Principio de menor privilegio en BD"
      ],
      implementation: "high",
      effectiveness: "critical"
    },
    {
      vulnerability: "Cross-Site Scripting (XSS)",
      icon: Eye,
      techniques: [
        "Escapado de entradas HTML/JavaScript",
        "Políticas de Seguridad de Contenido (CSP)",
        "Validación en cliente y servidor",
        "Codificación de salidas"
      ],
      implementation: "medium",
      effectiveness: "high"
    },
    {
      vulnerability: "Cross-Site Request Forgery (CSRF)",
      icon: Shield,
      techniques: [
        "Tokens CSRF únicos por sesión",
        "Cookies con atributo SameSite",
        "Verificación de referer headers",
        "Doble submit de cookies"
      ],
      implementation: "medium",
      effectiveness: "high"
    },
    {
      vulnerability: "Exposición de Datos Sensibles",
      icon: Lock,
      techniques: [
        "Cifrado con hash y salt para contraseñas",
        "Implementación de HTTPS/TLS",
        "Configuración segura de headers",
        "Gestión adecuada de claves"
      ],
      implementation: "high",
      effectiveness: "critical"
    }
  ];

  const getImplementationColor = (level: string) => {
    switch (level) {
      case "high": return "bg-red-100 text-red-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      default: return "bg-green-100 text-green-800";
    }
  };

  const getEffectivenessColor = (level: string) => {
    switch (level) {
      case "critical": return "text-green-600";
      case "high": return "text-blue-600";
      default: return "text-gray-600";
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-foreground">
            Técnicas de Mitigación Comparativas
          </h2>
          
          <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed max-w-4xl mx-auto">
            Análisis detallado de las estrategias más efectivas para prevenir y mitigar 
            las vulnerabilidades comunes en aplicaciones web.
          </p>

          <div className="space-y-8">
            {mitigations.map((mitigation, index) => {
              const IconComponent = mitigation.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-accent" />
                        </div>
                        <span className="text-xl">{mitigation.vulnerability}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getImplementationColor(mitigation.implementation)}>
                          Complejidad: {mitigation.implementation}
                        </Badge>
                        <Badge variant="outline" className={getEffectivenessColor(mitigation.effectiveness)}>
                          Efectividad: {mitigation.effectiveness}
                        </Badge>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {mitigation.techniques.map((technique, techIndex) => (
                        <div key={techIndex} className="flex items-start space-x-2 p-3 bg-muted/50 rounded-lg">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">{technique}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Implementation Priority */}
          <div className="mt-12">
            <Card className="bg-accent/5 border-accent/20">
              <CardHeader>
                <CardTitle className="text-center text-accent">
                  Priorización de Implementación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="space-y-2">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-2xl font-bold text-red-600">1</span>
                    </div>
                    <h4 className="font-semibold text-foreground">Fase Crítica</h4>
                    <p className="text-sm text-muted-foreground">
                      Implementar consultas preparadas y validación de entradas 
                      para prevenir inyección SQL
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-2xl font-bold text-yellow-600">2</span>
                    </div>
                    <h4 className="font-semibold text-foreground">Fase Importante</h4>
                    <p className="text-sm text-muted-foreground">
                      Configurar protecciones XSS y CSRF, implementar headers 
                      de seguridad
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-2xl font-bold text-green-600">3</span>
                    </div>
                    <h4 className="font-semibold text-foreground">Fase de Mejora</h4>
                    <p className="text-sm text-muted-foreground">
                      Optimizar cifrado, auditorías de seguridad regulares 
                      y monitoreo avanzado
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Best Practices */}
          <div className="mt-12">
            <Card className="border-l-4 border-accent">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Mejores Prácticas de Implementación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Desarrollo Seguro</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Integrar seguridad desde el diseño (Security by Design)</li>
                      <li>• Realizar revisiones de código enfocadas en seguridad</li>
                      <li>• Implementar pruebas de seguridad automatizadas</li>
                      <li>• Mantener bibliotecas y dependencias actualizadas</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Operaciones Seguras</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Configurar monitoreo y alertas de seguridad</li>
                      <li>• Establecer respuesta a incidentes</li>
                      <li>• Realizar auditorías y pentesting regulares</li>
                      <li>• Capacitar continuamente al equipo de desarrollo</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MitigationTable;