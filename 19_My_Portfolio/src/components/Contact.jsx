import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from 'react-icons/fa'; // Import icons

const Contact = () => {
  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center md:space-x-12 mb-10">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-3xl font-semibold mb-4">Let's Talk</h3>
            <p className="text-gray-400 mb-6">
              I'm open to discussing web development projects or partnership opportunities.
            </p>
            <div className="mb-4">
              <FaEnvelope className="inline-block text-green-400 mr-2" />
              <a href="mailto:amitkumarbhardwaj030@gmail.com" className="hover:underline">
                amitkumarbhardwaj030@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-green-400 mr-2" />
              <span> +918303166787</span>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-green-400 mr-2" />
              <span> street, city, country</span>
            </div>
          </div>
          {/* You can add a map, contact form, or other content on the right side if needed */}
          <div className='flex-1 w-full'>
            <form className='space-y-4'>
                <div>
                    <label htmlFor="name" className='block mb-2'>Your Name</label>
                    <input type="text" className='w-full p-2 rounded bg-gray-800 focus:outline-none focus:border-green-400' placeholder='Enter Your Name'/>
                </div>
                <div>
                    <label htmlFor="email" className='block mb-2'>Your Email</label>
                    <input type="email" className='w-full p-2 rounded bg-gray-800 focus:outline-none focus:border-green-400' placeholder='Enter Your Email'/>
                </div>
                <div>
                    <label htmlFor="message" className='block mb-2'>Your Message</label>
                    <textarea type="text" rows="5" className='w-full p-2 rounded bg-gray-800 focus:outline-none focus:border-green-400' placeholder='Enter Your Message'/>
                </div>
                <button className=' bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
