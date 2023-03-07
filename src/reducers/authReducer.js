import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../constants/actionTypes';

const initialState = {
  user: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        user: action.payload,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        user: null,
        error: action.payload,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
