import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/screens/login';

export default function App() {
  return (
    <NavigationContainer>
      <LoginScreen/>
    </NavigationContainer>
  );
}