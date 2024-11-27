import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { SvgIconsComponent } from "@/components/SvgIconsComponent"; // Asegúrate de importar correctamente

export interface UserAvatarProps {
  imageUrl?: string; // Imagen inicial si se proporciona
}

export const UserAvatar: React.FC<UserAvatarProps> = ({ imageUrl }) => {
  const [avatarUrl, setAvatarUrl] = useState(imageUrl || "");

  useEffect(() => {
    if (imageUrl) {
      setAvatarUrl(imageUrl);
    }
  }, [imageUrl]);

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert(
        "Permiso requerido",
        "Se necesita acceso a la galería para seleccionar una imagen."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setAvatarUrl(result.assets[0].uri);
    }
  };

  return (
    <View className="flex items-center justify-center">
      <View className="relative">
        {/* Avatar: imagen, SVG por defecto o iniciales */}
        <View className="rounded-full bg-customblue overflow-hidden w-32 h-32 flex items-center justify-center">
          {avatarUrl ? (
            <Image
              source={{ uri: avatarUrl }}
              className="w-full h-full object-cover"
            />
          ) : (
            <SvgIconsComponent
              containerClass="w-20 h-20 items-center" // Tamaño adaptado al círculo
              type="logo1" // Asegúrate de pasar el tipo de logo
            />
          )}
        </View>

        {/* Botón para cambiar la imagen */}
        <TouchableOpacity
          onPress={pickImage}
          className="absolute bottom-0 right-0 bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center"
        >
          <Text className="text-gray-600 text-lg">+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
