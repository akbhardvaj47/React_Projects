import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';

function Category() {
  const [category, setCategory] = useState([]);
  const [slide, setSlide] = useState(0); // Track the current index of the displayed image
  
  let fetchCategory = async () => {
    let response = await fetch('https://dummyjson.com/products');
    let data = await response.json();
    // console.log(data)
    setCategory(data.products); // Make sure you access `data.products`
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  // Handle next arrow click
  const nextSlide = () => {
    if(slide>20) return false;
    // console.log(category.length)
    setSlide(slide+3)
    // console.log(slide)
  };

  // Handle previous arrow click
  const prevSlide = () => {
    if(slide===0) return false;
    setSlide(slide-3)
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex justify-between my-3">
        <div className="font-bold text-2xl">What's on your mind?</div>
        <div className="flex gap-3">
          <div
            className="bg-[gray] w-[30px] h-[30px] rounded-full cursor-pointer flex justify-center items-center text-white"
            onClick={prevSlide}
          >
            <FaArrowLeft />
          </div>
          <div className="bg-[gray] w-[30px] h-[30px] rounded-full cursor-pointer flex justify-center items-center text-white"
            onClick={nextSlide} >
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="w-[100%] mx-auto py-5 flex overflow-x-hidden">
        <div
          className="flex transition-transform duration-300">
          {category.map((v, i) => (
            <div  
            style={{ transform: `translateX(-${slide * 100}%)` }}
            key={i} className="shrink-0 w-[10%] basis-[12.3%] duration-500 text-center">
              <img src={v.thumbnail} alt="" className="w-full rounded-full" />
              <b className='text-center '>{v.title}</b>
            </div>
          ))}
        </div>
      </div>
        <hr  className='my-5 border-[2px] border-gray-600'/>
    </div>
  );
}

export default Category;
