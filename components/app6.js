import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useState } from 'react';
export default function MetaExercicio() {
  /*•Desenvolva um aplicativo que permita 
  aos usuários rastrearem suas atividades físicas e exercícios. 
  O aplicativo pode usar estruturas de decisão para fornecer 
  feedback sobre o progresso em relação a metas
  de condicionamento físico e sugerir exercícios 
  adicionais com base nos objetivos individuais do usuário. */

  //UseStates
  let [idade, setIdade] = useState("");
  let [objetivo, setObjetivo] = useState("");
  let [quantTreino, setQuantTreino] = useState("");
  let [resultado, setResultado] = useState("");

  //variáveis
  var treinoDia, textoTreino, textoResultado;

  //funções
  const toLowerText = () => {
    objetivo = objetivo.toLowerCase()
  }
  function calculoFaixaEtaria() {
    idade <= 2 ? idade = "bebê" :
      idade <= 12 ? idade = "criança" :
        idade < 18 ? idade = "adoslecente" :
          idade < 60 ? idade = "adulto" :
            idade = "idoso";
  }
  function tempoTreino() {
    quantTreino *= 60;
    treinoDia = quantTreino / 7
    //MathRound - arredonda o tempo de treino para cima
    treinoDia = Math.round(treinoDia);
  }
  function recomendacoes() {

    if (idade == "bebê") {
      //Calcula quanto tempo de treino diário deve ser colocado
      treinoDia >= 180 ? treinoDia = "ideal" : treinoDia = 180 - treinoDia;
      //Insere o texto a partir da quantidade de tempo ideal
      treinoDia == "ideal" ? textoTreino = `O tempo de treino é: ${treinoDia}` :
        textoTreino = `É importante ela adicionar ${treinoDia} minutos a mais de treino diário`
      textoResultado = ` 
      ${textoTreino}
       Para um bebê, recomenda-se que sejam estimuladas atividades com os pais.
       Elas devem trabalhar segurar, puxar, empurrar e alcançar os objetos. 
       Deve-se desde o princípio estimula-los a andar, dar pequenos passos ou deixa-los ficar em pé 
       O tempo de exercício diário deve ser bem fracionado em todo dia para a criança não ficar sedentária
      `
      setResultado(textoResultado);
    } else if (idade == "criança") {
      //Calcula quanto tempo de treino diário deve ser colocado
      treinoDia >= 60 ? treinoDia = "ideal" : treinoDia = 60 - treinoDia;
      //Insere o texto a partir da quantidade de tempo ideal
      treinoDia == "ideal" ? textoTreino = `O tempo de treino é: ${treinoDia}` :
        textoTreino = `É importante ela adicionar ${treinoDia} minutos a mais de treino diário moderado`
      textoResultado = `
      ${textoTreino}
      Para uma criança é importante diferenciar entre treino moderado e intenso
      3x por semana de intenso e outros dias treinos moderados
      As principais atividades são: brincadeiras com saltos, 
      Puxar e apoiar, suportar o peso corporal
      Esportes de socialização como futebol e vôlei
      Esportes de trabalho motor como artes marciais
      `
      setResultado(textoResultado);
    } else if (idade == "idoso") {
      treinoDia >= 150 ? treinoDia = "ideal" : treinoDia = 150 - treinoDia;
      treinoDia == "ideal" ? textoTreino = `O tempo de treino é: ${treinoDia}` :
        textoTreino = `É importante ela adicionar ${treinoDia} minutos a mais de treino diário`
      textoResultado = `
      ${textoTreino}
      Deve-se buscar sempre fazer um esforço para se manter ativo tanto quanto puder.
      Com atividades que trabalham mobilidade e flexibilidade, treinos com esses exercícios são ótimos
      A locomoção, tarefas domésticas e jogos não devem ser excluídos da lista das atividades!
      Além disso, a natação, hidroginástica, caminhada e alongamento são essenciais.
      Uma opção para quem quiser diferenciar é usar o Tai chi como prática
      `
      setResultado(textoResultado);
    } else if (idade == "adoslecente") {
      treinoDia >= 60 ? treinoDia = "ideal" : treinoDia = 60 - treinoDia;
      treinoDia == "ideal" ? textoTreino = `O tempo de treino é: ${treinoDia}` :
        textoTreino = `É importante ela adicionar ${treinoDia} minutos a mais de treino diário`
      textoResultado =
        `${textoTreino}
      As atividades aeróbicas são indispensáveis.
      Pode-se realizar qualquer tipo de esporte, recomenda-se principalmente:
      Musculação, natação e artes marciais
      `
      switch (objetivo) {
        case "saúde":
          textoResultado += `Buscando ${objetivo} deve-se focar principalmente em caminhada, corrida e ciclismo`
          break;
        case "saúde mental":
          textoResultado += `Buscando ${objetivo} deve-se focar principalmente em natação, dançar, pilates e musculação `
          break;
        case "emagrecer":
          textoResultado += `Buscando ${objetivo} deve-se focar em natação, treino funcional, corrida e ciclismo `
          break;
        case "depressão":
          textoResultado += `Para melhorar a ${objetivo} deve-se focar em caminhada, corrida, yoga e treino de força `
          break;
        case "condicionamento":
          textoResultado += `buscando ${objetivo} deve-se focar em hidroginástica, dança, treino funcional e caminhada `
          break;
        case "sair do sedentarismo":
          textoResultado += `buscando ${objetivo} deve-se focar em caminhar, pedalar, dançar, nadar, correr `
          break;
        case "Começar a fazer exercícios":
          textoResultado += `buscando ${objetivo} deve-se focar em caminhada, corrida, natação, musculação. Mais acima de tudo, fazer algo que gosta! `
          break;
        case "ganhar massa":
          textoResultado += `Buscando ${objetivo} deve-se focar em musculação, calistenia, crossfit ou HIIT `
          break;
        default:
          break;
      }
      setResultado(textoResultado);
    } else {
      treinoDia >= 150 ? treinoDia = "ideal" : treinoDia = 150 - treinoDia;
      treinoDia == "ideal" ? textoTreino = `O tempo de treino é: ${treinoDia}` :
        textoTreino = `É importante ela adicionar ${treinoDia} minutos a mais de treino diário`
      textoResultado =
        `${textoTreino}
      Os músculos nessa fase começam a diminuir
      Treinos de resistência são recomendáveis para impedir esse processo
      Assim como conciliar com aeróbicos durante a semana
      `
      switch (objetivo) {
        case "saúde":
          textoResultado += `Buscando ${objetivo} deve-se focar principalmente em caminhada, corrida e ciclismo`
          break;
        case "saúde mental":
          textoResultado += `Buscando ${objetivo} deve-se focar principalmente em natação, dançar, pilates e musculação `
          break;
        case "emagrecer":
          textoResultado += `Buscando ${objetivo} deve-se focar em natação, treino funcional, corrida e ciclismo `
          break;
        case "depressão":
          textoResultado += `Para melhorar a ${objetivo} deve-se focar em caminhada, corrida, yoga e treino de força `
          break;
        case "condicionamento":
          textoResultado += `buscando ${objetivo} deve-se focar em hidroginástica, dança, treino funcional e caminhada `
          break;
        case "sair do sedentarismo":
          textoResultado += `buscando ${objetivo} deve-se focar em caminhar, pedalar, dançar, nadar, correr `
          break;
        case "Começar a fazer exercícios":
          textoResultado += `buscando ${objetivo} deve-se focar em caminhada, corrida, natação, musculação. Mais acima de tudo, fazer algo que gosta! `
          break;
        case "ganhar massa":
          textoResultado += `Buscando ${objetivo} deve-se focar em musculação, calistenia, crossfit ou HIIT `
          break;
        default:
          break;
      }
      setResultado(textoResultado);
    }
  }
  function handleDefinirMetas() {
    calculoFaixaEtaria();
    tempoTreino();
    toLowerText();
    recomendacoes();
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.img}
        source={require("../src/assets/fundo6.jpeg")}
        resizeMode="cover">
          <View
          style={styles.background}>
        <Text style={styles.title}>Daily Training </Text>
        <Text style={styles.titleInput}>Digite a idade do praticante</Text>
        <TextInput
          style={styles.input}
          onChangeText={(valor) => setIdade(valor)}
          value={idade}
          placeholder='Idade'
        />
        <Text style={styles.titleInput}>Digite o objetivo do seu treino</Text>
        <TextInput
          style={styles.input}
          onChangeText={(valor) => setObjetivo(valor)}
          value={objetivo}
          placeholder='Objetivo'
        />
        <Text style={styles.titleInput}>Digite quantas horas de treino por semana você já faz</Text>
        <TextInput
          style={styles.input}
          onChangeText={(valor) => setQuantTreino(valor)}
          value={quantTreino}
          placeholder='Quantidade de treino'
        />

        <TouchableOpacity style={styles.button} onPress={handleDefinirMetas}>
          <Text style={styles.textButton}>Definir metas</Text>
        </TouchableOpacity>

        <Text style={styles.textResult}>{resultado}</Text>
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
  background: {
      width: "70%",
      height: "70%",
      backgroundColor: "#A5CFFF",
      opacity: 0.9,
      justifyContent: "center",
      borderRadius: 25,
      alignItems: "center"
  },
  title: {
      fontSize: 30,
      fontFamily: "consolas, sans-serif",
      marginBottom: 10,
      textAlign: 'center',
      color: 'black'
  },
  titleInput:{
      fontWeight:'700',
      fontSize: 18,
      textAlign: 'center'
  },
  input: {
      textAlign: 'center',
      color: 'black',
      borderBottomColor: "#000",
      borderWidth: 1,
      fontSize: 20,
      padding: 10,
      margin: 10,
      borderRadius: 12
  },
  button: {
      borderColor: 'white',
      marginTop: 3
  },
  textButton: {
      fontWeight: '500',
      borderWidth: 1,
      borderColor: "white",
      color: 'white',
      backgroundColor: "#000",
      padding: 5,
      borderRadius: 4,
      textAlign: 'center',
      fontSize: 18,
  },
  img: {
      width: '100%',
      height: '100%',
      justifyContent: "center",
      alignItems: 'center'
  }
});