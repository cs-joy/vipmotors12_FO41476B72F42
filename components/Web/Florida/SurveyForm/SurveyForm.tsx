"use client";
import { Button } from "antd";
import React, { useState } from "react";
import { FC } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Swal from "sweetalert2";

import Step1 from "./Step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import Step5 from "./step5";
import Step6 from "./step6";

const steps: {
  title: string;
  Component: FC;
  fields: (keyof FormDataType)[];
}[] = [
  { title: "Step 1", Component: Step1, fields: ["carType"] },
  { title: "Step 2", Component: Step2, fields: ["budget", "budgetOther"] },
  { title: "Step 3", Component: Step3, fields: ["creditRange"] },
  {
    title: "Step 4",
    Component: Step4,
    fields: ["fullName", "email", "phoneNumber"],
  },
  { title: "Step 5", Component: Step5, fields: ["state", "otherState"] },
  { title: "Step 6", Component: Step6, fields: ["zipcode"] },
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
  const methods = useForm<FormDataType>({
    defaultValues: {
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
    },
    mode: "onTouched",
  });

  const { handleSubmit, trigger, reset } = methods;

  const [current, setCurrent] = useState(0);
  const ActiveStep = steps[current].Component;

  const next = async () => {
    const valid = await trigger(steps[current].fields);
    if (!valid) return;
    setCurrent((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const prev = () => {
    setCurrent((prev) => Math.max(prev - 1, 0));
  };

  // Form Submission
  const onSubmit = async (data: FormDataType) => {
    try {
      console.log("Submitting:", data);

      /*  await fetch("/api/survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }); */

      Swal.fire({
        title: "Success!",
        text: " Thank you for taking the time to complete our survey!",
        icon: "success",
        confirmButtonText: "Ok",
      });

      // Reset form
      reset();
      // Redirect to first step
      setCurrent(0);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-end">
          <div className="bg-white max-w-[585px] w-full rounded overflow-hidden pb-6">
            {/* Headline */}
            <div className="rounded rounded-bl-none rounded-br-none bg-Primary-Color text-center py-3 px-6">
              <h1 className="text-white text-base md:text-[24px] font-medium">
                Tell Us About Your Ideal Car
              </h1>
            </div>

            {/* Step */}
            {/* <div className="p-6">{steps[current].content}</div> */}

            <div className="p-6">
              {/* <ActiveStep formData={formData} setFormData={setFormData} /> */}
              <ActiveStep />
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
                <button
                  type="submit"
                  className={`cursor-pointer w-full sm:w-fit font-normal! bg-Primary-Color! py-2! px-4! h-12! outline-0! border-0! rounded! text-lg! text-white!`}
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
