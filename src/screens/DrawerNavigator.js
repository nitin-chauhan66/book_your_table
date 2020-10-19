import * as React from 'react';
import { createDrawerNavigator, DrawerItem,DrawerItemList } from '@react-navigation/drawer';
import Home from "./../bundles/HomeComponent";
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import BottomNavigator from "./bottomNavigator";
import { View,Text, SafeAreaView ,StyleSheet,TouchableOpacity,Image} from 'react-native';

const Drawer = createDrawerNavigator();
function myDrawer(props){
    return(
        <SafeAreaView style={styleSheet.container}>
            <View style={styleSheet.headerContainer}>
                    <Image source={{uri:'https://source.unsplash.com/random'}} style={styleSheet.profileImage}/>
                    <TouchableOpacity 
                    style={{height:45,marginTop:15,right:20}}
                    onPress={()=>props.navigation.toggleDrawer()}>
                        <Icon name={'close'} style={{fontSize:22}}/>
                    </TouchableOpacity>
                    
            </View> 
            <View style={{padding:16}}>
                <Text style={{fontSize:20}}>{'nitin chauhan'}</Text>
            </View>
            <View style={{padding:16}}>
            <DrawerItemList {...props} />
            </View>
            <View style={{flex:1,justifyContent:'flex-end',padding:16,alignItems:'center'}}>
                <TouchableOpacity style={{width:'100%',padding:16,borderTopColor:'#eeeeee',borderTopWidth:1}}>
                <Text style={{textAlign:'center',fontSize:18}}>Log out</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styleSheet = StyleSheet.create({
    container:{flex:1,backgroundColor:'white'},
    headerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        height:100,
        padding:16
    },
    profileImage:{
        height:60,
        width:60,
        borderRadius:20
    }
})
export default function App() {
  return (
      <Drawer.Navigator initialRouteName="editProfile"  drawerType={'front'} drawerContent={myDrawer} drawerStyle={{width:'100%'}} >
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
                drawerLabel:'Favorites'
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