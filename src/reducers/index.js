import {ADD_MOVIES, ADD_FAV, REMOVE_FAV,SET_SHOW_FAVOURITES} from "../actions/index"
const initialMoviesState = {
    list:[],
    Favourites:[],
    showFavourites:false
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
        case REMOVE_FAV:
            const index = state.Favourites.indexOf(action.movie);
            state.Favourites.splice(index, 1);
            console.log(state.Favourites);
            return {
                     ...state,
                    Favourites:state.Favourites
                    }
                break;

        case SET_SHOW_FAVOURITES:
            return{
                ...state,
                showFavourites:action.val
            }
        default:
           return state;
    }
}

export default movies;