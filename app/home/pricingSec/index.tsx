import PricingComp from '@/components/pricingComp'
import React from 'react'
import Image from 'next/image';
import { url } from 'inspector';
import   './Pricind.css';


const PricingSec = () => {
  return (
    <div className='h-[120vh] w-full ' >
      <div className="bg_image">

      </div>
      
        <PricingComp/>
      
    </div>
  )
}

export default PricingSec




