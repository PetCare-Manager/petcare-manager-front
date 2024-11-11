import React, {useState} from 'react';
import { View, Text, TextInput, Switch, TouchableOpacity} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Bubble } from "@/components/Bubbles";
import BottomTabBar from './BottomTabBar';


const PetForm = () => {
  const [isNeutered, setIsNeutered] = useState(null);
  const [breedOpen, setBreedOpen] = useState(false);
  const [neuteredOpen, setNeuteredOpen] = useState(false);
  const [selectedBreed, setSelectedBreed] = useState("");

  const neuteredOptions = [
    { label: 'Si', value: true},
    { label: 'No', value: false},
  ];

  const BreedList = [
    { label: 'Labrador', value: 'labrador'},
    { label: 'SharPei', value: 'harPei'},
    { label: 'Border Collie', value: 'border_collie'},
    { label: 'Chihuahua', value: 'chihuahua'},
    { label: 'Beagle', value: 'beagle'},
  ];

  return (
      <View className="m-auto w-[375px] h-[755px] bg-white justify-between items-center border border-red-600 p-4 relative rounded-xl shadow-lg">
          <Bubble
              containerClass="absolute -top-20 -left-16 z-0"
              type="bubble2"
              rotation={-45}
          />
           <Bubble
              containerClass="absolute bottom-32 right-0 z-0"
              type="bubble3"
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
                  <Text className="font-afacad-semibold text-3xl text-center text-slate-600  mb-8">
                      Añadir mascota
                  </Text>
                  <TextInput 
                      placeholder="Nombre"
                      className="border p-2 mb-4 rounded"
                      style={{ backgroundColor: 'white', borderRadius: 8, padding: 10, marginBottom: 20 }}
                  />
                  <DropDownPicker 
                    open={breedOpen}
                    value={selectedBreed}
                    items={BreedList}
                    setOpen={setBreedOpen}
                    setValue={setSelectedBreed}
                    placeholder="Seleccione una raza"
                    style={{ marginBottom: 20 }}
                    containerStyle={{ width: '100%' }}
                    dropDownContainerStyle={{ width: '100%' }}
                  />
                  <TextInput
                      placeholder="Fecha de nacimiento"
                      className="border p-2 mb-4 rounded"
                      style={{ backgroundColor: 'white', borderRadius: 8, padding: 10, marginBottom: 20 }}
                  />
                  <TextInput
                      placeholder="Peso"
                      keyboardType="numeric"
                      className="border p-2 mb-4 rounded"
                      style={{ backgroundColor: 'white', borderRadius: 8, padding: 10, marginBottom: 20 }}
                  />
                  <TextInput
                      placeholder="Microchip"
                      className="border p-2 mb-4 rounded"
                      style={{ backgroundColor: 'white', borderRadius: 8, padding: 10, marginBottom: 20 }}
                  />
                  <DropDownPicker
                     open={neuteredOpen}
                     value={isNeutered}
                     items={neuteredOptions}
                     setOpen={setNeuteredOpen}
                     setValue={setIsNeutered}
                     placeholder="Esterilizado"
                     style={{ marginBottom: 20 }}
                     containerStyle={{ width: '100%' }}
                     dropDownContainerStyle={{ width: '100%' }}
                   />
                  <View className="w-full items-center mt-6">
                  <TouchableOpacity
                      className="bg-indigo-500 w-72 h-12 rounded-lg py-2 px-6 items-center justify-center"
                      onPress={() => {
                          /* Lógica del botón */
                      }}
                  >
                      <Text className="text-white font-semibold">Añadir mascota</Text>
                  </TouchableOpacity>
                  </View>
              </View>
          </View>

          <BottomTabBar/>
      </View>
  );
};

export default PetForm;