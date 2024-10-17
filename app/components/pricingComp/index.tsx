import React from "react";
import Image from "next/image";
import { TiTick } from "react-icons/ti";


// Define the prop types for PricingComp
type PricingCompProps = {
  title: string;
  pricing: string;
  description: string;
  image: string;
  color: string;
};

const PricingComp: React.FC<PricingCompProps> = ({
  title,
  pricing,
  description,
  image,
  color,
}) => {
  return (
    <div className="pb-8 bg-white rounded-xl">
      <div
        className={`lg:h-14 w-full bg-${color} pb-2 rounded-t-xl text-white text-h4 pt-3 pl-4`}
      >
        {title}
      </div>
      <div className="flex justify-between mx-8 items-center mt-10 mb-4">
        <div>
          <div className="md:text-[10px] lg:text-[14px]">Start from</div>
          <div className="md:text-[20px] lg:text-h2  font-bold text-bg_color_primary">
            {pricing}
            <span className="md:text-[12px] lg:text-[16px] text-gray-600">
              /session
            </span>
          </div>
        </div>
        <div>
          <Image
            src={`/images/${image}`}
            alt="logo"
            width={200}
            height={200}
            className="rounded-full right-4 top-4 lg:size-16 md:right-0 media-max-480:size-16"
          />
        </div>
      </div>
      <div className="md:text-[12px] text-gray-500 lg:text-p mx-8">
        {description}
      </div>

      <div className="px-7 mt-6">
        <div className="flex items-center font-bold">
          <span className="mr-2 text-3xl text-bg_color_primary">
            <TiTick />
          </span>
          Personalized
        </div>
        <div className="flex items-center font-bold">
          <span className="mr-2 text-3xl text-bg_color_primary">
            <TiTick />
          </span>
          Confidential
        </div>
        <div className="flex items-center font-bold">
          <span className="mr-2 text-3xl text-bg_color_primary">
            <TiTick />
          </span>
          Effective
        </div>
      </div>
      <div className="px-8 mt-8">
        <button className="w-full rounded-full relative px-8 py-2 bg-white isolation-auto z-10 border-2 border-[#008000] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#008000]  before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">
        Make Appoinment
        </button>
      </div>
    </div>
  );
};

export default PricingComp;