import { MaterialIcons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type RootStackParamList = {
  PetForm: undefined;
};

type AddPetCardProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "PetForm">;
  hasPets: boolean;
};

export const AddPetCard: React.FC<AddPetCardProps> = ({
  navigation,
  hasPets,
}) => {
  return (
    <View className="flex flex-row items-center rounded-lg">
      <View className="container flex bg-white">
        {!hasPets && (
          <Text className="text-typography mb-4 text-base font-raleway-regular">
            Actualmente no dispones de mascotas en la app
          </Text>
        )}

        <View className="flex-row justify-center bg-customwhite items-center rounded-lg shadow p-4">
          {/* Icono de mascota */}
          <View className="flex bg-primary rounded-lg w-12 h-12 items-center justify-center mr-4">
            <MaterialIcons name="pets" size={24} color="#fff" />
          </View>

          {/* Texto de añadir mascota */}
          <Text className=" text-base text-primary font-raleway-semibold flex-1">
            Añadir Mascota
          </Text>

          {/* Botón de añadir mascota */}
          <TouchableOpacity onPress={() => navigation.navigate("PetForm")}>
            <MaterialIcons name="add" size={30} color="#c04b71" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
