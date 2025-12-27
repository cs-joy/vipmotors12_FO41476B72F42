import React from "react";
import Hero from "@/components/Web/Florida/Home/Hero";
import Navbar from "@/components/Web/Shared/home/Navbar";
import Footer from "@/components/Web/Shared/home/Footer";
import Vehicle from "@/components/Web/Florida/Home/Vehicle";
import HowItWorks from "@/components/Web/Florida/Home/HowItWorks";
import Testimonial from "@/components/Web/Florida/Home/Testimonial";
import Contact from "@/components/Web/Florida/Home/Contact";
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
      <Call />
    </>
  );
}
