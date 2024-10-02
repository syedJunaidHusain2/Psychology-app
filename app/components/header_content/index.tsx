import React from "react";
import "./styles.scss";
function HeaderContent() {
  return (
    <div
      className=" flex items-center justify-center w-full absolute media-max-900:bottom-4 max-md:bottom-auto "
      style={{ maxWidth: 1400 }}
    >
      <div
        className=" header-content-sec flex items-center justify-end "
        style={{ width: "84%" }}
      >
        <div
          className=" flex flex-col items-start w-[48%] justify-center text-white gap-4 max-md:gap-4"
        >
          <span className="  allison_regular text-5xl font-medium ">
            MindThera
          </span>
          <h1 className="  flex flex-col items-start justify-center gap-1 max-md:gap-0">
            <span className="  jost_regular text-6xl font-medium media-max-976:text-5xl max-md:text-4xl max-md:leading-[50px]">

            Begin Your
            </span>
            <span  className=" jost_regular text-3xl media-max-976:text-2xl max-md:text-lg">
              Inner Peace Journey
            </span>
          </h1>
          <p className=" text-p2 max-md:text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est quo
            pariatur quis repellat ipsam explicabo delectus!
          </p>
          <button className=" font-btnSize jost_regular bg-bg_color_primary px-4 py-2 rounded-full hover:underline max-md:text-sm cursor-pointer">
            Our Services
          </button>
        </div>
      </div>
    </div>
  );
}
export default HeaderContent;
