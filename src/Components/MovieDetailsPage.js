import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MovieDetails from './MovieDetails';




const MovieDetailsPage = () => {
    const [movieDetails, setMovieDetails] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getMovieDetails();
        window.scrollTo(0, 0)
    }, [])

    const getMovieDetails = () => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=d8935c2f5829f1894c81e37aeabed7dc`)
            .then((responce) => {
                setMovieDetails(responce.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div>
            <MovieDetails movieDetails={movieDetails} />
        </div>
    )
}

export default MovieDetailsPage
