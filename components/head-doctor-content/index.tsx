import React from "react";
import "./styles.scss";
import signature from "../../public/doctor_slider_img/signature.svg";
function HeadDoctorContent(param: { t: any }) {
  return (
    <div
      className=" flex items-center justify-center w-full absolute"
      style={{ maxWidth: 1400 }}
    >
      <div
        className=" header-content-sec flex items-center justify-center "
        style={{ width: "82%" }}
      >
        <div
          style={{ width: "45%" }}
          className=" flex flex-col items-center justify-center text-white gap-4 relative bg-bg_black_light pb-32 rounded-2xl"
        >
          <span className=" underline font-btnSize jost_regular">
            SCHEDULE YOUR SESSION
          </span>
          <h1 className=" jost_regular text-6xl font-medium flex flex-col items-start justify-center">
            Dr. Hutchins
          </h1>
          <p className=" text-p2 text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est quo
            pariatur quis repellat ipsam explicabo delectus!
          </p>
          <img src={signature.src} className=" w-2/5 absolute top-32" alt="" />
        </div>
      </div>
    </div>
  );
}
export default HeadDoctorContent;
