import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SvgIconsComponent } from "../commons/SvgIconsComponent";

export const RecoveryPassScreen = () => {

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>{/**  para que el contenido pueda crecer y ocupar todo el espacio disponible*/}
      <View className="flex flex-col justify-between items-center h-full">
        <SvgIconsComponent
          containerClass="w-56 h-44 z-10 mt-[120px] items-center"
          type="logo1"
        />
        <View className="flex gap-4 mt-4 mb-2 w-full px-12">
          <Text className="font-afacad-semibold text-[40px] lg:text-5xl text-center text-typography">
            Recuperación
          </Text>
          <Text className="font-raleway-semibold text-base text-center">
            Para poder accceder se debe de generar una nueva contraseña,
            mediante el enlace que te llegará al correo electrónico.
          </Text>

          {/* --- Correo  --- */}
          <Text className=" -mb-2 uppercase font-afacad-regular text-base">
            Correo electrónico
          </Text>
          <TextInput
            placeholder="Introduce tu correo "
            className="bg-customwhite p-3 text-sm rounded-lg w-full border items-center"
          />

          {/* --- Botón enviar mail ---*/}
          <View className="flex mb-20 gap-2 px-12 w-full">
            <TouchableOpacity className="bg-gray-400 px-14 py-8 rounded-2xl mt-4">
              <Text className="text-white text-center font-raleway-semibold text-base">
                Enviar mail
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
