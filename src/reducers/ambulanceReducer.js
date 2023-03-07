import { ADD_AMBULANCE, REMOVE_AMBULANCE } from '../constants/actionTypes';

const initialState = [];

const ambulanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_AMBULANCE:
      return [...state, action.payload];
    case REMOVE_AMBULANCE:
      return state.filter((ambulance) => ambulance.id !== action.payload);
    default:
      return state;
  }
};

export default ambulanceReducer;
