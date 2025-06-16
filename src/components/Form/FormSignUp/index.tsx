/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import {
  AiOutlineCalendar,
  AiOutlineLock,
  AiOutlineMail,
  AiOutlineUser,
} from "react-icons/ai";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// library
import toast from "react-hot-toast";
// types
import { FormEmailSignUpProps } from "@/types/interface";
// hooks
import useShowPassword from "@/hooks/useShowPassword";
// components
import PolicyAuth from "@/components/PolicyAuth";
import InputWithIcon from "@/components/Input/InputWithIcon";
import ButtonBorder from "@/components/Button/ButtonBorder";
import InputOptionWithIcon from "@/components/Input/InputOptionWithIcon";
import api from "@/lib/axios";
import { HiOutlineUserGroup } from "react-icons/hi2";

const schema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .nonempty("Password is required"),
  first_name: z.string().nonempty("First name is required"),
  last_name: z.string().nonempty("Last name is required"),
  gender: z.enum(["male", "female"], {
    errorMap: () => ({ message: "Gender is required" }),
  }),
  date_of_birth: z.string().nonempty("Date of birth is required"),
});

type FormData = z.infer<typeof schema>;

export default function FormSignUp({
  setStep,
  email,
  setUserId,
}: FormEmailSignUpProps & { email: string }) {
  const [loading, setLoading] = useState<boolean>(false);
  const { handleShowPassword, showPassword } = useShowPassword();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const handleEmailSubmit = async (data: FormData) => {
    const { first_name, last_name, gender, date_of_birth, password } = data;
    try {
      setLoading(true);
      const res = await api.post("/auth/register", {
        password,
        email,
        first_name,
        last_name,
        gender,
        date_of_birth,
      });
      if (res.data.status === 201) {
        if (setUserId) {
          setUserId(res.data?.id);
        }
        toast.success(res.data?.message);
        setStep(3);
        setLoading(false);
      }
    } catch (error: any) {
      const message =
        error.response?.data?.message ||
        "Something went wrong. Please try again.";
      setLoading(false);
      toast.error(message);
    }
  };
  return (
    <form onSubmit={handleSubmit(handleEmailSubmit)} noValidate={true}>
      {/* Email Field */}
      <InputWithIcon
        disabled={true}
        label="Email"
        type="email"
        id="email"
        value={email}
        icon={<AiOutlineMail />}
        register={register}
        error={errors.email}
        errorMessage={errors.email?.message}
      />
      {/* Info Field */}
      <div className="flex flex-col md:flex-row  items-center flex-1 md:gap-2 gap-0">
        {/* First Name */}
        <div className="w-full">
          <InputWithIcon
            disabled={loading}
            label="First Name"
            id="first_name"
            type="text"
            placeholder="Enter your first name"
            icon={<AiOutlineUser />}
            register={register}
            error={errors.first_name}
            errorMessage={errors.first_name?.message}
          />
        </div>

        {/* Last Name */}
        <div className="w-full">
          <InputWithIcon
            disabled={loading}
            label="Last Name"
            id="last_name"
            type="text"
            placeholder="Enter your last name"
            icon={<AiOutlineUser />}
            register={register}
            error={errors.last_name}
            errorMessage={errors.last_name?.message}
          />
        </div>
      </div>

      {/* Password Field */}
      <InputWithIcon
        disabled={loading}
        label="Password"
        id="password"
        handleShowPassword={handleShowPassword}
        showPassword={showPassword}
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
        icon={<AiOutlineLock />}
        register={register}
        error={errors.password}
        errorMessage={errors.password?.message}
      />
      {/* Gender Field */}
      <InputOptionWithIcon
        register={register}
        icon={<HiOutlineUserGroup />}
        error={errors.gender}
        errorMessage={errors.gender?.message}
      />
      {/* Day of Birth */}
      <InputWithIcon
        disabled={loading}
        label="Day of Birth"
        type="date"
        id="date_of_birth"
        placeholder="Enter your last name"
        icon={<AiOutlineCalendar />}
        register={register}
        error={errors.date_of_birth}
        errorMessage={errors.date_of_birth?.message}
      />
      {/* Policy */}
      <PolicyAuth />
      {/* Submit */}
      <div className="flex justify-end mt-5">
        <ButtonBorder
          text="Sign Up"
          isValid={!isValid || !loading}
          loading={loading}
        />
      </div>
    </form>
  );
}
