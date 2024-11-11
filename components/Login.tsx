import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Alert,
} from "react-native";
import { SvgIconsComponent } from "@/components/SvgIconsComponent";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Bubble } from "./Bubbles";
import { useAuth } from "@/context/AuthContext";
import { validateEmail } from "@/utils/validation";
import AsyncStorage from "@react-native-async-storage/async-storage";
console.log(useAuth);
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
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    if (!validateEmail(email)) {
      setErrorMessage("Por favor, introduce un correo electrónico válido.");
      return;
    }
    try {
      await login(email, password);
      console.log("first");
      // Verifica si el token se ha guardado
      const token = await AsyncStorage.getItem("token");
      if (token) {
        console.log("Token guardado correctamente:", token);
        Alert.alert(
          "Login exitoso",
          "La cuenta ha sido registrada correctamente."
        );
      } else {
        console.log("No se pudo guardar el token.");
      }
    } catch (e: any) {
      setErrorMessage(e.message);
    }
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
        {/* Mostrar mensaje de error si existe */}
        {errorMessage ? (
          <Text className="text-red-500 text-base mt-2 text-center">
            {errorMessage}
          </Text>
        ) : null}
        <TouchableOpacity
          onPress={handleLogin}
          className="bg-primary px-14 py-4 rounded-2xl mt-4"
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
