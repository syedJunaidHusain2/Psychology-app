import Image from 'next/image'
import React from 'react'

const DetailedBlog = () => {
  return (
    <div className='max-w-[600px] min-h-[100vh] mx-auto bg-brown-300'>
        <div style={{ backgroundImage: "url('/images/forest_image_three.jpg')" }} className='w-full h-80 bg-cover bg-bottom ' >
       
    </div>
        <div className='capitalize text-[22px] font-semibold mt-6'>The brightest stars in the darkest sky</div>

    </div>
  )
}

export default DetailedBlog
