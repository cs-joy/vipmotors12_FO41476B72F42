"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

import { useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";

interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    try {
      // console.log("Submitting:", data);

      /*  const formattedData = {
        contact: {
          fullname: data.fullName,
          email: data.email,
          phone: data.phoneNumber,
          location: data.state === "Other" ? data.otherState : data.state,
          "zip-code": data.zipcode,
          "budget-range":
            data.budget === "Other" ? data.budgetOther : data.budget,
          "credit-score-range": data.creditRange,
        },
        vehicle: {
          name: data.carType,
        },
      }; */

      // console.log("Formatted data:", formattedData);

      /*  const response = await fetch(
        "https://services.leadconnectorhq.com/hooks/N5ckr1LzkF1akGRPJvlC/webhook-trigger/702a517b-6808-481e-8179-3bc64a02d38e",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formattedData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        Swal.fire({
          title: "Success!",
          text: "Thank you for taking the time to complete our survey!",
          icon: "success",
          confirmButtonText: "Ok",
        });

        reset();
      } else {
        Swal.fire({
          title: "Error!",
          text: result.message || "Something went wrong. Please try again.",
          icon: "error",
          confirmButtonText: "Ok",
        });
      } */

      Swal.fire({
        title: "Success!",
        text: "We receive your message successfully",
        icon: "success",
        confirmButtonText: "Ok",
      });
      reset();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="py-[75px] bg-[#B599451A]">
      <div className="custom-container-2">
        {/* Title */}
        <div className="max-w-250 w-full mx-auto text-center space-y-2">
          <h1 className="text-[38px] md:text-[48px] font-semibold">
            Get Your Instant <br />
            <span className="text-Primary-Color">Purchase Quote</span> Today
          </h1>

          <p className="text-base md:text-lg">
            Fast approvals, personalized offers, and 24/7 concierge support.
          </p>
        </div>

        {/* Content */}
        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          <div>
            <Image
              src="/images/contact.png"
              height={300}
              width={300}
              unoptimized
              quality={100}
              loading="eager"
              className="max-h-125 w-full object-cover object-top rounded-xl"
              alt="Contact Image"
            />
          </div>
          <div className="bg-White-Color py-10 px-4 sm:px-6 rounded-lg border border-White-Gray-Color">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col justify-center">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <Label className="contact-label">First Name</Label>
                    <Input
                      className="custom-input"
                      placeholder="Enter Name"
                      {...register("firstName", {
                        required: "First name is required",
                      })}
                    />
                    {errors.firstName && (
                      <p className="error-msg">{errors.firstName.message}</p>
                    )}
                  </div>

                  <div>
                    <Label className="contact-label">Last Name</Label>
                    <Input
                      className="custom-input"
                      placeholder="Enter Name"
                      {...register("lastName", {
                        required: "Last name is required",
                      })}
                    />
                    {errors.lastName && (
                      <p className="error-msg">{errors.lastName.message}</p>
                    )}
                  </div>

                  <div>
                    <Label className="contact-label">Email</Label>
                    <Input
                      className="custom-input"
                      placeholder="Enter Email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Please enter a valid email",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="error-msg">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <Label className="contact-label">Phone Number</Label>
                    <Input
                      className="custom-input"
                      placeholder="Enter Phone Number"
                      {...register("phone", {
                        required: "Phone number is required",
                      })}
                    />
                    {errors.phone && (
                      <p className="error-msg">{errors.phone.message}</p>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <Label className="contact-label">Message</Label>
                    <Textarea
                      className="custom-input min-h-25!"
                      placeholder="Write message here."
                      {...register("message", {
                        required: "Write your message",
                      })}
                    />
                    {errors.message && (
                      <p className="error-msg">{errors.message.message}</p>
                    )}
                  </div>
                </div>

                <button className="mt-6 cursor-pointer w-full bg-Primary-Color text-white text-base md:text-lg font-medium py-3 px-4 rounded hover:opacity-[.9]">
                  Tell Us About Your Dream Ride
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
