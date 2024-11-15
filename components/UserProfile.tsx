import React from "react";
import { View, Text } from "react-native";
import { UserAvatar } from "./UserAvatar";
import { AddPetCard } from "./AddPetCard";

export interface UserProfileProps {
  name: string; // Nombre del usuario
  imageUrl?: string; // Imagen inicial del usuario
}

export const UserProfile: React.FC<UserProfileProps> = ({ name, imageUrl }) => {
  function handleAddPet(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <View className="flex items-center justify-center bg-white w-full h-full p-4">
      {/* Avatar del usuario */}
      <UserAvatar
        imageUrl={imageUrl} // Imagen inicial (si existe)
      />

      {/* Mensaje de bienvenida */}
      <Text className="mt-4 text-2xl font-raleway-regular text-gray-800">
        Hola <Text className="font-bold">{name}</Text>, ¡disfruta tu día!
      </Text>
      {/* Sección de mascotas */}

      <View className="w-full mt-6 px-4">
        <Text className="text-lg font-afacad-semibold text-typography_2">
          Mis mascotas
        </Text>
        {/* Botón Añadir Mascota */}
        <AddPetCard onAddPet={handleAddPet} />
      </View>
    </View>
  );
};
