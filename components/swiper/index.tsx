import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import HeaderContent from "../header_content";

export default function SwiperApp() {
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
        className="mySwiper w-full"
      >
        <SwiperSlide className="second-swiper">
          <HeaderContent/>
        </SwiperSlide>
        <SwiperSlide className="first-swiper"><HeaderContent/></SwiperSlide>
      </Swiper>
    </>
  );
}
