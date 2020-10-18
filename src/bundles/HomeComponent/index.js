import React from "react";
import { connect } from "react-redux";
import HomeComponent from "./homeComponent"
class HomeComponentContainer extends React.Component{
    render(){
        return (
            <HomeComponent
            {...this.props}
            />
        )
    }
    
}

const wrappedComponent = connect(store=>{
    return{
        loggedInUser:store.login.loggedInUser
    }
},dispatch=>{return{}})(HomeComponentContainer);

export default wrappedComponent;