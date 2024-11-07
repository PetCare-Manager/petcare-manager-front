import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import { SvgIconsComponent } from "@/components/SvgIconsComponent";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Bubble } from "./Bubbles";
type RootStackParamList = {
  Home: undefined;
  Register: undefined;
  Login: undefined;
  NotRememberPass: undefined;
};
type LoginScreenProps = NativeStackScreenProps<RootStackParamList, "Login">;

export const Login: React.FC<LoginScreenProps> = ({ navigation }) => {
  // Estados para los campos de entrada
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Función de validación de email
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  return (
    <View className="flex flex-col justify-between items-center h-full">
      <SvgIconsComponent
        containerClass="w-56 h-44 z-10 mt-[120px]"
        type="logo1"
      />

      {/* Burbujas decorativas */}
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

      <View className="flex gap-4 mt-4 mb-6 w-full px-12">
        {/* Correo electrónico */}
        <Text className="-mb-3 uppercase font-afacad-regular text-base">
          Correo electrónico
        </Text>
        <TextInput
          placeholder="example@example.com"
          value={email}
          onChangeText={setEmail}
          className="bg-[#f2f2f2] border border-inputborder rounded-lg w-full p-2"
        />

        {/* Contraseña */}
        <Text className="-mb-3 uppercase font-afacad-regular text-base">
          Contraseña
        </Text>
        <TextInput
          placeholder="************"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          className="bg-[#f2f2f2] border border-inputborder rounded-lg w-full p-2"
        />
      </View>
      <View className={"flex-row justify-center w-full px-8 mt-6"}>
        <TouchableOpacity
          className={
            "bg-indigo-500 rounded-lg py-2 px-4 flex-1 ml-2 items-center justify-center"
          }
        >
          <Text className={"text-white text-center"}>Login</Text>
        </TouchableOpacity>
      </View>
      <View
        className={
          "flex flex-row justify-around rounded-lg p-2 gap-10 mt-6 relative"
        }
      >
        <SvgIconsComponent containerClass="w-10 h-10" type="google" />
        <SvgIconsComponent containerClass="w-10 h-10" type="twitter" />
        <SvgIconsComponent containerClass="w-10 h-10" type="instagram" />
      </View>
      {/* Link para iniciar sesión */}
      <Text className="font-raleway-regular text-base ">
        ¿No tienes cuenta?{" "}
        <Text
          className="font-raleway-bold text-typography_2"
          onPress={() => navigation.navigate("Register")}
        >
          ¡Regístrate!
        </Text>
      </Text>
      <Text
        className="font-raleway-regular text-base mb-14"
        onPress={() => navigation.navigate("NotRememberPass")}
      >
        ¿Has olvidado tu contraseña?
      </Text>
    </View>
  );
};
