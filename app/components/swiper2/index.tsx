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
    <div className=" swiper-2 w-full flex items-center justify-center">
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
        className="w-full flex items-center justify-center h-[610px] max-xlg2:h-[470px] media-max-900:h-[410px] media-max-812:h-[350px] media-max-712:h-[300px] max-sm:h-[250px]"
  
      >
        <SwiperSlide
          className={`first-swiper-1 swiper-slide-2 w-full flex bg-no-repeat bg-center bg-cover items-center justify-center relative `}
        >
          <HeadDoctorContent t={t} />
        </SwiperSlide>
        <SwiperSlide
          className={`second-swiper-2 swiper-slide-2 w-full flex bg-no-repeat bg-center bg-cover  items-center justify-center relative `}
        >
          <HeadDoctorContent t={t} />
        </SwiperSlide>
        <SwiperSlide
          className={`third-swiper-3 swiper-slide-2 w-full flex bg-no-repeat bg-center bg-cover  items-center justify-center relative `}
        >
          <HeadDoctorContent t={t} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default SwiperApp2;
