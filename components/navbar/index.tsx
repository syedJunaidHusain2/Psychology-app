import React, { useEffect, useState } from "react";
const Navbar = () => {
  const [navOpt] = useState(["Home", "Services", "Blog", "Contact"]);
  const [navCon, setNavCon] = useState("bg-transparent  text-white");

  useEffect(() => {
    const navBgChangeFunc = () => {
      if (window.scrollY >= 620) {
        setNavCon("bg-white text-black");
      } else {
        setNavCon("bg-transparent  text-white");
      }
    };
    window.addEventListener("scroll", navBgChangeFunc);
  }, []);

  return (
    <nav
      className={`${navCon} flex items-center justify-center top-0 z-10 fixed w-full`}
    >
      <div
        style={{ maxWidth: 1400 }}
        className={`w-full flex items-center justify-center`}
      >
        <div
          style={{ width: "82%" }}
          className="jost_regular py-2.5 flex items-center justify-between"
        >
          {navOpt.map((opt, i) => {
            return (
              <span
                key={i}
                className=" hover:underline text-center text-lg font-bold cursor-pointer select-none"
              >
                {opt}
              </span>
            );
          })}
          <div className=" flex items-center flex-col justify-center gap-1">
            <span className=" text-center text-sm font-bold select-none">
              Need Help?
            </span>
            <span className=" text-center text-lg font-bold">
              +91 8303388143
            </span>
          </div>
          <button className=" text-white border-none rounded-3xl text-center bg-bg_color_primary px-6 py-2 text-sm font-bold cursor-pointer select-none hover:underline ">
            Make Appointment
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
