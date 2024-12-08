import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MaterialIcons } from "@expo/vector-icons";
import { validateEmail } from "@/utils/validation"; // Asegúrate de tener esta función de validación
import { userService } from "@/api/authApi"; // Tu servicio para registrar al usuario

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
  const [secureText, setSecureText] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  // Expresión regular para validar la contraseña
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleRegister = async () => {
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
    setErrorMessage("");

    // Verificar si el email ya está registrado
    const emailTaken = await userService.isEmailTaken(email);
    if (emailTaken) {
      setEmailError("Este correo electrónico ya está registrado.");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Por favor, introduce un correo electrónico válido.");
      return;
    }

    if (password.length < 8) {
      setPasswordError("La contraseña debe tener al menos 8 caracteres.");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      // Verificación de mayúsculas
      setPasswordError(
        "La contraseña debe contener al menos una letra mayúscula."
      );
      return;
    }

    if (!/\d/.test(password)) {
      // Verificación de número
      setPasswordError("La contraseña debe contener al menos un número.");
      return;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      // Verificación de símbolo
      setPasswordError("La contraseña debe contener al menos un símbolo.");
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("Las contraseñas no coinciden.");
      return;
    }

    try {
      await userService.register(email, password);
      navigation.navigate("Login");
    } catch (error: any) {
      setErrorMessage(error.message || "Error en el registro.");
    }
  };

  // Limpieza de errores cuando el valor del campo cambia
  const handleEmailChange = (newEmail: string) => {
    setEmail(newEmail);
    if (emailError) {
      setEmailError(""); // Limpia el error si se cambia el valor del email
    }
  };

  const handlePasswordChange = (newPassword: string) => {
    setPassword(newPassword);
    if (passwordError) {
      setPasswordError(""); // Limpia el error si se cambia el valor de la contraseña
    }
  };

  const handleConfirmPasswordChange = (newConfirmPassword: string) => {
    setConfirmPassword(newConfirmPassword);
    if (confirmPasswordError) {
      setConfirmPasswordError(""); // Limpia el error si se cambia el valor de la confirmación de contraseña
    }
  };

  const isButtonDisabled = Boolean(
    !email ||
      !password ||
      !confirmPassword ||
      emailError ||
      passwordError ||
      confirmPasswordError
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
              onChangeText={setEmail}
              className={`bg-customwhite p-4 text-sm rounded-lg w-full border ${
                emailError
                  ? "border-red-500 text-red-500"
                  : emailValid
                  ? "border-green-500 text-green-500"
                  : "border-inputborder"
              }`}
            />
            {emailError ? (
              <View className="flex flex-row items-center mt-1">
                <MaterialIcons
                  name="warning"
                  size={20}
                  color="red"
                  className="mr-2"
                />
                <Text className="text-red-500 text-xs">{emailError}</Text>
              </View>
            ) : null}

            {/* Contraseña */}
            <Text className="-mb-3 text-typography_2 font-raleway-medium text-base">
              Contraseña
            </Text>
            <View className="relative">
              <TextInput
                placeholder="Introduce tu contraseña"
                secureTextEntry={secureText}
                value={password}
                onChangeText={setPassword}
                className={`bg-customwhite p-4 text-sm rounded-lg w-full border ${
                  passwordError
                    ? "border-red-500 text-red-500"
                    : passwordValid
                    ? "border-green-500 text-green-500"
                    : "border-inputborder"
                }`}
              />
              <TouchableOpacity
                onPress={() => setSecureText(!secureText)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
              >
                <MaterialIcons
                  name={secureText ? "visibility" : "visibility-off"}
                  size={24}
                  color="#666"
                />
              </TouchableOpacity>
            </View>
            {passwordError ? (
              <View className="flex flex-row items-center mt-1">
                <MaterialIcons
                  name="warning"
                  size={20}
                  color="red"
                  className="mr-2"
                />
                <Text className="text-red-500 text-xs">{passwordError}</Text>
              </View>
            ) : null}

            {/* Confirmar contraseña */}
            <Text className="-mb-3 text-typography_2 font-raleway-medium text-base">
              Repetir contraseña
            </Text>
            <View className="relative">
              <TextInput
                placeholder="Repite tu contraseña"
                secureTextEntry={secureText}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                className={`bg-customwhite p-4 text-sm rounded-lg w-full border ${
                  confirmPasswordError
                    ? "border-red-500 text-red-500"
                    : confirmPasswordValid
                    ? "border-green-500 text-green-500"
                    : "border-inputborder"
                }`}
              />
              <TouchableOpacity
                onPress={() => setSecureText(!secureText)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
              >
                <MaterialIcons
                  name={secureText ? "visibility" : "visibility-off"}
                  size={24}
                  color="#666"
                />
              </TouchableOpacity>
            </View>
            {confirmPasswordError ? (
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
            ) : null}

            {/* Requisitos de la contraseña con el ícono */}
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
            {errorMessage ? (
              <Text className="text-red-500 text-base mt-2 text-center">
                {errorMessage}
              </Text>
            ) : null}
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
            <Text
              className="text-center text-xs text-typography_2 font-raleway-medium"
              onPress={() => navigation.navigate("Login")}
            >
              ¿Ya tienes cuenta? Inicia sesión.
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
