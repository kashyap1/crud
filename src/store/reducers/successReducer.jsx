import { ADD_DATA_SUCCESS } from "../actions/types";

const initState = {
  success: []
};

const successReducer = (state = initState, action) => {
 
    switch (action.type) {
      case ADD_DATA_SUCCESS:
          return {
            ...state,
            success: action.payload
          };
      default:
        return state;
    }
 
};

export default successReducer;
