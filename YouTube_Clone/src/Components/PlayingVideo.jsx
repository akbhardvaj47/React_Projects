import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../Context/AuthProvider'; // Assuming you are getting video data from Auth context

function PlayingVideo() {
  const { id } = useParams(); // Get the video ID from the URL
  const { searchResults } = useAuth(); // Assuming searchResults contains all videos

  const [video, setVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Find the video based on the ID
    const foundVideo = searchResults.find(v => v.video.videoId === id);
    setVideo(foundVideo ? foundVideo.video : null);
  }, [id, searchResults]);

  if (!video) {
    return <div>Video not found</div>;
  }

  const handlePlayClick = () => {
    setIsPlaying(true); // Trigger video to play
  };

  return (
    <div className="video-container">
      {/* Video Player */}
      <div className="video-player">
        {!isPlaying ? (
          <div
            className="relative h-full w-full flex justify-center items-center bg-black cursor-pointer"
            onClick={handlePlayClick}
          >
            {/* Thumbnail Image */}
            <img
              className="h-full w-full object-cover"
              src={video?.thumbnails[0]?.url}
              alt={video?.title}
            />
            {/* Play Button */}
            <button className="absolute text-white text-3xl">
              ▶
            </button>
          </div>
        ) : (
          <video
            controls
            className="w-full h-auto"
            src={video?.videoUrl} // Assuming you have a videoUrl field
            alt={video?.title}
          />
        )}
      </div>

      {/* Video Info */}
      <div className="video-info mt-4">
        <h1 className="text-2xl font-bold">{video?.title}</h1>
        <p className="text-gray-600">{video?.description}</p>
        <div className="video-stats mt-2">
          <span className="views">{video?.status?.views} views</span>
          <span className="published">{video?.publishedDate}</span> {/* Example of published date */}
        </div>
      </div>
    </div>
  );
}

export default PlayingVideo;
