import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import Header from '../Header/Header';

const info = [
  {
    id: '1',
    icon: <Feather name="phone" size={36} color="#953b33" />,
    label: 'Telefone:',
    value: '+55 21 000000000'
  },
  {
    id: '2',
    icon: <Feather name="map-pin" size={36} color="#953b33" />,
    label: 'Endereço:',
    value: 'Av. 123, 222 - Rio de Janeiro RJ'
  },
  {
    id: '3',
    icon: <Feather name="mail" size={36} color="#953b33" />,
    label: 'Email:',
    value: 'preferida@adega.com.br'
  },
  {
    id: '4',
    icon: <FontAwesome name="instagram" size={36} color="#953b33" />,
    label: 'Instagram:',
    value: '@adegapreferida'
  }
];

const TelaRota = () => (
  <View style={styles.container}>
    <Header title="Contato" />
    <Text style={styles.header}>Entre em contato conosco para comprar nossos produtos</Text>
    {info.map(item => (
      <View key={item.id} style={styles.card}>
        {item.icon}
        <Text style={styles.label}>{item.label}</Text>
        <Text style={styles.value}>{item.value}</Text>
      </View>
    ))}
  </View>
);

export default TelaRota;
