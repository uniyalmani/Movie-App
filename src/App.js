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
    store.dispatch( addMovies(data))
    console.log(this.props.store.getState());
  }
  
  render(){
    const {list} = this.props.store.getState()

  return (
    <div className="App">
      <NavBar />  
      <div className = "main">
        <div className = "tabs">
          <ul class="nav nav-tabs">
            <li class="nav-item m-2">
              <a class="nav-link active" href="#">Movies</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Favourites</a>
            </li>
          </ul>
        </div>
        <div className = "list">
            {list.map((movie, index)=>(
              <MovieCard movie = {movie} key =  {'movies-${index}'}/>
            ))}
        </div>
      </div>
    </div>
  );
 }
}

export default App;
