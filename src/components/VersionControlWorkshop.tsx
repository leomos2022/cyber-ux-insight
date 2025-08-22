import React from "react";

const VersionControlWorkshop = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Título Principal */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Control de Versiones y Despliegue Continuo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Taller completo sobre el control de versiones con Git, GitHub y estrategias de despliegue continuo 
            para desarrollo de software seguro y eficiente
          </p>
        </div>

        {/* Video Educativo sobre Control de Versiones */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            🎥 Importancia del Control de Versiones y Despliegue Continuo
          </h3>
          <div className="aspect-video bg-gray-100 rounded-lg mb-4">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/3RjQznt-8kE"
              title="Control de Versiones y Despliegue Continuo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-gray-700 text-sm">
            <strong>Video:</strong> "Git y GitHub para Principiantes" - Explica la importancia del control de versiones, 
            los riesgos del mal manejo de versiones, y las mejores prácticas para un despliegue seguro.
          </p>
        </div>

        {/* Flujo de Trabajo Git Completo */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            🔄 Flujo de Trabajo Git Completo
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">📥 Comandos Básicos de Git:</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-gray-50 p-3 rounded border">
                  <code className="text-blue-600">git init</code>
                  <span className="text-gray-600 ml-2">- Inicializar repositorio local</span>
                </div>
                <div className="bg-gray-50 p-3 rounded border">
                  <code className="text-blue-600">git clone [url]</code>
                  <span className="text-gray-600 ml-2">- Clonar repositorio remoto</span>
                </div>
                <div className="bg-gray-50 p-3 rounded border">
                  <code className="text-blue-600">git add .</code>
                  <span className="text-gray-600 ml-2">- Agregar cambios al staging</span>
                </div>
                <div className="bg-gray-50 p-3 rounded border">
                  <code className="text-blue-600">git commit -m "mensaje"</code>
                  <span className="text-gray-600 ml-2">- Crear commit con mensaje</span>
                </div>
                <div className="bg-gray-50 p-3 rounded border">
                  <code className="text-blue-600">git push origin main</code>
                  <span className="text-gray-600 ml-2">- Subir cambios al repositorio remoto</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">🌿 Estrategias de Branching:</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-green-50 p-3 rounded border border-green-200">
                  <strong className="text-green-800">main/master:</strong> Código de producción estable
                </div>
                <div className="bg-blue-50 p-3 rounded border border-blue-200">
                  <strong className="text-blue-800">develop:</strong> Rama de desarrollo integrado
                </div>
                <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                  <strong className="text-yellow-800">feature/*:</strong> Nuevas funcionalidades
                </div>
                <div className="bg-red-50 p-3 rounded border border-red-200">
                  <strong className="text-red-800">hotfix/*:</strong> Correcciones urgentes
                </div>
                <div className="bg-purple-50 p-3 rounded border border-purple-200">
                  <strong className="text-purple-800">release/*:</strong> Preparación de releases
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pipeline CI/CD */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            🚀 Pipeline de Integración y Despliegue Continuo (CI/CD)
          </h3>
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">1. Build</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Compilación del código</li>
                  <li>• Instalación de dependencias</li>
                  <li>• Verificación de sintaxis</li>
                  <li>• Generación de artefactos</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">2. Test</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Tests unitarios</li>
                  <li>• Tests de integración</li>
                  <li>• Tests de seguridad</li>
                  <li>• Análisis de calidad</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-800 mb-2">3. Deploy</h4>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Despliegue automático</li>
                  <li>• Verificación de salud</li>
                  <li>• Rollback automático</li>
                  <li>• Monitoreo continuo</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border">
              <h4 className="font-semibold text-gray-800 mb-2">🔄 Flujo Completo del Pipeline:</h4>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <span className="bg-blue-500 text-white px-3 py-1 rounded">Código</span>
                <span>→</span>
                <span className="bg-green-500 text-white px-3 py-1 rounded">Build</span>
                <span>→</span>
                <span className="bg-yellow-500 text-white px-3 py-1 rounded">Test</span>
                <span>→</span>
                <span className="bg-purple-500 text-white px-3 py-1 rounded">Deploy</span>
                <span>→</span>
                <span className="bg-red-500 text-white px-3 py-1 rounded">Monitoreo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Herramientas y Plataformas */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            🛠️ Herramientas y Plataformas de CI/CD
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">🔧 Control de Versiones:</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  <span><strong>Git:</strong> Sistema de control de versiones distribuido</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span><strong>GitHub:</strong> Plataforma de hosting de repositorios</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span><strong>GitLab:</strong> DevOps completo con CI/CD integrado</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span><strong>Bitbucket:</strong> Integración con herramientas Atlassian</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">🚀 CI/CD y Despliegue:</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  <span><strong>GitHub Actions:</strong> Automatización de workflows</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span><strong>Jenkins:</strong> Servidor de integración continua</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span><strong>Vercel:</strong> Despliegue automático para frontend</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  <span><strong>Docker:</strong> Contenedores para consistencia</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mejores Prácticas */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            ✅ Mejores Prácticas de Control de Versiones
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">📝 Commits y Mensajes:</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Commits pequeños y frecuentes</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Mensajes descriptivos y claros</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Convención de commits (Conventional Commits)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Un cambio por commit</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">🌿 Gestión de Branches:</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Branches de feature cortas</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Pull requests obligatorios</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Code review antes del merge</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Eliminación de branches después del merge</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Información del Repositorio GitHub */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            📚 Repositorio del Proyecto
          </h3>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg border">
              <h4 className="font-semibold text-gray-800 mb-2">🔗 Enlaces del Repositorio:</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">🌐 URL:</span>
                  <a 
                    href="https://github.com/leomos2022/cyber-ux-insight.git" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    https://github.com/leomos2022/cyber-ux-insight.git
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">📱 Demo:</span>
                  <a 
                    href="https://cyber-ux-insight.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 underline hover:text-green-800"
                  >
                    https://cyber-ux-insight.vercel.app/
                  </a>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h5 className="font-semibold text-blue-800 mb-2">📋 Estructura del Repositorio:</h5>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Frontend React con TypeScript</li>
                  <li>• Backend PHP para simulación</li>
                  <li>• Base de datos MySQL</li>
                  <li>• Configuración de despliegue</li>
                  <li>• Documentación completa</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h5 className="font-semibold text-green-800 mb-2">🚀 Despliegue Automático:</h5>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Integración con Vercel</li>
                  <li>• Deploy automático en push</li>
                  <li>• Preview deployments</li>
                  <li>• Monitoreo de rendimiento</li>
                  <li>• SSL automático</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Información del Caso de Estudio */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            📋 Caso de Estudio: Control de Versiones y Despliegue Continuo
          </h3>
          <div className="space-y-4 text-gray-700">
            <p>
              <strong>Contexto:</strong> Este taller se basa en el estudio de caso realizado en la semana 6, 
              donde se implementó una aplicación web vulnerable a inyección SQL para fines educativos.
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">🎯 Objetivos del Taller:</h4>
              <ul className="list-disc list-inside space-y-1 text-blue-700">
                <li>Retomar el taller de la semana 6 con Visual Studio Code y Jsonwebtoken</li>
                <li>Utilizar la base de datos e iniciar el repositorio en GIT</li>
                <li>Añadir el archivo index.html al repositorio</li>
                <li>Crear el repositorio en línea GitHub y enlazarlo con el local</li>
                <li>Subir el proyecto al repositorio en línea</li>
                <li>Esquematizar el proceso en un diagrama de flujo en Lucidchart</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">🔍 Análisis de Riesgos:</h4>
              <p className="text-green-700 mb-2">
                El diagrama de flujo debe describir los riesgos asociados al mal manejo de versiones en el desarrollo de software:
              </p>
              <ul className="list-disc list-inside space-y-1 text-green-700">
                <li>Pérdida de código por falta de respaldo</li>
                <li>Conflictos de merge no resueltos</li>
                <li>Despliegue de código no probado</li>
                <li>Falta de trazabilidad en cambios</li>
                <li>Vulnerabilidades de seguridad introducidas</li>
                <li>Dependencias desactualizadas</li>
                <li>Configuraciones de entorno inconsistentes</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-2">🛡️ Estrategias de Despliegue Seguro:</h4>
              <p className="text-purple-700 mb-2">
                El proceso debe ser secuencial y mostrar estrategias para asegurar el despliegue seguro:
              </p>
              <ul className="list-disc list-inside space-y-1 text-purple-700">
                <li>Control de versiones con Git y GitHub</li>
                <li>Branches separados para desarrollo y producción</li>
                <li>Pull requests con code review obligatorio</li>
                <li>Testing automático antes del deploy</li>
                <li>Ambiente de staging para validaciones</li>
                <li>Monitoreo continuo post-despliegue</li>
                <li>Rollback automático en caso de fallos</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-800 mb-2">📝 Requisitos de Presentación:</h4>
              <ul className="list-disc list-inside space-y-1 text-orange-700">
                <li>Estructura clara y coherente del diagrama</li>
                <li>Proceso secuencial y bien definido</li>
                <li>Uso correcto de normas de redacción APA</li>
                <li>Inclusión de título, nombre completo, curso, semana, docente y fecha</li>
                <li>Preparación para participación en el foro de la semana</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Información Adicional */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            📚 Recursos y Enlaces Útiles
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Herramientas Utilizadas:</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  🔧 <span>Git para control de versiones</span>
                </li>
                <li className="flex items-center gap-2">
                  🚀 <span>GitHub para repositorio remoto</span>
                </li>
                <li className="flex items-center gap-2">
                  ⚡ <span>Vercel para despliegue automático</span>
                </li>
                <li className="flex items-center gap-2">
                  📊 <span>Lucidchart para diagramas</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Mejores Prácticas:</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  ✅ <span>Commits regulares y descriptivos</span>
                </li>
                <li className="flex items-center gap-2">
                  ✅ <span>Branches para features</span>
                </li>
                <li className="flex items-center gap-2">
                  ✅ <span>Pull requests con review</span>
                </li>
                <li className="flex items-center gap-2">
                  ✅ <span>Testing antes del deploy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VersionControlWorkshop;
