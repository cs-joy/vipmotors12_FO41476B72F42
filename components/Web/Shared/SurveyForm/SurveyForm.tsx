/** @format */

"use client";
import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { FC } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Swal from "sweetalert2";

import Step1 from "./Step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import Step6 from "./step6";
import Step7 from "./step7";
import Step5 from "./step5";

import { usePathname, useRouter } from "next/navigation";

const steps: {
  title: string;
  Component: FC;
  fields: (keyof FormDataType)[];
}[] = [
  { title: "Step 1", Component: Step1, fields: ["carMake"] },
  { title: "Step 2", Component: Step2, fields: ["carModel"] },
  { title: "Step 3", Component: Step3, fields: ["budget"] },
  { title: "Step 4", Component: Step4, fields: ["creditRange"] },
  { title: "Step 6", Component: Step6, fields: ["state", "otherState"] },
  { title: "Step 7", Component: Step7, fields: ["zipcode"] },
  {
    title: "Step 5",
    Component: Step5,
    fields: ["fullName", "email", "phoneNumber"],
  },
];

export type FormDataType = {
  carMake: string;
  carModel: string;
  budget: string;
  creditRange: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  state: string;
  otherState: string;
  zipcode: string;
};

export default function SurveyForm() {
  const [disableButton, setDisableButton] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const methods = useForm<FormDataType>({
    defaultValues: {
      carMake: "",
      carModel: "",
      budget: "",
      creditRange: "",
      fullName: "",
      email: "",
      phoneNumber: "",
      state: "",
      otherState: "",
      zipcode: "",
    },
    mode: "onTouched",
    shouldUnregister: false,
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
    setDisableButton(true);
    const from =
      pathname.includes("florida") ? "florida"
      : pathname.includes("chicago") ? "chicago"
      : "florida";
    try {
      console.log("Submitting:", data);

      const formattedData = {
        contact: {
          fullname: data.fullName,
          email: data.email,
          phone: data.phoneNumber,
          location: data.state === "Other" ? data.otherState : data.state,
          "zip-code": data.zipcode,
          "budget-range": data.budget,
          "credit-score-range": data.creditRange,
        },
        vehicle: {
          name: data.carMake,
          model: data.carModel,
        },
      };

      console.log("Formatted data:", formattedData);

      const response = await fetch(
        "https://services.leadconnectorhq.com/hooks/N5ckr1LzkF1akGRPJvlC/webhook-trigger/702a517b-6808-481e-8179-3bc64a02d38e",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formattedData),
        },
      );
      if (!response.ok) {
        throw new Error("Submission failed");
      }

      // ✅ SUCCESS → thank you page
      router.push(`/thank-you?from=${from}`);

      reset();
      setCurrent(0);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setDisableButton(false);
    }
  };

  // const result = await response.json();

  // if (response.ok) {
  //   Swal.fire({
  //     title: "Success!",
  //     text: "Thank you for taking the time to complete our survey!",
  //     icon: "success",
  //     confirmButtonText: "Ok",
  //   }).then(() => {
  //     if (pathname === "florida/thank-you") {
  //       router.push("florida/thank-you");
  //     } else {
  //       router.push("florida/thank-you");
  //     }
  //   });

  //   reset();
  //   setCurrent(0);
  // } else {
  //   Swal.fire({
  //     title: "Error!",
  //     text: result.message || "Something went wrong. Please try again.",
  //     icon: "error",
  //     confirmButtonText: "Ok",
  //   });
  // }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && current < steps.length - 1) {
            e.preventDefault();
          }
        }}>
        <div className='flex justify-end'>
          <div className='bg-white max-w-[585px] w-full rounded overflow-hidden pb-6 -mt-7'>
            {/* Headline */}
            <div className='rounded rounded-bl-none rounded-br-none bg-Primary-Color text-center py-3 px-6'>
              <h1 className='text-white text-base md:text-[24px] font-medium'>
                Tell Us About Your Ideal Car
              </h1>
            </div>

            {/* Step */}
            {/* <div className="p-6">{steps[current].content}</div> */}

            <div className='p-6'>
              {/* <ActiveStep formData={formData} setFormData={setFormData} /> */}
              <ActiveStep />
            </div>

            {/* Next/Prev Button */}
            <div className='px-6 flex flex-wrap gap-4 justify-between'>
              {current > 0 && (
                <Button
                  onClick={prev}
                  className={`w-full sm:w-fit cursor-pointer flex items-center justify-center font-normal! bg-white! py-2! px-2! sm:px-4! h-12! outline-0! rounded! text-base! sm:text-lg! text-Primary-Color! border-Primary-Color!`}>
                  <ArrowLeft />
                  <span>Previous </span>
                </Button>
              )}
              {current < steps.length - 1 ?
                <>
                  <div></div>
                  <button
                    onClick={next}
                    className={`w-full sm:w-fit cursor-pointer flex items-center justify-center font-normal! bg-Primary-Color! py-2! px-2! sm:px-4! h-12! outline-0! border-0! rounded! text-base! sm:text-lg! text-white!`}>
                    <span>Get Approved in Minutes</span>
                    <ArrowRight />
                  </button>
                </>
              : <button
                  type='submit'
                  disabled={disableButton}
                  className={` ${
                    disableButton ?
                      "opacity-50 cursor-not-allowed"
                    : "cursor-pointer"
                  } cursor-pointer w-full sm:w-fit font-normal! bg-Primary-Color! py-2! px-2! sm:px-4! h-12! outline-0! border-0! rounded! text-base! sm:text-lg! text-white!`}>
                  Get Approved in Minutes
                </button>
              }
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
