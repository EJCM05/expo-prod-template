import '../global.css';
import { Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useAppStore } from '../src/store/useAppStore';
import { Loader } from '../src/components/ui/Loader';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 1000 * 60 * 5,
    },
  },
});

export default function RootLayout() {
  const { isLoading, loadingMessage } = useAppStore();

  return (
    <QueryClientProvider client={queryClient}>
      <View className="flex-1 bg-slate-900">
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: '#0f172a' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            contentStyle: { backgroundColor: '#0f172a' },
          }}
        >
          <Stack.Screen name="index" options={{ title: 'Home' }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="light" />

        {/* Global Loader Overlay */}
        <Loader visible={isLoading} message={loadingMessage} />
      </View>
    </QueryClientProvider>
  );
}
