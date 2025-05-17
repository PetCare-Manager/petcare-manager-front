import { usePets } from "@/context/PetContext";
import { breeds as breedData } from "@/utils/breeds";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { Alert, Platform, ScrollView, Switch, Text, TextInput, TouchableOpacity, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { RadioButton } from "react-native-paper";
import { es, registerTranslation } from "react-native-paper-dates";

type PetFormData = {
    name: string;
    sex: string;
    breed: string | null;
    chip: string;
    hasDisease: boolean;
    onNeuter: boolean;
    weight: string;
};

type RootStackParamList = {
    UserProfile: undefined;
    EditPetForm: { petId: number };
};

type EditPetFormProps = NativeStackScreenProps<RootStackParamList, "EditPetForm">;

registerTranslation("es", es);

export const EditPetFormScreen: React.FC<EditPetFormProps> = ({ route }) => {
    const { petId } = route.params;

    const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
    const { pets, refreshPets, editPet } = usePets();

    const [loading, setLoading] = useState(true);

    const [editForm, setEditForm] = useState<PetFormData>({
        name: "",
        weight: "",
        sex: "Macho",
        breed: null,
        chip: "",
        hasDisease: false,
        onNeuter: false,
    });

    const [open, setOpen] = useState(false);
    const [items, setItems] = useState(
        breedData.map((b) => ({ label: b.name, value: b.name }))
    );

    useEffect(() => {
        const loadPetData = async () => {
            try {
                const petData = pets.find((pet) => pet.id === petId);

                if (!petData) {
                    Alert.alert("Error", "Mascota no encontrada");
                    setLoading(false);
                    return;
                }

                setEditForm({
                    name: petData.name,
                    weight: petData.weight.toString(),
                    sex: petData.gender === "M" ? "Macho" : "Hembra",
                    breed: petData.breed,
                    chip: petData.chip_number || "",
                    hasDisease: petData.chronic_illnesses,
                    onNeuter: petData.neutered
                });
                setLoading(false);
            } catch (error) {
                console.error("Error fetching pet data:", error);
                Alert.alert("Error", "No se pudo cargar la información de la mascota");
                setLoading(false);
            }
        };

        loadPetData();
    }, [petId]);

    const handleFormChange = (field: keyof PetFormData, value: any) => {
        setEditForm(prevForm => ({
            ...prevForm,
            [field]: value
        }));
    };

    const mapGender = (gender: string): "M" | "F" => {
        return gender === "Macho" ? "M" : "F";
    };

    const handleSubmit = async () => {
        if (!editForm.name.trim()) {
            Alert.alert("Error", "El nombre de la mascota es obligatorio.");
            return;
        }
        if (!editForm.weight || isNaN(parseFloat(editForm.weight))) {
            Alert.alert("Error", "Debes ingresar el peso de la mascota.");
            return;
        }
        if (!editForm.breed) {
            Alert.alert("Error", "Por favor, selecciona una raza.");
            return;
        }
        if (editForm.chip.length > 0 && editForm.chip.length < 15) {
            Alert.alert("Error", "El número de chip debe tener al menos 15 dígitos.");
            return;
        }

        const petData = {
            name: editForm.name,
            weight: parseFloat(editForm.weight),
            gender: mapGender(editForm.sex),
            breed: editForm.breed,
            chip_number: editForm.chip,
            chronic_illnesses: editForm.hasDisease,
            neutered: editForm.onNeuter
        };

        try {
            await editPet(petId, petData);
            await refreshPets();
            if (Platform.OS === "web") {
                alert("Mascota actualizada correctamente");
                navigate("UserProfile");
            } else {
                Alert.alert("Éxito", "Mascota actualizada correctamente", [
                    {
                        text: "OK",
                        onPress: () => navigate("UserProfile")
                    }
                ]);
            }
        } catch (error) {
            console.error("Error updating pet:", error);
            Alert.alert("Error", "No se pudo actualizar la información de la mascota");
        }
    };

    if (loading) {
        return (
            <View className="flex-1 justify-center items-center">
                <Text className="text-lg font-raleway-medium">Cargando...</Text>
            </View>
        );
    }

    return (
        <ScrollView className="flex-1 px-6 py-8">
            <Text className="text-xl font-raleway-semibold text-start mb-6">
                Actualiza los datos de tu mascota
            </Text>

            {/* Nombre */}
            <Text className="text-base text-typography_2 font-raleway-medium mb-2">
                Nombre:
            </Text>
            <TextInput
                placeholder="Escribe el nombre"
                value={editForm.name}
                onChangeText={(value) => handleFormChange('name', value)}
                className="bg-customwhite border border-inputborder rounded-lg px-4 py-2 mb-4"
            />

            {/* Peso */}
            <Text className="text-base text-typography_2 font-lexend-medium mb-2">
                Peso:
            </Text>
            <TextInput
                value={editForm.weight}
                onChangeText={(value) => handleFormChange('weight', value)}
                keyboardType="numeric"
                className="bg-white border border-gray-300 rounded-lg px-4 py-2 mb-4"
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
                            status={editForm.sex === option ? "checked" : "unchecked"}
                            onPress={() => handleFormChange('sex', option)}
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
                value={editForm.breed}
                items={items}
                setOpen={setOpen}
                setValue={(callback) => {
                    const value = callback(editForm.breed);
                    handleFormChange('breed', value);
                }}
                setItems={setItems}
                multiple={false}
                placeholder="Selecciona una raza"
                style={{ marginBottom: open ? 150 : 20 }}
            />

            {/* Número de Chip */}
            <Text className="text-base text-typography_2 font-raleway-medium mb-2">
                N° Chip:
            </Text>
            <TextInput
                placeholder="Ej: 123456789012345"
                value={editForm.chip}
                onChangeText={(value) => handleFormChange('chip', value)}
                keyboardType="numeric"
                maxLength={15}
                className="bg-customwhite border border-inputborder rounded-lg px-4 py-2 mb-4"
            />

            {/* Switches con estilo */}
            <View className="p-4">
                <View className="flex-row justify-between items-center mb-6">
                    <Text className="text-base font-raleway-medium">
                        Enfermedad crónica:
                    </Text>
                    <Switch
                        value={editForm.hasDisease}
                        onValueChange={(value) => handleFormChange('hasDisease', value)}
                        trackColor={{ false: "#d1d5db", true: "#C23C64" }}
                        thumbColor="#ffffff"
                        ios_backgroundColor="#d1d5db"
                        style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }] }}
                    />
                </View>

                <View className="flex-row justify-between items-center mb-6">
                    <Text className="text-base font-raleway-medium">Esterilizado:</Text>
                    <Switch
                        value={editForm.onNeuter}
                        onValueChange={(value) => handleFormChange('onNeuter', value)}
                        trackColor={{ false: "#d1d5db", true: "#C23C64" }}
                        thumbColor="#ffffff"
                        ios_backgroundColor="#d1d5db"
                        style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }] }}
                    />
                </View>
            </View>

            {/* Botón de envío */}
            <View className="flex justify-center gap-2 mb-8 mt-8 w-full px-6">
                <TouchableOpacity
                    className="bg-primary px-14 py-4 rounded-2xl"
                    onPress={handleSubmit}
                >
                    <Text className="text-customwhite font-raleway-semibold text-base text-center">
                        Guardar cambios
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};