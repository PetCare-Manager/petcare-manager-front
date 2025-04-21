import { usePets } from "@/context/PetContext";
import React from "react";
import { ActivityIndicator, View } from "react-native";
import { PetCard } from "./PetCard";

export const PetList: React.FC = () => {
  const { pets } = usePets();

  if (!pets) return <ActivityIndicator size="large" color="#19647E" />;

  return (
    <View className="mt-2">
      {pets.map((pet, index) => (
        <PetCard
          key={index}
          name={pet.name}
          breed={pet.breed}
          gender={pet.gender}
          imageUrl={pet.imageUrl}
          birthdate={pet.birth} // ¡Ojo aquí!
        />
      ))}
    </View>
  );
};
