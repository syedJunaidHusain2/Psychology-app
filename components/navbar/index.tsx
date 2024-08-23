import React from "react";

const Navbar = () => {
  return (
    <nav className=" absolute top-0 font-title min-w-full max-w-full  p-2.5 flex items-center justify-center z-10 text-white gap-16 ">
      <span className=" text-center text-lg font-bold cursor-pointer select-none">
        Home
      </span>
      <span className=" text-center text-lg font-bold cursor-pointer select-none">
        Services
      </span>
      <span className=" text-center text-lg font-bold cursor-pointer select-none">
        Blog
      </span>
      <span className=" text-center text-lg font-bold cursor-pointer select-none">
        Contact
      </span>
      <div className=" flex items-center flex-col justify-center gap-1">
        <span className=" text-center text-sm font-bold select-none">
          Need Help?
        </span>
        <span className=" text-center text-lg font-bold">+91 8303388143</span>
      </div>
      <button className=" text-green-100 border-none rounded-3xl text-center bg-green-700 px-6 py-2 text-sm font-bold cursor-pointer select-none">
        Make Appointment
      </button>
    </nav>
  );
};

export default Navbar;
