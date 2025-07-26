-- Script para configurar la base de datos en Railway
-- Este archivo se ejecutará automáticamente al desplegar

CREATE DATABASE IF NOT EXISTS cyberux;
USE cyberux;

-- Crear tabla de usuarios vulnerable para fines educativos
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertar usuarios de prueba
INSERT INTO users (username, password) VALUES 
('admin', 'admin123'),
('test', 'test123'),
('usuario1', 'pass123'),
('usuario2', 'mypass');

-- Crear tabla para logs de intentos fallidos (para la versión segura)
CREATE TABLE IF NOT EXISTS login_attempts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    ip_address VARCHAR(45) NOT NULL,
    attempt_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    success BOOLEAN DEFAULT FALSE
); 