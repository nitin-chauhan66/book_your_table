import React from "react";
import {View,Text, SafeAreaView,StyleSheet,Image, TouchableOpacity, TextInput} from "react-native";
import Icon  from "react-native-vector-icons/MaterialIcons";
import CafeTypes from "./CafeTypes";
const url = require('./../../res/images/cool-background.png')
export default class Cafes extends React.Component {
    constructor(props){
        super(props);
        this.state={
            searchText:'',
            isSearchIconHidden:false,
            leftPadding:50
        }
    }
    render(){
        const {loggedInUser} = this.props;
        const {userId} = loggedInUser;
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
                <View style={styleSheet.searchContainer}>
                        <View style={{}}>
                            <Text style={styleSheet.HeaderText}>
                                Hello, 
                                <Text style={{fontWeight:'400'}}>
                                {' '+userId}
                                 </Text>
                            </Text>
                            <Text style={styleSheet.subText}>
                                Let's reserve a table for you
                            </Text>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <TextInput style={{...styleSheet.searchInput,paddingLeft:this.state.leftPadding}}
                                onFocus={()=>this.setState({
                                    isSearchIconHidden:true,
                                    leftPadding:10
                                })}
                                onBlur={()=>{
                                    if(this.state.searchText==='' || this.state.searchText===' '){
                                        this.setState({
                                            isSearchIconHidden:false,
                                            leftPadding:50})}
                                    }}
                                onChangeText={(value)=>this.setState({searchText:value})}    
                                placeholder={'Search cafes'}
                                keyboardType={'web-search'}
                                maxLength={100}/>
                            {!this.state.isSearchIconHidden&&<Icon name={'search'} style={{position:"absolute",color:'gray',left:10}} size={30}/>}
                        </View>
                </View>
                <View style={styleSheet.cafeType}>
                    <CafeTypes/>
                </View>
                <View style={styleSheet.cafes}>
                    {/* cafes */}
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
    },
    searchContainer:{
        padding:16,
    },
    HeaderText:{
        fontSize:30
    },
    subText:{
        color:'#424242',
        marginTop:8
    },
    searchInput:{
        backgroundColor:'#fafafa',
        height:60,
        borderRadius:10,
        marginVertical:20,
        padding:10,
        fontSize:18,
        flex:1
    },
    cafeType:{
        paddingHorizontal:16
    }
})