import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, AlertTriangle, Users, Lock } from "lucide-react";

const ResultsAnalysis = () => {
  const impacts = [
    {
      icon: AlertTriangle,
      title: "Compromiso de Datos",
      description: "Acceso no autorizado a información sensible de usuarios",
      severity: "critical"
    },
    {
      icon: Users,
      title: "Pérdida de Confianza",
      description: "Deterioro de la reputación y confianza del usuario",
      severity: "high"
    },
    {
      icon: Lock,
      title: "Bypass de Autenticación",
      description: "Acceso a funcionalidades restringidas sin autorización",
      severity: "critical"
    },
    {
      icon: Shield,
      title: "Escalada de Privilegios",
      description: "Posible obtención de permisos administrativos",
      severity: "high"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical": return "text-destructive";
      case "high": return "text-orange-500";
      default: return "text-yellow-500";
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-foreground">
            Análisis de Resultados
          </h2>
          
          <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed max-w-4xl mx-auto">
            Evaluación detallada del impacto y las consecuencias de la vulnerabilidad 
            de inyección SQL demostrada en el sistema de prueba.
          </p>

          {/* Main Finding */}
          <Alert className="mb-12 border-destructive bg-destructive/5">
            <AlertTriangle className="h-4 w-4 text-destructive" />
            <AlertDescription className="text-lg">
              <strong>Vulnerabilidad Confirmada:</strong> El sistema permite inyección SQL 
              debido a la falta de validación y sanitización de entradas del usuario, 
              resultando en bypass completo del sistema de autenticación.
            </AlertDescription>
          </Alert>

          {/* What Happened */}
          <div className="mb-12">
            <Card className="border-l-4 border-accent">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  ¿Qué Ocurrió Durante el Ataque?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">1. Entrada Maliciosa</h4>
                    <p className="text-sm">
                      El atacante introduce el payload <code className="bg-muted px-1 rounded">' OR '1'='1</code> 
                      en el campo de usuario del formulario de login.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">2. Manipulación de Query</h4>
                    <p className="text-sm">
                      La consulta SQL se modifica dinámicamente, alterando la lógica 
                      de autenticación original del sistema.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">3. Bypass de Seguridad</h4>
                    <p className="text-sm">
                      La condición siempre verdadera permite saltarse la verificación 
                      de credenciales establecida.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">4. Acceso No Autorizado</h4>
                    <p className="text-sm">
                      El sistema concede acceso completo sin validar las credenciales 
                      reales del usuario.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Technical Analysis */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">
              Análisis Técnico de la Vulnerabilidad
            </h3>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span className="w-6 h-6 bg-destructive rounded-full flex items-center justify-center text-destructive-foreground text-sm font-bold">!</span>
                  <span>Tipo: Inyección SQL (CWE-89)</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Causa Raíz</h4>
                    <p className="text-sm text-muted-foreground">
                      Concatenación directa de entrada del usuario en consultas SQL 
                      sin validación ni escape de caracteres especiales.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Vector de Ataque</h4>
                    <p className="text-sm text-muted-foreground">
                      Campo de entrada del formulario de autenticación que acepta 
                      metacaracteres SQL sin filtrado.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Clasificación OWASP</h4>
                    <p className="text-sm text-muted-foreground">
                      A03:2021 - Injection, una de las vulnerabilidades más críticas 
                      según el OWASP Top 10.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Impact Assessment */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">
              Evaluación del Impacto
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {impacts.map((impact, index) => {
                const IconComponent = impact.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className={`w-6 h-6 ${getSeverityColor(impact.severity)}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-foreground">{impact.title}</h4>
                            <span className={`text-xs uppercase font-bold ${getSeverityColor(impact.severity)}`}>
                              {impact.severity}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">{impact.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="mt-8 bg-amber-50 border-amber-200">
              <CardContent className="p-6">
                <h4 className="font-semibold text-amber-800 mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Riesgos Adicionales Identificados
                </h4>
                <ul className="space-y-2 text-sm text-amber-700">
                  <li>• <strong>Extracción de datos:</strong> Posible acceso a toda la base de datos</li>
                  <li>• <strong>Modificación de datos:</strong> Alteración o eliminación de registros críticos</li>
                  <li>• <strong>Ejecución de comandos:</strong> Posible ejecución de comandos del sistema operativo</li>
                  <li>• <strong>Cumplimiento normativo:</strong> Violación de regulaciones de protección de datos</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsAnalysis;