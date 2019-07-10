import * as actionTypes from "../actionTypes";

/**
 * Sets the period of day to given `targetTime`
 * @param {String} targetTime name a period of day that wants to be set in store
 */
export const changeTime = (targetTime) => {
  return {
    type: actionTypes.CHANGE_TIME,
    payload: targetTime
  }
}