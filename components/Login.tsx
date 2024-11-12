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
  EmailRegister: undefined;
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
        <TouchableOpacity className="bg-primary px-14 py-4 rounded-2xl mt-4">
          <Text className="text-white text-center font-raleway-semibold text-base">
            Login
          </Text>
        </TouchableOpacity>
      </View>

      {/* Link para iniciar sesión */}
      <Text className="font-raleway-regular text-base ">
        ¿No tienes cuenta?{" "}
        <Text
          className="font-raleway-bold text-typography_2"
          onPress={() => navigation.navigate("EmailRegister")}
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
