import { combineReducers } from 'redux';
import appReducer from '../modules/application/app.reducer';
import authReducer from '../modules/auth/auth.reducer';

const rootReducer = combineReducers({
  appReducer,
  authReducer
});

export default rootReducer;
