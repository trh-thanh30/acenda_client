import React, { useState } from "react";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AiOutlineMail } from "react-icons/ai";
import { FormEmailSignUpProps } from "@/types/interface";
// library
import toast from "react-hot-toast";
import api from "@/lib/axios";

// components
import PolicyAuth from "@/components/PolicyAuth";
import InputWithIcon from "@/components/Input/InputWithIcon";
import ButtonBorder from "@/components/Button/ButtonBorder";

const schema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
});

type FormData = z.infer<typeof schema>;

export default function FormEmailSignUp({
  setStep,
  setEmail,
  whatCall,
}: FormEmailSignUpProps & {
  setEmail: (email: string) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange", // Cập nhật isValid liên tục
  });
  const [loading, setLoading] = useState<boolean>(false);
  const handleSignUpEmail = async (data: FormData) => {
    setLoading(true);
    try {
      const { email } = data;
      const res = await api.post("/users/already-email", {
        email,
      });
      console.log(res.status);
      if (res.status === 201) {
        toast.success("Now please fill your information.");
        setEmail(res.data?.email);
        setStep(2);
        setLoading(false);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };
  const handleActiveAccount = async (data: FormData) => {
    setStep(2);
    setEmail(data.email);
  };
  const handleForgetPassword = async (data: FormData) => {
    setStep(2);
    setEmail(data.email);
  };
  return (
    <>
      {whatCall === "signupEmail" && (
        <form onSubmit={handleSubmit(handleSignUpEmail)} noValidate>
          {/* Email Field */}
          <InputWithIcon
            label="Email"
            disabled={loading}
            type="email"
            id="email"
            icon={<AiOutlineMail />}
            register={register}
            error={errors.email}
            errorMessage={errors.email?.message}
            placeholder="Enter your email"
          />
          {/* Policy */}
          <PolicyAuth />
          {/* Submit */}
          <div className="flex justify-end mt-5">
            <ButtonBorder
              loading={loading}
              text="Continue"
              isValid={isValid && !loading}
            />
          </div>
        </form>
      )}
      {whatCall === "activeAccount" && (
        <form onSubmit={handleSubmit(handleActiveAccount)} noValidate>
          {/* Email Field */}
          <InputWithIcon
            label="Email"
            disabled={loading}
            type="email"
            id="email"
            icon={<AiOutlineMail />}
            register={register}
            error={errors.email}
            errorMessage={errors.email?.message}
            placeholder="Enter your email"
          />
          {/* Policy */}
          <PolicyAuth />
          {/* Submit */}
          <div className="flex justify-end mt-5">
            <ButtonBorder
              loading={loading}
              text="Continue"
              isValid={isValid && !loading}
            />
          </div>
        </form>
      )}
      {whatCall === "forgetPassword" && (
        <form onSubmit={handleSubmit(handleForgetPassword)} noValidate>
          {/* Email Field */}
          <InputWithIcon
            label="Email"
            disabled={loading}
            type="email"
            id="email"
            icon={<AiOutlineMail />}
            register={register}
            error={errors.email}
            errorMessage={errors.email?.message}
            placeholder="Enter your email"
          />
          {/* Policy */}
          <PolicyAuth />
          {/* Submit */}
          <div className="flex justify-end mt-5">
            <ButtonBorder
              loading={loading}
              text="Continue"
              isValid={isValid && !loading}
            />
          </div>
        </form>
      )}
    </>
  );
}
