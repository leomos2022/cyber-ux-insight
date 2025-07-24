<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$host = "sql305.infinityfree.com";
$user = "if0_39546553";
$pass = "fwhB0S7BkA";
$db   = "if0_39546553_cyberux";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
} else {
    echo "¡Conexión exitosa!";
}
?>