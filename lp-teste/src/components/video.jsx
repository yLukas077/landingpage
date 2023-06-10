import React from 'react';
import { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import videoFile from '../assets/videoplayer.mp4';
import { FaPlay } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa';

const Video = () => {
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
    }

    const handlePause = () => {
      if (playerRef.current && playerRef.current.getInternalPlayer) {
        const internalPlayer = playerRef.current.getInternalPlayer();
        if (internalPlayer && typeof internalPlayer.pause === 'function') {
          internalPlayer.pause();
          setIsPlaying(false);
        }
      }


  };

  return (
    <div className="w-[300px] h-[400px] mx-10 mt-10 opacity-70 relative">
          <ReactPlayer
        ref={playerRef}
        url={videoFile}
        playing={isPlaying}
        width="100%"
        height="auto"
      />

        {!isPlaying ? (
        <button
          className="flex items-center justify-center absolute top-[60px] right-[122px] bg-white text-black p-4 rounded-full"
          onClick={handleTogglePlay}
        >
          <FaPlay className="opacity-20 pl-[2px]"/>
        </button>
      ) : (
        <button
          className="flex items-center justify-center absolute top-[60px] right-[122px] bg-white text-black p-4 rounded-full"
          onClick={handlePause}
        >
          <FaPause className="opacity-20 pl-[2px]"/>
        </button>
      )}
    </div>
  );
};

export default Video;
