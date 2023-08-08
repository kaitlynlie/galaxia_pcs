import React, { useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import { video } from '../src/assets';
import styles from '../styles';
import { TypingText } from '../components';

const Video = () => {
  const vidRef = React.useRef();
  const [playVideo, setplayVideo] = React.useState(false)
  const handleVideo = () => {
    setplayVideo((prevPlayVideo) => !prevPlayVideo)
    if(playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  }
  return (
    <div className={`h-screen relative mt-20 max-[600px]:px-0 px-80 py-20`}>
      <video
        src={video}
        ref={vidRef}
        className='object-cover w-[100%] h-[100%]'
        type='video/mp4'
        loop
        controls = {false}
        muted
      />
      <div className='absolute flex justify-center items-center inset-0'>
        <div 
        className='flex justify-center items-center pointer rounded-full border border-white w-[100px] h-[100px]'
        onClick={handleVideo}>
          {playVideo 
          ? ( <BsPauseFill color='#fff' fontSize={50}/>
          ) : <BsFillPlayFill color='#fff' fontSize={50}/> }
        </div>
      </div>
    </div>
  )
};

export default Video;
