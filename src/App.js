import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Movie from "./Components/Movie";
import MovieDetailsPage from "./Components/MovieDetailsPage";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Movie/>}/>
      <Route path="movie/:id" element={<MovieDetailsPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
