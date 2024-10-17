"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePath } from "@/app/hooks/usePath";
import { navData } from "@/app/data/index";
import Image from "next/image";

const Navbar = () => {
  const path = usePath();

  const [state, setState] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`${
        state || isOpen
          ? "bg-white text-black shadow-md sticky"
          : "bg-transparent text-white fixed"
      } top-0 w-full z-50 transition-colors duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Image src={"/images/logo.png"} width={50} height={50} alt="Logo" />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navData.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative inline-block after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-black after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 text-lg font-${
                state ? "medium" : "normal"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden text-white transition-transform duration-300 ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
          onClick={toggleMenu}
        >
          {isOpen ? <span className="text-black"><FaTimes size={24} /></span> : <span className="text-black"><FaBars size={24} /></span> }
        </button>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 absolute top-full left-0 w-full bg-white z-50 ${
            isOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex items-center justify-center text-black">
            <div className="flex flex-col space-y-4 p-4">
              {navData.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className=" hover:bg-gray-700 hover:text-white transition duration-300 transform hover:scale-105 p-2 rounded"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            {/* Mobile Right Section */}
            {isOpen && (
              <div className={`md:hidden flex flex-col items-center space-y-2 ${isOpen ? 'mt-0' : 'mt-4'}`}>
                <div className={`flex flex-col items-center justify-center`}>
                  <span className={`text-${isOpen ? 'black' : 'white'} text-sm font-bold `}>
                    Need Help?
                  </span>
                  <span className={`text-${isOpen ? 'black' : 'white'} text-lg font-medium `}>
                    +91 8303388143
                  </span>
                </div>
                <button className="bg-bg_color_primary text-white rounded-full px-6 py-2 text-sm font-bold cursor-pointer hover:bg-opacity-90 transition duration-300">
                  Make Appointment
                </button>
              </div>
            )}
          </div>
        </div>
        {/* Right Section for Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex flex-col items-center justify-center">
            <span className="text-sm font-bold">Need Help?</span>
            <span className={`text-lg font-${state ? "medium" : "bold"}`}>
              +91 8303388143
            </span>
          </div>
          <button className="bg-bg_color_primary text-white rounded-full px-6 py-2 text-sm font-bold cursor-pointer hover:bg-opacity-90 transition duration-300">
            Make Appointment
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
