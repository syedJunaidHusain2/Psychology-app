import React from "react";
import { MdOutlineWatchLater, MdLocationOn, MdCall } from "react-icons/md";

function DetailAndInfoBox() {
  return (
    <main className=" w-full flex items-center justify-center">
      <div className="detail-and-info-box-container  w-full flex items-center justify-center">
        <div className=" detail-and-info-box  w-full flex items-center justify-center text-white media-max-480:flex-col">
          <div className="timing-div-of-detail-and-info-box w-1/3 bg-bg_color_primary flex flex-col items-start justify-center gap-6 p-8 media-max-608:p-0 media-max-608:pl-2 media-max-608:min-h-32 media-max-480:w-full media-max-480:items-center media-max-480:gap-2 media-max-480:min-h-0 media-max-480:p-0">
            <span className=" text-5xl max-md:text-4xl">
              <MdOutlineWatchLater />
            </span>
            <div className="detail-div-of-timing-div-of-detail-and-info-box flex items-start justify-center flex-col gap-2 text-base max-md:text-sm media-max-480:items-center media-max-480:gap-0">
              <span>Mon - Sat: 8AM - 9PM</span>
              <span>Sunday: 10AM - 8PM</span>
            </div>
          </div>
          <div className="address-div-of-detail-and-info-box w-1/3  text-black bg-bg_color_tertiary  flex flex-col items-start justify-center gap-6 p-8 media-max-608:p-0 media-max-608:pl-2 media-max-608:min-h-32 media-max-480:w-full media-max-480:items-center media-max-480:gap-2 media-max-480:min-h-0 media-max-480:p-0">
            <span className=" text-5xl max-md:text-4xl">
              <MdLocationOn />
            </span>
            <div className="detail-div-of-address-div-of-detail-and-info-box flex items-start justify-center flex-col gap-2 text-base max-md:text-sm media-max-480:items-center media-max-480:gap-0">
              <span>789 Elm Avenue</span>
              <span>Brooklyn, NY 11201</span>
            </div>
          </div>
          <div className="contact-div-of-detail-and-info-box w-1/3 flex bg-bg_color_secendory flex-col items-start justify-center gap-6 p-8 media-max-608:p-0 media-max-608:pl-2 media-max-608:min-h-32 media-max-480:w-full media-max-480:items-center media-max-480:gap-2 media-max-480:min-h-0 media-max-480:p-0">
            <span className=" text-5xl max-md:text-4xl">
              <MdCall />
            </span>
            <div className="detail-div-of-contact-div-of-detail-and-info-box flex items-start justify-center flex-col gap-2 text-base max-md:text-sm media-max-480:items-center media-max-480:gap-0">
              <span>+929 333 9296</span>
              <span>contact@mindthera.com</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default DetailAndInfoBox;
