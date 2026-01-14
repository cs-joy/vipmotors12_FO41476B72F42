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

export default function Step3() {
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
          {/*}
          if (value !== "Other")
            setValue("budgetOther", "", { shouldValidate: true });
          */}
        }}
      >
        <SelectTrigger className="w-full custom-input cursor-pointer">
          <SelectValue placeholder="Select your range" />
        </SelectTrigger>

        <SelectContent position="popper">
          <SelectItem value="$300-$400">$300-$400</SelectItem>
          <SelectItem value="$400-$500">$400-$500</SelectItem>
          <SelectItem value="$500-$600">$500-$600</SelectItem>
          <SelectItem value="$600-$700">$600-$700</SelectItem>
          <SelectItem value="$700-$800">$700-$800</SelectItem>
          <SelectItem value="$800-$900">$800-$900</SelectItem>
          <SelectItem value="$900-$1000">$900-$1000</SelectItem>
          <SelectItem value="$1000+">$1000+</SelectItem>
        </SelectContent>
      </Select>

      {errors.budget && <p className="error-msg">{errors.budget.message}</p>}

      {/* Hidden Budget Input */}
      <input
        type="hidden"
        {...register("budget", { required: "Budget range is required" })}
      />


      {/* Conditional "Other" input */}
      {/*
      {selectedBudget === "Other" && (
        <div className="mt-4">
          <Label className="text-base font-medium">
            Others<span className="text-Primary-Color">*</span>
          </Label>

          <Input
            className="mt-3 custom-input"
            placeholder="Enter your range"
            {...register("budgetOther", {
              required: "Car make is required",
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
      )}*/}
    </div>
  );
}
