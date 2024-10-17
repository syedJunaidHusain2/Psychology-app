"use client";

import Image from "next/image";
import React, { useContext, useState } from "react";
import CurrentDate from "../../components/currentDate";
import { FaHeart, FaRegComment } from "react-icons/fa6";
import UserContext from "../../context/UserContext";
import CommentsComp from "../../components/commentsComp";

const DetailedBlog = ({ params }: { params: { slug: string } }) => {
  const usePathname = params
  // console.log(params.blogid);
  
  const [liked, setLiked] = useState(false); // State to track if the icon is liked
  const [likeCount, setLikeCount] = useState(0); // State to track the like count

  const { handleCommentToggle } = useContext(UserContext);

  const handleLikeClick = () => {
    if (liked) {
      setLikeCount(likeCount - 1); // Decrease like count if already liked
    } else {
      setLikeCount(likeCount + 1); // Increase like count if not liked
    }
    setLiked(!liked); // Toggle liked state
  };

  return (
    <div className="max-w-[1000px] min-h-[100vh] mx-auto relative">
      <div
        style={{ backgroundImage: "url('/images/forest_image_three.jpg')" }}
        className="w-full h-80 bg-cover bg-bottom"
      ></div>
      <div className="capitalize text-[25px] font-semibold mt-6">
        The brightest stars in the darkest sky
      </div>

      <div className="flex justify-between my-4">
        <div>
          <div className="flex items-center  ">
            <Image
              src="/images/profile_avatar.png"
              alt="logo"
              width={50}
              height={50}
              className="rounded-full size-7 mr-2 "
            />
            <div className="text-[12px] text-gray-700 mr-2">
              <span>@kunal438</span>
            </div>
          </div>
        </div>
        <div className="flex items-center text-[14px] ">
          <span className="mr-2 text-gray-400">Published on</span>
          {<CurrentDate />}
        </div>
      </div>
      <div className="flex items-center gap-4 mt-2 border-t-1 border-b-1 py-4 border-gray-200">
        {/* <div className="text-[12px] text-gray-600 uppercase"></div> */}
        <div className="flex justify-center items-center gap-1 text-gray-600">
          <span className="cursor-pointer">
            <FaHeart
              className={liked ? "text-red-500" : "text-gray-400"}
              onClick={handleLikeClick}
              style={{
                cursor: "pointer",

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
          <span className="text-[12px]">21</span>
        </div>
      </div>

      <div className="mt-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eaque eius
        repudiandae magni delectus illo! Cupiditate excepturi, molestiae itaque
        facere, fugit saepe impedit id quam repudiandae provident quod modi
        illum autem mollitia nobis nisi beatae sit ipsum, cum quidem aliquid
        ducimus. Aliquam voluptatem provident laboriosam earum at ex alias in.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt accusamus
        aliquid saepe quia, voluptates culpa pariatur repellat eligendi ea
        dolore?
      </div>
      <div>
        <CommentsComp/>
      </div>
    </div>
  );
};

export default DetailedBlog;
