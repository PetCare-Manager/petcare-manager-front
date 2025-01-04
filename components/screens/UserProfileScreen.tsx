import { AddPetCard } from "@/components/AddPetCard";
import { CreateEvent } from "@/components/CreateEventButton";
import { Event } from "@/components/Event";
import { UserAvatar } from "@/components/commons/UserAvatar";
import { useAuth } from "@/context/AuthContext";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type UserProfileScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "PetForm",
  "FormEvent"
>;

type RootStackParamList = {
  PetForm: undefined;
  FormEvent: undefined;
};

export const UserProfileScreen: React.FC<UserProfileScreenProps> = ({
  navigation,
}) => {
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
    // Puedes manejar alguna navegación adicional si es necesario
  };
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
        <CreateEvent navigation={navigation} />
        <Event />
      </View>
      <TouchableOpacity
        onPress={handleLogout}
        className="bg-primary px-14 py-4 rounded-2xl mt-4 "
      >
        <Text className="text-customwhite"> Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};
