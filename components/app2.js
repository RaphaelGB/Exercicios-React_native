import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, TextInput, TouchableOpacity, Text, View, Image,ImageBackground } from 'react-native';
import { useState } from 'react';

const Curadoria = () => {
/*•	Desenvolva um aplicativo que sugira filmes
 aos usuários com base em suas preferências. 
O aplicativo pode pedir aos usuários que 
indiquem seus gêneros de filmes favoritos e,em seguida, 
usar estruturas de decisão para selecionar 
filmes recomendados com base nessas preferências. */

  var [tInput, setTInput] = useState('');
  var [lista, setLista] = useState('')
  const handleMovies = () =>{
    tInput = tInput.toLowerCase();
    switch (tInput){
      case 'ação':
      setLista('Matrix, Velozes e furiosos, mad max');
      break;
      case 'aventura':
      setLista('Indiana Jones, Velozes e furiosos, mad max');
      break;
      case 'comédia':
      setLista('Tempos modernos, a Família Adams, Apertem os cintos O piloto sumiu');
      break;
      case 'fantasia':
      setLista('Harry Potter, Duna, Percy Jackson');
      break;
      case 'terror':
      setLista('Sexta-feira 13, Pânico, Jogos mortais');
      break;
      case 'ficção científica':
      setLista('Interestelar, , A origem, De volta para o futuro');
      break;
      case 'romance':
      setLista('Amelie Poulain, , Titanic, E o vento levou');
      break;
      case 'drama':
      setLista('O poderoso chefão, Um sonhode Liberdade, A lista de Schindler');
      break;
      default:
        setLista('');
    }
  }
  return (
    <View style={styles.container}
    >
    <ImageBackground
    style = {styles.background}
    source={require('../src/assets/fundo2.jpg')}
    resizeMode='cover'>  
      <Text style={styles.title}>Curadoria de filmes NouvelleNoir</Text>
       <View styles={styles.outline}>
      <TextInput
      placeholder='Digite o gênero do filme'
      style={styles.input}
      value={tInput}
      placeholderTextColor='white'
      onChangeText={(valor) => setTInput(valor)}
      />

      <TouchableOpacity style={styles.button} onPress={handleMovies}> 
        <Text style={styles.textButton}> Pesquisar filmes</Text>
        </TouchableOpacity>

        <Text style={styles.exit}>{lista}</Text>
      <StatusBar style="auto" />
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    background:{
      width: '100%',
      height: '100%',
      backgroundAttachment: 'fixed',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title:{
      textAlign: 'center',
      fontSize: 24,
      color: "#FFF",
      padding: 10,
      borderTopWidth: 2,
      borderBottomWidth: 2,
      fontWeight: "600",
      backgroundColor: '#222',
      justifyContent: 'space-between', 
      flexDirection: 'row'
    },
    textButton:{
      textDecorationStyle:'bold', 
      fontSize: 20, 
      color: '#FFF'
    },
    input:{
      borderWidth: 1,
      borderColor: "#000",
      fontSize: 20, 
      padding: 10,
      marginTop: 10,
      height:'auto',
      width: 'auto',
      color: 'white'
    },
    button:{
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      padding: 10, 
      backgroundColor:'#333',
      borderRadius: 20,
    },
    exit:{
      textAlign: "center",
      fontSize: 18,
      color: 'white',
      fontWeight: '500'
    }
  });

export default Curadoria;