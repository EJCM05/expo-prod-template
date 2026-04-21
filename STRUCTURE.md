# 🏗️ Estructura del Proyecto (Expo Prod Template)

Esta plantilla utiliza una arquitectura modular diseñada para escalar y facilitar el mantenimiento.

## 📁 Directorios Principales

### 🚀 `app/` (Expo Router)

Contiene las rutas de la aplicación. Expo Router utiliza el sistema de archivos para definir la navegación.

- `_layout.js`: Layout raíz. Aquí se configuran los Providers globales (QueryClient, Theme, etc.).
- `+not-found.js`: Pantalla de error 404.
- `(tabs)/`: Grupo de rutas para navegación por pestañas (opcional).
- `index.js`: Pantalla de inicio.

### 🛠️ `src/` (Lógica de Negocio y UI)

Para mantener la carpeta `app/` limpia de lógica que no sea de ruteo.

- **`api/`**: Servicios de fetch y configuraciones de Axios/Fetch. Centraliza todas las llamadas a APIs externas.
- **`components/ui/`**: Componentes visuales atómicos y reutilizables (Botones, Inputs, Loaders, ErrorMessages).
- **`hooks/`**: Custom Hooks para lógica reutilizable (ej: `useAuth`, `usePermissions`).
- **`store/`**: Gestión de estado global con Zustand.
- **`utils/`**: Funciones de ayuda (formateadores de fechas, validadores, constantes matemáticas).
- **`constants/`**: Variables globales como colores de marca, keys de API, endpoints.
- **`context/`**: React Context para estados que no requieren la complejidad de Zustand.

## 🎨 Estilos con NativeWind (Tailwind CSS)

Utilizamos clases de Tailwind directamente en la propiedad `className`.

```jsx
<View className="flex-1 bg-slate-900 justify-center items-center">
  <Text className="text-white font-bold">Hola Mundo</Text>
</View>
```

## 🔄 Manejo de Datos (TanStack Query)

El proyecto viene configurado con React Query para manejar:

- Caché de datos.
- Estados de carga automática.
- Reintentos en caso de error.

## 📝 Manejo de Formularios (Estándar de Producción)

El proyecto incluye un sistema de formularios robusto basado en:

- **React Hook Form**: Gestión de estado de formularios eficiente.
- **Zod**: Validación de esquemas con tipado fuerte.
- **FormInput**: Componente UI reutilizable y controlado.

### Ejemplo de uso rápido:

```jsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../src/utils/schemas";
import { FormInput } from "../src/components/ui/FormInput";

const {
  control,
  handleSubmit,
  formState: { errors },
} = useForm({
  resolver: zodResolver(loginSchema),
});

const onSubmit = (data) => console.log(data);

return (
  <View>
    <FormInput
      name="email"
      label="Correo"
      control={control}
      error={errors.email}
    />
    <Button title="Enviar" onPress={handleSubmit(onSubmit)} />
  </View>
);
```

## 📦 Gestión de Estado (Zustand + Loader Global)

Para estados globales ligeros que deben ser accesibles desde cualquier lugar.

### 🔄 Cómo usar el Loader Global:

Puedes activar un cargador que bloquea la pantalla (Overlay) desde cualquier componente o hook:

```jsx
import { useAppStore } from "../src/store/useAppStore";

const showLoader = useAppStore((state) => state.showLoader);
const hideLoader = useAppStore((state) => state.hideLoader);

const handleAction = async () => {
  showLoader("Guardando cambios...");
  try {
    await apiCall();
  } finally {
    hideLoader();
  }
};
```

---

## 💡 Recomendaciones Adicionales

1. **Convención de Nombres**: Usa PascalCase para componentes (`MyComponent.js`) y camelCase para hooks (`useMyHook.js`).
2. **Variables de Entorno**: Usa archivos `.env` (Expo los soporta nativamente) para guardar claves sensibles.
3. **Optimización de Imágenes**: Usa siempre `expo-image` en lugar del componente `Image` estándar de React Native para mejor rendimiento.

---

## Para ejecutar

1. npm install
2. npm start
3. recordar instalar expo web para desarrollo
