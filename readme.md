# 🚀 Expo Production Template (JS Edition)

### Arquitectura de Eficiencia Máxima para el Mundo Real

Este repositorio es una base (boilerplate) de grado producción para aplicaciones móviles con **Expo**. Está diseñado bajo el principio de la **Navaja de Ockham**: eliminando el "ruido" de TypeScript y las configuraciones innecesarias, permitiendo un desarrollo ágil, funcional y altamente optimizado.

---

## 🛠 Stack Tecnológico (No-Noise)

- **Framework:** [Expo SDK 54](https://expo.dev/) (Managed Workflow) - _Abstracción nativa total._
- **Routing:** [Expo Router](https://docs.expo.dev/router/introduction/) - _Navegación basada en archivos (Estilo SvelteKit)._
- **Estilos:** [NativeWind](https://www.nativewind.dev/) - _Tailwind CSS para componentes nativos._
- **Estado Global:** [Zustand](https://github.com/pmndrs/zustand) - _Gestión de estado atómica y ligera._
- **Gestión de Datos:** [TanStack Query v5](https://tanstack.com/query/latest) - _Caché de servidor y sincronización asíncrona._
- **Infraestructura:** Soporte para `expo-dev-client` y `expo-updates` (OTA).

---

## ⚡️ Inicio Rápido (Deploy Quirúrgico)

# 1. Clonar el template

npx degit tu-usuario/expo-prod-template mi-nueva-app

# 2. Entrar al directorio

cd mi-nueva-app

# 3. Instalar dependencias (Fix para conflictos de React 19)

npm install --legacy-peer-deps
