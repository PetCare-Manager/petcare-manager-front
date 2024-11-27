import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

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
  return (
    <View className="flex flex-col justify-between items-center h-full">
      <SvgIconsComponent
        containerClass="w-56 h-44 z-10 mt-[120px] items-center"
        type="logo1"
      />

      <View className="items-center -mt-30 px-6">
        <Text className="font-afacad-semibold text-[32px] lg:text-5xl text-center text-typography">
          ¿Has olvidado tu contraseña?
        </Text>
        <Text className="font-raleway-light text-typography_2 text-2xl lg:text-3xl text-center mt-6">
          No te preocupes, te enviaremos instrucciones a tu email para
          restablecerla.
        </Text>
        <View className="flex gap-4 mt-4 mb-6 w-full px-12">
          <Text className="-mb-3 uppercase font-afacad-regular text-base">
            Correo electrónico
          </Text>
          <TextInput
            placeholder="example@example.com"
            //value={email}
            //onChangeText={setEmail}
            className="bg-[#f2f2f2] border border-inputborder rounded-lg w-full p-2"
          />
        </View>

        <TouchableOpacity
          //onPress={handleRegister}
          className="bg-primary px-14 py-4 rounded-2xl mt-4"
        >
          <Text className="text-white text-center font-raleway-semibold text-base">
            Enviar email de recuperación
          </Text>
        </TouchableOpacity>
      </View>
      {/* Link para iniciar sesión */}
      <Text className="font-raleway-regular text-base mb-14">
        ¿No tienes cuenta?{" "}
        <Text
          className="font-raleway-bold text-typography_2"
          onPress={() => navigation.navigate("EmailRegister")}
        >
          ¡Regístrate!
        </Text>
      </Text>
    </View>
  );
};
