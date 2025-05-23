// Action Type
export const FETCH_TOKEN_LIST_REQUEST = "FETCH_TOKEN_LIST_REQUEST";
export const FETCH_TOKEN_LIST_SUCCESS = "FETCH_TOKEN_LIST_SUCCESS";
export const FETCH_TOKEN_LIST_FAIL = "FETCH_TOKEN_LIST_FAIL";
export const SELECT_TOKEN = "SELECT_TOKEN";

// Action Creators
export const fetchTokenListRequest = () => ({
  type: FETCH_TOKEN_LIST_REQUEST,
});

export const fetchTokenListSuccess = (data) => ({
  type: FETCH_TOKEN_LIST_SUCCESS,
  payload: data,
});

export const fetchTokenListFail = (error) => ({
  type: FETCH_TOKEN_LIST_FAIL,
  payload: error,
});

export const selectToken = (tokenData) => ({
  type: SELECT_TOKEN,
  payload: tokenData,
});
