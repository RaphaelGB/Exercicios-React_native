import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

const PlanejamentoDeViagens = () => {
  const [preferencias, setPreferencias] = useState('');
  const [destino, setDestino] = useState('');
  const [atividades, setAtividades] = useState('');

  const planejarViagem = () => {
    const preferenciasSelecionadas = preferencias.toLowerCase();

    let destinoRecomendado = '';
    let atividadesRecomendadas = '';

    switch (preferenciasSelecionadas) {
      case 'praias', 'praia':
        destinoRecomendado = 'Fernando de Noronha, Brasil';
        atividadesRecomendadas = 'Relaxar na praia, mergulhar, fazer passeios de barco. Tudo que você precisa para passar as melhores férias.';
        break;
      case 'montanhas', 'montanha':
        destinoRecomendado = 'Montanhas Rochosas, Canadá';
        atividadesRecomendadas = 'Trilhas, escalada, observação da vida selvagem. O melhor da vida selvagem e da muita aventura.';
        break;
      case 'cidades históricas':
        destinoRecomendado = 'Roma, Itália';
        atividadesRecomendadas = 'Visitar o Coliseu, explorar o Vaticano, passear pelo Fórum Romano. Caminhe pela história e explore o passado';
        break;
      case 'museus', 'museu':
        destinoRecomendado = 'Museu do Ipiranga - USP, Brasil';
        atividadesRecomendadas = 'Aproveite tudo que a história tem para oferecer.';
        break;
      default:
        destinoRecomendado = 'Não foi possível recomendar um destino com base nas suas preferências. Desculpe :(';
        break;

    }

    setDestino(destinoRecomendado);
    setAtividades(atividadesRecomendadas);
  };

  return (
    <ImageBackground source={require('../src/assets/fundo7.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.label}>Preferências de viagem (praias, montanhas, cidades históricas, museus):</Text>
          <TextInput
            style={styles.input}
            value={preferencias}
            onChangeText={setPreferencias}
          />
          <Button title="Planejar Viagem" onPress={planejarViagem} />
          <Text style={styles.destino}>{destino}</Text>
          <Text style={styles.atividades}>{atividades}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Cor da caixa com opacidade
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: 'black', // Cor do texto
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: 'white', // Cor de fundo do input
  },
  destino: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black', // Cor do texto
  },
  atividades: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
    color: 'black', // Cor do texto
  },
});

export default PlanejamentoDeViagens;
