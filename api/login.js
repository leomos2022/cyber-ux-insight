// API route para Vercel en JavaScript
import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'error', message: 'Método no permitido' });
  }

  try {
    // Configuración de base de datos en la nube
    const connection = await mysql.createConnection({
      host: 'sql305.infinityfree.com',
      user: 'if0_39546553',
      password: 'fwhB0S7BkA',
      database: 'if0_39546553_cyberux'
    });

    // Crear tabla si no existe
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) NOT NULL,
        password VARCHAR(50) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Insertar usuarios de prueba
    await connection.execute(`
      INSERT IGNORE INTO users (username, password) VALUES 
        ('admin', 'admin123'),
        ('test', 'test123'),
        ('usuario1', 'pass123'),
        ('usuario2', 'mypass')
    `);

    const { username, password } = req.body;

    // Vulnerable a inyección SQL (para fines educativos)
    const sql = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
    const [rows] = await connection.execute(sql);

    if (rows.length > 0) {
      res.status(200).json({ status: 'success', message: 'Login exitoso' });
    } else {
      res.status(401).json({ status: 'error', message: 'Usuario o contraseña incorrectos' });
    }

    await connection.end();

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      status: 'error', 
      message: 'Error de conexión con la base de datos',
      details: error.message 
    });
  }
} 