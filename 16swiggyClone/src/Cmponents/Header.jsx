import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";

//npm install react-icons

import logo from '../assets/Images/Swiggy-Logo.png'
import { links } from '../Data/Data';
function Header() {
    let [toggle, setToggle] = useState(false)
    let showToggle = () => {
        // alert('hii')
        setToggle(true)
    }
    let hideToggle = () => {
        setToggle(false)
    }

    return (
        <>
            <div onClick={hideToggle} className='black-overlay w-[100%] h-[100vh] z-50 fixed duration-500' style={{
                opacity: toggle ? 1 : 0,
                visibility: toggle ? 'visible' : 'hidden'
            }}>
                <div onClick={(event) => event.stopPropagation()} className='w-[30%] bg-white h-[100vh] absolute z-50 duration-700' style={{
                    left: toggle ? '0%' : '-100%'
                }}></div>
            </div>

            <header className='shadow-xl sticky top-0 z-1 bg-white'>
                <div className='max-w-[1200px]  mx-auto flex items-center'>
                    <div className='w-[100px]'>
                        <img src={logo} className='w-full' alt="" />
                    </div>
                    <div className='font-bold cursor-pointer'>
                        <span className='border-b-[3px] text-amber-300'>Lucknow</span> GomtiNagar, Uttar Pradesh,India
                        <IoIosArrowDown onClick={showToggle} className='inline font-bold text-red-500' />
                    </div>
                    <nav className='ml-auto none md:block'>
                        <ul className='flex list-none gap-5 font-semibold'>

                            {
                                links.map((link, index) => {
                                    console.log(link.name)
                                    return (
                                        <li key={index} className='flex items-center cursor-pointer gap-2'>
                                            {link.icon}
                                            {link.name}
                                            <sup>{link.sup}</sup>
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header