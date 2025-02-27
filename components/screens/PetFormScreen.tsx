import axiosInstance from "@/api/axiosInstance"; // Asegúrate de importar axiosInstance
import { breeds as breedData } from "@/utils/breeds";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { RadioButton } from "react-native-paper";
import { DatePickerInput } from "react-native-paper-dates";

type RootStackParamList = {
  PetForm: undefined;
};
type PetFormProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "PetForm">;
};

export const PetForm: React.FC<PetFormProps> = ({ navigation }) => {
  const [name, setName] = useState("");
  const [sex, setSex] = useState("Macho");
  const [hasDisease, setHasDisease] = useState(false);
  const [onNeuter, setOnNeuter] = useState(false);
  const [birthDate, setBirthDate] = useState(new Date());
  const [chip, setChip] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedBreed, setSelectedBreed] = useState<string | null>(null);
  const [items, setItems] = useState(
    breedData.map((b) => ({ label: b.name, value: b.name }))
  );

  const handleSubmit = async () => {
    const petData = {
      name,
      breed: selectedBreed || "Desconocida",
      birth: birthDate.toISOString().split("T")[0], // Formato YYYY-MM-DD
      gender: sex,
      chip,
      illness: hasDisease,
      neutered: onNeuter,
      weight: 0, // Puedes añadir un campo para peso si lo necesitas
    };

    try {
      const response = await axiosInstance.post("/pets", petData);
      if (response.status === 201) {
        Alert.alert("Éxito", "Mascota registrada correctamente");
        navigation.goBack(); // O navegar a otra pantalla
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "No se pudo registrar la mascota");
    }
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
        value={name}
        onChangeText={setName}
        className="bg-customwhite border border-inputborder rounded-lg px-4 py-2 mb-4"
      />

      {/* Fecha de Nacimiento */}
      <Text className="text-base text-typography_2 font-lexend-medium mb-2">
        Fecha de nacimiento:
      </Text>
      <DatePickerInput
        locale="es"
        value={birthDate}
        onChange={(date) => date && setBirthDate(date)}
        inputMode="start"
      />

      {/* Sexo */}
      <Text className="text-base text-typography_2 font-raleway-medium m-2">
        Sexo:
      </Text>
      <View className="flex-row items-center mb-4">
        <RadioButton
          value="Macho"
          status={sex === "Macho" ? "checked" : "unchecked"}
          onPress={() => setSex("Macho")}
        />
        <Text className="mr-4">Macho</Text>
        <RadioButton
          value="Hembra"
          status={sex === "Hembra" ? "checked" : "unchecked"}
          onPress={() => setSex("Hembra")}
        />
        <Text>Hembra</Text>
      </View>

      {/* Raza */}
      <Text className="text-base text-typography_2 font-raleway-medium">
        Raza:
      </Text>
      <DropDownPicker
        open={open}
        value={selectedBreed}
        items={items}
        setOpen={setOpen}
        setValue={setSelectedBreed}
        setItems={setItems}
        multiple={false} // Asegura que esta propiedad esté definida
      />

      {/* Número de Chip */}
      <Text className="text-base text-typography_2 font-raleway-medium mb-2">
        N° Chip:
      </Text>
      <TextInput
        placeholder="Ej: 123456789012345"
        value={chip}
        onChangeText={setChip}
        className="bg-customwhite border border-inputborder rounded-lg px-4 py-2 mb-4"
      />

      {/* Enfermedad Crónica */}
      <Text className="text-base font-raleway-medium mb-2">
        ¿Tiene enfermedad crónica?
      </Text>
      <View className="flex-row items-center mb-4">
        <RadioButton
          value="No"
          status={!hasDisease ? "checked" : "unchecked"}
          onPress={() => setHasDisease(false)}
        />
        <Text className="mr-4">No</Text>
        <RadioButton
          value="Sí"
          status={hasDisease ? "checked" : "unchecked"}
          onPress={() => setHasDisease(true)}
        />
        <Text>Sí</Text>
      </View>

      {/* Esterilizado */}
      <Text className="text-base font-raleway-medium mb-2">
        ¿Está esterilizado?
      </Text>
      <View className="flex-row items-center mb-4">
        <RadioButton
          value="No"
          status={!onNeuter ? "checked" : "unchecked"}
          onPress={() => setOnNeuter(false)}
        />
        <Text className="mr-4">No</Text>
        <RadioButton
          value="Sí"
          status={onNeuter ? "checked" : "unchecked"}
          onPress={() => setOnNeuter(true)}
        />
        <Text>Sí</Text>
      </View>

      {/* Botón de envío */}
      <TouchableOpacity
        onPress={handleSubmit}
        className="bg-primary p-4 rounded-lg items-center mt-6"
      >
        <Text className="text-white font-raleway-bold">Registrar Mascota</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
