/** @format */

import React from "react";
import { Input } from "@/components/ui/input";
import { FormDataType } from "./SurveyForm";
import { useFormContext } from "react-hook-form";

export default function Step2() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormDataType>();
  return (
    <div>
      <p className='mt-4 lg:mt-6 text-base lg:text-lg font-normal lg:font-lg mb-3'>
        What&apos;s the new car model you&apos;re looking for?{" "}
        <span className='text-Primary-Color'>*</span>
      </p>

      <Input
        className='custom-input'
        placeholder='Enter your car model'
        {...register("carModel", {
          required: "Car model is required",
        })}
      />

      {errors.carModel && (
        <p className='error-msg'>{errors.carModel.message}</p>
      )}
    </div>
  );
}
