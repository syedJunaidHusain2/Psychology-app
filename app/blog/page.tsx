"use client";
import BlogComp from "@/components/blogComp";
import CommentsComp from "@/components/commentsComp";
import LatestBlogComp from "@/components/latestBlogComp";
import { IconButton } from "@material-tailwind/react";
import Image from "next/image";
import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaSquareYoutube, FaXTwitter, FaYoutube,FaArrowTrendUp } from "react-icons/fa6";
// import { FaArrowTrendUp } from "react-icons/fa6";
// import { FaYoutube } from "react-icons/fa6";

const defaultState = [
  {
    title: "Yo",
    date: new Date(),
    content: "ContentContentContentContent",
  },
];
const Blog = () => {
  const [state, setState] = useState(defaultState);

  const handleAdd = () => {
    setState([
      ...state,
      {
        title: "Yo",
        date: new Date(),
        content: "ContentContentContentContent",
      },
    ]);
  };
  
  console.log(state);
  
  const getDivIndex = (index) => {
    return index % 3; 
  };

  var latestBlog=[1,2,3,4,5]


  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="max-w-[1400px] mx-auto bg-[#f6f6f6] relative">
      {/* between768-950:grid-cols-1 between320-767:grid-cols-1 max-lg2:grid-cols-2  */}
      <button onClick={handleAdd}>Add</button>
      <div className=" grid grid-cols-[75%_25%] p-2 h-[100vh]   between568-950:grid-cols-[60%_40%] between280-568:grid-cols-[100%_0%]">
        <div
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          className="h-[100vh] overflow-y-auto  grid-flow-col grid-cols-3  justify-items-center gap-10   "
        >
          <div className=" grid grid-cols-3  max-lg2:grid-cols-2 between568-950:grid-cols-1 between280-568:grid-cols-1 justify-items-center ">
        <div>
        {/* First Div */}
        {state
          .filter((_, index) => index % 3 === 0) // Filter elements for div1
          .map((item, id) => (
            
            <BlogComp key={id} heightCustom={"340px"} isOpen={isOpen} setIsOpen={setIsOpen} />
          ))}
      </div>
      <div>
        {/* Second Div */}
        {state
          .filter((_, index) => getDivIndex(index) === 1) // Filter elements for div2
          .map((item, id) => (
            <BlogComp key={id} heightCustom={"200px"} isOpen={isOpen} setIsOpen={setIsOpen} />
          ))}
      </div>
      <div>
        {/* Third Div */}
        {state
          .filter((_, index) => getDivIndex(index) === 2) // Filter elements for div3
          .map((item, id) => (
            <BlogComp key={id} heightCustom={"340px"} isOpen={isOpen} setIsOpen={setIsOpen} />
          ))}
      </div>
          </div>
        </div>
        <div
          style={{ scrollbarWidth: "none", msOverflowStyle: "none", boxShadow:
            "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)", }}
         
          className=" p-4 h-[95vh] overflow-y-auto rounded-lg between280-568:hidden"
        >
          <div className="flex justify-center">
          <Image 
          src="/images/logo.png" 
          alt="logo" 
          width={150} 
          height={150} 
          className='rounded-full size-32 my-8'
        />
          </div>
          <div className="text-[20px] flex items-center gap-1 font-semibold mb-6 between280-568:hidden ">
            Latest Blogs
            <span ><FaArrowTrendUp className="size-6"/></span>
          </div>
          <div className="grid grid-cols-1 gap-2 mb-24 between280-568:hidden ">
            
            { 
            
             latestBlog.map((elem,id)=>{
              return   <LatestBlogComp id={id+1} />
            
                   })
            
            
            }
           
          </div>

          <div className='flex justify-center gap-6 items-center  md:mt-8'>
       
            <FaXTwitter className='text-medium cursor-pointer text-gray-600 hover:text-bg_color_primary '/>
          
            <FaInstagram className='text-medium cursor-pointer text-gray-600 hover:text-bg_color_primary '/>
          
            <FaFacebookF className='text-medium cursor-pointer text-gray-600 hover:text-bg_color_primary '/>
          
            <FaYoutube   className='text-medium cursor-pointer text-gray-600 hover:text-bg_color_primary '/>
        </div>
        </div>
      </div>
      <div >
      <CommentsComp isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default Blog;
