import { AddPetCard } from "@/components/AddPetCard";
import { CreateEvent } from "@/components/CreateEventButton";
import { Event } from "@/components/Event";
import { PetList } from "@/components/PetList";
import { UserAvatar } from "@/components/commons/UserAvatar";
import { useAuth } from "@/context/AuthContext";
import { usePets } from "@/context/PetContext";
import { FontAwesome } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { ScrollView, FlatList, Text, View } from "react-native";

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
  const { events } = useEvent();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const renderEvent = ({
    item,
  }: {
    item: {
      title: string | undefined;
      date: string | undefined;
      time: string | undefined;
      dogIcons: string[] | undefined;
    };
  }) => (
    <Event
      title={item.title}
      date={item.date}
      time={item.time}
      dogIcons={item.dogIcons}
    />
  );


  const canAddPet = pets.length < 5;
  const hasPets = pets.length > 0;

  return (
    <ScrollView className="flex items-center w-full h-full p-4">
      <FontAwesome
        name="sign-out"
        size={24}
        color="black"
        className="flex justify-end"
        onPress={handleLogout}
      />
      <UserAvatar />
      <Text className="mt-4 text-2xl font-raleway-regular text-center text-gray-800">
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
        {events && events.length > 0 ? (
          <FlatList
            data={events}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderEvent}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        ) : (
          <Text className="text-typography mb-4 text-sm font-raleway-regular">
            No hay eventos programados
          </Text>
        )}
      </View>

      {/* Botón de cerrar sesión */}
      <TouchableOpacity
        onPress={handleLogout}
        className="bg-primary px-14 py-4 rounded-2xl mt-4"
      >
        <Text className="text-customwhite text-center">Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};
