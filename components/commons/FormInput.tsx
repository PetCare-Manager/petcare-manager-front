import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

type Props = {
  label: string;
  placeholder: string;
  input: {
    value: string;
    error: string;
    isFocused: boolean;
    setIsFocused: (v: boolean) => void;
    onChange: (v: string) => void;
  };
  secureTextEntry?: boolean;
  isPassword?: boolean;
  toggleVisibility?: () => void;
};

export const FormInput: React.FC<Props> = ({
  label,
  placeholder,
  input,
  secureTextEntry = false,
  isPassword = false,
  toggleVisibility,
}) => {
  return (
    <>
      <Text className="-mb-3 text-typography_2 font-raleway-medium text-base">
        {label}
      </Text>
      <View className="relative w-full">
        <TextInput
          placeholder={placeholder}
          value={input.value}
          onChangeText={input.onChange}
          secureTextEntry={secureTextEntry}
          onFocus={() => input.setIsFocused(true)}
          onBlur={() => input.setIsFocused(false)}
          className={`bg-customwhite p-4 text-sm rounded-lg w-full border ${
            input.error
              ? "border-red-500 text-red-500"
              : input.isFocused
              ? "border-blue-500"
              : "border-inputborder"
          } ${isPassword ? "pr-12" : ""}`}
        />
        {isPassword && toggleVisibility && (
          <TouchableOpacity
            onPress={toggleVisibility}
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            <MaterialIcons
              name={secureTextEntry ? "visibility" : "visibility-off"}
              size={24}
              color="#666"
            />
          </TouchableOpacity>
        )}
      </View>
      {input.error ? (
        <Text className="text-red-500 text-xs mt-1">{input.error}</Text>
      ) : null}
    </>
  );
};
