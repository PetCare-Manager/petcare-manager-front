import { FormInput } from "@/components/commons/FormInput";
import { useFormInput } from "@/hooks/useFormInput";
import userService from "@/services/userService";
import { validateEmail, validatePassword } from "@/utils/validation"; // Importa la nueva función de validación
import { MaterialIcons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react"; // Importa useEffect
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type RootStackParamList = {
  Home: undefined;
  Register: undefined;
  EmailRegisterScreen: undefined;
  Login: undefined;
  Loading: { message: string };
};

type EmailRegisterScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "EmailRegisterScreen"
>;

export const EmailRegisterScreen: React.FC<EmailRegisterScreenProps> = ({
  navigation,
}) => {
  const [secureTextPassword, setSecureTextPassword] = useState(true);
  const [secureTextConfirmPassword, setSecureTextConfirmPassword] =
    useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const email = useFormInput("", (value) =>
    !validateEmail(value)
      ? "Por favor, introduce un correo electrónico válido."
      : ""
  );

  const password = useFormInput("", validatePassword);

  const confirmPassword = useFormInput("", (value) =>
    value !== password.value ? "Las contraseñas no coinciden." : ""
  );

  useEffect(() => {
    if (confirmPassword.value) {
      confirmPassword.setError(
        confirmPassword.value !== password.value
          ? "Las contraseñas no coinciden."
          : ""
      );
    }
  }, [password.value, confirmPassword.value, confirmPassword.setError]);

  const isButtonDisabled = Boolean(
    email.error ||
      password.error ||
      confirmPassword.error ||
      !email.value ||
      !password.value ||
      !confirmPassword.value
  );

  const handleRegister = async () => {
    email.onChange(email.value);
    password.onChange(password.value);
    confirmPassword.onChange(confirmPassword.value);

    if (
      email.error ||
      password.error ||
      confirmPassword.error ||
      isButtonDisabled
    ) {
      return;
    }

    try {
      await userService.register(email.value, password.value);
      navigation.navigate("Loading", {
        message: "Registro completado con éxito",
      });

      setTimeout(() => {
        navigation.navigate("Login");
      }, 2000);
    } catch (error: any) {
      setErrorMessage(error.message || "Error en el registro.");
    }
  };

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
            <FormInput
              label="Correo electrónico"
              placeholder="Introduce tu email"
              input={email}
            />

            <FormInput
              label="Contraseña"
              placeholder="Introduce tu contraseña"
              secureTextEntry={secureTextPassword}
              input={password}
              isPassword={true}
              toggleVisibility={() =>
                setSecureTextPassword(!secureTextPassword)
              }
            />

            <FormInput
              label="Repetir contraseña"
              placeholder="Repite tu contraseña"
              secureTextEntry={secureTextConfirmPassword}
              input={confirmPassword}
              isPassword={true}
              toggleVisibility={() =>
                setSecureTextConfirmPassword(!secureTextConfirmPassword)
              }
            />

            <View className="flex flex-row items-start mt-2">
              <MaterialIcons
                name="info-outline"
                size={20}
                color="#222222"
                className="mr-2"
              />
              <Text className="text-sm text-raleway-medium text-typography_2 text-pretty">
                Requisitos de la contraseña - Mínimo de 8 carácteres, incluyendo
                una mayúscula, un número y un símbolo.
              </Text>
            </View>

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
