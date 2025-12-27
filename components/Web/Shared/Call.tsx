import React from "react";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function Call() {
  return (
    <Link
      href="tel:+14161234567"
      className="sm:hidden z-3 fixed bottom-0 left-0 w-full bg-Primary-Color py-3 px-2 rounded-md rounded-bl-none rounded-br-none"
    >
      <div className="flex items-center justify-center gap-3 text-white ">
        <div className="relative w-10 h-10 flex items-center justify-center">
          <span className="absolute inset-0 rounded-full border border-dashed border-white animate-[spin_6s_linear_infinite]"></span>
          <Phone className="h-5 w-5 text-white" />
        </div>

        <span className="text-base font-medium">14161234567</span>
      </div>

      <p className="text-center mt-2 text-sm text-white">
        Call or text - fastest way to get approved.
      </p>
    </Link>
  );
}
