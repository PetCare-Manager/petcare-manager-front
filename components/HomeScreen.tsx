import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Bubble } from "@/components/Bubbles";
import { SvgIconsComponent } from "./SvgIconsComponent";

type RootStackParamList = {
  Home: undefined;
  Register: undefined;
  EmailRegister: undefined;
  Login: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View className="flex flex-col justify-between items-center h-full">
      <SvgIconsComponent
        containerClass="w-56 h-44 z-10 mt-[120px]"
        type="logo1"
      />

      <Bubble
        containerClass="absolute -bottom-20 -right-16 z-0"
        type="bubble1"
        rotation={-45}
      />
      <Bubble
        containerClass="absolute -top-20 -left-16 z-0"
        type="bubble2"
        rotation={-45}
      />
      <Bubble
        containerClass="absolute top-36 right-10 z-0"
        type="bubble3"
        rotation={-45}
      />
      <Bubble
        containerClass="absolute bottom-96 right-72 z-0"
        type="bubble4"
        rotation={-45}
      />
      <Bubble
        containerClass="absolute bottom-32 right-80 z-0"
        type="bubble5"
        rotation={-60}
      />

      <View className="items-center -mt-20 px-6">
        <Text className="font-afacad-semibold text-[40px] lg:text-5xl text-center text-typography">
          PetCare Manager
        </Text>
        <Text className="font-raleway-light text-typography_2 text-2xl lg:text-3xl text-center mt-6">
          Todo lo que necesitas de tu mascota, en tu bolsillo, a un solo click.
        </Text>
      </View>

      {/* Contenedor para los botones en la parte inferior */}
      <View className="flex-row justify-between gap-14 mb-14">
        <TouchableOpacity
          onPress={() => navigation.navigate("EmailRegister")}
          className="bg-[#f2f2f2] px-11 py-4 rounded-2xl border border-primary"
        >
          <Text className="text-primary font-raleway-semibold text-sm">
            Registro
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          className="bg-primary px-14 py-4 rounded-2xl"
        >
          <Text className="text-white font-raleway-semibold text-sm">
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
