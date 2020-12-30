export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';

export function addMovies(movies){
   
    return{
            type: ADD_MOVIES,
            movies: movies
          
    }
}
export function addFav(movie){
    console.log("inside action",ADD_FAV)
    return{
            type: ADD_FAV,
            movie
          
    }
}
export function removeFav(movie){
    console.log("inside action","remove")
    return{
            type: REMOVE_FAV,
            movie
          
    }
}
export function setShowFavourites(val){
    return{
            type: SET_SHOW_FAVOURITES,
            val
          
    }
}




