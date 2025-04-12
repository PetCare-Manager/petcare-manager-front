import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

type RootStackParamList = {
  Home: undefined;
  Register: undefined;
  EmailRegister: undefined;
  Login: undefined;
  NotRememberPass: undefined;
  UserProfile: undefined;
  PetForm: undefined;
};

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

interface RegistroMascotaProps {
  conDocumentacion: boolean;
}

const RegistroMascota: React.FC<RegistroMascotaProps> = ({
  conDocumentacion,
}) => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View className="flex flex-col justify-between rounded-lg items-center w-full h-full bg-white">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="w-full px-6 pt-[120px]"
      >
        <View className="items-center mb-10">
          {conDocumentacion ? (
            <>
              <Text className="text-center mt-4 font-raleway-bold text-2xl text-typography_2">
                Los datos de tu mascota han sido registrados correctamente.
              </Text>
              <Image
                source={require("../../assets/images/petregisterOK.png")}
                className="w-40 h-40"
              />
            </>
          ) : (
            <>
              <Text className="text-center mt-4 font-raleway-bold text-2xl text-typography_2">
                Los datos de tu mascota han sido registrados sin documentación.
              </Text>
              <Image
                source={require("../../assets/images/petregisterwarning.png")}
                className="w-20 h-20"
              />
              <Text className="text-center text-red-500 mt-2 font-raleway-regular text-sm">
                Recuerda incluir la documentación.
              </Text>
            </>
          )}
        </View>
      </ScrollView>

      <View className="flex justify-center gap-4 mb-14 w-full px-6">
        <TouchableOpacity
          onPress={() => navigation.navigate("UserProfile")}
          className="bg-primary px-14 py-4 rounded-2xl"
        >
          <Text className="text-customwhite font-raleway-semibold text-base text-center">
            Finalizar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("PetForm")}
          className="bg-customwhite px-8 py-4 rounded-2xl border border-primary"
        >
          <Text className="text-primary font-raleway-semibold text-base text-center">
            Añadir otra mascota
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegistroMascota;
