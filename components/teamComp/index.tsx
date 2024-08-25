import { IconButton } from '../../app/MTailwind'
import Image from 'next/image'
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";

const TeamComp = ({ image, name }) => {
  return (
    <div className='h-[380px] w-[280px] sm:h-[400px] sm:w-[300px] md:h-[420px] md:w-[320px] lg:h-[440px] lg:w-[340px] relative rounded-t-lg'>
      <Image 
        src={`/images/${image}`} 
        alt={`Image`} 
        width={300} 
        height={150} 
        className="w-full h-[250px] sm:h-[260px] md:h-[280px] lg:h-[300px] rounded-xl object-cover object-top"
      />
      <div className='bg-green-100 rounded-xl w-[90%] sm:w-[85%] md:w-[80%] absolute bottom-0 left-3 lg:bottom-0 left-8  pt-4 pb-4 flex flex-col justify-center items-center text-center'>
        <div className='inline-flex text-h4 font-semibold mb-2'>{name}</div>
        <div className='text-p'>Psychologist</div>
        <div className='mt-4 flex gap-3'>
          <IconButton className='bg-bg_color_primary cursor-pointer'>
            <FaFacebookF className='text-xl text-white'/>
          </IconButton>
          <IconButton className='bg-bg_color_primary cursor-pointer'>
            <FaXTwitter className='text-xl text-white'/>
          </IconButton>
          <IconButton className='bg-bg_color_primary cursor-pointer'>
            <IoLogoInstagram className='text-xl text-white'/>
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default TeamComp
