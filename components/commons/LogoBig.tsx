import { SvgIconsComponent } from "@/components/commons/SvgIconsComponent";
import React from "react";
import { Text, View } from "react-native";

interface LogoBigProps {
  title: string;
}

export const LogoBig: React.FC<LogoBigProps> = ({ title }) => {
  return (
    <View className="flex flex-col items-center mt-32">
      <SvgIconsComponent containerClass="w-56 h-56" type="logo1" size={224} />
      <Text className="text-4xl font-afacad-semibold text-typography text-center">
        {title}
      </Text>
    </View>
  );
};
