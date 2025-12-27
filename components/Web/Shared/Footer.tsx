import React from "react";
import Dealer from "@/components/Icons/Dealer";
import Licensed from "@/components/Icons/Licensed";
import ReviewsThumb from "@/components/Icons/ReviewsThumb";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="grid sm:grid-cols-2 md:flex md:flex-row gap-4 justify-between">
      <Link href="https://vipmotors.com/">
        <Image
          src="/images/logo.svg"
          height={130}
          width={130}
          loading="eager"
          className="w-25 h-25 md:w-[130px] md:h-[130px] object-contain"
          alt="Logo"
        />
      </Link>
      <div className="flex items-center gap-3">
        <Licensed />
        <p className="text-base text-white">Licensed Auto Broker</p>
      </div>

      <div className="flex items-center gap-3">
        <Dealer />
        <p className="text-base text-white">Thousands of Dealer Partners</p>
      </div>

      <div className="flex items-center gap-3">
        <ReviewsThumb />
        <p className="text-base text-white">5-Star Reviews</p>
      </div>
    </div>
  );
}
