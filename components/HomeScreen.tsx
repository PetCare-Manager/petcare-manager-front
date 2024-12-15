import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SvgIconsComponent } from "./SvgIconsComponent";

type RootStackParamList = {
  Home: undefined;
  Register: undefined;
  EmailRegister: undefined;
  Login: undefined;
  NotRememberPass: undefined;
  UserProfile: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View className="flex flex-col justify-between items-center h-full">
      <SvgIconsComponent
        containerClass="w-56 h-44 z-10 mt-[120px] items-center"
        type="logo1"
      />

      <View className="items-center -mt-20 px-6">
        <Text className="font-afacad-semibold text-[40px] lg:text-5xl text-center text-typography">
          PetCare Manager
        </Text>
        <Text className="font-raleway-regular text-typography_2 text-2xl lg:text-3xl text-center mt-6">
          Todo lo que necesitas de tu mascota, en tu bolsillo, a un solo click.
        </Text>
      </View>

      {/* Contenedor para los botones en la parte inferior */}
      <View className="flex justify-center gap-6 mb-14 w-full px-6">
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          className="bg-primary px-14 py-4 rounded-2xl"
        >
          <Text className="text-customwhite font-raleway-semibold text-base text-center">
            Iniciar sesión
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("EmailRegister")}
          className="bg-customwhite px-11 py-4 rounded-2xl border border-primary"
        >
          <Text className="text-primary  font-raleway-semibold text-base text-center">
            Regístrate
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
