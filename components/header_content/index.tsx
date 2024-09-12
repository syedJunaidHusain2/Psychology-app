import React from "react";
import "./styles.scss";
function HeaderContent() {
  return (
    <div
      className=" flex items-center justify-center w-full absolute"
      style={{ maxWidth: 1400 }}
    >
      <div
        className=" header-content-sec flex items-center justify-end "
        style={{ width: "82%" }}
      >
        <div
          style={{ width: "45%" }}
          className=" flex flex-col items-start justify-center text-white gap-4 "
        >
          <span className=" underline font-btnSize jost_regular">
            MindThera
          </span>
          <h1 className=" jost_regular text-6xl font-medium flex flex-col items-start justify-center">
            Begin Your
            <span className=" allison_regular text-8xl max-lg2:text-newH1 max-lg3:text-newH2">
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
      </div>
    </div>
  );
}
export default HeaderContent;
