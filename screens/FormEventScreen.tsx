import { Event } from "@/components/Event";
import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";

export const FormEvent: React.FC = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [dogIcons, setDogIcons] = useState<string[]>([]);

  const handleAddDogIcon = () => {
    setDogIcons([...dogIcons, "https://placehold.co/20x20"]);
  };

  return (
    <View className="p-4">
      <TextInput
        placeholder="Título del evento"
        value={title}
        onChangeText={setTitle}
        className="border p-2 mb-4"
      />
      <TextInput
        placeholder="Fecha (YYYY-MM-DD)"
        value={date}
        onChangeText={setDate}
        className="border p-2 mb-4"
      />
      <TextInput
        placeholder="Hora (HH:mm)"
        value={time}
        onChangeText={setTime}
        className="border p-2 mb-4"
      />
      <Button title="Añadir perro" onPress={handleAddDogIcon} />
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
