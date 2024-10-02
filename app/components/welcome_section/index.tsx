import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import {
  leftContentFirstData,
  leftContentSecondData,
} from "../../data/WelcomeSectionData";
function WelcomeSec() {
  const [leftContentFirst, setLeftContentFirst] =
    useState(leftContentFirstData);
  const [leftContentSec, setLeftContentSec] = useState(leftContentSecondData);
  return (
    <section className=" w-full flex items-center justify-center">
      <div
        style={{ maxWidth: 1400 }}
        className="welcome-section-main-div flex mt-28 mb-28 w-full items-center justify-center media-max-900:m-0"
      >
        <div
          style={{ width: "84%" }}
          className=" flex items-center justify-between media-max-900:flex-col-reverse media-max-900:gap-20 media-max-900:py-14"
        >
          <div
            className="left-div-of-welcome-section-main-div w-[48%] flex items-center justify-start gap-5 media-max-900:w-full media-max-900:justify-center media-max-900:gap-6"
          >
            <div className="first-img-div-of-welcome-section-main-div flex items-end justify-end flex-col gap-5 mt-9">
              {leftContentFirst &&
                leftContentFirst.map((d, i) => {
                  return (
                    <img
                      className=" rounded-md"
                      src={d._img.src}
                      width={d._width}
                      alt="img"
                    />
                  );
                })}
            </div>
            <div className="second-img-div-of-welcome-section-main-div flex flex-col items-start justify-start gap-5 mb-9">
              {leftContentSec &&
                leftContentSec.map((d, i) => {
                  return (
                    <img
                      className=" rounded-md"
                      src={d._img.src}
                      width={d._width}
                      alt="img"
                    />
                  );
                })}
            </div>
          </div>
          <div
            className="right-div-of-welcome-section-main-div flex flex-col w-[48%] items-start justify-center gap-5 max-lg3:gap-3 media-max-900:w-full media-max-900:items-center "
          >
            <span className=" text-base underline jost_regular font-bold text-black media-max-900:w-full media-max-900:text-center max-md:text-sm">
              Welcome
            </span>
            <h3 className="w-full text-4xl jost_regular font-bold  media-max-900:text-center max-md:text-3xl">
              Transform Your
            </h3>
            <h3 className="w-full text-6xl text-bg_color_primary allison_regular media-max-900:text-center max-md:text-5xl">
              Mental Health
            </h3>
            <p className="w-full text-base text-gray-700 max-xlg2:w-10/12 max-xlg3:w-11/12 media-max-900:w-full media-max-900:text-justify max-md:text-sm">
              Located in New York, NY, Mindthera specializes in providing
              top-notch psychotherapy services. Our team of experienced
              professionals is dedicated to helping you achieve mental wellness
              and personal growth. Trust Mindthera for all your psychotherapy
              needs.
            </p>
            <div className="flex w-full items-start justify-start gap-8 media-max-900:justify-between media-max-900:items-center media-max-900:mt-4 media-max-1050:flex-col media-max-900:flex-row">
              <ul className=" min-w-fit  flex flex-col items-start justify-center gap-1">
                <li className="text-sm font-bold flex max-md:text-xs">
                  <span className="mr-2 text-lg text-bg_color_primary max-md:text-base">
                    <FaCheck />
                  </span>
                  Ut cupidatat veniam cillum.
                </li>
                <li className="text-sm font-bold flex max-md:text-xs">
                  <span className="mr-2 text-lg text-bg_color_primary max-md:text-base">
                    <FaCheck />
                  </span>
                  Ex labore dolore eiusmod aliquip.
                </li>
                <li className="text-sm font-bold flex max-md:text-xs">
                  <span className="mr-2 text-lg text-bg_color_primary max-md:text-base">
                    <FaCheck />
                  </span>
                  Culpa exercitation.
                </li>
                <li className="text-sm font-bold flex max-md:text-xs">
                  <span className="mr-2 text-lg text-bg_color_primary max-md:text-base">
                    <FaCheck />
                  </span>
                  Lorem ipsum elit sed commodo amet.
                </li>
              </ul>
              <ul className="  flex flex-col items-start justify-center gap-1">
                <li className=" text-xl font-black jost_regular max-md:text-lg">Execelent</li>
                <li className=" text-lg text-yellow-400 font-black flex max-md:text-base">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </li>
                <li className=" text-sm text-gray-700 max-lg4:text-xs  ">
                  Based on <b>185 reviews</b>
                </li>
                <li>
                  <img
                  className=" max-md:w-16 "
                    width="90"
                    src="https://themewant.com/products/wordpress/mindthera/wp-content/uploads/2024/06/trustpilot-invert-1.webp"
                    alt=""
                  />
                </li>
              </ul>
            </div>
            <button className=" jost_regular text-white border-none rounded-3xl text-center bg-bg_color_primary px-6 py-2 text-sm font-bold cursor-pointer select-none hover:underline media-max-900:mt-6 max-md:text-xs">
              About us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSec;
