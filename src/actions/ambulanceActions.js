import { SET_AMBULANCE_LOCATION } from '../constants/actionTypes';

export const setAmbulanceLocation = (location) => ({
  type: SET_AMBULANCE_LOCATION,
  payload: location,
});
