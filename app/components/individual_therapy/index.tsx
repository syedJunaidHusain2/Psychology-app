import React from "react";
import "./styles.scss";
function IndividualSec() {
  return (
    <>
      <section className="individual-therapy-section-main-div w-full flex items-center justify-center bg-center bg-cover bg-no-repeat bg-fixed ">
        <div
          style={{ maxWidth: 1400 }}
          className="first-div-of-individual-therapy-section w-full flex items-start justify-center pt-28 pb-28"
        >
          <div
            style={{ width: "84%" }}
            className="flex items-center justify-between"
          >
            <div className="profile-img-and-name-div-of-first-div-of-individual-therapy-section flex w-1/5 flex-col items-center justify-center gap-2">
              <img
                src={"/individual_first_profile_img.jpg"}
                className=" w-full rounded-full"
                alt=""
              />
              <span className=" text-p2 font-bold">Jeffery Mussman</span>
              <span className=" text-btnSize text-white">
                Individual Therapy
              </span>
            </div>
            <p className="p-of-first-div-of-individual-therapy-section text-justify text-white w-3/4 text-3xl leading-h2 font-extrabold jost_regular">
              Mindthera is exceptional! Their psychologists are highly
              professional and caring. The atmosphere is welcoming and calming,
              and the staff provides outstanding support. Thank you, Mindthera,
              for your excellent service!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default IndividualSec;
