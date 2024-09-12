import React from "react";
import ServicesCard from "./services_cards";
function TherapistAndTreatment() {
  return (
    <section
      className=" w-full therapist-and-treatments-sec flex flex-col items-center justify-center  pt-20 pb-20
    
    "
    >
      <div
        style={{ maxWidth: 1400 }}
        className=" w-full flex flex-col items-center justify-center "
      >
        <div
          style={{ width: "82%" }}
          className=" flex flex-col items-center justify-center gap-2"
        >
          <div className="heading-div-of-therapist-and-treatments-sec flex items-center justify-center flex-col">
            <span className="services-span-of-heading-div-of-therapist-and-treatments-sec text-base font-extrabold underline jost_regular ">
              Our Services
            </span>
            <h3 className="h3-of-heading-div-of-therapist-and-treatments-sec flex items-baseline justify-center gap-4">
              <b className=" text-h2 font-semibold">Therapist &</b>
              <b className=" text-bg_color_primary text-h1 font-light allison_regular">
                Treatments
              </b>
            </h3>
          </div>
          <p className="p-of-therapist-and-treatments-sec text-center text-p w-[550px]  font-medium">
            Qui culpa qui consequat officia cillum quis irure aliquip ut dolore
            sit eu culpa ut irure nisi occaecat dolore adipisicing do pariatur.
          </p>
          <div className="services-details-div-of-therapist-and-treatments-sec w-full flex items-baseline justify-center flex-wrap gap-x-5 gap-y-10 mt-10 ">
            <ServicesCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TherapistAndTreatment;
