import userService from "@/services/userService";
import { validateEmail } from "@/utils/validation";
import { MaterialIcons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type RootStackParamList = {
  Home: undefined;
  Register: undefined;
  EmailRegister: undefined;
  Login: undefined;
  Loading: { message: string }; // Agregar la pantalla Loading con parámetro
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
  const [secureTextPassword, setSecureTextPassword] = useState(true);
  const [secureTextConfirmPassword, setSecureTextConfirmPassword] =
    useState(true);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [isFocusedConfirmPassword, setIsFocusedConfirmPassword] =
    useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // Manejar cambios y validaciones dinámicas
  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (!validateEmail(value)) {
      setEmailError("Por favor, introduce un correo electrónico válido.");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    if (value.length < 8) {
      setPasswordError("La contraseña debe tener al menos 8 caracteres.");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
    if (value !== password) {
      setConfirmPasswordError("Las contraseñas no coinciden.");
    } else {
      setConfirmPasswordError("");
    }
  };

  // Validación y lógica de registro
  const handleRegister = async () => {
    if (emailError || passwordError || confirmPasswordError) return;

    try {
      await userService.register(email, password);
      navigation.navigate("Loading", {
        message: "Registro completado con éxito",
      });

      setTimeout(() => {
        navigation.navigate("Login"); // Cambia "Home" a tu pantalla de perfil de usuario
      }, 2000);
    } catch (error: any) {
      setErrorMessage(error.message || "Error en el registro.");
    }
  };

  // Comprobación de si el botón debe estar deshabilitado
  const isButtonDisabled = Boolean(
    emailError || passwordError || confirmPasswordError
  );

  return (
    <SafeAreaView className="flex justify-between h-full">
      <KeyboardAvoidingView
        behavior="padding"
        className="flex-1 justify-between"
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "space-between",
            alignItems: "center",
          }}
          showsVerticalScrollIndicator={false}
        >
          <View className="flex gap-4 mt-4 mb-6 w-full px-12">
            <Text className="font-raleway-semibold text-base">
              Todo lo que necesitas de tu mascota, en tu bolsillo, a un solo
              click.
            </Text>
            {/* Correo electrónico */}
            <Text className="-mb-3 text-typography_2 font-raleway-medium text-base">
              Correo electrónico
            </Text>
            <TextInput
              placeholder="Introduce tu email"
              value={email}
              onChangeText={handleEmailChange}
              onFocus={() => setIsFocusedEmail(true)}
              onBlur={() => setIsFocusedEmail(false)}
              className={`bg-customwhite p-4 text-sm rounded-lg w-full border ${
                emailError
                  ? "border-red-500 text-red-500"
                  : isFocusedEmail
                  ? "border-blue-500"
                  : "border-inputborder"
              }`}
            />
            {emailError && (
              <View className="flex flex-row items-center mt-1">
                <MaterialIcons
                  name="warning"
                  size={20}
                  color="red"
                  className="mr-2"
                />
                <Text className="text-red-500 text-xs">{emailError}</Text>
              </View>
            )}

            {/* Contraseña */}
            <Text className="-mb-3 text-typography_2 font-raleway-medium text-base">
              Contraseña
            </Text>
            <View className="relative">
              <TextInput
                placeholder="Introduce tu contraseña"
                secureTextEntry={secureTextPassword}
                value={password}
                onChangeText={handlePasswordChange}
                onFocus={() => setIsFocusedPassword(true)}
                onBlur={() => setIsFocusedPassword(false)}
                className={`bg-customwhite p-4 text-sm rounded-lg w-full border ${
                  passwordError
                    ? "border-red-500 text-red-500"
                    : isFocusedPassword
                    ? "border-blue-500"
                    : "border-inputborder"
                }`}
              />
              <TouchableOpacity
                onPress={() => setSecureTextPassword(!secureTextPassword)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
              >
                <MaterialIcons
                  name={secureTextPassword ? "visibility" : "visibility-off"}
                  size={24}
                  color="#666"
                />
              </TouchableOpacity>
            </View>
            {passwordError && (
              <View className="flex flex-row items-center mt-1">
                <MaterialIcons
                  name="warning"
                  size={20}
                  color="red"
                  className="mr-2"
                />
                <Text className="text-red-500 text-xs">{passwordError}</Text>
              </View>
            )}

            {/* Confirmar contraseña */}
            <Text className="-mb-3 text-typography_2 font-raleway-medium text-base">
              Repetir contraseña
            </Text>
            <View className="relative">
              <TextInput
                placeholder="Repite tu contraseña"
                secureTextEntry={secureTextConfirmPassword}
                value={confirmPassword}
                onChangeText={handleConfirmPasswordChange}
                onFocus={() => setIsFocusedConfirmPassword(true)}
                onBlur={() => setIsFocusedConfirmPassword(false)}
                className={`bg-customwhite p-4 text-sm rounded-lg w-full border ${
                  confirmPasswordError
                    ? "border-red-500 text-red-500"
                    : isFocusedConfirmPassword
                    ? "border-blue-500"
                    : "border-inputborder"
                }`}
              />
              <TouchableOpacity
                onPress={() =>
                  setSecureTextConfirmPassword(!secureTextConfirmPassword)
                }
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
              >
                <MaterialIcons
                  name={
                    secureTextConfirmPassword ? "visibility" : "visibility-off"
                  }
                  size={24}
                  color="#666"
                />
              </TouchableOpacity>
            </View>
            {confirmPasswordError && (
              <View className="flex flex-row items-center mt-1">
                <MaterialIcons
                  name="warning"
                  size={20}
                  color="red"
                  className="mr-2"
                />
                <Text className="text-red-500 text-xs">
                  {confirmPasswordError}
                </Text>
              </View>
            )}

            {/* Requisitos de la contraseña */}
            <View className="flex flex-row items-start mt-2">
              <MaterialIcons
                name="info-outline"
                size={20}
                color="#222222"
                className="mr-2"
              />
              <Text className="text-sm text-raleway-medium text-typography_2 text-pretty">
                Requisitos de la contraseña - Mínimo de 8 dígitos, una
                mayúscula, un número y un símbolo.
              </Text>
            </View>

            {/* Mostrar mensaje de error general */}
            {errorMessage && (
              <Text className="text-red-500 text-base mt-2 text-center">
                {errorMessage}
              </Text>
            )}
          </View>

          <View className="flex mb-20 gap-2 px-12 w-full">
            <TouchableOpacity
              className={`${
                isButtonDisabled ? "bg-gray-300" : "bg-primary"
              } px-14 py-4 rounded-2xl mt-4`}
              onPress={handleRegister}
              disabled={isButtonDisabled}
            >
              <Text className="text-white text-center font-raleway-semibold text-base">
                Crear cuenta
              </Text>
            </TouchableOpacity>

            <Text className="font-raleway-regular text-base text-center">
              ¿Ya tienes cuenta?{" "}
              <Text
                className="font-raleway-semibold text-primary"
                onPress={() => navigation.navigate("Login")}
              >
                Inicia sesión
              </Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
