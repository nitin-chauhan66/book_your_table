import React from "react";
import {  FlatList } from "react-native";
import Card from "../../core/Card";
class CafesCards extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cafeList:[
                {id:1,title:'Alaska kviy',location:'Kiev, 20 Sichovyh Stritsiv Street',price:500,totalReview:12,rating:3.2,isBookMarked:true,imageUrl:'https://images.unsplash.com/photo-1601749925546-6de863a0f47b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'},
                {id:2,title:'Alaska kviy',location:'Kiev, 20 Sichovyh Stritsiv Street',price:500,totalReview:12,rating:3.2,isBookMarked:false,imageUrl:'https://source.unsplash.com/random'},
                {id:3,title:'Alaska kviy',location:'Kiev, 20 Sichovyh Stritsiv Street',price:500,totalReview:12,rating:3.2,isBookMarked:false,imageUrl:'https://source.unsplash.com/random'},
                {id:4,title:'Alaska kviy',location:'Kiev, 20 Sichovyh Stritsiv Street',price:500,totalReview:12,rating:3.2,isBookMarked:false,imageUrl:'https://source.unsplash.com/random'},
                {id:5,title:'Alaska kviy',location:'Kiev, 20 Sichovyh Stritsiv Street',price:500,totalReview:12,rating:3.2,isBookMarked:false,imageUrl:'https://source.unsplash.com/random'},
            ]
        }
    }
    render(){
       const cardItem = ({item})=>{
            const {imageUrl,title,totalReview,rating,price,location,isBookMarked} = item;
        return<Card
        imageUrl={imageUrl}
        title={title}
        totalReviews={totalReview}
        rating={rating}
        price={price}
        location={location}
        isBookmarked={isBookMarked}
    />}
        return(
            <FlatList
            data={this.state.cafeList}
            renderItem={cardItem}
                keyExtractor={item => item.id}
            />
        )
    }
}

export default CafesCards;