import React from 'react';
import { available, company, contact, icons, legal, life } from '../Data/FooterItems';
import img2 from '../assets/Images/th (1).jpeg';

const Footer = () => {
    return (
        <footer className="py-12 ">
            <div className="container px-6 w-[90%] mx-auto ">
                <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-1 gap-4">
                    {/* Image and copyright info */}
                    <div className='md:col-span-2 justify-start flex flex-col items-center'>
                        <div>
                            <img src={img2} alt="" />
                        </div>
                        <div>
                            <p className='text-xl text-[1rem] text-gray-600'>&copy; 2024 Swiggy Limited</p>
                        </div>
                    </div>

                    {/* Company Info */}
                    <div className='md:col-span-1.5'>
                        <h3 className="text-lg font-bold mb-4">Company</h3>
                        <ul>
                            {company.map((v, i) => (
                                <li key={i} className="mb-2">
                                    <a href="#" className="text-gray-400 hover:text-blue-600">{v}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                        <ul>
                            {contact.map((v, i) => (
                                <li key={i} className="mb-2">
                                    <a href="#" className="text-gray-400 hover:text-blue-600">{v}</a>
                                </li>
                            ))}
                        </ul>

                        {/* Legal */}
                        <div>
                            <h3 className="text-lg font-bold mb-4">Legal</h3>
                            <ul>
                                {legal.map((v, i) => (
                                    <li key={i} className="mb-2">
                                        <a href="#" className="text-gray-400 hover:text-blue-600">{v}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Available In */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Available in:</h3>
                        <ul>
                            {available.map((v, i) => (
                                <li key={i} className="mb-2">
                                    <a href="#" className="text-gray-400 hover:text-blue-600">{v}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Life at Swiggy */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Life At Swiggy</h3>
                        <ul>
                            {life.map((v, i) => (
                                <li key={i} className="mb-2">
                                    <a href="#" className="text-gray-400 hover:text-blue-600">{v}</a>
                                </li>
                            ))}
                        </ul>

                        {/* Social Media */}
                        <div>
                            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                {icons.map((v, i) => (
                                    <a key={i} href="#" className="text-gray-400 hover:text-blue-600">
                                        {v.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="text-center mt-12">
                    <p className="text-gray-400 text-sm">&copy; 2025 Swiggy. All rights reserved.</p>
                </div>
            <hr className='border-[1px] border-gray-500'/>
            </div>
        </footer>
    );
};

export default Footer;
