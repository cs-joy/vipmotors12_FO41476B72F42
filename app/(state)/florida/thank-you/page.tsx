/** @format */

"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ThankYou() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/florida/home");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return <div>Thank you! Redirecting you shortly...</div>;
}
