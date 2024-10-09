"use client";
import React, { useState } from "react";
import googleIconSvg from "../../public/icons8-google.svg";
import { RxMagnifyingGlass } from "react-icons/rx";
import { FaEnvelope, FaKey, FaEyeSlash, FaEye } from "react-icons/fa6";
import Image from "next/image";
function SignIn() {
  const [passEyeCon, setPassEyeCon] = useState({
    dis1: "hidden",
    dis2: "block",
    ty1: "password",
  });
  const [FormData, setFormData] = useState({
    email: "",
    password: "",
  });
  let _name: any;
  let _value: any;
  function handleFormDataOnChange(e: any) {
    _name = e.target.name;
    _value = e.target.value;
    setFormData({ ...FormData, [_name]: _value });
  }
  function handleFormSubmit(e: any) {
    e.preventDefault();
    console.log(FormData);
    setFormData({
      email: "",
      password: "",
    });
  }
  return (
    <main className=" w-full flex items-center justify-center overflow-hidden">
      <div className="sign-in-container max-w-[1400px] w-full flex items-center justify-center">
        <div className="sign-in w-[84%] flex items-center flex-col justify-between h-screen">
          <div className=" relative top-div-of-sign-in w-full flex items-center justify-center py-4">
            <span className=" absolute -bottom-[2px] h-[2px] w-screen bg-gray-200 border-bottom-of-top-div-of-sign-in"></span>
            <div className="left-div-of-top-div-of-sign-in flex items-center justify-start gap-8 w-1/2 media-max-500:gap-2">
              <span>O</span>
              <div className=" flex items-start justify-center flex-col relative w-1/3 max-xlg5:w-1/2 max-md:w-3/4 media-max-400:min-w-[85%]  media-max-362:min-w-[95%]">
                <span className=" absolute left-2 max-md:text-sm">
                  <RxMagnifyingGlass />
                </span>
                <input
                  type="text"
                  id="search"
                  className="block w-full pl-8 pr-4 py-2   rounded-full bg-gray-200 placeholder-gray-500 focus:outline-none max-md:text-sm"
                  placeholder="Search"
                />
              </div>
            </div>
            <div className="right-div-of-top-div-of-sign-in flex items-center justify-end gap-4 w-1/2 media-max-500:gap-0 media-max-500:justify-between media-max-400:justify-end media-max-400:gap-1 media-max-362:flex-col media-max-362:justify-center media-max-362:items-end">
              <button className="w-1/5 bg-black text-white py-2 rounded-full font-medium hover:bg-gray-800 transition max-md:text-sm media-max-712:w-1/3 media-max-500:w-[49%] media-max-400:w-[38%] media-max-362:py-1 media-max-362:w-[50%]">
                Sign In
              </button>
              <button className="w-1/5 bg-gray-200 py-2 rounded-full font-medium hover:bg-gray-500 transition max-md:text-sm media-max-712:w-1/3 media-max-500:w-[49%] media-max-400:w-[38%] media-max-362:py-1 media-max-362:w-[50%]">
                Sign Up
              </button>
            </div>
          </div>
          <div className="bottom-div-of-sign-in flex items-center justify-center flex-col w-2/5 px-14 py-7 media-max-1050:w-1/2 media-max-838:w-3/4 media-max-506:min-w-full media-max-506:p-0">
            <h1 className="text-3xl font-semibold text-center w-full mb-8 max-md:text-2xl media-max-362:mb-2">
              Welcome Back
            </h1>
            <form
              onSubmit={(e) => handleFormSubmit(e)}
              className=" mb-8 gap-4 flex items-center justify-center flex-col w-full"
            >
              <div className=" flex items-start justify-center flex-col w-full relative max-md:text-sm">
                <span className=" absolute left-2">
                  <FaEnvelope />
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={FormData.email}
                  onChange={(e) => handleFormDataOnChange(e)}
                  className=" block w-full pl-8 pr-4 py-2 rounded-md bg-gray-200 placeholder-gray-500 focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>

              <div className=" flex items-start justify-center flex-col w-full relative max-md:text-sm">
                <span className=" absolute left-2">
                  <FaKey />
                </span>
                <span
                  onClick={() =>
                    setPassEyeCon({
                      dis1: "hidden",
                      dis2: "block",
                      ty1: "password",
                    })
                  }
                  className={` ${passEyeCon.dis1} absolute right-2 cursor-pointer`}
                >
                  <FaEye />
                </span>
                <span
                  onClick={() =>
                    setPassEyeCon({
                      dis1: "block",
                      dis2: "hidden",
                      ty1: "text",
                    })
                  }
                  className={` ${passEyeCon.dis2} absolute right-2 cursor-pointer`}
                >
                  <FaEyeSlash />
                </span>
                <input
                  type={passEyeCon.ty1}
                  id="password"
                  name="password"
                  required
                  value={FormData.password}
                  onChange={(e) => handleFormDataOnChange(e)}
                  className=" block w-full px-8 py-2 rounded-md bg-gray-200 placeholder-gray-500 focus:outline-none"
                  placeholder="Enter your password"
                />
              </div>

              <button
                type="submit"
                className="w-1/4 mt-4 bg-black text-white py-2 rounded-full font-medium hover:bg-gray-800 transition max-xlg5:w-1/3 max-md:text-sm"
              >
                Sign In
              </button>
            </form>

            <div className=" mb-8 text-center flex items-center justify-center w-full relative">
              <span className=" w-full h-[2px] bg-gray-400 absolute"></span>
              <span className=" px-2 text-sm text-gray-500 z-10 bg-white max-md:text-xs" >
                OR
              </span>
            </div>

            <button
              type="button"
              className="w-full mb-4 text-white bg-black  py-2 rounded-full shadow-sm flex items-center justify-center gap-2 hover:bg-gray-800 transition"
            >
              <Image src={googleIconSvg} className=" w-[7%]" alt="G" />
              <span className=" max-md:text-sm" >Continue With Google</span>
            </button>

            <p className=" w-full text-center text-sm text-gray-500 flex items-center justify-center gap-2 max-md:text-xs">
              <span>Don't have an account?</span>
              <a href="#" className="text-black font-medium hover:underline">
                Join us Today
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignIn;
