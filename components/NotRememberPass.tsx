import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Bubble } from "@/components/Bubbles";
import { SvgIconsComponent } from "./SvgIconsComponent";

type RootStackParamList = {
  Home: undefined;
  Register: undefined;
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
        containerClass="w-56 h-44 z-10 mt-[120px]"
        type="logo1"
      />

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
          <Text className="text-white text-center font-raleway-semibold text-sm">
            Enviar email de recuperación
          </Text>
        </TouchableOpacity>
      </View>
      {/* Link para iniciar sesión */}
      <Text className="font-raleway-regular text-base mb-14">
        ¿No tienes cuenta?{" "}
        <Text
          className="font-raleway-bold text-typography_2"
          onPress={() => navigation.navigate("Register")}
        >
          ¡Regístrate!
        </Text>
      </Text>
    </View>
  );
};
