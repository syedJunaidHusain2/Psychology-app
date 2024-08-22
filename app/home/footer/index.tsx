import React from 'react'
import Image from 'next/image';
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <div className=' bg-[#FCF8F3] relative  md:px-20 lg:px-28  lg:py-20 flex items-start flex-col lg:flex-row gap-14   '>
      
//       <div className='mb-8 lg:mb-0'>
//         <Image 
//           src="/images/logo_one.png" 
//           alt="logo" 
//           width={150} 
//           height={150} 
//           className='rounded-full size-24'
//         />
//         <div className='mt-2 w-[375px] text-base text-gray-500 lg:text-p leading-p  '>
//           At Mindthera, we understand that life’s challenges can sometimes feel overwhelming, and seeking support can be a daunting step. That’s why our team of dedicated therapists is here to provide you with the compassionate guidance and expert care you deserve.
//         </div>
//       </div>
      
//       <div className='mb-8 lg:mb-0 '>
//         <div className='text-xl text-bg_color_primary lg:text-h4  my-4'>Company</div>
//         <div className='text-base text-gray-500 lg:text-p my-2 cursor-pointer'>Individual Therapy</div>
//         <div className='text-base text-gray-500 lg:text-p my-2 cursor-pointer'>Couples Counseling</div>
//         <div className='text-base text-gray-500 lg:text-p my-2 cursor-pointer'>Career Counseling</div>
//         <div className='text-base text-gray-500 lg:text-p my-2 cursor-pointer'>Stress management</div>
//         <div className='text-base text-gray-500 lg:text-p my-2 cursor-pointer'>Anxiety Treatment</div>
//         <div className='text-base text-gray-500 lg:text-p my-2 cursor-pointer'>Depression Therapy</div>
//       </div>
      
//       <div className='mb-8 lg:mb-0 '>
//         <div className='text-xl text-bg_color_primary lg:text-h4 my-4'>Our Services</div>
//         <div className='text-base text-gray-500 lg:text-p my-2 cursor-pointer'>About Us</div>
//         <div className='text-base text-gray-500 lg:text-p my-2 cursor-pointer'>Our Services</div>
//         <div className='text-base text-gray-500 lg:text-p my-2 cursor-pointer'>Study Case</div>
//         <div className='text-base text-gray-500 lg:text-p my-2 cursor-pointer'>Blog</div>
//         <div className='text-base text-gray-500 lg:text-p my-2 cursor-pointer'>Contact Us</div>
//       </div>
      
//       <div>
//         <div className='flex items-center text-xl text-bg_color_primary lg:text-h4 font-[600] mt-4'> 
//           <span className='mr-2 text-bg_color_primary'><CiLocationOn/></span> Office Location
//         </div>
//         <div className='text-base text-gray-500 lg:text-p mb-4 mt-2'>100 S Main St, Los Angeles, CA</div>
//         <div className='flex items-center text-xl text-bg_color_primary lg:text-h4 font-[600] '> 
//           <span className='mr-2'><MdEmail/></span>Send Messages
//         </div>
//         <div className='text-base text-gray-500 lg:text-p mt-2  cursor-pointer'>contact@mindthera.com</div>
//         <div className='flex justify-evenly items-center mt-8 '>
//           <FaFacebookF  className='text-lg text-bg_color_primary lg:text-xl cursor-pointer' />
//           <FaXTwitter  className='text-lg text-bg_color_primary lg:text-xl cursor-pointer' />
//           <FaInstagram  className='text-lg text-bg_color_primary lg:text-xl cursor-pointer' />
//           <FaYoutube  className='text-lg text-bg_color_primary size-8 lg:text-xl cursor-pointer' />
//         </div>
       
//       </div>
//       <div>
//         <Image 
//           src="/images/green_flower_logo.png" 
//           alt="logo" 
//           width={250} 
//           height={250} 
//           className='rounded-full size-60 absolute right-0 top-0 '
//         />
//         </div>
      
//     </div>
//   )
// }

// export default Footer;




const Footer = () => {
  return (
    <div className='bg-[#FCF8F3] relative px-6 md:px-20 lg:px-28 lg:gap-14 py-10 lg:py-20 flex flex-col lg:flex-row items-start  md:gap-14'>
      
      <div className='mb-6 lg:mb-0'>
        <Image 
          src="/images/logo_one.png" 
          alt="logo" 
          width={150} 
          height={150} 
          className='rounded-full size-24'
        />
        <div className='mt-2 w-full md:w-[375px] text-sm md:text-base text-gray-500 leading-p'>
          At Mindthera, we understand that life’s challenges can sometimes feel overwhelming, and seeking support can be a daunting step. That’s why our team of dedicated therapists is here to provide you with the compassionate guidance and expert care you deserve.
        </div>
      </div>
      
      <div className='mb-6 lg:mb-0'>
        <div className='text-lg md:text-xl text-bg_color_primary my-4'>Company</div>
        {["Individual Therapy", "Couples Counseling", "Career Counseling", "Stress management", "Anxiety Treatment", "Depression Therapy"].map((item, index) => (
          <div key={index} className='text-sm md:text-base text-gray-500 my-2 cursor-pointer hover:text-black  '>{item}</div>
        ))}
      </div>
      
      <div className='mb-6 lg:mb-0'>
        <div className='text-lg md:text-xl text-bg_color_primary my-4'>Our Services</div>
        {["About Us", "Our Services", "Study Case", "Blog", "Contact Us"].map((item, index) => (
          <div key={index} className='text-sm md:text-base text-gray-500 my-2 cursor-pointer hover:text-black '>{item}</div>
        ))}
      </div>
      
      <div className='mb-6 lg:mb-0 lg:ml-14'>
        <div className='flex items-center text-lg md:text-xl text-bg_color_primary font-semibold mt-4'> 
          <CiLocationOn className='mr-2 '/> Office Location
        </div>
        <div className='text-sm md:text-base text-gray-500 mb-4 mt-2 hover:text-black  '>100 S Main St, Los Angeles, CA</div>
        <div className='flex items-center text-lg md:text-xl text-bg_color_primary font-semibold'> 
          <MdEmail className='mr-2'/> Send Messages
        </div>
        <div className='text-sm md:text-base text-gray-500 mt-2 cursor-pointer hover:text-black '>contact@mindthera.com</div>
        <div className='flex justify-evenly items-center mt-6 md:mt-8'>
          <FaFacebookF className='text-base md:text-lg text-bg_color_primary cursor-pointer' />
          <FaXTwitter className='text-base md:text-lg text-bg_color_primary cursor-pointer' />
          <FaInstagram className='text-base md:text-lg text-bg_color_primary cursor-pointer' />
          <FaYoutube className='text-base md:text-lg text-bg_color_primary cursor-pointer' />
        </div>
      </div>
      
      <div>
        <Image 
          src="/images/green_flower_logo.png" 
          alt="logo" 
          width={200} 
          height={200} 
          className='rounded-full absolute right-4 top-4 lg:size-60 md:right-0 md:top-0 size-28'
        />
      </div>
    </div>
  )
}

export default Footer;

