import React, { useEffect, useState } from "react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.scss";
import HeadDoctorContent from "../head-doctor-content";
function SwiperApp2() {
  let t = "hi";
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={500}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="w-full flex items-center justify-center h-[610px] max-xlg5:h-[500px]"
      >
        <SwiperSlide
          className={`first-swiper-1 swiper-slide-2 w-full bg-no-repeat bg-center bg-cover items-center justify-center relative max-xlg2:bg-contain`}
        >
          <HeadDoctorContent t={t} />
        </SwiperSlide>
        <SwiperSlide
          className={`second-swiper-2 swiper-slide-2 w-full bg-no-repeat bg-center bg-cover  items-center justify-center relative max-xlg2:bg-contain`}
        >
          <HeadDoctorContent t={t} />
        </SwiperSlide>
        <SwiperSlide
          className={`third-swiper-3 swiper-slide-2 w-full bg-no-repeat bg-center bg-cover  items-center justify-center relative max-xlg2:bg-contain`}
        >
          <HeadDoctorContent t={t} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default SwiperApp2;
