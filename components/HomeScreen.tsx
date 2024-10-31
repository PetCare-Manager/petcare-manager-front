import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import logo from "@/assets/images/logo.png";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Bubble } from "@/components/Bubbles";

type RootStackParamList = {
  Home: undefined;
  Register: undefined;
  Login: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View className="m-auto w-[375px] h-[755px] bg-white justify-between items-center border border-red-600 p-4 relative rounded-xl shadow-lg">
      <Image source={logo} className=" w-56 h-44 mt-44 z-10" />

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

      <View className="items-center b">
        <View className="w-full px-10">
          <Text className="font-afacad-semibold text-3xl text-center text-slate-600 mb-8">
            PetCare Manager
          </Text>

          <Text className="font-raleway-light text-xl text-center text-gray-800">
            Todo lo que necesitas de tu mascota, en tu bolsillo, a un solo
            click.
          </Text>
        </View>
      </View>
      {/* Contenedor para los botones en la parte inferior */}
      <View className="w-full">
        <View className="flex-row justify-between mb-10 mx-12">
          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            className="bg-white rounded-lg w-32 h-12 border border-indigo-500 py-2 px-4 items-center justify-center"
          >
            <Text className="text-indigo-500 font-raleway-regular">
              Registro
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            className="bg-indigo-500 w-32 h-12 rounded-lg py-2 px-4 items-center justify-center"
          >
            <Text className="text-white font-raleway-regular">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
