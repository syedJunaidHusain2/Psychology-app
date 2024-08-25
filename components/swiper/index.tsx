import React, { memo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import laughImg1 from "../../public/laugh_images/1.svg";
import laughImg2 from "../../public/laugh_images/2.svg";
import laughImg3 from "../../public/laugh_images/3.svg";
import laughImg4 from "../../public/laugh_images/4.svg";
import laughImg6 from "../../public/laugh_images/6.svg";
import laughImg7 from "../../public/laugh_images/7.svg";
import laughImg8 from "../../public/laugh_images/8.svg";
import laughImg9 from "../../public/laugh_images/9.svg";
import laughImg10 from "../../public/laugh_images/10.svg";
import "./styles.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function SwiperApp() {
  const [laughImages] = useState([
    laughImg6,
    laughImg8,
    laughImg9,
    laughImg10,
    laughImg1,
    laughImg2,
    laughImg3,
    laughImg4,
  ]);
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
        className="mySwiper"
      >
        <SwiperSlide className="second-swiper">
          <img
            className="img1"
            src="https://themewant.com/products/wordpress/mindthera/wp-content/uploads/2024/06/flowers-crop.webp"
            alt=""
          />
          <img
            className="img2"
            src="https://themewant.com/products/wordpress/mindthera/wp-content/uploads/2024/06/flowers-crop.webp"
            alt=""
          />
          <img className="img3" src={laughImg7.src} alt="" />
        </SwiperSlide>
        <SwiperSlide className="first-swiper">
          {laughImages.map((imgs, i) => {
            return (
              <img
                src={imgs.src}
                key={i}
                className={`laugh-img${i + 1}`}
                alt=""
              />
            );
          })}
        </SwiperSlide>
      </Swiper>
    </>
  );
}
