import React, { useState } from "react";
import { View, Image, TouchableOpacity, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons"; // Para el ícono de edición
import avatar from "@/assets/images/avatar.jpg"; // Imagen predeterminada local

// Definición de props
export interface UserAvatarProps {
  imageUrl?: string;
  className?: string; // Clases adicionales de Tailwind
  name?: string;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({ imageUrl }) => {
  // Si no hay imageUrl, usa la imagen predeterminada local
  const [avatarUrl, setAvatarUrl] = useState<{ uri: string } | number>(
    imageUrl ? { uri: imageUrl } : avatar
  );

  const pickImage = async () => {
    // Pedir permisos para acceder a la galería
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert(
        "Permiso requerido",
        "Se necesita acceso a la galería para seleccionar una imagen."
      );
      return;
    }

    // Abrir el selector de imágenes
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    // Si el usuario seleccionó una imagen, actualizamos el estado
    if (!result.canceled) {
      setAvatarUrl({ uri: result.assets[0].uri });
    }
  };

  return (
    <View className="flex items-center justify-center mt-4">
      <View className="relative">
        {/* Avatar con la imagen o imagen predeterminada */}
        <View className="w-20 h-20 rounded-full flex items-center justify-center overflow-hidden">
          <Image
            source={avatarUrl} // Usa el estado avatarUrl
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>

        {/* Ícono de edición para cambiar la imagen */}
        <TouchableOpacity
          onPress={pickImage}
          className="absolute top-0 right-0 bg-white rounded-full p-1 border border-gray-300"
        >
          <MaterialIcons name="edit" size={16} color="#3b3b58" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
