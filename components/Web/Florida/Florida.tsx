"use client";

import React, { useState } from "react";
import SurveyForm from "@/components/Web/Shared/SurveyForm/SurveyForm";
import Sparkle from "@/components/Icons/Sparkle";
import Call from "@/components/Web/Shared/Call";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Footer from "../Shared/Footer";

const backgrounds = ["/images/home-bg.png", "/images/home-bg-2.png"];

export default function Florida() {
  const [bg, setBg] = useState(backgrounds[0]);

  // For load all image and resolve flash effect
  React.useEffect(() => {
    backgrounds.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <section
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="custom-container min-h-screen flex flex-col gap-16 justify-between pt-12 pb-30 sm:pb-8">
        {/* Heading */}
        <div className="flex flex-col gap-4 text-center max-w-[850px] w-full mx-auto">
          <h1 className="text-[38px] leading-[130%] md:text-[42px] md:leading-normal font-semibold text-white">
            Drive Your Dream{" "}
            <span className="text-Primary-Color">Luxury SUV</span> Today – Fast
            & Easy Auto Leasing in{" "}
            <span className="text-Primary-Color">Florida</span>
          </h1>

          <div className="flex flex-wrap justify-center md:justify-between items-center gap-2">
            <p className="flex items-center gap-2">
              <Sparkle />
              <span className="text-base text-White-Gray-Color">
                Brand-new vehicles
              </span>
            </p>

            <p className="flex items-center gap-2">
              <Sparkle />
              <span className="text-base text-White-Gray-Color">
                Delivered anywhere in Florida
              </span>
            </p>

            <p className="flex items-center gap-2">
              <Sparkle />
              <span className="text-base text-White-Gray-Color">
                No dealership visits required.
              </span>
            </p>
          </div>

          <p className="text-base text-White-Gray-Color w-[96%] mx-auto ">
            Serving Miami, Fort Lauderdale, Tampa, Orlando, and West Palm —
            delivery anywhere in Florida.
          </p>
        </div>

        <div>
          <SurveyForm />
        </div>

        {/* Footer */}
        <Footer />
      </div>

      <Call />

      {/* SWIPER */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 3000,
        }}
        loop
        onSlideChange={(swiper) => setBg(backgrounds[swiper.realIndex])}
        className="bg-swiper"
      >
        {backgrounds.map((_, index) => (
          <SwiperSlide key={index} />
        ))}
      </Swiper>
    </section>
  );
}
