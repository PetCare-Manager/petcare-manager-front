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
import { RadioButton } from "react-native-paper";
import { DatePickerInput } from "react-native-paper-dates";

export const PetForm = () => {
  const [sex, setSex] = useState("Macho");
  const [hasDisease, setHasDisease] = useState("No");
  const [onNeuter, setOnNeuter] = useState("No");
  const [breedOpen, setBreedOpen] = useState(false);
  const [selectedBreed, setSelectedBreed] = useState<string | null>(null);
  const [showMicrochipInfo, setShowMicrochipInfo] = useState(false);
  const [birthDate, setBirthDate] = useState(new Date());
  const [isFocused, setIsFocused] = useState(false);

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

      {/* Campo Fecha de Nacimiento */}
      <Text className="text-base text-typography_2 font-lexend-medium mb-2">
        Fecha de nacimiento:
      </Text>
      <DatePickerInput
        locale="es"
        value={birthDate}
        onChange={(date) => date && setBirthDate(date)}
        inputMode="start"
        iconColor="#292929"
        startWeekOnMonday={true}
        textColor="#292929"
        placeholderTextColor="#292929"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{
          backgroundColor: "#F4F7F7",
          borderRadius: 8,
          padding: 10,
          color: "#292929",
          borderColor: isFocused ? "#d75c7b" : "#A6A6A6",
          borderWidth: 1,
        }}
      />

      {/* Campo Sexo */}
      <Text className="text-base text-typography_2 font-raleway-medium mb-2">
        Sexo:
      </Text>
      <View className="flex-row items-center mb-4">
        <RadioButton
          value="Macho"
          status={sex === "Macho" ? "checked" : "unchecked"}
          onPress={() => setSex("Macho")}
          color="#d75c7b"
        />
        <Text className="mr-4">Macho</Text>
        <RadioButton
          value="Hembra"
          status={sex === "Hembra" ? "checked" : "unchecked"}
          onPress={() => setSex("Hembra")}
          color="#d75c7b"
        />
        <Text>Hembra</Text>
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
        setValue={(callback) =>
          setSelectedBreed(
            typeof callback === "function" ? callback(selectedBreed) : callback
          )
        }
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
            className="w-6 h-6 text-typography"
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

      {/* Enfermedad Crónica */}
      <Text className="text-base font-raleway-medium mb-2">
        Enfermedad crónica:
      </Text>
      <View className="flex-row items-center mb-4">
        <RadioButton
          value="No"
          status={hasDisease === "No" ? "checked" : "unchecked"}
          onPress={() => setHasDisease("No")}
          color="#d75c7b"
        />
        <Text className="mr-4">No</Text>
        <RadioButton
          value="Sí"
          status={hasDisease === "Sí" ? "checked" : "unchecked"}
          onPress={() => setHasDisease("Sí")}
          color="#d75c7b"
        />
        <Text>Sí</Text>
      </View>

      {/* Esterilizado */}
      <Text className="text-base font-raleway-medium mb-2">Esterilizado</Text>
      <View className="flex-row items-center">
        <RadioButton
          value="No"
          status={onNeuter === "No" ? "checked" : "unchecked"}
          onPress={() => setOnNeuter("No")}
          color="#d75c7b"
        />
        <Text className="mr-4">No</Text>
        <RadioButton
          value="Sí"
          status={onNeuter === "Sí" ? "checked" : "unchecked"}
          onPress={() => setOnNeuter("Sí")}
          color="#d75c7b"
        />
        <Text>Sí</Text>
      </View>

      {/* Botones */}
      <View className="flex justify-center gap-2 mb-8 mt-8 w-full px-6">
        <TouchableOpacity className="bg-primary px-14 py-4 rounded-2xl">
          <Text className="text-customwhite font-raleway-semibold text-base text-center">
            Añadir documentación
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-customwhite px-11 py-4 rounded-2xl border border-primary">
          <Text className="text-primary font-raleway-semibold text-base text-center">
            Continuar
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
