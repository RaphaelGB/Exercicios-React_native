import { Text, View, TouchableOpacity, TextInput, Image, ImageBackground, StyleSheet } from 'react-native';
import { useState } from 'react';
import React from 'react';

export default function ValorCompra() {
  /*•	Elabore um programa que receba o valor do produto
   e a quantidade. Depois de calcular o valor da compra, 
   receba o código do tipo do pagamento como segue a 
   tabela abaixo, forneça o desconto sobre o valor final e 
   informe ao usuário o valor da compra, o valor de desconto e
   o valor final e qual o tipo de pagamento que ele escolheu. */

  //useStates
  let [valor, setValor] = useState("");
  let [quant, setQuant] = useState("");
  let [pagamento, setPagamento] = useState("");
  let [resultado, setResultado] = useState("")
  //variáveis
  let valFinal = 0, desc = 0, valCompra;
  const textoPadrao = "";
  //funções
  const handleCalculaPreco = () => {
    const quantidade = quant;
    const val = valor;
    pagamento = pagamento.toLowerCase();
    if (pagamento == "a vista") {
      valCompra = quantidade * val
      desc = 0.25
      valFinal = valCompra * desc;
      desc = valCompra - valFinal;
    } else if (pagamento == "cheque") {
      valCompra = quantidade * val
      desc = 0.20
      valFinal = valCompra * desc;
      desc = valCompra - valFinal;
    }
    else if (pagamento == "cartão crédito (2x)" ||
      pagamento == "cartão de crédito (2x)") {
      valCompra = quantidade * val
      desc = 0.10
      valFinal = valCompra * desc;
      desc = valCompra - valFinal;
    } else if (pagamento == "cartão crédito (3x)" ||
      pagamento == "cartão de crédito (3x)") {
      valCompra = quantidade * val
      desc = 0.05
      valFinal = valCompra * desc;
      desc = valCompra - valFinal;
    } else {
      valFinal = quantidade * val;
    }
    if (valCompra !== undefined){
    setResultado("O valor da compra é: " + valCompra +
      " \n O valor do desconto é de: " + desc +
      " \n O valor final da compra é: " + valFinal +
      " \n Para a seguinte forma de pagamento: " + pagamento);
  } else {
    setResultado("Erro, preencha uma forma de pagamento válida!");
  
  }
}
  //testes
  console.log(pagamento);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.img}
        source={require('../src/assets/fundo8.jpg')}
        resizeMode='cover'>
        <View style={styles.background}>
          <Text style={styles.title}>Carrinho de compras</Text>
          <Text style={styles.titleInput}>Valor do produto</Text>
          <TextInput
            style={styles.input}
            value={valor}
            /*Muda a cor do placeholder */
            placeholderTextColor="#999"
            placeholder='Valor do produto'
            onChangeText={(valor) => setValor(valor)}
          />
          <Text style={styles.titleInput}>Quantidade do produto</Text>
          <TextInput
            style={styles.input}
            value={quant}
            /*Muda a cor do placeholder */
            placeholderTextColor="#999"
            placeholder='Quantidade do produto'
            onChangeText={(valor) => setQuant(valor)}
          />

          <Text style={styles.titleInput}>Forma de pagamento</Text>
          <TextInput
            style={styles.input}
            value={pagamento}
            /*Muda a cor do placeholder */
            placeholderTextColor="#999"
            placeholder='forma de pagamento'
            onChangeText={(valor) => setPagamento(valor)}
          />

          <TouchableOpacity style={styles.button} onPress={handleCalculaPreco}>
            <Text style={styles.textButton}>Calcular</Text>
          </TouchableOpacity>

          <Text style={styles.exit}>{resultado}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',

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
    margin: 10,
    borderColor: 'white',
    borderWidth: 1,
  },
  button:{
    color: 'white',
    marginTop: 3
  },
  textButton:{
    backgroundColor: "#FFF",
    padding: 5,
    borderRadius: 4,
    textAlign:'center',
    color: 'black',
    fontSize: 24
  },
  img:{
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: 'center'
  },
  exit:{
      color: 'white'
  }
});