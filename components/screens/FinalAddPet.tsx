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
      chip?: string;
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
  const {
    name,
    birthDate,
    sex,
    chip = "",
    breed,
    hasDisease,
    onNeuter,
  } = route.params;

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
      chip: chip || "N/A",
      illness: hasDisease,
      neutered: onNeuter,
      weight: parseFloat(petWeight),
    };

    console.log("📤 Enviando datos:", petData);

    setLoading(true);

    try {
      const response = await axiosInstance.post("/pets", petData);

      console.log("✅ Respuesta de la API:", response.data);

      if (response.status === 201) {
        Alert.alert("Éxito", "Mascota registrada correctamente", [
          {
            text: "OK",
            onPress: () => {
              navigation.reset({
                index: 0,
                routes: [{ name: "Home" }],
              });
            },
          },
        ]);
      } else {
        console.log("⚠️ Respuesta inesperada:", response.status);
        Alert.alert("Error", `Código inesperado: ${response.status}`);
      }
    } catch (error: any) {
      console.error("❌ Error en la petición:", error.response || error);
      Alert.alert(
        "Error",
        `No se pudo registrar la mascota. Código: ${
          error.response?.status || "Desconocido"
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView className="flex-1 px-6 py-8">
      <Text className="text-xl font-raleway-semibold mb-6">
        Detalles de tu mascota
      </Text>

      {[
        { label: "Nombre", value: name },
        { label: "Fecha de nacimiento", value: birthDate },
        { label: "Sexo", value: sex },
        { label: "Nº de Chip", value: chip || "No registrado" },
        { label: "Raza", value: breed },
        { label: "Enfermedad crónica", value: hasDisease ? "Sí" : "No" },
        { label: "Esterilizado", value: onNeuter ? "Sí" : "No" },
      ].map((item, index) => (
        <Text key={index} className="text-base font-raleway-medium">
          {item.label}: {item.value}
        </Text>
      ))}

      {/* Peso */}
      <Text className="text-base font-raleway-medium mt-4">Peso (kg):</Text>
      <TextInput
        value={petWeight}
        onChangeText={setPetWeight}
        keyboardType="numeric"
        className="bg-white border border-gray-300 rounded-lg px-4 py-2 mb-4"
      />

      {/* Botón de registrar */}
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
