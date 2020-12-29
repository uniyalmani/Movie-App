import React from 'react';
import {data} from "./data";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieCard from "./components/MovieCart";
import NavBar from "./components/NavBar";
import {addMovies} from "./actions/index";

class App extends React.Component {
  componentDidMount(){
    //make api call
    //dispatch action

    const {store} = this.props;
    store.subscribe(()=>{
      this.forceUpdate();
    })
    store.dispatch( addMovies(data));
  }
  isMovieFav = (movie)=>{
        const {Favourites} = this.props.store.getState();
        const index =   Favourites.indexOf(movie);
        if (index !== -1){
            return true;
        }
        return false;
  }
  render(){
    const {list} = this.props.store.getState()

  return (
    <div className="App">
      <NavBar />  
      <div className = "main">
        <div className = "tabs">
         <div className = "tab">Movies</div>
         <div className = "tab">Favourites</div>
        </div>
        <div className = "list">
            {list.map((movie, index)=>(
              <MovieCard 
              movie = {movie}
               key =  {'movies-${index}'} 
              dispatch = {this.props.store.dispatch}
              isMovieFav = {this.isMovieFav(movie)}/>
            ))}
        </div>
      </div>
    </div>
  );
 }
}

export default App;
