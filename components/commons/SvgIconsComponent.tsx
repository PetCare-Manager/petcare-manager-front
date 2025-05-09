import Email from "@/assets/svg/email.svg";
import Google from "@/assets/svg/google.svg";
import Instagram from "@/assets/svg/insta.svg";
import Logo1 from "@/assets/svg/logo1.svg";
import Twitter from "@/assets/svg/twitter.svg";
import React from "react";
import { View } from "react-native";

interface SvgIconProps {
  type: "google" | "twitter" | "instagram" | "email" | "logo1";
  containerClass?: string; // Las clases de tailwind para el contenedor (<VIEW />)
}

export const SvgIconsComponent: React.FC<SvgIconProps> = ({
  type,
  containerClass,
}) => {
  let SelectedComponent;

  switch (type) {
    case "google":
      SelectedComponent = Google;
      break;
    case "twitter":
      SelectedComponent = Twitter;
      break;
    case "instagram":
      SelectedComponent = Instagram;
      break;
    case "email":
      SelectedComponent = Email;
      break;
    case "logo1":
      SelectedComponent = Logo1;
      break;
    default:
      return;
  }

  return (
    <View className={containerClass}>
      <SelectedComponent />
    </View>
  );
};
