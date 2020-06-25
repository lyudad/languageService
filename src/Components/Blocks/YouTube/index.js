import React from 'react';
import YouTube from 'react-youtube';

const PlayVideoYoutube = ({videoId}) => {

    const onPlay = (event) => {
        this.setState({
            player: event.target,
        });
    };
    
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    
    return (
        <div>
            <YouTube videoId={videoId} opts={opts} onReady={this.onPlay}/>
        </div>
    );
}

export default PlayVideoYoutube