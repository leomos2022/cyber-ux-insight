<?php
// Configuración local para pruebas
// Usar esta configuración mientras se configura Railway

$host = "localhost";
$user = "root";
$pass = "";
$db   = "cyberux";

function getLocalConnection() {
    global $host, $user, $pass, $db;
    
    $conn = new mysqli($host, $user, $pass, $db);
    
    if ($conn->connect_error) {
        error_log("Conexión local fallida: " . $conn->connect_error);
        die("Error de conexión a la base de datos local");
    }
    
    return $conn;
}

// Crear base de datos y tablas si no existen
function setupLocalDatabase() {
    global $host, $user, $pass;
    
    // Conectar sin especificar base de datos
    $conn = new mysqli($host, $user, $pass);
    
    if ($conn->connect_error) {
        die("Error de conexión: " . $conn->connect_error);
    }
    
    // Crear base de datos
    $sql = "CREATE DATABASE IF NOT EXISTS cyberux";
    if (!$conn->query($sql)) {
        die("Error creando base de datos: " . $conn->error);
    }
    
    // Seleccionar base de datos
    $conn->select_db("cyberux");
    
    // Crear tabla users
    $sql = "CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) NOT NULL,
        password VARCHAR(50) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )";
    
    if (!$conn->query($sql)) {
        die("Error creando tabla users: " . $conn->error);
    }
    
    // Insertar usuarios de prueba
    $sql = "INSERT IGNORE INTO users (username, password) VALUES 
        ('admin', 'admin123'),
        ('test', 'test123'),
        ('usuario1', 'pass123'),
        ('usuario2', 'mypass')";
    
    if (!$conn->query($sql)) {
        die("Error insertando usuarios: " . $conn->error);
    }
    
    echo "Base de datos local configurada correctamente\n";
    $conn->close();
}

// Ejecutar configuración si se llama directamente
if (basename(__FILE__) == basename($_SERVER["SCRIPT_FILENAME"])) {
    setupLocalDatabase();
}
?> 