// Wrapper.tsx
import React from "react";
import { View } from "react-native";

type WrapperProps = {
  children: React.ReactNode;
};

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <View className="h-full">{children}</View>;
};
