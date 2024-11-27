import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Event } from "./Event";
import { AddPetCard } from "./AddPetCard";
import { UserAvatar } from "./UserAvatar";
import { CreateEvent } from "./CreateEvent";

type UserProfileProps = NativeStackScreenProps<
  RootStackParamList,
  "PetForm",
  "FormEvent"
>;

type RootStackParamList = {
  PetForm: undefined;
  CreateEvent: undefined;
};

export const UserProfile: React.FC<UserProfileProps> = ({ navigation }) => {
  return (
    <View className="flex items-center justify-center bg-white w-full h-full p-4">
      <UserAvatar />
      <Text className="mt-4 text-2xl font-raleway-regular text-gray-800">
        Hola, ¡disfruta tu día!
      </Text>

      {/* Sección de mascotas */}
      <View className="w-full mt-6 px-4">
        <Text className="text-xl font-afacad-semibold text-typography_2">
          Mis mascotas
        </Text>
        {/* Aquí se pasa la propiedad navigation a AddPetCard */}
        <AddPetCard navigation={navigation} />
        {/* <PetCard/> */}
        <CreateEvent navigation={navigation} />
        <Event />
      </View>
    </View>
  );
};
