"use client";
import { navData } from "@/app/data";
import { usePath } from "@/app/hooks/usePath";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [navbarCondition, setNavbarCondition] = useState("-top-[100vh]");
  const path = usePath();
  const [state, setState] = useState(false);

  const navBgChangeFunc = () => {
    setState(window.scrollY >= 630 ? true : false);
  };

  useEffect(() => {
    if (path === "/") {
      setState(false);
      window.addEventListener("scroll", navBgChangeFunc);
    } else {
      setState(true);
    }
    return () => {
      window.removeEventListener("scroll", navBgChangeFunc);
    };
  }, [path]);

  return (
    <nav
      className={`${
        state ? "bg-white text-black shadow-md" : "bg-transparent text-white"
      } flex items-center justify-center top-0 z-10 fixed w-full `}
    >
      <div
        style={{ maxWidth: 1400 }}
        className={`w-full flex items-center justify-center`}
      >
        <div
          style={{ width: "84%" }}
          className="jost_regular h-[72px] flex items-center justify-between "
        >
          <Image
            src={`/images/logo.png`}
            alt="logo"
            className=" w-[70px]"
            height={1000}
            width={1000}
          />
          {navData.map((navItem, i) => {
            return (
              <Link
                href={navItem.url}
                key={i}
                className={`font-${
                  state ? "medium" : "normal"
                } hover:underline text-center text-lg  cursor-pointer select-none max-md955:hidden`}
              >
                {navItem.name}
              </Link>
            );
          })}
          <div className=" flex items-center flex-col justify-center gap-1 max-md955:hidden">
            <span className=" text-center text-sm font-bold select-none">
              Need Help?
            </span>
            <span
              className={`text-center text-lg font-${
                state ? "medium" : "bold"
              }`}
            >
              +91 8303388143
            </span>
          </div>
          
          <button className=" text-white border-none rounded-3xl text-center bg-bg_color_primary px-6 py-2 text-sm font-bold cursor-pointer select-none hover:underline max-md955:hidden ">
            Make Appointment
          </button>
          <div className=" hidden items-center justify-center gap-4 max-md955:flex">
          <button className=" text-white border-none rounded-3xl text-center bg-bg_color_primary px-6 py-2 text-sm font-bold cursor-pointer select-none hover:underline max-md:text-xs">
            Make Appointment
          </button>
          <div
            className=" text-3xl"
            onClick={() => setNavbarCondition("-top-0")}
            >
            <RxHamburgerMenu />
            </div>
            </div>
        </div>
      </div>
      <div
        className={` hidden max-md955:flex fixed bg-bg_color_primary h-screen w-screen items-center justify-center flex-col gap-4 ${navbarCondition} text-white transition-all duration-250 ease-in-out`}
        onClick={() => setNavbarCondition("-top-[100vh]")}
      >
        {navData.map((navItem, i) => {
          return (
            <Link
              href={navItem.url}
              key={i}
              className={`font-${
                state ? "medium" : "normal"
              } hover:underline text-center text-lg  cursor-pointer select-none max-md:text-base `}
            >
              {navItem.name}
            </Link>
          );
        })}
      
        <div className=" flex items-center flex-col justify-center gap-1 absolute left-[8%] top-5 ">
            <span className=" text-center text-sm font-bold select-none max-md:text-xs">
              Need Help?
            </span>
            <span
              className={`text-center text-lg font-${
                state ? "medium" : "bold"
              } max-md:text-base`}
            >
              +91 8303388143
            </span>
          </div>
          <div
            className=" text-4xl absolute right-[7.5%] top-[18px]"
            onClick={() => setNavbarCondition("-top-[100vh]")}
            >
              <RxCross2 />
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
