#!/bin/bash

# Script para preparar el despliegue
echo "🚀 Preparando despliegue..."

# Cargar entorno zsh
source ~/.zshrc

# Navegar al directorio del proyecto
cd /home/aitor/proyectos/mw/esports/project

# Limpiar build anterior
echo "🧹 Limpiando build anterior..."
rm -rf dist/

# Instalar dependencias (por si hay cambios)
echo "📦 Verificando dependencias..."
npm install

# Generar build de producción
echo "🔨 Generando build..."
npm run build

# Verificar que el build fue exitoso
if [ -d "dist" ]; then
    echo "✅ Build generado exitosamente en ./dist/"
    echo "📁 Archivos listos para subir:"
    ls -la dist/
    echo ""
    echo "📋 Instrucciones:"
    echo "1. Sube todo el contenido de la carpeta 'dist/' a tu servidor"
    echo "2. Asegúrate de que el archivo .htaccess esté incluido"
    echo "3. La aplicación estará disponible en tu dominio"
else
    echo "❌ Error: No se pudo generar el build"
    exit 1
fi
