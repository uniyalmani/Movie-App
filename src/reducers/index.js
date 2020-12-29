import {ADD_MOVIES, ADD_FAV} from "../actions/index"
const initialMoviesState = {
    list:[],
    Favourites:[]
}
function movies (state = initialMoviesState, action){
    
    switch (action.type) {
        case ADD_MOVIES:
            return {
                    ...state,
                    list:action.movies
                 }
                 break;

        case ADD_FAV:
            return {
                      ...state,
                      Favourites:[action.movie,...state.Favourites]
                 }
                 break;

    
        default:
           return state;
    }
}

export default movies;