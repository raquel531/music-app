import {FETCH_SONGS_REQUEST, FETCH_SONGS_SUCCESS} from '../actionTypes.js'
import axios from 'axios';

export const fetchSongsRequest = () => ({
  type: FETCH_SONGS_REQUEST
});

export const fetchSongsSuccess = (songs) => ({
    type: FETCH_SONGS_SUCCESS,
    payload: songs
  });
  
  
  export const fetchSongs = (page = 1, limit = 10) => {
    return async (dispatch) => {
      dispatch(fetchSongsRequest());
      const response = await axios.get('http://localhost:3001/songs');
      const songs = response.data;
      dispatch(fetchSongsSuccess(songs));
    };
  };