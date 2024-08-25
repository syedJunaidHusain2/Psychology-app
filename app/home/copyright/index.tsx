import React from 'react'

const Copyright = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between py-4 px-4 md:px-10 lg:px-32 items-center text-sm sm:text-base md:text-lg lg:text-xl border-t-[1px] border-gray-400'>
      <div className='text-gray-500 text-p text-center md:text-left mb-4 md:mb-0'>
        Copyright 2024 – Mindthera by Designesia
      </div>
      <div className='flex flex-col md:flex-row justify-between gap-4 md:gap-10 items-center   '>
        <div className='cursor-pointer text-gray-600 text-[16px] font-semibold text-text-center md:text-left'>Terms & Conditions</div>
        <div className='cursor-pointer text-gray-600 text-[16px] font-semibold text-center md:text-left'>Privacy Policy</div>
      </div>
    </div>
  )
}

export default Copyright;
