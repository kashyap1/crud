import { GET_ERRORS } from "../actions/types";
import produce from "immer";
const initialState = {};

const errorReducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case GET_ERRORS:
        draft = action.payload;
        break;
      default:
        return state;
    }
  });
};

export default errorReducer;
