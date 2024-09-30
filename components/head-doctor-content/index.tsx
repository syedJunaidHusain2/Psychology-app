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
        style={{ width: "84%" }}
      >
        <div
          style={{ width: "48%" }}
          className=" flex flex-col items-center justify-start text-white gap-4 relative bg-bg_black_light h-[320px] rounded-2xl max-lg4:h-[290px]"
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
          <img src={signature.src} className=" w-2/5 absolute bottom-[-41px] max-lg2:bottom-[-32px] max-lg3:bottom-[-23px] " alt="" />
        </div>
      </div>
    </div>
  );
}
export default HeadDoctorContent;
