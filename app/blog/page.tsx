"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaSquareYoutube,
  FaXTwitter,
  FaYoutube,
  FaArrowTrendUp,
} from "react-icons/fa6";
import BlogComp from "../components/blogComp";
import LatestBlogComp from "../components/latestBlogComp";
import CommentsComp from "../components/commentsComp";
import UserContext from "../context/UserContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navData } from "@/app/data";

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
  // const [isOpen, setIsOpen] = useState(false);
  const path = usePathname()
  console.log(path,'Path')

  useEffect(() => {
    // Lock scroll
    const originalStyle = {
      overflow: document.body.style.overflow,
      position: document.body.style.position,
      width: document.body.style.width,
    };
  
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
  
    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = originalStyle.overflow;
      document.body.style.position = originalStyle.position;
      document.body.style.width = originalStyle.width;
    };
  }, []);
  

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

  const getDivIndex = (index:any) => {
    return index % 3;
  };

  var latestBlog = [1, 2, 3, 4, 5];

  // const {isOpen,setIsOpen}=useContext(UserContext)

  return (
    <div >
      {/* <button onClick={toggleScrollLock}>
        {isScrollLocked ? "Unlock Scroll" : "Lock Scroll"}
      </button> */}

      <div className="max-w-[1550px] mx-auto  h-[100vh]  relative">
        {/* between768-950:grid-cols-1 between320-767:grid-cols-1 max-lg2:grid-cols-2  */}
        <div className="grid grid-cols-[20%_60%_20%] p-2 h-[95vh]   between568-950:grid-cols-[60%_40%] between280-568:grid-cols-[100%_0%]">
          <div
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            className=" p-4 h-[80vh] overflow-y-auto rounded-lg between280-568:hidden"
          >
            <div className="flex justify-center">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={150}
                height={150}
                className="rounded-full size-32 my-8"
              />
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
              {
                navData.map((navItem)=>{
                  return(
              <Link  href={navItem.href}>
              <div className="cursor-pointer relative inline-block after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-black after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                {navItem.label}
              </div>
              </Link>
                  )
                })
              }
              

              
            </div>
            <div className="flex justify-center gap-6 items-center  md:mt-28">
              <FaXTwitter className="text-medium cursor-pointer text-gray-600 hover:text-bg_color_primary " />
              <FaInstagram className="text-medium cursor-pointer text-gray-600 hover:text-bg_color_primary " />
              <FaFacebookF className="text-medium cursor-pointer text-gray-600 hover:text-bg_color_primary " />
              <FaYoutube className="text-medium cursor-pointer text-gray-600 hover:text-bg_color_primary " />
            </div>
          </div>

          <div
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            className="h-[90vh]   overflow-y-auto  grid-flow-col grid-cols-3  justify-items-center gap-14   "
          >
            <button onClick={handleAdd}>Add</button>

            <div className=" grid grid-cols-3  max-lg2:grid-cols-2 between568-950:grid-cols-1 between280-568:grid-cols-1 justify-items-center ">
              <div>
                {/* First Div */}
                {state
                  .filter((_, index) => index % 3 === 0) // Filter elements for div1
                  .map((item, id) => (
                    <BlogComp
                      key={id}
                      title={item?.title}
                      heightCustom={"200px"}
                    />
                  ))}
              </div>
              <div>
                {/* Second Div */}
                {state
                  .filter((_, index) => getDivIndex(index) === 1) // Filter elements for div2
                  .map((item, id) => (
                    <BlogComp
                      key={id}
                      title={item?.title}
                      heightCustom={"160px"}
                    />
                  ))}
              </div>
              <div>
                {/* Third Div */}
                {state
                  .filter((_, index) => getDivIndex(index) === 2) // Filter elements for div3
                  .map((item, id) => (
                    <BlogComp
                      key={id}
                      title={item?.title}
                      heightCustom={"200px"}
                    />
                  ))}
              </div>
            </div>
          </div>

          <div
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            className=" p-4  overflow-y-auto rounded-lg between280-568:hidden"
          >
            <div className="text-[14px] flex items-center gap-1 font-semibold mb-6 between280-568:hidden ">
              Latest Blogs
              <span>
                <FaArrowTrendUp className="size-6" />
              </span>
            </div>
            <div className="grid grid-cols-1 gap-2 mb-16 between280-568:hidden ">
              {latestBlog.map((elem, id) => {
                return <LatestBlogComp id={id + 1} />;
              })}
            </div>
          </div>
        </div>
        <div>
          <CommentsComp />
        </div>
      </div>
    </div>
  );
};

export default Blog;
