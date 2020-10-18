import React from "react";
import {View,Text, SafeAreaView,StyleSheet,Image, TouchableOpacity} from "react-native";
const url = require('./../../res/images/cool-background.png')
export default class Cafes extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const {loggedInUser} = this.props;
        return (
            <SafeAreaView style={styleSheet.container}>
                <View style={styleSheet.headerContainer}>
                    <TouchableOpacity style={{height:45,marginTop:10}}>
                        <View style={styleSheet.menuBar1}>
                        </View>
                        <View style={styleSheet.menuBar2}>
                        </View>
                    </TouchableOpacity>
                    
                    <Image source={url} style={styleSheet.profileImage}/>
                    
                </View>
            </SafeAreaView>
        )
    }
}

const styleSheet = StyleSheet.create({
    container:{flex:1,padding:16,backgroundColor:'white'},
    headerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        height:100
    },
    menuBar1:{
        width:40,
        height:4,
        margin:2,
        borderRadius:10,
        backgroundColor:'black'
    },
    menuBar2:{
        width:20,
        height:4,
        margin:2,
        borderRadius:10,
        backgroundColor:'black',
    },
    profileImage:{
        height:60,
        width:60,
        borderRadius:20
    }
})