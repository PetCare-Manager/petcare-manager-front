import React from "react";
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
type RootStackParamList = {
  Home: undefined;
  Register: undefined;
  Login: undefined;
};
type LoginScreenProps = NativeStackScreenProps<RootStackParamList, "Login">;

export const Login: React.FC<LoginScreenProps> = ({ navigation }) => {
  return (
    <View className={"flex-1 justify-center items-center bg-white p-4"}>
      <Image source={require("@/assets/images/logo.png")}className="w-56 h-44 mt-44 z-10" />
 
      <TextInput
        placeholder="CORREO ELETRÓNICO"
        className={"border border-gray-300 rounded-lg p-2 w-80 mb-4"}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="CONTRASEÑA"
        className={"border border-gray-300 rounded-lg p-2 w-80 mb-1"}
        secureTextEntry
      />
      <View className={"flex-row justify-center  mt-6"}>
        <TouchableOpacity
          className={
            "bg-indigo-500 rounded-lg py-2 px-4 flex-1 ml-2 items-center justify-center"
          }>
          <Text className={"text-white text-center"}>Login</Text>
        </TouchableOpacity>
      </View>
      <View className={"flex flex-row justify-around rounded-lg p-2 gap-10 mt-6 relative"}>

        <SvgIconsComponent
          containerClass="w-10 h-10"
          type="google"
        />
        <SvgIconsComponent
          containerClass="w-10 h-10"
          type="twitter"
        />
        <SvgIconsComponent
          containerClass="w-10 h-10"
          type="instagram"
        />

      </View>
      <TouchableOpacity className={"mt-2"}>
        <Text className={"text-center"}>¿No tienes cuenta? Registrate!</Text>
      </TouchableOpacity>
    </View>
  );
};

