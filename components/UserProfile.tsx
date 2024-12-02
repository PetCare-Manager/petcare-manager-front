import React from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { AddPetCard } from "./AddPetCard";
import { UserAvatar } from "./UserAvatar";
import { useAuth } from "@/context/AuthContext";

type UserProfileProps = NativeStackScreenProps<RootStackParamList, "PetForm">;

type RootStackParamList = {
  PetForm: undefined;
};

export const UserProfile: React.FC<UserProfileProps> = ({ navigation }) => {
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
    // Puedes manejar alguna navegación adicional si es necesario
  };
  return (
    <View className="flex items-center justify-center bg-white w-full h-full p-4">
      <UserAvatar />
      <Text className="mt-4 text-2xl font-raleway-regular text-gray-800">
        Hola, ¡disfruta tu día!
      </Text>
      <Button title="Cerrar Sesión" onPress={handleLogout} />

      {/* Sección de mascotas */}
      <View className="w-full mt-6 px-4">
        <Text className="text-xl font-afacad-semibold text-typography_2">
          Mis mascotas
        </Text>
        {/* Aquí se pasa la propiedad navigation a AddPetCard */}
        <AddPetCard navigation={navigation} />
      </View>
    </View>
  );
};
