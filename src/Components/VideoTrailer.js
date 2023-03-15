import React from 'react';
import YouTube from 'react-youtube';
import './VideoTrailer.css'

const VideoTrailer = (props) => {
    const data = props.movieDetails;
    const { original_title, overview, release_date,homepage, status, budget, revenue, } = data;
    // const imageUrl = (poster_path) => {
    //     return `https://image.tmdb.org/t/h4/w1280/${poster_path}`
    // }
    const { key } = props.data;
    return (
        <>
            <div className="movie_details">
                <div className='movie_trailer' >
                    <YouTube 
                        videoId={key}
                        
                        opts={

                            {
                                width: '100%',
                                height: '400px',
                                playerVars: {
                                    autoplay: 1,
                                    controls: 0,
                                    cc_load_policy: 0,
                                    fs: 0,
                                    iv_load_policy: 0,
                                    modestbranding: 0,
                                    rel: 0,
                                    showinfo: 0,
                                },
                            }
                        }
                    />

                    {/* <button>Play Trailer</button>
                    <button>Stop Trailer</button> */}

                </div>

                <div className="movie_content">
                    {/* <img src={imageUrl(poster_path)} alt="" /> */}
                    <h1> {original_title}</h1>
                    <h3> {overview}</h3>
                    <a href={homepage} target='_blank' rel="noreferrer">Go to homepage </a>
                    <div className="smal">
                        <h4>Release Date : {release_date}</h4>
                        <h4>Status : {status}</h4>
                        <h4>Budget : {budget}</h4>
                        <h4>Revenue : {revenue}</h4>
                    </div>
                </div>
            </div>

        </>
    )
}

export default VideoTrailer
