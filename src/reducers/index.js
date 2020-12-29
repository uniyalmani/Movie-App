import {ADD_MOVIES} from "../actions/index"
const initialMoviesState = {
    list:[],
    Favourites:[]
}
function movies (state = initialMoviesState, action){
    if  (action.type === ADD_MOVIES){
        return {
            ...state,
            list:action.movies
        }
    }
    return state;
}

export default movies;