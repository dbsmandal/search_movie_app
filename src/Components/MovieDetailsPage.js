import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';




const MovieDetailsPage = () => {
    const [movieDetails, setMovieDetails] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getMovieDetails();
        window.scrollTo(0, 0)
    }, [])

    const getMovieDetails = () => {
        axios.get(`https://api.themoviedb.org/3/discover/movie${id}?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`)
            .then(
                (responce) => {
                    console.log(id, responce)
                    setMovieDetails(responce)
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )
    }
    console.log("test", movieDetails)
    return (
        <div>
            movie detils page {id}
        </div>
    )
}

export default MovieDetailsPage
