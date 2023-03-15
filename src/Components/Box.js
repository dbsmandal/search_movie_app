import React from 'react';
import "./box.css"
const Box = (props) => {
  const IMGPATH = "https://image.tmdb.org/t/p/w1280";
  return (
    <>
      <div className="card">
        <img src={IMGPATH + props.image} alt="" />
        <div className="descriptions">
          <h1>{props.title}</h1>
          <h3>Rating: {props.rating}</h3>
          <h3>overview: {props.overview}</h3>
          <button>
            <i className="fab fa-youtube"></i>
            Play trailer on YouTube
          </button>
        </div>
      </div>
    </>

  )
}

export default Box
