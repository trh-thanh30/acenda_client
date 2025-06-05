"use client";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
// Components
import FormSignUp from "@/components/Form/FormSignUp";
import Logo from "@/components/Logo";
import ImageAuth from "@/components/ImageAuth";

const schema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
});

type FormData = z.infer<typeof schema>;

export default function Page() {
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange", // Cập nhật isValid liên tục
  });
  console.log(isValid);

  const handleEmailSubmit = (data: FormData) => {
    console.log("Valid email:", data.email);
    setStep(2);
  };

  return (
    <>
      <div className="flex flex-col p-10 mb-5 ">
        <Logo />
        <div className="flex flex-col mt-10 border border-doveGray-200 rounded-md p-4">
          <h1 className="mt-2 text-4xl text-center text-doveGray-900 font-medium">
            Create an account
          </h1>
          <span className="text-center mt-1 text-doveGray-400 text-sm">
            Enter your email to join us or sign in.
          </span>

          {step === 1 && (
            <form onSubmit={handleSubmit(handleEmailSubmit)} noValidate>
              {/* Email Field */}
              <div className="flex flex-col gap-1 mt-4">
                <label
                  htmlFor="email"
                  className={`text-sm ${
                    errors.email ? "text-red-500" : "text-doveGray-500"
                  }`}>
                  Email
                </label>
                <div className="relative w-full">
                  <span className="absolute inset-y-0 left-0 flex items-center px-3 border-r border-doveGray-200">
                    <AiOutlineMail
                      size={22}
                      className={`${
                        errors.email ? "text-red-500" : "text-doveGray-500"
                      }`}
                    />
                  </span>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    {...register("email")}
                    className={`w-full pl-14 border-2 rounded-md p-2 outline-none text-sm transition-colors
                    ${
                      errors.email
                        ? "border-red-200 focus:border-red-300 placeholder:text-red-400"
                        : "border-doveGray-200 focus:border-midnightBlue-200 placeholder:text-doveGray-400"
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email.message}</p>
                )}
              </div>

              {/* Policy */}
              <p className="text-sm text-center text-doveGray-500 mt-5">
                By continuing, I agree to Acenda{" "}
                <span className="font-medium underline cursor-pointer">
                  Privacy Policy
                </span>{" "}
                and{" "}
                <span className="font-medium underline cursor-pointer">
                  Terms of Use
                </span>
                .
              </p>

              {/* Submit */}
              <div className="flex justify-end mt-5">
                <button
                  type="submit"
                  disabled={!isValid}
                  className={`text-base rounded-full py-2 px-5 font-medium transition-colors border
                  ${
                    isValid
                      ? "border-slate-900 hover:bg-slate-900 hover:text-primary-50 hover:cursor-pointer"
                      : "border-doveGray-300 bg-slate-100 text-doveGray-400 cursor-not-allowed"
                  }`}>
                  Continue
                </button>
              </div>
            </form>
          )}

          {/* Step 2 */}
          {step === 2 && <FormSignUp />}

          {/* Link to Sign In */}
          <p className="text-sm mt-4 text-center">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="font-medium underline hover:cursor-pointer">
              Sign In
            </Link>
          </p>
        </div>
      </div>
      {/* Image */}
      <ImageAuth />
    </>
  );
}
