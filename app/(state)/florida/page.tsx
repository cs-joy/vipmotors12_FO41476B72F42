import React from "react";
import Call from "@/components/Icons/Call";
import Globe from "@/components/Icons/Globe";
import Location from "@/components/Icons/Location";
import Link from "next/link";
import SurveyForm from "@/components/Web/Florida/SurveyForm/SurveyForm";

export default function FloridaPage() {
  return (
    <section
      className="min-h-screen bg-cover bg-center  "
      style={{ backgroundImage: "url('/images/home-bg.png')" }}
    >
      <div className="custom-container min-h-screen flex flex-col gap-16 justify-between pt-12 pb-6">
        {/* Text */}
        <div className="flex flex-col gap-4 text-center max-w-[850px] w-full mx-auto">
          <h1 className="text-[38px] leading-[130%] md:text-[42px] md:leading-normal font-semibold text-white">
            Drive Your Dream{" "}
            <span className="text-Primary-Color">Luxury SUV</span> Today – Fast
            & Easy Auto Leasing in{" "}
            <span className="text-Primary-Color">Florida</span>
          </h1>
          <p className="text-lg text-white w-[96%] mx-auto ">
            We make leasing premium vehicles like BMW, Cadillac Escalades,
            Tahoes, and GMC Sierras simple, transparent, and stress-free.
          </p>
        </div>

        <div className="">
          <SurveyForm />
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <Link href="#">
            <img
              src="/images/logo.svg"
              className="w-[100px] h-[100px] md:w-[130px] md:h-[130px] object-contain"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center gap-3">
            <Globe />
            <Link
              href="/florida/home"
              className="text-base text-white break-all"
            >
              vipmotors.com/florida/home
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Call />
            <Link
              href="tel:248) 860-6050"
              className="text-base text-white break-all"
            >
              (248) 860-6050
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Location />
            <Link
              href="https://www.google.com/maps/place/VIP+Motors/@42.4699702,-83.2394343,15z/data=!4m6!3m5!1s0x8824c9f277094ea7:0x85d43be7537a149e!8m2!3d42.4699702!4d-83.2394343!16s%2Fg%2F11p3g2mc_d?entry=ttu"
              className="text-base text-white break-all"
            >
              24681 Northwestern Hwy Southfield, MI 48075
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
