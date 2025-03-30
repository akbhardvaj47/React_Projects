import React from 'react';
import { Link } from 'react-router-dom';
import Time from '../Loader/Time';

function Video({ video }) {
  console.log(video);

  return (  
    <div className='mt-16'>
      <Link to={`/video/${video?.videoId}`}>
        <div className=' flex'>
          <div className=' relative border border-red-600 h-48 md:h-56 rounded-xl hover:rounded-none duration-200 overflow-hidden'>
            {/* Safely access views with optional chaining */}
            <img className='h-full w-full' src={video?.thumbnails[0]?.url} alt="" />
            {video?.lengthSeconds  && <Time time={video?.lengthSeconds}/>}
            <h1>{video?.status?.views}</h1>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Video;
