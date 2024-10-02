import React from "react";
import ServicesCard from "./services_cards";
function TherapistAndTreatment() {
  return (
    <section className=" w-full therapist-and-treatments-sec flex flex-col items-center justify-center py-20 bg-green-100">
      <div
        style={{ maxWidth: 1400 }}
        className=" w-full flex flex-col items-center justify-center "
      >
        <div
          style={{ width: "84%" }}
          className=" flex flex-col items-center justify-center gap-2 max-md:gap-4"
        >
          <div className="heading-div-of-therapist-and-treatments-sec flex items-center justify-center flex-col max-md:gap-4">
            <span className="services-span-of-heading-div-of-therapist-and-treatments-sec text-base font-extrabold underline jost_regular max-md:text-sm ">
              Our Services
            </span>
            <h3 className="h3-of-heading-div-of-therapist-and-treatments-sec flex items-baseline justify-center gap-4">
              <b className=" text-h2 font-semibold max-md:text-3xl">Therapist &</b>
              <b className=" text-bg_color_primary text-h1 font-light allison_regular max-md:text-5xl">
                Treatments
              </b>
            </h3>
          </div>
          <p className="p-of-therapist-and-treatments-sec text-center text-p w-full  font-medium  max-md:text-sm">
            Qui culpa qui consequat officia cillum quis irure aliquip ut dolore
            sit eu culpa ut irure nisi occaecat dolore adipisicing do pariatur.
          </p>
          <div className="services-details-div-of-therapist-and-treatments-sec w-full flex items-baseline justify-center flex-wrap gap-x-5 gap-y-10 mt-10 media-max-594:gap-0 media-max-594:items-center media-max-594:justify-between media-max-594:gap-y-8 ">
            <ServicesCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TherapistAndTreatment;
