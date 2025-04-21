import { breeds } from "@/utils/breeds";
import { FontAwesome } from "@expo/vector-icons"; // Iconos para React Native
import React from "react";
import { Image, Text, View } from "react-native";

interface PetCardProps {
  name: string;
  breed: string;
  gender: "M" | "F";
  imageUrl?: string;
}

export const PetCard: React.FC<PetCardProps> = ({
  name,
  breed,
  gender,
  imageUrl,
}) => {
  const genderIcon =
    gender === "M" ? (
      <FontAwesome name="mars" size={24} color="#4B5563" />
    ) : (
      <FontAwesome name="venus" size={24} color="#4B5563" />
    );

  const breedImage = breeds.find(
    (b) => b.name.toLowerCase() === breed.toLowerCase()
  )?.image;

  return (
    <View className="flex-row items-center bg-white rounded-xl p-3 shadow-sm mb-2">
      <View className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 mr-3 items-center justify-center">
        {imageUrl ? (
          <Image
            source={{ uri: imageUrl }}
            style={{ width: 40, height: 40, borderRadius: 20 }}
            resizeMode="cover"
          />
        ) : breedImage ? (
          <Image
            source={breedImage}
            style={{ width: 40, height: 40, borderRadius: 20 }}
            resizeMode="cover"
          />
        ) : (
          <Text style={{ fontSize: 20 }}>🐶</Text>
        )}
      </View>
      <View className="flex-1">
        <Text className="text-base font-semibold text-gray-800">{name}</Text>
        <Text className="text-sm text-gray-600">{breed}</Text>
      </View>
      <View>{genderIcon}</View>
    </View>
  );
};
