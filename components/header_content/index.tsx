import React from "react";

function HeaderContent() {
  return (
    <div
      className=" header-content-sec flex flex-col items-start justify-center text-white w-1/3 gap-4 absolute"
      style={{ right: "12%" }}
    >
      <span className=" underline font-btnSize jost_regular">MindThera</span>
      <h1 className=" jost_regular text-6xl font-medium flex flex-col items-start justify-center">
        Begin Your
        <span className=" allison_regular text-8xl max-xlg:text-7xl">
          Inner Peace Journey
        </span>
      </h1>
      <p className=" text-p2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est quo
        pariatur quis repellat ipsam explicabo delectus!
      </p>
      <button className=" font-btnSize jost_regular bg-bg_color_primary px-4 py-2 rounded-full hover:underline">
        Our Services
      </button>
    </div>
  );
}

export default HeaderContent;
