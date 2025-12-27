import React from "react";
import { FormDataType } from "./SurveyForm";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormContext } from "react-hook-form";

export default function Step6() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormDataType>();
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div>
          <Label className="text-base font-medium">
            Enter your Zip Code
            <span className="text-Primary-Color">*</span>
          </Label>
          <Input
            className="mt-3 custom-input"
            {...register("zipcode", {
              required: "Zip Code is required",
            })}
          />

          {errors.zipcode && (
            <p className="error-msg">{errors.zipcode.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}
