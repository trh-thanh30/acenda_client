import React from "react";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AiOutlineMail } from "react-icons/ai";
import { FormEmailSignUpProps } from "@/types/interface";

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

  const handleEmailSubmit = (data: FormData) => {
    setEmail(data.email);
    setStep(2);
  };
  return (
    <form onSubmit={handleSubmit(handleEmailSubmit)} noValidate>
      {/* Email Field */}
      <InputWithIcon
        label="Email"
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
        <ButtonBorder text="Continue" isValid={isValid} />
      </div>
    </form>
  );
}
