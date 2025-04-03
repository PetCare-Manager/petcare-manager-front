import { useAuth } from "@/context/AuthContext";
import { validateEmail } from "@/utils/validation";
import { MaterialIcons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

type RootStackParamList = {
  Home: undefined;
  Register: undefined;
  EmailRegister: undefined;
  Login: undefined;
  NotRememberPassScreen: undefined;
  UserProfile: undefined;
};

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, "Login">;

export const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const { login } = useAuth();

  // Estados para los campos de entrada
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true); // Estado para la visibilidad de la contraseña
  const [emailError, setEmailError] = useState(""); // Error específico para el email
  const [passwordError, setPasswordError] = useState(""); // Error específico para la contraseña
  const [errorMessage, setErrorMessage] = useState(""); // Mensaje de error general
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);

  const handleLogin = async () => {
    setErrorMessage("");

    if (!email || !password) {
      setErrorMessage("Por favor revisa tu correo electrónico y contraseña.");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Introduce un email válido.");
      return;
    }

    try {
      await login(email, password);
      navigation.navigate("UserProfile");
    } catch (error: any) {
      setErrorMessage(error?.message || "Hubo un error al iniciar sesión.");
    }
  };

  // Validaciones en tiempo real
  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (!validateEmail(value)) {
      setEmailError("Introduce un email válido.");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    if (!value) {
      setPasswordError("Introduce una contraseña.");
    } else {
      setPasswordError("");
    }
  };

  const isButtonDisabled = Boolean(
    !email || !password || emailError || passwordError
  );

  return (
    <View className="flex flex-col justify-between items-center h-full">
      <View className="flex gap-4 mt-4 mb-6 w-full px-12">
        <Text className="font-raleway-semibold text-base">
          Todo lo que necesitas de tu mascota, en tu bolsillo, a un solo click.
        </Text>
        {/* Correo electrónico */}
        <Text className="-mb-3 text-typography_2 font-raleway-medium text-base">
          Correo electrónico
        </Text>
        <TextInput
          placeholder="Introduce tu email"
          value={email}
          onChangeText={handleEmailChange}
          selectionColor="transparent"
          onFocus={() => setIsFocusedEmail(true)} // Cambia el estado al enfocar
          onBlur={() => setIsFocusedEmail(false)} // Cambia el estado al desenfocar
          className={`bg-customwhite p-4 text-sm rounded-lg w-full border ${
            emailError
              ? "border-red-500 text-red-500"
              : isFocusedEmail
              ? "border-blue-500"
              : "border-inputborder"
          }`}
        />

        {emailError ? (
          <Text className="text-red-500 text-xs mt-1">{emailError}</Text>
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
            onChangeText={handlePasswordChange}
            selectionColor="transparent"
            onFocus={() => setIsFocusedPassword(true)} // Cambia el estado al enfocar
            onBlur={() => setIsFocusedPassword(false)} // Cambia el estado al desenfocar
            className={`bg-customwhite p-4 text-sm rounded-lg w-full border ${
              emailError
                ? "border-red-500 text-red-500"
                : isFocusedPassword
                ? "border-blue-500"
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
          <Text className="text-red-500 text-xs mt-1">{passwordError}</Text>
        ) : null}

        {/* Mostrar mensaje de error general si existe */}
        {errorMessage ? (
          <Text className="text-red-500 text-base mt-2 text-center">
            {errorMessage}
          </Text>
        ) : null}

        <Text
          className="font-raleway-medium text-base underline mb-14"
          onPress={() => navigation.navigate("NotRememberPassScreen")}
        >
          ¿Has olvidado tu contraseña?
        </Text>
      </View>

      {/* Botón de Login */}
      <View className="flex mb-20 gap-2 px-12 w-full">
        <TouchableOpacity
          className={`${
            isButtonDisabled ? "bg-gray-300" : "bg-primary"
          } px-14 py-4 rounded-2xl mt-4`}
          onPress={handleLogin}
          disabled={isButtonDisabled}
        >
          <Text className="text-white text-center font-raleway-semibold text-base">
            Iniciar sesión
          </Text>
        </TouchableOpacity>

        <Text className="font-raleway-regular text-base text-center">
          ¿No tienes cuenta?{" "}
          <Text
            className="font-raleway-bold text-typography_2"
            onPress={() => navigation.navigate("EmailRegister")}
          >
            ¡Regístrate!
          </Text>
        </Text>
      </View>
    </View>
  );
};
