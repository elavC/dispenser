import React from 'react';
import ReactPlayer from 'react-player';

import styled from 'styled-components';

import VideoDispenser from '../../assets/videoDispenser.mp4';

export const Wrapper = styled.div `
    width: 50%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 550px) {
        width: 95%;
        height: 40%;
    }

    @media (max-width: 800px) {
        width: 95%;
        height: 35%;
    }
`;

const Video = () => {
    return (
        <Wrapper>
            <ReactPlayer 
                url={VideoDispenser}
                playing='true'
                width="100%"
                height="100%"
                controls 
            />
        </Wrapper>
            
    )
};

export default Video;