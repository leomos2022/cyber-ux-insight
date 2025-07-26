#!/bin/bash

# Script para configurar base de datos MySQL en Railway
# Uso: ./setup-railway-db.sh [RAILWAY_TOKEN] [PROJECT_ID]

RAILWAY_TOKEN=$1
PROJECT_ID=$2

if [ -z "$RAILWAY_TOKEN" ] || [ -z "$PROJECT_ID" ]; then
    echo "Uso: ./setup-railway-db.sh [RAILWAY_TOKEN] [PROJECT_ID]"
    echo ""
    echo "Para obtener tu PROJECT_ID:"
    echo "1. Ve a tu proyecto en Railway"
    echo "2. La URL será: https://railway.app/project/[PROJECT_ID]"
    echo "3. Copia el PROJECT_ID de la URL"
    echo ""
    echo "Para obtener tu RAILWAY_TOKEN:"
    echo "1. Ve a Railway → Account Settings → Tokens"
    echo "2. Crea un nuevo token"
    echo "3. Copia el token generado"
    exit 1
fi

echo "🚀 Configurando base de datos MySQL en Railway..."

# Crear base de datos MySQL
echo "📦 Creando base de datos MySQL..."
curl -X POST \
  "https://railway.app/api/v2/projects/$PROJECT_ID/services" \
  -H "Authorization: Bearer $RAILWAY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "cyberux-mysql",
    "source": {
      "type": "image",
      "image": "mysql:8.0"
    },
    "variables": {
      "MYSQL_ROOT_PASSWORD": "cyberux123",
      "MYSQL_DATABASE": "cyberux"
    }
  }'

echo ""
echo "✅ Base de datos MySQL creada!"
echo ""
echo "🔧 Ahora configura las variables de entorno en tu servicio principal:"
echo "DB_HOST=cyberux-mysql"
echo "DB_USER=root"
echo "DB_PASS=cyberux123"
echo "DB_NAME=cyberux"
echo ""
echo "📝 Ejecuta el script SQL para crear las tablas..." 