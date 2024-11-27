import React from "react";
import { View, Text, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export const Event = () => {
  return (
    <View className="flex flex-row items-center bg-white rounded-lg p-4">
      {/* Left Vertical Bar */}
      <View className="w-1 bg-green-400 h-full rounded-sm" />
      <View className="container shadow rounded-lg">
        {/* Content Area */}
        <View className="p-4 flex-1">
          <View className="flex flex-row justify-between">
            {/* Title */}
            <Text className="text-typography font-raleway-semibold text-lg">
              Veterinario
            </Text>
            {/* Clock Icon */}
            <FontAwesome
              name="clock-o"
              size={20}
              className="text-gray-600 ml-2"
            />
          </View>
          {/* Date and Time */}
          <View className="flex-row items-center">
            <Text className="text-typography font-raleway-regular text-sm">
              Miércoles, 9 Diciembre
            </Text>
            <Text className=" text-typography font-raleway-regular text-sm">
              •
            </Text>
            <Text className="text-typography font-raleway-regular text-sm">
              12:30 / 13:30
            </Text>
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
      </View>
    </View>
  );
};
