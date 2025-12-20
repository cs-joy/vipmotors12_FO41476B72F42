import React from "react";
import { FormDataType } from "./SurveyForm";
import { Input } from "@/components/ui/input";

type Step1Props = {
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
};

export default function Step3({ formData, setFormData }: Step1Props) {
  return (
    <div>
      <p className="mt-6 text-lg font-medium mb-3">
        What is your approximate credit score range?
        <span className="text-Primary-Color">*</span>
      </p>

      <Input
        className="custom-input"
        placeholder="Enter your score range"
        value={formData.creditRange}
        onChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            creditRange: e.target.value,
          }))
        }
      />
    </div>
  );
}
