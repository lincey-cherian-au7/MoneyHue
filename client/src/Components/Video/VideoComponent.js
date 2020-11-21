import React from 'react'
import ReactPlayer from 'react-player/youtube';

const VideoComponent=() =>{
    return (
        <ReactPlayer className='react-player' url={['https://www.youtube.com/watch?v=FuAOdgIiXyg']} width='100%'
        height='109%' playing={false} muted={true} loop={true}/>    
    )
}
export default VideoComponent