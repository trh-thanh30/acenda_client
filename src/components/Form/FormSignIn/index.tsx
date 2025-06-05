"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// Icon
import {
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";

const schema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .nonempty("Password is required"),
});

type FormData = z.infer<typeof schema>;
export default function FormSignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Đăng nhập:", data);
  };
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
      <div className="flex flex-col gap-6">
        {/* Email */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="email"
            className={`text-sm  ${
              errors.email ? "text-red-500" : "text-slate-500"
            }`}>
            Email
          </label>
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 flex items-center px-3 border-r border-slate-200">
              <AiOutlineMail
                size={22}
                className={`${
                  errors.email ? "text-red-500" : "text-slate-500"
                }`}
              />
            </span>
            <input
              className={`${
                errors.email
                  ? "border-red-200 focus:border-red-200 placeholder:text-red-500"
                  : "placeholder:text-slate-400 focus:border-blue-200"
              } w-full pl-14 border-2 rounded-md p-2 outline-none text-sm text-slate-400 placeholder:text-sm transition-colors  `}
              type="email"
              {...register("email")}
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}
        </div>
        {/* Password */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className={` text-sm
            ${errors.password ? "text-red-500" : "text-slate-500"}`}>
              Password
            </label>
            <button
              onClick={handleShowPassword}
              type="button"
              className="flex items-center gap-1 text-sm text-slate-400 hover:cursor-pointer hover:text-slate-900">
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 flex items-center px-3 border-r border-slate-200">
              <AiOutlineLock
                size={22}
                className={`${
                  errors.email ? "text-red-500" : "text-slate-500"
                }`}
              />
            </span>
            <input
              className={`${
                errors.email
                  ? "border-red-200 focus:border-red-200 placeholder:text-red-500"
                  : "placeholder:text-slate-400 focus:border-blue-200"
              } w-full pl-14 border-2 rounded-md p-2 outline-none text-sm text-slate-400 placeholder:text-sm transition-colors  `}
              type={showPassword ? "text" : "password"}
              {...register("password")}
              name="password"
              placeholder="Enter your password"
            />
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs">{errors.password.message}</p>
          )}
        </div>
      </div>
      {/* Button */}
      <div className="mt-8">
        <p className="text-center text-sm text-slate-400">
          By continuing, you agree to the{" "}
          <span className="underline hover:cursor-pointer hover:text-slate-900">
            Terms of use
          </span>{" "}
          and{" "}
          <span className="underline hover:cursor-pointer  hover:text-slate-900">
            Privacy Policy
          </span>
          .
        </p>
        <div className="flex items-center gap-4  justify-center w-full mt-4">
          <button
            type="submit"
            className="rounded-full border border-slate-900 text-slate-900 p-2 text-sm hover:bg-slate-900 hover:text-slate-50 transition-colors w-full hover:cursor-pointer">
            Sign In
          </button>
        </div>
      </div>
    </form>
  );
}
