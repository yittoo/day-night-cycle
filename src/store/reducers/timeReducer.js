import * as actionTypes from "../actionTypes";

const initialState = "dawn";

/**
 * Sets name of currentTime of day.
 */
export default (state = initialState, action) => {
  switch(action.type){
    case actionTypes.CHANGE_TIME:
      return action.payload;
    default:
      return state;
  }
}