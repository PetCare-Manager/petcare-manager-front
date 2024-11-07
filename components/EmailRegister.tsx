import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, Alert } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Bubble } from "./Bubbles";
import { SvgIconsComponent } from "./SvgIconsComponent";
import { registerUser } from "@/api/authApi";
// Función de validación de email
import { validateEmail } from "@/utils/validation";

type RootStackParamList = {
  Home: undefined;
  Register: undefined;
  EmailRegister: undefined;
  Login: undefined;
};

type EmailRegisterProps = NativeStackScreenProps<
  RootStackParamList,
  "EmailRegister"
>;

export const EmailRegister: React.FC<EmailRegisterProps> = ({ navigation }) => {
  // Estados para los campos de entrada
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Validación de entrada de datos y mensaje de error
  const handleRegister = async () => {
    if (!validateEmail(email)) {
      setErrorMessage("Por favor, introduce un correo electrónico válido.");
      return;
    }

    if (password.length < 8) {
      setErrorMessage("La contraseña debe tener al menos 8 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Las contraseñas no coinciden.");
      return;
    }

    // Si todas las validaciones pasan
    setErrorMessage(""); // Limpiar mensaje de error si todo está correcto

    // logica de peticiones al back
    try {
      // Registra el usuario en el backend
      await registerUser(email, password);

      Alert.alert(
        "Registro exitoso",
        "La cuenta ha sido registrada correctamente."
      );
      //Navega al login si todo es correcto
      navigation.navigate("Login");
    } catch (error: any) {
      setErrorMessage(error.message || "Error en el registro");
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

        {/* Confirmar contraseña */}
        <Text className="-mb-3 uppercase font-afacad-regular text-base">
          Repetir contraseña
        </Text>
        <TextInput
          placeholder="************"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          className="bg-[#f2f2f2] border border-inputborder rounded-lg w-full p-2"
        />

        {/* Mostrar mensaje de error si existe */}
        {errorMessage ? (
          <Text className="text-red-500 text-base mt-2 text-center">
            {errorMessage}
          </Text>
        ) : null}

        {/* Botón de registro */}
        <TouchableOpacity
          onPress={handleRegister}
          className="bg-primary px-14 py-4 rounded-2xl mt-4"
        >
          <Text className="text-white text-center font-raleway-semibold text-sm">
            Crear cuenta
          </Text>
        </TouchableOpacity>
      </View>

      {/* Link para iniciar sesión */}
      <Text className="font-raleway-regular text-base mb-14">
        ¿Ya tienes cuenta?{" "}
        <Text
          className="font-raleway-bold text-typography_2"
          onPress={() => navigation.navigate("Login")}
        >
          ¡Identifícate!
        </Text>
      </Text>
    </View>
  );
};
