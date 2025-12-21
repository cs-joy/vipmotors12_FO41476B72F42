import React from "react";
import { FormDataType } from "./SurveyForm";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormContext } from "react-hook-form";

export default function Step4() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormDataType>();
  return (
    <div>
      <p className="mt-6 text-lg font-medium mb-3">
        Please share your contact details so our manager can personally reach
        out to you.
      </p>

      <div className="flex flex-col gap-4">
        <div>
          <Label className="text-base font-medium">
            Full Name <span className="text-Primary-Color">*</span>
          </Label>
          <Input
            className="mt-3 custom-input"
            placeholder="Enter your name"
            {...register("fullName", {
              required: "Full name is required",
            })}
          />

          {errors.fullName && (
            <p className="error-msg">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <Label className="text-base font-medium">
            Email Address <span className="text-Primary-Color">*</span>
          </Label>
          <Input
            className="mt-3 custom-input"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // basic email regex
                message: "Please enter a valid email address",
              },
            })}
          />
          {errors.email && <p className="error-msg">{errors.email.message}</p>}
        </div>

        <div>
          <Label className="text-base font-medium">
            Phone Number <span className="text-Primary-Color">*</span>
          </Label>
          <Input
            className="mt-3 custom-input"
            placeholder="Enter your number"
            {...register("phoneNumber", {
              required: "Phone number is required",
            })}
          />
          {errors.phoneNumber && (
            <p className="error-msg">{errors.phoneNumber.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}
