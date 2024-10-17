"use client";

import Image from "next/image";
import React, { useContext, useState } from "react";
import { FaUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import UserContext from "@/app/context/UserContext";
import Link from "next/link";


const BlogComp = ({ title, heightCustom }:any) => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const day = currentDate.getDate();
  const month = currentDate.toLocaleString("default", { month: "short" });

  const formattedDate = `${day} ${month} ${year}`;
  console.log(title,'Title')

  const [liked, setLiked] = useState(false); // State to track if the icon is liked
  const [likeCount, setLikeCount] = useState(0); // State to track the like count

  const handleLikeClick = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1); 
    }
    setLiked(!liked); 
  };

  const { handleCommentToggle } = useContext(UserContext);

  function limitCharacters(text:any, charLimit:any) {
    if (text.length > charLimit) {
      return text.slice(0, charLimit) + "...";
    }
    return text;
  }

  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit Nisi ea sit amet consectetur adipisicing elit Nisi ea  amet consectetur adipisicing elit Nisi";

  const limitedDescription = limitCharacters(description, 100);

  return (
    <div
      style={{
        boxShadow:
          "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
      }}
      className="w-[270px] rounded-[14px]  bg-white pb-2 blog-card mb-9 animate__animated animate__zoomIn"
    >
      <Link href={`blog/${title}`}>
        <div>
          <Image
            src={`/images/forest_image_two.jpg`}
            alt={`Image`}
            width={200}
            height={200}
            className={`w-full rounded-tl-[14px] rounded-tr-[14px]`}
            style={{ height: `${heightCustom}` }}
          />
        </div>
        <div className="pl-2 pr-2  text-[15px]   font-semibold josh_regular leading-[20px] uppercase font-seibold josh_regular mt-4">
          Discover your Writing Style
        </div>
        <div className="pl-2 pr-2  flex justify-start items-center  mt-2 mb-2 text-gray-700 font-light  text-[13px] tracking-[0.5px] leading-[18px] ">
          {limitedDescription}
        </div>
        <div className="pl-2 pr-2 cursor-pointer text-[14px] font-semibold text-bg_color_primary relative inline-block after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-bg_color_primary after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
          Read more
        </div>
      </Link>
      <div className="pl-2 pr-2 ">

        <div className="flex items-center gap-4 mt-2">
          <div className="text-[12px] text-gray-600 uppercase">
            {formattedDate}
          </div>
          <div className="flex justify-center items-center gap-1 text-gray-600">
            <span className="cursor-pointer">
              <FaHeart
                className={liked ? "text-red-500" : "text-gray-400"}
                onClick={handleLikeClick}
                style={{
                  cursor: "pointer",
                  // Change color based on liked state
                  fontSize: "16px",
                  transition: "color 0.3s ease",
                }}
              />
            </span>
            <span className="text-[12px]">{likeCount}</span>
          </div>
          <div className="flex justify-center items-center gap-1 text-gray-600">
            <span>
              <FaRegComment
                onClick={() => {
                  handleCommentToggle();
                }}
                className="cursor-pointer"
              />
            </span>
            <span className="text-[12px]">25</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogComp;
