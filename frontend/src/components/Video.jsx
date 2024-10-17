import React from 'react';
import ReactPlayer from 'react-player';

const Video = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center space-y-[30px] sm:space-y-0 sm:space-x-[60px]">
      <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-[370px] 2xl:w-1/7 h-[220px] sm:h-[220px]">
        <ReactPlayer
          url="https://youtu.be/BpAa-qA8WEk'"
          className="w-full h-full"
          width="100%"
          height="100%"
        />
      </div>
      <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-[370px] 2xl:w-1/7 h-[220px] sm:h-[220px]">
        <ReactPlayer
          url="https://youtu.be/Dokayb0EHws"
          className="w-full h-full"
          width="100%"
          height="100%"
        />
      </div>
      <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-[370px] 2xl:w-1/7 h-[220px] sm:h-[220px]">
        <ReactPlayer
          url="https://youtube.com/shorts/e3P73Xjk1RM"
          className="w-full h-full"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default Video;