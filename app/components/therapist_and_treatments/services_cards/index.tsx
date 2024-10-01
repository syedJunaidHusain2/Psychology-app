import React, { useState } from "react";
import "./style.css";
import { servicesCardContent } from "../../../data/ServicesCardData";

function ServicesCard() {
  const [servicesCardContentData] = useState(servicesCardContent);
  return (
    <>
      {servicesCardContentData &&
        servicesCardContentData.map((s, i) => {
          return (
            <div
              key={i}
              className="services-card flex flex-col items-start justify-center gap-4"
            >
              <div className="relative w-full flex items-center justify-center overflow-hidden rounded-2xl group">
                <img
                  src={s.img.src}
                  alt="img"
                  width={"100%"}
                  className="rounded-2xl transition-transform duration-500 ease-in-out transform group-hover:scale-125"
                />
                <button className="jost_regular bg-bg_color_primary py-3 px-5 rounded-full text-sm font-bold text-white absolute items-center justify-center hidden hover:underline transition-all group-hover:flex">
                  Get Started
                </button>
              </div>

              <h5 className=" text-h4 jost_regular font-medium">{s.name}</h5>
              <p className="jost_regular text-p">{s.para}</p>
            </div>
          );
        })}
    </>
  );
}

export default ServicesCard;
