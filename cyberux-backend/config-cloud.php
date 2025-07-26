<?php
// Configuración para base de datos en la nube (InfinityFree)
// Esta es una solución temporal mientras se configura Railway

// Configuración de InfinityFree (gratuito)
$host = "sql305.infinityfree.com";
$user = "if0_39546553";
$pass = "fwhB0S7BkA";
$db   = "if0_39546553_cyberux";

function getCloudConnection() {
    global $host, $user, $pass, $db;
    
    $conn = new mysqli($host, $user, $pass, $db);
    
    if ($conn->connect_error) {
        error_log("Conexión cloud fallida: " . $conn->connect_error);
        die("Error de conexión a la base de datos cloud");
    }
    
    return $conn;
}

// Crear base de datos y tablas si no existen
function setupCloudDatabase() {
    global $host, $user, $pass, $db;
    
    $conn = new mysqli($host, $user, $pass, $db);
    
    if ($conn->connect_error) {
        die("Error de conexión: " . $conn->connect_error);
    }
    
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
    
    echo "Base de datos cloud configurada correctamente\n";
    $conn->close();
}

// Ejecutar configuración si se llama directamente
if (basename(__FILE__) == basename($_SERVER["SCRIPT_FILENAME"])) {
    setupCloudDatabase();
}
?> 