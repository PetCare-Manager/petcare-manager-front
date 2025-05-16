import { SvgIconsComponent } from "@/components/commons/SvgIconsComponent";
import React from "react";
import { Text, View } from "react-native";

export const LogoBig = () => {
  return (
    <View className="flex flex-col items-center text-">
      <SvgIconsComponent
        containerClass="w-56 h-44 z-10 mt-32 items-center"
        type="logo1"
        size={224}
      />
      <Text className="font-afacad-semibold text-4xl lg:text-5xl text-center text-typography">
        PetCare Manager
      </Text>
    </View>
  );
};
