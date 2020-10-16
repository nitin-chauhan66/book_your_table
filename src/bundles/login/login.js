import React from 'react';
import {View ,Text, SafeAreaView, StyleSheet,Dimensions,TouchableOpacity, ImageBackground, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
const bgImage = require('./../../res/images/cool-background.png');
const {width,height} = Dimensions.get('window');
export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={
        isVisible:true
    }
  }
  render() {
      return(
          <ImageBackground
          source={bgImage} style={styleSheet.image}
          >
          
        <SafeAreaView style={{flex:1}}>
                <View style={styleSheet.contianer}>
                    <View style={{flex:3}}>
                        <View style={styleSheet.titleStyle}>
                            <Text style={styleSheet.titleText}>
                                Login
                            </Text>
                            <Text style={styleSheet.subTitle}>
                                    Access account
                            </Text>
                        </View>
                        <View style={styleSheet.socialLoginStyle}>
                            
                        <TouchableOpacity
                            style={styleSheet.linearGradient}
                            >
                           
                                <Icon
                                style={styleSheet.buttonText}
                                name={'facebook-f'}
                                />
                           
                           </TouchableOpacity>
                            <TouchableOpacity
                            style={styleSheet.linearGradient}
                            >
                           
                                <Icon
                                style={styleSheet.buttonText}
                                name={'google'}
                                />
                           
                           </TouchableOpacity>
                        </View>
                        <View style={styleSheet.subTextContainer}>
                            <Text style={styleSheet.subText}>
                                or Login with Email
                            </Text>
                        </View>
                    </View>
                    <View style={{flex:4}}>
                        <View style={styleSheet.loginFormContiner}>
                            <View style={styleSheet.label}>
                                <Text style={styleSheet.labelText}>
                                    Email
                                </Text>
                            </View>
                            <TextInput
                            style={styleSheet.inputStyle}
                            />

                           
                        </View>
                        <View style={styleSheet.loginFormContiner}>
                            <View style={styleSheet.label}>
                                <Text style={styleSheet.labelText}>
                                    Password
                                </Text>
                            </View>
                            <TextInput
                            style={styleSheet.inputStyle}
                            secureTextEntry={this.state.isVisible}
                            onFocus={()=>this.setState({
                                color:'white'
                            })}
                            onEndEditing={(password)=>this.setState({
                                password
                            })}
                            />
                            
                        </View>

                    </View>
                    <View style={{flex:1,bottom:60}}>
                            
                            <TouchableOpacity>
                                <LinearGradient
                                colors={['#32576b','#274352']}
                                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                locations={[0.1,1]}
                                style={styleSheet.signInBtn}
                                >
                                
                                    <Text style={styleSheet.signInBtnText}>
                                        Sign In
                                    </Text>
                                
                                </LinearGradient>
                                </TouchableOpacity>
                           <View style={{alignItems:'center',marginTop:20}}>
                               <Text style={styleSheet.subText}>
                                   Don't have a account? <Text style={{color:'#32576b'}}>Register</Text>
                               </Text>
                           </View>

                    </View>
                </View>
        </SafeAreaView>
        </ImageBackground>
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
        borderRadius: 10,
        marginHorizontal:20,
        marginTop:30,
        backgroundColor:'#cad5df'
      },
      buttonText: {
        fontSize: 28,
        textAlign: 'center',
        margin: 16,
        color: '#f5f5f5',
        backgroundColor: 'transparent',
      },
      image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
      subTextContainer:{
        marginTop:40,
        alignItems:'center'
      },
      subText:{
        color:'#9e9e9e'
      },
      loginFormContiner:{
        marginHorizontal:20,
      },
      label:{
          marginVertical:10
      },
      labelText:{fontSize:16},
      inputStyle:{
        backgroundColor:'#eceff1',
        height:60,
        borderRadius:10,
        padding:10,
        fontSize:20,
        color:'#74a4c4'
      },
      signInBtn:{
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 15,
        marginHorizontal:20,
        marginTop:30,
        backgroundColor:'#32576b'
      },
      signInBtnText:{
        fontSize: 18,
        textAlign: 'center',
        padding:20,
        color: 'white',
        backgroundColor: 'transparent',
        fontWeight:'500'
      }
})