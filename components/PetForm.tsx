import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Bubble } from "@/components/Bubbles";
import BottomTabBar from "./BottomTabBar";

export const PetForm = () => {
  const [isNeutered, setIsNeutered] = useState<boolean | null>(false);
  const [breedOpen, setBreedOpen] = useState(false);
  const [neuteredOpen, setNeuteredOpen] = useState(false);
  const [selectedBreed, setSelectedBreed] = useState("");

  const neuteredOptions = [
    { label: "Si", value: true },
    { label: "No", value: false },
  ];

  const BreedList = [
    { label: "Labrador", value: "labrador" },
    { label: "SharPei", value: "harPei" },
    { label: "Border Collie", value: "border_collie" },
    { label: "Chihuahua", value: "chihuahua" },
    { label: "Beagle", value: "beagle" },
  ];

  const handleSubmit = () => {
    const petData = {
      breed: selectedBreed,
      isNeutered,
    };
    console.log("Datos de la mascota", petData);
    // Aquí podrías llamar a una API o hacer algo con los datos recogidos
  };

  return (
    <View className="m-auto w-[375px] h-[755px] bg-white justify-between items-center border border-red-600 p-4 relative rounded-xl shadow-lg">
      <Bubble
        containerClass="absolute -top-20 -left-16 z-0"
        type="bubble2"
        rotation={-45}
      />
      <Bubble
        containerClass="absolute bottom-32 right-0 z-0"
        type="bubble3"
        rotation={-45}
      />
      <Bubble
        containerClass="absolute top-36 right-0 z-0"
        type="bubble3"
        rotation={-45}
      />
      <Bubble
        containerClass="absolute bottom-96 right-80 z-0"
        type="bubble4"
        rotation={-45}
      />
      <Bubble
        containerClass="absolute bottom-32 right-80 z-0"
        type="bubble5"
        rotation={-60}
      />

      <View className="items-center z-10">
        <View className="w-full px-10 pt-20">
          <Text className="font-afacad-semibold text-3xl text-center text-slate-600 mb-8">
            Añadir mascota
          </Text>

          {/* Nombre de la mascota */}
          <TextInput
            placeholder="Nombre"
            className="border p-2 mb-4 rounded bg-white text-black"
          />

          {/* Selección de raza */}
          <DropDownPicker
            open={breedOpen}
            value={selectedBreed}
            items={BreedList}
            setOpen={setBreedOpen}
            setValue={setSelectedBreed}
            placeholder="Seleccione una raza"
            containerStyle={{ width: "100%" }}
            dropDownContainerStyle={{ width: "100%" }}
            style={{ marginBottom: 20 }}
          />

          {/* Fecha de nacimiento */}
          <TextInput
            placeholder="Fecha de nacimiento"
            className="border p-2 mb-4 rounded bg-white text-black"
          />

          {/* Peso */}
          <TextInput
            placeholder="Peso"
            keyboardType="numeric"
            className="border p-2 mb-4 rounded bg-white text-black"
          />

          {/* Microchip */}
          <TextInput
            placeholder="Microchip"
            className="border p-2 mb-4 rounded bg-white text-black"
          />

          {/* Esterilizado */}
          <DropDownPicker
            open={neuteredOpen}
            value={isNeutered}
            items={neuteredOptions}
            setOpen={setNeuteredOpen}
            setValue={setIsNeutered}
            placeholder="Esterilizado"
            containerStyle={{ width: "100%" }}
            dropDownContainerStyle={{ width: "100%" }}
            style={{ marginBottom: 20 }}
          />

          {/* Botón para añadir mascota */}
          <View className="w-full items-center mt-6">
            <TouchableOpacity
              className="bg-indigo-500 w-72 h-12 rounded-lg py-2 px-6 items-center justify-center"
              onPress={handleSubmit}
            >
              <Text className="text-white font-semibold">Añadir mascota</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <BottomTabBar />
    </View>
  );
};
