/** @format */

import React from "react";
import Dealer from "@/components/Icons/Dealer";
import Licensed from "@/components/Icons/Licensed";
import ReviewsThumb from "@/components/Icons/ReviewsThumb";
import Image from "next/image";
import Link from "next/link";
import {
  MdOutlineSecurity,
  MdOutlineSystemSecurityUpdateWarning,
} from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";

export default function Footer() {
  return (
    <div className='grid sm:grid-cols-2 md:flex md:flex-row gap-4 justify-between'>
      <Link href='https://vipmotors.com/'>
        <Image
          src='/images/logo.svg'
          height={130}
          width={130}
          loading='eager'
          className='w-25 h-25 md:w-[130px] md:h-[130px] object-contain'
          alt='Logo'
        />
      </Link>
      <div className='flex items-center gap-3'>
        <Licensed />
        <p className='text-base text-white'>Licensed Broker</p>
      </div>
      <div className='flex items-center gap-3'>
        <MdOutlineSecurity className='text-Primary-Color w-8 h-8 ' />
        <p className='text-base text-white'>Secure Form</p>
      </div>

      <div className='flex items-center gap-3'>
        <Dealer />
        <p className='text-base text-white'>Dealer Network</p>
      </div>

      <div className='flex items-center gap-3'>
        <TbTruckDelivery className='text-Primary-Color w-8 h-8' />
        <p className='text-base text-white'>Delivery Avilable</p>
      </div>
    </div>
  );
}
