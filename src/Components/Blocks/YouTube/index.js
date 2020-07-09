import React from 'react';
import YouTube from 'react-youtube';

const PlayVideoYoutube = ({videoId}) => {

    const onPause = (event) => {
        this.setState({
            player: event.target,
        });
    };

    const opts = {
        height: '300',
        width: '250',
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <div>
            <YouTube videoId={videoId.url} opts={opts} onReady={this.onPause}/>
        </div>
    );
}

export default PlayVideoYoutube