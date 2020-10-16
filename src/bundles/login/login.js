import React from 'react';
import {View ,Text, SafeAreaView, StyleSheet,Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
const {width,height} = Dimensions.get('window');
export default class Login extends React.Component {
  

  render() {
      return(
        <SafeAreaView style={{flex:1}}>
                <View style={styleSheet.contianer}>
                    <View style={{flex:1}}>
                        <View style={styleSheet.titleStyle}>
                            <Text style={styleSheet.titleText}>
                                Login
                            </Text>
                            <Text style={styleSheet.subTitle}>
                                    Access account
                            </Text>
                        </View>
                        <View style={styleSheet.socialLoginStyle}>
                            
                            <LinearGradient colors={['skyblue', 'white']} 
                            style={styleSheet.linearGradient}
                            >
                            <Text style={styleSheet.buttonText}>
                                F
                            </Text>
                            </LinearGradient>
                            
                            <LinearGradient colors={['skyblue', 'white']} 
                            style={styleSheet.linearGradient}
                            >
                            <Text style={styleSheet.buttonText}>
                                G
                            </Text>
                            </LinearGradient>
                        </View>
                    </View>
                </View>
        </SafeAreaView>
      )
  }
}

const styleSheet = StyleSheet.create({
    contianer:{padding:16,flex:1},
    titleStyle:{
        marginTop:height*.01,
        alignItems:'center'
    },
    titleText:{fontSize:28,fontWeight:'bold'},
    subTitle:{color:'#9e9e9e',fontSize:20,padding:5,paddingTop:16},
    socialLoginStyle:{
        flexDirection:'row',
        marginTop:26,
        justifyContent:'center'
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 10
      },
      buttonText: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
      },
})