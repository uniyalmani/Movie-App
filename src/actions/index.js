export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAV = 'ADD_FAV';

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


