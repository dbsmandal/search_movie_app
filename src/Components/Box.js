import React from 'react';
import "./box.css"
const Box = (props) => {
  const IMGPATH = "https://image.tmdb.org/t/p/w1280";
  console.log(props)
  return (
    <>
      <div class="card">
        <img src={IMGPATH + props.image} alt="" />
        <div class="descriptions">
          <h1>{props.title}</h1>
          <h3>overview: {props.overview}</h3>
          <p>Rating: {props.rating}</p>
          <button>
            <i class="fab fa-youtube"></i>
            Play trailer on YouTube
          </button>
        </div>
      </div>
    </>

  )
}

export default Box
