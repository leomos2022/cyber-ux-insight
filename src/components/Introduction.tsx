import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Eye, GitBranch, Code, Zap } from "lucide-react";

const Introduction = () => {
  return (
    <section id="introduction" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-foreground">
            Introducción al Estudio
          </h2>
          
          <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed">
            En el panorama digital actual, el desarrollo de software requiere no solo funcionalidad y diseño, 
            sino también un control de versiones robusto y estrategias de despliegue continuo. Este estudio 
            examina cómo implementar estas prácticas en aplicaciones React modernas.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-l-4 border-blue-500">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <GitBranch className="w-8 h-8 text-blue-500 mr-3" />
                  <h3 className="text-xl font-semibold text-foreground">Control de Versiones</h3>
                </div>
                <p className="text-muted-foreground">
                  Implementación de Git y GitHub para gestionar el desarrollo colaborativo, 
                  mantener historial de cambios y facilitar la colaboración en equipo.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-green-500">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Code className="w-8 h-8 text-green-500 mr-3" />
                  <h3 className="text-xl font-semibold text-foreground">Desarrollo React</h3>
                </div>
                <p className="text-muted-foreground">
                  Creación de aplicaciones web modernas con React, TypeScript y Vite, 
                  implementando mejores prácticas de desarrollo y arquitectura de componentes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-purple-500">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Zap className="w-8 h-8 text-purple-500 mr-3" />
                  <h3 className="text-xl font-semibold text-foreground">Despliegue Continuo</h3>
                </div>
                <p className="text-muted-foreground">
                  Automatización del proceso de build, testing y despliegue utilizando 
                  plataformas como Vercel para un desarrollo ágil y eficiente.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Nueva sección sobre React y Control de Versiones */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
              🚀 React + Control de Versiones = Desarrollo Eficiente
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">⚛️ Ventajas de React:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Componentes reutilizables y modulares</li>
                  <li>• Virtual DOM para rendimiento optimizado</li>
                  <li>• Ecosistema rico de librerías y herramientas</li>
                  <li>• TypeScript para desarrollo más seguro</li>
                  <li>• Hot reload para desarrollo rápido</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">🔧 Integración con Git:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Control granular de cambios por componente</li>
                  <li>• Branches por feature para desarrollo paralelo</li>
                  <li>• Code review en pull requests</li>
                  <li>• Rollback fácil a versiones anteriores</li>
                  <li>• Colaboración sin conflictos de código</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Flujo de Desarrollo */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
              🔄 Flujo de Desarrollo con React y Git
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Desarrollo Local</h4>
                  <p className="text-gray-600">Crear componentes React en ramas de feature separadas</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Control de Versiones</h4>
                  <p className="text-gray-600">Commits regulares con mensajes descriptivos en Git</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-yellow-50 rounded-lg">
                <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Integración</h4>
                  <p className="text-gray-600">Pull requests y code review antes del merge</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Despliegue</h4>
                  <p className="text-gray-600">Build automático y deploy en Vercel</p>
                </div>
              </div>
            </div>
          </div>

          {/* Herramientas del Stack */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
              🛠️ Stack Tecnológico del Proyecto
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Code className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Frontend</h4>
                <p className="text-sm text-gray-600">React 18 + TypeScript + Vite + Tailwind CSS</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <GitBranch className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Control de Versiones</h4>
                <p className="text-sm text-gray-600">Git + GitHub + GitHub Actions</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Despliegue</h4>
                <p className="text-sm text-gray-600">Vercel + CI/CD Automático</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;