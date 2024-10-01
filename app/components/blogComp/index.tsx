"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";

// Custom styles for nth-child to alternate image heights

// style={{ boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)' }}
// shadow-[0_10px_20px_rgba(0,0,0,0.19),_0_6px_6px_rgba(0,0,0,0.23)]
const BlogComp = ({ heightCustom,isOpen,setIsOpen }) => {

  const currentDate = new Date();
const year = currentDate.getFullYear();
// const month = currentDate.getMonth() + 1; // Adding 1 because getMonth() is 0-based
const day = currentDate.getDate();
const month = currentDate.toLocaleString('default', { month: 'short' });

const formattedDate = `${day} ${month} ${year}`;


// Liked feature
const [liked, setLiked] = useState(false); // State to track if the icon is liked
const [likeCount, setLikeCount] = useState(0); // State to track the like count

const handleLikeClick = () => {
  if (liked) {
    setLikeCount(likeCount - 1); // Decrease like count if already liked
  } else {
    setLikeCount(likeCount + 1); // Increase like count if not liked
  }
  setLiked(!liked); // Toggle liked state
};

  return (
    <div
      style={{
        boxShadow:
          "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
      }}
      className="w-[280px]  bg-white pb-2 blog-card mb-6 animate__animated animate__zoomIn"
      
    >
      <div>
        <Image
          src={`/images/forest_image_two.jpg`}
          alt={`Image`}
          width={200}
          height={200}
          className={`w-full`}
          style={{ height: `${heightCustom}` }}
        />
      </div>

      <div className="pl-6 pr-2">
        <div className="text-[20px] font-semibold leading-[25px] uppercase font-seibold josh_regular mt-4">
        Discover your Writing Style
        </div>
        <div className="flex justify-start items-center mt-2 mb-6 text-gray-700 font-light pr-8 text-[13px] tracking-[1px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit Nisi ea sit
          amet consectetur adipisicing elit Nisi ea  amet consectetur adipisicing elit Nisi...
        </div>
        <div className="bg-[#58bcb3] text-white text-[9px] font-bold uppercase tracking-[2px] inline px-4 py-3 cursor-pointer">Read more</div>
        <div className="flex items-center gap-4 mt-10">
          <div className="text-[12px] text-gray-600 uppercase">{formattedDate}</div>
          <div className="flex justify-center items-center gap-1 text-gray-600">
            <span  className="cursor-pointer">
              <FaHeart  className={liked?'text-red-500':'text-gray-400'}  onClick={handleLikeClick}
        style={{
          cursor: 'pointer',
           // Change color based on liked state
          fontSize: '16px',
          transition: 'color 0.3s ease',
        }}/>
            </span>
            <span className="text-[12px]">{likeCount}</span>
          </div>
          <div className="flex justify-center items-center gap-1 text-gray-600">
            <span>
              <FaRegComment onClick={()=>(setIsOpen(!isOpen))} className="cursor-pointer" />
            </span>
            <span className="text-[12px]">21</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogComp;
