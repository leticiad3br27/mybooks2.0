import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { styles } from './styles';
import Header from '../Header/Header';

const vinhos = [
  {
    id: '1',
    nome: 'Chatigny Chardonnay',
    descricao: 'Vinho leve, refrescante e levemente cítrico de cor amarelo palha. Perfeito com carnes brancas e massa ao pesto.',
    imagem: require('../../../assets/vinho-branco.jpg'),
  },
  {
    id: '2',
    nome: 'Concha y Toro Exportacion',
    descricao: 'Vinho rosé fresco, intenso e macio da cor rosa pálido. Perfeito com saladas e aperitivos.',
    imagem: require('../../../assets/vinho-especial.jpg'),
  },
  {
    id: '3',
    nome: "Portada Winemaker's",
    descricao: 'Vinho encorpado, saboroso e frutado, com final levemente adocicado. Sua cor é vermelho-rubi. Perfeito com queijo parmesão e carnes assadas ou grelhadas.',
    imagem: require('../../../assets/vinho-rose.jpg'),
  },
  {
    id: '4',
    nome: 'Elvio Cogno Ravera Barolo',
    descricao: 'Vinho estruturado, com sabor de cereja vermelha madura, herbáceos, notas de tabaco e taninos aveludados. Sua cor é vermelho rubi escuro.',
    imagem: require('../../../assets/vinho-tinto.jpg'),
  },
];

const TelaBiblioteca = () => (
  <View style={styles.container}>
    <Header title="Catálogo" />
    <View style={styles.header}>
      <Text style={styles.title}>Nossos vinhos</Text>
      <Text style={styles.subtitle}>
        Trabalhamos com o melhor vinho dos seguintes tipos: Vinho branco, vinho rosé, vinho tinto e vinho seco.
      </Text>
    </View>
    <FlatList
      data={vinhos}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={item.imagem} style={styles.image} />
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>{item.nome}</Text>
            <Text style={styles.cardDesc}>{item.descricao}</Text>
          </View>
        </View>
      )}
      contentContainerStyle={styles.listContent}
      showsVerticalScrollIndicator={false}
    />
  </View>
);

export default TelaBiblioteca;