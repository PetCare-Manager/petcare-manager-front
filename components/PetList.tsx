import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import axiosInstance from "../api/axiosInstance";
import { PetCard } from "./PetCard";

interface Pet {
  name: string;
  breed: string;
  gender: "M" | "F";
  imageUrl?: string;
  birthdate: string;
}

export const PetList: React.FC = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axiosInstance.get("/pets");
        console.log("🐶 Datos recibidos:", response.data); // <- agrega esto
        setPets(response.data);
      } catch (err: any) {
        setError("Error al cargar mascotas");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  if (loading) return <ActivityIndicator size="large" color="#19647E" />;
  if (error) return <Text className="text-red-500">{error}</Text>;

  return (
    <View className="mt-2">
      {pets.map((pet, index) => (
        <PetCard
          key={index}
          name={pet.name}
          breed={pet.breed}
          gender={pet.gender}
          imageUrl={pet.imageUrl}
          birthdate={pet.birthdate}
        />
      ))}
    </View>
  );
};
