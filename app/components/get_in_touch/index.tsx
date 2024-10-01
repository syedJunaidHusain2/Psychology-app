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
        <div className="get-in-touch w-[82%] flex items-center justify-between">
          <div className="left-div-of-get-in-touch w-[48%] flex items-start justify-center flex-col gap-4">
            <h3 className="w-full text-4xl jost_regular font-bold">
              Get In Touch
            </h3>
            <p className="w-full  text-base text-gray-700 text-justify">
              Whether you have a question, a suggestion, or just want to say
              hello, this is the place to do it. Please fill out the form below
              with your details and message, and we'll get back to you as soon
              as possible.
            </p>
            <div className=" w-full our-office-div-of-left-div-of-get-in-touch flex items-start justify-center flex-col gap-2">
              <span className=" text-base underline jost_regular font-bold text-black">
                Our Office
              </span>
              <div className=" w-full bottom-div-of-our-office-div-of-left-div-of-get-in-touch flex items-center justify-between">
                <div className=" w-[48%] img-div-of-bottom-div-of-our-office-div-of-left-div-of-get-in-touch relative flex items-center justify-center rounded-xl overflow-hidden">
                  <Image
                    src={"/5-1.webp"}
                    width={100}
                    height={100}
                    alt="img"
                    className=" w-full brightness-75"
                  />
                  <span className=" absolute text-base bottom-4 text-white">
                    Mon - Fri 08.00 - 18.00
                  </span>
                </div>
                <div className="info-div-of-bottom-div-of-our-office-div-of-left-div-of-get-in-touch w-[48%] flex flex-col items-start justify-center gap-4">
                  <div className="location-div-of-info-div-of-bottom-div-of-our-office-div-of-left-div-of-get-in-touch flex flex-col items-start justify-center">
                    <span className=" flex items-center justify-start gap-2">
                      {" "}
                      <IoLocationOutline className=" text-xl text-bg_color_primary" />{" "}
                      <span className=" text-base underline jost_regular font-bold text-black">
                        Office Location
                      </span>
                    </span>
                    <span className=" text-base text-bg_color_primary">
                      100 S Main St, Los Angeles, CA
                    </span>
                  </div>
                  <div className="email-div-of-info-div-of-bottom-div-of-our-office-div-of-left-div-of-get-in-touch flex flex-col items-start justify-center">
                    <span className=" flex items-center justify-start gap-2">
                      <IoMailOutline className=" text-xl text-bg_color_primary" />{" "}
                      <span className=" text-base underline jost_regular font-bold text-black">
                        Send a Message
                      </span>
                    </span>
                    <span className=" text-base text-bg_color_primary">
                      contact@mindthera.com
                    </span>
                  </div>
                  <div className="number-div-of-info-div-of-bottom-div-of-our-office-div-of-left-div-of-get-in-touch flex flex-col items-start justify-center">
                    <span className=" flex items-center justify-start gap-2">
                      <IoCallOutline className=" text-xl text-bg_color_primary" />{" "}
                      <span className=" text-base underline jost_regular font-bold text-black">
                        Call Us Directly
                      </span>
                    </span>
                    <span className=" text-base text-bg_color_primary">
                      +929 333 9296
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="right-div-of-get-in-touch w-[48%] flex items-start justify-center">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}

export default GetInTouch;
