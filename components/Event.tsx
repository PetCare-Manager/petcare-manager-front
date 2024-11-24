import React from "react";
import { View, Text, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export const Event = () => {
  return (
    <View className="container flex-row items-center p-4 bg-white rounded-lg shadow border border-gray-200 w-full">
      {/* Left Vertical Bar */}
      <View className="w-1 bg-green-400 h-full rounded-sm" />

      {/* Content Area */}
      <View className="ml-4 flex-1">
        {/* Title */}
        <Text className="text-gray-800 font-semibold text-lg">Veterinario</Text>

        {/* Date and Time */}
        <View className="flex-row items-center mt-1">
          <Text className="text-gray-600 text-sm">Miércoles, 9 Diciembre</Text>
          <Text className="mx-2 text-gray-600 text-sm">•</Text>
          <Text className="text-gray-600 text-sm">12:30 / 13:30</Text>
        </View>

        {/* Dog Icons */}
        <View className="flex-row items-center mt-2">
          <Image
            source={{ uri: "https://placehold.co/20x20" }} // Replace with actual dog emoji images
            className="w-5 h-5 mr-1"
          />
          <Image
            source={{ uri: "https://placehold.co/20x20" }} // Replace with actual dog emoji images
            className="w-5 h-5"
          />
        </View>
      </View>

      {/* Clock Icon */}
      <FontAwesome name="clock-o" size={20} className="text-gray-600 ml-2" />
    </View>
  );
};
