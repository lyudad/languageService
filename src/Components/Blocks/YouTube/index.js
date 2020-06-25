import React from 'react';
import YouTube from 'react-youtube';

const PlayVideoYoutube = ({videoId}) => {

    const onReady = (event) => {
        console.log(`YouTube Player object for videoId: "${this.state.videoId}" has been saved to state.`); // eslint-disable-line
        this.setState({
            player: event.target,
        });
    }

    // onPlay = (event) => {
    //     this.setState({
    //         title: this.state.player.getVideoData().title,
    //     });
    // }

    // onPlayVideo = () => {
    //     this.state.player.playVideo();
    // }
    //
    // onPauseVideo = () => {
    //     this.state.player.pauseVideo();
    // }
    //
    // onChangeVideo = () => {
    //     this.setState({
    //         videoId: this.state.videoId === videoIdA ? videoIdB : videoIdA,
    //     });
    // }

    
        return (
            <div>
                <YouTube videoId={videoId}/>
            </div>
        );
   
}

export default PlayVideoYoutube