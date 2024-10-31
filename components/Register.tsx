import React from "react";
import { Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Home: undefined;
  Register: undefined;
  Login: undefined;
};

type RegisterScreenProps = NativeStackScreenProps<RootStackParamList, "Register">;

export const Register: React.FC<RegisterScreenProps> = ({ navigation }) => {
  return (
    <Text className="font-afacad-semibold text-3xl text-center text-gray-800 mb-8">
      registro
    </Text>
  );
};
