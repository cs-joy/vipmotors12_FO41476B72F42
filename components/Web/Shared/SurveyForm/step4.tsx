/** @format */

"use client";
import React from "react";
import { FormDataType } from "./SurveyForm";
import { useFormContext, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Step4() {
  const {
    register,
    control,
    watch,
    formState: { errors },
  } = useFormContext<FormDataType>();

  const selectedBudget = watch("budgetRange");

  return (
    <div>
      {/* Credit Score */}
      <p className='mt-6 text-lg font-medium mb-3'>
        What is your approximate credit score range?{" "}
        <span className='text-Primary-Color'>*</span>
      </p>

      <Input
        type='text'
        className='custom-input'
        placeholder='Enter your score range'
        {...register("creditRange", {
          required: "Credit score range is required",
        })}
      />

      {errors.creditRange && (
        <p className='error-msg'>{errors.creditRange.message}</p>
      )}

      {/* Timeframe */}
      <p className='mt-6 text-lg font-medium mb-3'>
        When are you planning to purchase your next vehicle?
        <span className='text-Primary-Color'>*</span>
      </p>

      <Controller
        name='timeFrame'
        control={control}
        rules={{ required: "Timeframe is required" }}
        render={({ field }) => (
          <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger className='w-full custom-input cursor-pointer'>
              <SelectValue placeholder='Select your timeframe' />
            </SelectTrigger>

            <SelectContent position='popper'>
              <SelectItem value='ASAP'>ASAP</SelectItem>
              <SelectItem value='2 weeks'>2 weeks</SelectItem>
              <SelectItem value='30 days'>30 days</SelectItem>
            </SelectContent>
          </Select>
        )}
      />

      {errors.timeFrame && <p className='error-msg'>{errors.timeFrame.message}</p>}
    </div>
  );
}

// /** @format */
// "use client";
// import React from "react";
// import { FormDataType } from "./SurveyForm";
// import { useFormContext } from "react-hook-form";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// export default function Step4() {
//   const {
//     register,
//     formState: { errors },
//   } = useFormContext<FormDataType>();
//   const selectedBudget = watch("budget");
//   return (
//     <div>
//       <p className='mt-6 text-lg font-medium mb-3'>
//         What is your approximate credit score range?{" "}
//         <span className='text-Primary-Color'>*</span>
//       </p>

//       <Input
//         type='text'
//         className='custom-input'
//         placeholder='Enter your score range'
//         {...register("creditRange", {
//           required: "Credit score range is required",
//           pattern: {
//             value: /^.*$/,
//             message: "Credit score must be a number",
//           },
//         })}
//       />

//       {errors.creditRange && (
//         <p className='error-msg'>{errors.creditRange.message}</p>
//       )}
//       {/* <p className='mt-6 text-lg font-medium mb-3'>
//         Timeframe <span className='text-Primary-Color'>*</span>
//       </p>

//       <select
//         className='custom-input w-full'
//         {...register("creditRange", {
//           required: "Credit score range is required",
//         })}>
//         <option value='' className='w-full'>
//           Select your credit score range
//         </option>
//         <option value='300-579'>ASAP</option>
//         <option value='580-669'>/2 weeks</option>
//         <option value='670+'>/30 days</option>
//       </select>

//       {errors.creditRange && (
//         <p className='error-msg'>{errors.creditRange.message}</p>
//       )} */}
//       <div>
//         <p className='mt-6 text-lg font-medium mb-3'>
//           What is your estimated budget range?
//           <span className='text-Primary-Color'>*</span>
//         </p>

//         <Select
//           value={selectedBudget}
//           onValueChange={(value) => {
//             SelectValue("budget", value, { shouldValidate: true });
//             {
//               /*}
//           if (value !== "Other")
//             setValue("budgetOther", "", { shouldValidate: true });
//           */
//             }
//           }}>
//           <SelectTrigger className='w-full custom-input cursor-pointer'>
//             <SelectValue placeholder='Select your range' />
//           </SelectTrigger>

//           <SelectContent position='popper'>
//             <SelectItem value='$300-$400'>$300-$400</SelectItem>
//             <SelectItem value='$400-$500'>$400-$500</SelectItem>
//             <SelectItem value='$500-$600'>$500-$600</SelectItem>
//             <SelectItem value='$600-$700'>$600-$700</SelectItem>
//             <SelectItem value='$700-$800'>$700-$800</SelectItem>
//             <SelectItem value='$800-$900'>$800-$900</SelectItem>
//             <SelectItem value='$900-$1000'>$900-$1000</SelectItem>
//             <SelectItem value='$1000+'>$1000+</SelectItem>
//           </SelectContent>
//         </Select>

//         {errors.budget && <p className='error-msg'>{errors.budget.message}</p>}

//         {/* Hidden Budget Input */}
//         <input
//           type='hidden'
//           {...register("budget", { required: "Budget range is required" })}
//         />
//       </div>
//     </div>
//   );
// }
