import React from 'react'
import { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Card from './Card';
function TopRes() {
    const [slide, setSlide] = useState(0);
    // Handle next arrow click
    const nextSlide = () => {
        if (slide > 20) return false;
        // console.log(category.length)
        setSlide(slide + 3)
        // console.log(slide)
    };

    // Handle previous arrow click
    const prevSlide = () => {
        if (slide === 0) return false;
        setSlide(slide - 3)
    };
    return (
        <div className='w-[90%] mx-auto'>
            <div className="flex justify-between my-3">
                <div className="font-bold text-xl md:text-2xl">Top Restorents in Lucknow</div>
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
            <div className='flex gap-5 overflow-hidden py-5'>
                <Card />
            </div>
        <hr  className='my-5 border-[2px] border-gray-600'/>

        </div>
    )
}

export default TopRes