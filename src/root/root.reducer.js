import { combineReducers } from 'redux';
import appReducer from '../modules/application/app.reducer';
import authReducer from '../modules/auth/auth.reducer';

import webPagesReducer from '../modules/admin/webpages/webpages.reducer';

const rootReducer = combineReducers({
  appReducer,
  authReducer,
  webPagesReducer,
});

export default rootReducer;
