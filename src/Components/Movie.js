import React, { useEffect, useState } from "react";
import axios from "axios"
import Result from "./Result";
import '../App.css'


function Movie() {


  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search)
  }
  const API = `https://api.themoviedb.org/3/movie/popular?api_key=d8935c2f5829f1894c81e37aeabed7dc&language=en-US&page=1`;


  const SEARCHAPI = `https://api.themoviedb.org/3/search/movie?api_key=d8935c2f5829f1894c81e37aeabed7dc&language=en-US&query=${search}&page=1&include_adult=false`;

  useEffect(() => {
    if (search === '') {
      const getAllMovies = () => {
        axios.get(API)
          .then((respone) => {
            setMovies(respone.data.results)
            console.log(respone.data.results)
          })
          .catch((error) => {
            console.log(error)
          })
      }
      getAllMovies();
    } else {
      const getsearchMovie = () => {
        setMovies([])
        axios.get(SEARCHAPI)
          .then((responce) => {
            setMovies(responce.data.results)
          })
          .catch((error) => {
            console.log(error)
          })
      }

      getsearchMovie();

    }
  }, [search])
  return (
    <div className="main">
      <h1>Search your favorite movies</h1>
      <div className="input_box">
        <input type="search" value={search} onChange={handleSearch} />
      </div>
      <Result movie={movies} />
    </div>
  );
}

export default Movie;
