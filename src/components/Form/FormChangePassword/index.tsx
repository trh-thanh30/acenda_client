/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  AiOutlineCode,
  AiOutlineIdcard,
  AiOutlineKey,
  AiOutlineLock,
} from "react-icons/ai";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
// Components
import InputWithIcon from "@/components/Input/InputWithIcon";
import ButtonBorder from "@/components/ui/Button/ButtonBorder";
import useShowPassword from "@/hooks/useShowPassword";
import api from "@/lib/axios";
import toast from "react-hot-toast";

const schema = z.object({
  id: z.string().nonempty("ID is required"),
  code: z.string().nonempty("Code is required"),
  password: z.string().nonempty("New password is required"),
  confirmPassword: z.string().nonempty("Confirm password is required"),
});

type FormData = z.infer<typeof schema>;
export default function FormChangePassword({
  userId,
  closeModal,
}: {
  userId: string;
  closeModal: () => void;
}) {
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
  const onSubmit = async (data: FormData) => {
    const { code, confirmPassword, id, password } = data;
    setLoading(true);
    try {
      const res = await api.post("/auth/change-password", {
        code,
        id,
        password,
        confirmPassword,
      });
      if (res.status === 201) {
        toast.success(res.data?.message);
        setLoading(false);
        if (closeModal) {
          closeModal();
        }
      }
    } catch (error: any) {
      setLoading(false);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="mt-2">
      <p className="text-sm text-center text-doveGray-600 font-medium">
        You have successfully signed up. Please check your email to verify your
        account.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWithIcon
          label="User ID"
          id="id"
          disabled
          value={userId}
          error={errors.id}
          errorMessage={errors.id?.message}
          type="text"
          register={register}
          icon={<AiOutlineIdcard />}
        />
        <InputWithIcon
          label="Code"
          id="code"
          type="text"
          placeholder="Enter code in email"
          error={errors.code}
          errorMessage={errors.code?.message}
          register={register}
          icon={<AiOutlineCode />}
        />

        <InputWithIcon
          label="New Password"
          id="password"
          type={showPassword ? "text" : "password"}
          handleShowPassword={handleShowPassword}
          placeholder={"Enter new password"}
          error={errors.password}
          errorMessage={errors.password?.message}
          register={register}
          icon={<AiOutlineLock />}
        />
        <InputWithIcon
          label="Confirm Password"
          id="confirmPassword"
          type={showPassword ? "text" : "password"}
          handleShowPassword={handleShowPassword}
          placeholder={"Confirm new password"}
          error={errors.confirmPassword}
          errorMessage={errors.confirmPassword?.message}
          register={register}
          icon={<AiOutlineKey />}
        />
        {/* Submit */}
        <div className="flex justify-end mt-5">
          <ButtonBorder
            text="Submit"
            isValid={isValid && !loading}
            loading={loading}
          />
        </div>
      </form>
    </div>
  );
}
