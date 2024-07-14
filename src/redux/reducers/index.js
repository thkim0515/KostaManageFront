import { combineReducers } from "redux";
import { localAddressReducer } from "../actions/initValueActions";
import userReducer from "../actions/userLoginSession";

const rootReducer = combineReducers({
  localAddress: localAddressReducer,
  user: userReducer,
});

export default rootReducer;
