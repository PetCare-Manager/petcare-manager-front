import { SvgIconsComponent } from "@/components/commons/SvgIconsComponent";
import React from "react";
import { Text, View } from "react-native";

interface LogoSmallProps {
  title: string;
}

const LogoSmall: React.FC<LogoSmallProps> = ({ title }) => {
  return (
    <View className="flex flex-row items-baseline gap-2 mt-4 w-screen px-12">
      <SvgIconsComponent type="logo1" size={32} containerClass="w-8 h-8" />
      <Text className="text-3xl font-afacad-semibold text-typography">
        {title}
      </Text>
    </View>
  );
};

export default LogoSmall;
