import React from "react";
import { FormDataType } from "./SurveyForm";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";

export default function Step5() {
  const {
    setValue,
    watch,
    register,
    formState: { errors },
  } = useFormContext<FormDataType>();

  const selectedState = watch("state");

  const state = [
    {
      label: "miami",
      value: "Miami",
    },
    {
      label: "sunn-isles",
      value: "Sunny Isles",
    },
    {
      label: "aventura",
      value: "Aventura",
    },
    {
      label: "brickell",
      value: "Brickell",
    },
    {
      label: "fort-lauderdale",
      value: "Fort Lauderdale",
    },
    {
      label: "Other",
      value: "Other",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div>
        <Label className="text-base font-medium">
          Where are you located?<span className="text-Primary-Color">*</span>
        </Label>

        <div className="mt-3 flex flex-col gap-4">
          <RadioGroup
            value={selectedState}
            onValueChange={(value) => {
              setValue("state", value, { shouldValidate: true });
              if (value !== "Other")
                setValue("otherState", "", { shouldValidate: true });
            }}
          >
            {state.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <RadioGroupItem
                  value={item.value}
                  className="cursor-pointer  data-[state=checked]:border-2 data-[state=checked]:border-Primary-Color custom-accent"
                  id={item.label}
                />
                <Label
                  htmlFor={item.label}
                  className="text-base cursor-pointer"
                >
                  {item.value}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {errors.state && <p className="error-msg">{errors.state.message}</p>}
      </div>

      {/* Hidden State Input */}
      <input
        type="hidden"
        {...register("state", { required: "Select your location" })}
      />

      {/* Conditional "Other" input */}
      {selectedState === "Other" && (
        <div className="mt-4">
          <Label className="text-base font-medium">
            Others<span className="text-Primary-Color">*</span>
          </Label>
          <Input
            className="custom-input"
            placeholder="location"
            {...register("otherState", {
              validate: (value) =>
                selectedState !== "Other" ||
                value.trim().length > 0 ||
                "Please enter your location",
            })}
          />

          {errors.otherState && (
            <p className="error-msg">{errors.otherState.message}</p>
          )}
        </div>
      )}
    </div>
  );
}
