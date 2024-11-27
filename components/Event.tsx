import React from "react";
import { View, Text, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

// Definimos la interfaz para las props que recibirá el componente
interface EventProps {
  title?: string;
  date?: string;
  time?: string;
  dogIcons?: string[]; // URLs de imágenes de los perros
}

// Componente Event
export const Event: React.FC<EventProps> = ({
  title = "Título por defecto",
  date = new Date().toISOString().split("T")[0], // Fecha actual
  time = "12:00", // Hora por defecto
  dogIcons = ["https://placehold.co/20x20"], // Icono de perro por defecto
}) => {
  // Validaciones básicas
  const isValidDate = (dateString: string) => {
    return !isNaN(new Date(dateString).getTime());
  };

  const isValidTime = (timeString: string) => {
    const timePattern = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/; // HH:mm
    return timePattern.test(timeString);
  };

  return (
    <View className="flex flex-row items-center bg-white rounded-lg p-4">
      {/* Left Vertical Bar */}
      <View className="w-1 bg-customblue h-full rounded-lg" />
      <View className="container shadow rounded-lg">
        {/* Content Area */}
        <View className="p-4 flex-1">
          <View className="flex flex-row justify-between">
            {/* Title */}
            <Text className="text-typography font-raleway-semibold text-lg">
              {title}
            </Text>
            {/* Clock Icon */}
            <FontAwesome
              name="clock-o"
              size={20}
              className="text-gray-600 ml-2"
            />
          </View>
          {/* Date and Time */}
          <View className="flex-row items-center">
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

          {/* Dog Icons */}
          <View className="flex-row items-center mt-2">
            {dogIcons.length > 0 ? (
              dogIcons.map((icon, index) => (
                <Image
                  key={index}
                  source={{ uri: icon }}
                  className="w-5 h-5 mr-1"
                />
              ))
            ) : (
              <Text className="text-gray-500">No hay perros asociados</Text>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};
