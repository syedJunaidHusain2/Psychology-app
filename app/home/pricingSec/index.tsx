import PricingComp from "@/components/pricingComp";
import React, { useState } from "react";
import Image from "next/image";
import { url } from "inspector";

import "./Pricind.css";

const PricingSec = () => {
  // const [pricingData, setpricingData] = useState('')
  const pricingData = [
    {
      title: "Individual Therapy",
      pricing: "$150",
      description:
        "Dolor laborum ex ut labore officia cupidatat ullamco anim veniam sunt enim aliquip duis dolor anim reprehenderit nulla nostrud.",
      image: "patient_one.jpg",
    },
    {
      title: "Couples Counseling",
      pricing: "$180",
      description:
        "Dolor laborum ex ut labore officia cupidatat ullamco anim veniam sunt enim aliquip duis dolor anim reprehenderit nulla nostrud.",
      image: "patient_one.jpg",
    },
    {
      title: "Career Counseling",
      pricing: "$190",
      description:
        "Dolor laborum ex ut labore officia cupidatat ullamco anim veniam sunt enim aliquip duis dolor anim reprehenderit nulla nostrud.",
      image: "patient_one.jpg",
    },
  ];
  return (
    <div className="h-[120vh] w-full ">
      <div className="bg_image relative">
        <div className=" px-28 py-20 absolute left-0 right-0 mx-auto">
          <div className="flex flex-col justify-center items-center ">
            <div className="bg-gray-700 bg-opacity-50 text-white text-center text-btnSize font-btnSize inline-flex px-4 py-2 rounded-full">
              Our pakage
            </div>
            <div className="text-center text-white text-h2 font-semibold">
              Prcing{" "}
              <span className="text-bg_color_primary text-h1 font-light allison_regular">
                Plans
              </span>
            </div>
            <div className="text-center text-white text-p w-[550px]  font-medium">
              Qui culpa qui consequat officia cillum quis irure aliquip ut
              dolore sit eu culpa ut irure nisi occaecat dolore adipisicing do
              pariatur.
            </div>
            <div className="flex gap-6 mt-12">
              {pricingData.map((data, id) => {
                return (
                  <PricingComp
                    title={data.title}
                    pricing={data.pricing}
                    description={data.description}
                    image={data.image}
                  />
                );
              })}
            </div>
            <div className="test"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSec;
