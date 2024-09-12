"use client";
import Navbar from "@/components/navbar";
import SwiperApp from "@/components/swiper";
import "./style.css";
import PricingSec from "./pricingSec";
import QuestionSec from "./questionSec";
import BottomSec from "./bottomSec";
import Footer from "./footer";
import Copyright from "./copyright";
import TeamSec from "./teamSec";
import IncreaseCounter from "../../components/increaseCounter";
import TherapistAndTreatment from "@/components/therapist_and_treatments";
import WelcomeSec from "@/components/welcome_section";
import IndividualSec from "@/components/individual_therapy";
import SwiperApp2 from "@/components/swiper2";
const Home = () => {
  return (
    <NextUIProvider>

  
    <div className="home">
      <Navbar />
      <SwiperApp />
      <section className="welcome-section-main-div flex min-h-screen w-full items-center justify-center gap-10">
        <div className="left-div-of-welcome-section-main-div flex w-2/4 items-center justify-end gap-5 ">
          <div className="first-img-div-of-welcome-section-main-div flex items-end justify-end flex-col gap-5 mt-9">
            <img
              className={`rounded-xl ${scrollCon1.img3Class}`}
              width="180px"
              src={img3.src}
              alt=""
            />
            <img
              className={`rounded-xl ${scrollCon1.img4Class}`}
              width="270px"
              src={img4.src}
              alt=""
            />
          </div>
          <div className="second-img-div-of-welcome-section-main-div flex flex-col items-start justify-start gap-5 mb-9">
            <img
              className={`rounded-xl ${scrollCon1.img5Class}`}
              width="270px"
              src={img5.src}
              alt=""
            />
            <img
              className={`rounded-xl ${scrollCon1.img6Class}`}
              width="180px"
              src={img6.src}
              alt=""
            />
          </div>
        </div>
        <div className="right-div-of-welcome-section-main-div flex w-2/4 flex-col items-start justify-center gap-2 ">
          <span className="rounded-full bg-green-200 px-5 py-1 jost_regular font-bold text-black">
            Welcome
          </span>
          <h3 className="w-full text-4xl jost_regular font-bold">
            Transform Your
          </h3>
          <h3 className="w-full text-6xl text-bg_color_primary allison_regular">
            Mental Health
          </h3>
          <p className="w-3/4 text-base text-gray-700">
            Located in New York, NY, Mindthera specializes in providing
            top-notch psychotherapy services. Our team of experienced
            professionals is dedicated to helping you achieve mental wellness
            and personal growth. Trust Mindthera for all your psychotherapy
            needs.
          </p>
          <div className="flex w-full items-start justify-start gap-8">
            <ul className=" min-w-fit  flex flex-col items-start justify-center">
              <li className="text-sm font-bold">
                <span className="mr-2 text-lg text-bg_color_primary">O</span>Ut
                cupidatat veniam cillum.
              </li>
              <li className="text-sm font-bold">
                <span className="mr-2 text-lg text-bg_color_primary">O</span>Ex
                labore dolore eiusmod aliquip.
              </li>
              <li className="text-sm font-bold">
                <span className="mr-2 text-lg text-bg_color_primary">O</span>
                Culpa exercitation.
              </li>
              <li className="text-sm font-bold">
                <span className="mr-2 text-lg text-bg_color_primary">O</span>
                Lorem ipsum elit sed commodo amet.
              </li>
            </ul>
            <ul className="  flex flex-col items-start justify-center gap-1">
              <li className=" text-xl font-black jost_regular">Execelent</li>
              <li className=" text-lg text-yellow-400 font-black">OOOOO</li>
              <li className=" text-sm text-gray-700">
                Based on <b>185 reviews</b>
              </li>
              <li>
                <img
                  width="90"
                  src="https://themewant.com/products/wordpress/mindthera/wp-content/uploads/2024/06/trustpilot-invert-1.webp"
                  alt=""
                />
              </li>
            </ul>
          </div>
          <button className=" jost_regular text-white border-none rounded-3xl text-center bg-bg_color_primary px-6 py-2 text-sm font-bold cursor-pointer select-none hover:text-black hover:bg-green-200">
            About us
          </button>
        </div>
      </section>
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
      <TherapistAndTreatment /> 
      <IncreaseCounter/>
      <TeamSec/>
      <PricingSec />
      <QuestionSec />
      <BottomSec />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Home;
