import React, { useEffect, useState } from "react";
import axios from "axios"
import Result from "./Components/Result";
import "./App.css"

const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }
  useEffect(() => {
      setMovie([]);
      if (search === "") {
        const getAllMovies = () => {
          axios.get(APIURL)
            .then((responce) => {
                setMovie(responce.data.results)
              }
            )
            .catch((error) => {
                console.log(error)
              }
            )
        }
        getAllMovies()
      } else {
        const getsearchMovie = () => {
          axios.get(SEARCHAPI + search)
            .then((responce) => {
                setMovie(responce.data.results)
              }
            )
            .catch((error) => {
                console.log(error)
              }
            )
        }
        getsearchMovie();
      }
    },[search])

  return (
    <div className="main">
      <input type="search" value={search} onChange={handleSearch} />
      <Result movie={movie} />
    </div>
  );
}

export default App;
