import React from "react";
import Budget from "@/components/Icons/Budget";
import DriveWheel from "@/components/Icons/DriveWheel";
import Vehicle from "@/components/Icons/Vehicle";

interface Data {
  id: string | number;
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  isReversed: boolean;
}

export default function HowItWorks() {
  const data: Data[] = [
    {
      id: 1,
      icon: <Vehicle />,
      title: "Choose Your Vehicle",
      description:
        "Browse premium luxury cars and SUVs tailored to your lifestyle, budget, and driving needs, with exclusive options designed for comfort, performance, and elegance.",
      image: "how-it-works-1.png",
      isReversed: false,
    },
    {
      id: 2,
      icon: <Budget />,
      title: "Set Your Budget",
      description:
        "Flexible monthly lease options designed to match your financial comfort, lifestyle needs, and driving preferences without hidden fees or long-term commitment.",
      image: "how-it-works-2.png",
      isReversed: true,
    },
    {
      id: 3,
      icon: <DriveWheel />,
      title: "Drive Away",
      description:
        "Quick approval process with seamless paperwork and luxury vehicle delivery straight to your doorstep, making leasing simple, fast, and completely hassle-free.",
      image: "how-it-works-3.png",
      isReversed: false,
    },
  ];

  return (
    <section className="py-[75px] bg-[#B599451A]">
      <div className="custom-container-2">
        {/* Title */}
        <div className="max-w-250 w-full mx-auto text-center space-y-2">
          <h1 className="text-[38px] md:text-[48px] font-semibold">
            How It <span className="text-Primary-Color">Works</span>
          </h1>
          <p className="text-base md:text-lg">
            Three easy steps to drive your luxury vehicle today.
          </p>
        </div>

        {/* Card Wrapper */}
        <div className="mt-12">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {data.map((item, idx) => (
              <div
                key={idx}
                className={`bg-White-Color border border-White-Gray-Color rounded-lg overflow-hidden flex flex-col justify-between ${
                  item.isReversed ? "md:flex-col-reverse" : ""
                }`}
              >
                <div className="flex flex-col gap-3 p-6 justify-center items-center text-center">
                  {item.icon}
                  <h1 className="text-lg md:text-xl font-medium">
                    {item.title}
                  </h1>
                  <p className="text-base text-Gray-Color">
                    {item.description}
                  </p>
                </div>

                <img
                  src={`/images/${item.image}`}
                  className="w-full h-[265px] object-cover"
                  alt={item.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
