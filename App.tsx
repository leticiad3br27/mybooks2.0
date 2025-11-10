import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaHome from './src/components/TelaHome/Index';
import TelaBiblioteca from './src/components/TelaBiblioteca/Index';
import TelaRota from './src/components/TelaRota/Index';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Início"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#471111',
          tabBarInactiveTintColor: '#a7847a',
          tabBarStyle: { backgroundColor: '#fff' },
          tabBarLabelStyle: { fontSize: 13, fontWeight: 'bold', marginBottom: 4 },
          tabBarIcon: ({ color, size }) => {
            if (route.name === 'Início') return <Feather name="home" size={size} color={color} />;
            if (route.name === 'Catálogo') return <MaterialCommunityIcons name="wine" size={size} color={color} />;
            if (route.name === 'Contato') return <Feather name="phone" size={size} color={color} />;
            return null;
          },
        })}
      >
        <Tab.Screen name="Início" component={TelaHome} />
        <Tab.Screen name="Catálogo" component={TelaBiblioteca} />
        <Tab.Screen name="Contato" component={TelaRota} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
