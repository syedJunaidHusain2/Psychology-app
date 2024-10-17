import React from 'react'
import CurrentDate from '../currentDate'

const LatestBlogComp = ({id}:any) => {
  return (
    <div  className=' flex justify-evenly gap-4 items-start  p-1'>
      <div className='text-[35px] font-bold text-gray-300'>0{id}</div>
      <div>
        <div className=' text-[14px] mt-2 mb-1 capitalize font-semibold text-gray-200'><CurrentDate/></div>
        <div className='mb-2 text-black capitalize text-[13px]   leading-[20px] underline-offset-4 hover:text-bg_color_primary cursor-pointer tracking-[0.5px]'>Lorem ipsum dolor sit amet lorem... </div>
      </div>
       
    </div>
  )
}

export default LatestBlogComp
