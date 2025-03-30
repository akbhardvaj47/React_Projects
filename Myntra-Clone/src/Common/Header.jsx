import React from 'react'
import logo from '../assets/Images/Myntra_logo.jpeg'
import { FaSearch, FaUser,FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";

function Header() {
    return (
        <div className=' shadow-lg'>
            <header className='flex w-[90%] mx-auto h-[80]px py-3'>
                <div className='w-[5%] flex justify-center items-center'>
                    <img src={logo} className='w-[50px]' alt="" />
                </div>
                <div className='w-[50%] text-[14px] list-none flex font-bold items-center gap-2'>
                    <li className='px-3'><a href='#'>MEN</a></li>
                    <li className='px-3'><a href='#'>WOMEN</a></li>
                    <li className='px-3'><a href='#'>KIDS</a></li>
                    <li className='px-3'><a href='#'>HOME & LIVING</a></li>
                    <li className='px-3'><a href='#'>BEAUTY</a></li>
                    <li className='px-3'><a href='#'>STUDIO <sup className='text-red-500'>NEW</sup></a></li>
                </div>
                <div className='w-[30%] flex justify-center items-center'>
                    <div className='w-full rounded bg-gray-200'>
                        <FaSearch className='inline mx-4' />
                        <input type="text" className='h-[40px] outline-none w-[80%]' placeholder='Search for Products,Brans and Categories' />
                    </div>
                </div>
                <div className='w-[15%] flex gap-3 justify-center items-center'>
                    <div>
                        <div className='flex justify-center'>
                            <FaUser />
                        </div>
                        <div>
                            Profile
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <FaRegHeart/>
                        </div>
                        <div>
                            Wishlist
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-center'>
                        <IoBagOutline/>
                        </div>
                        <div>
                            Bag
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header