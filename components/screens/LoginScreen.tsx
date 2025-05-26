import { FormInput } from "@/components/commons/FormInput";
import { useAuth } from "@/context/AuthContext";
import { useFormInput } from "@/hooks/useFormInput";
import { validateEmail } from "@/utils/validation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import LogoSmall from "../commons/LogoSmall";

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
  const [secureText, setSecureText] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const email = useFormInput("", (value) =>
    !validateEmail(value) ? "Introduce un email válido." : ""
  );
  const password = useFormInput("", (value) =>
    !value ? "Introduce una contraseña." : ""
  );

  const isButtonDisabled: boolean =
    !email.value ||
    !password.value ||
    email.error.length > 0 ||
    password.error.length > 0;

  const handleLogin = async () => {
    setErrorMessage("");
    if (!email.value || !password.value || email.error || password.error) {
      setErrorMessage("Por favor revisa tu correo electrónico y contraseña.");
      return;
    }
    try {
      await login(email.value, password.value);
      navigation.navigate("UserProfile");
    } catch (error: any) {
      setErrorMessage(error?.message || "Hubo un error al iniciar sesión.");
    }
  };

  return (
    <View className="flex flex-col justify-between items-center h-full">
      <LogoSmall title={"Login"} />
      <View className="flex gap-4 mt-4 mb-6 w-full px-12">
        <Text className="font-raleway-semibold text-base">
          Todo lo que necesitas de tu mascota, en tu bolsillo, a un solo click.
        </Text>
        <FormInput
          label="Correo electrónico"
          placeholder="Introduce tu email"
          input={email}
        />
        <FormInput
          label="Contraseña"
          placeholder="Introduce tu contraseña"
          secureTextEntry={secureText}
          input={password}
          isPassword={true}
          toggleVisibility={() => setSecureText(!secureText)}
        />
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
