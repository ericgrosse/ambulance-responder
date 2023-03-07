import { GET_USERS_SUCCESS, GET_USERS_FAILURE } from '../constants/actionTypes';

const initialState = {
  users: [],
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        users: action.payload,
        error: null,
      };
    case GET_USERS_FAILURE:
      return {
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
