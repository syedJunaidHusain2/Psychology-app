import PricingComp from '@/components/pricingComp'
import React from 'react'
import Image from 'next/image';
import { url } from 'inspector';
import   './Pricind.css';


const PricingSec = () => {
  return (
    <div className='h-[120vh] w-full ' >
      <div className="bg_image relative">
        
      <div className=' px-28 py-20 absolute left-0 right-0 mx-auto'>
      <div className='flex flex-col justify-center items-center '>
        <div className='bg-gray-700 bg-opacity-50 text-white text-center text-btnSize font-btnSize inline-flex px-4 py-2 rounded-full'>
          Our pakage
        </div>
        <div className='text-center text-white text-h2 font-semibold'>
          Prcing <span className='text-bg_color_primary text-h1 font-light allison_regular'>Plans</span>
        </div>
        <div className='text-center text-white text-p w-[550px]  font-medium'>
        Qui culpa qui consequat officia cillum quis irure aliquip ut dolore sit eu culpa ut irure nisi occaecat dolore adipisicing do pariatur.
        </div>
        <div>
        <PricingComp/>

        </div>

      </div>
    </div>
      </div>


      
      
    </div>
  )
}

export default PricingSec




