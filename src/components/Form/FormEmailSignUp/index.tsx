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
import ButtonBorder from "@/components/ui/Button/ButtonBorder";

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
  userEmail,
  setUserId,
}: FormEmailSignUpProps & {
  setEmail?: (email: string) => void;
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
  // Submit To Handle Sign Up Email
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
        if (setEmail) {
          setEmail(res.data?.email);
        }
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
  // Submit To Handle Active Account
  const handleActiveAccount = async (data: FormData) => {
    const { email } = data;
    setLoading(true);
    try {
      const res = await api.post("/auth/resend", {
        email,
      });
      console.log(res.data);
      if (res.status === 201) {
        if (setUserId) {
          setUserId(res.data?.id);
        }
        setLoading(false);
        toast.success(res.data?.message);
        setStep(2);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("Something went wrong. Please try again.");
    }
  };
  // Submit To Handle Forget Password
  const handleForgetPassword = async (data: FormData) => {
    const { email } = data;
    try {
      setLoading(true);
      const res = await api.post("/auth/retry-password", {
        email,
      });
      if (res.status === 201) {
        setLoading(false);
        toast.success(res.data?.message);
        if (setUserId) {
          setUserId(res.data?.id);
        }
        setStep(2);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setLoading(false);
      toast.error(error.response.data.message);
      console.log(error);
    }
  };
  return (
    <>
      {/* Form sign up email */}
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
      {/* Form active account */}
      {whatCall === "activeAccount" && (
        <form onSubmit={handleSubmit(handleActiveAccount)} noValidate>
          {/* Email Field */}
          <InputWithIcon
            label="Email"
            value={userEmail}
            disabled={true}
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
      {/* Form forget password */}
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
