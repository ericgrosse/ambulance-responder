import { GET_USERS_SUCCESS, GET_USERS_FAILURE } from '../constants/actionTypes';
import { getAllUsers } from '../api/userApi';

export const getUsersSuccess = (users) => ({
  type: GET_USERS_SUCCESS,
  payload: users,
});

export const getUsersFailure = (error) => ({
  type: GET_USERS_FAILURE,
  payload: error,
});

export const getUsers = () => async (dispatch) => {
  try {
    const response = await getAllUsers();
    const users = response.data;
    dispatch(getUsersSuccess(users));
  } catch (error) {
    dispatch(getUsersFailure(error));
  }
};
