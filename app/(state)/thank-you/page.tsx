/** @format */

"use client";

import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SuccessIcon } from "@/public/icon/SuccessIcon";
import { VerifiedIcon } from "@/components/Icons/VerifiedIcon";
import { SupportIcon } from "@/components/Icons/SupportIcon";

export default function ThankYou() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from");

  // redirect handler (reuseable)
  const handleRedirect = () => {
    if (from === "florida") {
      router.push("/florida/home");
    } else if (from === "chicago") {
      router.push("/chicago/home");
    } else {
      router.push("/florida/home");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleRedirect();
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, [from]);

  return (
    <div className="h-screen text-white bg-[url('/images/thankyou2.png')] bg-cover bg-center">
      <div className='flex items-center justify-center h-full'>
        <div className='text-center w-[559px] p-12 backdrop-blur-3xl outline rounded-2xl'>
          <SuccessIcon className='flex justify-center items-center mx-auto' />

          <h3 className='text-xl md:text-2xl lg:text-5xl font-semibold mb-3 pt-5 text-[#FBFBFB]'>
            Request Received!
          </h3>

          <p className='text-base md:text-lg leading-[150%] text-[#DDD] pt-3 pb-5'>
            Thank you for choosing our showroom. One of our luxury car
            specialists will contact you shortly to schedule your test drive.
          </p>

          {/* Button redirect */}
          <div className='bg-Primary-Color rounded-lg inline-block'>
            <button
              onClick={handleRedirect}
              className='text-[#FFF] text-lg font-normal py-3 px-6 cursor-pointer'>
              Visit Our Landing Page
            </button>
          </div>

          <p className='text-lg font-medium pt-6 pb-4'>
            Redirecting you automatically to the landing page in{" "}
            <span className='text-[#B59945]'>5 seconds</span>
          </p>

          <div className='w-[322px] h-1 bg-[#DDD] rounded-2xl mx-auto' />

          <hr className='bg-[#E5E5E5] mt-8 mb-6' />

          <div className='flex gap-8 justify-center'>
            <div className='flex gap-2 items-center'>
              <VerifiedIcon />
              <p className='text-[16px] text-[#DDD]'>VERIFIED DEALER</p>
            </div>

            <div className='flex gap-2 items-center'>
              <SupportIcon />
              <p className='text-[16px] text-[#DDD]'>24/7 SUPPORT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
