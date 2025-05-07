import { SvgIconsComponent } from "@/components/commons/SvgIconsComponent";
import React from "react";
import { Text, View } from "react-native";

interface LogoSmallProps {
  title: string; // Texto como "Regístrate", "Loguéate", etc.
}

const LogoSmall: React.FC<LogoSmallProps> = ({ title }) => {
  return (
    <View className="flex-row items-center space-x-2">
      <SvgIconsComponent
        type="logo1"
        containerClass="w-8 h-8" // 32x32 px
      />
      <Text className=" text-3xl font-afacad-semibold text-typography">
        {title}
      </Text>
    </View>
  );
};

export default LogoSmall;
