import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface RegistroMascotaProps {
  conDocumentacion: boolean;
  onFinalizar: () => void;
  onAnadirOtraMascota: () => void;
}

const RegistroMascota: React.FC<RegistroMascotaProps> = ({
  conDocumentacion,
  onFinalizar,
  onAnadirOtraMascota,
}) => {
  return (
    <View className="flex-1 justify-center items-center p-4">
      <View className="bg-white rounded-lg p-6 w-full max-w-sm">
        <Text className="text-lg font-bold mb-4">Registro Mascota</Text>

        {conDocumentacion ? (
          <>
            <View className="flex items-center mb-4">
              <Image
                source={require("../../assets/images/petregisterOK.png")} // Reemplaza con tu icono de éxito
                className="w-20 h-20"
              />
              <Text className="text-center mt-2">
                Los datos de tu mascota han sido registrados correctamente.
              </Text>
            </View>
          </>
        ) : (
          <>
            <View className="flex items-center mb-4">
              <Image
                source={require("../../assets/images/petregisterwarning.png")} // Reemplaza con tu icono de advertencia
                className="w-20 h-20"
              />
              <Text className="text-center mt-2">
                Los datos de tu mascota han sido registrados sin documentación.
              </Text>
              <Text className="text-center text-red-500 mt-1">
                Recuerda incluir la documentación.
              </Text>
            </View>
          </>
        )}

        <TouchableOpacity
          className="bg-pink-600 rounded-md p-3 mt-4"
          onPress={onFinalizar}
        >
          <Text className="text-white text-center font-bold">Finalizar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-gray-200 rounded-md p-3 mt-2"
          onPress={onAnadirOtraMascota}
        >
          <Text className="text-gray-700 text-center font-bold">
            Añadir otra mascota
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegistroMascota;
