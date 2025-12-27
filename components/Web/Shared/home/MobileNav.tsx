import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { menuLink } from "./Navbar";

export default function MobileNav({
  isMobileMenuOpen,
}: {
  isMobileMenuOpen: boolean;
}) {
  return (
    <Sheet>
      <SheetTrigger>
        <button className="cursor-pointer lg:hidden">
          <Menu className="text-white h-8 w-8" />
        </button>
      </SheetTrigger>

      <SheetContent className="max-w-65! w-full! h-dvh overflow-auto custom-close-btn">
        {/* Close Button */}
        <SheetClose asChild>
          <button
            className="cursor-pointer absolute top-4 right-4 h-8 w-8 p-1.5 rounded-full flex items-center justify-center bg-[#7f664b]"
            onClick={() => !isMobileMenuOpen}
          >
            <X className="text-white" />
          </button>
        </SheetClose>

        <div className="px-6 pt-20 pb-4">
          <ul className="flex flex-col items-end gap-4">
            {menuLink.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.value}
                  className="text-lg font-medium text-Primary-Color"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex justify-end mt-6">
            <Link
              href="#"
              className="inline-block p-3 rounded bg-Primary-Color text-white text-base font-medium hover:opacity-[.9] whitespace-nowrap"
            >
              Start Free Consultation
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
