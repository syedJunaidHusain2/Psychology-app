"use client"
import { navData } from "@/app/data";
import { usePath } from "@/app/hooks/usePath";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
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
      className={`${state ? "bg-white text-black shadow-md" : "bg-transparent text-white"} flex items-center justify-center top-0 z-10 sticky w-full`}
    >
      <div
        style={{ maxWidth: 1400 }}
        className={`w-full flex items-center justify-center`}
      >
        <div
          style={{ width: "82%" }}
          className="jost_regular h-[72px] flex items-center justify-between"
        >
          {navData.map((navItem, i) => {
            return (
              <Link
                href={navItem.url}
                key={i}
                className={`font-${state ? "medium" : "normal"}  relative inline-block after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-black after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 text-center text-lg  cursor-pointer select-none`}
              >
                {navItem.name}
              </Link>
            );
          })}
          <div className=" flex items-center flex-col justify-center gap-1">
            <span className=" text-center text-sm font-bold select-none">
              Need Help?
            </span>
            <span className={`text-center text-lg font-${state ? "medium" : "bold"}`}>
              +91 8303388143
            </span>
          </div>
          <button className=" text-white border-none rounded-3xl text-center bv px-6 py-2 text-sm font-bold cursor-pointer select-none hover:underline ">
            Make Appointment
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
