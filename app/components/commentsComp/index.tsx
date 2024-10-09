import React, { useContext, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import CurrentDate from "../currentDate";
import { FaUser } from "react-icons/fa";
import { TbMessage } from "react-icons/tb";
import Image from "next/image";
import UserContext from "@/app/context/UserContext";
const CommentsComp = () => {
  const [inputValue, setInputValue] = useState("");
  const [comments, setComments] = useState([]);
  const { isOpen, setIsOpen } = useContext(UserContext);
console.log(isOpen);

  const handleComment = () => {
    console.log(comments);
    if (inputValue.trim()) {
      setComments([...comments, inputValue.trim()]);
      setInputValue("");
    }
  };

  return (
    <div
      style={{
        boxShadow:
          "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
      }}
      className={`h-screen w-[420px] bg-white fixed top-[72px] right-0 z-50 border-t-1 border-white ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transform transition-transform duration-700 ease-in-out `}
    >
      <div
        style={{
          boxShadow:
            "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
        }}
        className="flex justify-between items-center p-6 "
      >
        <div>
          <div className="font-bold mb-2">Comments</div>
          <div className="text-[14px] font-semibold text-gray-400">
            The Biggest star In The Darkest Sky
          </div>
        </div>

        <div
          onClick={() => {
            setIsOpen(false);
          }}
          className={`bg-gray-200 rounded-full p-2 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }  `}
        >
          <RxCross2 className="font-extrabold size-4 cursor-pointer" />
        </div>
      </div>
      <div className="p-6">
        <textarea
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          value={inputValue}
          className="w-full h-40 p-4  border-gray-300 border-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <div
          className="bg-black py-2 px-8 text-white inline-block rounded-full mt-4 mb-4 cursor-pointer"
          onClick={() => handleComment()}
        >
          Comment
        </div>

        <div className="border-gray-200 border-3 p-4 rounded-lg">
          <div className="flex items-center  ">
            <Image
              src="/images/profile_avatar.png"
              alt="logo"
              width={50}
              height={50}
              className="rounded-full size-7 mr-2 "
              onClick={() => handleInput()}
            />
            <div className="text-[12px] text-gray-700 mr-2">
              Kunal Kumar <span>@kunal438</span>
            </div>
            <span>{<CurrentDate />}</span>
          </div>
          <div className="mt-4 mb-4">{comments}</div>
          <div className="flex text-[12px] font-bold text-gray-500">
            <div className="flex items-center mr-4">
              <span className="mr-1">
                <TbMessage />
              </span>
              Hide reply
            </div>
            <div className="underline underline-offset-1 ">Reply</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsComp;
