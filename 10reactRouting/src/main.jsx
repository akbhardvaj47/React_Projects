// src/index.js or src/main.js

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Correct imports
import './index.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Course from './Pages/Course';
import Blog from './Pages/Blog';
import BlogDetails from './Pages/blogDetails';
import Error404 from './Pages/Error404';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/course" element={<Course />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} /> 
        <Route path="*" element={<Error404/>} /> 
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
