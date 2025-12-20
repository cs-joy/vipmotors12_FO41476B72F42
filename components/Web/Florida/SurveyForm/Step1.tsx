import React from "react";
import { Input } from "@/components/ui/input";
import { FormDataType } from "./SurveyForm";

type Step1Props = {
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
};

export default function Step1({ formData, setFormData }: Step1Props) {
  return (
    <div>
      <p className="text-base md:text-lg font-medium">
        Hello, Please fill out the following form, so we can answer all your
        questions :
      </p>

      <p className="mt-6 text-lg font-medium mb-3">
        What&apos;s the new car make and model you&apos;re looking for?
        <span className="text-Primary-Color">*</span>
      </p>

      <Input
        className="custom-input"
        placeholder="Enter your car model"
        value={formData.carType}
        onChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            carType: e.target.value,
          }))
        }
      />
    </div>
  );
}
