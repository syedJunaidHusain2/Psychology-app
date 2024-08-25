import React from 'react'
import CountUp from 'react-countup';

const IncreaseCounter = () => {
  return (
    <div className='flex justify-evenly items-center bg-bg_color_primary p-16'>
      <div className='flex flex-col items-center'><span className='text-h2 text-white font-bold'><CountUp start={0} end={6350}  decimal=""   suffix=" +" duration={2}/></span><span className='text-p2 font-bold'>Happy Customer</span></div>
      <div className='flex flex-col items-center'><span className='text-h2 text-white font-bold'><CountUp start={0} end={3200}  suffix=" +"  duration={2}/></span><span className='text-p2 font-bold'>Successfull Therapy</span></div>
      <div className='flex flex-col items-center'><span className='text-h2 text-white font-bold'><CountUp start={0} end={20}  suffix=" +"  duration={2}/></span><span className='text-p2 font-bold'>Years Of Experience </span></div>
      <div className='flex flex-col items-center'><span className='text-h2 text-white font-bold'><CountUp start={0} end={15}  suffix=" +"  duration={2}/></span><span className='text-p2 font-bold'>Specialist</span></div>

      

    </div>
  )
}

export default IncreaseCounter
