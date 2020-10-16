
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./../bundles/login/index";
const Stack = createStackNavigator();

function LoginScreen() {
  return (
      <Stack.Navigator initialRouteName="Login" headerMode={'none'} >
        <Stack.Screen name="Login" component={Login}  />
      </Stack.Navigator>
  );
}

export default LoginScreen;