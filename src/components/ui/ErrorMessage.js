import { View, Text, TouchableOpacity } from 'react-native';
import { CircleAlert, RotateCcw } from 'lucide-react-native';

export const ErrorMessage = ({ error = 'Algo salió mal', onRetry }) => (
  <View className="flex-1 items-center justify-center p-6 bg-slate-900">
    <CircleAlert color="#ef4444" size={48} />
    <Text className="text-white text-lg font-bold mt-4 text-center">{error}</Text>
    
    {onRetry && (
      <TouchableOpacity 
        onPress={onRetry}
        className="mt-6 flex-row items-center bg-slate-800 px-6 py-3 rounded-full"
      >
        <RotateCcw color="#38bdf8" size={18} />
        <Text className="text-sky-400 font-bold ml-2">Reintentar</Text>
      </TouchableOpacity>
    )}
  </View>
);
