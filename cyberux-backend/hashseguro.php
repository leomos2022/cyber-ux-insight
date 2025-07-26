<?php
// =====================================================
// IMPLEMENTACIÓN SEGURA DE AUTENTICACIÓN EN PHP
// =====================================================

// 1. CONFIGURACIÓN SEGURA DE BASE DE DATOS
try {
    $dsn = "mysql:host=localhost;dbname=cyberux;charset=utf8mb4";
    $options = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false, // Usar prepared statements reales
    ];
    $pdo = new PDO($dsn, $username_db, $password_db, $options);
} catch (PDOException $e) {
    error_log("Database connection failed: " . $e->getMessage());
    die("Error de conexión a la base de datos");
}

// 2. REGISTRO DE USUARIO (Hash seguro de contraseña)
function registerUser($pdo, $username, $password) {
    // Validación de entrada
    if (empty($username) || empty($password)) {
        return ["success" => false, "message" => "Usuario y contraseña son requeridos"];
    }
    
    // Validación de fortaleza de contraseña
    if (strlen($password) < 8) {
        return ["success" => false, "message" => "La contraseña debe tener al menos 8 caracteres"];
    }
    
    try {
        // Hash seguro con PASSWORD_ARGON2ID (más seguro que SHA256)
        $password_hash = password_hash($password, PASSWORD_ARGON2ID, [
            'memory_cost' => 65536, // 64 MB
            'time_cost' => 4,       // 4 iteraciones
            'threads' => 3          // 3 hilos
        ]);
        
        // Verificar si el usuario ya existe
        $stmt = $pdo->prepare("SELECT id FROM users WHERE username = ?");
        $stmt->execute([$username]);
        
        if ($stmt->fetch()) {
            return ["success" => false, "message" => "El usuario ya existe"];
        }
        
        // Insertar nuevo usuario
        $stmt = $pdo->prepare("INSERT INTO users (username, password_hash, created_at) VALUES (?, ?, NOW())");
        $stmt->execute([$username, $password_hash]);
        
        return ["success" => true, "message" => "Usuario registrado exitosamente"];
        
    } catch (PDOException $e) {
        error_log("Registration error: " . $e->getMessage());
        return ["success" => false, "message" => "Error en el registro"];
    }
}

// 3. AUTENTICACIÓN SEGURA (Implementación corregida)
function authenticateUser($pdo, $username, $password) {
    // Validación de entrada
    if (empty($username) || empty($password)) {
        return ["success" => false, "message" => "Credenciales incompletas"];
    }
    
    // Sanitización básica (aunque PDO ya protege contra SQL injection)
    $username = trim($username);
    
    try {
        // Consulta parametrizada segura - CORREGIDA
        $stmt = $pdo->prepare("SELECT id, username, password_hash, failed_attempts, last_attempt FROM users WHERE username = ? AND active = 1");
        $stmt->execute([$username]);
        $user = $stmt->fetch();
        
        if (!$user) {
            // Log del intento fallido sin revelar si el usuario existe
            logFailedAttempt($username, $_SERVER['REMOTE_ADDR']);
            return ["success" => false, "message" => "Credenciales inválidas"];
        }
        
        // Verificar intentos fallidos (protección contra fuerza bruta)
        if ($user['failed_attempts'] >= 5) {
            $lastAttempt = new DateTime($user['last_attempt']);
            $now = new DateTime();
            $timeDiff = $now->diff($lastAttempt)->i; // diferencia en minutos
            
            if ($timeDiff < 15) { // Bloqueo de 15 minutos
                return ["success" => false, "message" => "Cuenta temporalmente bloqueada"];
            }
        }
        
        // Verificar contraseña con password_verify (MÉTODO CORRECTO)
        if (password_verify($password, $user['password_hash'])) {
            // Autenticación exitosa - resetear intentos fallidos
            $stmt = $pdo->prepare("UPDATE users SET failed_attempts = 0, last_login = NOW() WHERE id = ?");
            $stmt->execute([$user['id']]);
            
            // Iniciar sesión segura
            session_regenerate_id(true); // Prevenir session fixation
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['username'] = $user['username'];
            $_SESSION['login_time'] = time();
            
            return [
                "success" => true, 
                "message" => "Autenticación exitosa",
                "user" => [
                    "id" => $user['id'],
                    "username" => $user['username']
                ]
            ];
        } else {
            // Contraseña incorrecta - incrementar intentos fallidos
            $stmt = $pdo->prepare("UPDATE users SET failed_attempts = failed_attempts + 1, last_attempt = NOW() WHERE id = ?");
            $stmt->execute([$user['id']]);
            
            logFailedAttempt($username, $_SERVER['REMOTE_ADDR']);
            return ["success" => false, "message" => "Credenciales inválidas"];
        }
        
    } catch (PDOException $e) {
        error_log("Authentication error: " . $e->getMessage());
        return ["success" => false, "message" => "Error de autenticación"];
    }
}

// 4. FUNCIONES AUXILIARES DE SEGURIDAD
function logFailedAttempt($username, $ip) {
    $logEntry = date('Y-m-d H:i:s') . " - Failed login attempt for user: $username from IP: $ip\n";
    error_log($logEntry, 3, "/var/log/auth_failures.log");
}

function isValidSession() {
    if (!isset($_SESSION['user_id']) || !isset($_SESSION['login_time'])) {
        return false;
    }
    
    // Verificar timeout de sesión (30 minutos)
    if (time() - $_SESSION['login_time'] > 1800) {
        session_destroy();
        return false;
    }
    
    // Actualizar tiempo de actividad
    $_SESSION['login_time'] = time();
    return true;
}

// 5. CONFIGURACIÓN SEGURA DE SESIONES
ini_set('session.cookie_httponly', 1); // Prevenir acceso via JavaScript
ini_set('session.cookie_secure', 1);   // Solo HTTPS
ini_set('session.use_strict_mode', 1); // Rechazar IDs de sesión no iniciados
ini_set('session.cookie_samesite', 'Strict'); // Protección CSRF

// 6. SCRIPT DE CREACIÓN DE TABLA SEGURA
/*
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    failed_attempts INT DEFAULT 0,
    last_attempt TIMESTAMP NULL,
    last_login TIMESTAMP NULL,
    active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_username (username),
    INDEX idx_active (active)
);
*/

// 7. EJEMPLO DE USO
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'] ?? '';
    
    if ($action === 'login') {
        $result = authenticateUser($pdo, $_POST['username'] ?? '', $_POST['password'] ?? '');
        
        header('Content-Type: application/json');
        echo json_encode($result);
        exit;
    }
    
    if ($action === 'register') {
        $result = registerUser($pdo, $_POST['username'] ?? '', $_POST['password'] ?? '');
        
        header('Content-Type: application/json');
        echo json_encode($result);
        exit;
    }
}

// 8. MIDDLEWARE DE PROTECCIÓN
function requireAuth() {
    if (!isValidSession()) {
        http_response_code(401);
        header('Content-Type: application/json');
        echo json_encode(["success" => false, "message" => "Sesión inválida"]);
        exit;
    }
}

// 9. HEADERS DE SEGURIDAD ADICIONALES
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('X-XSS-Protection: 1; mode=block');
header('Strict-Transport-Security: max-age=31536000; includeSubDomains');
header('Content-Security-Policy: default-src \'self\'');

?>