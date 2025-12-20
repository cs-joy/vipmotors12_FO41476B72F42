import React from "react";
import { FormDataType } from "./SurveyForm";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Step1Props = {
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
};

export default function Step6({ formData, setFormData }: Step1Props) {
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
            value={formData.zipcode}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                zipcode: e.target.value,
              }))
            }
          />
        </div>
      </div>
    </div>
  );
}
