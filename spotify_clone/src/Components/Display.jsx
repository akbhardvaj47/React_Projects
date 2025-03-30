import React, { useEffect, useRef } from 'react';
import DisplayHome from './DisplayHome';
import { Routes, Route, useLocation } from 'react-router-dom';
import DisplayAlbum from './DisplayAlbum';
import { albumsData } from '../assets/assets';

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes('album');
  const albumId = isAlbum ? location.pathname.split('/')[2] : ''; // Corrected ID parsing
  const bgColor = albumsData[Number(albumId)]?.bgColor || '#121212'; // Added fallback color

  useEffect(() => {
    if (isAlbum && displayRef.current) {
      displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`;
    } else {
      displayRef.current.style.background = '#121212';
    }
  }, [bgColor, isAlbum]);

  return (
    <div ref={displayRef} className="w-[100%] m-2 px-6 pt-4 bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0">
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
};

export default Display;
