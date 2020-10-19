import React from "react";
import { View,TouchableOpacity,Image,Text } from "react-native";
import  Icon  from "react-native-vector-icons/FontAwesome5";
import  MaterialIcons  from "react-native-vector-icons/MaterialIcons";
class Card extends React.Component{
    render(){
        const 
        {
            imageUrl,
            title,
            totalReviews,
            rating,
            price,
            location,
            isBookmarked
        } = this.props;
        let bookMarkedColor = 'black';
        if(isBookmarked){
            bookMarkedColor = 'blue';
        }
        return(
            <TouchableOpacity 
            style={{
                backgroundColor:'#fafafa',
                height:250,
                padding:16,
                borderRadius:20,
                marginVertical:5
            }}
            >
                <View>
              <Image source={{uri:imageUrl}} style={{height:150,width:'100%',borderRadius:20}}/>
              <MaterialIcons name={'bookmark'}  style={{position:'absolute',right:16,top:12,fontSize:26,color:bookMarkedColor}}/>
              </View>
                <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',paddingVertical:8}}>
                    <Text style={{flex:1,fontSize:18,overflow:'hidden'}}>{title}</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text>
                            ({totalReviews}){' '+rating+'  '}
                        </Text>
                        <Icon name={'star'}/>
                    </View>
                </View>   
                <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                            <Icon name={'map-marker-alt'} style={{fontSize:16}}/>
                            <Text style={{flex:1,marginLeft:8,overflow:'hidden',fontSize:16}}>
                            {location}
                            </Text>
                        </View>
                        <Text>{price}$</Text>
                </View>   
            </TouchableOpacity>
        )
    }
}

export default Card;