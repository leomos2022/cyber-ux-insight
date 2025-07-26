// API route para Vercel en JavaScript con base de datos en memoria
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
    // Base de datos en memoria para demostración
    const users = [
      { id: 1, username: 'admin', password: 'admin123' },
      { id: 2, username: 'test', password: 'test123' },
      { id: 3, username: 'usuario1', password: 'pass123' },
      { id: 4, username: 'usuario2', password: 'mypass' }
    ];

    const { username, password } = req.body;

    // Vulnerable a inyección SQL (para fines educativos)
    // Simulamos la consulta SQL vulnerable
    const sqlQuery = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
    
    // Simulamos el resultado de la consulta vulnerable
    let foundUser = null;
    
    // Si es una inyección SQL, permitir acceso
    if (username.includes("' OR") || username.includes("' OR '1'='1") || 
        username.includes("admin' OR") || username.includes("admin' #")) {
      foundUser = users[0]; // Dar acceso al primer usuario
    } else {
      // Búsqueda normal
      foundUser = users.find(user => 
        user.username === username && user.password === password
      );
    }

    if (foundUser) {
      res.status(200).json({ 
        status: 'success', 
        message: 'Login exitoso',
        user: { username: foundUser.username, id: foundUser.id }
      });
    } else {
      res.status(401).json({ 
        status: 'error', 
        message: 'Usuario o contraseña incorrectos',
        attemptedQuery: sqlQuery
      });
    }

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      status: 'error', 
      message: 'Error interno del servidor',
      details: error.message 
    });
  }
} 