import axiosInstance from "@/api/axiosInstance";
import { FontAwesome } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type RootStackParamList = {
  PetForm: undefined;
  Home: undefined;
};

type FinalAddPetProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
  route: {
    params: {
      name: string;
      birthDate: string;
      sex: string;
      microchip: string;
      breed: string;
      weight: string;
      hasDisease: string;
      onNeuter: string;
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
    microchip,
    breed,
    weight,
    hasDisease,
    onNeuter,
  } = route.params;
  const [petWeight, setPetWeight] = useState(weight);
  const [documents, setDocuments] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!petWeight || isNaN(Number(petWeight))) {
      Alert.alert("Error", "Por favor, introduce un peso válido.");
      return;
    }

    const petData = {
      name,
      breed: breed || "Desconocida",
      birth: birthDate,
      gender: sex,
      chip: microchip,
      illness: hasDisease,
      neutered: onNeuter,
      weight: parseFloat(petWeight),
    };

    setLoading(true);

    try {
      const response = await axiosInstance.post("/pets", petData);
      if (response.status === 201) {
        Alert.alert("Éxito", "Mascota registrada correctamente");
        navigation.goBack();
      }
    } catch (error) {
      console.error(error);
      Alert.alert(
        "Error",
        error.response?.data?.message || "No se pudo registrar la mascota"
      );
    } finally {
      setLoading(false);
    }
  };

  const addDocument = () => {
    if (documents.length < 5) {
      setDocuments([...documents, `Documento ${documents.length + 1}`]);
    }
  };

  const removeDocument = (index: number) => {
    setDocuments(documents.filter((_, i) => i !== index));
  };

  return (
    <ScrollView className="flex-1">
      <View className="px-6 py-8">
        <Text className="text-xl font-raleway-semibold mb-6">
          Detalles de tu mascota
        </Text>

        <Text className="text-base font-raleway-medium">Nombre: {name}</Text>
        <Text className="text-base font-raleway-medium">
          Fecha de nacimiento: {birthDate}
        </Text>
        <Text className="text-base font-raleway-medium">Sexo: {sex}</Text>
        <Text className="text-base font-raleway-medium">
          Nº de Chip: {microchip}
        </Text>
        <Text className="text-base font-raleway-medium">Raza: {breed}</Text>
        <Text className="text-base font-raleway-medium">
          Enfermedad crónica: {hasDisease}
        </Text>
        <Text className="text-base font-raleway-medium">
          Esterilizado: {onNeuter}
        </Text>

        <Text className="text-base font-raleway-medium mt-4">Peso (kg):</Text>
        <TextInput
          value={petWeight}
          onChangeText={setPetWeight}
          keyboardType="numeric"
          className="bg-white border border-gray-300 rounded-lg px-4 py-2 mb-4"
        />

        <Text className="text-base font-raleway-medium mt-4">Documentos:</Text>
        {documents.map((doc, index) => (
          <View key={index} className="flex-row items-center mb-2">
            <Text className="flex-1">{doc}</Text>
            <TouchableOpacity onPress={() => removeDocument(index)}>
              <FontAwesome name="trash" size={20} color="red" />
            </TouchableOpacity>
          </View>
        ))}

        {documents.length < 5 && (
          <TouchableOpacity
            onPress={addDocument}
            className="bg-primary px-4 py-2 rounded-lg mt-2"
          >
            <Text className="text-white text-center">Añadir Documento</Text>
          </TouchableOpacity>
        )}

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
      </View>
    </ScrollView>
  );
};
