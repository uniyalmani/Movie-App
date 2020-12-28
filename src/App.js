import {data} from "./data";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieCard from "./components/MovieCart";
import NavBar from "./components/NavBar";

function App() {
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
            {data.map(movie =>(
              <MovieCard movie = {movie}/>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
