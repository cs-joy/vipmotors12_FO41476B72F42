import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormDataType } from "./SurveyForm";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Step2() {
  const {
    setValue,
    watch,
    register,
    formState: { errors },
  } = useFormContext<FormDataType>();

  const selectedBudget = watch("budget");

  return (
    <div>
      <p className="mt-6 text-lg font-medium mb-3">
        What is your estimated budget range?
        <span className="text-Primary-Color">*</span>
      </p>

      <Select
        value={selectedBudget}
        onValueChange={(value) => {
          setValue("budget", value, { shouldValidate: true });
          if (value !== "Other")
            setValue("budgetOther", "", { shouldValidate: true });
        }}
      >
        <SelectTrigger className="w-full custom-input cursor-pointer">
          <SelectValue placeholder="Select your range" />
        </SelectTrigger>

        <SelectContent position="popper">
          <SelectItem value="$500-$999">$500-$999</SelectItem>
          <SelectItem value="$1000-$1499">$1000-$1499</SelectItem>
          <SelectItem value="$1500-$1999">$1500-$1999</SelectItem>
          <SelectItem value="$2000-$2499">$2000-$2499</SelectItem>
          <SelectItem value="$2500-$2999">$2500-$2999</SelectItem>
          <SelectItem value="$3000-$3499">$3000-$3499</SelectItem>
          <SelectItem value="$3500-$3999">$3500-$3999</SelectItem>
          <SelectItem value="$4000+">$4000+</SelectItem>
          <SelectItem value="Other">Other</SelectItem>
        </SelectContent>
      </Select>

      {errors.budget && <p className="error-msg">{errors.budget.message}</p>}

      {/* Hidden Budget Input */}
      <input
        type="hidden"
        {...register("budget", { required: "Budget range is required" })}
      />

      {/* Conditional "Other" input */}
      {selectedBudget === "Other" && (
        <div className="mt-4">
          <Label className="text-base font-medium">
            Others<span className="text-Primary-Color">*</span>
          </Label>

          <Input
            className="mt-3 custom-input"
            placeholder="Enter your range"
            {...register("budgetOther", {
              validate: (value) =>
                selectedBudget !== "Other" ||
                value.trim().length > 0 ||
                "Please enter your budget",
            })}
          />

          {errors.budgetOther && (
            <p className="error-msg">{errors.budgetOther.message}</p>
          )}
        </div>
      )}
    </div>
  );
}
