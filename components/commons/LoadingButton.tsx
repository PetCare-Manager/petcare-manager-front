import React from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

interface LoadingButtonProps {
  isLoading: boolean;
  onPress: () => void;
  title: string;
  style?: string;
  //nuevos props opcional
  fields?: Array <string>;
  errors?: Array <string>;
}

export const LoadingButton: React.FC<LoadingButtonProps> = ({
  isLoading,
  onPress,
  title,
  style = "",
  fields = [],
  errors = [],
}) => {
  //logic para deshabilityar el boton
  const shouldDisableButton = (): boolean => {
    //some: para buscar que algiuno ses  true y f sirve para que todos sean true
    const hasEmptyField = (fields ?? []).some((f) => !f.trim()); // !f.trim para qu eno exixsta un espacio en blanco
    const hasErrors = (errors ?? []).some((e) => !!e);// parta que no sea null o undefined
    return isLoading || hasEmptyField || hasErrors;
  };
  
  const disabled = shouldDisableButton();

  return (
    <TouchableOpacity
      className={`px-14 py-4 rounded-2xl mt-4 ${
        disabled ? "bg-gray-300" : "bg-primary"
      } ${style}`}
      onPress={onPress}
      disabled={disabled}
    >
      {isLoading ? (
        <ActivityIndicator color="white" size="small" />
      ) : (
        <Text className="text-white text-center font-raleway-semibold text-base">
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};
