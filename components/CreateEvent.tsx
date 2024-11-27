import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  FormEvent: undefined;
};
// Definir el tipo de navegación para CreateEvent
type FormEventProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "FormEvent">;
};

export const CreateEvent: React.FC<FormEventProps> = ({ navigation }) => {
  return (
    <View className="flex flex-row items-center bg-white rounded-lg p-4">
      <View className="container flex">
        <View className="flex-row justify-center items-center rounded-lg shadow p-4">
          <View className="flex bg-primary rounded-lg w-12 h-12 items-center justify-center mr-4">
            <MaterialIcons name="alarm" size={24} color="#fff" />
          </View>
          {/* Texto de añadir evento */}
          <Text className="text-lg text-primary font-raleway-semibold flex-1">
            Añadir Evento
          </Text>

          {/* Botón de añadir mascota */}
          <TouchableOpacity
            onPress={() => navigation.navigate("FormEvent")}
            className="bg-pink-200 rounded-full p-2"
          >
            <MaterialIcons name="add" size={24} color="#c04b71" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
