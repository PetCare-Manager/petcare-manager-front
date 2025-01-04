// src/components/Bubble.tsx
import React from "react";
import { View } from "react-native";
import Bubble1 from "@/assets/images/bubble1.svg";
import Bubble2 from "@/assets/images/bubble2.svg";
import Bubble3 from "@/assets/images/bubble3.svg";
import Bubble4 from "@/assets/images/bubble4.svg";
import Bubble5 from "@/assets/images/bubble5.svg";

interface BubbleProps {
  type: "bubble1" | "bubble2" | "bubble3" | "bubble4" | "bubble5";
  rotation?: number; // Rotación en grados (opcional)
  containerClass?: any; // Las clases de tailwind para el contenedor (<VIEW />)
};

export const Bubble: React.FC<BubbleProps> = ({
  type,
  rotation=0,
  containerClass,
}) => {
  let SelectedBubbleComponent;

  switch (type) {
    case "bubble1":
      SelectedBubbleComponent = Bubble1;
      break;
    case "bubble2":
      SelectedBubbleComponent = Bubble2;
      break;
    case "bubble3":
      SelectedBubbleComponent = Bubble3;
      break;
    case "bubble4":
      SelectedBubbleComponent = Bubble4;
      break;
    case "bubble5":
      SelectedBubbleComponent = Bubble5;
      break;
    default:
      return null;
  }

  return (
    <View className={containerClass}>
      <SelectedBubbleComponent rotation={rotation} />
    </View>
  );
};
