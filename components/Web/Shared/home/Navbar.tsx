"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import MobileNav from "./MobileNav";
import Image from "next/image";

export const menuLink = [
  {
    label: "Home",
    value: "/home",
  },
  {
    label: "Inventory",
    value: "/Inventory",
  },
  {
    label: "How It Work",
    value: "/how-it-work",
  },
  {
    label: "Contact Us",
    value: "/contact-us",
  },
];

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(() => {
    if (typeof window !== "undefined") {
      return window.scrollY > 10;
    }
    return false;
  });

  // On scroll set background color
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`fixed z-2  top-0 left-0 w-full  ${
        scrolled ? "bg-[#7F664B]" : "bg-[rgba(204,165,49,0.10)]"
      }   shadow-[0_0_2px_rgba(0,0,0,0.20)] py-2.5`}
    >
      <div className="custom-container-2">
        <div className="flex justify-between items-center gap-4">
          <Link href="https://vipmotors.com/">
            <Image
              src="/images/logo.svg"
              height={60}
              width={60}
              loading="eager"
              className="w-15 h-15 object-contain"
              alt="Logo"
            />
          </Link>
          <div className="hidden lg:block">
            <ul className="flex items-center gap-12.5">
              {menuLink.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.value}
                    className="text-xl font-medium text-white hover:text-Primary-Color transition duration-100"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link
            href="#"
            className="hidden lg:block py-3 px-6 rounded bg-Primary-Color text-white text-lg font-medium hover:opacity-[.9]"
          >
            Start Free Consultation
          </Link>

          {/* Mobile Menu */}
          <MobileNav isMobileMenuOpen={isMobileMenuOpen} />
        </div>
      </div>
    </section>
  );
}
