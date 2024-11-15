import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  PetForm: undefined;
};
// Definir el tipo de navegación para AddPetCard
type AddPetCardProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "PetForm">;
};

export const AddPetCard: React.FC<AddPetCardProps> = ({ navigation }) => {
  return (
    <View className="flex flex-row items-center bg-white rounded-lg p-4">
      <View className="container flex">
        <Text className="text-typography mb-4 text-base font-raleway-light">
          Actualmente no dispones de mascotas en la app
        </Text>

        <View className="flex-row justify-center items-center rounded-lg shadow p-4">
          {/* Icono de mascota */}
          <View className="flex bg-primary rounded-lg w-12 h-12 items-center justify-center mr-4">
            <MaterialIcons name="pets" size={24} color="#fff" />
          </View>

          {/* Texto de añadir mascota */}
          <Text className="text-lg text-primary flex-1">Añadir Mascota</Text>

          {/* Botón de añadir mascota */}
          <TouchableOpacity
            onPress={() => navigation.navigate("PetForm")}
            className="bg-pink-200 rounded-full p-2"
          >
            <MaterialIcons name="add" size={24} color="#c04b71" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
