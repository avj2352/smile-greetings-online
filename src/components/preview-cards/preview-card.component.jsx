import React from 'react';
import video from './../../assets/videos/intro-video.mpg';

const PreviewCard = (props,context)=>{
    return (
        <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/4GNI2nQdDYY" gesture="media" allow="encrypted-media"></iframe>
        </div>
    );
}

export default PreviewCard;