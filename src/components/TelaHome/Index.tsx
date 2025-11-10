import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { styles } from './styles';
import Header from '../Header/Header'; // ajuste o caminho conforme a localização do seu Header

const TelaHome = () => {
  return (
    <View style={styles.container}>
      <Header title="Início" />
      <ImageBackground
        source={require('../../../assets/criminal minds _ emily prentiss.jpg')} // troque pelo nome correto do seu arquivo
        style={styles.background}
        blurRadius={4}
      >
        <View style={styles.overlay} />
        <View style={styles.centerContent}>
          <Text style={styles.title}>Adega Preferida</Text>
          <Text style={styles.subtitle}>
            Aqui você encontra os melhores e mais saborosos vinhos.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default TelaHome;