import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormDataType } from "./SurveyForm";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Step1Props = {
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
};

export default function Step2({ formData, setFormData }: Step1Props) {
  return (
    <div>
      <p className="mt-6 text-lg font-medium mb-3">
        What is your estimated budget range?
        <span className="text-Primary-Color">*</span>
      </p>

      <Select
        value={formData.budget}
        onValueChange={(value) =>
          setFormData((prev) => ({
            ...prev,
            budget: value,
            budgetOther: value === "other" ? prev.budgetOther : "",
          }))
        }
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
          <SelectItem value="$3500-$399">$3500-$3999</SelectItem>
          <SelectItem value="$4000">$4000+</SelectItem>
          <SelectItem value="other">Other</SelectItem>
        </SelectContent>
      </Select>

      {formData.budget === "other" && (
        <div className="mt-4">
          <Label className="text-base font-medium">
            Others<span className="text-Primary-Color">*</span>
          </Label>
          <Input
            className="mt-3 custom-input"
            placeholder="Enter your range"
            value={formData.budgetOther}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                budgetOther: e.target.value,
              }))
            }
          />
        </div>
      )}
    </div>
  );
}
