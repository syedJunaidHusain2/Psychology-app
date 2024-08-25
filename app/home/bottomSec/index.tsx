import React from 'react'
import { MdAccessTime } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import Image from 'next/image';
import {
  Button
  } from "../../MTailwind";

const BottomSec = () => {
  const images = [
    'patient_one.jpg',
    'patient_two.jpg',
    'patient_three.jpg',
    'patient_four.jpg',
    'patient_five.jpg',
    'patient_six.jpg'
  ];

  return (
    <div className='bg-bg_color_primary text-white '>
      <div className='flex flex-col md:flex-row justify-around items-center py-8 px-4 md:px-8 lg:px-16 text-lg md:text-xl'>
        <div className='text-center md:text-left mb-4 md:mb-0'>
          <MdAccessTime className='mx-auto md:mx-0 size-8 mb-2' />
          <div className='text-p2'>Mon - Sat: 8AM - 9PM</div>
          <div className='text-p2'>Saturday: 10AM - 8PM</div>
        </div>
        <div className='text-center md:text-left mb-4 md:mb-0'>
          <MdOutlineLocationOn className='mx-auto md:mx-0 size-8 mb-2' />
          <div className='text-p2'>789 Elm Avenue</div>
          <div className='text-p2'>Brooklyn, NY 21300</div>
        </div>
        <div className='text-center md:text-left mb-4 md:mb-0'>
          <FaPhone className='mx-auto md:mx-0 size-8 mb-2' />
          <div className='text-p2'>+9162663283</div>
          <div className='text-p2'>contact@mindthera.com</div>
        </div>
        {/* <div className='lg:bg-white lg:text-bg_color_primary lg:text-btnSize text-center md:text-left px-6 py-1 rounded-full cursor-pointer md:bg-white hover:shadow-custom transition-shadow duration-300'>
          Make Appointment
        </div> */}
         <div className='px-8 mt-8'>
        <Button className='bg-white text-btnSize text-bg_color_primary rounded-full' fullWidth>Make Appoinment</Button>
        </div>

      </div>

      {/* Image Gallery */}
      <div className="flex flex-wrap">
        {images.map((image, id) => (
          <div key={id} className="group w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 h-40 sm:h-56 md:h-64 overflow-hidden relative">
            <Image 
              src={`/images/${image}`} 
              alt={`Image ${id}`} 
              width={300} 
              height={150} 
              className="w-full h-full cursor-pointer object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
            <FaPlus className='text-white absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-6 sm:size-8 md:size-10 cursor-pointer hidden group-hover:block' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default BottomSec;
