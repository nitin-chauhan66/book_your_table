import React from 'react';
import Login from "./login";
import { connect } from 'react-redux';
import {login, resetError} from "./actions/loginAction";

class LoginComponent extends React.Component {
    render(){
        return(
            <Login 
            {...this.props}
            />
        )
    }
}

const wrappedComponent = connect(
    ({ login }) => {
      return {
        loggedIn: login.loggedIn,
        pending:login.pending,
        error:login.error,
        errorMsg:login.errorMsg,
      };
    },
    dispatch => {
      return {
          login: loginModel => dispatch(login(loginModel)),
          resetError:() => dispatch(resetError())
      };
    }
  )(LoginComponent);

export default wrappedComponent