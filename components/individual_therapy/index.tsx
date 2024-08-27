import React from "react";
import individualFirstProfileImg from "../../public/individual_first_profile_img.jpg";
import "./style.css"
function IndividualSec() {
  return (
    <>
      <section className="individual-therapy-section-main-div w-full flex items-center justify-center">
        <div className="first-div-of-individual-therapy-section w-full flex items-start justify-center gap-14 pt-28 pb-28">
          <div className="profile-img-and-name-div-of-first-div-of-individual-therapy-section flex flex-col items-center justify-center gap-2">
            <img
              src={individualFirstProfileImg.src}
              width={180}
              className=" rounded-full"
              alt=""
            />
            <span className=" text-p2 font-bold">Jeffery Mussman</span>
            <span className=" text-btnSize text-white">Individual Therapy</span>
          </div>
          <p className="p-of-first-div-of-individual-therapy-section text-white w-1/2 text-3xl leading-h2 font-extrabold jost_regular">
            Mindthera is exceptional! Their psychologists are highly
            professional and caring. The atmosphere is welcoming and calming,
            and the staff provides outstanding support. Thank you, Mindthera,
            for your excellent service!
          </p>
        </div>
      </section>
    </>
  );
}

export default IndividualSec;
