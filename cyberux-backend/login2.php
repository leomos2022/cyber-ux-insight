<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

require_once 'config.php';
$conn = getConnection();

if (isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Vulnerable a inyección SQL (para fines educativos)
    $sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
    $result = $conn->query($sql);

    if ($result && $result->num_rows > 0) {
        echo "Login exitoso";
    } else {
        echo "Usuario o contraseña incorrectos";
    }
} else {
    echo "Faltan datos de usuario o contraseña";
}

$conn->close();
?>