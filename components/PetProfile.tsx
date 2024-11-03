import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Bubble } from "@/components/Bubbles";

interface Event {
  id: string;
  title: string;
  date: string;
}

interface File {
  id: string;
  name: string;
  uri: string;
}

const mockEvents: Event[] = [
  { id: "1", title: "Vacuna Weri", date: "2024-11-15" },
  { id: "2", title: "Pipeta Bolt", date: "2024-11-23" },
  { id: "3", title: "Comprar pienso", date: "2024-11-30" },
  { id: "4", title: "Comprar pienso", date: "2024-11-30" },
  { id: "5", title: "Comprar pienso", date: "2024-11-30" },
  { id: "6", title: "Comprar pienso", date: "2024-11-30" },
];

export const PetProfile: React.FC = () => {
  const [avatar, setAvatar] = useState<string | null>(null);

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Se necesita permiso para acceder a tus fotos.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    }
  };

  const renderEventItem = ({ item }: { item: Event }) => (
    <View style={styles.eventItem}>
      <Text style={styles.eventDate}>{item.date.split("-")[2]}</Text>
      <Text style={styles.eventTitle}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Fondo de burbujas */}
      <Bubble containerClass="absolute -bottom-20 -right-16 z-0" type="bubble1" rotation={-45} />
      <Bubble containerClass="absolute -top-20 -left-16 z-0" type="bubble2" rotation={-45} />
      <Bubble containerClass="absolute top-36 right-10 z-0" type="bubble3" rotation={-45} />

      {/* Avatar y Nombre de la Mascota */}
      <TouchableOpacity onPress={pickImage} style={styles.avatarContainer}>
        <Image
          source={avatar ? { uri: avatar } : require("@/assets/images/logo.png")}
          style={styles.avatar}
        />
      </TouchableOpacity>
      <Text style={styles.petName}>Weri</Text>
      <Text style={styles.petBreed}>Bichón Maltés</Text>

      {/* Datos y Eventos */}
      <View style={styles.petInfo}>
        <Text style={styles.petInfoText}>Tengo 2 años</Text>
      </View>
      <Text style={styles.sectionTitle}>Próximos eventos del mes:</Text>
      <FlatList
        data={mockEvents}
        renderItem={renderEventItem}
        keyExtractor={(item) => item.id}
        style={styles.eventList}
      />

      {/* Botones */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Crear Evento</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Subir Archivos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
    alignItems: "center",
    padding: 16,
  },
  avatarContainer: {
    marginTop: 40,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  petName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginTop: 8,
  },
  petBreed: {
    fontSize: 14,
    color: "#666",
  },
  petInfo: {
    backgroundColor: "#FFEDD5",
    padding: 16,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginTop: 16,
  },
  petInfoText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginTop: 20,
  },
  eventList: {
    width: "100%",
    marginTop: 10,
  },
  eventItem: {
    flexDirection: "row",
    backgroundColor: "#FEF3C7",
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
    alignItems: "center",
  },
  eventDate: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#EA580C",
    marginRight: 12,
  },
  eventTitle: {
    fontSize: 16,
    color: "#374151",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#4F46E5",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PetProfile;
