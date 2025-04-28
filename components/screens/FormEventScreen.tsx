import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import DatePicker from "react-datepicker"; // Para la web
import "react-datepicker/dist/react-datepicker.css"; // Importar el estilo para el DatePicker
import {
  Alert,
  FlatList,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker"; // Para la app móvil

type RootStackParamList = {
  UserProfileScreen: undefined;
};

type FormEventProps = NativeStackScreenProps<
  RootStackParamList,
  "UserProfileScreen"
>;

export const FormEventScreen: React.FC = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<Date | null>(null);
  const [pets, setPets] = useState([
    { id: "1", name: "Max" },
    { id: "2", name: "Bella" },
    { id: "3", name: "Charlie" },
  ]);
  const [selectedPets, setSelectedPets] = useState<string[]>([]);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);

  const toggleSelectPet = (petId: string) => {
    if (selectedPets.includes(petId)) {
      setSelectedPets(selectedPets.filter((id) => id !== petId));
    } else {
      setSelectedPets([...selectedPets, petId]);
    }
  };

  const handleCreateEvent = () => {
    if (!title || !date || !time || selectedPets.length === 0) {
      Alert.alert(
        "Formulario incompleto",
        "Por favor, completa todos los campos y selecciona al menos una mascota."
      );
      return;
    }

    // Aquí guardarías el evento en el backend o en un estado global
    const formattedDate = date?.toLocaleDateString();
    const formattedTime = time?.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false, // Formato 24h
    });

    Alert.alert(
      "Evento creado",
      `Evento "${title}" creado para el ${formattedDate} a las ${formattedTime}.`
    );

    // Resetear el formulario
    setTitle("");
    setDate(null);
    setTime(null);
    setSelectedPets([]);
  };

  // Manejar selección de fecha
  const handleDateConfirm = (selectedDate: Date) => {
    setDate(selectedDate);
    setIsDatePickerVisible(false);
  };

  // Manejar selección de hora
  const handleTimeConfirm = (selectedTime: Date) => {
    setTime(selectedTime);
    setIsTimePickerVisible(false);
  };

  return (
    <View className="p-4 font-raleway-regular">
      {/* Campo para el título del evento */}
      <Text className="text-sm text-typography font-raleway-semibold uppercase mb-2">
        Título del evento
      </Text>
      <TextInput
        placeholder="Ej: Visita al veterinario"
        value={title}
        onChangeText={setTitle}
        className="bg-customwhite border border-inputborder font-raleway-light rounded-lg p-4 mb-4"
      />

      {/* Selección de fecha */}
      <Text className="text-sm text-typography font-raleway-semibold uppercase mb-2">
        Fecha del evento
      </Text>
      {Platform.OS === "web" ? (
        <DatePicker
          selected={date}
          onChange={(selectedDate: Date | null) => {
            if (selectedDate) setDate(selectedDate);
          }}
          dateFormat="dd/MM/yyyy"
          className="bg-customwhite border border-inputborder font-raleway-light rounded-lg p-4 mb-4"
        />
      ) : (
        <TouchableOpacity onPress={() => setIsDatePickerVisible(true)}>
          <TextInput
            placeholder="Selecciona la fecha"
            value={date ? date.toLocaleDateString() : ""}
            editable={false}
            className="bg-customwhite border border-inputborder font-raleway-light rounded-lg p-4 mb-4"
          />
        </TouchableOpacity>
      )}

      {/* Selección de hora */}
      <Text className="text-sm text-typography font-raleway-semibold uppercase mb-2">
        Hora del evento
      </Text>
      {Platform.OS === "web" ? (
        <DatePicker
          selected={time}
          onChange={(selectedTime: Date | null) => {
            if (selectedTime) setTime(selectedTime);
          }}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Hora"
          dateFormat="HH:mm"
          className="bg-customwhite border border-inputborder font-raleway-light rounded-lg p-4 mb-4"
        />
      ) : (
        <TouchableOpacity onPress={() => setIsTimePickerVisible(true)}>
          <TextInput
            placeholder="Selecciona la hora"
            value={
              time
                ? time.toLocaleTimeString("es-ES", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false, // Formato 24h
                  })
                : ""
            }
            editable={false}
            className="bg-customwhite border border-inputborder font-raleway-light rounded-lg p-4 mb-4"
          />
        </TouchableOpacity>
      )}

      {/* Lista de mascotas */}
      <Text className="text-sm text-typography font-raleway-semibold uppercase mb-2">
        ¿Para quién?
      </Text>
      <FlatList
        data={pets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => toggleSelectPet(item.id)}
            className={`p-4 mb-2 border rounded-lg ${
              selectedPets.includes(item.id)
                ? "bg-primary text-white"
                : "bg-gray-100"
            }`}
          >
            <Text
              className={`text-base ${
                selectedPets.includes(item.id) ? "text-white" : "text-black"
              }`}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        className="mb-4"
      />

      {/* Botón para crear el evento */}
      <View className="flex mb-20 gap-2 px-12 w-full">
        <TouchableOpacity
          onPress={() => {
            handleCreateEvent();
            navigation.navigate("UserProfileScreen");
          }}
        >
          <Text className="text-white bg-primary px-14 py-4 rounded-2xl mt-4 text-center font-raleway-semibold text-base">
            Crear evento
          </Text>
        </TouchableOpacity>
      </View>

      {/* DateTimePicker Modal para la fecha (solo en app) */}
      {Platform.OS !== "web" && (
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleDateConfirm}
          onCancel={() => setIsDatePickerVisible(false)}
        />
      )}

      {/* DateTimePicker Modal para la hora (solo en app) */}
      {Platform.OS !== "web" && (
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleTimeConfirm}
          onCancel={() => setIsTimePickerVisible(false)}
        />
      )}
    </View>
  );
};
