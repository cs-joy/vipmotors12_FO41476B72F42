"use client";
import Car from "@/components/Icons/Car";
import GearBox from "@/components/Icons/GearBox";
import Seat from "@/components/Icons/Seat";
import Wheel from "@/components/Icons/Wheel";
import Link from "next/link";
import React, { useRef, useState } from "react";

interface CarBrand {
  label: string;
  value: string;
}

interface CarList {
  id: string | number;
  brand: string;
  image: string;
  title: string;
  gearBox: string;
  type: string;
  seat: number | string;
  model: number | string;
}

export default function Vehicle() {
  const [activeBrand, setActiveBrand] = useState("BMW");

  // Car Model
  const carBrand: CarBrand[] = [
    {
      label: "BMW",
      value: "BMW",
    },
    {
      label: "Cadillac Escalades",
      value: "Cadillac Escalades",
    },
    {
      label: "Tahoes",
      value: "Tahoes",
    },
    {
      label: "GMC Sierras",
      value: "GMC Sierras",
    },
    {
      label: "Mercedes-Benz",
      value: "Mercedes-Benz",
    },
    {
      label: "Range Rover",
      value: "Range Rover",
    },
    {
      label: "Tesla",
      value: "Tesla",
    },
  ];

  const carList: CarList[] = [
    // BMW
    {
      id: 1,
      brand: "BMW",
      image: "car-1.png",
      title: "BMW X7",
      gearBox: "Automatic",
      type: "SUV",
      seat: 7,
      model: 2025,
    },
    {
      id: 2,
      brand: "BMW",
      image: "car-2.png",
      title: "BMW 3 Series",
      gearBox: "Manual",
      type: "Sedan",
      seat: 5,
      model: 2024,
    },
    {
      id: 3,
      brand: "BMW",
      image: "car-3.png",
      title: "BMW iX",
      gearBox: "Automatic",
      type: "Electric SUV",
      seat: 5,
      model: 2025,
    },

    // Cadillac Escalades
    {
      id: 4,
      brand: "Cadillac Escalades",
      image: "car-1.png",
      title: "Audi Q7",
      gearBox: "Automatic",
      type: "SUV",
      seat: 7,
      model: 2025,
    },
    {
      id: 5,
      brand: "Cadillac Escalades",
      image: "car-2.png",
      title: "Audi A6",
      gearBox: "Manual",
      type: "Sedan",
      seat: 5,
      model: 2024,
    },
    {
      id: 6,
      brand: "Cadillac Escalades",
      image: "car-3.png",
      title: "Audi e-tron",
      gearBox: "Automatic",
      type: "Electric SUV",
      seat: 5,
      model: 2025,
    },

    // Mercedes
    {
      id: 7,
      brand: "Mercedes-Benz",
      image: "car-1.png",
      title: "Mercedes GLE",
      gearBox: "Automatic",
      type: "SUV",
      seat: 5,
      model: 2025,
    },
    {
      id: 8,
      brand: "Mercedes-Benz",
      image: "car-2.png",
      title: "Mercedes C-Class",
      gearBox: "Manual",
      type: "Sedan",
      seat: 5,
      model: 2024,
    },
    {
      id: 9,
      brand: "Mercedes-Benz",
      image: "car-3.png",
      title: "Mercedes EQB",
      gearBox: "Automatic",
      type: "Electric SUV",
      seat: 5,
      model: 2025,
    },

    // Tahoes
    {
      id: 10,
      brand: "Tahoes",
      image: "car-1.png",
      title: "Tahoe LS",
      gearBox: "Automatic",
      type: "SUV",
      seat: 7,
      model: 2025,
    },
    {
      id: 11,
      brand: "Tahoes",
      image: "car-2.png",
      title: "Tahoe LT",
      gearBox: "Automatic",
      type: "SUV",
      seat: 7,
      model: 2024,
    },
    {
      id: 12,
      brand: "Tahoes",
      image: "car-3.png",
      title: "Tahoe Premier",
      gearBox: "Manual",
      type: "SUV",
      seat: 8,
      model: 2025,
    },
    {
      id: 13,
      brand: "Tahoes",
      image: "car-4.png",
      title: "Tahoe Z71",
      gearBox: "Automatic",
      type: "SUV",
      seat: 7,
      model: 2023,
    },

    // GMC Sierras
    {
      id: 14,
      brand: "GMC Sierras",
      image: "car-1.png",
      title: "GMC Sierra SLE",
      gearBox: "Automatic",
      type: "Truck",
      seat: 5,
      model: 2025,
    },
    {
      id: 15,
      brand: "GMC Sierras",
      image: "car-2.png",
      title: "GMC Sierra SLT",
      gearBox: "Automatic",
      type: "Truck",
      seat: 5,
      model: 2024,
    },
    {
      id: 16,
      brand: "GMC Sierras",
      image: "car-3.png",
      title: "GMC Sierra Denali",
      gearBox: "Automatic",
      type: "Truck",
      seat: 5,
      model: 2025,
    },
    {
      id: 17,
      brand: "GMC Sierras",
      image: "car-4.png",
      title: "GMC Sierra AT4",
      gearBox: "Automatic",
      type: "Truck",
      seat: 5,
      model: 2023,
    },

    // Range Rover
    {
      id: 18,
      brand: "Range Rover",
      image: "car-1.png",
      title: "Range Rover Evoque",
      gearBox: "Automatic",
      type: "SUV",
      seat: 5,
      model: 2025,
    },
    {
      id: 19,
      brand: "Range Rover",
      image: "car-2.png",
      title: "Range Rover Velar",
      gearBox: "Automatic",
      type: "SUV",
      seat: 5,
      model: 2024,
    },
    {
      id: 20,
      brand: "Range Rover",
      image: "car-3.png",
      title: "Range Rover Sport",
      gearBox: "Automatic",
      type: "SUV",
      seat: 7,
      model: 2025,
    },
    {
      id: 21,
      brand: "Range Rover",
      image: "car-4.png",
      title: "Range Rover Autobiography",
      gearBox: "Automatic",
      type: "SUV",
      seat: 7,
      model: 2023,
    },

    // Tesla
    {
      id: 22,
      brand: "Tesla",
      image: "car-1.png",
      title: "Tesla Model S",
      gearBox: "Automatic",
      type: "Sedan",
      seat: 5,
      model: 2025,
    },
    {
      id: 23,
      brand: "Tesla",
      image: "car-2.png",
      title: "Tesla Model 3",
      gearBox: "Automatic",
      type: "Sedan",
      seat: 5,
      model: 2024,
    },
    {
      id: 24,
      brand: "Tesla",
      image: "car-3.png",
      title: "Tesla Model X",
      gearBox: "Automatic",
      type: "SUV",
      seat: 7,
      model: 2025,
    },
    {
      id: 25,
      brand: "Tesla",
      image: "car-4.png",
      title: "Tesla Model Y",
      gearBox: "Automatic",
      type: "SUV",
      seat: 5,
      model: 2023,
    },
  ];

  const filteredCars = carList.filter((car) => car.brand === activeBrand);

  //  Scroll Filter By Grab
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;

    setIsDragging(true);
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return;

    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const onMouseUp = () => setIsDragging(false);
  const onMouseLeave = () => setIsDragging(false);

  return (
    <section className="py-20 lg:py-30">
      <div className="custom-container-2">
        {/* Title */}
        <div className="max-w-250 w-full mx-auto text-center space-y-2">
          <h1 className="text-[38px] md:text-[48px] font-semibold">
            Featured <span className="text-Primary-Color">Vehicle</span> Deals
          </h1>
          <p className="text-base md:text-lg">
            Hot Deals on Luxury Vehicles in South Florida
          </p>
        </div>

        {/* Filter */}
        <div
          ref={scrollRef}
          className="max-w-250 w-full mx-auto border border-White-Gray-Color bg-White-Color rounded-xl py-3 px-4 mt-8 flex items-center gap-2 overflow-x-auto cursor-grab active:cursor-grabbing select-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {carBrand.map((item) => (
            <button
              key={item.value}
              onClick={() => setActiveBrand(item.value)}
              className={`text-base font-medium whitespace-nowrap  ${
                activeBrand === item.value ? "bg-Primary-Color text-white" : ""
              }  py-2.5 px-5 rounded-lg cursor-pointer`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Car List */}
        <div className="mt-12">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredCars.map((item, idx) => (
              <div
                key={idx}
                className="p-4 pb-6 rounded-2xl border border-White-Gray-Color bg-White-Color flex flex-col justify-between gap-4"
              >
                <img
                  src={`/images/${item.image}`}
                  className="w-full rounded-lg"
                  alt={item.title}
                />

                <div className="space-y-3 flex-1">
                  <h1 className="text-xl font-medium">{item.title}</h1>

                  <div className="grid grid-cols-[auto_auto] gap-4">
                    <div className="flex gap-2">
                      <GearBox />
                      <span className="text-sm text-Gray-Color">
                        Gearbox : {item.gearBox}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <Wheel />
                      <span className="text-sm text-Gray-Color">
                        Type: {item.type}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <Seat />
                      <span className="text-sm text-Gray-Color">
                        Seats: {item.seat} people
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <Car />
                      <span className="text-sm text-Gray-Color">
                        Model : {item.model}
                      </span>
                    </div>
                  </div>
                </div>

                <Link
                  href="tel:01521454545"
                  className="bg-Primary-Color py-2 px-4 rounded text-center text-base font-medium text-White-Color hover:opacity-[.9] transition duration-200"
                >
                  Start Free Consultation
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
