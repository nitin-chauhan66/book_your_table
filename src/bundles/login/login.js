import React from 'react';
import {View ,Text, SafeAreaView, StyleSheet,Dimensions,TouchableOpacity, ImageBackground, TextInput,ActivityIndicator,Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
const {width,height} = Dimensions.get('window');
export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={
        email:'',
        password:'',
        error:{
            emailError:false,
            emailErrorMsg:'',
            passwordError:false,
            passwordErrorMsg:''
        }
    }
  }

  handleLogin=()=>{
      if(!this.formValidation()){
        const {login} = this.props;
        const {email,password} = this.state;
        this.setState({
            error:{
            emailError:false,
            emailErrorMsg:'',
            passwordError:false,
            passwordErrorMsg:''
            }
        })
        login({email,password});
      }
  }

  formValidation=()=>{
      const {email,password} = this.state;
      const emailRegex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
      let error = {
        emailError:false,
        emailErrorMsg:'',
        passwordError:false,
        passwordErrorMsg:''
    };
      let isError=false;
      if(email==="" || email===" "){
        error = {...error,emailError:true,emailErrorMsg:'Email can not be empty'};
        isError=true;
      }else{
        if(!emailRegex.test(email)){
            error = {...error,emailError:true,emailErrorMsg:'Please enter the valid email'};
            isError=true;
          }
      }
      if(password==="" || password===" "){
          error = {...error,passwordError:true,passwordErrorMsg:'Password can not be empty'};
          isError=true;
      }
      if(isError){
        this.setState({
            error
        })
        return true;
      }
      return false;
  }

  componentDidUpdate(){
      const {error,errorMsg,resetError} = this.props;
      if(error){
        Alert.alert(
            'Error!',
            errorMsg,
            [
              { text: 'OK', onPress: () => resetError() }
            ],
            { cancelable: false }
          );
      }
  }
  render() {
      const {pending} = this.props;
      return(
            <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
                    {pending?(
                    <View style={{flex:1,padding:16,alignItems:'center'}}>
                    <ActivityIndicator size={'large'} color={'blue'}/>
                    </View>
                    ):
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
                        <View style={{flex:4,top:30}}>
                            <View style={styleSheet.loginFormContiner}>
                                <View style={styleSheet.label}>
                                    <Text style={styleSheet.labelText}>
                                        Email
                                    </Text>
                                </View>
                                <TextInput
                                style={styleSheet.inputStyle}
                                onChangeText={(email)=>{
                                    this.setState({email})
                                }}
                                value={this.state.email}
                                maxLength={50}
                                keyboardType={'email-address'}
                                />
                                {this.state.error.emailError&&
                                <View style={styleSheet.label}>
                                    <Text style={{color:'red'}}>
                                        {this.state.error.emailErrorMsg}
                                    </Text>
                                </View>
                                }
                            </View>
                            <View style={styleSheet.loginFormContiner}>
                                <View style={styleSheet.label}>
                                    <Text style={styleSheet.labelText}>
                                        Password
                                    </Text>
                                </View>
                                <TextInput
                                style={styleSheet.inputStyle}
                                secureTextEntry={true}
                                onChangeText={(password)=>this.setState({password})}
                                maxLength={35}
                                value={this.state.password}
                                /> 
                                {this.state.error.passwordError&&
                                <View style={styleSheet.label}>
                                    <Text style={{color:'red'}}>
                                        {this.state.error.passwordErrorMsg}
                                    </Text>
                                </View>
                                }
                            </View>
                        </View>
                        <View style={{flex:1,bottom:60}}>
                                <TouchableOpacity
                                onPress={this.handleLogin}
                                >
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
                                    Don't have a account? <Text style={{color:'#32576b'}} onPress={()=>this.props.navigation.navigate('Signup')}>Register</Text>
                                </Text>
                            </View>
                        </View>
                    </View>}
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
        backgroundColor:'#f5f5f5',
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