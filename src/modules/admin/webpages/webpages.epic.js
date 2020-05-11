import { ofType, combineEpics } from 'redux-observable';
import {
  SAVE_WEBPAGE_ATTEMPT,
  saveWebPageSuccess,
  GET_WEBPAGE_ATTEMPT,
  getWebPageSuccess,
  LIST_WEBPAGE_ATTEMPT,
  listWebPageSuccess,
  REMOVE_WEBPAGE_ATTEMPT,
  removeWebPageSuccess,
} from './webpages.action';

import { switchMap, map } from 'rxjs/operators';
import { httpPost } from '../../../common/httpCall';

const saveWebPageEpic = (action$, state$) => {
  return action$.pipe(
    ofType(SAVE_WEBPAGE_ATTEMPT),
    switchMap(({ payload }) =>
      httpPost({
        call: 'save_webpage',
        data: payload,
      }).pipe(map(result => saveWebPageSuccess(result.response))),
    ),
  );
};

const getWebPageEpic = (action$, state$) => {
  return action$.pipe(
    ofType(GET_WEBPAGE_ATTEMPT),
    switchMap(({ payload }) =>
      httpPost({
        call: 'get_webpage',
        data: payload,
      }).pipe(map(result => getWebPageSuccess(result.response))),
    ),
  );
};

const listWebPageEpic = (action$, state$) => {
  return action$.pipe(
    ofType(LIST_WEBPAGE_ATTEMPT),
    switchMap(({ payload }) =>
      httpPost({
        call: 'list_webpage',
        data: payload,
      }).pipe(map(result => listWebPageSuccess(result.response))),
    ),
  );
};

const removeWebPageEpic = (action$, state$) => {
  return action$.pipe(
    ofType(REMOVE_WEBPAGE_ATTEMPT),
    switchMap(({ payload }) =>
      httpPost({
        call: 'remove_queue',
        data: payload,
      }).pipe(map(result => removeWebPageSuccess(result.response))),
    ),
  );
};

const webPagesEpic = combineEpics(
  saveWebPageEpic,
  getWebPageEpic,
  listWebPageEpic,
  removeWebPageEpic,
);

export default webPagesEpic;
