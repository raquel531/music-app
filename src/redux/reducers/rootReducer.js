import {combineReducers} from 'redux';
import songs from './songs'
import shoppingCart from './shoppingCart'
import search from './search'
import authentication from './authentication';


const rootReducer = combineReducers({
    songs,
    shoppingCart,
    search,
    authentication

})

export default rootReducer