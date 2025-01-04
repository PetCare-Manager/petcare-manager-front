import React from "react";
import { ActivityIndicator, TouchableOpacity, Text } from "react-native";

interface LoadingButtonProps {
  isLoading: boolean;
  onPress: () => void;
  disabled?: boolean;
  title: string;
  style?: string;
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
  isLoading,
  onPress,
  disabled = false,
  title,
  style = "",
}) => {
  return (
    <TouchableOpacity
      className={`px-14 py-4 rounded-2xl mt-4 ${
        disabled || isLoading ? "bg-gray-300" : "bg-primary"
      } ${style}`}
      onPress={onPress}
      disabled={disabled || isLoading}
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

export default LoadingButton;
