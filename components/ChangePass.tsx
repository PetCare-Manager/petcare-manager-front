import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import axios from "axios";
import { SvgIconsComponent } from "./SvgIconsComponent";

type RootStackParamList = {
  Home: undefined;
  Register: undefined;
  EmailRegister: undefined;
  Login: undefined;
  NotRememberPass: undefined;
};

type NotRememberPassProps = NativeStackScreenProps<RootStackParamList, "Home">;

export const NotRememberPass: React.FC<NotRememberPassProps> = ({
  navigation,
}) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleResetPassword = async () => {
    if (!password || !confirmPassword) {
      setError("Ambos campos son obligatorios");
      return;
    }
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }
    setError("");

    try {
      const response = await axios.post(
        "https://api.example.com/reset-password",
        {
          password,
        }
      );

      Alert.alert("Contraseña reestablecida con éxito");
      navigation.navigate("Login");
    } catch (error: any) {
      if (error.response) {
        setError(
          error.response.data.message || "Error al reestablecer la contraseña"
        );
      } else {
        setError("Error de conexión. Intente nuevamente.");
      }
    }
  };

  return (
    <View className="flex flex-col justify-between items-center h-full">
      <SvgIconsComponent
        containerClass="w-56 h-44 z-10 mt-[120px] items-center"
        type="logo1"
      />

      <View className="items-center -mt-30 px-6">
        <Text className="font-afacad-semibold text-[40px] lg:text-5xl text-center text-typography">
          Recuperar contraseña
        </Text>
        <View className="flex gap-4 mt-4 mb-6 w-full px-12">
          <Text className="-mb-3 uppercase font-afacad-regular text-base">
            Contraseña nueva
          </Text>
          <TextInput
            placeholder="Ingresa tu nueva contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            className="bg-[#f2f2f2] border border-inputborder rounded-lg w-full p-2"
          />

          <Text className="-mb-3 uppercase font-afacad-regular text-base">
            Repetir contraseña
          </Text>
          <TextInput
            placeholder="Repite tu nueva contraseña"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            className="bg-[#f2f2f2] border border-inputborder rounded-lg w-full p-2"
          />

          {error ? (
            <Text className="text-red-500 text-center mt-2">{error}</Text>
          ) : null}
        </View>

        <TouchableOpacity
          onPress={handleResetPassword}
          className="bg-primary px-14 py-4 rounded-2xl mt-4"
        >
          <Text className="text-white text-center font-raleway-semibold text-base">
            Reestablecer contraseña
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
