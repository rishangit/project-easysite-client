export const SAVE_WEBPAGE_ATTEMPT = 'SAVE_WEBPAGE_ATTEMPT';
export const SAVE_WEBPAGE_SUCCESS = 'SAVE_WEBPAGE_SUCCESS';

export const saveWebPageAttempt = payload=>({type:SAVE_WEBPAGE_ATTEMPT, payload});
export const saveWebPageSuccess = payload =>({type:SAVE_WEBPAGE_SUCCESS, payload});

export const GET_WEBPAGE_ATTEMPT = 'GET_WEBPAGE_ATTEMPT';
export const GET_WEBPAGE_SUCCESS = 'GET_WEBPAGE_SUCCESS';

export const getWebPageAttempt = payload=>({type:GET_WEBPAGE_ATTEMPT, payload});
export const getWebPageSuccess =  payload=>({type:GET_WEBPAGE_SUCCESS, payload});

export const LIST_WEBPAGE_ATTEMPT = 'LIST_WEBPAGE_ATTEMPT';
export const LIST_WEBPAGE_SUCCESS = 'LIST_WEBPAGE_SUCCESS';

export const listWebPageAttempt = payload =>({type:LIST_WEBPAGE_ATTEMPT, payload});
export const listWebPageSuccess = payload =>({type:LIST_WEBPAGE_SUCCESS, payload});

export const REMOVE_WEBPAGE_ATTEMPT = 'REMOVE_WEBPAGE_ATTEMPT';
export const REMOVE_WEBPAGE_SUCCESS = 'REMOVE_WEBPAGE_SUCCESS';

export const removeWebPageAttempt = payload =>({type:REMOVE_WEBPAGE_ATTEMPT, payload});
export const removeWebPageSuccess = payload =>({type:REMOVE_WEBPAGE_SUCCESS, payload});