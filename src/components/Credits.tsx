import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, GraduationCap, BookOpen, Download, ExternalLink } from "lucide-react";

const Credits = () => {
  const bibliography = [
    {
      title: "OWASP Top 10 - 2021",
      description: "The Ten Most Critical Web Application Security Risks",
      url: "https://owasp.org/Top10/",
      type: "Web Resource"
    },
    {
      title: "XAMPP Documentation",
      description: "Apache Friends XAMPP Installation and Configuration Guide",
      url: "https://www.apachefriends.org/",
      type: "Technical Documentation"
    },
    {
      title: "SQL Injection Prevention - OWASP",
      description: "Comprehensive guide on preventing SQL injection attacks",
      url: "https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html",
      type: "Security Guide"
    },
    {
      title: "Web Application Security Testing",
      description: "NIST Special Publication 800-115",
      url: "https://csrc.nist.gov/publications/detail/sp/800-115/final",
      type: "Academic Resource"
    },
    {
      title: "Common Weakness Enumeration (CWE)",
      description: "CWE-89: Improper Neutralization of Special Elements used in an SQL Command",
      url: "https://cwe.mitre.org/data/definitions/89.html",
      type: "Technical Standard"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-foreground">
            Créditos y Bibliografía
          </h2>
          
          <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed">
            Reconocimientos y fuentes académicas utilizadas en el desarrollo de este estudio de caso.
          </p>

          {/* Author Information */}
          <Card className="mb-8 border-l-4 border-accent">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="w-6 h-6 text-accent" />
                <span className="text-foreground">Información del Autor</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Estudiante</h4>
                  <p className="text-lg text-muted-foreground">Leonardo Mosquera</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Curso</h4>
                  <p className="text-lg text-muted-foreground">Seguridad en el Desarrollo de Software</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Universidad
                    </label>
                    <input 
                      type="text" 
                      placeholder="Nombre de la Universidad"
                      className="w-full p-2 border border-input rounded-md bg-background text-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Profesor
                    </label>
                    <input 
                      type="text" 
                      placeholder="Nombre del Profesor"
                      className="w-full p-2 border border-input rounded-md bg-background text-foreground"
                    />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  * Campos editables para personalización institucional
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Academic Context */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <GraduationCap className="w-6 h-6 text-accent" />
                <span className="text-foreground">Contexto Académico</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Este estudio de caso forma parte del curso de Seguridad en el Desarrollo de Software, 
                  diseñado para proporcionar una comprensión práctica de las vulnerabilidades comunes 
                  en aplicaciones web y sus implicaciones en la experiencia del usuario.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 bg-accent/5 rounded-lg">
                    <div className="text-2xl font-bold text-accent mb-2">8</div>
                    <div className="text-sm text-muted-foreground">Semanas de Investigación</div>
                  </div>
                  <div className="text-center p-4 bg-accent/5 rounded-lg">
                    <div className="text-2xl font-bold text-accent mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Fuentes Consultadas</div>
                  </div>
                  <div className="text-center p-4 bg-accent/5 rounded-lg">
                    <div className="text-2xl font-bold text-accent mb-2">3</div>
                    <div className="text-sm text-muted-foreground">Entornos de Prueba</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bibliography */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="w-6 h-6 text-accent" />
                <span className="text-foreground">Bibliografía y Referencias</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {bibliography.map((ref, index) => (
                  <div key={index} className="border-l-2 border-accent/30 pl-4 py-2">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{ref.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{ref.description}</p>
                        <span className="inline-block bg-accent/10 text-accent text-xs px-2 py-1 rounded">
                          {ref.type}
                        </span>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={ref.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Video Tutorial */}
          <Card className="bg-gradient-to-r from-red-500/5 to-red-600/5 border-red-200/20 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-center">
                <ExternalLink className="w-6 h-6 text-red-600" />
                <span className="text-foreground">Video Tutorial</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                Accede al video tutorial completo sobre este proyecto de seguridad web
              </p>
              <Button 
                onClick={() => window.open('https://www.youtube.com/watch?v=3RjQznt-8kE&t=5s', '_blank')}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Ver Video en YouTube
              </Button>
              <p className="text-sm text-muted-foreground">
                Tutorial completo sobre la implementación y análisis de seguridad
              </p>
            </CardContent>
          </Card>

          {/* Download Options */}
          <Card className="bg-gradient-to-r from-accent/5 to-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-center">
                <Download className="w-6 h-6 text-accent" />
                <span className="text-foreground">Recursos Adicionales</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                Accede a versiones descargables del informe completo y materiales complementarios
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" className="flex items-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Descargar PDF</span>
                </Button>
                <Button variant="outline" className="flex items-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Descargar Word</span>
                </Button>
                <Button variant="outline" className="flex items-center space-x-2">
                  <ExternalLink className="w-4 h-4" />
                  <span>Código Fuente</span>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Los archivos incluyen el código de demostración, capturas de pantalla 
                y documentación técnica adicional
              </p>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="mt-12 text-center text-muted-foreground">
            <p className="text-sm">
              Este estudio ha sido desarrollado con fines académicos y educativos. 
              Todas las vulnerabilidades demostradas fueron ejecutadas en entornos controlados 
              y nunca en sistemas de producción.
            </p>
            <p className="text-xs mt-2">
              © Agosto 2025 Leonardo Mosquera. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credits;