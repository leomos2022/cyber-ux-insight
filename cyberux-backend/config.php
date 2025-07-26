<?php
// Configuración para diferentes entornos
$is_production = getenv('RAILWAY_ENVIRONMENT') || getenv('RENDER');

if ($is_production) {
    // Configuración para Railway/Render
    $host = getenv('DB_HOST') ?: 'localhost';
    $user = getenv('DB_USER') ?: 'root';
    $pass = getenv('DB_PASS') ?: '';
    $db   = getenv('DB_NAME') ?: 'cyberux';
} else {
    // Configuración local
    $host = "localhost";
    $user = "root";
    $pass = "";
    $db   = "cyberux";
}

// Función para obtener conexión
function getConnection() {
    global $host, $user, $pass, $db;
    
    $conn = new mysqli($host, $user, $pass, $db);
    
    if ($conn->connect_error) {
        error_log("Conexión fallida: " . $conn->connect_error);
        die("Error de conexión a la base de datos");
    }
    
    return $conn;
}
?> 