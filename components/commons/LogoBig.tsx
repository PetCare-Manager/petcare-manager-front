import React from "react";
import { Text, View } from "react-native";
import { SvgIconsComponent } from "./SvgIconsComponent";

export const LogoBig = () => {
  return (
    <View className="flex flex-col items-center">
      <SvgIconsComponent
        containerClass="w-56 h-44 z-10 mt-[120px] items-center"
        type="logo1"
      />
      <Text className="font-afacad-semibold text-[40px] lg:text-5xl text-center text-typography">
        PetCare Manager
      </Text>
    </View>
  );
};
