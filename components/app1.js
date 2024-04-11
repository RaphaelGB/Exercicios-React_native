import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const CalculoIMC = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    if (isNaN(pesoNum) || isNaN(alturaNum) || alturaNum === 0) {
      setResultado('Por favor, insira um peso e altura válidos.');
      return;
    }

    const imc = pesoNum / Math.pow(alturaNum / 100, 2);
    let mensagem = '';

    if (imc < 18.5) {
      mensagem = 'Abaixo do peso';
    } else if (imc < 25) {
      mensagem = 'Peso normal';
    } else if (imc < 30) {
      mensagem = 'Sobrepeso';
    } else {
      mensagem = 'Obeso';
    }

    setResultado(`Seu IMC é ${imc.toFixed(2)}. ${mensagem}.`);
  };

  return (
    <ImageBackground source={require('../src/assets/fundo1.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.background}>
          <Text style={styles.label}>Peso (kg):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={peso}
            onChangeText={setPeso}
          />
          <Text style={styles.label}>Altura (cm):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={altura}
            onChangeText={setAltura}
          />
          <Button title="Calcular" onPress={calcularIMC} />
          {resultado && <Text style={styles.result}>{resultado}</Text>}
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
    height: height,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    width: '100%',
    padding: 40,
    backgroundColor: 'rgba(224, 224, 224 , 0.7)',
    borderRadius: 20,
  },
  label: {
    fontSize: 18,
    marginVertical: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'orange',
    borderWidth: 2,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
  },
});

export default CalculoIMC;
