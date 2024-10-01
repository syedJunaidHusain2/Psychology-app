import React from "react";
import CountUp from "react-countup";

const IncreaseCounter = () => {
  return (
    // flex justify-evenly md:flex flex-wrap  lg:flex items-center
    <div className="bg-bg_color_primary">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-4 p-16 max-md:grid-cols-2 gap-y-8 px-1 ">
          <div className="flex flex-col items-center justify-center md:ml-5">
            <span className="text-h2 max-md:text-[25px]   text-white font-bold">
              <CountUp start={0} end={973} suffix=" +" duration={2} />
            </span>
            <span className="text-p2 max-md:text-[10px] font-bold">Happy Customer</span>
          </div>
          <div className="flex flex-col items-center md:ml-5">
            <span className="text-h2 max-md:text-[25px] text-white font-bold">
              <CountUp start={0} end={897} suffix=" +" duration={2} />
            </span>
            <span className="text-p2 max-md:text-[10px] font-bold">Successfull Therapy</span>
          </div>
          <div className="flex flex-col items-center md:ml-5">
            <span className="text-h2 max-md:text-[25px] text-white font-bold">
              <CountUp start={0} end={20} suffix=" +" duration={2} />
            </span>
            <span className="text-p2 max-md:text-[10px] font-bold">Years Of Experience </span>
          </div>
          <div className="flex flex-col items-center md:ml-5">
            <span className="text-h2 max-md:text-[25px]  text-white font-bold">
              <CountUp start={0} end={15} suffix=" +" duration={2} />
            </span>
            <span className="text-p2 max-md:text-[10px] font-bold">Specialist</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncreaseCounter;
