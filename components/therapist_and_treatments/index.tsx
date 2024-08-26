import React from "react";
import ServicesCard from "./services_cards";
function TherapistAndTreatment() {
  return (
    <section className="therapist-and-treatments-sec min-h-screen flex flex-col items-center justify-center gap-2 pt-20 pb-20">
      <div className="heading-div-of-therapist-and-treatments-sec flex items-center justify-center flex-col">
        <span className="services-span-of-heading-div-of-therapist-and-treatments-sec bg-green-200 font-btnSize p-2 rounded-full">
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
        Qui culpa qui consequat officia cillum quis irure aliquip ut dolore sit
        eu culpa ut irure nisi occaecat dolore adipisicing do pariatur.
      </p>
      <div className="services-details-div-of-therapist-and-treatments-sec w-3/4 flex items-baseline justify-center flex-wrap gap-5 mt-10 ">
<ServicesCard />
      </div>
    </section>
  );
}

export default TherapistAndTreatment;
