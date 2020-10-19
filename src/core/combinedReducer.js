import AsyncStorage from '@react-native-community/async-storage';
import { combineReducers } from "redux";
import loginReducer from "./../bundles/login/reducer/loginReducer";
import { persistReducer } from 'redux-persist';
const loginPersistConfig = {
    key: "login",
    storage: AsyncStorage
  };

const persistedReducer = persistReducer(loginPersistConfig, loginReducer)
let combinedReducer = combineReducers({
  login:persistedReducer
});

export default combinedReducer;
