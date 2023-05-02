const initialState = {
    songs: [],
    loading: false
  };
  
  const songsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_SONGS_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_SONGS_SUCCESS':
        return { ...state, loading: false, songs: action.payload };
      default:
        return state;
    }
  };
  
  export default songsReducer;