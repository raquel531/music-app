const initialState = {
  users: [],
  currentUser: [],
  isLoggedIn: false
}

const authReducer = (state = initialState, action) => {
  switch(action.type) {

    case "REGISTER":
      return {
        ...state,
        users: [...state.users, action.payload]
      }
    case "LOGIN":
      
      return {
        ...state,
        currentUser: action.payload,
        isLoggedIn: true
        
      }

      case "LOGOUT":
        return {
          ...state,
          currentUser: '',
          isLoggedIn: false
        }
      
      
      default:
        return state;
      }
}

export default authReducer