import React from "react";
import Hero from "@/components/Web/Chicago/Home/Hero";
import Navbar from "@/components/Web/Shared/home/Navbar";
import Footer from "@/components/Web/Shared/home/Footer";
import Vehicle from "@/components/Web/Chicago/Home/Vehicle";
import HowItWorks from "@/components/Web/Chicago/Home/HowItWorks";
import Testimonial from "@/components/Web/Chicago/Home/Testimonial";
import Contact from "@/components/Web/Chicago/Home/Contact";
import Call from "@/components/Web/Shared/Call";

export default function ChicagoHome() {
  return (
    <>
      <Navbar />
      <Hero />
      <Vehicle />
      <HowItWorks />
      <Testimonial />
      <Contact />
      <Footer />
      {/* <Call /> */}
    </>
  );
}
