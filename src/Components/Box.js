import React from 'react';
import "./box.css"
const Box = (props) => {
  const IMGPATH = "https://image.tmdb.org/t/p/w1280";

  return (
    <>
        <div className='movie_box'>
          <img src={IMGPATH + props.image} alt="movie-poster" className='posters' />
          <div className='movie_data'>
            <span className='title'>{props.title}</span>
            <span className='rating'>{props.rating}</span>
          </div>
        </div>
    </>

  )
}

export default Box
