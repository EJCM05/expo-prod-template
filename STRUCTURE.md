# 🏗️ Estructura del Proyecto (Expo Prod Template - TS)

Esta plantilla utiliza una arquitectura modular diseñada para escalar y facilitar el mantenimiento, ahora potenciada con **TypeScript**.

## 📁 Directorios Principales

### 🚀 `app/` (Expo Router)

Contiene las rutas de la aplicación. Expo Router utiliza el sistema de archivos para definir la navegación.

- `_layout.tsx`: Layout raíz. Aquí se configuran los Providers globales (QueryClient, Theme, etc.).
- `+not-found.tsx`: Pantalla de error 404.
- `(tabs)/`: Grupo de rutas para navegación por pestañas (opcional).
- `index.tsx`: Pantalla de inicio.

### 🛠️ `src/` (Lógica de Negocio y UI)

- **`api/`**: Servicios de fetch y configuraciones de APIs.
- **`components/ui/`**: Componentes visuales atómicos y reutilizables (**Typed**).
- **`hooks/`**: Custom Hooks para lógica reutilizable.
- **`store/`**: Gestión de estado global con Zustand (**Typed**).
- **`utils/`**: Schemas de validación (Zod), constantes y helpers.
- **`constants/`**: Variables globales y temas.

## 🎨 Estilos con NativeWind v4

Utilizamos clases de Tailwind directamente en la propiedad `className`.

```tsx
<View className="flex-1 bg-slate-900 justify-center items-center">
  <Text className="text-white font-bold">Hola Mundo</Text>
</View>
```

## 🔐 Variables de Entorno

Soporte nativo con archivos `.env`. Recuerda usar el prefijo `EXPO_PUBLIC_`.

```bash
EXPO_PUBLIC_API_URL=https://api.myapp.com
```

## 📝 Manejo de Formularios (Estándar de Producción)

El proyecto incluye un sistema de formularios robusto basado en:

- **React Hook Form**: Gestión de estado de formularios eficiente.
- **Zod**: Validación de esquemas con tipado fuerte.
- **FormInput**: Componente UI reutilizable, controlado y **completamente tipado**.

### Ejemplo de uso rápido (TS):

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../src/utils/schemas";
import { FormInput } from "../src/components/ui/FormInput";
import { z } from "zod";

type LoginForm = z.infer<typeof loginSchema>;

const {
  control,
  handleSubmit,
  formState: { errors },
} = useForm<LoginForm>({
  resolver: zodResolver(loginSchema),
});

const onSubmit = (data: LoginForm) => console.log(data);

return (
  <View>
    <FormInput<LoginForm>
      name="email"
      label="Correo"
      control={control}
      error={errors.email}
    />
    {/* ... */}
  </View>
);
```

---

## 💡 Recomendaciones

1. **Tipado Estricto**: Evita el uso de `any`. Define interfaces para tus datos de API en `src/api/`.
2. **Path Aliases**: Puedes usar `@/*` para importar desde la raíz de `src/` (configurado en `tsconfig.json`).
3. **Validación Rápida**: Esta estructura está optimizada para que puedas probar lógica de negocio en Android rápidamente sin preocuparte por el boilerplate inicial.

---

## Para ejecutar

1. `npm install`
2. `cp .env.example .env`
3. `npx expo start`
