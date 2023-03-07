import { combineReducers } from 'redux';
import ambulanceReducer from './ambulanceReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  ambulance: ambulanceReducer,
  auth: authReducer,
  user: userReducer,
});

export default rootReducer;
