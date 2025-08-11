# 🎨 Guía de Personalización del Portfolio

Esta guía te ayudará a modificar el portfolio con tu información personal paso a paso.

## 📝 Paso 1: Información Personal

### Archivo principal: `client/src/data/portfolioData.ts`

```typescript
// EDITAR: Cambia esta información por la tuya
export const portfolioData: PortfolioData = {
  personal: {
    name: "Tu Nombre Completo",           // ✏️ Tu nombre real
    title: "Estudiante de Ingeniería",    // ✏️ Tu título/carrera
    description: "Tu descripción aquí",   // ✏️ Frase que te describa
    bio: "Tu biografía extendida...",     // ✏️ Historia personal
    education: "Detalles de estudios...", // ✏️ Información académica
    email: "tu@email.com",               // ✏️ Tu email real
    location: "Tu Ciudad, País",         // ✏️ Tu ubicación
    profileImage: "URL_DE_TU_FOTO",      // 📸 Enlace a tu foto
  },
  // ... resto de la configuración
}
