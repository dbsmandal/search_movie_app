import React from 'react';
import Box from "./Box"
import "./box.css"

const Result = (props) => {
  const movieDetails = props.movie.map((item, index) => {
    return <Box key={index} title={item.title} image={item.poster_path} rating={item.vote_average} />
  })
  return (
    <div className='result_div'>
      {movieDetails}
    </div>
  )
}

export default Result
