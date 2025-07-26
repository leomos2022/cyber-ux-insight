// Configuración de URLs del backend según el entorno
export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 
  (import.meta.env.DEV 
    ? "http://localhost:8000" 
    : "https://cyberux-backend-production.up.railway.app"
  );

export const API_ENDPOINTS = {
  LOGIN_VULNERABLE: `${BACKEND_URL}/login2-local.php`,
  LOGIN_SECURE: `${BACKEND_URL}/hashseguro.php`,
  TEST: `${BACKEND_URL}/test.php`
}; 