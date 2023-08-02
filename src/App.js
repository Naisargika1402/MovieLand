import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

//92e49d7c

const API_URL = 'http://www.omdbapi.com?apikey=92e49d7c';

const App = () =>{
  const[movies,setmovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState ('');

  const searchMovie = async (title) => {
    const response  = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setmovies(data.Search);
  }

  /*useEffect(()=>{
    console.log('bye');
    searchMovie(searchTerm);
  },[searchTerm]);*/

  useEffect(()=>{
    console.log('bye');
    searchMovie('batman');
  },[])

  console.log('hi');
  console.log(movies);

  return(
    <div className='app'>
      <h1>MOVIELAND</h1>

      <div className='search'>
        <input placeholder='search for movies'
                value={searchTerm}
                onChange = {(e) =>setsearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt='search'
          onClick={()=>searchMovie(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  )
}

export default App