import { IconButton } from '../../MTailwind';
import Image from 'next/image';
import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";

const TeamComp = ({ image, name }) => {
  return (
    <div className='h-[420px] w-[300px] mx-auto relative rounded-t-lg'>
      <Image 
        src={`/images/${image}`} 
        alt={`Image`} 
        width={200}   
        height={0} 
        className="w-full h-[300px] + mx-auto rounded-xl object-cover object-top"
      />
      <div className='flex justify-center'>

      <div className='bg-green-100  rounded-xl w-72 absolute bottom-0 pt-4 pb-4 flex flex-col justify-center items-center text-center'>
        <div className='text-lg font-semibold mb-2'>{name}</div>
        <div className='text-sm'>Psychologist</div>
        <div className='mt-4 flex gap-3'>
          <IconButton className='bg-white text-bg_color_primary hover:bg-bg_color_primary hover:text-white cursor-pointer p-2'>
            <FaFacebookF className='text-sm'/>
          </IconButton>
          <IconButton className='bg-white text-bg_color_primary hover:bg-bg_color_primary hover:text-white cursor-pointer p-2'>
            <FaXTwitter className='text-sm'/>
          </IconButton>
          <IconButton className='bg-white text-bg_color_primary hover:bg-bg_color_primary hover:text-white cursor-pointer p-2'>
            <IoLogoInstagram className='text-sm'/>
          </IconButton>
        </div>
      </div>
      </div>
    </div>
  )
}

export default TeamComp;
