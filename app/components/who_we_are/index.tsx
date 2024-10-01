import React from "react";
import img1 from "../../public/img1.jpg";
import Image from "next/image";
import "./style.scss";
import Link from "next/link";
import { IoPlaySharp } from "react-icons/io5";

function WhoWeAre() {
  return (
    <main className=" w-full flex items-center justify-center py-16">
      <div className="who-we-are-container max-w-[1400px] w-full flex items-center justify-center">
        <div className="who-we-are w-[82%] flex items-center justify-between">
          <div className="left-div-of-who-we-are overflow-hidden rounded-3xl w-[48%] flex items-center justify-center">
            <div className="img-div-of-left-div-of-who-we-are flex items-center bg-purple-100 justify-center w-full min-h-[350px] relative ">
              <Image alt="img" className="h-full absolute" src={img1} />

              <button className="overly-border flex items-center justify-center absolute">
                <Link
                  className="popup-videos rounded-[50%] flex items-center justify-center relative text-center w-20 h-20 bg-bg_color_primary"
                  href=""
                  target="_blank"
                >
                  <span></span>
                  <IoPlaySharp className=" text-5xl absolute text-gray-100 " />
                </Link>
              </button>
            </div>
          </div>
          <div className="right-div-of-who-we-are min-h-[350px] w-[48%] flex flex-col items-start justify-between py-4">
            <span className=" text-base underline jost_regular font-bold text-black">
              Who We Are
            </span>
            <h3 className="w-full text-4xl jost_regular font-bold">
              Introducing Our Expert Psychology Professionals
            </h3>
            <p className="w-full  text-base text-gray-700 max-xlg2:w-10/12 max-xlg3:w-11/12 text-justify">
              Located in New York, NY, Mindthera specializes in providing
              top-notch psychotherapy services. Our team of experienced
              professionals is dedicated to helping you achieve mental wellness
              and personal growth. Trust Mindthera for all your psychotherapy
              needs.
            </p>
            <button className=" jost_regular text-white border-none rounded-3xl text-center bg-bg_color_primary px-6 py-2 text-sm font-bold cursor-pointer select-none hover:underline">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default WhoWeAre;
