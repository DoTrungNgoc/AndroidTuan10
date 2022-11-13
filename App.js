import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenIndex from "./screen/index"
import ScreenHome from "./screen/home"
import ScreenCheckout from './screen/checkout';
const Stack = new createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="ScreenIndex" component={ScreenIndex} />
        <Stack.Screen name="ScreenHome" component={ScreenHome} />
        <Stack.Screen name="ScreenCheckout" component={ScreenCheckout} />
      </Stack.Navigator>
  </NavigationContainer>
  );
}