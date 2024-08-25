import React from 'react'
import AccordionDropdown from '../accordionDropdown/AccordionDropdown'

const QuestionSec = () => {
  return (
    <div className='bg-white px-6 py-10 sm:px-12 sm:py-16 lg:px-36 lg:py-20'>
      <div className='flex flex-col justify-center items-center'>
        <div className='bg-bg_color_primary text-white text-center text-sm sm:text-base lg:text-btnSize font-medium px-4 py-2 rounded-full'>
          Do you have
        </div>
        <div className='text-center text-2xl sm:text-3xl lg:text-h2 font-semibold mt-4'>
          Any <span className='text-bg_color_primary text-3xl sm:text-4xl lg:text-h1 font-light allison_regular'>Questions</span>
        </div>
      </div>
      <div className='mt-8'>
        <AccordionDropdown/>
      </div>
    </div>
  )
}

export default QuestionSec
