"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Link from "next/link";

export default function Hero() {
  return (
    <div
      className="w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-bg.png')" }}
    >
      <div className="custom-container-2 flex items-center justify-center ">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          effect="fade"
          modules={[Pagination, EffectFade, Autoplay]}
          autoplay={{
            delay: 3000,
          }}
          className="mySwiper py-30! lg:pt-50! lg:pb-25!  h-full relative"
        >
          <SwiperSlide className="h-full">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div>
                <h1 className="text-[40px] md:text-[56px] font-semibold leading:[130%] lg:leading-16.75 text-white">
                  Florida’s Premier Auto Leasing Brokerage{" "}
                </h1>
                <p className="text-base md:text-lg mt-4 text-[#DDD]">
                  Premium luxury SUVs delivered to Gold Coast, River North,
                  Northbrook, Skokie, and Schaumburg. Enjoy fast approvals,
                  transparent leasing, and exceptional service for a seamless,
                  high-end driving experience.
                </p>
                <Link
                  href="#"
                  className="mt-6 inline-block py-3 px-6 rounded bg-Primary-Color text-white text-lg font-medium hover:opacity-[.9]"
                >
                  Start Free Consultation
                </Link>
              </div>
              <div>
                <img src="/images/car.png" className="w-full" alt="Car" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="h-full">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div>
                <h1 className="text-[40px] md:text-[56px] font-semibold leading:[130%] lg:leading-16.75 text-white">
                  Florida’s Premier Auto Leasing Brokerage 2{" "}
                </h1>
                <p className="text-base md:text-lg mt-4 text-[#DDD]">
                  Premium luxury SUVs delivered to Gold Coast, River North,
                  Northbrook, Skokie, and Schaumburg. Enjoy fast approvals,
                  transparent leasing, and exceptional service for a seamless,
                  high-end driving experience.
                </p>
                <Link
                  href="#"
                  className="mt-6 inline-block py-3 px-6 rounded bg-Primary-Color text-white text-lg font-medium hover:opacity-[.9]"
                >
                  Start Free Consultation
                </Link>
              </div>
              <div>
                <img src="/images/car.png" className="w-full" alt="Car" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
