<?php
// Configuración local con SQLite para pruebas
// Esta es una solución temporal para pruebas locales

function getLocalConnection() {
    // Crear base de datos SQLite en memoria para pruebas
    $conn = new SQLite3(':memory:');
    
    // Crear tabla users
    $conn->exec("CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        password TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )");
    
    // Insertar usuarios de prueba
    $conn->exec("INSERT INTO users (username, password) VALUES 
        ('admin', 'admin123'),
        ('test', 'test123'),
        ('usuario1', 'pass123'),
        ('usuario2', 'mypass')");
    
    return $conn;
}

// Función para ejecutar consultas SQL
function executeQuery($conn, $sql) {
    $result = $conn->query($sql);
    $rows = [];
    while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
        $rows[] = $row;
    }
    return $rows;
}
?> 