import React from 'react'
import Head from './head'
import BlogBox from './blogBox'

const BlogList = () => {
  return (
    <>
      <Head />
      <h1 className='text-base mt-11 mb-6'>Published Blogs</h1>
      <BlogBox />
    </>
  )
}

export default BlogList