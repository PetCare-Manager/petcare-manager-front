import React, {useState} from 'react';
import { View, Text, TextInput, Switch, TouchableOpacity} from 'react-native';
import { Bubble } from "@/components/Bubbles";


const PetForm = () => {
  const [isNeutered, setIsNeutered] = useState(false);

  return (
      <View className="m-auto w-[375px] h-[755px] bg-white justify-between items-center border border-red-600 p-4 relative rounded-xl shadow-lg">
          <Bubble
              containerClass="absolute -bottom-20 -right-16 z-0"
              type="bubble1"
              rotation={-45}
          />
          <Bubble
              containerClass="absolute -top-20 -left-16 z-0"
              type="bubble2"
              rotation={-45}
          />
          <Bubble
              containerClass="absolute top-36 right-0 z-0"
              type="bubble3"
              rotation={-45}
          />
          <Bubble
              containerClass="absolute bottom-96 right-80 z-0"
              type="bubble4"
              rotation={-45}
          />
          <Bubble
              containerClass="absolute bottom-32 right-80 z-0"
              type="bubble5"
              rotation={-60}
          />

          <View className="items-center z-10">
              <View className="w-full px-10 pt-20">
                  <Text className="font-afacad-semibold text-3xl text-center text-slate-600 mb-8">
                      Formulario mascota
                  </Text>
                  <TextInput 
                      placeholder="Nombre de la mascota"
                      className="border p-2 mb-4 rounded"
                  />
                  <TextInput
                      placeholder="Raza (Breed)"
                      className="border p-2 mb-4 rounded"
                  />
                  <TextInput
                      placeholder="Edad"
                      keyboardType="numeric"
                      className="border p-2 mb-4 rounded"
                  />
                  <TextInput
                      placeholder="Fecha de nacimiento"
                      className="border p-2 mb-4 rounded"
                  />
                  <TextInput
                      placeholder="Peso"
                      keyboardType="numeric"
                      className="border p-2 mb-4 rounded"
                  />
                  <TextInput
                      placeholder="Microchip"
                      className="border p-2 mb-4 rounded"
                  />
                  <View className="flex-row items-center mb-4">
                      <Text className="font-raleway-light text-xl text-center text-gray-800">
                          Esterelizado
                      </Text>
                      <Switch
                          value={isNeutered}
                          onValueChange={(value) => setIsNeutered(value)}
                      />
                  </View>
                  <TouchableOpacity
                      className="bg-indigo-500 w-32 h-12 rounded-lg py-2 px-4 items-center justify-center mt-4"
                      onPress={() => {
                          /* Lógica del botón */
                      }}
                  >
                      <Text className="text-white font-semibold">Enviar</Text>
                  </TouchableOpacity>
              </View>
          </View>
      </View>
  );
};

export default PetForm;