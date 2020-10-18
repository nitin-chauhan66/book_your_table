import React from "react";
import { 
    View,
    ScrollView,
    Text, TouchableOpacity
 } from "react-native";
import  Icon  from "react-native-vector-icons/FontAwesome5";
class CafeTypes extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items:[
                {iconName:'utensil-spoon',type:'All',isActive:true},
                {iconName:'pizza-slice',type:'Pizza',isActive:false},
                {iconName:'hamburger',type:'Japanese',isActive:false},
                {iconName:'carrot',type:'Vegetarian',isActive:false},
                {iconName:'hamburger',type:'Fast Food',isActive:false},
                {iconName:'hamburger',type:'Fast Food',isActive:false},
                {iconName:'hamburger',type:'Fast Food',isActive:false},
                {iconName:'hamburger',type:'Fast Food',isActive:false},
                {iconName:'hamburger',type:'Fast Food',isActive:false},
                {iconName:'hamburger',type:'Fast Food',isActive:false},
                {iconName:'hamburger',type:'Fast Food',isActive:false},
            ]
        }
    }

    onClickHanlder=(currentkey)=>{
        let items = [...this.state.items];
        items.map((item,key)=>{
            if(key===currentkey){
                item.isActive=true;
            }else{
                item.isActive=false;
            }
        })
        this.setState({
            items
        })
    }
    render(){
        return(
            <View style={{ flexDirection: 'row', width: '100%' }}>
                <ScrollView 
                horizontal={true} 
                showsHorizontalScrollIndicator={false}
                >
                {
                    this.state.items.map((item,key)=>{
                        let  BorderColor = 'white';
                        let textColor = 'gray';
                        if(item.isActive){
                            BorderColor='#e0e0e0';
                            textColor = 'black';
                        }
                        return(
                            <TouchableOpacity 
                            key={key}
                            onPress={()=>this.onClickHanlder(key)}
                            style={{
                                 margin: 5,
                                 alignItems:'center',
                                 borderRadius:16,
                                 borderWidth:1,
                                 borderColor:BorderColor,
                                 padding:4,
                                 backgroundColor:'#fafafa'
                                 }}>
                                <Icon
                                name={item.iconName}
                                style={{ fontSize:30,
                                     margin:10,
                                     padding:10,
                                     color:'blue'
                                    }}
                                />
                                <View style={{marginBottom:15}}>
                                    <Text style={{color:textColor}}>
                                        {item.type}
                                    </Text>
                                   {item.isActive&& <View style={{height:4,width:4,borderRadius:2,backgroundColor:'blue',alignSelf:'center',marginTop:5}}>

                                    </View>}
                                </View>
                            </TouchableOpacity>
                        )
                
                    })
                }
                </ScrollView>
            </View>
        )
    }
}

export default CafeTypes;