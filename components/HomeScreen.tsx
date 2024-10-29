import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import logo from "@/assets/images/logo.png";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Home: undefined;
  Register: undefined;
  Login: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Image source={logo} className="!w-[160px] !h-[220px] mb-8" />
      <View className="w-full px-6">
        <Text className="font-afacad-semibold text-3xl text-center text-gray-800 mb-8">
          PetCare Manager
        </Text>

        <Text className="font-raleway-regular text-l text-center text-gray-800 mb-28">
          Lleva todo lo que necesitas en el bolsillo
        </Text>

        {/* Contenedor para los botones en fila */}
        <View className="flex-row justify-between mb-4">
          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            className="bg-white rounded-lg border border-indigo-500 py-2 px-4 flex-1 mr-2 items-center justify-center">
            <Text className="text-indigo-500">Registro</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            className="bg-indigo-500 rounded-lg py-2 px-4 flex-1 ml-2 items-center justify-center">
            <Text className="text-white">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
