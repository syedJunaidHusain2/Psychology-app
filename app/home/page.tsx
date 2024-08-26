"use client";
import Navbar from "@/components/navbar";
import SwiperApp from "@/components/swiper";
import img3 from "../../public/welcome_sec_images/img3.jpg";
import img4 from "../../public/welcome_sec_images/img4.jpg";
import img5 from "../../public/welcome_sec_images/img5.jpg";
import img6 from "../../public/welcome_sec_images/img6.jpg";
import "./style.css";
// import HomeSection from ".";x
import PricingSec from "./pricingSec";
import QuestionSec from "./questionSec";
import BottomSec from "./bottomSec";
import Footer from "./footer";
import Copyright from "./copyright";
import TeamSec from "./teamSec";
import IncreaseCounter from "@/components/increaseCounter";
const Home = () => {
  return (
    <div className="home">
      {/* <Navbar /> */}
      {/* <SwiperApp /> */}
      {/* <main className="flex min-h-screen w-full items-center justify-center gap-10">
        <div className="flex w-2/4 items-center justify-end gap-5 ">
          <div className="flex items-end justify-end flex-col gap-5 mt-9">
            <img className="rounded-xl" width="180px" src={img3.src} alt="" />
            <img className="rounded-xl" width="270px" src={img4.src} alt="" />
          </div>
          <div className="flex flex-col items-start justify-start gap-5 mb-9">
            <img className="rounded-xl" width="270px" src={img5.src} alt="" />
            <img className="rounded-xl" width="180px" src={img6.src} alt="" />
          </div>
        </div>
        <div className="flex w-2/4 flex-col items-start justify-center gap-2 ">
          <span className="rounded-full bg-green-200 px-5 py-1 font-bold text-black">
            Welcome
          </span>
          <h3 className="w-full text-4xl font-bold">Transform Your</h3>
          <h3 className="w-full text-6xl text-bg_color_primary">Mental Health</h3>
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
                <span className="mr-2 text-lg text-bg_color_primary">O</span>Ex labore
                dolore eiusmod aliquip.
              </li>
              <li className="text-sm font-bold">
                <span className="mr-2 text-lg text-bg_color_primary">O</span>Culpa
                exercitation.
              </li>
              <li className="text-sm font-bold">
                <span className="mr-2 text-lg text-green-700">O</span>Lorem
                ipsum elit sed commodo amet.
              </li>
            </ul>
            <ul className="  flex flex-col items-start justify-center gap-1">
              <li className=" text-xl font-black">Execelent</li>
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
          <button className=" bg-green-900 text-white text-sm font-bold py-2 px-7 rounded-full">
            About us
          </button>
        </div>
      </main> */}
      {/* <IncreaseCounter/> */}
      {/* <TeamSec/> */}
      <PricingSec />
      <QuestionSec />
      <BottomSec />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Home;
