<?php
// Healthcheck para Railway
header('Content-Type: application/json');

try {
    // Verificar si las variables de entorno están configuradas
    $db_host = $_ENV['DB_HOST'] ?? 'localhost';
    $db_user = $_ENV['DB_USER'] ?? 'root';
    $db_pass = $_ENV['DB_PASS'] ?? '';
    $db_name = $_ENV['DB_NAME'] ?? 'cyberux';
    
    // Intentar conexión a la base de datos
    $conn = new mysqli($db_host, $db_user, $db_pass, $db_name);
    
    if ($conn->connect_error) {
        throw new Exception("Error de conexión: " . $conn->connect_error);
    }
    
    // Verificar que la tabla users existe
    $result = $conn->query("SHOW TABLES LIKE 'users'");
    if ($result->num_rows == 0) {
        throw new Exception("La tabla 'users' no existe");
    }
    
    $response = [
        'status' => 'success',
        'message' => 'Backend funcionando correctamente',
        'database' => 'conectado',
        'port' => $_ENV['PORT'] ?? 'no configurado'
    ];
    
} catch (Exception $e) {
    $response = [
        'status' => 'error',
        'message' => $e->getMessage(),
        'database' => 'error',
        'port' => $_ENV['PORT'] ?? 'no configurado'
    ];
}

echo json_encode($response, JSON_PRETTY_PRINT);
?>