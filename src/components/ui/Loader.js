import { View, ActivityIndicator, Text, Modal } from 'react-native';

/**
 * Loader Global Reutilizable
 * Puedes editar el diseño aquí (colores, iconos, animaciones)
 * y se reflejará en toda la aplicación.
 */
export const Loader = ({ visible = false, message = 'Cargando...' }) => {
  if (!visible) return null;

  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View className="flex-1 items-center justify-center bg-black/60 backdrop-blur-sm">
        <View className="bg-slate-800 p-8 rounded-3xl items-center border border-slate-700 shadow-2xl">
          <ActivityIndicator size="large" color="#38bdf8" />
          {message && (
            <Text className="text-white mt-4 text-base font-bold text-center">
              {message}
            </Text>
          )}
        </View>
      </View>
    </Modal>
  );
};
