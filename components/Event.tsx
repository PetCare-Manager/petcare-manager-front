import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";

// Definimos la interfaz para las props que recibirá el componente
interface EventProps {
  title?: string;
  date?: string; // Fecha en formato ISO o "YYYY-MM-DD"
  time?: string; // Hora en formato 24h (HH:mm)
  dogIcons?: string[]; // URLs de imágenes de los perros
}

// Componente Event
export const Event: React.FC<EventProps> = ({
  title = "Título por defecto",
  date = new Date().toISOString().split("T")[0], // Fecha actual en formato ISO
  time = "12:00", // Hora por defecto en formato 24h
  dogIcons = ["https://placehold.co/20x20"], // Icono de perro por defecto
}) => {
  // Validación de fecha
  const isValidDate = (dateString: string) => {
    const parsedDate = new Date(dateString);
    return !isNaN(parsedDate.getTime());
  };

  // Validación de hora
  const isValidTime = (timeString: string) => {
    const timePattern = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/; // HH:mm
    return timePattern.test(timeString);
  };

  return (
    <View className="flex flex-row items-center rounded-lg shadow p-4">
      {/* Barra lateral izquierda */}
      <View className="w-1 bg-secondary h-full rounded-lg mr-4" />
      <View className="flex-1">
        {/* Contenido principal */}
        <View className="flex flex-row justify-between items-center mb-2">
          {/* Título */}
          <Text className="text-typography font-raleway-semibold text-lg">
            {title}
          </Text>
          {/* Ícono de reloj */}
          <FontAwesome
            name="clock-o"
            size={20}
            className="text-gray-600 ml-2"
          />
        </View>
        {/* Fecha y hora */}
        <View className="flex-row items-center mb-2">
          <Text className="text-typography font-raleway-regular text-sm">
            {isValidDate(date)
              ? new Date(date).toLocaleDateString("es-ES", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                })
              : "Fecha no válida"}
          </Text>
          <Text className="text-typography font-raleway-regular text-sm">
            {" "}
            •{" "}
          </Text>
          <Text className="text-typography font-raleway-regular text-sm">
            {isValidTime(time) ? time : "Hora no válida"}
          </Text>
        </View>
        {/* Íconos de perros */}
        <View className="flex-row items-center">
          {dogIcons.length > 0 ? (
            dogIcons.map((icon, index) => (
              <Image
                key={index}
                source={{ uri: icon }}
                className="w-6 h-6 rounded-full mr-2"
              />
            ))
          ) : (
            <Text className="text-typography font-raleway-regular text-sm">
              No hay mascotas asociadas.
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};
