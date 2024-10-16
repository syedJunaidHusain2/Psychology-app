import React from "react";
import "./styles.scss";
function IndividualSec() {
  return (
    <>
      <section className="individual-therapy-section-main-div w-full flex items-center justify-center bg-center bg-cover bg-no-repeat bg-fixed ">
        <div
          style={{ maxWidth: 1400 }}
          className="first-div-of-individual-therapy-section w-full flex items-start justify-center pt-28 pb-28 media-max-400:py-14 "
        >
          <div
            style={{ width: "84%" }}
            className="flex items-center justify-between media-max-400:flex-col"
          >
            <div className="profile-img-and-name-div-of-first-div-of-individual-therapy-section flex w-1/5 flex-col items-center justify-center gap-2 media-max-400:w-full">
              <img
                src={"/individual_first_profile_img.jpg"}
                className=" w-full rounded-full media-max-400:w-1/3"
                alt=""
              />
              <span className=" text-p2 font-bold media-max-778:text-center max-md:text-sm">Jeffery Mussman</span>
              <span className=" text-btnSize text-white media-max-680:text-center max-md:text-xs">
                Individual Therapy
              </span>
            </div>
            <p className="p-of-first-div-of-individual-therapy-section text-justify text-white w-3/4 text-6xl font-medium jost_regular allison_regular media-max-900:text-5xl max-md:text-4xl media-max-400:w-full">
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
