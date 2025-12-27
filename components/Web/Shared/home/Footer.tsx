import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Facebook from "@/components/Icons/Facebook";
import Instagram from "@/components/Icons/Instagram";
import Twitter from "@/components/Icons/Twitter";
import Telegram from "@/components/Icons/Telegram";
import Image from "next/image";

interface UsefulLink {
  label: string;
  value: string;
}

interface SocialLink {
  icon: React.ReactNode;
  link: string;
}

export default function Footer() {
  const usefulLink: UsefulLink[] = [
    {
      label: "Home",
      value: "/home",
    },
    {
      label: "Inventory",
      value: "/inventory",
    },
    {
      label: "How It Works",
      value: "/how-it-works",
    },
    {
      label: "Contact",
      value: "/contact",
    },
    {
      label: "Testimonials",
      value: "/testimonials",
    },
  ];

  const socialLink: SocialLink[] = [
    {
      icon: <Facebook className="fill-Primary-Color" />,
      link: "#",
    },
    {
      icon: <Instagram className="fill-Primary-Color" />,
      link: "https://www.instagram.com/vipmotorsmi/",
    },
    {
      icon: <Twitter className="fill-Primary-Color" />,
      link: "#",
    },
    {
      icon: <Telegram className="fill-Primary-Color" />,
      link: "#",
    },
  ];

  return (
    <div
      className="pt-12 pb-22 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/footer-bg.png')" }}
    >
      <div className="custom-container-2">
        {/* Top */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-6">
          <div className="flex flex-col gap-6">
            <Image
              src="/images/logo.svg"
              height={60}
              width={60}
              loading="eager"
              className="w-15 h-15 object-contain"
              alt="Logo"
            />

            <p className="text-base text-White-Gray-Color">
              We are a premier auto leasing brokerage specializing in luxury
              SUVs and vehicles. From BMWs and Cadillac Escalades to Tahoes and
              GMC Sierras, we make leasing simple, fast, and stress-free. Our
              team provides personalized support and fast approvals to get you
              behind the wheel of your dream car today.
            </p>

            <div className="flex flex-col gap-4">
              <Link
                href="tel:+14161234567"
                className="flex items-center gap-3 text-[#FBFBFB]"
              >
                <div className="min-w-10 w-10 h-10 p-1 flex items-center justify-center rounded-full border border-dashed border-white">
                  <Phone className="h-5 w-5" />
                </div>
                <span>+1 (416) 123-4567</span>
              </Link>

              <Link
                href="mailto:info@vipmotors.com"
                className="flex items-center gap-3 text-[#FBFBFB]"
              >
                <div className="min-w-10 w-10 h-10 p-1 flex items-center justify-center rounded-full border border-dashed border-white">
                  <Mail className="h-5 w-5" />
                </div>
                <span>info@vipmotors.com</span>
              </Link>

              <Link
                href="https://www.google.com/maps/place/VIP+Motors/@42.4699702,-83.2394343,15z/data=!4m6!3m5!1s0x8824c9f277094ea7:0x85d43be7537a149e!8m2!3d42.4699702!4d-83.2394343!16s%2Fg%2F11p3g2mc_d?entry=ttu"
                className="flex items-center gap-3 text-[#FBFBFB]"
              >
                <div className="min-w-10 w-10 h-10 p-1 flex items-center justify-center rounded-full border border-dashed border-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <span>
                  Miami | Sunny Isles | Aventura | Brickell | Fort Lauderdale
                </span>
              </Link>
            </div>
          </div>
          <div className="md:flex md:justify-center md:border-l md:border-r md:border-[#E5E5E54D]">
            <div className="flex flex-col gap-6">
              <h2 className="text-White-Color text-xl font-medium">
                Useful Links
              </h2>
              <ul className="flex flex-col gap-4">
                {usefulLink.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.value}
                      className="text-White-Color text-base hover:text-Primary-Color transition duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-White-Color text-xl font-medium">Newsletter</h2>
            <p className="text-base text-White-Gray-Color">
              Stay ahead of the latest luxury car deals, special leasing offers,
              and VIP promotions delivered straight to your inbox.
            </p>

            <div className="p-2 bg-White-Color rounded flex">
              <input
                className="flex-1 w-full border-0 outline-0 px-4"
                placeholder="Your email address"
                type="text"
                name=""
              />
              <button className="w-fit bg-Primary-Color text-white text-base md:text-lg py-2.5 px-4 rounded">
                Subscribe
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-medium text-White-Color">
                Opening Hour
              </h1>
              <p className="text-base text-White-Gray-Color">
                24/7 Hour Support
              </p>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-6 border-t border-[#E5E5E54D]">
          <div>
            <p className="text-base text-White-Color">
              © Copyright 2025{" "}
              <Link
                href="https://vipmotors.com/"
                className="text-Primary-Color"
              >
                VIP Motors
              </Link>{" "}
              All Rights Reserved.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {socialLink.map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                className="h-8 w-8 rounded-full bg-White-Color flex items-center justify-center"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
