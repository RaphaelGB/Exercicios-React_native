import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import { useState } from 'react';

const numero = Math.floor(Math.random() * 100);

export default function Adivinhe() {
  /*•	Crie um programa que gere um número aleatório 
  entre 1 e 100 e peça ao usuário para adivinhar qual é o número. 
  O programa deve fornecer dicas ao usuário dizendo se o número
   fornecido é maior ou menor do que o número a ser adivinhado. 
  O jogo deve continuar até que o usuário acerte o número */

  //Será usado para esse app a função Math.floor(Math.random() * 100)
  const sortido = numero;
  const [tInput, setTInput] = useState('');
  const [result, setResult] = useState('???');
  var texto = '';
  const handleGetNum = () => {
    const chute = (tInput - sortido);
    setResult("");
    console.log(chute)
    if (chute == 0) {
      setResult("Muito bem! você acertou o número " + sortido);
    } else if (chute > 0) {
      if (chute <= 10) {
        texto = "Muito perto!"
      }
      else if (chute > 10 && chute < 25) {
        texto = "perto!";
      } else if (chute > 25 && chute < 35) {
        texto = "um pouco longe!";
      } else if (chute > 35 && chute < 50) {
        texto = "longe!";
      } else if (chute > 50 && chute < 70) {
        texto = "Bem longe!";
      } else if (chute > 70 && chute < 90) {
        texto = "Muitíssimo longe!";
      } else {
        texto = "Você fez uma proeza de tão longe que chutou!"
      }
      setResult(texto + " abaixe para acertar");
    } else if (chute < 0) {
      if (chute >= - 10) {
        texto = "Muito perto!"
      }
      else if (chute < -10 && chute > -25) {
        texto = "perto!";
      } else if (chute < -25 && chute > -35) {
        texto = "um pouco longe!";
      } else if (chute < -35 && chute > -50) {
        texto = "longe!";
      } else if (chute < -50 && chute > -70) {
        texto = "Bem longe!";
      } else if (chute < -70 && chute > -90) {
        texto = "Muitíssimo longe!";
      } else {
        texto = "Você fez uma proeza de tão longe que chutou!"
      }


      setResult(texto + " aumente para acertar");
    }
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.img}
        source={require('../src/assets/fundo4.jpg')}
        resizeMode='cover'>
        <View style={styles.background}>
          <Text style={styles.title}>{result}</Text>

          <TextInput
            placeholder='digite um número'
            style={styles.input}
            value={tInput}
            onChangeText={(valor) => setTInput(valor)}
          />
          <TouchableOpacity onPress={handleGetNum} style={styles.button}>
            <Text style={styles.textButton}>Adivinhar</Text>
          </TouchableOpacity>

          <Text style={styles.exit}></Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  background:{
    width: "70%",
    height: "70%",
    backgroundColor: "rgb(0,0,0)",
    opacity: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title:{
    fontSize: 28,
    fontFamily:"consolas, sans-serif",

    textAlign:'center',
    color: 'white'
  }, 
  input:{
    textAlign:'center',
    color: 'white',
    fontSize: 20, 
    padding: 10, 
    margin: 10
  },
  button:{
    color: 'white',
    marginTop: 5
  },
  textButton:{
    backgroundColor: "#FFF",
    padding: 5,
    borderRadius: 4,
    textAlign:'center',
    color: 'black',
    fontSize: 22,
  },
  img:{
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: 'center'
  }
});
