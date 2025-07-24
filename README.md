# Cyber UX Insight

**Asignatura:** NRC-4922-Seguridad en el Desarrollo de Software  
**Universidad:** Corporación Universitaria Uniminuto de Dios

---

## Descripción

Este proyecto es un estudio de caso interactivo sobre **UX y Seguridad en Aplicaciones Web**, enfocado en la demostración y análisis de vulnerabilidades de inyección SQL. Permite a los estudiantes experimentar de forma práctica cómo una mala implementación de autenticación puede ser explotada y cómo mitigar estos riesgos.

---

## Objetivos de la Actividad
- Comprender el impacto de la inyección SQL en aplicaciones web.
- Identificar malas prácticas de desarrollo inseguro.
- Experimentar con ataques reales en un entorno controlado.
- Reflexionar sobre la importancia de la validación y el uso de buenas prácticas de seguridad.

---

## Estructura del Proyecto
- **Frontend:** React + Vite (interfaz educativa y práctica)
- **Backend:** PHP (login vulnerable a inyección SQL)
- **Base de datos:** MySQL (usuarios de prueba)

---

## Instrucciones de Uso

### 1. Requisitos
- XAMPP (o stack LAMP/WAMP similar)
- Node.js y npm

### 2. Instalación
1. Clona este repositorio:
   ```sh
   git clone https://github.com/leomos2022/cyber-ux-insight.git
   ```
2. Coloca la carpeta `cyberux-backend` en el directorio `htdocs` de XAMPP.
3. Instala dependencias del frontend:
   ```sh
   cd cyberux
   npm install
   ```
4. Inicia el frontend:
   ```sh
   npm run dev
   ```
5. Asegúrate de que Apache y MySQL estén activos en XAMPP.

### 3. Configuración de la Base de Datos
Ejecuta en phpMyAdmin o consola MySQL:
```sql
CREATE DATABASE IF NOT EXISTS cyberux;
USE cyberux;
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL
);
INSERT INTO users (username, password) VALUES ('admin', 'admin123'), ('test', 'test123');
```

---

## Práctica de Inyección SQL

En la sección de simulación de ataque SQL, encontrarás un formulario vulnerable. Prueba los siguientes payloads:

- **Bypass de autenticación:**
  - Usuario: `' OR '1'='1`
  - Contraseña: cualquier cosa
- **Obtener todos los usuarios:**
  - Usuario: `admin' OR 1=1 -- `
  - Contraseña: cualquier cosa
- **Prueba de error:**
  - Usuario: `admin' OR 'a'='a`
  - Contraseña: cualquier cosa
- **Otra variante:**
  - Usuario: `admin' #`
  - Contraseña: cualquier cosa

Observa el resultado tras cada intento y reflexiona sobre cómo la inyección SQL puede comprometer la seguridad de una aplicación web.

---

## Créditos
- **Desarrollado para:** NRC-4922-Seguridad en el Desarrollo de Software
- **Institución:** Corporación Universitaria Uniminuto de Dios
- **Autor:** [Tu Nombre Aquí]
