import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const mockEvents = [
  { id: '1', title: 'Vacunación', date: '2024-11-15' },
  { id: '2', title: 'Cita Veterinaria', date: '2024-11-20' },
];

const mockFiles = [
  { id: '1', name: 'Cartilla Veterinaria', uri: 'path_to_vet_card.pdf' },
  { id: '2', name: 'Foto Completa del Perro', uri: 'path_to_dog_photo.jpg' },
  { id: '3', name: 'QR del Chip', uri: 'path_to_chip_qr.png' },
];

export const PetProfile = () => {
  const [avatar, setAvatar] = useState<string | null>(null);
  const [petName, setPetName] = useState('Nombre de la Mascota');

  const pickImage = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert('Se necesita permiso para acceder a tus fotos.');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    }
  };

  const renderEventItem = ({ item }) => (
    <Text>{item.title} - {item.date}</Text>
  );

  const renderFileItem = ({ item }) => (
    <Text>{item.name}</Text>
  );

  return (
    <View style={styles.container}>
      {/* Avatar y nombre de la mascota */}
      <TouchableOpacity onPress={pickImage}>
        <Image source={avatar ? { uri: avatar } : require('../assets/images/logo.png')} style={styles.avatar} />
      </TouchableOpacity>
      <Text style={styles.petName}>{petName}</Text>

      {/* Datos del formulario (mock) */}
      <View style={styles.dataContainer}>
        <Text>Datos de la Mascota:</Text>
        <Text>Edad: 2 años</Text>
        <Text>Raza: Labrador</Text>
      </View>

      {/* Botón para crear evento de recordatorio */}
      <Button title="Crear Evento de Recordatorio" onPress={() => alert('Evento creado')} />

      {/* Vista de eventos del mes */}
      <Text style={styles.sectionTitle}>Eventos del Mes:</Text>
      <FlatList
        data={mockEvents}
        renderItem={renderEventItem}
        keyExtractor={item => item.id}
      />

      {/* Botón para subir archivos */}
      <Button title="Subir Archivos" onPress={() => alert('Archivo subido')} />

      {/* Vista de archivos subidos */}
      <Text style={styles.sectionTitle}>Archivos Subidos:</Text>
      <FlatList
        data={mockFiles}
        renderItem={renderFileItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  petName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  dataContainer: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
