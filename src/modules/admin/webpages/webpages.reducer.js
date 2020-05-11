import {
  SAVE_WEBPAGE_SUCCESS,
  LIST_WEBPAGE_SUCCESS,
  GET_WEBPAGE_SUCCESS,
  REMOVE_WEBPAGE_SUCCESS,
} from './webpages.action';
import { Res } from '../../../common/consts';

const initState = {
  webPageList: [],
  current: {},
};

const webPagesReducer = (state = initState, action) => {
  let { type, payload } = action;
  switch (type) {
    case SAVE_WEBPAGE_SUCCESS:
      {
        const { typ, obj } = payload;
        if (typ === Res.SUCCESS_OBJ) {
          return {
            ...state,
            current: obj,
          };
        }
      }
      break;
    case GET_WEBPAGE_SUCCESS:
      {
        const { typ, obj } = payload;
        if (typ === Res.SUCCESS_OBJ) {
          return {
            ...state,
            current: obj,
          };
        }
      }
      break;
    case LIST_WEBPAGE_SUCCESS:
      {
        const { typ, lst } = payload;
        if (typ === Res.SUCCESS_LIST) {
          return {
            ...state,
            webPageList: lst,
          };
        }
      }
      break;
    case REMOVE_WEBPAGE_SUCCESS:
      {
        const { typ, obj } = payload;
        if (typ === Res.SUCCESS_OBJ) {
          return {
            ...state,
            webPageList: state.webPageList.filter(
              webpage => webpage._id !== obj._id,
            ),
          };
        }
      }
      break;
    default:
      return { ...state };
  }
};

export default webPagesReducer;
