import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SvgIconsComponent } from "../commons/SvgIconsComponent";

type RootStackParamList = {
  Home: undefined; // Define las rutas y sus parámetros
  Loading: { message?: string }; // Añadir parámetros a la ruta Loading
};

type LoadingScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Loading"
>;

type LoadingScreenProps = {
  route: { params?: { message?: string } }; // Props de los parámetros
};

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ route }) => {
  const navigation = useNavigation<LoadingScreenNavigationProp>();
  const message = route?.params?.message || "PetCare Manager";

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Home"); // Redirige a la pantalla Home
    }, 2000);

    return () => clearTimeout(timer); // Limpia el temporizador al desmontar
  }, [navigation]);

  return (
    <SafeAreaView className="flex-1 flex-col justify-center items-center h-full">
      <SvgIconsComponent
        containerClass="w-56 h-44 z-10 items-center mb-20"
        type="logo1"
      />

      <View className="items-center -mt-20 px-6">
        <Text className="font-afacad-semibold text-[40px] lg:text-5xl text-center text-typography">
          {message}
        </Text>
        <Text className="font-raleway-regular text-typography_2 text-2xl lg:text-3xl text-center mt-6">
          Todo lo que necesitas de tu mascota, en tu bolsillo, a un solo click.
        </Text>
      </View>
    </SafeAreaView>
  );
};
