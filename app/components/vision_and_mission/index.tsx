"use client";
import React, { useState } from "react";
import { visionAndMissionContent } from "../../data/Vision&MissionData";
function VisionAndMission() {
  const [visionAndMissionContentData] = useState(visionAndMissionContent);
  return (
    <main className=" w-full flex items-center justify-center py-16">
      <div className="vision-and-mission-container max-w-[1400px] w-full flex items-center justify-center">
        <div className="vision-and-mission w-[82%] flex items-center justify-between flex-col gap-8">
          <div className="top-div-of-vision-and-mission w-full flex flex-col items-center justify-center gap-4">
            <span className=" text-base underline jost_regular font-bold text-black">
              Vision & Mission
            </span>
            <h3 className=" text-4xl jost_regular font-bold">
              Vision & Mission
            </h3>
          </div>
          <div className="bottom-div-of-vision-and-mission w-full flex items-start justify-between">
            <div className="left-div-of-bottom-div-of-vision-and-mission w-[48%] flex flex-col items-start justify-center gap-4">
              <span className=" text-base underline jost_regular font-bold text-black">
                Our Vision
              </span>
              <p className="w-full  text-base text-gray-700 max-xlg2:w-10/12 max-xlg3:w-11/12 text-justify">
                Located in New York, NY, Mindthera specializes in providing
                top-notch psychotherapy services. Our team of experienced
                professionals is dedicated to helping you achieve mental
                wellness and personal growth. Trust Mindthera for all your
                psychotherapy needs.
              </p>
            </div>
            <div className="right-div-of-bottom-div-of-vision-and-mission w-[48%] flex flex-col items-start justify-center gap-4">
              <span className=" text-base underline jost_regular font-bold text-black">
                Our Mission
              </span>
              <ul className=" flex flex-col items-start justify-center gap-2 w-full">
                {visionAndMissionContentData &&
                  visionAndMissionContentData.map((d, i) => {
                    return (
                      <li className=" flex items-start justify-start gap-2 w-full relative">
                        <span className=" absolute h-8 w-8 rounded-[50%] flex items-center justify-center bg-bg_color_secendory">
                          {i + 1}
                        </span>

                        <p className=" ml-12 text-justify">
                          <span className=" text-bg_color_primary text-base">
                            {d._name + " "}
                          </span>
                          <span className=" text-base text-gray-700">
                            {" " + d._para}
                          </span>
                        </p>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default VisionAndMission;
