import { AddPetCard } from "@/components/AddPetCard";
import { CreateEvent } from "@/components/CreateEventButton";
import { Event } from "@/components/Event";
import { UserAvatar } from "@/components/commons/UserAvatar";
import { useAuth } from "@/context/AuthContext";
import { usePets } from "@/context/PetContext";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { PetList } from "../PetList";

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
  const { pets } = usePets();

  const handleLogout = () => {
    logout();
  };

  const canAddPet = pets.length < 5;
  const hasPets = pets.length > 0;

  return (
    <ScrollView className="flex items-center w-full h-full p-4">
      <UserAvatar />
      <Text className="mt-4 text-2xl font-raleway-regular text-gray-800">
        Hola, ¡disfruta tu día!
      </Text>

      {/* Sección de mascotas */}
      <View className="w-full mt-6 px-4">
        <Text className="text-xl font-afacad-semibold text-typography_2">
          Mis mascotas
        </Text>
        {hasPets && <PetList />}
        {canAddPet && (
          <AddPetCard navigation={navigation} hasPets={hasPets} />
        )}{" "}
        {/* Pasamos hasPets como prop */}
        {!hasPets && (
          <Text className="text-typography mb-4 text-base font-raleway-regular">
            Actualmente no dispones de mascotas en la app
          </Text>
        )}
        <CreateEvent navigation={navigation} />
        <Event />
      </View>
      <TouchableOpacity
        onPress={handleLogout}
        className="bg-primary px-14 py-4 rounded-2xl mt-4 "
      >
        <Text className="text-customwhite font-raleway-semibold">
          Cerrar sesión
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
