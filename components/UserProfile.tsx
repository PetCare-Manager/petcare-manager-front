import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { UserAvatar } from "./UserAvatar";

export interface UserProfileProps {
  userName: string;
}

export const UserProfile: React.FC<UserProfileProps> = ({ userName }) => {
  return (
    <View className="flex items-center justify-center bg-white w-full h-full p-4">
      {/* Contenedor del avatar y el ícono de edición */}
      <View className="relative items-center">
        <UserAvatar initials={userName.charAt(0).toUpperCase()} />

        {/* Ícono de editar perfil */}
        <TouchableOpacity className="absolute top-2 right-2 bg-white rounded-full p-1">
          <MaterialIcons name="edit" size={20} color="#3b3b58" />
        </TouchableOpacity>
      </View>

      {/* Mensaje de bienvenida */}
      <Text className="mt-4 text-2xl font-semibold text-gray-800">
        Hola <Text className="font-bold">{userName}</Text>, ¡disfruta tu día!
      </Text>
    </View>
  );
};
