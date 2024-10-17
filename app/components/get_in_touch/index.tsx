import Image from "next/image";
import React from "react";
import {
  IoLocationOutline,
  IoMailOutline,
  IoCallOutline,
} from "react-icons/io5";
import ContactForm from "../contact_form";

function GetInTouch() {
  return (
    <main className=" w-full flex items-center justify-center py-16">
      <div className="get-in-touch-container max-w-[1400px] w-full flex items-center justify-center">
        <div className="get-in-touch w-[84%] flex items-center justify-between media-max-900:flex-col media-max-900:gap-16">
          <div className="left-div-of-get-in-touch w-[48%] flex items-start justify-center flex-col gap-4 media-max-900:w-full">
            <h3 className="w-full text-4xl jost_regular font-bold max-md:text-3xl">
              Get In Touch
            </h3>
            <p className="w-full  text-base text-gray-700 text-justify max-md:text-sm">
              Whether you have a question, a suggestion, or just want to say
              hello, this is the place to do it. Please fill out the form below
              with your details and message, and we'll get back to you as soon
              as possible.
            </p>
            <div className=" w-full our-office-div-of-left-div-of-get-in-touch flex items-start justify-center flex-col gap-2">
              <span className=" text-base underline jost_regular font-bold text-black max-md:text-sm">
                Our Office
              </span>
              <div className=" w-full bottom-div-of-our-office-div-of-left-div-of-get-in-touch flex items-center justify-between media-max-494:flex-col media-max-494:gap-6">
                <div className=" w-[48%] img-div-of-bottom-div-of-our-office-div-of-left-div-of-get-in-touch relative flex items-center justify-center rounded-xl overflow-hidden media-max-494:w-full">
                  <Image
                    src={"/5-1.webp"}
                    width={100}
                    height={100}
                    alt="img"
                    className=" w-full brightness-75 media-max-494:h-40"
                  />
                  <span className=" absolute text-base bottom-4 text-white max-md:text-sm" >
                    Mon - Fri 08.00 - 18.00
                  </span>
                </div>
                <div className="info-div-of-bottom-div-of-our-office-div-of-left-div-of-get-in-touch w-[48%] flex flex-col items-start justify-center gap-4 media-max-494:w-full">
                  <div className="location-div-of-info-div-of-bottom-div-of-our-office-div-of-left-div-of-get-in-touch flex flex-col items-start justify-center">
                    <span className=" flex items-center justify-start gap-2">
                      {" "}
                      <IoLocationOutline className=" text-xl text-bg_color_primary max-md:text-lg" />{" "}
                      <span className=" text-base underline jost_regular font-bold text-black max-md:text-sm">
                        Office Location
                      </span>
                    </span>
                    <span className=" text-base text-bg_color_primary max-md:text-sm">
                      100 S Main St, Los Angeles, CA
                    </span>
                  </div>
                  <div className="email-div-of-info-div-of-bottom-div-of-our-office-div-of-left-div-of-get-in-touch flex flex-col items-start justify-center">
                    <span className=" flex items-center justify-start gap-2">
                      <IoMailOutline className=" text-xl text-bg_color_primary max-md:text-lg" />{" "}
                      <span className=" text-base underline jost_regular font-bold text-black max-md:text-sm">
                        Send a Message
                      </span>
                    </span>
                    <span className=" text-base text-bg_color_primary max-md:text-sm">
                      contact@mindthera.com
                    </span>
                  </div>
                  <div className="number-div-of-info-div-of-bottom-div-of-our-office-div-of-left-div-of-get-in-touch flex flex-col items-start justify-center">
                    <span className=" flex items-center justify-start gap-2">
                      <IoCallOutline className=" text-xl text-bg_color_primary max-md:text-lg" />{" "}
                      <span className=" text-base underline jost_regular font-bold text-black max-md:text-sm">
                        Call Us Directly
                      </span>
                    </span>
                    <span className=" text-base text-bg_color_primary max-md:text-sm">
                      +929 333 9296
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="right-div-of-get-in-touch w-[48%] flex items-start justify-center media-max-900:w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}

export default GetInTouch;
