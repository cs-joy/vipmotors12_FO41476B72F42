import React from "react";
import { FormDataType } from "./SurveyForm";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";

export default function Step3() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormDataType>();
  return (
    <div>
      <p className="mt-6 text-lg font-medium mb-3">
        What is your approximate credit score range?{" "}
        <span className="text-Primary-Color">*</span>
      </p>

      <Input
        className="custom-input"
        placeholder="Enter your score range"
        {...register("creditRange", {
          required: "Credit score range is required",
        })}
      />

      {errors.creditRange && (
        <p className="error-msg">{errors.creditRange.message}</p>
      )}
    </div>
  );
}
