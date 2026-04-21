import { View, Text, TextInput } from 'react-native';
import { useController } from 'react-hook-form';

export const FormInput = ({ 
  name, 
  control, 
  label, 
  error, 
  placeholder, 
  secureTextEntry,
  keyboardType = 'default',
  ...props 
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: '',
  });

  return (
    <View className="mb-4 w-full">
      {label && (
        <Text className="text-slate-300 text-sm font-medium mb-1.5 ml-1">
          {label}
        </Text>
      )}
      <TextInput
        value={field.value}
        onChangeText={field.onChange}
        onBlur={field.onBlur}
        placeholder={placeholder}
        placeholderTextColor="#64748b"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        className={`bg-slate-800 text-white px-4 py-3 rounded-xl border ${
          error ? 'border-red-500' : 'border-slate-700'
        } focus:border-sky-500`}
        {...props}
      />
      {error && (
        <Text className="text-red-500 text-xs mt-1 ml-1 font-medium">
          {error.message}
        </Text>
      )}
    </View>
  );
};
