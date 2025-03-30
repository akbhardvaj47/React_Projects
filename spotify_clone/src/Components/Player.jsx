import React, { useContext } from 'react';
import { assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const Player = () => {
  const { seekBar, seekBg, playStatus, seekSong, play, pause, track, time, next, previous } = useContext(PlayerContext);

  return (
    <div className="h-[10%] bg-black flex justify-around text-white px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={track.image || songsData[0].image} alt={track.name || songsData[0].name} />
        <div>
          <p>{track.name || songsData[0].name}</p>
          <p>{track.desc.slice(0, 12) || songsData[0].desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img className="w-4 cursor-pointer" src={assets.shuffle_icon} alt="Shuffle" />
          <img onClick={previous} className="w-4 cursor-pointer" src={assets.prev_icon} alt="Previous" />
          {playStatus ? (
            <img onClick={pause} className="w-4 cursor-pointer" src={assets.pause_icon} alt="Pause" />
          ) : (
            <img onClick={play} className="w-4 cursor-pointer" src={assets.play_icon} alt="Play" />
          )}
          <img onClick={next} className="w-4 cursor-pointer" src={assets.next_icon} alt="Next" />
          <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="Loop" />
        </div>
        <div className="flex items-center gap-5">
          <p>{time.currentTime.minute}:{time.currentTime.second}</p>
          <div ref={seekBg} onClick={seekSong} className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
            <hr ref={seekBar} className="h-1 w-0 border-none bg-green-800 rounded-full" />
          </div>
          <p>
            {time.totalTime.minute}:{time.totalTime.second}
          </p>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-around gap-2 px-5 opacity-75">
        <img className="w-4" src={assets.plays_icon} alt="Play Icon" />
        <img className="w-4" src={assets.mic_icon} alt="Microphone Icon" />
        <img className="w-4" src={assets.queue_icon} alt="Queue Icon" />
        <img className="w-4" src={assets.speaker_icon} alt="Speaker Icon" />
        <img className="w-4" src={assets.volume_icon} alt="Volume Icon" />
        <div className="w-20 bg-slate-50 h-1 rounded"></div>
        <img className="w-4" src={assets.mini_player_icon} alt="Mini Player Icon" />
        <img className="w-4" src={assets.zoom_icon} alt="Zoom Icon" />
      </div>
    </div>
  );
};

export default Player;
