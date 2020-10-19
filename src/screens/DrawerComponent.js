import React from "react";
import { View,Text, SafeAreaView ,StyleSheet,TouchableOpacity,Image} from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { DrawerItemList } from '@react-navigation/drawer';
import {connect} from "react-redux";
import { logout } from '../bundles/login/actions/loginAction';
class DrawerComponent extends React.Component{
    render(){
        return(
            <SafeAreaView style={styleSheet.container}>
                <View style={styleSheet.headerContainer}>
                        <Image source={{uri:'https://source.unsplash.com/random'}} style={styleSheet.profileImage}/>
                        <TouchableOpacity 
                        style={{height:45,marginTop:15,right:20}}
                        onPress={()=>this.props.navigation.toggleDrawer()}>
                            <Icon name={'close'} style={{fontSize:22}}/>
                        </TouchableOpacity>
                        
                </View> 
                <View style={{padding:16}}>
                    <Text style={{fontSize:20}}>{this.props.loggedInUser.userId}</Text>
                </View>
                <View style={{padding:16}}>
                <DrawerItemList {...this.props} />
                </View>
                <View style={{flex:1,justifyContent:'flex-end',padding:16,alignItems:'center'}}>
                    <TouchableOpacity 
                    style={{
                        width:'100%',
                        padding:16,
                        borderTopColor:'#eeeeee',
                        borderTopWidth:1
                        }}
                    onPress={this.props.logout}
                    >
                    <Text style={{textAlign:'center',fontSize:18}}>Log out</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
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

const wrappedDrawer = connect(store=>{
    return {
        loggedInUser:store.login.loggedInUser,
    }
},dispatch=>{
    return{
        logout:()=>dispatch(logout())
    }
})(DrawerComponent);

export default wrappedDrawer;