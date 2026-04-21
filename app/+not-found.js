import { Link, Stack } from 'expo-router';
import { View, Text } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className="flex-1 items-center justify-center bg-slate-900 p-6">
        <Text className="text-white text-3xl font-bold">404</Text>
        <Text className="text-slate-400 text-lg mt-2 mb-6">Página no encontrada</Text>
        <Link href="/" className="bg-sky-500 px-6 py-3 rounded-full">
          <Text className="text-white font-bold text-base">Volver al inicio</Text>
        </Link>
      </View>
    </>
  );
}
