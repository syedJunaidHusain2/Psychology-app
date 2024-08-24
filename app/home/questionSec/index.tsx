import React from 'react'
import AccordionDropdown from '../accordionDropdown/AccordionDropdown'

const QuestionSec = () => {
  return (
    <div className='bg-white px-28 py-20'>
      <div className='flex flex-col justify-center items-center '>
        <div className='bg-bg_color_primary text-white text-center text-btnSize font-btnSize inline-flex px-4 py-2 rounded-full'>
          Do you have
        </div>
        <div className='text-center text-h2 font-semibold'>
          Any <span className='text-bg_color_primary text-h1 font-light allison_regular'>Questions</span>
        </div>
      </div>
      <div>
        <AccordionDropdown/>
      </div>
    </div>
  )
}

export default QuestionSec
