# 📚 Guía de Despliegue en Vercel

Esta guía te ayudará a subir tu portfolio a Vercel de forma gratuita paso a paso.

## 🚀 Paso 1: Preparar el código

1. **Subir a GitHub:**
   - Crea un repositorio nuevo en GitHub
   - Sube todos los archivos de tu proyecto
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/tu-portfolio.git
   git push -u origin main
   ```

## 🌐 Paso 2: Desplegar en Vercel

### Opción A: Conectar GitHub directamente
1. Ve a [vercel.com](https://vercel.com)
2. Crea una cuenta (puedes usar tu GitHub)
3. Haz clic en "New Project"
4. Importa tu repositorio de GitHub
5. Configura los siguientes settings:
   - **Framework Preset:** Vite
   - **Root Directory:** `./` (por defecto)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist/public`
   - **Install Command:** `npm install`

### Opción B: Deploy desde CLI
1. Instala Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Desde la carpeta de tu proyecto:
   ```bash
   vercel
   ```

3. Sigue las instrucciones:
   - ¿Link to existing project? → No
   - ¿What's your project's name? → tu-portfolio
   - ¿In which directory is your code located? → ./
   - ¿Want to override settings? → Yes
   - ¿What's your Build Command? → `npm run build`
   - ¿What's your Output Directory? → `dist/public`
   - ¿What's your Development Command? → `npm run dev`

## ⚙️ Paso 3: Configuración adicional

### Variables de entorno (si las necesitas)
1. En tu dashboard de Vercel, ve a tu proyecto
2. Settings → Environment Variables
3. Agrega las variables que necesites (ej: API keys)

### Dominio personalizado (opcional)
1. Settings → Domains
2. Agrega tu dominio personalizado
3. Configura los DNS según las instrucciones

## 🔄 Paso 4: Actualizaciones automáticas

Una vez configurado, cada vez que hagas push a tu repositorio de GitHub, Vercel automáticamente:
1. Detectará los cambios
2. Creará un nuevo build
3. Desplegará la nueva versión

## 📱 URLs importantes

- **Dashboard:** https://vercel.com/dashboard
- **Tu portfolio:** `https://tu-portfolio.vercel.app` (o tu dominio personalizado)
- **Documentación:** https://vercel.com/docs

## 🛠️ Solución de problemas comunes

### Error de build
- Verifica que `npm run build` funcione localmente
- Revisa los logs en el dashboard de Vercel
- Asegúrate de que todas las dependencias estén en `package.json`

### Página no carga
- Verifica que el Output Directory sea `dist/public`
- Revisa la consola del navegador para errores

### Assets no cargan
- Asegúrate de usar rutas relativas
- Verifica que las imágenes estén en la carpeta correcta

## 🎉 ¡Listo!

Tu portfolio ya está en línea. Comparte el enlace con reclutadores y en tus redes profesionales.

### Consejos adicionales:
- Configura Google Analytics para hacer seguimiento de visitas
- Agrega un favicon personalizado
- Considera usar un dominio personalizado (.com, .dev, etc.)
- Optimiza las imágenes para mejorar la velocidad de carga
