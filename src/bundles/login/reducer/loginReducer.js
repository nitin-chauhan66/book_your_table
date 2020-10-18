import {ACTION_CONSTANTS, LOGIN} from "./../util/Contants";
import {CONSTANT_TYPES} from "./../../../core/util/actionConstants"
export default function reducer(
  state = {
    loggedIn: false,
    LoggedInUser: {},
    pending:false,
    error:false,
    errorMsg:''
  },action) {
  switch (action.type) {
    case LOGIN(CONSTANT_TYPES.PENDING): {
      return { ...state, pending: true };
    }
    case LOGIN(CONSTANT_TYPES.FULFILLED):{
        if(action.payload.data.status){
            return {
                ...state,pending:false,error:false,errorMsg:'',
                loggedIn:true,
                LoggedInUser:{
                    userId:action.payload.data.data.email
                }
            }
        }else{
            return {
                ...state,
                pending:false,
                error:true,
                loggedIn:false,
                errorMsg:action.payload.data.message
            }
        }
        
    }
    case LOGIN(CONSTANT_TYPES.REJECTED):{
        return {
            ...state,pending:false,error:true,errorMsg:'Incorrect email or password'
        }
    }
    default:return state;
}
}
