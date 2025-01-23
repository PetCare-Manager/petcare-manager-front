import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { breeds as breedData, Breed } from "@/utils/breeds";


export const PetForm = () => {
  const [isNeutered, setIsNeutered] = useState<boolean | null>(false);
  const [breedOpen, setBreedOpen] = useState(false);
  const [selectedBreed, setSelectedBreed] = useState<string | null>(null);

  // Convertimos las razas para el Dropdown
  const [breeds, setBreeds] = useState(
    breedData.map((breed) => ({
      label: breed.name,
      value: breed.name,
    }))
  );

  const handleSubmit = () => {
    if (!selectedBreed) {
      alert("Por favor, selecciona una raza");
      return;
    }

    const petData = {
      breed: selectedBreed,
      isNeutered,
    };

    console.log("Datos de la mascota", petData);
  };

  // Buscar la imagen correspondiente a la raza seleccionada
  const selectedBreedImage = breedData.find(
    (breed) => breed.name === selectedBreed
  )?.image;

  return (
    <View className="flex-1 bg-white">
      <View className="flex-1 justify-center px-6">
        <Text className="font-afacad-semibold text-3xl text-center text-typography mb-8">
          Añadir mascota
        </Text>

        {/* Campo Nombre */}
        <Text className="text-base text-gray-600 mb-2">Nombre</Text>
        <TextInput
          placeholder="Escribe el nombre"
          className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mb-4"
        />

        {/* Fecha de Nacimiento */}
        <Text className="text-base text-gray-600 mb-2">Edad</Text>
        <TextInput
          placeholder="DD/MM/AAAA"
          className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mb-4"
        />

        {/* Campo Sexo */}
        <Text className="text-base text-gray-600 mb-2">Sexo</Text>
        <TextInput
          placeholder="Sexo"
          className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mb-4"
        />

        {/* Dropdown para Raza */}
        <Text className="text-base text-gray-600 mb-2">Raza</Text>
        <DropDownPicker
          open={breedOpen}
          value={selectedBreed}
          items={breeds}
          setOpen={setBreedOpen}
          setValue={setSelectedBreed}
          setItems={setBreeds}
          placeholder="Selecciona la raza"
          zIndex={5000}
          autoScroll={true}
          style={{
            backgroundColor: "#f3f4f6",
            borderColor: "#d1d5db",
            borderRadius: 8,
            marginBottom: 48,
          }}
          dropDownContainerStyle={{
            backgroundColor: "#f3f4f6",
            borderColor: "#d1d5db",
          }}
        />

        {/* Botón */}
        <TouchableOpacity
          onPress={handleSubmit}
          className="bg-primary rounded-lg py-3"
        >
          <Text className="text-white text-center text-lg font-medium">
            Añadir Mascota
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
