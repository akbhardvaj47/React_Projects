import React, { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';
import { assets } from '../assets/assets';

const SongItem = ({ id, name, image, desc }) => {
  const { playWithId } = useContext(PlayerContext);

  return (
    <div
      onClick={() => playWithId(id)} // When a song thumbnail is clicked, the song plays
      className="min-w-[250px] px-3 p-2 rounded cursor-pointer hover:bg-[#ffffff26] relative group">
    <img
    className="bg-green-700 w-[70px ] h-[70px] rounded-full absolute bottom-15 right-5 p-4 opacity-0 group-hover:opacity-100 group-hover:duration-[1000ms] transition-opacity transform group-hover:translate-y-0 group-hover:scale-110"
    src={assets.play_icon}
    alt=""
  />

      <img className="rounded" src={image} alt={name} />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

export default SongItem;
