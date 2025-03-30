import React from 'react'
import AboutImage from '../assets/My-Image.png'
const About = () => {
    return (
        <div className=' bg-black text-white py-20' id='about'>
            <div className=' container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className=' text-4xl font-bold text-center md:space-x-12 mb-10'>About Me</h2>
                <div className=' flex flex-col md:flex-row items-center md:space-x-12'>
                    <img src={AboutImage} alt=""
                        className=' w-72 h-80 rounded object-cover mb-8 md:mb-0'
                    />
                    <div className=' flex-1'>
                        <p className='text-lg mb-8'>I am an aspiring UI/UX Designer and Frontend Developer, My passion lies in creating user-friendly and visually compelling digital experiences. Although I'm at the beginning of my career, I'm eager to learn and grow in this dynamic field. I have a foundational understanding of HTML, CSS, Basic JavaScript. I'm also familiar with design tools such as Figma and Adobe XD, which I use to create wireframes, prototypes, and user interfaces</p>
                        <div className='space-y-4'>
                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>HTML & CSS</label>
                                <div className=' grow bg-gray-800 rounded-full h-2.5'>
                                    <div className=' bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'></div>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>React JS</label>
                                <div className=' grow bg-gray-800 rounded-full h-2.5'>
                                    <div className=' bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-5/12'></div>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>Python</label>
                                <div className=' grow bg-gray-800 rounded-full h-2.5'>
                                    <div className=' bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'></div>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>MySQL</label>
                                <div className=' grow bg-gray-800 rounded-full h-2.5'>
                                    <div className=' bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12'></div>
                                </div>
                            </div>
                            <div className=' mt-12 flex justify-between text-center'>
                                <div>
                                    <h3 className=' text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>10+</h3>
                                    <p>Services</p>
                                </div>
                                <div>
                                    <h3 className=' text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>50+</h3>
                                    <p>Projects Completed</p>
                                </div>
                                <div>
                                    <h3 className=' text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>5+</h3>
                                    <p>Developers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About