import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/screens/login';
import { Provider } from 'react-redux';
import {store} from "./src/core/store";
import { PersistGate } from 'redux-persist/integration/react';
import {persistor} from "./src/core/store";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <LoginScreen/>
        </NavigationContainer>
    </PersistGate>
    </Provider>
  );
}