import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "./../bundles/HomeComponent";
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import BottomNavigator from "./bottomNavigator";
import { View} from 'react-native';
import DrawerComponent from "./DrawerComponent";
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
      <Drawer.Navigator 
      initialRouteName="editProfile"  
      drawerType={'front'} 
      drawerContent={(props)=><DrawerComponent {...props}/>} 
      drawerStyle={{width:'100%'}} 
      >
        <Drawer.Screen 
        name="editProfile" 
        component={BottomNavigator} 
        options={
            {
                drawerIcon:()=>{
                    return(
                        <View style={{borderRadius:10,backgroundColor:'#fafafa',padding:15}}>
                        <Icon name={'person'} style={{fontSize:20,color:'gray'}}
                        />
                        </View>
                    )
                },
                drawerLabel:'Edit Profile'
            }
        } />
        <Drawer.Screen 
        name="reservations" 
        component={Home}
        options={
            {
                drawerIcon:()=>{
                    return(
                        <View style={{borderRadius:10,backgroundColor:'#fafafa',padding:15}}>
                        <Icon name={'date-range'} style={{fontSize:20,color:'gray'}}
                        />
                        </View>
                    )
                },
                drawerLabel:'Reservations'
            }
        }
         />
        <Drawer.Screen 
        name="favorites" 
        component={Home}
        options={
            {
                drawerIcon:()=>{
                    return(
                        <View style={{borderRadius:10,backgroundColor:'#fafafa',padding:15}}>
                        <Icon name={'favorite'} style={{fontSize:20,color:'gray'}}
                        />
                        </View>
                    )
                },
                drawerLabel:'Favorites'
            }
        }
         />
        <Drawer.Screen 
        name="settings" 
        component={Home}
        options={
            {
                drawerIcon:()=>{
                    return(
                        <View style={{borderRadius:10,backgroundColor:'#fafafa',padding:15}}>
                            <Icon name={'settings'} style={{fontSize:20,color:'gray'}}
                            />
                        </View>
                    )
                },
                drawerLabel:'Settings'
            }
        }
         />
        <Drawer.Screen 
        name="QRcode" 
        component={Home}
        options={
            {
                drawerIcon:()=>{
                    return(
                        <View style={{borderRadius:10,backgroundColor:'#fafafa',padding:15}}>
                            <Icon name={'qr-code-2'} style={{fontSize:20,color:'gray'}}
                            />
                        </View>
                    )
                },
                drawerLabel:'QR code'
            }
        }
         />
      </Drawer.Navigator>
  );
}