import React from "react";
import { FormDataType } from "./SurveyForm";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";

type Step1Props = {
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
};

export default function Step5({ formData, setFormData }: Step1Props) {
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
            value={formData.state}
            onValueChange={(value) =>
              setFormData((prev) => ({
                ...prev,
                state: value,
                otherState: value === "other" ? prev.otherState : "",
              }))
            }
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
      </div>

      {formData.state === "Other" && (
        <div className="mt-4">
          <Label className="text-base font-medium">
            Others<span className="text-Primary-Color">*</span>
          </Label>
          <Input
            className="custom-input"
            placeholder="State name"
            value={formData.otherState}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                otherState: e.target.value,
              }))
            }
          />
        </div>
      )}
    </div>
  );
}
