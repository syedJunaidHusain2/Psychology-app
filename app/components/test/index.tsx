import React from 'react'
import Image from "next/image";


const Test = () => {
  return (
    <div className='bg-[#603EFF] rounded-tl-[60px] rounded-br-[60px] text-white flex justify-around  py-40 '>
        <div>
          <div className='mb-4 text-xl'>Highly-rated on G2, Trustpilot, and Sourceforge</div>
          <div className='text-4xl font-semibold mb-6'>Trusted by entrepreneurs like you</div>
          <div className='w-[540px] text-[22px] mb-8 leading-8'>Start your 14-day free trial today and discover why hundreds of thousands of small businesses rely on Leadpages to promote their brands and earn revenue.</div>
          <div className='flex '>
            <div className='mr-6 border-x-2 border-y-2 py-2 px-8 rounded-full text-lg'>Reviews</div>
            <div className='mr-6 border-x-2 border-y-2 py-2 px-8 rounded-full bg-white text-[#603EFF] font-bold text-lg'>Sign Up Free</div>

          </div>

        </div>
        <div>
        <Image 
        src={'/images/gear_img.png'} 
        alt={'Image'} 
        width={200} 
        height={200} 
        className=" size-80"
      />
        </div>
      
    </div>
  )
}

export default Test
