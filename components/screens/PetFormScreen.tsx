import { breeds as breedData } from "@/utils/breeds";
import { FontAwesome } from "@expo/vector-icons"; // Para el icono de interrogación
import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export const PetForm = () => {
  const [sex, setSex] = useState("Hembra");
  const [hasDisease, setHasDisease] = useState(false);
  const [onNeuter, setOnNeuter] = useState(false);
  const [breedOpen, setBreedOpen] = useState(false);
  const [selectedBreed, setSelectedBreed] = useState<string | null>(null);
  const [showMicrochipInfo, setShowMicrochipInfo] = useState(false);

  // Convertimos las razas para el Dropdown
  const breeds = breedData.map((breed) => ({
    label: breed.name,
    value: breed.name,
  }));

  const toggleMicrochipInfo = () => {
    setShowMicrochipInfo(!showMicrochipInfo);
  };

  const handleSubmit = () => {
    alert("Formulario enviado correctamente");
  };

  return (
    <ScrollView className="flex-1 px-6 py-8">
      <Text className="text-xl font-raleway-semibold text-start mb-6">
        Rellena los datos de tu mascota
      </Text>

      {/* Campo Nombre */}
      <Text className="text-base text-typography_2 font-raleway-medium mb-2">
        Nombre:
      </Text>
      <TextInput
        placeholder="Escribe el nombre"
        className="bg-customwhite border border-inputborder rounded-lg px-4 py-2 mb-4"
      />

      {/* Campo Edad */}
      <Text className="text-base text-typography_2 font-raleway-medium mb-2">
        Fecha de nacimiento:
      </Text>
      <TextInput
        placeholder="DD/MM/AAAA"
        className="bg-customwhite border border-inputborder rounded-lg px-4 py-2 mb-4"
      />

      {/* Campo Sexo */}
      <Text className="text-base text-typography_2 font-raleway-medium mb-2">
        Sexo:
      </Text>
      <View className="flex-row mb-4">
        <TouchableOpacity
          onPress={() => setSex("Hembra")}
          className={`flex-1 items-center py-2 border rounded-l-lg ${
            sex === "Hembra"
              ? "bg-primary border-primary"
              : "bg-customwhite border-inputborder"
          }`}
        >
          <Text className={sex === "Hembra" ? "text-white" : "text-typography"}>
            Hembra
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSex("Macho")}
          className={`flex-1 items-center py-2 border rounded-r-lg ${
            sex === "Macho"
              ? "bg-primary border-primary"
              : "bg-customwhite border-inputborder"
          }`}
        >
          <Text className={sex === "Macho" ? "text-white" : "text-typography"}>
            Macho
          </Text>
        </TouchableOpacity>
      </View>

      {/* Dropdown para Raza */}
      <Text className="text-base text-typography_2 font-raleway-medium mb-2">
        Raza:
      </Text>
      <DropDownPicker
        open={breedOpen}
        value={selectedBreed}
        items={breeds}
        setOpen={setBreedOpen}
        setValue={setSelectedBreed}
        placeholder="Selecciona la raza"
        zIndex={5000}
        autoScroll={true}
        style={{
          backgroundColor: "#F4F7F7",
          borderColor: "#A6A6A6",
          borderRadius: 8,
          marginBottom: 48,
        }}
        dropDownContainerStyle={{
          backgroundColor: "#F4F7F7",
          borderColor: "#A6A6A6",
        }}
      />

      {/* Campo Número de Chip */}
      <Text className="text-base text-typography_2 font-raleway-medium mb-2">
        N° Chip:
      </Text>
      <View className="flex-row items-center mb-4">
        <TextInput
          placeholder="Ej: 123456789012345"
          className="flex-1 bg-customwhite border border-inputborder rounded-lg px-4 py-2"
        />
        <TouchableOpacity onPress={toggleMicrochipInfo} className="ml-2">
          <FontAwesome
            name="question-circle-o"
            size={24}
            className=" w-6 h-6 text-typography"
          />
        </TouchableOpacity>
      </View>
      {showMicrochipInfo && (
        <View className="bg-customwhite border border-inputborder rounded-lg px-4 py-2 mb-4">
          <Text className="text-typography_2 font-raleway-regular text-m">
            En España, el microchip es obligatorio para perros, gatos y hurones.
            Es un dispositivo subcutáneo que permite identificar a los animales
            y a sus propietarios. La falta de microchip puede conllevar
            sanciones legales.
          </Text>
        </View>
      )}

      {/* Campo Enfermedad */}
      <Text className="text-base text-typography_2 font-raleway-medium mb-2">
        Enfermedad crónica:
      </Text>
      <View className="flex-row mb-4">
        <TouchableOpacity
          onPress={() => setHasDisease(false)}
          className={`flex-1 items-center py-2 border rounded-l-lg ${
            !hasDisease
              ? "bg-primary border-primary"
              : "bg-customwhite border-inputborder"
          }`}
        >
          <Text className={!hasDisease ? "text-white" : "text-typography"}>
            No
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setHasDisease(true)}
          className={`flex-1 items-center py-2 border rounded-r-lg ${
            hasDisease
              ? "bg-primary border-primary"
              : "bg-customwhite border-inputborder"
          }`}
        >
          <Text className={hasDisease ? "text-white" : "text-typography"}>
            Sí
          </Text>
        </TouchableOpacity>
      </View>

      {/* Campo Esteriliación */}
      <Text className="text-base text-typography_2 font-raleway-medium mb-2">
        Esterilizado:
      </Text>
      <View className="flex-row mb-6">
        <TouchableOpacity
          onPress={() => setOnNeuter(false)}
          className={`flex-1 items-center py-2 border rounded-l-lg ${
            !onNeuter
              ? "bg-primary border-primary"
              : "bg-customwhite border-inputborder"
          }`}
        >
          <Text className={!onNeuter ? "text-white" : "text-typography"}>
            No
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setOnNeuter(true)}
          className={`flex-1 items-center py-2 border rounded-r-lg ${
            onNeuter
              ? "bg-primary border-primary"
              : "bg-customwhite border-inputborder"
          }`}
        >
          <Text className={onNeuter ? "text-white" : "text-typography"}>
            Sí
          </Text>
        </TouchableOpacity>
      </View>

      {/* Contenedor para los botones en la parte inferior */}
      <View className="flex justify-center gap-2 mb-8 mt-8 w-full px-6">
        <TouchableOpacity
          // onPress={() => navigation.navigate("Login")} ***Pantalla para subir archivos***
          className="bg-primary px-14 py-4 rounded-2xl"
        >
          <Text className="text-customwhite font-raleway-semibold text-base text-center">
            Añadir documentación
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={() => navigation.navigate("EmailRegisterScreen")} ***Pantalla del perfil de la mascota***
          className="bg-customwhite px-11 py-4 rounded-2xl border border-primary"
        >
          <Text className="text-primary  font-raleway-semibold text-base text-center">
            Continuar
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
