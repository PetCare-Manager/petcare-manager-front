import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SvgIconsComponent } from "../commons/SvgIconsComponent";

export const RecoveryPassWordScreen = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>{/**  para que el contenido pueda crecer y ocupar todo el espacio disponible*/}
      
      <View className="flex flex-col justify-between items-center min-h-full">
        <SvgIconsComponent
          containerClass="w-56 h-44 z-10 mt-[120px] items-center"
          type="logo1"
        />
        <View className="flex gap-4 mt-4 mb-6 w-full px-12">
          <Text className="font-afacad-semibold text-[40px] lg:text-5xl text-center text-typography">
            Contraseña
          </Text>
          <Text className="font-ralewayy-semibold text-base text-center">
            Todo lo que necesitas de tu mascota, en tu bolsillo, a un solo click
          </Text>

          {/** Correo */}
          <Text className="-mb-2 uppercase font-afacad-regular text-base">
            Correo electrónico
          </Text>
          <TextInput
            placeholder="Introduce tu correo"
            className="bg-customwhite p-3 text-sm rounded-lg wfull border"
          />

          {/** Contraseña */}
          <Text className=" -mb-2 uppercase font-afacad-regular text-base">
            Contraseña
          </Text>
          <TextInput
            placeholder="Nueva contraseña"
            className="bg-customwhite p-3 text-sm rounded-lg w-full border "
          />

          {/** Repetir Contraseña */}
          <Text className="-mb-2 uppercase font-afacad-regular text-base ">
            Repetir contraseña
          </Text>
          <TextInput
            placeholder="Repetir nueva contraseña"
            className="bg-customwhite p-3 text-sm rounded-lg w-full border"
          />

          {/** Requisitos de la contraseña */}
          <View className="flex-row items-center mt-1">
            <View className="w-5 h-5 rounded-full border border-gray-700 items-center justify-center mr-2">
              <Text className="text-gray-700 text-xs">i</Text>
            </View>
            <Text className="font-afacad-regular">
              Requisitos de la contraseña
            </Text>
          </View>

          {/**Botón cmabiar contraseña */}
          <View className="flex mb-20 gap-2 px-12 w-full">
            <TouchableOpacity className="bg-gray-400 px-8 py-8 rounded-2xl mt-4">
              <Text className="text-white text-center front-raleway-semibold text-base">
                Cambiar contraseña
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
