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
  PreAddDocumentation: {
    name: string;
    birthDate: string;
    sex: string;
    chip: string;
    breed: string;
    hasDisease: boolean;
    onNeuter: boolean;
  };
};

type PetFormProps = {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    "PreAddDocumentation"
  >;
};

export const PetForm: React.FC<PetFormProps> = ({ navigation }) => {
  const [name, setName] = useState("");
  const [sex, setSex] = useState("Macho");
  const [hasDisease, setHasDisease] = useState(false);
  const [onNeuter, setOnNeuter] = useState(false);
  const [birthDate, setBirthDate] = useState<Date | undefined>(undefined);
  const [chip, setChip] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedBreed, setSelectedBreed] = useState<string | null>(null);
  const [items, setItems] = useState(
    breedData.map((b) => ({ label: b.name, value: b.name }))
  );

  const mapGender = (gender: string): "M" | "F" => {
    return gender === "Macho" ? "M" : "F";
  };

  const handleSubmit = () => {
    console.log("Botón presionado");
    console.log("Datos del formulario:", {
      name,
      birthDate,
      sex,
      chip,
      selectedBreed,
      hasDisease,
      onNeuter,
    });

    if (!name.trim()) {
      Alert.alert("Error", "El nombre de la mascota es obligatorio.");
      return;
    }
    if (!birthDate) {
      Alert.alert("Error", "Debes seleccionar una fecha de nacimiento.");
      return;
    }
    if (!selectedBreed) {
      Alert.alert("Error", "Por favor, selecciona una raza.");
      return;
    }
    if (chip.length > 0 && chip.length < 15) {
      Alert.alert("Error", "El número de chip debe tener al menos 15 dígitos.");
      return;
    }

    navigation.navigate("PreAddDocumentation", {
      name,
      birthDate: birthDate.toISOString().split("T")[0], // Formato YYYY-MM-DD
      sex: mapGender(sex),
      chip,
      breed: selectedBreed,
      hasDisease,
      onNeuter,
    });
  };

  return (
    <ScrollView className="flex-1 px-6 py-8">
      <Text className="text-xl font-raleway-semibold text-start mb-6">
        Rellena los datos de tu mascota
      </Text>

      {/* Nombre */}
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
        onChange={(date) => {
          console.log("Fecha seleccionada:", date);
          setBirthDate(date);
        }}
        inputMode="start"
      />

      {/* Sexo */}
      <Text className="text-base text-typography_2 font-raleway-medium m-2">
        Sexo:
      </Text>
      <View className="flex-row items-center mb-4">
        {["Macho", "Hembra"].map((option) => (
          <View key={option} className="flex-row items-center mr-4">
            <RadioButton
              value={option}
              status={sex === option ? "checked" : "unchecked"}
              onPress={() => setSex(option)}
            />
            <Text>{option}</Text>
          </View>
        ))}
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
        setValue={(callback) => {
          const value = callback(selectedBreed);
          console.log("Raza seleccionada:", value);
          setSelectedBreed(value);
        }}
        setItems={setItems}
        multiple={false}
        placeholder="Selecciona una raza"
      />

      {/* Número de Chip */}
      <Text className="text-base text-typography_2 font-raleway-medium mb-2">
        N° Chip:
      </Text>
      <TextInput
        placeholder="Ej: 123456789012345"
        value={chip}
        onChangeText={setChip}
        keyboardType="numeric"
        maxLength={15}
        className="bg-customwhite border border-inputborder rounded-lg px-4 py-2 mb-4"
      />

      {/* Enfermedad Crónica */}
      <Text className="text-base font-raleway-medium mb-2">
        ¿Tiene enfermedad crónica?
      </Text>
      <View className="flex-row items-center mb-4">
        {["No", "Sí"].map((option, index) => (
          <View key={option} className="flex-row items-center mr-4">
            <RadioButton
              value={option}
              status={hasDisease === (index === 1) ? "checked" : "unchecked"}
              onPress={() => setHasDisease(index === 1)}
            />
            <Text>{option}</Text>
          </View>
        ))}
      </View>

      {/* Esterilizado */}
      <Text className="text-base font-raleway-medium mb-2">
        ¿Está esterilizado?
      </Text>
      <View className="flex-row items-center mb-4">
        {["No", "Sí"].map((option, index) => (
          <View key={option} className="flex-row items-center mr-4">
            <RadioButton
              value={option}
              status={onNeuter === (index === 1) ? "checked" : "unchecked"}
              onPress={() => setOnNeuter(index === 1)}
            />
            <Text>{option}</Text>
          </View>
        ))}
      </View>

      {/* Botón de envío */}
      <View className="flex justify-center gap-2 mb-8 mt-8 w-full px-6">
        <TouchableOpacity
          key={name + birthDate + selectedBreed} // Forzar re-render
          className="bg-primary px-14 py-4 rounded-2xl"
          onPress={handleSubmit}
        >
          <Text className="text-customwhite font-raleway-semibold text-base text-center">
            Continuar
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
