import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import VideoTrailer from './VideoTrailer';




const MovieDetailsPage = () => {
    const [movieDetails, setMovieDetails] = useState([]);
    const [trailer, settrailer] = useState([])
    const { id } = useParams();

    useEffect(() => {
        getMovieDetails();
        window.scrollTo(0, 0)
    }, [])

    const getMovieDetails = () => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=d8935c2f5829f1894c81e37aeabed7dc&append_to_response=videos,`)
            .then((responce) => {
                setMovieDetails(responce.data);
                // console.log("video details", responce.data.videos.results);
                if (responce.data.videos.results) {
                    const trailers = responce.data.videos.results.find((vid) => vid.name === 'Official Trailer');
                    settrailer(trailers ? trailers : responce.data.videos.results[0])
                }

            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div>
            <MovieDetails movieDetails={movieDetails} />
            <VideoTrailer data={trailer} />

        </div>
    )
}

export default MovieDetailsPage
