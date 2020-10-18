import { combineReducers } from "redux";
import loginReducer from "./../bundles/login/reducer/loginReducer";
let combinedReducer = combineReducers({
  login:loginReducer
});

export default combinedReducer;
