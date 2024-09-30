import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.scss";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import HeaderContent from "../header_content";

function SwiperApp() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={500}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className=" w-full h-[610px] flex items-center justify-center"
      >
        <SwiperSlide className="first-swiper w-full bg-center bg-no-repeat bg-cover flex items-center justify-center relative">
          <HeaderContent />
        </SwiperSlide>
        <SwiperSlide className="second-swiper w-full bg-center bg-no-repeat bg-cover flex items-center justify-center relative">
          <HeaderContent />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default SwiperApp;
