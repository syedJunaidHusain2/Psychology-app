import React, { useState } from "react";

const Navbar = () => {
  const [navOpt, setNavOpt] = useState(["Home", "Services", "Blog", "Contact"]);
  return (
    <nav className=" absolute top-0 font-title min-w-full max-w-full  p-2.5 flex items-center justify-center z-10 text-white gap-16 ">
      {navOpt.map((opt, i) => {
        return (
          <span
            key={i}
            className=" hover:text-green-700 text-center text-lg font-bold cursor-pointer select-none"
          >
            {opt}
          </span>
        );
      })}
      <div className=" flex items-center flex-col justify-center gap-1">
        <span className=" text-center text-sm font-bold select-none">
          Need Help?
        </span>
        <span className=" text-center text-lg font-bold">+91 8303388143</span>
      </div>
      <button className=" text-green-100 border-none rounded-3xl text-center bg-green-700 px-6 py-2 text-sm font-bold cursor-pointer select-none hover:text-green-700 hover:bg-white">
        Make Appointment
      </button>
    </nav>
  );
};

export default Navbar;
