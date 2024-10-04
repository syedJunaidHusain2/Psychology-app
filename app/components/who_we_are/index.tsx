import React from "react";
import img1 from "../../../public/img1.jpg";
import Image from "next/image";
import "./style.scss";
import Link from "next/link";
import { IoPlaySharp } from "react-icons/io5";

function WhoWeAre() {
  return (
    <main className=" w-full flex items-center justify-center py-16 mt-[72px]">
      <div className="who-we-are-container max-w-[1400px] w-full flex items-center justify-center">
        <div className="who-we-are w-[84%] flex items-center justify-between media-max-900:flex-col-reverse media-max-900:justify-center media-max-900:gap-8 ">
          <div className="left-div-of-who-we-are overflow-hidden rounded-3xl w-[48%] flex items-center justify-center media-max-900:w-full">
            <div className="img-div-of-left-div-of-who-we-are flex items-center justify-center w-full min-h-[350px] relative media-max-500:min-h-64 media-max-362:min-h-44 ">
              <Image alt="img" className="h-full absolute" src={img1} />

              <button className="overly-border flex items-center justify-center absolute">
                <Link
                  className="popup-videos rounded-[50%] flex items-center justify-center relative text-center w-20 h-20 bg-bg_color_primary media-max-500:w-14 media-max-500:h-14 media-max-362:w-12 media-max-362:h-12"
                  href=""
                  target="_blank"
                >
                  <span></span>
                  <IoPlaySharp className=" text-5xl absolute text-gray-100 media-max-500:text-4xl media-max-362:text-3xl " />
                </Link>
              </button>
            </div>
          </div>
          <div className="right-div-of-who-we-are min-h-[350px] w-[48%] flex flex-col items-start justify-between py-4 media-max-900:w-full media-max-900:min-h-0 media-max-900:justify-center media-max-900:gap-4">
            <span className=" text-base underline jost_regular font-bold text-black max-md:text-sm">
              Who We Are
            </span>
            <h3 className="w-full text-4xl jost_regular font-bold max-md:text-3xl">
              Introducing Our Expert Psychology Professionals
            </h3>
            <p className=" w-full  text-base text-gray-700 text-justify max-md:text-sm">
              Located in New York, NY, Mindthera specializes in providing
              top-notch psychotherapy services. Our team of experienced
              professionals is dedicated to helping you achieve mental wellness
              and personal growth. Trust Mindthera for all your psychotherapy
              needs.
            </p>
            <button className=" jost_regular text-white border-none rounded-3xl text-center bg-bg_color_primary px-6 py-2 text-sm font-bold cursor-pointer select-none hover:underline max-md:text-xs">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default WhoWeAre;
