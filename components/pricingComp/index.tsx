import React from 'react';
import Image from 'next/image';
import { TiTick } from "react-icons/ti";
import { Button } from "../../app/MTailwind";

// Define the props interface
interface PricingCompProps {
  title: string;
  pricing: string;
  description: string;
  image: string;
  color: string;
}

const PricingComp: React.FC<PricingCompProps> = ({ title, pricing, description, image, color }) => {
  return (
    <div className='pb-8 bg-white rounded-xl'>
      <div className={`lg:h-14 w-full bg-${color} rounded-t-xl text-white text-h4 pt-3 pl-4`}>
        {title}
      </div>
      <div className='flex justify-between mx-8 items-center mt-10 mb-4'>
        <div>
          <div className='text-[14px]'>Start from</div>
          <div className='text-h2 font-bold text-bg_color_primary'>
            {pricing}
            <span className='text-[16px] text-gray-600'>/session</span>
          </div>
        </div>
        <div>
          <Image
            src={`/images/${image}`}
            alt="logo"
            width={200}
            height={200}
            className='rounded-full right-4 top-4 lg:size-32 max-xl:size-32 max-lg3:size-24 max-lg:size-32 max-xsm:size-20'
          />
        </div>
      </div>
      <div className='md:text-[12px] text-gray-500 lg:text-p mx-8'>
        {description}
      </div>

      <div className='px-7 mt-6'>
        <div className='flex items-center font-bold'>
          <span className='mr-2 text-3xl text-bg_color_primary'><TiTick /></span>
          Personalized
        </div>
        <div className='flex items-center font-bold'>
          <span className='mr-2 text-3xl text-bg_color_primary'><TiTick /></span>
          Confidential
        </div>
        <div className='flex items-center font-bold'>
          <span className='mr-2 text-3xl text-bg_color_primary'><TiTick /></span>
          Effective
        </div>
      </div>

      <div className='px-8 mt-8'>
        <Button className='bg-bg_color_primary rounded-full' fullWidth>Make Appointment</Button>
      </div>
    </div>
  );
};

export default PricingComp;
