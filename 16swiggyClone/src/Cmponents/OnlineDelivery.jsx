import { restaurants } from '../Data/Products';
import img1 from '../assets/Images/th.jpeg';
import React, { useEffect, useState, useRef } from 'react';

function OnlineDelivery() {
  const [isSticky, setIsSticky] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const componentRef = useRef(null);
  const prevScrollPos = useRef(0);

  // Function to check if the component is at the top of the screen
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    // Check if scrolling up or down
    if (currentScrollPos < prevScrollPos.current) {
      setIsScrollingUp(true);
    } else {
      setIsScrollingUp(false);
    }

    prevScrollPos.current = currentScrollPos;

    if (componentRef.current) {
      const topPosition = componentRef.current.getBoundingClientRect().top;
      // Set sticky when component reaches the top
      setIsSticky(topPosition <= 0 && !isScrollingUp); // Avoid fixing when scrolling up
    }
  };

  useEffect(() => {
    // Listen to scroll events
    window.addEventListener('scroll', handleScroll);

    // Cleanup scroll event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrollingUp]); // Re-run the effect when scrolling up state changes

  return (
    <div className="max-w-[90%] mx-auto">

      {/* Content */}
      <div className="font-bold text-xl md:text-2xl py-5">
        Online Food delivery with Fastest in Lucknow
      </div>

      {/* Filters and Sort section (becomes sticky) */}
      <div
        ref={componentRef}
        className={`transition-all ease-in-out ${
          isSticky ? 'fixed top-0 gap-5 left-0 w-full z-50 shadow-xl' : ''
        } p-4 bg-white`}
      >
        {/* <div className="border none md:flex gap-4 font-bold py-5 border-red-500">
          <div>Filter</div>
          <div>Sort By</div>
          <div>Filter</div>
          <div>Sort By</div>
          <div>Filter</div>
          <div>Sort By</div>
          <div>Filter</div>
          <div>Sort By</div>
          <div>Filter</div>
          <div>Sort By</div>
          <div>Filter</div>
          <div>Sort By</div>
          <div>Filter</div>
          <div>Sort By</div>
          <div>Filter</div>
          <div>Sort By</div>
        </div> */}
      </div>

      {/* Restaurant list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {restaurants.map((v, i) => (
          <div key={i} className="shrink-0 grow">
            <div className=" group h-[182px] rounded-[15px] overflow-hidden relative mb-3">
              {/* Use dynamic image URL */}
              <img
                src={img1}
                className="object-cover w-full h-full  group-hover:scale-110 duration-150"
                alt={v.name}
              />
              {/* Overlay with dynamic offer */}
              <div className="image-overlay absolute w-full h-full top-0 flex items-end p-2 text-md md:text-xl font-bold text-white tracking-tighter">
                {v.offer}
              </div>
            </div>

            {/* Restaurant name and rating */}
            <div className="flex justify-between items-center mt-2">
              <div className="font-bold text-lg">{v.name}</div>
              <div className="text-sm text-gray-500">{v.rating} ★</div>
            </div>
            <div className="text-sm text-gray-600">{v.address}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OnlineDelivery;
