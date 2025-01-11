import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export const PetForm = () => {
  const [sex, setSex] = useState("Hembra");
  const [hasDisease, setHasDisease] = useState(false);
  const [onNeuter, setOnNeuter] = useState(false);

  const handleSubmit = () => {
    alert("Formulario enviado correctamente");
  };

  return (
    <View className="flex-1 bg-white px-6 py-8">
      <Text className="text-xl font-bold text-start mb-6">
        Rellena los datos de la mascota
      </Text>

      {/* Campo Nombre */}
      <Text className="text-base text-gray-600 mb-2">Nombre</Text>
      <TextInput
        placeholder="Escribe el nombre"
        className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mb-4"
      />

      {/* Campo Edad */}
      <Text className="text-base text-gray-600 mb-2">Fecha de nacimiento</Text>
      <TextInput
        placeholder="DD/MM/AAAA"
        className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mb-4"
      />

      {/* Campo Sexo */}
      <Text className="text-base text-gray-600 mb-2">Sexo</Text>
      <View className="flex-row mb-4">
        <TouchableOpacity
          onPress={() => setSex("Hembra")}
          className={`flex-1 items-center py-2 border rounded-l-lg ${
            sex === "Hembra"
              ? "bg-primary border-primary"
              : "bg-gray-100 border-gray-300"
          }`}
        >
          <Text className={sex === "Hembra" ? "text-white" : "text-gray-600"}>
            Hembra
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSex("Macho")}
          className={`flex-1 items-center py-2 border rounded-r-lg ${
            sex === "Macho"
              ? "bg-primary border-primary"
              : "bg-gray-100 border-gray-300"
          }`}
        >
          <Text className={sex === "Macho" ? "text-white" : "text-gray-600"}>
            Macho
          </Text>
        </TouchableOpacity>
      </View>

      {/* Campo Número de Chip */}
      <Text className="text-base text-gray-600 mb-2">N° Chip</Text>
      <TextInput
        placeholder="Ej: 123456789012345"
        className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mb-4"
      />

      {/* Campo Enfermedad */}
      <Text className="text-base text-gray-600 mb-2">Enfermedad</Text>
      <View className="flex-row mb-4">
        <TouchableOpacity
          onPress={() => setHasDisease(false)}
          className={`flex-1 items-center py-2 border rounded-l-lg ${
            !hasDisease
              ? "bg-primary border-primary"
              : "bg-gray-100 border-gray-300"
          }`}
        >
          <Text className={!hasDisease ? "text-white" : "text-gray-600"}>
            No
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setHasDisease(true)}
          className={`flex-1 items-center py-2 border rounded-r-lg ${
            hasDisease
              ? "bg-primary border-primary"
              : "bg-gray-100 border-gray-300"
          }`}
        >
          <Text className={hasDisease ? "text-white" : "text-gray-600"}>
            Sí
          </Text>
        </TouchableOpacity>
      </View>

      {/* Campo Esteriliación */}
      <Text className="text-base text-gray-600 mb-2">Esterilizado</Text>
      <View className="flex-row mb-6">
        <TouchableOpacity
          onPress={() => setOnNeuter(false)}
          className={`flex-1 items-center py-2 border rounded-l-lg ${
            !onNeuter
              ? "bg-primary border-primary"
              : "bg-gray-100 border-gray-300"
          }`}
        >
          <Text className={!onNeuter ? "text-white" : "text-gray-600"}>No</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setOnNeuter(true)}
          className={`flex-1 items-center py-2 border rounded-r-lg ${
            onNeuter
              ? "bg-primary border-primary"
              : "bg-gray-100 border-gray-300"
          }`}
        >
          <Text className={onNeuter ? "text-white" : "text-gray-600"}>Sí</Text>
        </TouchableOpacity>
      </View>

      {/* Contenedor para los botones en la parte inferior */}
      <View className="flex justify-center gap-2 mb-14 w-full px-6">
        <TouchableOpacity
          // onPress={() => navigation.navigate("Login")} ***Pantalla para subir archivos***
          className="bg-primary px-14 py-4 rounded-2xl"
        >
          <Text className="text-customwhite font-raleway-semibold text-base text-center">
            Añadir documentación
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={() => navigation.navigate("EmailRegisterScreen")} ***Pantalla del perfil de la mascota***
          className="bg-customwhite px-11 py-4 rounded-2xl border border-primary"
        >
          <Text className="text-primary  font-raleway-semibold text-base text-center">
            Continuar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
