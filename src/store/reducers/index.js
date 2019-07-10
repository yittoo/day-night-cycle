import {createStore, combineReducers} from "redux";

import timeReducer from "./timeReducer";

const reducer = combineReducers({
  time: timeReducer
})

export default createStore(reducer);