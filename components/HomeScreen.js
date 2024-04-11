import React from 'react';
import { View, Image, Text, StyleSheet, Pressable } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const handleButtonClick = (option) => {
        //implementando a lógica só para o botão de Promoções
        switch(option){
            case "app1":
                navigation.navigate("app1");
            break;
            case "app2":
                navigation.navigate("app2");
            break;
            case "app3":
                navigation.navigate("app3");
            break;
            case "app4":
                navigation.navigate("app4");
            break;
            case "app5":
                navigation.navigate("app5");
            break;
            case "app6":
                navigation.navigate("app6");
            break;
            case "app7":
                navigation.navigate("app7");
            break;
            case "app8":
                navigation.navigate("app8");
            break;
            default:
                console.log(`Você pressionou a option  ${option}`);
            break;
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                
                <Pressable style={styles.button} onPress={() =>
                    handleButtonClick('app1')}>
                    <Text style={styles.buttonText}>Cálculo IMC</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() =>
                    handleButtonClick('app2')}>
                    <Text style={styles.buttonText}>Curadoria NouvelleNoir</Text>
                </Pressable>
                
                <Pressable style={styles.button} onPress={() =>
                    handleButtonClick('app3')}>
                    <Text style={styles.buttonText}>Economia do Mês</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() =>
                    handleButtonClick('app4')}>
                    <Text style={styles.buttonText}>???</Text>
                </Pressable>
                
                <Pressable style={styles.button} onPress={() =>
                    handleButtonClick('app5')}>
                    <Text style={styles.buttonText}>Saúde e estresse</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() =>
                    handleButtonClick('app6')}>
                    <Text style={styles.buttonText}>Daily Training</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() =>
                    handleButtonClick('app7')}>
                    <Text style={styles.buttonText}>Guia de viagens</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() =>
                    handleButtonClick('app8')}>
                    <Text style={styles.buttonText}>Compras aqui</Text>
                </Pressable>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "linear-gradient(90deg, rgba(32,28,92,1))"  
    },
    imageContainer: {
        flex: 0.5,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
    },
    buttonContainer: {
        flex: 0.5,
        padding: 16,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#2888FF',
        padding: 15,
        margin: 10,
        borderRadius: 5,
        width: '50%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center'
    },
});
export default HomeScreen;