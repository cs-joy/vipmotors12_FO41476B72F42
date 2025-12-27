import React from "react";
import { Input } from "@/components/ui/input";
import { FormDataType } from "./SurveyForm";
import { useFormContext } from "react-hook-form";

export default function Step1() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormDataType>();
  return (
    <div>
      <p className="text-base md:text-lg font-medium">
        Hello, Please fill out the following form, so we can answer all your
        questions :
      </p>

      <div>
        <p className="mt-6 text-lg font-medium mb-3">
          What&apos;s the new car make and model you&apos;re looking for?{" "}
          <span className="text-Primary-Color">*</span>
        </p>

        <Input
          className="custom-input"
          placeholder="Enter your car model"
          {...register("carType", {
            required: "Car make & model is required",
          })}
        />

        {errors.carType && (
          <p className="error-msg">{errors.carType.message}</p>
        )}
      </div>
    </div>
  );
}
