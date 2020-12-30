import React from 'react';
import {data} from "./data";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieCard from "./components/MovieCart";
import NavBar from "./components/NavBar";
import {addMovies, setShowFavourites} from "./actions/index";

class App extends React.Component {
  componentDidMount(){
    //make api call
    //dispatch action

    const {store} = this.props;
    console.log(store.getState());
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
  onChangeTab = (val)=>{
    this.props.store.dispatch(setShowFavourites(val))
  }

  render(){
    const {list, Favourites, showFavourites} = this.props.store.getState()
    const displayMovies = showFavourites?Favourites:list;
  return (
    <div className="App">
      <NavBar />  
      <div className = "main">
        <div className = "tabs">
         <div className = "tab " onClick = {() => this.onChangeTab(false)}>Movies</div>
         <div className = "tab" onClick = {() => this.onChangeTab(true)}>Favourites</div>
        </div>
        <div className = "list">
            {displayMovies.map((movie, index)=>(
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
