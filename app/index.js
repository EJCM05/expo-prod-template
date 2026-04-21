import { View, Text } from 'react-native';
import { Rocket } from 'lucide-react-native';

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-900">
      <Rocket color="white" size={48} />
      <Text className="text-white text-2xl font-bold mt-4">Prod Ready</Text>
    </View>
  );
}
