import axiosInstance from "@/api/axiosInstance";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as DocumentPicker from "expo-document-picker";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

type RootStackParamList = {
  Home: undefined;
};

type FinalAddPetProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
  route: {
    params: {
      name: string;
      birthDate: string;
      sex: string;
      chip: string;
      breed: string;
      hasDisease: boolean;
      onNeuter: boolean;
      documents: DocumentPicker.DocumentPickerAsset[];
    };
  };
};

export const FinalAddPet: React.FC<FinalAddPetProps> = ({
  navigation,
  route,
}) => {
  const { name, birthDate, sex, chip, breed, hasDisease, onNeuter, documents } =
    route.params;

  const [petWeight, setPetWeight] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!petWeight || isNaN(Number(petWeight))) {
      Alert.alert("Error", "Por favor, introduce un peso válido.");
      return;
    }

    const petData = {
      name,
      breed,
      birth: birthDate,
      gender: sex,
      chip: chip || "string",
      illness: hasDisease,
      neutered: onNeuter,
      weight: parseFloat(petWeight),
    };

    setLoading(true);

    try {
      const response = await axiosInstance.post("/pets", petData);
      if (response.status === 201) {
        Alert.alert("Éxito", "Mascota registrada correctamente");
        navigation.navigate("Home");
      }
    } catch (error) {
      console.error(error);
      const errorMessage = "No se pudo registrar la mascota";
      Alert.alert("Error", `Detalles: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView className="flex-1 px-6 py-8">
      {/* Resumen de datos */}
      <Text className="text-xl font-raleway-semibold mb-6">
        Detalles de tu mascota
      </Text>
      <Text className="text-base font-raleway-medium">Nombre: {name}</Text>
      <Text className="text-base font-raleway-medium">
        Fecha de nacimiento: {birthDate}
      </Text>
      <Text className="text-base font-raleway-medium">Sexo: {sex}</Text>
      <Text className="text-base font-raleway-medium">Nº de Chip: {chip}</Text>
      <Text className="text-base font-raleway-medium">Raza: {breed}</Text>
      <Text className="text-base font-raleway-medium">
        Enfermedad crónica: {hasDisease ? "Sí" : "No"}
      </Text>
      <Text className="text-base font-raleway-medium">
        Esterilizado: {onNeuter ? "Sí" : "No"}
      </Text>

      {/* Campo de peso */}
      <Text className="text-base font-raleway-medium mt-4">Peso (kg):</Text>
      <TextInput
        value={petWeight}
        onChangeText={setPetWeight}
        keyboardType="numeric"
        className="bg-white border border-gray-300 rounded-lg px-4 py-2 mb-4"
      />

      {/* Botón de registro */}
      <TouchableOpacity
        onPress={handleSubmit}
        className="bg-primary p-4 rounded-lg items-center mt-6"
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text className="text-white font-raleway-bold">
            Registrar Mascota
          </Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
};
