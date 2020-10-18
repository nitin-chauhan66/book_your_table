import {ACTION_CONSTANTS} from "./../util/Contants";
import axios from "./../../../core/axiosUser";
export const login =(loginModel)=> {
    const {password,email} =loginModel;
    return {
        type: ACTION_CONSTANTS.LOGIN,
        payload: axios.post('/login_user',{email,password:parseInt(password)})
      };
    } 