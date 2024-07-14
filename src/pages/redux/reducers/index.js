import { combineReducers } from "redux";
import { counterReducer } from "../actions/counter";
import {
  initReducer,
  generationReducer,
  localAddressReducer,
} from "../actions/initValueActions";
import userReducer from "../actions/userLoginSession";

const rootReducer = combineReducers({
  counter: counterReducer,
  init: initReducer,
  generation: generationReducer,
  localAddress: localAddressReducer,
  user: userReducer,
});

export default rootReducer;
