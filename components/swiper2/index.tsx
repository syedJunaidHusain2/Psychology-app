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
  const [bgCon, setBgCon] = useState({ h: 610, cov_con: "bg-cover" });
  const changeBgConFunc = () => {
    if (screen.width < 1400 && screen.width > 1300) {
      setBgCon({ h: 520, cov_con: "bg-contain" });
    } else if (screen.width < 1300 && screen.width > 1200) {
      setBgCon({ h: 490, cov_con: "bg-contain" });
    } else if (screen.width < 1200) {
      setBgCon({ h: 430, cov_con: "bg-contain" });
    } else if (screen.width > 1400) {
      setBgCon({ h: 610, cov_con: "bg-cover" });
    }
  };
  useEffect(() => {
    changeBgConFunc();
    window.addEventListener("resize", changeBgConFunc);
  }, []);
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
        style={{ height: bgCon.h }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className=" w-full flex items-center justify-center"
      >
        <SwiperSlide
          className={`first-swiper-1 swiper-slide-2 w-full bg-no-repeat bg-center ${bgCon.cov_con}  items-center justify-center relative`}
        >
          <HeadDoctorContent t={t} />
        </SwiperSlide>
        <SwiperSlide
          className={`second-swiper-2 swiper-slide-2 w-full bg-no-repeat bg-center ${bgCon.cov_con}  items-center justify-center relative`}
        >
          <HeadDoctorContent t={t} />
        </SwiperSlide>
        <SwiperSlide
          className={`third-swiper-3 swiper-slide-2 w-full bg-no-repeat bg-center ${bgCon.cov_con}  items-center justify-center relative`}
        >
          <HeadDoctorContent t={t} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default SwiperApp2;
