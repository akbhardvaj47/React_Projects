import React from 'react'
// Assuming `restaurants` is an array of restaurant objects you import from another file.
import { restaurants } from '../Data/Products'
import img1 from '../assets/Images/th.jpeg'

function Card() {
    return (
        <div className="flex gap-3 px-2">
            {
                // Iterate through the `restaurants` array
                restaurants.map((v, i) => {
                    return (
                        <div key={i} className="w-full sm:w-[16.5%] md:w-[280px] lg:w-[22%] xl:w-[18%] mx-auto shrink-0 grow">
                            <div className="h-[182px] group rounded-[15px] overflow-hidden relative mb-3">
                                {/* Use dynamic image URL */}
                                <img
                                    src={img1}
                                    className="object-cover w-full h-full group-hover:scale-105 duration-150"
                                    alt={v.name}
                                />

                                {/* Overlay with dynamic offer */}
                                <div className="image-overlay absolute w-full h-full top-0 flex items-end p-2 text-xl font-bold text-white tracking-tighter">
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

                    )
                })
            }

        </div>
    )
}

export default Card;
