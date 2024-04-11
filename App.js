import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import CalculoIMC from './components/app1';
import Curadoria from './components/app2'
import Adivinhe from './components/app4';
import MetaExercicio from './components/app6';
import ValorCompra from './components/app8';
import CalculoEconomia from './components/app3';
import NivelEstresse from './components/app5';
import PlanejamentoDeViagens from './components/app7';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="app1" component={CalculoIMC} />
        <Stack.Screen name="app2" component={Curadoria} />
        <Stack.Screen name="app3" component={CalculoEconomia} />
        <Stack.Screen name="app4" component={Adivinhe} />
        <Stack.Screen name="app5" component={NivelEstresse} />
        <Stack.Screen name="app6" component={MetaExercicio} />
        <Stack.Screen name="app7" component={PlanejamentoDeViagens} />
        <Stack.Screen name="app8" component={ValorCompra} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;