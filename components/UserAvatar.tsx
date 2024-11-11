import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons"; // Para el ícono de edición

// Definición de props
export interface UserAvatarProps {
  imageUrl?: string;
  initials?: string;
  className?: string; // Clases adicionales de Tailwind
}

export const UserAvatar: React.FC<UserAvatarProps> = ({
  imageUrl,
  initials = "U", // Letra por defecto si no hay iniciales
}) => {
  const [avatarUrl, setAvatarUrl] = useState(imageUrl || "");

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
      setAvatarUrl(result.assets[0].uri);
    }
  };

  return (
    <View className="flex items-center justify-center mt-4">
      <View className="relative">
        {/* Avatar con la imagen o iniciales */}
        <View className="rounded-full bg-violet flex items-center justify-center overflow-hidden size-32">
          {avatarUrl ? (
            <Image
              source={{ uri: avatarUrl }}
              className="object-cover w-full h-full"
            />
          ) : (
            <Text className="text-white font-bold text-lg">{initials}</Text>
          )}
        </View>

        {/* Ícono de edición para cambiar la imagen */}
        <TouchableOpacity
          onPress={pickImage}
          className="absolute top-0 right-0 bg-black rounded-full p-1"
        >
          <MaterialIcons name="edit" size={16} color="#3b3b58" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
