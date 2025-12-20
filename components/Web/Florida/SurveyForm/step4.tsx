import React from "react";
import { FormDataType } from "./SurveyForm";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Step1Props = {
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
};

export default function Step4({ formData, setFormData }: Step1Props) {
  return (
    <div>
      <p className="mt-6 text-lg font-medium mb-3">
        Please share your contact details so our manager can personally reach
        out to you.
      </p>

      <div className="flex flex-col gap-4">
        <div>
          <Label className="text-base font-medium">
            Full Name<span className="text-Primary-Color">*</span>
          </Label>
          <Input
            className="mt-3 custom-input"
            placeholder="Enter your name"
            value={formData.fullName}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                fullName: e.target.value,
              }))
            }
          />
        </div>

        <div>
          <Label className="text-base font-medium">
            Email Address<span className="text-Primary-Color">*</span>
          </Label>
          <Input
            className="mt-3 custom-input"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
          />
        </div>

        <div>
          <Label className="text-base font-medium">
            Phone Number<span className="text-Primary-Color">*</span>
          </Label>
          <Input
            className="mt-3 custom-input"
            placeholder="Enter your number"
            value={formData.phoneNumber}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                phoneNumber: e.target.value,
              }))
            }
          />
        </div>
      </div>
    </div>
  );
}
