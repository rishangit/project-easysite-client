import { combineEpics } from 'redux-observable';
import authEpic from '../modules/auth/auth.epic';

import webPagesEpic from '../modules/admin/webpages/webpages.epic'

const rootEpic = combineEpics(
  authEpic,
  webPagesEpic
);

export default rootEpic;
