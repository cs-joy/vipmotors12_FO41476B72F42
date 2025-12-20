import React from "react";
import Link from "next/link";

export default function Navbar() {
  const menuLink = [
    {
      label: "Home",
      value: "/home",
    },
    {
      label: "Inventory",
      value: "/Inventory",
    },
    {
      label: "How It WorK",
      value: "/how-it-work",
    },
    {
      label: "Contact Us",
      value: "/contact-us",
    },
  ];

  return (
    <section className="fixed top-0 left-0 w-full bg-[rgba(204,165,49,0.10)] shadow-[0_0_2px_rgba(0,0,0,0.20)] py-2.5">
      <div className="custom-container">
        <div className="flex justify-between items-center gap-4">
          <Link href="/">
            <img
              src="/images/logo.svg"
              className="h-[60px] w-[60px] object-contain"
              alt="Logo"
            />
          </Link>
          <div>
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
            className="py-3 px-6 rounded bg-Primary-Color text-white text-lg font-medium"
          >
            Start Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
