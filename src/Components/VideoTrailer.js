import React from 'react';
import YouTube from 'react-youtube';

const VideoTrailer = (props) => {
    const { key} = props.data;
    return (
        <div>
            <YouTube
                videoId={key}
                
                opts={
                    {
                        width: '680px',
                        height: '300px',
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
        </div>
    )
}

export default VideoTrailer
