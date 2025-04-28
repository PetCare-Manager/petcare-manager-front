import { FontAwesome } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as DocumentPicker from "expo-document-picker";
import { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

type RootStackParamList = {
  FinalAddPet: {
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

type PreAddDocumentationProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "FinalAddPet">;
  route: {
    params: {
      name: string;
      birthDate: string;
      sex: string;
      chip: string;
      breed: string;
      hasDisease: boolean;
      onNeuter: boolean;
    };
  };
};

export const PreAddDocumentation: React.FC<PreAddDocumentationProps> = ({
  navigation,
  route,
}) => {
  const [documents, setDocuments] = useState<
    DocumentPicker.DocumentPickerAsset[]
  >([]);

  const pickDocuments = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          "image/*",
        ],
        multiple: true,
        copyToCacheDirectory: true,
      });

      if (result.canceled || !result.assets) return;

      // Añadir nuevos documentos y limitar a 5
      setDocuments((prevDocs) => {
        const newDocs = [...prevDocs, ...result.assets];
        return newDocs.slice(0, 5);
      });
    } catch (error) {
      console.error("Error al seleccionar documentos:", error);
    }
  };

  const removeDocument = (index: number) => {
    setDocuments((prevDocs) => prevDocs.filter((_, i) => i !== index));
  };

  const handleContinue = () => {
    navigation.navigate("FinalAddPet", {
      ...route.params,
      documents,
    });
  };

  return (
    <View className="flex-1 px-6 py-8">
      <Text className="text-xl font-raleway-semibold text-typography mb-6">
        Registro de mascota
      </Text>

      <View className="items-center justify-center w-full p-4">
        <Text className="text-2xl text-typography_2 font-bold text-center mb-4">
          Añadir la documentación de tu mascota
        </Text>
        <Image source={require("@/assets/images/addDoc.png")} />

        {/* Botones */}
        <View className="justify-center gap-6 mb-6 w-full px-6">
          <TouchableOpacity
            onPress={handleContinue}
            className="bg-primary px-14 py-4 rounded-2xl"
          >
            <Text className="text-customwhite font-raleway-semibold text-base text-center">
              Finalizar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={pickDocuments}
            className="bg-customwhite px-11 py-4 rounded-2xl border border-primary"
            disabled={documents.length >= 5} // Desactiva si ya hay 5 documentos
          >
            <Text
              className={`text-base font-raleway-semibold text-center ${
                documents.length >= 5 ? "text-gray-400" : "text-primary"
              }`}
            >
              {documents.length >= 5
                ? "Límite alcanzado"
                : "Añadir documentación"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Lista de documentos */}
        {documents.length > 0 && (
          <FlatList
            data={documents}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View className="flex-row items-center justify-between bg-gray-200 p-4 rounded-lg mb-2 w-full">
                <Text className="flex-1 text-black">{item.name}</Text>
                <TouchableOpacity onPress={() => removeDocument(index)}>
                  <FontAwesome name="trash" size={20} color="red" />
                </TouchableOpacity>
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
};
