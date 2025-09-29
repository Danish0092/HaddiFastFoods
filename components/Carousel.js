"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";

const images = [
  "/banners/banner1.png",
  "/banners/banner2.png",
  "/banners/banner3.jpg",
  "/banners/banner4.jpg",
];

const Carousel = () => {
  return (
    <div className="bg-neutral-900 mt-10 py-2 sm:py-10 sm:h-[90vh]">

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="w-full h-40  sm:h-11/12"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} alt={`banner-${i}`} className="w-full h-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
