import React from "react";
import "./styles.scss";

function HeadDoctorContent(param: { t: any }) {
  return (
    <div
      className=" flex items-center justify-center w-full absolute "
      style={{ maxWidth: 1400 }}
    >
      <div
        className=" header-content-sec flex items-center justify-center "
        style={{ width: "84%" }}
      >
        <div className="head-doctor-content-div w-[48%] flex flex-col items-center justify-start text-white gap-4 relative bg-bg_black_light h-[320px] rounded-2xl max-lg4:h-[290px] media-max-812:w-3/4 media-max-500:w-full">
          <span className=" underline font-btnSize jost_regular max-md:text-sm ">
            SCHEDULE YOUR SESSION
          </span>
          <h1 className="dr-name-of-head-doctor-content-div jost_regular text-6xl font-medium flex flex-col items-start justify-center max-md:text-5xl  ">
            Dr. Hutchins
          </h1>
          <p className=" text-p2 text-center max-md:text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est quo
            pariatur quis repellat ipsam explicabo delectus!
          </p>
          <img
            src={"/doctor_slider_img/signature.svg"}
            className="signature w-2/5 absolute bottom-[-41px] max-lg2:bottom-[-32px] max-lg3:bottom-[-23px] max-md:w-1/3"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default HeadDoctorContent;
