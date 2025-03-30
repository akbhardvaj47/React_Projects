import React from 'react';
import Navbar from './Navbar';
import AlbumItem from './AlbumItem';
import SongItem from './SongItem';
import { albumsData, songsData } from '../assets/assets';

const DisplayHome = () => {
  return (
    <div>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-4xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((album, i) => (
            <AlbumItem
              key={i}
              name={album.name}
              desc={album.desc}
              id={album.id}
              image={album.image}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-4xl">Today's Best Hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((song, i) => (
            <SongItem key={i} name={song.name} image={song.image} desc={song.desc} id={song.id} />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-4xl">Trending Songs</h1>
        <div className="flex overflow-auto">
          {songsData.map((song, i) => (
            <SongItem key={i} name={song.name} image={song.image} desc={song.desc} id={song.id} />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-4xl">Popular Artists</h1>
        <div className="flex overflow-auto">
          {songsData.map((song, i) => (
            <SongItem key={i} name={song.name} image={song.image} desc={song.desc} id={song.id} />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-4xl">Popular Albums and singles</h1>
        <div className="flex overflow-auto">
          {songsData.map((song, i) => (
            <SongItem key={i} name={song.name} image={song.image} desc={song.desc} id={song.id} />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-4xl">Popular Radio</h1>
        <div className="flex overflow-auto">
          {songsData.map((song, i) => (
            <SongItem key={i} name={song.name} image={song.image} desc={song.desc} id={song.id} />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-4xl">India's Best</h1>
        <div className="flex overflow-auto">
          {songsData.map((song, i) => (
            <SongItem key={i} name={song.name} image={song.image} desc={song.desc} id={song.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayHome;
