import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { SvgIconsComponent } from "@/components/SvgIconsComponent";

import { NativeStackScreenProps } from "@react-navigation/native-stack";


type RootStackParamList = {
  Home: undefined;
  Register: undefined;
  EmailRegister: undefined;
  Login: undefined;
  NotRememberPass: undefined;
  UserProfile: undefined;
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
        containerClass="w-56 h-44 z-10 mt-[120px] items-center"
        type="logo1"
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
        <TouchableOpacity
          className="bg-primary px-14 py-4 rounded-2xl mt-4"
          onPress={() => navigation.navigate("UserProfile")}
        >
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
