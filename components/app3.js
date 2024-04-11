import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

const CalculoEconomia = () => {
  const [despesas, setDespesas] = useState('');
  const [receitas, setReceitas] = useState('');
  const [percentualEconomia, setPercentualEconomia] = useState(null);
  const [mensagem, setMensagem] = useState('');

  const calcularEconomia = () => {
    const despesasNum = parseFloat(despesas);
    const receitasNum = parseFloat(receitas);

    if (isNaN(despesasNum) || isNaN(receitasNum) || receitasNum === 0) {
      setMensagem('Por favor, insira valores válidos para despesas e receitas.');
      return;
    }

    const economia = receitasNum - despesasNum;
    const percentualEconomia = (economia / receitasNum) * 100;

    setPercentualEconomia(percentualEconomia.toFixed(2));

    if (percentualEconomia > 15) {
      setMensagem('Invista seu dinheiro');
    } else if (percentualEconomia >= 10 && percentualEconomia <= 15) {
      setMensagem('Vamos investir no próximo mês');
    } else {
      setMensagem('Vamos continuar tentando');
    }
  };

  return (
    <ImageBackground source={require('../src/assets/fundo3.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.background}>
          <Text style={styles.label}>Despesas do mês:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={despesas}
            onChangeText={setDespesas}
          />
          <Text style={styles.label}>Receitas do mês:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={receitas}
            onChangeText={setReceitas}
          />
          <Button title="Calcular Economia" onPress={calcularEconomia} />
          {percentualEconomia !== null && (
            <Text style={styles.result}>Você economizou {percentualEconomia}% neste mês.</Text>
          )}
          <Text style={styles.mensagem}>{mensagem}</Text>
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
  background: {
    width: '80%',
    padding: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'yellow',
    borderWidth: 2,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
  mensagem: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CalculoEconomia;
