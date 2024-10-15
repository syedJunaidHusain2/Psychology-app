import React, { useState } from "react";
import "./Pricind.css";
import PricingComp from "@/app/components/pricingComp";

const PricingSec = () => {
  // const [pricingData, setpricingData] = useState('')
  const pricingData = [
    {
      title: "Individual Therapy",
      pricing: "699",
      description:
        "Dolor laborum ex ut labore officia cupidatat ullamco anim veniam sunt enim aliquip duis dolor anim reprehenderit nulla nostrud.",
      image: "patient_three.jpg",
      color: "bg_color_primary",
    },
    {
      title: "Couples Counseling",
      pricing: "$180",
      description:
        "Dolor laborum ex ut labore officia cupidatat ullamco anim veniam sunt enim aliquip duis dolor anim reprehenderit nulla nostrud.",
      image: "patient_four.jpg",
      color: "bg_color_primary",
    },
    {
      title: "Career Counseling",
      pricing: "$190",
      description:
        "Dolor laborum ex ut labore officia cupidatat ullamco anim veniam sunt enim aliquip duis dolor anim reprehenderit nulla nostrud.",
      image: "patient_five.jpg",
      color: "bg_color_primary",
    },
  ];
  return (
    <div className="bg-bottom bg-cover bg-no-repeat w-full" style={{ backgroundImage: "url('/images/forest_image_three.jpg')" }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="w-full h-full sm:bg-cover bg-inherit bg-bottom bg-no-repeat">
          <div className=" md:px-10 sm:px-12 px-6  py-20 min-h-screen mx-auto">
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
              <div className="text-center text-white text-p max-md:w-48   font-medium">
                Qui culpa qui consequat officia cillum quis irure aliquip ut
                dolore sit eu culpa ut irure nisi occaecat dolore adipisicing do
                pariatur.
              </div>
              <div className=" max-md:flex-wrap max-lg:flex-wrap flex gap-6 mt-12">
                {pricingData.map((data, id) => {
                  return (
                    <PricingComp
                      key={id}
                      title={data.title}
                      pricing={data.pricing}
                      description={data.description}
                      image={data.image}
                      color={data.color}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSec;
