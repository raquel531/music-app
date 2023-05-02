import { SET_INPUT} from '../actionTypes.js';


const initialState = {
  input: '',
 
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INPUT:
      return {
        ...state,
        input: action.payload,
      }
    default:
      return state;
  }
}

export default filterReducer;
