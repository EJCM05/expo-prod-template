import { View, Text, TextInput, TextInputProps, KeyboardTypeOptions } from 'react-native';
import { useController, Control, FieldValues, Path, FieldError } from 'react-hook-form';

interface FormInputProps<T extends FieldValues> extends Omit<TextInputProps, 'onChangeText' | 'value'> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  error?: FieldError;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
}

export const FormInput = <T extends FieldValues>({ 
  name, 
  control, 
  label, 
  error, 
  placeholder, 
  secureTextEntry,
  keyboardType = 'default',
  ...props 
}: FormInputProps<T>) => {
  const { field } = useController({
    control,
    name,
    defaultValue: '' as any,
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
