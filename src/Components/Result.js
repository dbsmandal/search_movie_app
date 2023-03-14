import React from 'react';
import { Link } from 'react-router-dom';
import Box from "./Box"
import "./box.css"

const Result = (props) => {
  const movieDetails = props.movie.map((item, index) => {
    const {id,title,poster_path,vote_average,overview}=item;
    return (
      <div key={index}>
        <Link to={`/movie/${id}`}>
        <Box  title={title} image={poster_path} rating={vote_average} overview={overview} />
        </Link>
      </div>

    )
  })
  return (
    <div className='result_div'>
      {movieDetails}
    </div>
  )
}

export default Result
