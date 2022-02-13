import { combineReducers } from "redux";
import userReducer from "./userReducer";
import errorReducer from "./errorReducer";
import successReducer from "./successReducer";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  user: userReducer,
  form: formReducer,
  errors: errorReducer,
  success: successReducer
});

export default rootReducer;
