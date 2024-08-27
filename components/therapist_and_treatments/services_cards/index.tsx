import React, { useState } from "react";
import "./style.css";
import service_sec_img1 from "../../../public/services_sec_images/service_sec_img1.jpg";
import service_sec_img2 from "../../../public/services_sec_images/service_sec_img2.jpg";
import service_sec_img3 from "../../../public/services_sec_images/service_sec_img3.jpg";
import service_sec_img4 from "../../../public/services_sec_images/service_sec_img4.jpg";
import service_sec_img5 from "../../../public/services_sec_images/service_sec_img5.jpg";
import service_sec_img6 from "../../../public/services_sec_images/service_sec_img6.jpg";
function ServicesCard() {
  const [servicesInfo] = useState([
    {
      img: service_sec_img1,
      name: "Individual Therapy",
      para: "Sint tempor consequat ad commodo nostrud occaecat ad nulla labore esse culpa non dolore pariatur fugiat.",
    },
    {
      img: service_sec_img2,
      name: "Couples Counseling",
      para: "Sint tempor consequat ad commodo nostrud occaecat ad nulla labore esse culpa non dolore pariatur fugiat.",
    },
    {
      img: service_sec_img3,
      name: "Career Counseling",
      para: "Sint tempor consequat ad commodo nostrud occaecat ad nulla labore esse culpa non dolore pariatur fugiat.",
    },
    {
      img: service_sec_img4,
      name: "Stress management",
      para: "Sint tempor consequat ad commodo nostrud occaecat ad nulla labore esse culpa non dolore pariatur fugiat.",
    },
    {
      img: service_sec_img5,
      name: "Anxiety Treatment",
      para: "Sint tempor consequat ad commodo nostrud occaecat ad nulla labore esse culpa non dolore pariatur fugiat.",
    },
    {
      img: service_sec_img6,
      name: "Depression Therapy",
      para: "Sint tempor consequat ad commodo nostrud occaecat ad nulla labore esse culpa non dolore pariatur fugiat.",
    },
  ]);
  return (
    <>
      {servicesInfo.map((s, i) => {
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
