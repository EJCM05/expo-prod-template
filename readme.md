# 🚀 Expo Production Template (TypeScript Edition)

### Arquitectura de Eficiencia Máxima para el Mundo Real

Este repositorio es una base de grado producción para aplicaciones móviles con **Expo**. Ahora migrado a **TypeScript** para validaciones de errores tempranas y una experiencia de desarrollo superior, manteniendo la agilidad para construir validaciones en Android de forma rápida.

---

## 🛠 Stack Tecnológico

- **Language:** [TypeScript](https://www.typescriptlang.org/) - _Seguridad de tipos y autocompletado._
- **Framework:** [Expo SDK 54](https://expo.dev/) (Managed Workflow) - _Abstracción nativa total._
- **Routing:** [Expo Router](https://docs.expo.dev/router/introduction/) - _Navegación basada en archivos._
- **Estilos:** [NativeWind v4](https://www.nativewind.dev/) - _Tailwind CSS para componentes nativos._
- **Estado Global:** [Zustand](https://github.com/pmndrs/zustand) - _Gestión de estado atómica y ligera con tipos._
- **Gestión de Datos:** [TanStack Query v5](https://tanstack.com/query/latest) - _Caché de servidor y sincronización asíncrona._
- **Validación:** [Zod](https://zod.dev/) & [React Hook Form](https://react-hook-form.com/).

---

## 🔐 Variables de Entorno (.env)

El proyecto soporta variables de entorno nativas de Expo.

1. Crea un archivo `.env` en la raíz (basado en `.env.example`).
2. Las variables deben comenzar con `EXPO_PUBLIC_` para ser accesibles en el código.

```typescript
// Ejemplo de uso:
const apiUrl = process.env.EXPO_PUBLIC_API_URL;
```

---

## ⚡️ Inicio Rápido

1. **Clonar e instalar:**

   ```bash
   npm install
   ```

2. **Configurar entorno:**

   ```bash
   cp .env.example .env
   ```

3. **Iniciar proyecto:**
   ```bash
   npx expo start
   ```

---

## 📁 Estructura del Proyecto

- `app/`: Directorio de rutas (Expo Router).
- `src/api/`: Servicios y llamadas a APIs.
- `src/components/ui/`: Componentes atómicos reutilizables (Typed).
- `src/store/`: Gestión de estado con Zustand (Typed).
- `src/utils/`: Schemas de validación, constantes y helpers.
- `src/hooks/`: Hooks personalizados.

---

## 📱 Validación en Android

Diseñado para pruebas rápidas:

- Configuración de `expo-dev-client` lista.
- Tematización oscura por defecto con Slate-900.
- Loader global y manejo de errores pre-configurado.
