import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

const NivelEstresse = () => {
  const [nivelEnergia, setNivelEnergia] = useState('');
  const [qualidadeSono, setQualidadeSono] = useState('');
  const [nivelEstresse, setNivelEstresse] = useState('');
  const [sugestoes, setSugestoes] = useState('');

  const analisarSaude = () => {
    const nivelEnergiaNum = parseFloat(nivelEnergia);
    const qualidadeSonoNum = parseFloat(qualidadeSono);
    const nivelEstresseNum = parseFloat(nivelEstresse);

    if (
      isNaN(nivelEnergiaNum) || isNaN(qualidadeSonoNum) || isNaN(nivelEstresseNum) ||
      nivelEnergiaNum < 0 || nivelEnergiaNum > 10 ||
      qualidadeSonoNum < 0 || qualidadeSonoNum > 10 ||
      nivelEstresseNum < 0 || nivelEstresseNum > 10
    ) {
      setSugestoes('Por favor, insira valores válidos para nível de energia, qualidade do sono e nível de estresse (de 0 a 10).');
      return;
    }

    let sugestoesTexto = 'Sugestões para melhorar sua saúde:\n';

    if (nivelEnergiaNum < 5) {
      sugestoesTexto += '- Tente fazer pequenas pausas para descansar e relaxar durante o dia.\n';
    }

    if (qualidadeSonoNum < 5) {
      sugestoesTexto += '- Estabeleça uma rotina de sono regular e crie um ambiente propício para dormir.\n';
    }

    if (nivelEstresseNum > 7) {
      sugestoesTexto += '- Pratique técnicas de relaxamento, como meditação ou respiração profunda.\n';
    }

    setSugestoes(sugestoesTexto);
  };

  return (
    <ImageBackground source={require('../src/assets/fundo5.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.background}>
          <Text style={styles.label}>Nível de energia (de 0 a 10):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={nivelEnergia}
            onChangeText={setNivelEnergia}
          />
          <Text style={styles.label}>Qualidade do sono (de 0 a 10):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={qualidadeSono}
            onChangeText={setQualidadeSono}
          />
          <Text style={styles.label}>Nível de estresse (de 0 a 10):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={nivelEstresse}
            onChangeText={setNivelEstresse}
          />
          <Button title="Analisar Saúde" onPress={analisarSaude} />
          {sugestoes !== '' && (
            <Text style={styles.sugestoes}>{sugestoes}</Text>
          )}
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
    padding: 20,
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
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 80,
    marginBottom: 20,
  },
  sugestoes: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'left',
  },
});

export default NivelEstresse;
