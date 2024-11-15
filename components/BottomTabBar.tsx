import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BottomTabBar = () => {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Ionicons name="home" size={32} color="black" />
        </View>
  
        <View style={styles.iconContainer}>
          <Ionicons name="calendar" size={32} color="black" />
        </View>
  
        <View style={styles.iconContainer}>
          <Ionicons name="location" size={32} color="black" />
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#fff',
      height: 60,
      alignItems: 'center',
      borderTopWidth: 0,
      borderColor: 'transparent', 
    },
    iconContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconLabel: {
      fontSize: 10,
      color: 'black',
    },
  });
  
  export default BottomTabBar;