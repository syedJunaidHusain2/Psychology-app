import React from 'react'

const LatestBlogComp = ({id}) => {
  return (
    <div  className=' flex justify-evenly gap-4 items-start  p-1'>
      <div className='text-[45px] font-bold text-gray-300'>0{id}</div>
      <div>
        <div className=' text-[14px] mt-2 mb-1 capitalize font-semibold text-gray-600'>27 sep</div>
        <div className='mb-2 text-black capitalize text-[18px] font-semibold  leading-[25px] underline-offset-4 hover:text-bg_color_primary cursor-pointer tracking-[0.5px]'>Lorem ipsum dolor sit amet lorem... </div>
      </div>
       
      
    </div>
  )
}

export default LatestBlogComp
