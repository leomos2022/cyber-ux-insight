<?php
// Archivo de inicio simple para Railway
echo "Cyber UX Backend iniciado correctamente en el puerto: " . $_ENV['PORT'];
echo "\nVariables de entorno disponibles:";
echo "\n- DB_HOST: " . ($_ENV['DB_HOST'] ?? 'No configurado');
echo "\n- DB_USER: " . ($_ENV['DB_USER'] ?? 'No configurado');
echo "\n- DB_NAME: " . ($_ENV['DB_NAME'] ?? 'No configurado');
?> 