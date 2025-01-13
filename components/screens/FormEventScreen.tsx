import { Event } from "@/components/Event";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export const FormEvent: React.FC = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [dogIcons, setDogIcons] = useState<string[]>([]);

  const handleAddDogIcon = () => {
    setDogIcons([...dogIcons, "https://placehold.co/20x20"]);
  };

  return (
    <View className="p-4 font-raleway-regular">
      <Text className="text-sm text-typography font-raleway-semibold uppercase mb-2">
        Titulo del evento
      </Text>
      <TextInput
        placeholder="Ej: Visita al veterinario"
        value={title}
        onChangeText={setTitle}
        className="bg-customwhite border border-inputborder font-raleway-light rounded-lg p-4 mb-4"
      />
      <Text className="text-sm text-typography font-raleway-semibold uppercase mb-2">
        Fecha del evento
      </Text>
      <TextInput
        placeholder="DD/MM/AAAA"
        value={date}
        onChangeText={setDate}
        className="bg-customwhite border border-inputborder font-raleway-light rounded-lg p-4 mb-4"
      />
      <Text className="text-sm text-typography font-raleway-semibold uppercase mb-2">
        Hora del evento
      </Text>
      <TextInput
        placeholder="hh:mm"
        value={time}
        onChangeText={setTime}
        className="bg-customwhite border border-inputborder font-raleway-light rounded-lg p-4 mb-4"
      />

      <View className="flex mb-20 gap-2 px-12 w-full">
        <TouchableOpacity onPress={handleAddDogIcon}>
          <Text className="text-white bg-primary px-14 py-4 rounded-2xl mt-4 text-center font-raleway-semibold text-base">
            Crear evento
          </Text>
        </TouchableOpacity>
      </View>
      <View className="my-4">
        {/* Si no hay datos, pasamos los campos vacíos y se mostrarán valores por defecto */}
        <Event
          title={title || undefined}
          date={date || undefined}
          time={time || undefined}
          dogIcons={dogIcons.length > 0 ? dogIcons : undefined}
        />
      </View>
    </View>
  );
};
