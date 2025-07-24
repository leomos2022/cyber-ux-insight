import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Bug, Database, Globe } from "lucide-react";

const StudyObject = () => {
  const vulnerabilities = [
    {
      icon: Database,
      title: "Inyección SQL",
      description: "Manipulación de consultas de base de datos a través de entradas no validadas"
    },
    {
      icon: Globe,
      title: "Cross-Site Scripting (XSS)",
      description: "Ejecución de scripts maliciosos en el navegador del usuario"
    },
    {
      icon: Bug,
      title: "Cross-Site Request Forgery (CSRF)",
      description: "Ejecución no autorizada de acciones en nombre del usuario"
    },
    {
      icon: AlertTriangle,
      title: "Exposición de Datos Sensibles",
      description: "Filtración de información confidencial por configuración inadecuada"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-foreground">
            Descripción del Objeto de Estudio
          </h2>
          
          <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed max-w-4xl mx-auto">
            Las aplicaciones web modernas enfrentan múltiples amenazas de seguridad que pueden 
            comprometer la integridad de los datos, la privacidad de los usuarios y la 
            confiabilidad del sistema.
          </p>

          <div className="mb-12">
            <Card className="bg-card border-l-4 border-accent">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">
                  Relevancia de la Seguridad en Aplicaciones Web
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  La seguridad en aplicaciones web trasciende la mera protección técnica; 
                  influye directamente en la experiencia del usuario, la confianza del cliente 
                  y la viabilidad comercial de la aplicación.
                </p>
                <p>
                  Según el informe OWASP Top 10, las vulnerabilidades de seguridad más comunes 
                  continúan siendo explotadas debido a prácticas de desarrollo inseguras y 
                  falta de validación adecuada de entradas.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">
              Principales Causas de Vulnerabilidades
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-destructive">⚠️</span>
                  </div>
                  <h4 className="font-semibold mb-2 text-card-foreground">Validación Insuficiente</h4>
                  <p className="text-sm text-muted-foreground">
                    Falta de validación y sanitización de datos de entrada del usuario
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-destructive">🔧</span>
                  </div>
                  <h4 className="font-semibold mb-2 text-card-foreground">Configuración Errónea</h4>
                  <p className="text-sm text-muted-foreground">
                    Configuraciones de seguridad inadecuadas en servidores y aplicaciones
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-destructive">👥</span>
                  </div>
                  <h4 className="font-semibold mb-2 text-card-foreground">Factor Humano</h4>
                  <p className="text-sm text-muted-foreground">
                    Falta de concienciación y capacitación en seguridad del equipo de desarrollo
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">
              Ataques Comunes en Aplicaciones Web
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {vulnerabilities.map((vuln, index) => {
                const IconComponent = vuln.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-card-foreground">{vuln.title}</h4>
                          <p className="text-sm text-muted-foreground">{vuln.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyObject;