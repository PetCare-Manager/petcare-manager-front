import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SvgIconsComponent } from "@/components/SvgIconsComponent";
import { MaterialIcons } from "@expo/vector-icons";

export const AddPetCard: React.FC<{ onAddPet: () => void }> = ({
  onAddPet,
}) => {
  return (
    <TouchableOpacity
      onPress={onAddPet}
      className="flex flex-row items-center bg-white rounded-lg p-4"
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
      }}
    >
      <View className="container flex">
        <Text className="text-typography mb-4">
          Actualmente no dispones de mascotas en la app
        </Text>
        <View className="flex-row justify-center items-center rounded-lg shadow p-4">
          {/* Icono de mascota */}
          <View className="flex bg-primary rounded-lg w-12 h-12  items-center justify-center mr-4">
            <SvgIconsComponent type="logo1" containerClass="w-8 h-8" />
          </View>

          <Text className="text-lg text-primary flex-1">Añadir Mascota</Text>
          <View className="bg-pink-200 rounded-full p-2">
            <MaterialIcons name="add" size={24} color="#c04b71" />
          </View>
        </View>
      </View>
      {/* Texto */}
    </TouchableOpacity>
  );
};
