"use client";
import React from "react";
import Image from "next/image";
import StatIcon from "@/components/Icons/StatIcon";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

interface Data {
  id: string | number;
  rating: string | number;
  review: string | number;
  author: string;
  authorImg: string;
  authorRole: string;
}

export default function Testimonial() {
  const data: Data[] = [
    {
      id: 1,
      rating: 4,
      review:
        "I’ve leased cars from several brokers before, but the service here is unmatched. The team helped me find a stunning BMW X7 that fit both my style and budget perfectly. The process was transparent, quick, and professional, and the vehicle arrived in pristine condition exactly when promised. From start to finish, I felt supported and valued as a customer. Their dedication to providing a top-tier luxury leasing experience makes them the best auto brokerage in South Florida. I wouldn’t go anywhere else!",
      author: "James L., Miami",
      authorImg: "/images/customer-1.png",
      authorRole: "Customer",
    },
    {
      id: 2,
      rating: 5,
      review:
        "VIPMotors made renting a car so easy! The website is simple to use, the booking process is smooth, and the available cars are top quality. Highly recommend for anyone looking for a hassle-free car rental experience!",
      author: "Lionel Messi",
      authorImg: "/images/customer-2.png",
      authorRole: "Customer",
    },
  ];

  return (
    <section className="py-[75px]">
      <div className="custom-container-2">
        {/* Title */}
        <div className="max-w-250 w-full mx-auto text-center space-y-2">
          <div className="text-base md:text-lg font-medium text-Primary-Color px-6 py-1.5 rounded-[30px] border border-Primary-Color w-fit mx-auto">
            Testimonials
          </div>
          <h1 className="text-[38px] md:text-[48px] font-semibold">
            What Our <span className="text-Primary-Color">Customers Says</span>
          </h1>
        </div>

        {/* Testimonial Card */}
        <div className="mt-12 grid md:grid-cols-2 items-center gap-8">
          <div className="hidden md:block">
            <Image
              src="/images/testimonial.png"
              height={300}
              width={300}
              unoptimized
              quality={100}
              loading="eager"
              className="w-full rounded-xl"
              alt="Testimonial Image"
            />
          </div>
          <div>
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              navigation={true}
              modules={[Navigation, Autoplay]}
              autoplay={{
                delay: 5000,
              }}
              className="mySwiper relative pb-25! md:pb-20! lg:pb-0!"
            >
              {data.map((item) => (
                <SwiperSlide key={item.id} className="w-full!">
                  <div>
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating)].map((_, index) => (
                        <StatIcon key={index} />
                      ))}
                    </div>

                    <p className="text-base text-Gray-Color mt-3 ">
                      {item.review}
                    </p>

                    <div className="mt-6 flex gap-4 items-center">
                      <Image
                        src={item.authorImg}
                        height={60}
                        width={60}
                        className="h-15 w-15 object-cover rounded-full"
                        alt={item.author}
                      />
                      <div>
                        <h1 className="text-xl md:text-2xl font-medium">
                          {item.author}
                        </h1>
                        <p className="text-base text-Gray-Color">
                          {item.authorRole}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
