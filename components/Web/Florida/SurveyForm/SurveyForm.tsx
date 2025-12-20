"use client";
import { Button } from "antd";
import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./step2";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Step3 from "./step3";
import Step4 from "./step4";
import Step5 from "./step5";
import Step6 from "./step6";

const steps = [
  { title: "Step 1", Component: Step1 },
  { title: "Step 2", Component: Step2 },
  { title: "Step 3", Component: Step3 },
  { title: "Step 4", Component: Step4 },
  { title: "Step 5", Component: Step5 },
  { title: "Step 6", Component: Step6 },
];

export type FormDataType = {
  carType: string;
  budget: string;
  budgetOther: string;
  creditRange: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  state: string;
  otherState: string;
  zipcode: string;
};

export default function SurveyForm() {
  const [formData, setFormData] = useState({
    carType: "",
    budget: "",
    budgetOther: "",
    creditRange: "",
    fullName: "",
    email: "",
    phoneNumber: "",
    state: "",
    otherState: "",
    zipcode: "",
  });

  const [current, setCurrent] = useState(0);
  const ActiveStep = steps[current].Component;

  const next = () => setCurrent((prev) => Math.min(prev + 1, steps.length - 1));
  const prev = () => setCurrent((prev) => Math.max(prev - 1, 0));

  const handleSubmit = async () => {
    try {
      console.log("Submitting:", formData);

      /* await fetch("/api/survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }); */

      alert("Form submitted successfully!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-end">
      <div className="bg-white max-w-[585px] w-full rounded overflow-hidden pb-6">
        {/* Headline */}
        <div className="rounded-tl-sm rounded-tr-sm bg-Primary-Color text-center py-3 px-6">
          <h1 className="text-white text-base md:text-[24px] font-medium">
            Tell Us About Your Ideal Car
          </h1>
        </div>

        {/* Step */}
        {/* <div className="p-6">{steps[current].content}</div> */}

        <div className="p-6">
          <ActiveStep formData={formData} setFormData={setFormData} />
        </div>

        {/* Next/Prev Button */}
        <div className="px-6 flex flex-wrap gap-4 justify-between">
          {current > 0 && (
            <Button
              onClick={prev}
              className={`w-full sm:w-fit font-normal! bg-white! py-2! px-4! h-12! outline-0! rounded! text-lg! text-Primary-Color! border-Primary-Color!`}
            >
              <ArrowLeft />
              <span>Previous </span>
            </Button>
          )}
          {current < steps.length - 1 ? (
            <>
              <div></div>
              <Button
                type="primary"
                onClick={next}
                className={`w-full sm:w-fit font-normal! bg-Primary-Color! py-2! px-4! h-12! outline-0! border-0! rounded! text-lg! text-white!`}
              >
                <span>Next</span>
                <ArrowRight />
              </Button>
            </>
          ) : (
            <Button
              type="primary"
              onClick={handleSubmit}
              className={`w-full sm:w-fit font-normal! bg-Primary-Color! py-2! px-4! h-12! outline-0! border-0! rounded! text-lg! text-white!`}
            >
              Submit
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
