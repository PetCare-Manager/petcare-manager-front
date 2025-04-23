import { MaterialIcons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type RootStackParamList = {
  FormEvent: undefined;
};
// Definir el tipo de navegación para CreateEvent
type FormEventProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "FormEvent">;
};

export const CreateEvent: React.FC<FormEventProps> = ({ navigation }) => {
  return (
    <View className="flex flex-row items-center  rounded-lg mt-2">
      <View className="container flex bg-white">
        <View className="flex-row justify-center items-center rounded-lg shadow p-4">
          <View className="flex bg-primary rounded-lg w-12 h-12 items-center justify-center mr-4">
            <MaterialIcons name="alarm" size={24} color="#fff" />
          </View>
          {/* Texto de añadir evento */}
          <Text className="text-base text-primary font-raleway-semibold flex-1">
            Añadir Evento
          </Text>

          {/* Botón de añadir mascota */}
          <TouchableOpacity onPress={() => navigation.navigate("FormEvent")}>
            <MaterialIcons name="add" size={30} color="#c04b71" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
