import React from 'react'

const MovieDetails = (props) => {



const data=props.movieDetails;
const {original_title,overview,release_date,runtime,poster_path}=data;


const imageUrl=(poster_path)=>{
    return `https://image.tmdb.org/t/p/w1280/${poster_path}`
}
  return (
    <div>
        <img src={imageUrl(poster_path)} alt="" />
        <p> {original_title}</p>
        <p> {overview}</p>
        <p> {release_date}</p>
        <p> {runtime}</p>

      
    </div>
  )
}

export default MovieDetails
