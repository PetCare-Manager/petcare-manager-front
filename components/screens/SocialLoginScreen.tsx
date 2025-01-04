import { SvgIconsComponent } from "@/components/commons/SvgIconsComponent";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type RootStackParamList = {
  Home: undefined;
  SocialLogin: undefined;
  EmailRegister: undefined;
  Login: undefined;
};

type SocialLoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "SocialLogin"
>;

export const SocialLoginScreen: React.FC<SocialLoginScreenProps> = ({
  navigation,
}) => {
  return (
    <View className="flex flex-col justify-between items-center h-full">
      <SvgIconsComponent
        containerClass="w-56 h-44 z-10 mt-[120px] items-center"
        type="logo1"
      />

      <View className="flex items-center gap-4 px-6 mt-4 mb-6 text-typography">
        <TouchableOpacity
          className="flex flex-row items-center justify-center gap-4 bg-[#f2f2f2] border border-black rounded-lg w-full p-4"
          //onPress={() => navigation.navigate("Login")}
        >
          <SvgIconsComponent containerClass="w-6 h-6" type="google" />
          <Text className="font-raleway-semibold text-base text-typography">
            Continúa con Google
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex flex-row items-center justify-center gap-4 bg-[#f2f2f2] border border-black rounded-lg w-full p-4"
          //onPress={() => navigation.navigate("Login")}
        >
          <SvgIconsComponent containerClass="w-6 h-6" type="twitter" />
          <Text className="font-raleway-semibold text-base text-typography">
            Continúa con Twitter
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex flex-row items-center justify-center gap-4 bg-[#f2f2f2] border border-black rounded-lg w-full p-4"
          //onPress={() => navigation.navigate("Login")}
        >
          <SvgIconsComponent containerClass="w-6 h-6" type="instagram" />
          <Text className="font-raleway-semibold text-base text-typography">
            Continúa con Instagram
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex flex-row items-center justify-center gap-4 bg-[#f2f2f2] border border-black rounded-lg w-full p-4"
          onPress={() => navigation.navigate("EmailRegister")}
        >
          <SvgIconsComponent containerClass="w-6 h-6" type="email" />
          <Text className="font-raleway-semibold text-base text-typography">
            Continúa con tu correo
          </Text>
        </TouchableOpacity>
      </View>
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
