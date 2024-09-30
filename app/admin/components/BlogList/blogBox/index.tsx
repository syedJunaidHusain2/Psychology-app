import Image from 'next/image'
import React from 'react'

const BlogBox = () => {
  return (
    <div className='flex items-center justify-between'>

      <div className='flex items-center justify-between gap-10'>
        <div className="w-[100px] h-[100px] overflow-hidden">
          <Image
            src="/img1.jpg"
            className='rounded-sm object-cover w-full h-full'
            width={100}
            height={100}
            alt='profile-pic'
          />
        </div>
        <div className='flex flex-col gap-3'>
          <h2 className='text-lg font-bold'>Blog Title</h2>
          <p className='text-[13px] font-medium'>Published on 29 Sep, Friday</p>
          <div className='flex gap-7 text-sm underline-offset-2'>
            <button className='underline'>Edit</button>
            <button className='underline text-red-700'>Delete</button>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center gap-11 text-center'>
        <div>
          <h1 className='text-xl'>
            0
          </h1>
          <p className='text-[13px]'>
            Likes
          </p>
        </div>
        <div>
          <h1 className='text-xl'>
            0
          </h1>
          <p className='text-[13px]'>
            Comments
          </p>
        </div>
      </div>
    </div>
  )
}

export default BlogBox
