import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Bubble } from "./Bubbles";
import logo from "@/assets/images/logo.png";
import { SvgIconsComponent } from "./SvgIconsComponent";
import { Link } from "expo-router";

type RootStackParamList = {
  Home: undefined;
  Register: undefined;
  Login: undefined;
};

type RegisterScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Register"
>;

export const Register: React.FC<RegisterScreenProps> = ({ navigation }) => {
  return (
    <View className="flex flex-col justify-between items-center h-full">
      <Image source={logo} className="w-56 h-44 z-10 mt-[120px]" />

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
      <View className="flex items-center gap-4 px-6 mt-4 mb-6 text-typography">
        <TouchableOpacity
          className="flex flex-row items-center justify-center gap-2 bg-[#f2f2f2] border border-black rounded-lg w-full p-4"
          //onPress={() => navigation.navigate("Login")}
        >
          <SvgIconsComponent containerClass="w-6 h-6" type="google" />
          <Text className="font-raleway-semibold text-base">
            Continúa con Google
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex flex-row items-center justify-center gap-2 bg-[#f2f2f2] border border-black rounded-lg w-full p-4"
          //onPress={() => navigation.navigate("Login")}
        >
          <SvgIconsComponent containerClass="w-6 h-6" type="twitter" />
          <Text className="font-raleway-semibold text-base">
            Continúa con Twitter
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex flex-row items-center justify-center gap-2 bg-[#f2f2f2] border border-black rounded-lg w-full p-4"
          //onPress={() => navigation.navigate("Login")}
        >
          <SvgIconsComponent containerClass="w-6 h-6" type="instagram" />
          <Text className="font-raleway-semibold text-base">
            Continúa con Instagram
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex flex-row items-center justify-center gap-2 bg-[#f2f2f2] border border-black rounded-lg w-full p-4"
          //onPress={() => navigation.navigate("Login")}
        >
          <SvgIconsComponent containerClass="w-6 h-6" type="email" />
          <Text className="font-raleway-semibold text-base">
            Continúa con tu correo
          </Text>
        </TouchableOpacity>
      </View>
      <Text className="font-raleway-semibold mb-14">
        ¿Ya tienes cuenta?{" "}
        <Text
          className="font-raleway-bold text-blue-600"
          onPress={() => navigation.navigate("Login")}
        >
          ¡Identifícate!
        </Text>
      </Text>
    </View>
  );
};
