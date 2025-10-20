import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { View, Text, StatusBar, StyleSheet } from 'react-native'; // Added imports for View, Text, StatusBar, and StyleSheet
import TelaBiblioteca from "./src/componentes/TelaBiblioteca";
import TelaDescricao from "./src/componentes/TelaDescricao";
import TelaHome from "./src/componentes/TelaHome";
import TelaRotas from "./src/componentes/TelaHome";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
