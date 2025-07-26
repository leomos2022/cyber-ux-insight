<?php
// Archivo principal para Railway
header('Content-Type: application/json');

$response = [
    'status' => 'success',
    'message' => 'Cyber UX Backend funcionando correctamente',
    'timestamp' => date('Y-m-d H:i:s'),
    'environment' => $_ENV['RAILWAY_ENVIRONMENT'] ?? 'development',
    'port' => $_ENV['PORT'] ?? 'no configurado',
    'database' => 'configurada'
];

// Verificar conexión a base de datos
try {
    require_once 'config-cloud.php';
    $conn = getCloudConnection();
    
    // Verificar que la tabla users existe
    $result = $conn->query("SHOW TABLES LIKE 'users'");
    if ($result && $result->num_rows > 0) {
        $response['database'] = 'conectada y funcionando';
        $response['users_count'] = $conn->query("SELECT COUNT(*) as count FROM users")->fetch_assoc()['count'];
    } else {
        $response['database'] = 'tabla users no encontrada';
    }
    
    $conn->close();
} catch (Exception $e) {
    $response['database'] = 'error: ' . $e->getMessage();
}

echo json_encode($response, JSON_PRETTY_PRINT);
?> 