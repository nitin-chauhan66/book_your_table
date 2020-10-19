
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./../bundles/login/index";
import DrawerNavigator from "./DrawerNavigator";
import Signup from "./../bundles/SignupComponent/index"
import {connect} from "react-redux";
const Stack = createStackNavigator();

class LoginScreen extends React.Component {
  render(){
    const {loggedIn} = this.props;
    return (
      loggedIn ? (
          <DrawerNavigator/>
      ) : (
        <Stack.Navigator headerMode={'none'}>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Signup" component={Signup}/>
        </Stack.Navigator>
      )
    );
  }
  
}
const wrappedComponent = connect(store=>{
  return{
    loggedIn:store.login.loggedIn
  }
})(LoginScreen);
export default wrappedComponent;