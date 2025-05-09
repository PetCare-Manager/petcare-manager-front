import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import { LoadingButton } from "../commons/LoadingButton";
import { SvgIconsComponent} from "../commons/SvgIconsComponent";
import authService from "@/services/authService";



//parametros de la navegaciones de la app
type RootStackParamList = {
  Home: undefined;
  Register: undefined;
  EmailRegister: undefined;
  Login: undefined;
  RecoveryPass: undefined;
};

type RecoveryPassScreenProps = NativeStackScreenProps<
 
  RootStackParamList,
  "Home" // nombre de la navegación que se esta usando
>;
// se crea el tipo de los parametros de la navegación que se esta usando
export const RecoveryPassScreen: React.FC<RecoveryPassScreenProps> = ({
  navigation,
}) => {
  // estados para manejar rrl correo, errores y verificación de correo
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [isNotRegistered, setIsNotRegistered] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);


  const validateEmailFormat = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  // HANDLE envio de correo
  const handleSendEmail =  async () => {
    setEmailError("") // resetear el error de correo

    //valida formato del correo 
    if(!email) {
      setEmailError("Por favor, introduce un correo válido");
      return;
    }
    if (!validateEmailFormat(email)) {
      setEmailError("Por favor, introduce un correo válido")
      console.log("__FLAG__ HANLDESENDEMAIL")
      return;
    }
    try{
      setIsLoading(true);// se activa la carga
      //se llama la servicio de autentificacion
      console.log("__FLAG-- ENTRANDO AL SENdPASS RESETEMAIL", email);
      const result = await authService.sendPasswordResetEmail(email);
      console.log("__FLAG__ RESULT:", result);
      Alert.alert(
        "Correo enviado",
        result.message || "Se ha enviado un enlace de recuperación a tu correo."
      );
    }catch (error: any) {
      console.error("Error al enviar correo de recuperación", error);

      if (error.statusCode === 400) {
        setIsNotRegistered(true);
        Alert.alert(
          "Correo no registrado",
          "Este correo no está registrado en nuestra aplicación. Por favor, regístrate."
        );
      }else {
        Alert.alert(
          //otroserrres
          error.messagge || "No se pudo enviar el correo. Intenta más tarde."
        );
      }
    }finally {
      setIsLoading(false);
      setIsNotRegistered(false) // se desactiva la carga finito
    }
  }
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {/**  para que el contenido pueda crecer y ocupar todo el espacio disponible*/}
      <View className="flex flex-col justify-between items-center h-full">
        <SvgIconsComponent
          containerClass="w-56 h-44 z-10 mt-[110px] items-center"
          type="logo1"
        />
        <View className="flex gap-4 mt-4 mb-4 w-full px-12">
          <Text className="font-afacad-semibold text-[40px] lg:text-5xl text-center text-typography">
            Recuperación
          </Text>
          <Text className="font-raleway-semibold text-base text-center">
            Para poder accceder se debe de generar una nueva contraseña mediante
            el enlace que te llegará al correo electrónico.
          </Text>

          {/* --- Correo  --- */}
          <Text className=" -mb-2 uppercase font-afacad-regular text-base" >
            Correo electrónico
          </Text>
          <TextInput
            placeholder="Introduce tu correo "
            className={`bg-customwhite p-3 text-sm rounded-lg w-full border ${
              emailError ? "border-red-500" : ""
            } items-center`}
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              setEmailError("");
              setIsNotRegistered(false);
            }}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/*  mensaje d error */}
          {emailError ? (
            <Text className="text-red-600 text-sm text-center">
              {emailError}
            </Text>
          ) : null}

          {/* --- botón enviar mail ---*/}
          <LoadingButton
            isLoading={isLoading}
            onPress={handleSendEmail}
            title="Enviar email"
            fields={[email]}
            errors={[emailError]}
          />

          {/*mensaje si el correo no esta registrado */}
          {isNotRegistered && (
            <View className="flex items-center mb-10">
              <Text className="text-red-700  text-sm text-center mb-2">
                Este correo no esta registrado, por favor registrese.
              </Text>

              {/*link para registrarse si el correo no esta registrad */}
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
          )}
        </View>
      </View>
    </ScrollView>
  );
};